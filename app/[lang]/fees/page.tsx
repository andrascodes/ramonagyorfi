import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getPageContent, hasLocale } from "@/content";
import { PageRenderer } from "@/components/PageRenderer";

export async function generateMetadata({
  params,
}: PageProps<"/[lang]/fees">): Promise<Metadata> {
  const { lang } = await params;
  if (!hasLocale(lang)) return {};
  const page = await getPageContent(lang, "fees");
  return { title: page.meta.title, description: page.meta.description };
}

export default async function FeesPage({
  params,
}: PageProps<"/[lang]/fees">) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();
  const page = await getPageContent(lang, "fees");
  return (
    <PageRenderer
      sections={page.sections}
      locale={lang}
      pageBg={page.pageBg}
    />
  );
}
