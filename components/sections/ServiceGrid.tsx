import type { ServiceCard } from "@/content/types";
import { Container } from "../Container";
import { Button } from "../Button";

export function ServiceGrid({
  heading,
  cards,
}: {
  heading?: string;
  cards: ServiceCard[];
}) {
  return (
    <section className="py-16 md:py-24 bg-[color:var(--color-panel)]">
      <Container>
        {heading && (
          <h2 className="mb-12 text-center font-sans font-normal text-[clamp(32px,5vw,56px)] leading-[1.15]">
            {heading}
          </h2>
        )}
        <ul
          className={`grid grid-cols-1 gap-6 md:gap-8 ${
            cards.length >= 3 ? "md:grid-cols-3" : "md:grid-cols-2"
          }`}
        >
          {cards.map((card) => (
            <li
              key={card.title}
              className="flex flex-col items-center text-center gap-4 rounded-md bg-[color:var(--color-foreground)] p-8 text-[color:var(--color-inverse)]"
            >
              <h3 className="font-sans text-xl md:text-2xl">{card.title}</h3>
              <p className="font-serif text-base leading-relaxed flex-1">
                {card.body}
              </p>
              {card.cta && (
                <div className="pt-2">
                  <Button
                    href={card.cta.href}
                    variant={card.cta.variant ?? "primary"}
                  >
                    {card.cta.label}
                  </Button>
                </div>
              )}
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
