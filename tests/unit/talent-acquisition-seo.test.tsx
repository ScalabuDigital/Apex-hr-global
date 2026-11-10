import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import { getService, getServiceCategory, getServicesByCategory, services, serviceCategories } from "@/config/services";
import { serviceCategoryContent, serviceContent } from "@/content/services-data";
import { talentRoleContent } from "@/content/talent-roles-data";
import { talentRoleEnhancements } from "@/content/talent-roles-enhancements";
import { extractInlineLinks, stripInlineLinks } from "@/components/content/inline-link-text";
import { ServiceCategoryTemplate } from "@/components/templates/service-category-template";
import { ServicePageTemplate } from "@/components/templates/service-page-template";
import { TalentRoleTemplate } from "@/components/templates/talent-role-template";
import { routes } from "@/config/routes";
import type { ContentGuide } from "@/types/content";

/**
 * Safeguards for the talent-acquisition semantic SEO pass
 * (docs/seo/talent-acquisition-research.md).
 */

const PILLAR = "recruitment-and-talent-acquisition-firm-in-the-uk";
const CHILDREN = [
  "permanent-recruitment-firm-in-the-uk",
  "executive-search-firm-in-the-uk",
  "contract-staffing-firm-in-the-uk",
  "recruitment-process-outsourcing-rpo-firm-in-the-uk",
  "graduate-schemes-and-early-careers-design-firm-in-the-uk",
];

/** Insight articles verified live (HTTP 200, self-canonical) on 9 November 2026. */
const VERIFIED_INSIGHT_PATHS = new Set([
  "/talent-acquisition-vs-recruitment-vs-talent-management/",
  "/what-is-talent-acquisition-and-retention-in-hrm/",
  "/rpo-vs-recruitment-agency/",
  "/recruitment-process-outsourcing-rpo/",
  "/permanent-recruitment-solutions-how-the-hiring-process-works-in-the-uk/",
  "/contract-staffing-vs-permanent-staffing/",
  "/when-to-use-contract-staffing/",
  "/executive-search-vs-recruitment-agency-which-is-better-for-senior-hires/",
  "/what-does-an-executive-search-consultant-do/",
  "/design-graduate-scheme-attracts-retains-uk-talent/",
  "/graduate-schemes-vs-apprenticeships/",
]);

/** Official/authoritative external sources cited (verified 9 November 2026). */
const ALLOWED_EXTERNAL_HOSTS = new Set(["www.gov.uk", "www.acas.org.uk", "ico.org.uk", "www.cipd.org", "ise.org.uk"]);

const GUARANTEE_LANGUAGE = /\bguarantee(d|s)?\b|\bpromise(d|s)?\b|\b100%\b|\bwill (reduce|increase|improve|cut|boost|guarantee)\b/i;
const LEADING_CLAIM = /\bleading\b(?!\s+to\b)/i;
const FABRICATION = /£\d|\bcurrently hiring\b|\blive vacanc(y|ies)\b|\bplacement rate\b|\bcandidates? (available|on file|in our database)\b|\bclients? (include|such as)\b|award-winning|accredited by/i;

const pillar = serviceCategoryContent.find((c) => c.slug === PILLAR)!;
const children = CHILDREN.map((slug) => serviceContent.find((c) => c.slug === slug)!);

function guideStrings(guide: ContentGuide | undefined): string[] {
  if (!guide) return [];
  return [guide.intro ?? "", ...guide.sections.flatMap((section) => section.paragraphs)];
}

function allLinkedStrings(): string[] {
  return [
    pillar.lifecycleIntro ?? "",
    ...(pillar.lifecycle ?? []).map((stage) => stage.detail),
    ...guideStrings(pillar.guide),
    ...children.flatMap((child) => guideStrings(child.guide)),
  ];
}

/** next/link drops trailing slashes in the jsdom test renderer; compare without them. */
function hrefsOf(container: HTMLElement): string[] {
  return [...container.querySelectorAll("a")].map((a) => (a.getAttribute("href") ?? "").replace(/\/$/, ""));
}
const noSlash = (path: string) => path.replace(/\/$/, "");

function isKnownInternalPath(href: string): boolean {
  const serviceMatch = href.match(/^\/services\/([^/]+)\/$/);
  if (serviceMatch) {
    return Boolean(getService(serviceMatch[1]) ?? getServiceCategory(serviceMatch[1]));
  }
  const roleMatch = href.match(/^\/talent-acquisition\/([^/]+)\/$/);
  if (roleMatch) return talentRoleContent.some((role) => role.slug === roleMatch[1]);
  return VERIFIED_INSIGHT_PATHS.has(href);
}

describe("Talent acquisition cluster — content coverage", () => {
  it("gives the pillar a lifecycle, guide, role directory, insights and a proper meta description", () => {
    expect(pillar.lifecycle?.length).toBeGreaterThanOrEqual(6);
    expect(pillar.lifecycleHeading).toBe("How does the talent acquisition process work?");
    expect(pillar.guide?.sections.length).toBeGreaterThanOrEqual(4);
    expect(pillar.showRoleDirectory).toBe(true);
    expect(pillar.relatedInsights?.length).toBeGreaterThan(0);
    expect(pillar.metaDescription!.length).toBeGreaterThanOrEqual(120);
    expect(pillar.metaDescription!.length).toBeLessThanOrEqual(160);
    expect(pillar.metaDescription).not.toMatch(LEADING_CLAIM);
  });

  it("gives every child service a guide with H3 sections, related insights and extra FAQs", () => {
    for (const child of children) {
      expect(child.guide, child.slug).toBeDefined();
      expect(child.guide!.sections.length, child.slug).toBeGreaterThanOrEqual(4);
      expect(child.relatedInsights?.length, child.slug).toBeGreaterThan(0);
      expect([...child.faqs, ...(child.additionalFaqs ?? [])].length, child.slug).toBeGreaterThanOrEqual(5);
      expect(child.metaDescription.length, child.slug).toBeLessThanOrEqual(160);
    }
  });

  it("uses a unique guide H2 on every page in the cluster", () => {
    const headings = [pillar.guide!.heading, pillar.lifecycleHeading!, ...children.map((c) => c.guide!.heading)];
    expect(new Set(headings).size).toBe(headings.length);
  });

  it("does not repeat any FAQ question between the pillar and its children", () => {
    const questions = [
      ...pillar.faqs.map((f) => f.question),
      ...children.flatMap((c) => [...c.faqs, ...(c.additionalFaqs ?? [])].map((f) => f.question)),
    ];
    const duplicates = questions.filter((q, index) => questions.indexOf(q) !== index);
    expect(duplicates).toEqual([]);
  });

  it("contains no guarantee, 'leading' or fabricated-proof language in new guide copy", () => {
    for (const text of allLinkedStrings()) {
      const plain = stripInlineLinks(text);
      expect(plain).not.toMatch(GUARANTEE_LANGUAGE);
      expect(plain).not.toMatch(LEADING_CLAIM);
      expect(plain).not.toMatch(FABRICATION);
      expect(plain).not.toMatch(/\badvisor\b/i);
    }
  });
});

describe("Talent acquisition cluster — internal linking", () => {
  it("resolves every inline link to a known route, verified insight or approved official source", () => {
    const failures: string[] = [];
    for (const text of allLinkedStrings()) {
      for (const { href } of extractInlineLinks(text)) {
        if (href.startsWith("/")) {
          if (!href.endsWith("/") || !isKnownInternalPath(href)) failures.push(href);
        } else if (!ALLOWED_EXTERNAL_HOSTS.has(new URL(href).hostname)) {
          failures.push(href);
        }
      }
    }
    expect(failures).toEqual([]);
  });

  it("only lists verified insight articles", () => {
    const insights = [...(pillar.relatedInsights ?? []), ...children.flatMap((c) => c.relatedInsights ?? [])];
    for (const insight of insights) expect(VERIFIED_INSIGHT_PATHS.has(insight.path), insight.path).toBe(true);
  });

  it("links the pillar to all five specialist services from its lifecycle copy", () => {
    const hrefs = (pillar.lifecycle ?? []).flatMap((stage) => extractInlineLinks(stage.detail).map((l) => l.href));
    for (const slug of CHILDREN) expect(hrefs, slug).toContain(`/services/${slug}/`);
  });

  it("links every child guide back to the pillar in context", () => {
    for (const child of children) {
      const hrefs = guideStrings(child.guide).flatMap((t) => extractInlineLinks(t).map((l) => l.href));
      expect(hrefs, child.slug).toContain(`/services/${PILLAR}/`);
    }
  });

  it("uses descriptive anchor text rather than generic phrases", () => {
    for (const text of allLinkedStrings()) {
      for (const { label } of extractInlineLinks(text)) {
        expect(label).not.toMatch(/^(click here|here|read more|this page|learn more)$/i);
      }
    }
  });
});

describe("Talent acquisition cluster — rendered pages", () => {
  it("renders the pillar's process, guide and a crawlable link to all 62 role pages with one H1", () => {
    const category = getServiceCategory(PILLAR)!;
    const { container } = render(
      <ServiceCategoryTemplate
        title={category.title}
        breadcrumbTrail={[routes.services]}
        category={pillar}
        childServices={getServicesByCategory(PILLAR)}
      />,
    );
    expect(container.querySelectorAll("h1")).toHaveLength(1);
    const h2s = [...container.querySelectorAll("h2")].map((h) => h.textContent);
    expect(h2s).toContain("How does the talent acquisition process work?");
    expect(h2s).toContain(pillar.guide!.heading);
    const hrefs = hrefsOf(container);
    for (const role of talentRoleContent) expect(hrefs).toContain(noSlash(`/talent-acquisition/${role.slug}/`));
    for (const slug of CHILDREN) expect(hrefs).toContain(noSlash(`/services/${slug}/`));
    // Inline-link markup must never leak into the rendered text.
    expect(container.textContent).not.toMatch(/\]\(/);
  });

  it("leaves the other nine service families without the new sections", () => {
    for (const category of serviceCategories.filter((c) => c.slug !== PILLAR)) {
      const content = serviceCategoryContent.find((c) => c.slug === category.slug)!;
      expect(content.lifecycle, category.slug).toBeUndefined();
      expect(content.guide, category.slug).toBeUndefined();
      expect(content.showRoleDirectory, category.slug).toBeUndefined();
    }
  });

  it.each(CHILDREN)("renders the %s guide, related insights and one H1", (slug) => {
    const service = getService(slug)!;
    const content = serviceContent.find((c) => c.slug === slug)!;
    const { container } = render(
      <ServicePageTemplate title={service.title} breadcrumbTrail={[routes.services]} service={content} showForEmployersLink />,
    );
    expect(container.querySelectorAll("h1")).toHaveLength(1);
    expect([...container.querySelectorAll("h2")].map((h) => h.textContent)).toContain(content.guide!.heading);
    const h3s = [...container.querySelectorAll("h3")].map((h) => h.textContent);
    for (const section of content.guide!.sections) expect(h3s).toContain(section.heading);
    const hrefs = hrefsOf(container);
    for (const insight of content.relatedInsights!) expect(hrefs).toContain(noSlash(insight.path));
    expect(container.textContent).not.toMatch(/\]\(/);
    for (const anchor of container.querySelectorAll('a[href^="https://"]')) {
      expect(anchor.getAttribute("rel")).toBe("noopener noreferrer");
    }
  });

  it("only adds guides to the recruitment children, leaving other services unchanged", () => {
    const withGuides = services.filter((s) => serviceContent.find((c) => c.slug === s.slug)?.guide).map((s) => s.slug);
    expect(withGuides.sort()).toEqual([...CHILDREN].sort());
  });
});

describe("Talent acquisition role pages", () => {
  it("has an enhancement for every one of the 62 roles and no orphan enhancements", () => {
    expect(Object.keys(talentRoleEnhancements).sort()).toEqual(talentRoleContent.map((r) => r.slug).sort());
  });

  it("gives every role a unique SEO title and a 110–160 character meta description", () => {
    expect(new Set(talentRoleContent.map((r) => r.seoTitle)).size).toBe(62);
    for (const role of talentRoleContent) {
      expect(role.seoTitle, role.slug).toBeTruthy();
      expect(`${role.seoTitle} | Apex HR`.length, role.slug).toBeLessThanOrEqual(65);
      expect(role.metaDescription.length, role.slug).toBeGreaterThanOrEqual(110);
      expect(role.metaDescription.length, role.slug).toBeLessThanOrEqual(160);
      expect(role.metaDescription, role.slug).not.toMatch(LEADING_CLAIM);
    }
  });

  it("gives every role three challenges and role-specific FAQs with no question repeated across roles", () => {
    const specificQuestions: string[] = [];
    for (const role of talentRoleContent) {
      expect(role.hiringChallenges.length, role.slug).toBeGreaterThanOrEqual(3);
      expect(role.faqs.length, role.slug).toBeGreaterThanOrEqual(3);
      specificQuestions.push(...role.faqs.filter((f) => f.id !== "availability").map((f) => f.question));
    }
    expect(new Set(specificQuestions).size).toBe(specificQuestions.length);
  });

  it("keeps the availability disclaimer FAQ last on every role", () => {
    for (const role of talentRoleContent) expect(role.faqs.at(-1)?.id, role.slug).toBe("availability");
  });

  it("renders a link to the pillar and to related roles in the same family", () => {
    const role = talentRoleContent.find((r) => r.slug === "it-operations-technicians")!;
    const { container } = render(<TalentRoleTemplate breadcrumbTrail={[]} role={role} />);
    const hrefs = hrefsOf(container);
    expect(hrefs).toContain(noSlash(`/services/${PILLAR}/`));
    const siblings = talentRoleContent.filter((r) => r.roleFamily === role.roleFamily && r.slug !== role.slug);
    expect(hrefs).toContain(noSlash(`/talent-acquisition/${siblings[0].slug}/`));
    expect(hrefs).not.toContain(noSlash(`/talent-acquisition/${role.slug}/`));
    expect(container.querySelectorAll("h1")).toHaveLength(1);
    // Acronyms survive mid-sentence casing.
    expect(container.textContent).toMatch(/supports IT operations technicians hiring/);
    expect([...container.querySelectorAll("h3")].map((h) => h.textContent)).toContain("Related IT & data roles");
  });
});
