import { getLocation } from "@/config/locations";
import type { CityContent } from "@/content/cities/types";
import { africaCities } from "@/content/cities/africa";
import { northAmericaCities } from "@/content/cities/north-america";
import { europeCities } from "@/content/cities/europe";
import { middleEastCities } from "@/content/cities/middle-east";

export type { CityContent } from "@/content/cities/types";

/** Every city sub-location page, in country order. */
export const cityContent: CityContent[] = [...africaCities, ...northAmericaCities, ...europeCities, ...middleEastCities];

export function citiesForCountry(countrySlug: string): CityContent[] {
  return cityContent.filter((city) => city.countrySlug === countrySlug);
}

export function getCity(countrySlug: string, citySlug: string): CityContent | undefined {
  return cityContent.find((city) => city.countrySlug === countrySlug && city.slug === citySlug);
}

/** City page URL, e.g. `/ng/lagos/`. */
export function cityPath(city: Pick<CityContent, "countrySlug" | "slug">): string {
  const country = getLocation(city.countrySlug);
  return `/${country?.countryCode ?? "locations"}/${city.slug}/`;
}

/** Finds a city by the display name used in a country's `cityProfiles`. */
export function getCityByName(countrySlug: string, name: string): CityContent | undefined {
  return cityContent.find((city) => city.countrySlug === countrySlug && city.name === name);
}
