import Link from "next/link";
import { ArrowRight, Globe2, MapPin } from "lucide-react";
import { cityPath, getCityByName } from "@/content/cities";
import { SectionKicker } from "@/components/ui/section-kicker";
import { RevealHeading } from "@/components/motion/reveal-heading";
import { FadeUp } from "@/components/motion/fade-up";
import type { LocationContent } from "@/content/locations-data";

interface LocationContextSectionProps {
  title: string;
  location: LocationContent;
}

/**
 * "Local context" section for a country hub: the market overview beside a
 * panel describing what each major business city is known for. Cities are
 * listed rather than plotted on a map (no geography is drawn, so none can
 * be drawn wrongly), and no office is implied in any of them.
 */
export function LocationContextSection({ title, location }: LocationContextSectionProps) {
  return (
    <section className="bg-surface-page py-20 lg:py-28">
      <div className="mx-auto grid max-w-7xl items-start gap-12 px-5 sm:px-8 lg:grid-cols-2 lg:px-10">
        <div>
          <RevealHeading>
            <SectionKicker tone="light">Local context</SectionKicker>
            <h2 className="mt-4 max-w-lg font-display text-h1 font-bold text-navy">
              The {title} economy and employer landscape
            </h2>
          </RevealHeading>
          <FadeUp delay={0.1} className="mt-4 flex max-w-xl flex-col gap-4">
            <p className="text-body-lg text-text-secondary">{location.localContext}</p>
            {location.marketOverview.map((paragraph) => (
              <p key={paragraph.slice(0, 32)} className="text-body text-text-secondary">
                {paragraph}
              </p>
            ))}
          </FadeUp>
        </div>

        <div className="relative overflow-hidden rounded-md bg-navy p-8 sm:p-10">
          <div aria-hidden="true" className="pointer-events-none absolute -top-16 -right-16 flex items-center justify-center">
            <span className="absolute h-72 w-72 rounded-full border border-white/10" />
            <span className="absolute h-48 w-48 rounded-full border border-white/10" />
            <span className="absolute h-24 w-24 rounded-full border border-white/10" />
          </div>
          <div className="relative z-10 flex items-center gap-4">
            <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-gold text-navy">
              <Globe2 aria-hidden="true" className="h-6 w-6" />
            </span>
            <div>
              <p className="text-caption font-bold uppercase tracking-widest text-gold">{location.region}</p>
              <p className="font-display text-h2 font-bold text-white">{title}</p>
            </div>
          </div>
          <h3 className="relative z-10 mt-8 text-small font-semibold uppercase tracking-widest text-white/60">
            Main business hubs
          </h3>
          <ul className="relative z-10 mt-4 flex flex-col gap-3">
            {location.cityProfiles.map((profile) => {
              const city = getCityByName(location.slug, profile.city);
              const body = (
                <>
                  <MapPin aria-hidden="true" className="mt-1 h-4 w-4 shrink-0 text-gold" />
                  <span className="flex-1">
                    <span className="block text-body font-semibold text-white">{profile.city}</span>
                    <span className="block text-small text-white/70">{profile.focus}</span>
                  </span>
                  {city && <ArrowRight aria-hidden="true" className="mt-1 h-4 w-4 shrink-0 text-gold transition-transform group-hover:translate-x-1" />}
                </>
              );
              return (
                <li key={profile.city}>
                  {city ? (
                    <Link
                      href={cityPath(city)}
                      aria-label={`HR and recruitment support in ${profile.city}`}
                      className="group flex gap-3 rounded-md border border-white/15 bg-white/5 px-4 py-3 transition-colors duration-(--duration-fast) hover:border-gold"
                    >
                      {body}
                    </Link>
                  ) : (
                    <div className="flex gap-3 rounded-md border border-white/15 bg-white/5 px-4 py-3">{body}</div>
                  )}
                </li>
              );
            })}
          </ul>
          <p className="relative z-10 mt-6 text-small text-white/60">
            Support delivered remotely and, where useful, on-site. No local office is implied.
          </p>
        </div>
      </div>
    </section>
  );
}
