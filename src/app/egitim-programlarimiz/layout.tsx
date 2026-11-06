import type { Metadata } from "next";
import { SITE_URL } from "@/config/site";

export const metadata: Metadata = {
  title: "Eğitim Programlarımız",
  description:
    "Birebir özel ders programları: YKS, LGS, KPSS, ALES, okula takviye ve yabancı dil. İstanbul’da yüz yüze, tüm Türkiye’de online.",
  alternates: {
    canonical: "/egitim-programlarimiz/",
  },
  openGraph: {
    title: "Eğitim Programlarımız | AYBARİst AKADEMİ",
    description:
      "İlkokuldan üniversiteye birebir özel ders programları. Yeni nesil Maarif Modeline hâkim öğretmen kadrosu.",
    url: `${SITE_URL}/egitim-programlarimiz/`,
  },
};

export default function EgitimProgramlarimizLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
