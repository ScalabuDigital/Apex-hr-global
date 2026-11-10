import { ArrowDown, ChartNoAxesCombined, UserRoundSearch, UsersRound } from "lucide-react";
import Link from "next/link";
import { Breadcrumbs } from "@/components/layout/breadcrumbs";
import { SectionKicker } from "@/components/ui/section-kicker";
import { LinkButton } from "@/components/ui/link-button";
import { RevealHeading } from "@/components/motion/reveal-heading";
import { FadeUp } from "@/components/motion/fade-up";
import { AnimatedSection } from "@/components/motion/animated-section";
import { StaggerContainer, StaggerItem } from "@/components/motion/stagger";
import { ServiceFamilyNavigator } from "@/components/content/service-family-navigator";
import { CrawlableLinkList } from "@/components/content/crawlable-link-list";
import { buildMetadata } from "@/lib/seo/metadata";
import { getBreadcrumbJsonLd, getCollectionPageJsonLd, toJsonLdScript } from "@/lib/seo/structured-data";
import { routes } from "@/config/routes";
import { getServicesByCategory, serviceCategories } from "@/config/services";
import { serviceCategoryContent } from "@/content/services-data";
import { MarketsBand } from "@/components/sections/markets-band";
import { FaqWithContactForm } from "@/components/content/faq-with-contact-form";

const startingPoints = [
  { need: "We need to hire", detail: "Permanent, executive, contract or high-volume hiring, in one country or several.", label: "Recruitment & Talent Acquisition", href: "/services/recruitment-and-talent-acquisition-firm/" },
  { need: "We need HR support without a full HR team", detail: "Ongoing advice, contracts, policies, compliance and payroll guidance.", label: "Outsourced HR Services", href: "/services/outsourced-hr-services-firm/" },
  { need: "We have a difficult people issue", detail: "Investigations, grievances, restructuring, transfers and disputes.", label: "Employment Law & Employee Relations", href: "/services/employment-law-and-employee-relations-firm/" },
  { need: "Our pay feels inconsistent or uncompetitive", detail: "Benchmarking, grading, pay ranges, benefits and pay equity.", label: "Compensation, Reward & Benefits", href: "/services/compensation-reward-and-benefits-firm/" },
  { need: "Our managers need to lead better", detail: "Leadership training, coaching, performance and succession.", label: "Learning & Leadership Development", href: "/services/learning-and-leadership-development-firm/" },
  { need: "We are expanding or restructuring", detail: "People strategy, workforce planning, organisation design and change.", label: "Strategic HR & Workforce Advisory", href: "/services/strategic-hr-and-workforce-advisory-firm/" },
];

const servicesHubFaqs = [
  { id: "combine", question: "Can we combine services from different families?", answer: "Yes. Many engagements combine services, for example recruitment with onboarding and contracts, or a restructure with outplacement and change management. One Apex HR contact coordinates the work." },
  { id: "countries", question: "Are all services available in every country you support?", answer: "Yes. Every service family is available across Africa, North America, Europe and the Middle East, adapted to local rules and practice. Where formal legal advice is needed, we work alongside in-country counsel." },
  { id: "engagement", question: "How are services priced and scoped?", answer: "Scope is agreed upfront, from a single project or hire to an ongoing retained partnership. We confirm fees and deliverables in writing before work starts." },
  { id: "unsure", question: "What if we are not sure which service we need?", answer: "Describe the situation and we will suggest where to start. Many organisations begin with a short conversation or a review, then decide on the right support." },
];

const HUB_DESCRIPTION =
  "Explore Apex HR's ten connected HR and recruitment service families, from outsourced HR support to workforce strategy, and find the right expertise for your organisation.";

export const metadata = buildMetadata({
  title: "HR & Recruitment Services",
  description: HUB_DESCRIPTION,
  path: routes.services.path,
  index: routes.services.readyToIndex,
});

// Three quick-start shortcuts into the service-family navigator below,
// per the approved reference layout's hero "start with your priority"
// selector — each links straight to the closest-matching service family.
const priorityRoutes = [
  {
    icon: UserRoundSearch,
    title: "Hire the right people",
    detail: "Recruitment and executive search",
    href: "/services/recruitment-and-talent-acquisition-firm/",
  },
  {
    icon: UsersRound,
    title: "Strengthen your HR",
    detail: "Outsourced support and compliance",
    href: "/services/outsourced-hr-services-firm/",
  },
  {
    icon: ChartNoAxesCombined,
    title: "Shape what comes next",
    detail: "Strategy, change and workforce advisory",
    href: "/services/strategic-hr-and-workforce-advisory-firm/",
  },
];

/**
 * Services hub, restructured per the approved reference layout: a dark
 * hero with quick-start priority routes, then an interactive service
 * family navigator (see ServiceFamilyNavigator), all inside one rounded
 * cream "page shell". Breadcrumbs sit outside the shell in the normal
 * page background, per DESIGN.md's visible-breadcrumb requirement. Each
 * section is now a full-width band with no side margin (per later user
 * instruction; previously the whole page sat inside that rounded card,
 * inset from the browser edges).
 */
export default function ServicesPage() {
  const jsonLd = [
    getCollectionPageJsonLd({
      path: routes.services.path,
      name: "HR & Recruitment Services",
      description: HUB_DESCRIPTION,
      items: serviceCategories.map((category) => ({ name: category.title, path: `/services/${category.slug}/` })),
    }),
    getBreadcrumbJsonLd(routes.home.label, [routes.services]),
  ];

  return (
    <div className="bg-surface-page">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: toJsonLdScript(jsonLd) }}
      />
      <div className="px-5 py-8 sm:px-0 md:py-12">
        <Breadcrumbs trail={[routes.services]} />
      </div>

      <header className="grid grid-cols-1 overflow-hidden bg-navy lg:grid-cols-[1.08fr_0.92fr]">
            <div className="flex flex-col justify-center gap-6 p-8 sm:p-10 lg:p-16">
              <RevealHeading>
                <SectionKicker tone="dark">Apex HR services</SectionKicker>
                <h1 className="max-w-2xl font-display text-display font-bold text-white">
                  People expertise for every stage of growth
                </h1>
              </RevealHeading>
              <FadeUp delay={0.15} className="flex flex-col gap-6">
                <p className="max-w-lg text-lead text-white/70">
                  From everyday HR support and specialist recruitment to workforce strategy and
                  transformation, choose the expertise your organisation needs now.
                </p>
                <div className="flex flex-wrap items-center gap-4">
                  <LinkButton href="#service-families" variant="primary" surface="dark">
                    Find the right service
                    <ArrowDown aria-hidden="true" className="h-4 w-4" />
                  </LinkButton>
                  <LinkButton href={routes.contact.path} variant="secondary" surface="dark">
                    Speak to an adviser
                  </LinkButton>
                </div>
              </FadeUp>
            </div>

            <StaggerContainer className="flex flex-col justify-center gap-3 border-t border-white/10 bg-black/10 p-8 sm:p-10 lg:border-t-0 lg:border-l lg:p-12">
              <span className="text-caption font-semibold uppercase tracking-[0.08em] text-white/55">
                Start with your priority
              </span>
              {priorityRoutes.map((route) => (
                <StaggerItem key={route.href}>
                  <Link
                    href={route.href}
                    className="group grid grid-cols-[auto_1fr_auto] items-center gap-3 rounded-md border border-white/15 bg-white/5 p-4 transition-colors duration-(--duration-fast) hover:border-gold hover:bg-white/10"
                  >
                    <span className="grid h-10 w-10 shrink-0 place-items-center rounded-md bg-gold/15 text-gold">
                      <route.icon aria-hidden="true" className="h-5 w-5" />
                    </span>
                    <span className="min-w-0">
                      <span className="block font-display text-body-lg font-semibold text-white">
                        {route.title}
                      </span>
                      <span className="mt-0.5 block text-small text-white/55">{route.detail}</span>
                    </span>
                    <ArrowDown
                      aria-hidden="true"
                      className="h-4 w-4 -rotate-90 text-white/60 transition-transform group-hover:translate-x-0.5"
                    />
                  </Link>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </header>

          <RevealHeading
            className="grid grid-cols-1 gap-6 p-8 sm:p-10 lg:grid-cols-[1fr_0.68fr] lg:items-end lg:gap-10 lg:p-14"
          >
            <div>
              <SectionKicker tone="light">Explore our expertise</SectionKicker>
              <h2 className="mt-4 max-w-2xl font-display text-h1 font-bold text-navy">
                Ten connected service families. One trusted partner.
              </h2>
            </div>
            <p className="text-body-lg text-text-secondary lg:text-right">
              Choose a service family to see how Apex HR can support your organisation.
            </p>
          </RevealHeading>

      <AnimatedSection delay={0.1} className="px-5 pb-6 sm:px-0 sm:pb-8 lg:pb-10">
        <ServiceFamilyNavigator />
      </AnimatedSection>

      {/*
       * SEO renderability audit remediation: ServiceFamilyNavigator only
       * exposes the currently-active family's own link inside its
       * interactive picker (the other 9 are plain button labels, not
       * anchors). This compact, always-server-rendered list gives every
       * one of the 10 families a real crawlable <a href> in the initial
       * HTML, reusing the exact pill style already used inside the
       * navigator's own child-service links — no new visual pattern, no
       * duplicated descriptions, just the missing links.
       */}
      <div className="px-5 pb-8 sm:px-0 sm:pb-10 lg:pb-14">
        <CrawlableLinkList
          caption="All service families:"
          items={serviceCategories.map((category) => ({ label: category.title, href: `/services/${category.slug}/` }))}
        />
      </div>

      <section aria-labelledby="family-summaries" className="bg-surface-card p-8 sm:p-10 lg:p-14">
        <RevealHeading>
          <SectionKicker tone="light">The ten service families</SectionKicker>
          <h2 id="family-summaries" className="mt-4 max-w-2xl font-display text-h1 font-bold text-navy">
            What each service family covers
          </h2>
        </RevealHeading>
        <StaggerContainer className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-2">
          {serviceCategories.map((category) => {
            const content = serviceCategoryContent.find((entry) => entry.slug === category.slug);
            return (
              <StaggerItem key={category.slug} className="flex flex-col gap-2 rounded-md border border-border-subtle bg-surface-page p-6">
                <h3 className="font-display text-h4 font-bold text-navy">
                  <Link href={`/services/${category.slug}/`} className="underline-offset-4 hover:underline">
                    {category.title}
                  </Link>
                </h3>
                {content && <p className="text-body text-text-secondary">{content.summary}</p>}
                <p className="mt-auto pt-2 text-small text-text-secondary">
                  {getServicesByCategory(category.slug).length} services
                </p>
              </StaggerItem>
            );
          })}
        </StaggerContainer>
      </section>

      <section aria-labelledby="where-to-start" className="p-8 sm:p-10 lg:p-14">
        <RevealHeading>
          <SectionKicker tone="light">Where to start</SectionKicker>
          <h2 id="where-to-start" className="mt-4 max-w-2xl font-display text-h1 font-bold text-navy">
            Start from the problem you need to solve
          </h2>
        </RevealHeading>
        <StaggerContainer>
          <ul className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-2">
            {startingPoints.map((point) => (
              <StaggerItem key={point.need} as="li" className="rounded-md border border-border-subtle bg-surface-card p-6">
                <p className="font-display text-body-lg font-bold text-navy">{point.need}</p>
                <p className="mt-2 text-body text-text-secondary">{point.detail}</p>
                <Link
                  href={point.href}
                  className="mt-3 inline-flex text-caption font-bold uppercase tracking-widest text-gold-ink underline-offset-4 hover:underline"
                >
                  {point.label}
                </Link>
              </StaggerItem>
            ))}
          </ul>
        </StaggerContainer>
      </section>

      <MarketsBand
        heading="Services delivered across twelve countries"
        intro="Every service family is available to employers across Africa, North America, Europe and the Middle East. We adapt each service to local employment rules, pay norms and talent markets, and many services have dedicated country pages."
        tone="dark"
      />

      <section className="bg-surface-page p-8 sm:p-10 lg:p-14">
        <RevealHeading>
          <SectionKicker tone="light">Frequently asked questions</SectionKicker>
          <h2 className="mt-4 max-w-2xl font-display text-h2 font-bold text-navy">Choosing HR and recruitment services</h2>
        </RevealHeading>
        <div className="mt-10">
          <FaqWithContactForm items={servicesHubFaqs} />
        </div>
      </section>

      <div className="flex flex-col gap-6 bg-navy p-8 sm:flex-row sm:items-center sm:justify-between sm:p-10 lg:p-14">
        <RevealHeading>
          <h3 className="font-display text-h2 font-bold text-white">Not sure which service fits?</h3>
          <p className="mt-2 max-w-md text-body text-white/70">
            Tell us what&apos;s happening in your organisation and we&apos;ll point you in the right
            direction.
          </p>
        </RevealHeading>
        <FadeUp delay={0.15} className="shrink-0">
          <LinkButton href={routes.contact.path} variant="primary" surface="dark">
            Speak to an adviser
          </LinkButton>
        </FadeUp>
      </div>
    </div>
  );
}
