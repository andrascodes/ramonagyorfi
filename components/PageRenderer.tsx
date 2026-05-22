import type { Locale, PageBg, Section } from "@/content/types";
import { getSiteContent } from "@/content/site";
import { Header } from "./Header";
import { HeroVideo } from "./sections/HeroVideo";
import { Prose } from "./sections/Prose";
import { Blockquote } from "./sections/Blockquote";
import { ServiceGrid } from "./sections/ServiceGrid";
import { ServiceCarousel } from "./sections/ServiceCarousel";
import { PricingGrid } from "./sections/PricingGrid";
import { ExpandableList } from "./sections/ExpandableList";
import { Portrait } from "./sections/Portrait";
import { ImageWithFeatures } from "./sections/ImageWithFeatures";
import { ContactBlock } from "./sections/ContactBlock";
import { CtaSection } from "./sections/CtaSection";

export function PageRenderer({
  sections,
  locale,
  pageBg = "cream",
}: {
  sections: Section[];
  locale: Locale;
  pageBg?: PageBg;
}) {
  const site = getSiteContent(locale);
  const hasHero = sections[0]?.kind === "hero";

  const bgClass =
    pageBg === "olive"
      ? "bg-[color:var(--color-foreground)] text-[color:var(--color-inverse)]"
      : pageBg === "panel"
        ? "bg-[color:var(--color-panel)] text-[color:var(--color-foreground)]"
        : "bg-[color:var(--color-background)] text-[color:var(--color-foreground)]";

  return (
    <div className={`flex min-h-screen flex-col ${bgClass}`}>
      <Header site={site} locale={locale} overlay={hasHero} pageBg={pageBg} />
      <main className="flex-1">
        {sections.map((section, i) => renderSection(section, i))}
      </main>
    </div>
  );
}

function renderSection(section: Section, index: number) {
  switch (section.kind) {
    case "hero":
      return (
        <HeroVideo
          key={index}
          tagline={section.tagline}
          bgVideo={section.bgVideo}
        />
      );
    case "prose":
      return (
        <Prose
          key={index}
          eyebrow={section.eyebrow}
          heading={section.heading}
          headingSize={section.headingSize}
          body={section.body}
          image={section.image}
          imagePosition={section.imagePosition}
          afterBody={section.afterBody}
          cta={section.cta}
          tone={section.tone}
        />
      );
    case "blockquote":
      return (
        <Blockquote
          key={index}
          quote={section.quote}
          attribution={section.attribution}
        />
      );
    case "serviceGrid":
      return (
        <ServiceGrid
          key={index}
          heading={section.heading}
          cards={section.cards}
        />
      );
    case "serviceCarousel":
      return (
        <ServiceCarousel
          key={index}
          heading={section.heading}
          cards={section.cards}
        />
      );
    case "pricingGrid":
      return (
        <PricingGrid
          key={index}
          heading={section.heading}
          cards={section.cards}
          note={section.note}
          cta={section.cta}
        />
      );
    case "expandableList":
      return (
        <ExpandableList
          key={index}
          heading={section.heading}
          items={section.items}
        />
      );
    case "portrait":
      return (
        <Portrait
          key={index}
          image={section.image}
          caption={section.caption}
        />
      );
    case "imageWithFeatures":
      return (
        <ImageWithFeatures
          key={index}
          heading={section.heading}
          intro={section.intro}
          image={section.image}
          imagePosition={section.imagePosition}
          features={section.features}
          cta={section.cta}
          tone={section.tone}
        />
      );
    case "contactBlock":
      return (
        <ContactBlock
          key={index}
          heading={section.heading}
          intro={section.intro}
          email={section.email}
        />
      );
    case "cta":
      return (
        <CtaSection
          key={index}
          label={section.label}
          href={section.href}
          variant={section.variant}
          tone={section.tone}
        />
      );
    default: {
      const _exhaustive: never = section;
      return _exhaustive;
    }
  }
}
