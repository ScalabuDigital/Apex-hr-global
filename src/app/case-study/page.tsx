import { Section } from "@/components/layout/section";
import { Breadcrumbs } from "@/components/layout/breadcrumbs";
import { SectionKicker } from "@/components/ui/section-kicker";
import { EmptyEditorialState } from "@/components/content/empty-editorial-state";
import { CaseStudyCard } from "@/components/content/case-study-card";
import { StaggerContainer, StaggerItem } from "@/components/motion/stagger";
import { buildMetadata } from "@/lib/seo/metadata";
import { routes } from "@/config/routes";
import { caseStudyContent, toCaseStudyPreview } from "@/content/case-studies-data";

const hasIllustrative = caseStudyContent.some((entry) => entry.evidenceBasis === "illustrative");

export const metadata = buildMetadata({
  title: "Case Studies",
  description: hasIllustrative
    ? "HR and recruitment scenarios showing how Apex HR approaches common employer challenges, from scale-up hiring to outsourced HR."
    : "Verified results and case studies from Apex HR's work with employers.",
  path: routes.caseStudies.path,
  index: routes.caseStudies.readyToIndex,
});

export default function CaseStudiesPage() {
  return (
    <Section tone="page">
      <Breadcrumbs trail={[routes.caseStudies]} />
      <div className="mt-6 max-w-[var(--container-reading)]">
        <SectionKicker>Case studies</SectionKicker>
        <h1 className="mt-3 font-display text-h1 font-bold text-navy">
          How Apex HR approaches employer challenges
        </h1>
        <p className="mt-4 text-lead text-text-secondary">
          {hasIllustrative
            ? "These case studies are scenarios. Each shows how Apex HR would approach a common recruitment or HR challenge: the context, the approach, the work involved and how success would be measured."
            : "Verified case studies, with evidence approved for publication, will appear here."}
        </p>
      </div>
      <div className="mt-10">
        {caseStudyContent.length > 0 ? (
          <StaggerContainer className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {caseStudyContent.map((entry) => (
              <StaggerItem key={entry.slug}>
                <CaseStudyCard caseStudy={toCaseStudyPreview(entry)} />
              </StaggerItem>
            ))}
          </StaggerContainer>
        ) : (
          <EmptyEditorialState message="No verified case studies are published yet. None are fabricated to fill this page." />
        )}
      </div>
    </Section>
  );
}
