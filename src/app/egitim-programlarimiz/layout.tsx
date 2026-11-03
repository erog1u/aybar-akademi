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
