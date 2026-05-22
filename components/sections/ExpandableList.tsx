"use client";

import { Suspense, useCallback, useEffect, useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";
import type { ExpandableItem } from "@/content/types";
import { Container } from "../Container";

/**
 * Reads `?open=<id>` and triggers the callback. Isolated so it can sit inside
 * a Suspense boundary — `useSearchParams` otherwise opts the whole page out
 * of static rendering.
 */
function OpenItemSync({
  ids,
  onOpen,
}: {
  ids: Set<string>;
  onOpen: (id: string) => void;
}) {
  const searchParams = useSearchParams();
  const requestedId = searchParams.get("open");

  useEffect(() => {
    if (!requestedId || !ids.has(requestedId)) return;
    onOpen(requestedId);
  }, [requestedId, ids, onOpen]);

  return null;
}

export function ExpandableList({
  heading,
  items,
}: {
  heading?: string;
  items: ExpandableItem[];
}) {
  const [openId, setOpenId] = useState<string | null>(null);
  const ids = useMemo(() => new Set(items.map((i) => i.id)), [items]);

  const handleOpen = useCallback((id: string) => {
    setOpenId(id);
    requestAnimationFrame(() => {
      document
        .getElementById(`item-${id}`)
        ?.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  }, []);

  return (
    <section className="py-12 md:py-20">
      <Suspense fallback={null}>
        <OpenItemSync ids={ids} onOpen={handleOpen} />
      </Suspense>
      <Container>
        {heading && (
          <h2 className="mb-12 text-center font-sans font-normal text-[clamp(40px,7vw,80px)] leading-[1.1]">
            {heading}
          </h2>
        )}
        <ul className="mx-auto max-w-3xl divide-y divide-current/20 border-y border-current/20">
          {items.map((item) => {
            const isOpen = openId === item.id;
            return (
              <li key={item.id} id={`item-${item.id}`}>
                <button
                  type="button"
                  onClick={() => setOpenId(isOpen ? null : item.id)}
                  aria-expanded={isOpen}
                  aria-controls={`panel-${item.id}`}
                  className="flex w-full items-center gap-4 py-4 text-left transition-opacity hover:opacity-70"
                >
                  <span
                    aria-hidden
                    className={`inline-block text-xl leading-none transition-transform ${
                      isOpen ? "rotate-45" : ""
                    }`}
                  >
                    +
                  </span>
                  <span className="font-serif text-base md:text-lg">
                    {item.title}
                  </span>
                </button>
                {isOpen && (
                  <div id={`panel-${item.id}`} className="pb-6 pl-9">
                    <p className="mb-2 font-sans text-sm">You might be:</p>
                    <ul className="space-y-2 font-serif text-base leading-relaxed">
                      {item.body.map((line, i) => (
                        <li key={i} className="pl-4 -indent-4 before:content-['•_']">
                          {line}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </li>
            );
          })}
        </ul>
        <p className="mx-auto mt-6 max-w-3xl text-sm italic opacity-60">
          *Click to expand
        </p>
      </Container>
    </section>
  );
}
