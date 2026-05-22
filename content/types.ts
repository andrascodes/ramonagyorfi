export const locales = ["en"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "en";

export const pageSlugs = [
  "home",
  "about-me",
  "who-i-work-with",
  "fees",
  "contact",
  "accessibility",
] as const;
export type PageSlug = (typeof pageSlugs)[number];

export interface ImageRef {
  src: string;
  alt: string;
  width: number;
  height: number;
}

export interface ServiceCard {
  title: string;
  body: string;
  cta?: Cta;
}

export interface FeatureItem {
  title: string;
  body: string;
}

export interface PricingCard {
  title: string;
  bullets: string[];
}

export interface ExpandableItem {
  id: string;
  title: string;
  body: string[];
}

export type CtaVariant = "primary" | "outline" | "outlineLight" | "solid";

export type Tone = "default" | "soft" | "panel";

export interface Cta {
  label: string;
  href: string;
  variant?: CtaVariant;
}

export type Section =
  | {
      kind: "hero";
      tagline: string;
      bgVideo?: { src: string; poster?: string };
    }
  | {
      kind: "prose";
      eyebrow?: string;
      heading?: string;
      headingSize?: "page" | "section" | "inline";
      body?: string[];
      image?: ImageRef;
      imagePosition?: "left" | "right";
      afterBody?: string[];
      cta?: Cta;
      tone?: Tone;
    }
  | {
      kind: "blockquote";
      quote: string;
      attribution?: string;
    }
  | {
      kind: "serviceGrid";
      heading?: string;
      cards: ServiceCard[];
    }
  | {
      kind: "serviceCarousel";
      heading?: string;
      cards: ServiceCard[];
    }
  | {
      kind: "pricingGrid";
      heading?: string;
      cards: PricingCard[];
      note?: string;
      cta?: Cta;
    }
  | {
      kind: "expandableList";
      heading?: string;
      items: ExpandableItem[];
    }
  | {
      kind: "portrait";
      image: ImageRef;
      caption?: string;
    }
  | {
      kind: "imageWithFeatures";
      heading?: string;
      intro?: string[];
      image: ImageRef;
      imagePosition?: "left" | "right";
      features: FeatureItem[];
      cta?: Cta;
      tone?: Tone;
    }
  | {
      kind: "contactBlock";
      heading?: string;
      intro?: string;
      email: string;
    }
  | {
      kind: "cta";
      label: string;
      href: string;
      variant?: CtaVariant;
      tone?: Tone;
    };

export type PageBg = "cream" | "olive" | "panel";

export interface PageContent {
  slug: PageSlug;
  meta: { title: string; description: string };
  pageBg?: PageBg;
  sections: Section[];
}

export interface NavItem {
  label: string;
  href: string;
}

export interface SocialLink {
  platform: "instagram" | "linkedin";
  label: string;
  href: string;
}

export interface SiteContent {
  wordmark: string;
  nav: NavItem[];
  footer: {
    tagline: string;
    email: string;
  };
  socials: SocialLink[];
  languageLabel: string;
}
