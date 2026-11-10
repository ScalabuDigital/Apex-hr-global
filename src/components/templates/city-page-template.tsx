import Link from "next/link";
import { ArrowRight, ArrowUpRight, Building2, CheckCircle2, MapPin } from "lucide-react";
import { Breadcrumbs } from "@/components/layout/breadcrumbs";
import { SectionKicker } from "@/components/ui/section-kicker";
import { LinkButton } from "@/components/ui/link-button";
import { FaqWithContactForm } from "@/components/content/faq-with-contact-form";
import { RevealHeading } from "@/components/motion/reveal-heading";
import { FadeUp } from "@/components/motion/fade-up";
import { SlideInRight } from "@/components/motion/slide-in";
import { StaggerContainer, StaggerItem } from "@/components/motion/stagger";
import { serviceCategoryIcons } from "@/lib/service-category-icons";
import { routes } from "@/config/routes";
import { comboSlug, locationPath, withArticle, type LocationItem } from "@/config/locations";
import { getService } from "@/config/services";
import { getSector } from "@/config/sectors";
import { serviceLocationCombos } from "@/config/service-locations";
import { serviceContent } from "@/content/services-data";
import { sectorContent } from "@/content/sectors-data";
import type { LocationContent } from "@/content/locations-data";
import { cityPath, citiesForCountry, type CityContent } from "@/content/cities";
import type { ContentFaqItem } from "@/types/content";
import type { RouteRecord } from "@/types/route";

interface CityPageTemplateProps {
  city: CityContent;
  country: LocationItem;
  countryContent: LocationContent;
  breadcrumbTrail: RouteRecord[];
  faqs: ContentFaqItem[];
}

/**
 * City sub-location page (`/{countryCode}/{city}/`). Every section is driven
 * by the city's own record (src/content/cities/), with the parent country
 * supplying the employment framework and links back to the country hub.
 * No office is claimed in any city.
 */
export function CityPageTemplate({ city, country, countryContent, breadcrumbTrail, faqs }: CityPageTemplateProps) {
  const services = city.relatedServiceSlugs
    .map((slug) => getService(slug))
    .filter((entry): entry is NonNullable<typeof entry> => Boolean(entry));
  const sectors = city.relatedSectorSlugs
    .map((slug) => getSector(slug))
    .filter((entry): entry is NonNullable<typeof entry> => Boolean(entry));
  const otherCities = citiesForCountry(city.countrySlug).filter((entry) => entry.slug !== city.slug);
  const countryHref = locationPath(country.slug);

  return (
    <div className="bg-surface-page">
      <header className="grid grid-cols-1 overflow-hidden bg-navy lg:grid-cols-[1.08fr_0.92fr]">
        <div className="flex flex-col justify-center gap-6 p-8 sm:p-10 lg:p-16">
          <Breadcrumbs trail={breadcrumbTrail} tone="dark" />
          <RevealHeading>
            <SectionKicker tone="dark">{`${city.area} · ${country.title}`}</SectionKicker>
            <h1 className="mt-4 max-w-xl font-display text-display font-bold text-white">
              HR and recruitment support in {city.name}
            </h1>
          </RevealHeading>
          <FadeUp delay={0.15} className="flex flex-col gap-6">
            <p className="max-w-lg text-lead text-white/70">
              {`Apex HR supports employers hiring and managing people in ${city.name}, from first hires and growing teams to established organisations, as part of our support across ${withArticle(country.title)}.`}
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <LinkButton href={routes.findTalent.path} variant="primary" surface="dark">
                {routes.findTalent.label}
                <ArrowUpRight aria-hidden="true" className="h-4 w-4" />
              </LinkButton>
              <LinkButton href={routes.contact.path} variant="secondary" surface="dark">
                Discuss your needs
              </LinkButton>
            </div>
          </FadeUp>
        </div>

        <SlideInRight className="relative flex flex-col justify-center gap-4 border-t border-white/10 p-8 sm:p-10 lg:border-t-0 lg:border-l lg:p-14">
          <div aria-hidden="true" className="pointer-events-none absolute inset-0 flex items-center justify-center">
            <span className="absolute h-72 w-72 rounded-full border border-white/10" />
            <span className="absolute h-44 w-44 rounded-full border border-white/10" />
          </div>
          <dl className="relative z-10 flex flex-col gap-3">
            {city.facts.map((fact) => (
              <div key={fact.label} className="rounded-md bg-cream px-5 py-4 shadow-(--shadow-modal)">
                <dt className="text-caption font-bold uppercase tracking-widest text-gold-ink">{fact.label}</dt>
                <dd className="mt-1 text-body font-semibold text-navy">{fact.value}</dd>
              </div>
            ))}
          </dl>
          <p className="relative z-10 text-small text-white/60">Remote and on-site support. No local office is implied.</p>
        </SlideInRight>
      </header>

      <section aria-labelledby="city-economy" className="grid grid-cols-1 gap-10 p-8 sm:p-10 lg:grid-cols-[1.15fr_0.85fr] lg:p-14">
        <div>
          <RevealHeading>
            <SectionKicker tone="light">Local context</SectionKicker>
            <h2 id="city-economy" className="mt-4 max-w-lg font-display text-h1 font-bold text-navy">
              The {city.name} economy and employer landscape
            </h2>
          </RevealHeading>
          <FadeUp delay={0.1} className="mt-4 flex max-w-xl flex-col gap-4">
            {city.overview.map((paragraph) => (
              <p key={paragraph.slice(0, 32)} className="text-body-lg text-text-secondary">
                {paragraph}
              </p>
            ))}
          </FadeUp>
        </div>
        <aside className="rounded-md bg-surface-card p-8">
          <h3 className="text-caption font-bold uppercase tracking-widest text-gold-ink">Key employing sectors</h3>
          <StaggerContainer>
            <ul className="mt-5 flex flex-col gap-3">
              {city.keySectors.map((sector) => (
                <StaggerItem key={sector} as="li" className="flex items-start gap-3 text-body text-navy">
                  <Building2 aria-hidden="true" className="mt-0.5 h-5 w-5 shrink-0 text-gold-ink" />
                  {sector}
                </StaggerItem>
              ))}
            </ul>
          </StaggerContainer>
        </aside>
      </section>

      <section aria-labelledby="city-talent" className="grid grid-cols-1 gap-10 bg-navy p-8 sm:p-10 lg:grid-cols-2 lg:p-14">
        <div>
          <RevealHeading>
            <SectionKicker tone="dark">Talent market</SectionKicker>
            <h2 id="city-talent" className="mt-4 max-w-md font-display text-h1 font-bold text-white">
              Hiring in {city.name}
            </h2>
          </RevealHeading>
          <FadeUp delay={0.1}>
            <p className="mt-4 max-w-lg text-body-lg text-white/80">{city.talentMarket}</p>
          </FadeUp>
        </div>
        <div>
          <h3 className="text-small font-semibold uppercase tracking-widest text-gold">What to plan for</h3>
          <StaggerContainer>
            <ul className="mt-4 flex flex-col gap-3">
              {city.hiringNotes.map((note) => (
                <StaggerItem key={note} as="li" className="flex items-start gap-3 rounded-md border border-white/15 bg-white/5 p-4 text-body text-white/80">
                  <CheckCircle2 aria-hidden="true" className="mt-0.5 h-5 w-5 shrink-0 text-gold" />
                  {note}
                </StaggerItem>
              ))}
            </ul>
          </StaggerContainer>
        </div>
      </section>

      {services.length > 0 && (
        <section aria-labelledby="city-services" className="bg-surface-card p-8 sm:p-10 lg:p-14">
          <RevealHeading>
            <SectionKicker tone="light">{`How we can help in ${city.name}`}</SectionKicker>
            <h2 id="city-services" className="mt-4 max-w-2xl font-display text-h1 font-bold text-navy">
              Relevant HR and recruitment services
            </h2>
          </RevealHeading>
          <StaggerContainer className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => {
              const content = serviceContent.find((entry) => entry.slug === service.slug);
              const Icon = serviceCategoryIcons[service.categorySlug];
              const hasCountryPage = serviceLocationCombos.some(
                (combo) => combo.serviceSlug === service.slug && combo.locationSlug === country.slug,
              );
              const href = hasCountryPage
                ? `/services/${comboSlug(service.slug, country.slug)}/`
                : `/services/${service.slug}/`;
              return (
                <StaggerItem key={service.slug} className="flex flex-col gap-4 rounded-md border border-border-subtle bg-surface-page p-6">
                  {Icon && (
                    <span className="grid h-11 w-11 place-items-center rounded-full bg-gold/20 text-gold-ink">
                      <Icon aria-hidden="true" className="h-5 w-5" />
                    </span>
                  )}
                  <div>
                    <h3 className="font-display text-h4 font-bold text-navy">{service.title}</h3>
                    <p className="mt-2 text-body text-text-secondary">
                      {countryContent.serviceAngles[service.slug] ?? content?.heroSummary}
                    </p>
                  </div>
                  <Link
                    href={href}
                    className="group mt-auto inline-flex w-fit items-center gap-2 text-caption font-bold uppercase tracking-widest text-gold-ink"
                  >
                    {hasCountryPage ? `${service.title} in ${withArticle(country.title)}` : "Find out more"}
                    <ArrowRight aria-hidden="true" className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </StaggerItem>
              );
            })}
          </StaggerContainer>
        </section>
      )}

      <section aria-labelledby="city-framework" className="grid grid-cols-1 gap-10 p-8 sm:p-10 lg:grid-cols-[0.8fr_1.2fr] lg:p-14">
        <div>
          <RevealHeading>
            <SectionKicker tone="light">{`Employing people in ${withArticle(country.title)}`}</SectionKicker>
            <h2 id="city-framework" className="mt-4 max-w-md font-display text-h2 font-bold text-navy">
              The national rules that apply in {city.name}
            </h2>
          </RevealHeading>
          <FadeUp delay={0.1}>
            <p className="mt-4 max-w-md text-body text-text-secondary">{countryContent.employmentFramework.intro}</p>
            <p className="mt-4 max-w-md text-small text-text-secondary">
              General information, not legal advice. Confirm current requirements with qualified in-country counsel.
            </p>
            <Link
              href={countryHref}
              className="group mt-6 inline-flex w-fit items-center gap-2 text-caption font-bold uppercase tracking-widest text-gold-ink"
            >
              {`HR and recruitment across ${withArticle(country.title)}`}
              <ArrowRight aria-hidden="true" className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </FadeUp>
        </div>
        <StaggerContainer className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {countryContent.employmentFramework.points.slice(0, 4).map((point) => (
            <StaggerItem key={point.title} className="rounded-md border border-border-subtle bg-surface-card p-5">
              <h3 className="font-display text-body-lg font-bold text-navy">{point.title}</h3>
              <p className="mt-2 text-small text-text-secondary">{point.detail}</p>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </section>

      {sectors.length > 0 && (
        <section aria-labelledby="city-sectors" className="bg-navy p-8 sm:p-10 lg:p-14">
          <RevealHeading>
            <SectionKicker tone="dark">Sector expertise</SectionKicker>
            <h2 id="city-sectors" className="mt-4 max-w-xl font-display text-h1 font-bold text-white">
              Sectors we support in {city.name}
            </h2>
          </RevealHeading>
          <StaggerContainer className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-3">
            {sectors.map((sector) => {
              const content = sectorContent.find((entry) => entry.slug === sector.slug);
              return (
                <StaggerItem key={sector.slug}>
                  <Link
                    href={`/sector/${sector.slug}/`}
                    className="group flex h-full flex-col gap-2 rounded-md border border-white/15 bg-white/5 p-5 transition-colors duration-(--duration-fast) hover:border-gold"
                  >
                    <span className="font-display text-body-lg font-bold text-white">{sector.title}</span>
                    {content && <span className="text-small text-white/70">{content.tagline}</span>}
                    <ArrowRight aria-hidden="true" className="mt-auto h-4 w-4 text-gold transition-transform group-hover:translate-x-1" />
                  </Link>
                </StaggerItem>
              );
            })}
          </StaggerContainer>
        </section>
      )}

      {otherCities.length > 0 && (
        <nav aria-label={`Other cities in ${withArticle(country.title)}`} className="bg-surface-card p-8 sm:p-10 lg:p-14">
          <h2 className="font-display text-h3 font-bold text-navy">Other cities in {withArticle(country.title)}</h2>
          <ul className="mt-6 flex flex-wrap gap-3">
            {otherCities.map((other) => (
              <li key={other.slug}>
                <Link
                  href={cityPath(other)}
                  className="inline-flex items-center gap-2 rounded-full border border-border-subtle bg-surface-page px-4 py-2 text-small font-semibold text-navy underline-offset-4 hover:border-navy hover:underline"
                >
                  <MapPin aria-hidden="true" className="h-4 w-4 text-gold-ink" />
                  {other.name}
                </Link>
              </li>
            ))}
            <li>
              <Link
                href={countryHref}
                className="inline-flex items-center gap-2 rounded-full border border-navy bg-navy px-4 py-2 text-small font-semibold text-white"
              >
                {`All of ${withArticle(country.title)}`}
              </Link>
            </li>
          </ul>
        </nav>
      )}

      <section className="bg-surface-page p-8 sm:p-10 lg:p-14">
        <RevealHeading>
          <SectionKicker tone="light">Frequently asked questions</SectionKicker>
          <h2 className="mt-4 max-w-2xl font-display text-h1 font-bold text-navy">{city.name} HR and recruitment FAQs</h2>
        </RevealHeading>
        <div className="mt-10">
          <FaqWithContactForm items={faqs} />
        </div>
      </section>

      <div className="flex flex-col gap-6 bg-gold p-8 sm:flex-row sm:items-center sm:justify-between sm:p-10 lg:p-14">
        <RevealHeading>
          <h3 className="font-display text-h2 font-bold text-navy">{`Hiring or growing in ${city.name}?`}</h3>
          <p className="mt-2 max-w-md text-body text-navy/80">
            Tell us about the roles or the people challenge you are facing, and we&apos;ll suggest the right
            way to start.
          </p>
        </RevealHeading>
        <FadeUp delay={0.15} className="shrink-0">
          <LinkButton href={routes.contact.path} variant="primary" surface="light">
            Start a conversation
          </LinkButton>
        </FadeUp>
      </div>
    </div>
  );
}
