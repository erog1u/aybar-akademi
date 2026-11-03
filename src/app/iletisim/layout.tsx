import type { Metadata } from "next";
import { SITE_URL } from "@/config/site";

export const metadata: Metadata = {
  title: "İletişim & Randevu Planlama",
  description:
    "AYBAR AKADEMİ ile 30 dakikalık ücretsiz tanışma seansı planlayın. İstanbul’un 39 ilçesinde evinizde yüz yüze ve tüm Türkiye’de canlı online birebir özel ders için hemen ulaşın.",
  alternates: {
    canonical: "/iletisim/",
  },
  openGraph: {
    title: "İletişim & Randevu Planlama | AYBAR AKADEMİ",
    description:
      "30 dakikalık ücretsiz tanışma seansı için doğrudan eğitim danışmanımızla iletişime geçin. İstanbul 39 ilçe & tüm Türkiye online.",
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
