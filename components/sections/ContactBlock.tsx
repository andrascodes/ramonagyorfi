import { Container } from "../Container";

export function ContactBlock({
  heading,
  intro,
  email,
}: {
  heading?: string;
  intro?: string;
  email: string;
}) {
  return (
    <section className="py-12 md:py-20">
      <Container>
        <div className="mx-auto max-w-3xl">
          {heading && (
            <h1 className="mb-10 font-sans font-normal text-[clamp(40px,7vw,80px)] leading-[1.1]">
              {heading}
            </h1>
          )}
          {intro && (
            <p className="mb-6 font-serif text-base md:text-lg leading-relaxed">
              {intro}
            </p>
          )}
          <p className="font-serif text-base md:text-lg">
            You can reach me directly at:{" "}
            <a
              href={`mailto:${email}`}
              className="underline underline-offset-4 hover:opacity-70 transition-opacity"
            >
              {email}
            </a>
          </p>
        </div>
      </Container>
    </section>
  );
}
