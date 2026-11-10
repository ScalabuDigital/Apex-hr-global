import Link from "next/link";
import { Card } from "@/components/ui/card";
import type { CaseStudyPreview } from "@/content/home";

interface CaseStudyCardProps {
  caseStudy: CaseStudyPreview;
}

/**
 * Case study preview card, per DESIGN.md section 16 "Case-study cards".
 * Only render this with approved content. An illustrative or anonymised
 * record must pass `label` so the card identifies it clearly (DESIGN.md:
 * "Clearly identify anonymised case studies"). See EmptyEditorialState
 * for the fallback used while none exists.
 */
export function CaseStudyCard({ caseStudy }: CaseStudyCardProps) {
  return (
    <Card className="h-full p-6 hover:border-navy">
      {(caseStudy.label || caseStudy.meta) && (
        <p className="mb-3 text-caption font-bold uppercase tracking-widest text-text-secondary">
          {[caseStudy.label, caseStudy.meta].filter(Boolean).join(" · ")}
        </p>
      )}
      <h3 className="font-display text-h4 font-bold text-navy">
        <Link href={caseStudy.href} className="hover:underline">
          {caseStudy.title}
        </Link>
      </h3>
      <p className="mt-2 text-body text-text-secondary">{caseStudy.summary}</p>
    </Card>
  );
}
