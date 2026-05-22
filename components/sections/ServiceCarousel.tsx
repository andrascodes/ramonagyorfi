"use client";

import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import type { ServiceCard } from "@/content/types";
import { Container } from "../Container";
import { Button } from "../Button";

export function ServiceCarousel({
  heading,
  cards,
}: {
  heading?: string;
  cards: ServiceCard[];
}) {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "start",
    slidesToScroll: 1,
  });
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setCanScrollPrev(emblaApi.canScrollPrev());
    setCanScrollNext(emblaApi.canScrollNext());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
    return () => {
      emblaApi.off("select", onSelect);
      emblaApi.off("reInit", onSelect);
    };
  }, [emblaApi, onSelect]);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  return (
    <section className="relative isolate overflow-hidden py-10 md:py-16 bg-[color:var(--color-foreground)] text-[color:var(--color-inverse)]">
      {/* Heavy noise grain across the entire section */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-60 mix-blend-multiply"
        style={{
          backgroundImage: `url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='280' height='280'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.95' numOctaves='3' stitchTiles='stitch'/></filter><rect width='100%' height='100%' filter='url(%23n)'/></svg>")`,
          backgroundSize: "280px 280px",
        }}
      />
      {/* Soft dark cloudy zones — overlaid on top of the grain to deepen certain areas */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-75 mix-blend-multiply"
        style={{
          backgroundImage:
            "radial-gradient(ellipse 35% 45% at 8% 20%, rgba(0,0,0,0.75), transparent 65%), radial-gradient(ellipse 40% 35% at 82% 18%, rgba(0,0,0,0.7), transparent 70%), radial-gradient(ellipse 30% 40% at 50% 85%, rgba(0,0,0,0.65), transparent 65%), radial-gradient(ellipse 25% 30% at 95% 75%, rgba(0,0,0,0.6), transparent 60%)",
        }}
      />

      <Container className="relative">
        {heading && (
          <h2 className="mb-8 text-center font-sans font-normal text-[clamp(32px,5vw,56px)] leading-[1.15]">
            {heading}
          </h2>
        )}
      </Container>

      <div className="relative mx-auto w-full max-w-[1440px] px-4 md:px-8">
        <div className="flex items-center gap-2 md:gap-4">
          <CarouselButton
            direction="prev"
            onClick={scrollPrev}
            disabled={!canScrollPrev}
          />
          <div className="min-w-0 flex-1 overflow-hidden" ref={emblaRef}>
            <div className="flex -ml-4 md:-ml-6">
              {cards.map((card, i) => (
                <div
                  key={i}
                  className="flex-[0_0_100%] sm:flex-[0_0_50%] lg:flex-[0_0_33.333%] pl-4 md:pl-6 min-w-0"
                >
                  <div className="flex h-full flex-col items-center text-center gap-5 p-4 md:p-6">
                    <h3 className="font-sans font-semibold text-xl md:text-2xl">
                      {card.title}
                    </h3>
                    <p className="font-serif text-base leading-relaxed flex-1 text-center">
                      {card.body}
                    </p>
                    {card.cta && (
                      <div className="pt-2">
                        <Button
                          href={card.cta.href}
                          variant={card.cta.variant ?? "outlineLight"}
                        >
                          {card.cta.label}
                        </Button>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
          <CarouselButton
            direction="next"
            onClick={scrollNext}
            disabled={!canScrollNext}
          />
        </div>
      </div>
    </section>
  );
}

function CarouselButton({
  direction,
  onClick,
  disabled,
}: {
  direction: "prev" | "next";
  onClick: () => void;
  disabled: boolean;
}) {
  const isPrev = direction === "prev";
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      aria-label={isPrev ? "Previous" : "Next"}
      className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-black/70 text-white transition-opacity hover:bg-black/90 disabled:opacity-30"
    >
      <span aria-hidden className="text-xl leading-none">
        {isPrev ? "←" : "→"}
      </span>
    </button>
  );
}
