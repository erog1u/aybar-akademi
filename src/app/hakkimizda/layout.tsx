import type { Metadata } from "next";
import { SITE_URL } from "@/config/site";

export const metadata: Metadata = {
  title: "Hakkımızda",
  description:
    "AYBARİst AKADEMİ; 33 yıllık köklü eğitim deneyimi, yeni nesil Maarif Modeline hâkim uzman öğretmen kadrosu, İstanbul’un tüm ilçelerinde evinizde yüz yüze ve tüm Türkiye’de canlı online birebir özel ders kurumudur.",
  alternates: {
    canonical: "/hakkimizda/",
  },
  openGraph: {
    title: "Hakkımızda | AYBARİst AKADEMİ",
    description:
      "33 yıllık köklü eğitim deneyimi ve yeni nesil Maarif Modeline hâkim uzman kadro. İstanbul’un tüm ilçelerinde yüz yüze, tüm Türkiye’de canlı online.",
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
