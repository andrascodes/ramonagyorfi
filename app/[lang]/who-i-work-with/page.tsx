import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getPageContent, hasLocale } from "@/content";
import { PageRenderer } from "@/components/PageRenderer";

export async function generateMetadata({
  params,
}: PageProps<"/[lang]/who-i-work-with">): Promise<Metadata> {
  const { lang } = await params;
  if (!hasLocale(lang)) return {};
  const page = await getPageContent(lang, "who-i-work-with");
  return { title: page.meta.title, description: page.meta.description };
}

export default async function WhoIWorkWithPage({
  params,
}: PageProps<"/[lang]/who-i-work-with">) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();
  const page = await getPageContent(lang, "who-i-work-with");
  return (
    <PageRenderer
      sections={page.sections}
      locale={lang}
      pageBg={page.pageBg}
    />
  );
}
