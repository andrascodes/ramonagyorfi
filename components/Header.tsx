"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import type { Locale, PageBg, SiteContent } from "@/content/types";
import { Container } from "./Container";
import { LanguagePicker } from "./LanguagePicker";
import { MobileNavDrawer } from "./MobileNavDrawer";

export function Header({
  site,
  locale,
  overlay = false,
  pageBg = "cream",
}: {
  site: SiteContent;
  locale: Locale;
  /** If true, the header sits fixed over the first section (e.g. hero video). */
  overlay?: boolean;
  pageBg?: PageBg;
}) {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // When the mobile drawer is open, pin the header to the top with the olive
  // drawer background so it visually merges with the drawer beneath it.
  const pageBgClass =
    pageBg === "olive"
      ? "bg-[color:var(--color-foreground)] text-[color:var(--color-inverse)]"
      : pageBg === "panel"
        ? "bg-[color:var(--color-panel)] text-[color:var(--color-foreground)]"
        : "bg-[color:var(--color-background)] text-[color:var(--color-foreground)]";

  const headerBg = drawerOpen
    ? "bg-[color:var(--color-nav-overlay)] text-[color:var(--color-nav-overlay-fg)]"
    : scrolled
      ? "bg-black/80 backdrop-blur-sm text-white"
      : overlay
        ? "text-white bg-transparent"
        : pageBgClass;

  // Home page (overlay) stays fixed so it sits over the hero. Other pages use
  // sticky so the header stays in flow but pins to the top while scrolling.
  const positionClasses =
    overlay || drawerOpen
      ? "fixed inset-x-0 top-0 z-50"
      : "sticky top-0 z-50 w-full";

  return (
    <header
      className={`${positionClasses} ${headerBg} pt-6 md:pt-10 pb-4 md:pb-6 transition-colors duration-300 ease-out`}
    >
      <Container>
        {/* Mobile bar */}
        <div className="relative z-50 flex items-center justify-between md:hidden">
          <Link
            href={`/${locale}`}
            className="font-sans text-base tracking-wide"
          >
            {site.wordmark}
          </Link>
          <button
            type="button"
            onClick={() => setDrawerOpen((o) => !o)}
            aria-label={drawerOpen ? "Close menu" : "Open menu"}
            aria-expanded={drawerOpen}
            className="relative inline-flex h-10 w-10 items-center justify-center"
          >
            <span
              aria-hidden
              className={`absolute inset-0 flex items-center justify-center text-2xl leading-none transition-all duration-200 ease-out ${
                drawerOpen
                  ? "opacity-0 rotate-90 scale-75"
                  : "opacity-100 rotate-0 scale-100"
              }`}
            >
              ☰
            </span>
            <span
              aria-hidden
              className={`absolute inset-0 flex items-center justify-center text-2xl leading-none transition-all duration-200 ease-out ${
                drawerOpen
                  ? "opacity-100 rotate-0 scale-100"
                  : "opacity-0 -rotate-90 scale-75"
              }`}
            >
              ✕
            </span>
          </button>
        </div>

        {/* Desktop bar */}
        <div className="hidden md:block">
          <div className="flex flex-col items-center gap-6">
            <Link
              href={`/${locale}`}
              className="block w-full text-center font-sans text-[32px] tracking-wide px-28"
            >
              {site.wordmark}
            </Link>
            <nav>
              <ul className="flex flex-wrap items-center justify-center gap-x-8 gap-y-2">
                {site.nav.map((item) => {
                  const isActive = pathname === item.href;
                  return (
                    <li key={item.href}>
                      <Link
                        href={item.href}
                        aria-current={isActive ? "page" : undefined}
                        className={`font-serif text-xl hover:opacity-70 transition-opacity ${
                          isActive
                            ? "underline underline-offset-[6px] decoration-1"
                            : ""
                        }`}
                      >
                        {item.label}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </nav>
          </div>
        </div>
      </Container>
      {/* Language picker — absolute, anchored to the header's right edge */}
      <div className="hidden md:block absolute right-4 lg:right-6 top-12">
        <LanguagePicker locale={locale} />
      </div>

      <MobileNavDrawer
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        nav={site.nav}
        locale={locale}
      />
    </header>
  );
}
