import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { IS_PREVIEW_MODE } from "@/config/site";

export const metadata: Metadata = {
  title: "Cihaz Önizleme Stüdyosu",
  description:
    "Eroğlu Solutions iç kullanımına ait cihaz önizleme stüdyosu. Arama motorlarına kapalıdır.",
  robots: {
    index: false,
    follow: false,
    nocache: true,
    googleBot: {
      index: false,
      follow: false,
    },
  },
};

/**
 * Internal device studio. It stays available in local development and in the
 * protected preview build, and is omitted from the production export.
 */
export default function OnizlemeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const allowStudio =
    IS_PREVIEW_MODE || process.env.NODE_ENV !== "production";

  if (!allowStudio) {
    notFound();
  }

  return children;
}
