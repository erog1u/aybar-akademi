import type { Metadata } from "next";
import { SITE_URL } from "@/config/site";

export const metadata: Metadata = {
  title: "Eğitim Programlarımız",
  description:
    "İlkokuldan üniversiteye sınav hazırlık (YKS, LGS, KPSS, ALES), okula takviye, 11 dünya dili, YDT/YDS ve sanat/spor alanlarında kişiye özel birebir VIP eğitim programları.",
  alternates: {
    canonical: "/egitim-programlarimiz/",
  },
  openGraph: {
    title: "Eğitim Programlarımız | AYBAR AKADEMİ",
    description:
      "6 ana akademik alanda ilkokuldan üniversiteye %100 birebir VIP özel ders programları. Yeni nesil Maarif Modeline tam uyumlu içerikler.",
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
