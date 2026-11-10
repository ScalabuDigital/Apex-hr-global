import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getLocationByCountryCode, locationPath, withArticle } from "@/config/locations";
import { locationContent } from "@/content/locations-data";
import { LocationPageTemplate } from "@/components/templates/location-page-template";
import { buildMetadata } from "@/lib/seo/metadata";
import { homeHreflang } from "@/lib/seo/hreflang";
import { getBreadcrumbJsonLd, getServiceJsonLd, toJsonLdScript } from "@/lib/seo/structured-data";
import { routes } from "@/config/routes";
import type { RouteRecord } from "@/types/route";

/**
 * Shared implementation of every country hub route (`/ng/`, `/us/`, …).
 * Each `src/app/{countryCode}/page.tsx` is a two-line file that calls these
 * with its own code, so each hub is a fully static route that never
 * competes with the root-level WordPress `[slug]` route.
 *
 * Each hub is a member of the homepage hreflang cluster (its own `en-XX`
 * tag), so it lists the global homepage and every other country hub — see src/lib/seo/hreflang.ts.
 */
function resolve(countryCode: string) {
  const location = getLocationByCountryCode(countryCode);
  const content = location ? locationContent.find((entry) => entry.slug === location.slug) : undefined;
  return { location, content };
}

export function countryMetadata(countryCode: string): Metadata {
  const { location, content } = resolve(countryCode);
  if (!location || !content) {
    return buildMetadata({ title: "Not found", path: `/${countryCode}/`, index: false });
  }
  return buildMetadata({
    title: `HR & Recruitment Support in ${withArticle(location.title)}`,
    description: content.metaDescription,
    path: locationPath(location.slug),
    index: routes.locations.readyToIndex,
    hreflang: homeHreflang(),
  });
}

export function CountryPage({ countryCode }: { countryCode: string }) {
  const { location, content } = resolve(countryCode);
  if (!location || !content) notFound();

  const path = locationPath(location.slug);
  const locationRoute: RouteRecord = {
    id: location.slug,
    label: location.title,
    path,
    status: "confirmed",
    readyToIndex: true,
  };
  const breadcrumbTrail = [routes.locations, locationRoute];
  const jsonLd = [
    getServiceJsonLd({
      name: `HR and Recruitment Support in ${withArticle(location.title)}`,
      description: content.metaDescription,
      path,
      areaServed: location.countryCode.toUpperCase(),
    }),
    getBreadcrumbJsonLd(routes.home.label, breadcrumbTrail),
  ];

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: toJsonLdScript(jsonLd) }} />
      <LocationPageTemplate title={location.title} breadcrumbTrail={breadcrumbTrail} location={content} />
    </>
  );
}
