import type { Locale, SiteContent } from "./types";

const site: Record<Locale, SiteContent> = {
  en: {
    wordmark: "Ramona Gyorfi | Sport, Performance & Psychology",
    nav: [
      { label: "Home", href: "/en" },
      { label: "About Me", href: "/en/about-me" },
      { label: "Who I Work With", href: "/en/who-i-work-with" },
      { label: "Fees", href: "/en/fees" },
      { label: "Accessibility", href: "/en/accessibility" },
      { label: "Contact", href: "/en/contact" },
    ],
    footer: {
      tagline: "Ramona Gyorfi | Sport and Performance Psychology",
      email: "hello@ramonagyorfi.com",
    },
    socials: [
      {
        platform: "instagram",
        label: "Instagram",
        href: "https://www.instagram.com/ramona_everydaying/",
      },
      {
        platform: "linkedin",
        label: "LinkedIn",
        href: "https://www.linkedin.com/in/ramonagyorfi/",
      },
    ],
    languageLabel: "English",
  },
};

export function getSiteContent(locale: Locale): SiteContent {
  return site[locale];
}
