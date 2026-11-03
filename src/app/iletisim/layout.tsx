import type { Metadata } from "next";
import { SITE_URL } from "@/config/site";

export const metadata: Metadata = {
  title: "İletişim",
  description:
    "Her öğrencimizin kendi zirvesine ulaşmasını sağlamak en büyük gurur kaynağımızdır.",
  alternates: {
    canonical: "/iletisim/",
  },
  openGraph: {
    title: "İletişim | AYBARİst AKADEMİ",
    description:
      "Her öğrencimizin kendi zirvesine ulaşmasını sağlamak en büyük gurur kaynağımızdır.",
    url: `${SITE_URL}/iletisim/`,
  },
};

export default function IletisimLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
