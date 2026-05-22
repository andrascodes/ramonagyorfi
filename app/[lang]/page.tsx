import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getPageContent, hasLocale } from "@/content";
import { PageRenderer } from "@/components/PageRenderer";

export async function generateMetadata({
  params,
}: PageProps<"/[lang]">): Promise<Metadata> {
  const { lang } = await params;
  if (!hasLocale(lang)) return {};
  const page = await getPageContent(lang, "home");
  return { title: page.meta.title, description: page.meta.description };
}

export default async function HomePage({ params }: PageProps<"/[lang]">) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();
  const page = await getPageContent(lang, "home");
  return (
    <PageRenderer
      sections={page.sections}
      locale={lang}
      pageBg={page.pageBg}
    />
  );
}
