import type { ReactNode } from "react";
import Link from "next/link";

/**
 * Renders a string with minimal markdown:
 *  - `**bold**` → <strong>
 *  - `[text](href)` → <Link> (internal) or <a> (external)
 */
export function RichText({ text }: { text: string }): ReactNode {
  const parts = text.split(/(\*\*[^*]+\*\*|\[[^\]]+\]\([^)]+\))/g);
  return (
    <>
      {parts.map((part, i) => {
        if (part.startsWith("**") && part.endsWith("**")) {
          return <strong key={i}>{part.slice(2, -2)}</strong>;
        }
        const linkMatch = part.match(/^\[([^\]]+)\]\(([^)]+)\)$/);
        if (linkMatch) {
          const [, label, href] = linkMatch;
          const isExternal = href.startsWith("http") || href.startsWith("mailto:");
          const className =
            "underline underline-offset-4 hover:opacity-70 transition-opacity";
          if (isExternal) {
            return (
              <a key={i} href={href} className={className}>
                {label}
              </a>
            );
          }
          return (
            <Link key={i} href={href} className={className}>
              {label}
            </Link>
          );
        }
        return <span key={i}>{part}</span>;
      })}
    </>
  );
}
