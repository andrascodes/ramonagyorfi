import { Container } from "../Container";

export function Blockquote({
  quote,
  attribution,
}: {
  quote: string;
  attribution?: string;
}) {
  return (
    <section className="py-12 md:py-16 bg-[color:var(--color-panel)]">
      <Container>
        <figure className="mx-auto text-center">
          <blockquote className="font-serif italic text-[clamp(18px,1.8vw,24px)] leading-[1.78]">
            “{quote}”
          </blockquote>
          {attribution && (
            <figcaption className="mt-8 font-serif text-base">
              — {attribution} —
            </figcaption>
          )}
        </figure>
      </Container>
    </section>
  );
}
