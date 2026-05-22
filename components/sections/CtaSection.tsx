import type { CtaVariant, Tone } from "@/content/types";
import { Container } from "../Container";
import { Button } from "../Button";
import { toneBgClass } from "../tone";

export function CtaSection({
  label,
  href,
  variant = "outline",
  tone = "default",
}: {
  label: string;
  href: string;
  variant?: CtaVariant;
  tone?: Tone;
}) {
  return (
    <section className={`pb-16 md:pb-24 ${toneBgClass[tone]}`}>
      <Container>
        <div className="text-center">
          <Button href={href} variant={variant}>
            {label}
          </Button>
        </div>
      </Container>
    </section>
  );
}
