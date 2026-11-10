import Link from "next/link";
import { ArrowDown, ArrowRight, MapPin } from "lucide-react";
import { Breadcrumbs } from "@/components/layout/breadcrumbs";
import { SectionKicker } from "@/components/ui/section-kicker";
import { LinkButton } from "@/components/ui/link-button";
import { RevealHeading } from "@/components/motion/reveal-heading";
import { FadeUp } from "@/components/motion/fade-up";
import { SlideInRight } from "@/components/motion/slide-in";
import { StaggerContainer, StaggerItem } from "@/components/motion/stagger";
import { countryRegions, locationPath, locations } from "@/config/locations";
import { regionSummaries } from "@/components/sections/markets-band";
import { cityPath, citiesForCountry } from "@/content/cities";
import { FaqWithContactForm } from "@/components/content/faq-with-contact-form";
import { locationContent } from "@/content/locations-data";
import { buildMetadata } from "@/lib/seo/metadata";
import { getBreadcrumbJsonLd, getCollectionPageJsonLd, toJsonLdScript } from "@/lib/seo/structured-data";
import { routes } from "@/config/routes";

const hubFaqs = [
  { id: "offices", question: "Do you have offices in each of these countries?", answer: "Apex HR is headquartered in London and supports employers in these countries remotely and, where useful, on-site. Country pages do not claim local offices." },
  { id: "several", question: "Can you support us in several countries at once?", answer: "Yes. Many employers work with Apex HR across more than one country. We agree consistent standards and one point of contact, and adapt the detail to each market." },
  { id: "not-listed", question: "What if our country is not listed?", answer: "Contact us. We may be able to support you, particularly if you also have teams in one of the countries listed, and we will be clear about what we can and cannot do." },
  { id: "law", question: "Do you advise on each country's employment law?", answer: "We provide practical HR guidance and build processes that reflect local rules. Formal legal advice should come from qualified in-country counsel, and we work alongside them." },
];

const HUB_DESCRIPTION =
  "Apex HR supports employers with HR and recruitment services across Africa, North America, Europe and the Middle East, including remote and cross-border teams.";

export const metadata = buildMetadata({
  title: "Countries We Support",
  description: HUB_DESCRIPTION,
  path: routes.locations.path,
  index: routes.locations.readyToIndex,
});

/**
 * Locations hub — added by explicit later user instruction (see
 * docs/URL-DECISION-REGISTER.md D-013) so the footer's new "Locations"
 * link has a real landing page, rather than the 16 individual
 * /locations/[slug]/ pages sitting with no directory linking them
 * together. Follows the same full-width structure already used for the
 * Services and Sectors hubs (dark hero, directory grid, closing CTA) — no
 * rounded "page shell" card, consistent with every other page on the
 * site. No physical office is claimed for any location (CLAUDE.md section
 * 9) — the copy below only describes remote/on-site support coverage.
 *
 * Every section uses the site-wide "Layered Rise and Reveal" on-scroll
 * entrance system (src/components/motion/*): headings rise via
 * RevealHeading, supporting copy via FadeUp, the directory grid staggers
 * via StaggerContainer/StaggerItem, and the hero's decorative panel
 * slides in from the right. Nothing here changes layout, copy, colour or
 * functionality — only how each block enters as a visitor scrolls to it.
 */
export default function LocationsPage() {
  const jsonLd = [
    getCollectionPageJsonLd({
      path: routes.locations.path,
      name: "Countries We Support",
      description: HUB_DESCRIPTION,
      items: locations.map((location) => ({ name: location.title, path: locationPath(location.slug) })),
    }),
    getBreadcrumbJsonLd(routes.home.label, [routes.locations]),
  ];

  return (
    <div className="bg-surface-page">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: toJsonLdScript(jsonLd) }}
      />
      <div className="px-5 py-8 sm:px-0 md:py-12">
        <Breadcrumbs trail={[routes.locations]} />
      </div>

      <header className="grid grid-cols-1 overflow-hidden bg-navy lg:grid-cols-[1.05fr_0.95fr]">
        <div className="flex flex-col justify-center gap-6 p-8 sm:p-10 lg:p-16">
          <RevealHeading>
            <SectionKicker tone="dark">Locations</SectionKicker>
            <h1 className="max-w-xl font-display text-display font-bold text-white">
              HR and recruitment support around the world
            </h1>
          </RevealHeading>
          <FadeUp delay={0.15} className="flex flex-col gap-6">
            <p className="max-w-lg text-lead text-white/70">
              Apex HR supports employers hiring and managing people across these countries, including
              remote and cross-border teams.
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <LinkButton href="#location-directory" variant="primary" surface="dark">
                Browse countries
                <ArrowDown aria-hidden="true" className="h-4 w-4" />
              </LinkButton>
              <LinkButton href={routes.contact.path} variant="secondary" surface="dark">
                Discuss your market
              </LinkButton>
            </div>
          </FadeUp>
        </div>

        <SlideInRight className="relative flex flex-col items-center justify-center gap-8 border-t border-white/10 p-10 lg:border-t-0 lg:border-l lg:p-14">
          <div aria-hidden="true" className="pointer-events-none absolute inset-0 flex items-center justify-center">
            <span className="absolute h-72 w-72 rounded-full border border-white/10" />
            <span className="absolute h-44 w-44 rounded-full border border-white/10" />
          </div>

          <div className="relative z-10 flex flex-wrap justify-center gap-3">
            {locations.slice(0, 4).map((location) => (
              <span
                key={location.slug}
                className="inline-flex items-center rounded-full border border-white/15 bg-white/8 px-4 py-2 text-small font-semibold text-white"
              >
                {location.title}
              </span>
            ))}
          </div>

          <div className="relative z-10 rounded-md bg-cream px-10 py-7 text-center shadow-(--shadow-modal)">
            <MapPin aria-hidden="true" className="mx-auto h-7 w-7 text-navy" />
            <p className="mt-1 font-display text-display font-bold text-navy">{locations.length}</p>
            <p className="mt-2 max-w-44 text-small text-text-secondary">
              countries supported by one connected HR partner
            </p>
          </div>
        </SlideInRight>
      </header>

      <section id="location-directory" className="p-8 sm:p-10 lg:p-14">
        <RevealHeading>
          <SectionKicker tone="light">Where we support</SectionKicker>
          <h2 className="mt-4 max-w-2xl font-display text-h1 font-bold text-navy">
            Find HR and recruitment support in your country
          </h2>
        </RevealHeading>

        <StaggerContainer className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {locations.map((location) => {
            const content = locationContent.find((entry) => entry.slug === location.slug);
            return (
              <StaggerItem key={location.slug}>
                <Link
                  href={locationPath(location.slug)}
                  className="group flex items-center justify-between gap-4 rounded-md border border-border-subtle bg-surface-card p-6 transition-colors duration-(--duration-fast) hover:border-navy"
                >
                  <span className="flex items-center gap-4">
                    <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-success/10 text-success">
                      <MapPin aria-hidden="true" className="h-5 w-5" />
                    </span>
                    <span>
                      <span className="block font-display text-body-lg font-bold text-navy">{location.title}</span>
                      <span className="block text-small text-text-secondary">{content ? `${content.region} · ` : ""}{location.region}</span>
                    </span>
                  </span>
                  <ArrowRight
                    aria-hidden="true"
                    className="h-4 w-4 shrink-0 text-text-secondary transition-transform group-hover:translate-x-1"
                  />
                </Link>
              </StaggerItem>
            );
          })}
        </StaggerContainer>

      </section>

      {countryRegions.map((region, regionIndex) => (
        <section
          key={region}
          aria-labelledby={`region-${regionIndex}`}
          className={`${regionIndex % 2 === 0 ? "bg-surface-card" : "bg-surface-page"} p-8 sm:p-10 lg:p-14`}
        >
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
            <RevealHeading>
              <SectionKicker tone="light">{region}</SectionKicker>
              <h2 id={`region-${regionIndex}`} className="mt-4 max-w-md font-display text-h1 font-bold text-navy">
                HR and recruitment in {region === "Middle East" ? "the Middle East" : region}
              </h2>
            </RevealHeading>
            <FadeUp delay={0.1}>
              <p className="max-w-xl text-body text-text-secondary">{regionSummaries[region]}</p>
            </FadeUp>
          </div>
          <StaggerContainer className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
            {locations
              .filter((location) => location.region === region)
              .map((location) => {
                const content = locationContent.find((entry) => entry.slug === location.slug);
                return (
                  <StaggerItem key={location.slug} className="flex flex-col gap-3 rounded-md border border-border-subtle bg-surface-page p-6">
                    <h3 className="font-display text-h4 font-bold text-navy">{location.title}</h3>
                    {content && (
                      <>
                        <p className="text-body text-text-secondary">{content.localContext.split(". ")[0]}.</p>
                        <p className="flex flex-wrap gap-x-2 gap-y-1 text-small text-text-secondary">
                          <span>Main hubs:</span>
                          {citiesForCountry(location.slug).map((city) => (
                            <Link key={city.slug} href={cityPath(city)} className="font-semibold text-navy underline-offset-4 hover:underline">
                              {city.name}
                            </Link>
                          ))}
                        </p>
                      </>
                    )}
                    <Link
                      href={locationPath(location.slug)}
                      className="mt-auto inline-flex text-caption font-bold uppercase tracking-widest text-gold-ink underline-offset-4 hover:underline"
                    >
                      {`HR and recruitment in ${location.title}`}
                    </Link>
                  </StaggerItem>
                );
              })}
          </StaggerContainer>
        </section>
      ))}

      <section className="bg-surface-card p-8 sm:p-10 lg:p-14">
        <RevealHeading>
          <SectionKicker tone="light">Frequently asked questions</SectionKicker>
          <h2 className="mt-4 max-w-2xl font-display text-h2 font-bold text-navy">Working with Apex HR across countries</h2>
        </RevealHeading>
        <div className="mt-10">
          <FaqWithContactForm items={hubFaqs} />
        </div>
      </section>

      <div className="flex flex-col gap-6 bg-gold p-8 sm:flex-row sm:items-center sm:justify-between sm:p-10 lg:p-14">
        <RevealHeading>
          <h3 className="font-display text-h2 font-bold text-navy">Don&apos;t see your country?</h3>
          <p className="mt-2 max-w-md text-body text-navy/80">
            Apex HR can support employers beyond this list, including remote and cross-border teams.
            Tell us where you&apos;re hiring.
          </p>
        </RevealHeading>
        <FadeUp delay={0.15} className="shrink-0">
          <LinkButton href={routes.contact.path} variant="primary" surface="light">
            Talk to an adviser
          </LinkButton>
        </FadeUp>
      </div>
    </div>
  );
}
