import { CheckCircle2, ExternalLink } from "lucide-react";
import { Section } from "@/components/layout/section";
import { Breadcrumbs } from "@/components/layout/breadcrumbs";
import { SectionKicker } from "@/components/ui/section-kicker";
import { SectionHeading } from "@/components/ui/section-heading";
import { LinkButton } from "@/components/ui/link-button";
import { Card } from "@/components/ui/card";
import { CaseStudyCard } from "@/components/content/case-study-card";
import { ContentGuideBand } from "@/components/content/content-guide";
import { CrawlableLinkList } from "@/components/content/crawlable-link-list";
import { FaqWithContactForm } from "@/components/content/faq-with-contact-form";
import { InlineLinkText } from "@/components/content/inline-link-text";
import { RevealHeading } from "@/components/motion/reveal-heading";
import { FadeUp } from "@/components/motion/fade-up";
import { StaggerContainer, StaggerItem } from "@/components/motion/stagger";
import { getService } from "@/config/services";
import { getSector } from "@/config/sectors";
import {
  ILLUSTRATIVE_LABEL,
  getRelatedCaseStudies,
  toCaseStudyPreview,
  type CaseStudyContent,
} from "@/content/case-studies-data";
import type { RouteRecord } from "@/types/route";

interface CaseStudyTemplateProps {
  breadcrumbTrail: RouteRecord[];
  caseStudy: CaseStudyContent;
  /** Mirrors the page's robots directive; FAQPage schema is only emitted on indexable pages. */
  indexable: boolean;
}

/**
 * Individual case-study page. Composed only from existing primitives
 * (Section tones, SectionHeading, ContentGuideBand, Card, CaseStudyCard,
 * CrawlableLinkList, FaqWithContactForm and the Layered Rise and Reveal
 * motion components), so it adds no new design tokens or patterns.
 *
 * Section order follows the agreed case-study structure: summary, client
 * background, challenge, objectives, approach, solutions, implementation,
 * results, takeaways, relevant services, FAQs, sources, related case
 * studies and CTA. Illustrative records show a visible disclosure in the
 * hero and frame results as measures rather than outcomes.
 */
export function CaseStudyTemplate({ breadcrumbTrail, caseStudy, indexable }: CaseStudyTemplateProps) {
  const isIllustrative = caseStudy.evidenceBasis === "illustrative";
  const services = caseStudy.serviceSlugs
    .map((slug) => getService(slug))
    .filter((entry): entry is NonNullable<typeof entry> => Boolean(entry));
  const sectors = caseStudy.sectorSlugs
    .map((slug) => getSector(slug))
    .filter((entry): entry is NonNullable<typeof entry> => Boolean(entry));
  const related = getRelatedCaseStudies(caseStudy);

  return (
    <>
      {/* Hero */}
      <Section tone="page">
        <Breadcrumbs trail={breadcrumbTrail} />
        <RevealHeading className="mt-6 max-w-(--container-reading)">
          <SectionKicker>{isIllustrative ? `Case study · ${ILLUSTRATIVE_LABEL}` : "Case study"}</SectionKicker>
          <h1 className="mt-3 font-display text-h1 font-bold text-navy">{caseStudy.title}</h1>
          <p className="mt-4 text-lead text-text-secondary">{caseStudy.summary}</p>
          <p className="mt-4 text-caption font-bold uppercase tracking-widest text-text-secondary">
            {caseStudy.sectorLabel}
          </p>
        </RevealHeading>
        <FadeUp delay={0.15} className="mt-8 flex flex-wrap gap-4">
          <LinkButton href={caseStudy.cta.href} variant="primary" surface="light">
            {caseStudy.cta.label}
          </LinkButton>
          {services[0] && (
            // Short visible label: LinkButton is whitespace-nowrap, and long
            // service titles overflowed 375px screens. The full, descriptive
            // service links live in "Relevant Apex HR services" below.
            <LinkButton
              href={`/services/${services[0].slug}/`}
              variant="secondary"
              surface="light"
              aria-label={`Explore the service: ${services[0].title}`}
            >
              Explore the service
            </LinkButton>
          )}
        </FadeUp>
      </Section>

      {/* Executive summary */}
      <Section tone="card">
        <RevealHeading>
          <SectionHeading title="Executive summary" />
        </RevealHeading>
        <FadeUp delay={0.15}>
          <p className="mt-4 max-w-(--container-reading) text-body-lg text-text-secondary">{caseStudy.executiveSummary}</p>
        </FadeUp>
      </Section>

      {/* Client background */}
      <Section tone="page">
        <RevealHeading>
          <SectionHeading kicker={isIllustrative ? "Scenario context" : undefined} title="Client background" />
        </RevealHeading>
        <FadeUp delay={0.15} className="mt-4 flex max-w-(--container-reading) flex-col gap-4">
          {caseStudy.clientBackground.map((paragraph, index) => (
            <p key={index} className="text-body text-text-secondary">
              <InlineLinkText text={paragraph} />
            </p>
          ))}
        </FadeUp>
      </Section>

      {/* Challenge + objectives */}
      <Section tone="card">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
          <div>
            <RevealHeading>
              <SectionHeading title="The challenge" />
            </RevealHeading>
            <FadeUp delay={0.15}>
              <p className="mt-4 text-body text-text-secondary">{caseStudy.challenge.intro}</p>
            </FadeUp>
            <StaggerContainer>
              <ul className="mt-4 flex flex-col gap-3">
                {caseStudy.challenge.points.map((point) => (
                  <StaggerItem key={point} as="li" className="border-l-2 border-gold pl-4 text-body text-text-secondary">
                    {point}
                  </StaggerItem>
                ))}
              </ul>
            </StaggerContainer>
          </div>
          <div>
            <RevealHeading>
              <SectionHeading title="Objectives" />
            </RevealHeading>
            <StaggerContainer>
              <ul className="mt-4 flex flex-col gap-3">
                {caseStudy.objectives.map((objective) => (
                  <StaggerItem key={objective} as="li" className="flex items-start gap-3 text-body text-text-secondary">
                    <CheckCircle2 aria-hidden="true" className="mt-1 h-4 w-4 shrink-0 text-navy" />
                    <span>{objective}</span>
                  </StaggerItem>
                ))}
              </ul>
            </StaggerContainer>
          </div>
        </div>
      </Section>

      {/* Approach and solutions */}
      <div className="bg-surface-page">
        <ContentGuideBand guide={caseStudy.approach} />
      </div>
      <div className="bg-surface-card">
        <ContentGuideBand guide={caseStudy.solutions} />
      </div>

      {/* Implementation process */}
      <Section tone="dark">
        <RevealHeading>
          <SectionHeading tone="dark" kicker="Implementation" title="How the work would be delivered" />
        </RevealHeading>
        <StaggerContainer>
          <ol className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {caseStudy.implementation.map((step, index) => (
              <StaggerItem key={step.phase} as="li">
                <span className="font-display text-h4 font-bold text-gold">{String(index + 1).padStart(2, "0")}</span>
                <h3 className="mt-2 font-display text-h4 font-bold text-white">{step.phase}</h3>
                <p className="mt-2 text-body text-white/75">{step.detail}</p>
              </StaggerItem>
            ))}
          </ol>
        </StaggerContainer>
      </Section>

      {/* Results */}
      <Section tone="page">
        <RevealHeading>
          <SectionHeading
            kicker={isIllustrative ? "How success would be measured" : "Results"}
            title={isIllustrative ? "Measuring business impact" : "Results and business impact"}
          />
        </RevealHeading>
        <FadeUp delay={0.15}>
          <p className="mt-4 max-w-(--container-reading) text-body text-text-secondary">{caseStudy.results.intro}</p>
        </FadeUp>
        <StaggerContainer className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {caseStudy.results.measures.map((measure) => (
            <StaggerItem key={measure.heading}>
              <Card className="h-full p-6">
                <h3 className="font-display text-h4 font-bold text-navy">{measure.heading}</h3>
                <p className="mt-2 text-body text-text-secondary">{measure.detail}</p>
              </Card>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </Section>

      {/* Key takeaways + relevant services */}
      <Section tone="card">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
          <div>
            <RevealHeading>
              <SectionHeading title="Key takeaways" />
            </RevealHeading>
            <StaggerContainer>
              <ul className="mt-4 flex flex-col gap-3">
                {caseStudy.takeaways.map((takeaway) => (
                  <StaggerItem key={takeaway} as="li" className="flex items-start gap-3 text-body text-text-secondary">
                    <CheckCircle2 aria-hidden="true" className="mt-1 h-4 w-4 shrink-0 text-navy" />
                    <span>{takeaway}</span>
                  </StaggerItem>
                ))}
              </ul>
            </StaggerContainer>
          </div>
          <div>
            <RevealHeading>
              <SectionHeading title="Relevant Apex HR services" />
            </RevealHeading>
            <FadeUp delay={0.15} className="mt-6 flex flex-col gap-6">
              <CrawlableLinkList
                caption="Services"
                items={services.map((service) => ({ label: service.title, href: `/services/${service.slug}/` }))}
              />
              <CrawlableLinkList
                caption="Sectors"
                items={sectors.map((sector) => ({ label: sector.title, href: `/sector/${sector.slug}/` }))}
              />
            </FadeUp>
          </div>
        </div>
      </Section>

      {/* FAQs */}
      {caseStudy.faqs.length > 0 && (
        <Section tone="page">
          <RevealHeading>
            <SectionHeading title="Frequently asked questions" />
          </RevealHeading>
          <div className="mt-8">
            <FaqWithContactForm items={caseStudy.faqs} includeSchema={indexable} />
          </div>
        </Section>
      )}

      {/* Sources */}
      {caseStudy.sources.length > 0 && (
        <Section tone="card">
          <RevealHeading>
            <SectionHeading kicker="References" title="Sources and further reading" />
          </RevealHeading>
          <FadeUp delay={0.15}>
            <p className="mt-4 max-w-(--container-reading) text-small text-text-secondary">
              Industry figures quoted on this page come from the third-party sources below. They describe the wider UK market, not Apex HR client results.
            </p>
            <ul className="mt-6 flex flex-col gap-3">
              {caseStudy.sources.map((source) => (
                <li key={source.href} className="text-body text-text-secondary">
                  <a
                    href={source.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-start gap-2 font-semibold text-navy underline underline-offset-4 hover:text-gold-ink"
                  >
                    {source.label}
                    <ExternalLink aria-hidden="true" className="mt-1 h-4 w-4 shrink-0" />
                    <span className="sr-only">(opens in a new tab)</span>
                  </a>
                  <span>{` — ${source.publisher}, ${source.date}`}</span>
                </li>
              ))}
            </ul>
          </FadeUp>
        </Section>
      )}

      {/* Related case studies */}
      {related.length > 0 && (
        <Section tone="page">
          <RevealHeading>
            <SectionHeading kicker="Case studies" title="Related case studies" />
          </RevealHeading>
          <StaggerContainer className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {related.map((entry) => (
              <StaggerItem key={entry.slug}>
                <CaseStudyCard caseStudy={toCaseStudyPreview(entry)} />
              </StaggerItem>
            ))}
          </StaggerContainer>
        </Section>
      )}

      {/* CTA */}
      <Section tone="dark" className="text-center">
        <RevealHeading>
          <h2 className="mx-auto max-w-2xl font-display text-h2 font-bold text-white">{caseStudy.cta.heading}</h2>
        </RevealHeading>
        <FadeUp delay={0.2}>
          <p className="mx-auto mt-4 max-w-[50ch] text-body-lg text-white/80">{caseStudy.cta.body}</p>
          <LinkButton
            href={caseStudy.cta.href}
            variant="primary"
            surface="dark"
            className="mt-8"
            data-analytics-id={`case-study-cta-${caseStudy.slug}`}
          >
            {caseStudy.cta.label}
          </LinkButton>
        </FadeUp>
      </Section>
    </>
  );
}
