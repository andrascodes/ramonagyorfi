import type { Cta, PricingCard } from "@/content/types";
import { Container } from "../Container";
import { Button } from "../Button";
import { RichText } from "../RichText";

export function PricingGrid({
  heading,
  cards,
  note,
  cta,
}: {
  heading?: string;
  cards: PricingCard[];
  note?: string;
  cta?: Cta;
}) {
  return (
    <section className="py-12 md:py-20">
      <Container>
        {heading && (
          <h2 className="mb-12 text-center font-sans font-normal text-[clamp(40px,6vw,68px)] leading-[1.1]">
            {heading}
          </h2>
        )}
        <ul className="grid grid-cols-1 gap-14 md:grid-cols-2 md:gap-20">
          {cards.map((card) => (
            <li key={card.title}>
              <h3 className="mb-8 text-center font-sans font-normal text-[clamp(28px,3vw,36px)] leading-[1.15]">
                {card.title}
              </h3>
              <ul className="space-y-5 font-serif text-[18px]">
                {card.bullets.map((b) => (
                  <li
                    key={b}
                    className="pl-6 -indent-6 before:content-['•'] before:mr-3"
                  >
                    {b}
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
        {(cta || note) && (
          <div className="mt-16 border-t border-current/30 pt-12">
            {cta && (
              <div className="mb-10 text-center">
                <Button href={cta.href} variant={cta.variant ?? "outline"}>
                  {cta.label}
                </Button>
              </div>
            )}
            {note && (
              <p className="mx-auto max-w-4xl text-center text-base italic opacity-80">
                <RichText text={note} />
              </p>
            )}
          </div>
        )}
      </Container>
    </section>
  );
}
