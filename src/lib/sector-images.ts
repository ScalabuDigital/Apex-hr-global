/**
 * Maps a sector slug to its approved photo in public/images. A sector left
 * out of this map has no approved photo yet — consumers (e.g. SectorCard)
 * should fall back to a plain text tile rather than a placeholder stock
 * image. Shared by the homepage's featured-sectors marquee and the
 * per-location "sectors we support" cards.
 */
export const sectorImages: Record<string, string> = {
  "hr-company-for-startups-and-scale-ups": "/images/startup.jpg",
  "hr-company-for-professional-services": "/images/professional-services.png",
  "hr-company-for-healthcare": "/images/healthcare.png",
  "hr-company-for-it": "/images/IT.png",
  "hr-company-for-construction": "/images/construction.png",
  "hr-company-for-distribution": "/images/distribution.png",
  "hr-company-for-manufacturers": "/images/manufacturing.png",
  "hr-company-for-hospitality": "/images/hospitality.png",
};
