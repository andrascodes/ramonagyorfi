import Image from "next/image";
import type { Cta, FeatureItem, ImageRef, Tone } from "@/content/types";
import { Container } from "../Container";
import { Button } from "../Button";
import { RichText } from "../RichText";
import { toneBgClass } from "../tone";

export function ImageWithFeatures({
  heading,
  intro,
  image,
  imagePosition = "left",
  features,
  cta,
  tone = "default",
}: {
  heading?: string;
  intro?: string[];
  image: ImageRef;
  imagePosition?: "left" | "right";
  features: FeatureItem[];
  cta?: Cta;
  tone?: Tone;
}) {
  return (
    <section className={`py-16 md:py-24 ${toneBgClass[tone]}`}>
      <Container>
        {heading && (
          <h2 className="mb-8 text-center font-sans font-normal tracking-[0.01em] leading-[1.1] text-[clamp(40px,6vw,68px)]">
            {heading}
          </h2>
        )}
        {intro && intro.length > 0 && (
          <div className="mb-12 space-y-5 font-serif">
            {intro.map((p, i) => (
              <p key={i}>
                <RichText text={p} />
              </p>
            ))}
          </div>
        )}

        <div
          className={`grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-16 ${
            imagePosition === "right" ? "" : "md:[&>figure]:order-first"
          }`}
        >
          <div className="flex flex-col md:h-full">
            <ul className="space-y-10">
              {features.map((f) => (
                <li key={f.title}>
                  <h3 className="font-sans font-normal text-[clamp(26px,3vw,36px)] leading-[1.2] underline underline-offset-[8px] decoration-1">
                    {f.title}
                  </h3>
                  <p className="mt-4 font-serif leading-relaxed">{f.body}</p>
                </li>
              ))}
            </ul>
            {cta && (
              <div className="mt-6 flex flex-1 items-center justify-center md:mt-0 md:py-8">
                <Button href={cta.href} variant={cta.variant ?? "outline"}>
                  {cta.label}
                </Button>
              </div>
            )}
          </div>
          <figure className={imagePosition === "right" ? "" : "md:order-last"}>
            <Image
              src={image.src}
              alt={image.alt}
              width={image.width}
              height={image.height}
              className="h-auto w-full rounded-md object-cover"
            />
          </figure>
        </div>
      </Container>
    </section>
  );
}
