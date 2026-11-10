import Link from "next/link";
import { ArrowUpRight, FileText } from "lucide-react";
import { SectionKicker } from "@/components/ui/section-kicker";
import { RevealHeading } from "@/components/motion/reveal-heading";
import { FadeUp } from "@/components/motion/fade-up";
import { StaggerContainer, StaggerItem } from "@/components/motion/stagger";
import { InlineLinkText } from "@/components/content/inline-link-text";
import { cn } from "@/lib/utils";
import type { ContentGuide, RelatedInsightLink } from "@/types/content";

interface ContentGuideBandProps {
  guide: ContentGuide;
  id?: string;
  className?: string;
}

/**
 * Explanatory guide band for canonical service and service-family pages
 * (talent-acquisition SEO pass). Deliberately composed only from the
 * site's existing section pattern — the same two-column band, kicker,
 * display H2, H3 + body typography, padding and Layered Rise and Reveal
 * motion already used by the "How we work" / "Our delivery approach"
 * sections — so it reads as part of the existing design, not a new one.
 * All copy is server-rendered and crawlable.
 */
export function ContentGuideBand({ guide, id, className }: ContentGuideBandProps) {
  return (
    <section
      id={id}
      className={cn("grid grid-cols-1 gap-10 p-8 sm:p-10 lg:grid-cols-[0.8fr_1.2fr] lg:p-14", className)}
    >
      <div>
        <RevealHeading>
          <SectionKicker tone="light">{guide.kicker}</SectionKicker>
          <h2 className="mt-4 max-w-md font-display text-h1 font-bold text-navy">{guide.heading}</h2>
        </RevealHeading>
        {guide.intro && (
          <FadeUp delay={0.15}>
            <p className="mt-4 max-w-md text-body text-text-secondary">
              <InlineLinkText text={guide.intro} />
            </p>
          </FadeUp>
        )}
      </div>
      <StaggerContainer className="flex flex-col">
        {guide.sections.map((section) => (
          <StaggerItem key={section.heading} className="border-b border-border-subtle py-6 first:border-t">
            <h3 className="font-display text-h4 font-bold text-navy">{section.heading}</h3>
            {section.paragraphs.map((paragraph, index) => (
              <p key={index} className="mt-2 text-body text-text-secondary">
                <InlineLinkText text={paragraph} />
              </p>
            ))}
          </StaggerItem>
        ))}
      </StaggerContainer>
    </section>
  );
}

/**
 * Related insight articles, rendered in the same dashed editorial panel
 * (border, icon, padding) as EmptyEditorialState so the "Still deciding"
 * row keeps its existing look — it simply shows real, published articles
 * instead of the empty placeholder when verified links exist.
 */
export function RelatedInsightsPanel({ insights }: { insights: RelatedInsightLink[] }) {
  return (
    <div className="flex flex-col items-start gap-3 border border-dashed border-border-strong p-8">
      <FileText aria-hidden="true" className="h-6 w-6 text-text-secondary" />
      <p className="text-caption font-bold uppercase tracking-widest text-text-secondary">Related insights</p>
      <ul className="flex flex-col gap-3">
        {insights.map((insight) => (
          <li key={insight.path}>
            <Link
              href={insight.path}
              className="inline-flex items-start gap-2 text-body font-semibold text-navy underline-offset-4 hover:text-gold-ink hover:underline"
            >
              {insight.title}
              <ArrowUpRight aria-hidden="true" className="mt-1 h-4 w-4 shrink-0" />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

/** Same as RelatedInsightsPanel but as a stagger-ready list for bands with more room. */
export function RelatedInsightsList({ insights }: { insights: RelatedInsightLink[] }) {
  return (
    <StaggerContainer>
      <ul className="flex flex-col">
        {insights.map((insight) => (
          <StaggerItem key={insight.path} as="li" className="border-t border-border-subtle first:border-t-0">
            <Link
              href={insight.path}
              className="flex items-center justify-between gap-4 py-4 font-semibold text-navy hover:text-gold-ink"
            >
              {insight.title}
              <ArrowUpRight aria-hidden="true" className="h-4 w-4 shrink-0" />
            </Link>
          </StaggerItem>
        ))}
      </ul>
    </StaggerContainer>
  );
}
