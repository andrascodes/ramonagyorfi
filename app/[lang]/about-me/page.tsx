import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getPageContent, hasLocale } from "@/content";
import { PageRenderer } from "@/components/PageRenderer";

export async function generateMetadata({
  params,
}: PageProps<"/[lang]/about-me">): Promise<Metadata> {
  const { lang } = await params;
  if (!hasLocale(lang)) return {};
  const page = await getPageContent(lang, "about-me");
  return { title: page.meta.title, description: page.meta.description };
}

export default async function AboutMePage({
  params,
}: PageProps<"/[lang]/about-me">) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();
  const page = await getPageContent(lang, "about-me");
  return (
    <PageRenderer
      sections={page.sections}
      locale={lang}
      pageBg={page.pageBg}
    />
  );
}
