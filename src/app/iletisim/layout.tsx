import type { Metadata } from "next";
import { SITE_URL } from "@/config/site";

export const metadata: Metadata = {
  title: "İletişim & Randevu Planlama",
  description:
    "Her öğrencimizin kendi zirvesine ulaşmasını sağlamak en büyük gurur kaynağımızdır. İstanbul’un tüm ilçelerinde evinizde yüz yüze ve tüm Türkiye’de canlı online birebir özel ders.",
  alternates: {
    canonical: "/iletisim/",
  },
  openGraph: {
    title: "İletişim & Randevu Planlama | AYBARİst AKADEMİ",
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
