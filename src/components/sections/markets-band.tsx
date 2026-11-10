import Link from "next/link";
import { ArrowRight, Globe2 } from "lucide-react";
import { SectionKicker } from "@/components/ui/section-kicker";
import { RevealHeading } from "@/components/motion/reveal-heading";
import { FadeUp } from "@/components/motion/fade-up";
import { StaggerContainer, StaggerItem } from "@/components/motion/stagger";
import { countryRegions, locationPath, locations, type CountryRegion } from "@/config/locations";
import { routes } from "@/config/routes";

/** One-sentence summary of what Apex HR's support looks like in each region. */
export const regionSummaries: Record<CountryRegion, string> = {
  Africa:
    "Fast-growing employers in Nigeria, Kenya, South Africa and Ghana, from fintech scale-ups and regional headquarters to established corporates formalising HR.",
  "North America":
    "Employers in the United States and Canada, including international companies hiring their first North American team across states and provinces.",
  Europe:
    "Employers in Ireland, Germany and the Netherlands, where works councils, EU rules and international talent shape how people are hired and managed.",
  "Middle East":
    "Employers in the UAE, Saudi Arabia and Qatar, balancing international recruitment with Emiratisation, Saudisation and Qatarization goals.",
};

interface MarketsBandProps {
  kicker?: string;
  heading: string;
  intro: string;
  tone?: "light" | "dark";
}

/**
 * Reusable "markets we support" band: the four regions, a summary of each
 * and links to every country hub. Used on About, Employers, Contact and the
 * Services hub so each page connects its content to the countries served.
 */
export function MarketsBand({ kicker = "Where we work", heading, intro, tone = "light" }: MarketsBandProps) {
  const dark = tone === "dark";
  return (
    <section
      aria-label={heading}
      className={`${dark ? "bg-navy" : "bg-surface-card"} p-8 sm:p-10 lg:p-14`}
    >
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
        <RevealHeading>
          <SectionKicker tone={dark ? "dark" : "light"}>{kicker}</SectionKicker>
          <h2 className={`mt-4 max-w-lg font-display text-h1 font-bold ${dark ? "text-white" : "text-navy"}`}>{heading}</h2>
        </RevealHeading>
        <FadeUp delay={0.1}>
          <p className={`max-w-xl text-body ${dark ? "text-white/70" : "text-text-secondary"}`}>{intro}</p>
        </FadeUp>
      </div>
      <StaggerContainer className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-2">
        {countryRegions.map((region) => (
          <StaggerItem
            key={region}
            className={`flex flex-col gap-3 rounded-md border p-6 ${dark ? "border-white/15 bg-white/5" : "border-border-subtle bg-surface-page"}`}
          >
            <p className={`flex items-center gap-2 text-caption font-bold uppercase tracking-widest ${dark ? "text-gold" : "text-gold-ink"}`}>
              <Globe2 aria-hidden="true" className="h-4 w-4" />
              {region}
            </p>
            <p className={`text-body ${dark ? "text-white/70" : "text-text-secondary"}`}>{regionSummaries[region]}</p>
            <ul className="mt-auto flex flex-wrap gap-2">
              {locations
                .filter((location) => location.region === region)
                .map((location) => (
                  <li key={location.slug}>
                    <Link
                      href={locationPath(location.slug)}
                      className={`inline-flex rounded-full border px-3 py-1 text-small font-semibold underline-offset-4 hover:underline ${dark ? "border-white/20 text-white" : "border-border-subtle text-navy"}`}
                    >
                      {location.title}
                    </Link>
                  </li>
                ))}
            </ul>
          </StaggerItem>
        ))}
      </StaggerContainer>
      <Link
        href={routes.locations.path}
        className={`group mt-6 inline-flex w-fit items-center gap-2 text-caption font-bold uppercase tracking-widest ${dark ? "text-gold" : "text-gold-ink"}`}
      >
        Explore all countries
        <ArrowRight aria-hidden="true" className="h-4 w-4 transition-transform group-hover:translate-x-1" />
      </Link>
    </section>
  );
}
