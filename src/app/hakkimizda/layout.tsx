import type { Metadata } from "next";
import { SITE_URL } from "@/config/site";

export const metadata: Metadata = {
  title: "Hakkımızda",
  description:
    "AYBAR AKADEMİ; 33 yıllık köklü eğitim deneyimi, yeni nesil Maarif Modeline hâkim uzman öğretmen kadrosu, İstanbul 39 ilçede evinizde yüz yüze ve 81 ilde canlı online VIP özel ders kurumudur.",
  alternates: {
    canonical: "/hakkimizda/",
  },
  openGraph: {
    title: "Hakkımızda | AYBAR AKADEMİ",
    description:
      "33 yıllık köklü eğitim deneyimi, yeni nesil Maarif Modeline %100 uyumlu uzman kadro. İstanbul 39 ilçe yüz yüze & tüm Türkiye canlı online VIP özel ders.",
    url: `${SITE_URL}/hakkimizda/`,
  },
};

export default function HakkimizdaLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
