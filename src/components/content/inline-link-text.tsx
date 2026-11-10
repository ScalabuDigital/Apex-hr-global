import Link from "next/link";
import { Fragment } from "react";

/** Matches `[anchor text](/path/)` or `[anchor text](https://…)`. */
const INLINE_LINK = /\[([^\]]+)\]\(((?:\/|https:\/\/)[^)\s]+)\)/g;

export interface InlineLinkToken {
  label: string;
  href: string;
}

/** Extracts every inline link from a paragraph string (used by tests and the renderer). */
export function extractInlineLinks(text: string): InlineLinkToken[] {
  return [...text.matchAll(INLINE_LINK)].map((match) => ({ label: match[1], href: match[2] }));
}

/** Strips inline-link markup, leaving only the anchor text. */
export function stripInlineLinks(text: string): string {
  return text.replace(INLINE_LINK, "$1");
}

const linkClassName = "font-semibold text-navy underline underline-offset-4 hover:text-gold-ink";

/**
 * Renders a plain content string, turning `[anchor](href)` tokens into
 * links. Internal paths use next/link; external official sources open in a
 * new tab. Styling reuses the site's existing inline-link treatment
 * (navy, underlined, gold-ink on hover) — no new design tokens.
 */
export function InlineLinkText({ text }: { text: string }) {
  const parts: React.ReactNode[] = [];
  let lastIndex = 0;
  for (const match of text.matchAll(INLINE_LINK)) {
    const [full, label, href] = match;
    const start = match.index ?? 0;
    if (start > lastIndex) parts.push(text.slice(lastIndex, start));
    parts.push(
      href.startsWith("/") ? (
        <Link key={`${href}-${start}`} href={href} className={linkClassName}>
          {label}
        </Link>
      ) : (
        <a key={`${href}-${start}`} href={href} className={linkClassName} target="_blank" rel="noopener noreferrer">
          {label}
        </a>
      ),
    );
    lastIndex = start + full.length;
  }
  if (lastIndex < text.length) parts.push(text.slice(lastIndex));
  return <>{parts.map((part, index) => <Fragment key={index}>{part}</Fragment>)}</>;
}
