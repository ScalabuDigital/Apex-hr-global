import { describe, expect, it } from "vitest";
import { homeHreflang, serviceHreflang } from "@/lib/seo/hreflang";
import { locations, locationPath } from "@/config/locations";
import { serviceLocationCombos } from "@/config/service-locations";
import { reservedSlugs } from "@/config/reserved-slugs";
import { countryMetadata } from "@/lib/country-route";
import { metadata as homeMetadata } from "@/app/page";

const GLOBAL = "https://www.apexhrllc.com";

describe("country taxonomy", () => {
  it("has 12 countries with unique ISO codes, slugs and en-XX hreflang tags", () => {
    expect(locations).toHaveLength(12);
    expect(new Set(locations.map((l) => l.countryCode)).size).toBe(12);
    expect(new Set(locations.map((l) => l.slug)).size).toBe(12);
    for (const location of locations) {
      expect(location.countryCode).toMatch(/^[a-z]{2}$/);
      expect(location.hreflang).toBe(`en-${location.countryCode.toUpperCase()}`);
    }
  });

  it("reserves every country code so a WordPress post can never take its URL", () => {
    for (const location of locations) expect(reservedSlugs.has(location.countryCode)).toBe(true);
  });
});

describe("standalone site: hreflang never leaves this domain", () => {
  it("has no en-GB entry and no URL outside www.apexhrllc.com in any cluster", () => {
    const clusters = [homeHreflang(), ...serviceLocationCombos.map((c) => serviceHreflang(c.serviceSlug)!)];
    for (const cluster of clusters) {
      expect(cluster["en-GB"]).toBeUndefined();
      for (const url of Object.values(cluster)) expect(url.startsWith(`${GLOBAL}/`), url).toBe(true);
    }
  });
});

describe("homepage hreflang cluster", () => {
  const cluster = homeHreflang();

  it("declares x-default and en as the global homepage", () => {
    expect(cluster["x-default"]).toBe(`${GLOBAL}/`);
    expect(cluster.en).toBe(`${GLOBAL}/`);
  });

  it("declares every country hub under its own hreflang tag", () => {
    for (const location of locations) {
      expect(cluster[location.hreflang]).toBe(`${GLOBAL}${locationPath(location.slug)}`);
    }
    expect(Object.keys(cluster)).toHaveLength(2 + locations.length);
  });

  it("is emitted identically on the homepage and on every country hub (reciprocal)", () => {
    expect(homeMetadata.alternates?.languages).toEqual(cluster);
    for (const location of locations) {
      const metadata = countryMetadata(location.countryCode);
      expect(metadata.alternates?.languages).toEqual(cluster);
      expect(metadata.alternates?.canonical).toBe(`${GLOBAL}/${location.countryCode}/`);
    }
  });
});

describe("service hreflang", () => {
  it("pairs a global service with each curated country version", () => {
    const cluster = serviceHreflang("executive-search-firm")!;
    expect(cluster["x-default"]).toBe(`${GLOBAL}/services/executive-search-firm/`);
    const combos = serviceLocationCombos.filter((c) => c.serviceSlug === "executive-search-firm");
    expect(combos.length).toBeGreaterThan(0);
    for (const combo of combos) {
      const location = locations.find((l) => l.slug === combo.locationSlug)!;
      expect(cluster[location.hreflang]).toBe(`${GLOBAL}/services/${combo.slug}/`);
    }
  });

  it("emits no cluster for a service with no country versions", () => {
    const withoutCountries = "tupe-advisory-firm";
    expect(serviceLocationCombos.some((c) => c.serviceSlug === withoutCountries)).toBe(false);
    expect(serviceHreflang(withoutCountries)).toBeUndefined();
  });
});
