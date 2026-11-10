import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { CaseStudyTemplate } from "@/components/templates/case-study-template";
import {
  CASE_STUDY_ROUTE_STATUS,
  caseStudyContent,
  caseStudyPath,
  getCaseStudy,
  isCaseStudyIndexable,
} from "@/content/case-studies-data";
import { getService } from "@/config/services";
import { getSector } from "@/config/sectors";
import { buildMetadata } from "@/lib/seo/metadata";
import { getBreadcrumbJsonLd, getCaseStudyArticleJsonLd, toJsonLdScript } from "@/lib/seo/structured-data";
import { routes } from "@/config/routes";
import type { RouteRecord } from "@/types/route";

interface PageProps {
  params: Promise<{ slug: string }>;
}

// Unknown slugs fall through to notFound() below, matching the other
// dynamic route families.
export function generateStaticParams() {
  return caseStudyContent.map((entry) => ({ slug: entry.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const caseStudy = getCaseStudy(slug);
  return buildMetadata({
    title: caseStudy ? caseStudy.seoTitle : "Case Study",
    description: caseStudy?.metaDescription,
    path: caseStudyPath(slug),
    // Individual case-study routes are Provisional (docs/MASTER-SITEMAP.md,
    // D-020): noindex,follow until the route decision changes.
    index: caseStudy ? isCaseStudyIndexable(caseStudy) : false,
  });
}

export default async function CaseStudyPage({ params }: PageProps) {
  const { slug } = await params;
  const caseStudy = getCaseStudy(slug);

  if (!caseStudy) {
    notFound();
  }

  const indexable = isCaseStudyIndexable(caseStudy);
  const path = caseStudyPath(caseStudy.slug);
  const caseStudyRoute: RouteRecord = {
    id: caseStudy.slug,
    label: caseStudy.shortTitle,
    path,
    status: CASE_STUDY_ROUTE_STATUS,
    readyToIndex: indexable,
  };
  const breadcrumbTrail = [routes.caseStudies, caseStudyRoute];
  const about = [
    ...caseStudy.serviceSlugs.map((s) => getService(s)?.title),
    ...caseStudy.sectorSlugs.map((s) => getSector(s)?.title),
  ].filter((label): label is string => Boolean(label));

  const jsonLd = [
    getCaseStudyArticleJsonLd({
      path,
      headline: caseStudy.title,
      description: caseStudy.metaDescription,
      datePublished: caseStudy.datePublished,
      dateModified: caseStudy.dateModified,
      about,
    }),
    getBreadcrumbJsonLd(routes.home.label, breadcrumbTrail),
  ];

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: toJsonLdScript(jsonLd) }} />
      <CaseStudyTemplate breadcrumbTrail={breadcrumbTrail} caseStudy={caseStudy} indexable={indexable} />
    </>
  );
}
