import Image from "next/image";
import type { ImageRef } from "@/content/types";
import { Container } from "../Container";

export function Portrait({
  image,
  caption,
}: {
  image: ImageRef;
  caption?: string;
}) {
  return (
    <section className="py-12 md:py-20">
      <Container>
        <figure className="mx-auto max-w-md">
          <Image
            src={image.src}
            alt={image.alt}
            width={image.width}
            height={image.height}
            className="h-auto w-full rounded-lg object-cover"
            priority
          />
          {caption && (
            <figcaption className="mt-3 text-center text-sm italic text-foreground/60">
              {caption}
            </figcaption>
          )}
        </figure>
      </Container>
    </section>
  );
}
