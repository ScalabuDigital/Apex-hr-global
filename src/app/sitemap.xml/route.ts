import { absoluteUrl } from "@/config/site";
import { getSitemapGroups, latestLastModified } from "@/lib/seo/sitemap-data";
import { buildSitemapIndexXml, SITEMAP_CONTENT_TYPE, type SitemapIndexEntry } from "@/lib/seo/xml-sitemap";

/**
 * Sitemap index at /sitemap.xml — kept as the single URL submitted to
 * Search Console and referenced by robots.txt (src/app/robots.ts), now
 * pointing at the grouped child sitemaps below instead of listing
 * every URL directly. Touches the WordPress feed (to compute an honest
 * `lastmod` for insight-sitemap.xml and vacancy-sitemap.xml), so this matches the original
 * src/app/sitemap.ts's revalidation window.
 */
export const revalidate = 300;

export async function GET(): Promise<Response> {
  const groups = await getSitemapGroups();

  const candidates: Array<[string, (typeof groups)[keyof typeof groups]]> = [
    ["/page-sitemap.xml", groups.page],
    ["/service-sitemap.xml", groups.service],
    ["/sector-sitemap.xml", groups.sector],
    ["/location-sitemap.xml", groups.location],
    ["/insight-sitemap.xml", groups.insight],
    ["/vacancy-sitemap.xml", groups.vacancy],
  ];
  // Empty child sitemaps (for example no open vacancies) are left out of
  // the index rather than submitted with no URLs.
  const entries: SitemapIndexEntry[] = candidates
    .filter(([, group]) => group.length > 0)
    .map(([path, group]) => ({ loc: absoluteUrl(path), lastModified: latestLastModified(group) }));

  const xml = buildSitemapIndexXml(entries, "/sitemap.xsl");
  return new Response(xml, { headers: { "Content-Type": SITEMAP_CONTENT_TYPE } });
}
