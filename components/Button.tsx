import Link from "next/link";
import type { ReactNode } from "react";

type Variant = "primary" | "outline" | "outlineLight" | "solid";

const variantClasses: Record<Variant, string> = {
  primary:
    "bg-[color:var(--color-accent)] text-[color:var(--color-inverse)] border-[color:var(--color-accent)] hover:bg-[color:var(--color-foreground)] hover:border-[color:var(--color-foreground)]",
  outline:
    "bg-transparent text-[color:var(--color-foreground)] border-[color:var(--color-foreground)] hover:bg-[color:var(--color-foreground)] hover:text-[color:var(--color-inverse)]",
  outlineLight:
    "bg-transparent text-[color:var(--color-inverse)] border-[color:var(--color-inverse)] hover:bg-[color:var(--color-inverse)] hover:text-[color:var(--color-foreground)]",
  solid:
    "min-w-[240px] bg-[color:var(--color-panel)] text-[color:var(--color-foreground)] border-[color:var(--color-panel)] hover:bg-[#bdb09a] hover:border-[#bdb09a]",
};

const baseClasses =
  "inline-flex items-center justify-center font-serif font-bold text-[15px] tracking-wide border-2 rounded-[10px] px-5 py-4 transition-colors duration-150";

export function Button({
  href,
  children,
  variant = "primary",
}: {
  href: string;
  children: ReactNode;
  variant?: Variant;
}) {
  const isExternal = href.startsWith("http") || href.startsWith("mailto:");
  const className = `${baseClasses} ${variantClasses[variant]}`;

  if (isExternal) {
    return (
      <a href={href} className={className}>
        {children}
      </a>
    );
  }
  return (
    <Link href={href} className={className}>
      {children}
    </Link>
  );
}
