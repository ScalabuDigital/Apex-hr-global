import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getLocationByCountryCode, locationPath } from "@/config/locations";
import { locationContent } from "@/content/locations-data";
import { cityPath, citiesForCountry, getCity } from "@/content/cities";
import { CityPageTemplate } from "@/components/templates/city-page-template";
import { buildMetadata } from "@/lib/seo/metadata";
import { getBreadcrumbJsonLd, getServiceJsonLd, toJsonLdScript } from "@/lib/seo/structured-data";
import { routes } from "@/config/routes";
import type { ContentFaqItem } from "@/types/content";
import type { RouteRecord } from "@/types/route";

/**
 * Shared implementation of every city sub-location route
 * (`/{countryCode}/{city}/`). Each `src/app/{countryCode}/[city]/page.tsx`
 * calls these with its own country code; `dynamicParams = false` there means
 * only the cities listed in src/content/cities/ are ever served.
 */
const officeFaq: ContentFaqItem = {
  id: "city-office",
  question: "Does Apex HR have an office in this city?",
  answer:
    "Apex HR supports employers in this city remotely and, where useful, on-site. This page does not represent a confirmed local office.",
};

function resolve(countryCode: string, citySlug: string) {
  const country = getLocationByCountryCode(countryCode);
  const city = country ? getCity(country.slug, citySlug) : undefined;
  const countryContent = country ? locationContent.find((entry) => entry.slug === country.slug) : undefined;
  return { country, city, countryContent };
}

export function cityStaticParams(countryCode: string) {
  const country = getLocationByCountryCode(countryCode);
  return country ? citiesForCountry(country.slug).map((city) => ({ city: city.slug })) : [];
}

export function cityRouteMetadata(countryCode: string, citySlug: string): Metadata {
  const { country, city } = resolve(countryCode, citySlug);
  if (!country || !city) {
    return buildMetadata({ title: "Not found", path: `/${countryCode}/${citySlug}/`, index: false });
  }
  return buildMetadata({
    title: `HR & Recruitment Support in ${city.name}, ${country.title}`,
    description: city.metaDescription,
    path: cityPath(city),
    index: routes.locations.readyToIndex,
  });
}

export function CityRoutePage({ countryCode, citySlug }: { countryCode: string; citySlug: string }) {
  const { country, city, countryContent } = resolve(countryCode, citySlug);
  if (!country || !city || !countryContent) notFound();

  const path = cityPath(city);
  const countryRoute: RouteRecord = {
    id: country.slug,
    label: country.title,
    path: locationPath(country.slug),
    status: "confirmed",
    readyToIndex: true,
  };
  const cityRoute: RouteRecord = { id: `${country.slug}-${city.slug}`, label: city.name, path, status: "confirmed", readyToIndex: true };
  const breadcrumbTrail = [routes.locations, countryRoute, cityRoute];
  const faqs = [...city.faqs, officeFaq];
  // FAQPage schema is emitted by FaqWithContactForm from `faqs`.
  const jsonLd = [
    getServiceJsonLd({
      name: `HR and Recruitment Support in ${city.name}, ${country.title}`,
      description: city.metaDescription,
      path,
      areaServed: country.countryCode.toUpperCase(),
    }),
    getBreadcrumbJsonLd(routes.home.label, breadcrumbTrail),
  ];

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: toJsonLdScript(jsonLd) }} />
      <CityPageTemplate
        city={city}
        country={country}
        countryContent={countryContent}
        breadcrumbTrail={breadcrumbTrail}
        faqs={faqs}
      />
    </>
  );
}
