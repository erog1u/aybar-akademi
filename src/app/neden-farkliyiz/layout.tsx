import type { Metadata } from "next";
import { SITE_URL } from "@/config/site";

export const metadata: Metadata = {
  title: "Neden Farklıyız?",
  description:
    "AYBARİst AKADEMİ, özel derste bilimsel temelli süreç yönetimini, kişiye özel yaklaşımı ve bütüncül rehberliği standart hale getirir.",
  alternates: {
    canonical: "/neden-farkliyiz/",
  },
  openGraph: {
    title: "Neden Farklıyız? | AYBARİst AKADEMİ",
    description:
      "AYBARİst AKADEMİ, özel derste bilimsel temelli süreç yönetimini, kişiye özel yaklaşımı ve bütüncül rehberliği standart hale getirir.",
    url: `${SITE_URL}/neden-farkliyiz/`,
  },
};

export default function NedenFarkliyizLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
