import type { Metadata } from "next";
import { SITE_URL } from "@/config/site";

export const metadata: Metadata = {
  title: "Eğitim Modelimiz",
  description:
    "AYBARİst AKADEMİ Eğitim Modeli: kişiye özel VIP Süreç Yönetimi, uzman eğitmen kadrosu ve Maarif Modeline uyumlu, bütüncül rehberlik.",
  alternates: {
    canonical: "/egitim-modelimiz/",
  },
  openGraph: {
    title: "Eğitim Modelimiz | AYBARİst AKADEMİ",
    description:
      "AYBARİst AKADEMİ Eğitim Modeli: kişiye özel VIP Süreç Yönetimi, uzman eğitmen kadrosu ve Maarif Modeline uyumlu, bütüncül rehberlik.",
    url: `${SITE_URL}/egitim-modelimiz/`,
  },
};

export default function EgitimModelimizLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
