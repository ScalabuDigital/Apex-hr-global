/**
 * Site identity constants for the Apex HR global site (www.apexhrllc.com),
 * a standalone website — see docs/GLOBAL-SITE.md. Do not add unverified
 * claims, statistics, addresses or social profile URLs.
 */
const whatsappNumber = "447762272692";

export const siteConfig = {
  name: "Apex HR",
  legalName: "Apex HR",
  /**
   * Reads `NEXT_PUBLIC_SITE_URL` so canonical/OG/sitemap/hreflang URLs
   * resolve to the deployed domain. Falls back to the global production
   * domain when the variable is unset OR empty (`||`, not `??`, because an
   * empty string would otherwise break `new URL(path, "")`).
   */
  productionUrl: (process.env.NEXT_PUBLIC_SITE_URL || "https://www.apexhrllc.com").replace(/\/+$/, ""),
  /** Copy stays in British English (the brand's house style) for every market. */
  defaultLocale: "en",
  titleTemplate: "%s | Apex HR",
  defaultTitle: "Apex HR — Global HR & Recruitment Company",
  defaultDescription:
    "Apex HR is an international HR, recruitment and people-consulting partner for employers across Africa, North America, Europe and the Middle East.",
  /** Left empty until an approved social profile is confirmed. */
  socialProfiles: [] as string[],
  /** Public contact channels confirmed by the client. */
  contactPhoneDisplay: "+44 7762 272692",
  whatsappNumber,
  whatsappUrl: `https://wa.me/${whatsappNumber}`,
  contactEmail: "hello@apexhrllc.com",
  /**
   * Job board contact email shown on job board surfaces (vacancy archive
   * fallback, application-form error message). Kept separate from
   * `contactEmail` so general-contact changes never alter the job board.
   */
  jobBoardContactEmail: "hello@apexhrllc.com",
};

export function absoluteUrl(path: string): string {
  return new URL(path, siteConfig.productionUrl).toString();
}
