import type { Metadata } from "next";
import { SITE_URL } from "@/config/site";

export const metadata: Metadata = {
  title: "İletişim & Randevu Planlama",
  description:
    "AYBARİst AKADEMİ ile 30 dakikalık ücretsiz tanışma seansı planlayın. İstanbul’un tüm ilçelerinde evinizde yüz yüze ve tüm Türkiye’de canlı online birebir özel ders için hemen ulaşın.",
  alternates: {
    canonical: "/iletisim/",
  },
  openGraph: {
    title: "İletişim & Randevu Planlama | AYBARİst AKADEMİ",
    description:
      "30 dakikalık ücretsiz tanışma seansı için bizimle iletişime geçin. İstanbul’un tüm ilçelerinde yüz yüze, tüm Türkiye’de canlı online.",
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
