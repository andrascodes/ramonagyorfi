import { Container } from "../Container";

export function HeroVideo({
  tagline,
  bgVideo,
}: {
  tagline: string;
  bgVideo?: { src: string; poster?: string };
}) {
  return (
    <section className="relative isolate flex h-[80vh] min-h-[560px] max-h-[900px] items-center justify-center overflow-hidden">
      {bgVideo && (
        <video
          src={bgVideo.src}
          poster={bgVideo.poster}
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 -z-20 h-full w-full object-cover"
        />
      )}
      <div className="absolute inset-0 -z-10 bg-black/65" aria-hidden />
      <Container className="relative">
        <h1
          className="mx-auto max-w-4xl text-center font-sans text-white opacity-100"
          style={{
            fontSize: "clamp(28px, 4vw, 40px)",
            lineHeight: 1.3,
            letterSpacing: "0.02em",
            fontWeight: 300,
            textShadow: "0 1px 12px rgba(0,0,0,0.35)",
          }}
        >
          {tagline}
        </h1>
      </Container>
    </section>
  );
}
