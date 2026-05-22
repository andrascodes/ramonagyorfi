import type { Locale } from "@/content/types";

const LABELS: Record<Locale, { flag: string; label: string }> = {
  en: { flag: "🇬🇧", label: "English" },
};

export function LanguagePicker({
  locale,
  variant = "header",
}: {
  locale: Locale;
  variant?: "header" | "drawer";
}) {
  const { flag, label } = LABELS[locale];
  const sizeClasses =
    variant === "header" ? "text-xl" : "text-2xl";

  return (
    <button
      type="button"
      disabled
      aria-label={`Current language: ${label}`}
      className={`inline-flex items-center gap-2 font-serif transition-opacity ${sizeClasses} cursor-default`}
    >
      <span aria-hidden>{flag}</span>
      <span>{label}</span>
      <span aria-hidden className="opacity-60">
        ›
      </span>
    </button>
  );
}
