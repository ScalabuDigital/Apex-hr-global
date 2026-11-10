import { absoluteUrl } from "@/config/site";
import { locations, locationPath } from "@/config/locations";
import { serviceLocationCombos } from "@/config/service-locations";

/**
 * hreflang clusters for the global site (www.apexhrllc.com).
 *
 * This site is fully standalone: every cluster member lives on this domain,
 * so the clusters are reciprocal on their own (each member emits the same
 * map, including itself). There is deliberately no link to any other Apex HR
 * domain — see docs/GLOBAL-SITE.md.
 *
 * - `x-default` and `en` → the global (international) version of the page
 * - `en-NG`, `en-US`, … → the country version of the same page
 *
 * Only pages that genuinely have country versions get a cluster: the
 * homepage (with the 12 country hubs) and services that have curated
 * service-in-country pages. A cluster with no regional alternates is not
 * emitted.
 *
 * The output is passed straight into Next.js metadata
 * `alternates.languages`, which renders `<link rel="alternate" hreflang>`.
 */
export type HreflangMap = Record<string, string>;

function globalEntries(path: string): HreflangMap {
  const url = absoluteUrl(path);
  return { "x-default": url, en: url };
}

/**
 * Homepage cluster: the global homepage and every country hub (`/ng/`,
 * `/us/`, …). Used by the homepage and by every country hub.
 */
export function homeHreflang(): HreflangMap {
  return {
    ...globalEntries("/"),
    ...Object.fromEntries(locations.map((location) => [location.hreflang, absoluteUrl(locationPath(location.slug))])),
  };
}

/**
 * Service cluster: the global service page plus each curated country
 * version (`/services/{slug}-in-{country}/`). Returns undefined when the
 * service has no country versions.
 */
export function serviceHreflang(serviceSlug: string): HreflangMap | undefined {
  const countryVersions = serviceLocationCombos
    .filter((combo) => combo.serviceSlug === serviceSlug)
    .map((combo) => {
      const location = locations.find((entry) => entry.slug === combo.locationSlug);
      return location ? ([location.hreflang, absoluteUrl(`/services/${combo.slug}/`)] as const) : null;
    })
    .filter((entry): entry is readonly [string, string] => entry !== null);

  if (countryVersions.length === 0) return undefined;
  return { ...globalEntries(`/services/${serviceSlug}/`), ...Object.fromEntries(countryVersions) };
}
