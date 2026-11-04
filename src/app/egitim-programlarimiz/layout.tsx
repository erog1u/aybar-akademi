import type { Metadata } from "next";
import { SITE_URL } from "@/config/site";

export const metadata: Metadata = {
  title: "Eğitim Programlarımız",
  description:
    "Değişen Dünyaya AYBARİst'in Gücüyle Hazırlanın. AYBARİst AKADEMİ'de geleceğinizi şansa bırakmayın; eğitimi uzmanından, bizzat size özel tasarlanmış bir programla alın.",
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
