import type { Metadata } from "next";
import { SITE_URL } from "@/config/site";

export const metadata: Metadata = {
  title: "Neden Farklıyız?",
  description:
    "AYBARİst AKADEMİ; özel derste sıradan bilgi aktarımını değil, bilimsel temelli bir süreç yönetimini, kişiye özel mühendislik yaklaşımını ve bütüncül rehberliği standart hale getirir.",
  alternates: {
    canonical: "/neden-farkliyiz/",
  },
  openGraph: {
    title: "Neden Farklıyız? | AYBARİst AKADEMİ",
    description:
      "AYBARİst AKADEMİ; özel derste sıradan bilgi aktarımını değil, bilimsel temelli bir süreç yönetimini, kişiye özel mühendislik yaklaşımını ve bütüncül rehberliği standart hale getirir.",
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
