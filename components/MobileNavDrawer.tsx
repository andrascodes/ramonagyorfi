"use client";

import { useEffect } from "react";
import Link from "next/link";
import type { Locale, NavItem } from "@/content/types";
import { LanguagePicker } from "./LanguagePicker";

export function MobileNavDrawer({
  open,
  onClose,
  nav,
  locale,
}: {
  open: boolean;
  onClose: () => void;
  nav: NavItem[];
  locale: Locale;
}) {
  useEffect(() => {
    if (!open) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = previous;
      window.removeEventListener("keydown", onKey);
    };
  }, [open, onClose]);

  return (
    <div
      role="dialog"
      aria-modal={open}
      aria-hidden={!open}
      aria-label="Site navigation"
      className={`fixed inset-0 z-40 overflow-hidden md:hidden transition-colors duration-300 ease-out ${
        open
          ? "bg-[color:var(--color-nav-overlay)] pointer-events-auto"
          : "bg-transparent pointer-events-none"
      }`}
    >
      <div
        className={`absolute inset-0 flex flex-col text-[color:var(--color-nav-overlay-fg)] transition-transform duration-300 ease-out ${
          open ? "translate-y-0" : "translate-y-full"
        }`}
      >
        <nav className="flex flex-1 items-center justify-center">
          <ul className="flex flex-col items-center gap-6 text-center">
            {nav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  onClick={onClose}
                  tabIndex={open ? 0 : -1}
                  className="font-serif text-3xl leading-relaxed hover:opacity-80 transition-opacity"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex justify-center pb-10">
          <LanguagePicker locale={locale} variant="drawer" />
        </div>
      </div>
    </div>
  );
}
