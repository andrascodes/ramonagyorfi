import Image from "next/image";
import type { Cta, ImageRef, Tone } from "@/content/types";
import { Container } from "../Container";
import { Button } from "../Button";
import { RichText } from "../RichText";
import { toneBgClass } from "../tone";

type HeadingSize = "page" | "section" | "inline";

const headingSizeClasses: Record<HeadingSize, string> = {
  page: "font-sans font-normal tracking-[0.01em] leading-[1.1] text-[clamp(40px,6vw,68px)]",
  section:
    "font-sans font-normal text-[clamp(28px,4vw,40px)] leading-[1.2]",
  inline:
    "font-sans font-bold text-[clamp(18px,1.6vw,22px)] leading-snug",
};

export function Prose({
  eyebrow,
  heading,
  headingSize = "section",
  body,
  image,
  imagePosition = "left",
  afterBody,
  cta,
  tone = "default",
}: {
  eyebrow?: string;
  heading?: string;
  headingSize?: HeadingSize;
  body?: string[];
  image?: ImageRef;
  imagePosition?: "left" | "right";
  afterBody?: string[];
  cta?: Cta;
  tone?: Tone;
}) {
  const hasImage = !!image;
  const hasAfterBody = !!(afterBody && afterBody.length > 0);
  const aboveHeadingClasses = `${headingSizeClasses[headingSize]} text-center mb-10`;

  // For 2-col layouts, inline headings live inside the body column.
  const headingAbove = heading && !(hasImage && headingSize === "inline");
  const headingInline = heading && hasImage && headingSize === "inline";

  // CTA placement: when afterBody exists, render the CTA at the end (below
  // afterBody) instead of inside the image-column flex.
  const ctaInColumn = cta && hasImage && !hasAfterBody;
  const ctaBelow = cta && (!hasImage || hasAfterBody);

  return (
    <section className={`py-12 md:py-20 ${toneBgClass[tone]}`}>
      <Container>
        {headingAbove && <h2 className={aboveHeadingClasses}>{heading}</h2>}
        {eyebrow && !heading && (
          <p className="mb-3 text-xs uppercase tracking-[0.2em] opacity-70 text-center">
            {eyebrow}
          </p>
        )}

        {hasImage ? (
          <div
            className={`grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-12 ${
              imagePosition === "right" ? "" : "md:[&>figure]:order-first"
            }`}
          >
            <div className="flex flex-col font-serif md:h-full">
              <div className="space-y-5">
                {headingInline && (
                  <h2 className={headingSizeClasses.inline}>{heading}</h2>
                )}
                {body?.map((p, i) => (
                  <p key={i}>
                    <RichText text={p} />
                  </p>
                ))}
              </div>
              {ctaInColumn && (
                <div className="mt-6 flex flex-1 items-center justify-center md:mt-0 md:py-8">
                  <Button href={cta.href} variant={cta.variant ?? "outline"}>
                    {cta.label}
                  </Button>
                </div>
              )}
            </div>
            <figure
              className={`mx-auto w-full max-w-[340px] md:max-w-none ${
                imagePosition === "right" ? "" : "md:order-last"
              }`}
            >
              <Image
                src={image.src}
                alt={image.alt}
                width={image.width}
                height={image.height}
                className="h-auto w-full rounded-md object-cover"
              />
            </figure>
          </div>
        ) : (
          body && body.length > 0 && (
            <div className="space-y-5 font-serif">
              {body.map((p, i) => (
                <p key={i}>
                  <RichText text={p} />
                </p>
              ))}
            </div>
          )
        )}

        {hasAfterBody && (
          <div className="mt-10 space-y-5 font-serif md:mt-16">
            {afterBody!.map((p, i) => (
              <p key={i}>
                <RichText text={p} />
              </p>
            ))}
          </div>
        )}

        {ctaBelow && (
          <div className="mt-10 text-center md:mt-16">
            <Button href={cta.href} variant={cta.variant ?? "outline"}>
              {cta.label}
            </Button>
          </div>
        )}
      </Container>
    </section>
  );
}
