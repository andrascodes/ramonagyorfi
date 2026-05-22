import { redirect } from "next/navigation";
import { defaultLocale } from "@/content/types";

export default function RootPage() {
  redirect(`/${defaultLocale}`);
}
