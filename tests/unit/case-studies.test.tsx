import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import { getService } from "@/config/services";
import { getSector } from "@/config/sectors";
import { routes } from "@/config/routes";
import { contentManifest } from "@/content/manifest";
import { serviceContent } from "@/content/services-data";
import {
  CASE_STUDY_ROUTE_STATUS,
  ILLUSTRATIVE_LABEL,
  caseStudyContent,
  caseStudyPath,
  getCaseStudiesForService,
  isCaseStudyIndexable,
  type CaseStudyContent,
} from "@/content/case-studies-data";
import { extractInlineLinks } from "@/components/content/inline-link-text";
import { CaseStudyTemplate } from "@/components/templates/case-study-template";
import { ServicePageTemplate } from "@/components/templates/service-page-template";
import { getLocalSitemapGroups } from "@/lib/seo/sitemap-data";
import CaseStudiesPage from "@/app/case-study/page";

/**
 * Safeguards for docs/URL-DECISION-REGISTER.md D-020 (illustrative case
 * studies). These encode the publishing rules, not just the current copy.
 */

const ALLOWED_EXTERNAL_HOSTS = new Set(["www.gov.uk", "www.acas.org.uk", "www.cipd.org", "www.fca.org.uk", "www.hse.gov.uk"]);
const GUARANTEE_LANGUAGE = /\bguarantee(d|s)?\b|\bpromise(d|s)?\b|\b100%\b|\bwill (reduce|increase|improve|cut|boost|guarantee)\b/i;
const CLAIMED_OUTCOME = /\b(we|apex hr) (delivered|achieved|reduced|increased|saved|placed|cut)\b|\bresulted in\b|\bclient said\b|£\d/i;
const AMERICAN_SPELLING = /\b(organization|optimize|program\b|advisor\b|labor\b|center\b)/i;

function allText(cs: CaseStudyContent): string[] {
  return [
    cs.title,
    cs.summary,
    cs.executiveSummary,
    ...cs.clientBackground,
    cs.challenge.intro,
    ...cs.challenge.points,
    ...cs.objectives,
    cs.approach.intro ?? "",
    ...cs.approach.sections.flatMap((s) => [s.heading, ...s.paragraphs]),
    cs.solutions.intro ?? "",
    ...cs.solutions.sections.flatMap((s) => [s.heading, ...s.paragraphs]),
    ...cs.implementation.map((p) => p.detail),
    cs.results.intro,
    ...cs.results.measures.map((m) => m.detail),
    ...cs.takeaways,
    ...cs.faqs.flatMap((f) => [f.question, f.answer]),
    cs.cta.heading,
    cs.cta.body,
  ];
}

const manifestPaths = new Set(contentManifest.map((entry) => entry.canonicalPath));

describe("case-study records", () => {
  it("has at least one record and unique slugs, titles, SEO titles and meta descriptions", () => {
    expect(caseStudyContent.length).toBeGreaterThan(0);
    for (const key of ["slug", "title", "seoTitle", "metaDescription", "primaryKeyword"] as const) {
      const values = caseStudyContent.map((cs) => cs[key]);
      expect(new Set(values).size, key).toBe(values.length);
    }
  });

  it.each(caseStudyContent.map((cs) => [cs.slug, cs]))("%s references only real services and sectors", (_slug, cs) => {
    for (const slug of cs.serviceSlugs) expect(getService(slug), slug).toBeDefined();
    for (const slug of cs.sectorSlugs) expect(getSector(slug), slug).toBeDefined();
  });

  it.each(caseStudyContent.map((cs) => [cs.slug, cs]))("%s keeps metadata within sensible lengths", (_slug, cs) => {
    expect(`${cs.seoTitle} | Apex HR`.length).toBeLessThanOrEqual(65);
    expect(cs.metaDescription.length).toBeGreaterThanOrEqual(110);
    expect(cs.metaDescription.length).toBeLessThanOrEqual(165);
  });

  it.each(caseStudyContent.map((cs) => [cs.slug, cs]))("%s has every required section populated", (_slug, cs) => {
    expect(cs.clientBackground.length).toBeGreaterThan(0);
    expect(cs.challenge.points.length).toBeGreaterThan(0);
    expect(cs.objectives.length).toBeGreaterThan(0);
    expect(cs.approach.sections.length).toBeGreaterThan(0);
    expect(cs.solutions.sections.length).toBeGreaterThan(0);
    expect(cs.implementation.map((p) => p.phase)).toEqual([
      "Initial assessment",
      "Planning",
      "Execution",
      "Communication",
      "Monitoring",
      "Evaluation",
    ]);
    expect(cs.results.measures.length).toBeGreaterThan(0);
    expect(cs.takeaways.length).toBeGreaterThan(0);
    // Global site: UK-only sources (GOV.UK, Acas, CIPD UK) were removed when
    // each scenario moved to one of the global site's markets; no scenario
    // may cite UK-only material.
    expect(JSON.stringify(cs)).not.toMatch(/gov\.uk|acas\.org|cipd\.org\/uk|\bUK\b/);
  });

  it.each(caseStudyContent.map((cs) => [cs.slug, cs]))("%s only links to real internal pages and approved official sources", (_slug, cs) => {
    const links = allText(cs).flatMap((text) => extractInlineLinks(text));
    expect(links.length).toBeGreaterThan(0);
    for (const { href } of links) {
      if (href.startsWith("/")) {
        expect(manifestPaths.has(href), href).toBe(true);
      } else {
        expect(ALLOWED_EXTERNAL_HOSTS.has(new URL(href).host), href).toBe(true);
      }
    }
    for (const source of cs.sources) {
      expect(ALLOWED_EXTERNAL_HOSTS.has(new URL(source.href).host), source.href).toBe(true);
    }
  });
});

describe("illustrative evidence rules (D-020)", () => {
  const illustrative = caseStudyContent.filter((cs) => cs.evidenceBasis === "illustrative");

  it.each(illustrative.map((cs) => [cs.slug, cs]))("%s is labelled as a scenario in its meta description and claims no results", (_slug, cs) => {
    expect(cs.metaDescription).toMatch(/^Scenario:/);
    expect(cs.results.intro).toMatch(/no results are claimed/i);
  });

  it.each(illustrative.map((cs) => [cs.slug, cs]))("%s never claims outcomes, guarantees or invented figures", (_slug, cs) => {
    for (const text of allText(cs)) {
      expect(CLAIMED_OUTCOME.test(text), text).toBe(false);
      expect(GUARANTEE_LANGUAGE.test(text), text).toBe(false);
      expect(AMERICAN_SPELLING.test(text), text).toBe(false);
      // Any percentage must be attributed third-party research in the same paragraph.
      if (/\d+%/.test(text)) expect(text, text).toMatch(/CIPD/);
    }
  });

  it.each(illustrative.map((cs) => [cs.slug, cs]))("%s renders the visible Scenario label and a single H1", (_slug, cs) => {
    const { container } = render(
      <CaseStudyTemplate breadcrumbTrail={[routes.caseStudies]} caseStudy={cs} indexable={false} />,
    );
    expect(container.querySelectorAll("h1")).toHaveLength(1);
    expect(container.textContent).toContain(`Case study · ${ILLUSTRATIVE_LABEL}`);
    expect(container.textContent).toContain("no results are claimed");
    // No FAQPage, Review or rating schema on a noindex illustrative page.
    const schemas = [...container.querySelectorAll('script[type="application/ld+json"]')].map((s) => s.textContent ?? "");
    for (const json of schemas) expect(json).not.toMatch(/FAQPage|Review|AggregateRating/);
  });

  // User instruction (9 November 2026): public copy uses "Scenario", never
  // the word "illustrative" (internal identifiers may keep it).
  it("never shows the word 'illustrative' to visitors", async () => {
    const { CaseStudiesSection } = await import("@/components/sections/case-studies-section");
    const texts: string[] = [];
    for (const cs of caseStudyContent) {
      const { container, unmount } = render(
        <CaseStudyTemplate breadcrumbTrail={[routes.caseStudies]} caseStudy={cs} indexable={false} />,
      );
      texts.push(container.textContent ?? "", cs.metaDescription, cs.seoTitle);
      unmount();
    }
    const hub = render(<CaseStudiesPage />);
    texts.push(hub.container.textContent ?? "");
    hub.unmount();
    texts.push(render(<CaseStudiesSection />).container.textContent ?? "");
    for (const entry of contentManifest) texts.push(entry.metaDescription, entry.h1);
    for (const text of texts) {
      expect(text).not.toMatch(/illustrative/i);
      // User instruction: no "not a specific client" disclaimer either.
      expect(text).not.toMatch(/specific client|real client project/i);
    }
  }, 30000);
});

describe("coverage", () => {
  it("supports every catalogue service and every sector with at least one case study", async () => {
    const { services } = await import("@/config/services");
    const { sectors } = await import("@/config/sectors");
    const linkedServices = new Set(caseStudyContent.flatMap((cs) => cs.serviceSlugs));
    const linkedSectors = new Set(caseStudyContent.flatMap((cs) => cs.sectorSlugs));
    expect(services.filter((s) => !linkedServices.has(s.slug)).map((s) => s.slug)).toEqual([]);
    expect(sectors.filter((s) => !linkedSectors.has(s.slug)).map((s) => s.slug)).toEqual([]);
  });
});

describe("route governance and sitemap", () => {
  it("keeps individual case-study routes Provisional and non-indexable until a route decision changes", () => {
    expect(CASE_STUDY_ROUTE_STATUS).toBe("provisional");
    for (const cs of caseStudyContent) expect(isCaseStudyIndexable(cs)).toBe(false);
  });

  it("lists every case study in the manifest as a non-indexable child of /case-study/", () => {
    for (const cs of caseStudyContent) {
      const entry = contentManifest.find((e) => e.canonicalPath === caseStudyPath(cs.slug));
      expect(entry, cs.slug).toBeDefined();
      expect(entry!.pageType).toBe("caseStudy");
      expect(entry!.indexable).toBe(false);
      expect(entry!.parent).toBe(routes.caseStudies.path);
    }
  });

  it("excludes case-study pages from the XML sitemap while Provisional", () => {
    const locs = Object.values(getLocalSitemapGroups()).flat().map((e) => new URL(e.loc).pathname);
    for (const cs of caseStudyContent) expect(locs).not.toContain(caseStudyPath(cs.slug));
  });
});

describe("integration points", () => {
  it("the homepage section shows labelled cards and no 'results' heading while all are illustrative", async () => {
    const { CaseStudiesSection } = await import("@/components/sections/case-studies-section");
    const { container } = render(<CaseStudiesSection />);
    const cards = container.querySelectorAll('a[href^="/case-study/"]');
    expect(cards.length).toBe(3);
    expect(container.textContent).toContain(ILLUSTRATIVE_LABEL);
    expect(container.textContent).not.toMatch(/Results for the employers/);
    expect(container.textContent).not.toMatch(/Verified case studies with approved evidence/);
    // Hub stays noindex, so no "View all" link to it.
    expect(container.querySelector(`a[href="${routes.caseStudies.path}"]`)).toBeNull();
  });

  it("the hub lists every case study with its illustrative label", () => {
    const { container } = render(<CaseStudiesPage />);
    expect(container.querySelectorAll("h1")).toHaveLength(1);
    for (const cs of caseStudyContent) {
      const link = container.querySelector(`a[href="${caseStudyPath(cs.slug)}"], a[href="${caseStudyPath(cs.slug).replace(/\/$/, "")}"]`);
      expect(link, cs.slug).not.toBeNull();
    }
    expect(container.textContent).toContain(ILLUSTRATIVE_LABEL);
  });

  it.each([...new Set(caseStudyContent.flatMap((cs) => cs.serviceSlugs))])(
    "%s shows its closest case study card instead of the empty state",
    (slug) => {
      const service = getService(slug)!;
      const content = serviceContent.find((entry) => entry.slug === slug)!;
      const { container } = render(
        <ServicePageTemplate title={service.title} breadcrumbTrail={[routes.services]} service={content} />,
      );
      const expected = caseStudyPath(getCaseStudiesForService(slug)[0].slug);
      const hrefs = [...container.querySelectorAll("a")].map((a) => a.getAttribute("href"));
      expect(hrefs.some((href) => href === expected || href === expected.replace(/\/$/, "")), slug).toBe(true);
      expect(container.textContent).toContain(ILLUSTRATIVE_LABEL);
    },
  );

  it("service pages without a case study keep the honest empty state", () => {
    const linked = new Set(caseStudyContent.flatMap((cs) => cs.serviceSlugs));
    const unlinked = serviceContent.find((entry) => !linked.has(entry.slug));
    // Every service is currently covered (see "coverage" above); the
    // fallback is still exercised if a service is ever added without one.
    if (!unlinked) return;
    const { container } = render(
      <ServicePageTemplate title={getService(unlinked.slug)!.title} breadcrumbTrail={[routes.services]} service={unlinked} />,
    );
    expect(container.textContent).toContain("A relevant case study will appear here once verified evidence is approved.");
  });
});
