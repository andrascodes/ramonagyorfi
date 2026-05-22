import { notFound } from "next/navigation";
import { hasLocale } from "@/content";
import { getSiteContent } from "@/content/site";
import { locales } from "@/content/types";
import { Footer } from "@/components/Footer";

export function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export default async function LocaleLayout({
  children,
  params,
}: LayoutProps<"/[lang]">) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();

  const site = getSiteContent(lang);

  return (
    <>
      {children}
      <Footer site={site} />
    </>
  );
}
