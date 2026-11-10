import { Section } from "@/components/layout/section";
import { SectionHeading } from "@/components/ui/section-heading";
import { EmptyEditorialState } from "@/components/content/empty-editorial-state";
import { CaseStudyCard } from "@/components/content/case-study-card";
import { LinkButton } from "@/components/ui/link-button";
import { RevealHeading } from "@/components/motion/reveal-heading";
import { StaggerContainer, StaggerItem } from "@/components/motion/stagger";
import { caseStudyContent, toCaseStudyPreview } from "@/content/case-studies-data";
import { routes } from "@/config/routes";

/** How many case-study cards the homepage shows. */
const HOMEPAGE_CASE_STUDY_LIMIT = 3;

/**
 * Case studies per DESIGN.md 17.8, fed from src/content/case-studies-data.ts.
 * While every record is an illustrative scenario (D-020), the heading must
 * not promise "results": it describes approach instead, and each card
 * carries the visible "Scenario" label. Once verified
 * engagements exist, the results heading returns automatically.
 * The "View all case studies" link only renders once the hub route is
 * approved indexable (routes.caseStudies.readyToIndex, the single source
 * of truth in routes.ts) — SEO audit Phase 3 Batch 4 corrective pass.
 */
export function CaseStudiesSection() {
  const featured = caseStudyContent.slice(0, HOMEPAGE_CASE_STUDY_LIMIT);
  const allIllustrative = featured.every((entry) => entry.evidenceBasis === "illustrative");
  const canLinkToHub = featured.length > 0 && routes.caseStudies.readyToIndex;

  return (
    <Section tone="page" gutter="always">
      <RevealHeading className="flex flex-wrap items-end justify-between gap-6">
        <SectionHeading
          kicker="Case studies"
          title={allIllustrative ? "How we approach employer challenges" : "Results for the employers we work with"}
          description={
            allIllustrative && featured.length > 0
              ? "Scenarios showing how Apex HR would tackle common recruitment and HR challenges."
              : undefined
          }
        />
        {canLinkToHub && (
          <LinkButton href={routes.caseStudies.path} variant="tertiary" surface="light">
            View all case studies
          </LinkButton>
        )}
      </RevealHeading>
      <div className="mt-8">
        {featured.length > 0 ? (
          <StaggerContainer className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {featured.map((entry) => (
              <StaggerItem key={entry.slug}>
                <CaseStudyCard caseStudy={toCaseStudyPreview(entry)} />
              </StaggerItem>
            ))}
          </StaggerContainer>
        ) : (
          <EmptyEditorialState message="Verified case studies with approved evidence will appear here once published." />
        )}
      </div>
    </Section>
  );
}
