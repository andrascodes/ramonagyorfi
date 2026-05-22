import type { SiteContent } from "@/content/types";
import { SocialLinks } from "./SocialLinks";

export function Footer({ site }: { site: SiteContent }) {
  return (
    <footer className="mt-auto bg-[color:var(--color-panel)] text-[color:var(--color-foreground)] py-16 md:py-20">
      <div className="mx-auto w-full max-w-[1800px] px-6 md:px-16">
        <div className="flex flex-col items-center gap-8 md:flex-row md:gap-8">
          <p className="flex-1 text-center font-sans text-xl">
            {site.footer.tagline}
          </p>
          <div className="flex flex-1 justify-center">
            <SocialLinks items={site.socials} />
          </div>
          <div className="flex-1 text-center">
            <a
              href={`mailto:${site.footer.email}`}
              className="font-sans text-xl underline underline-offset-4 hover:opacity-70 transition-opacity"
            >
              {site.footer.email}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
