import "server-only";

import type { Locale, PageContent, PageSlug } from "./types";
import { locales } from "./types";

type PageLoader = () => Promise<PageContent>;
type LocaleBundle = Record<PageSlug, PageLoader>;

const bundles: Record<Locale, LocaleBundle> = {
  en: {
    home: () => import("./en/home").then((m) => m.default),
    "about-me": () => import("./en/about-me").then((m) => m.default),
    "who-i-work-with": () =>
      import("./en/who-i-work-with").then((m) => m.default),
    fees: () => import("./en/fees").then((m) => m.default),
    contact: () => import("./en/contact").then((m) => m.default),
    accessibility: () => import("./en/accessibility").then((m) => m.default),
  },
};

export function hasLocale(value: string): value is Locale {
  return (locales as readonly string[]).includes(value);
}

export async function getPageContent(
  locale: Locale,
  slug: PageSlug,
): Promise<PageContent> {
  return bundles[locale][slug]();
}
