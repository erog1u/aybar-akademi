import type { Metadata } from "next";
import { SITE_URL } from "@/config/site";

export const metadata: Metadata = {
  title: "Kurucumuzun Mesajı",
  description:
    "Online canlı dersler ile yüzyüze özel ders modellerini birarada sunuyoruz. Kurucu Bahadır AYBAR'ın mesajı.",
  alternates: { canonical: "/kurucumuzun-mesaji/" },
  openGraph: {
    title: "Kurucumuzun Mesajı | AYBARİst AKADEMİ",
    description:
      "Online canlı dersler ile yüzyüze özel ders modellerini birarada sunuyoruz.",
    url: `${SITE_URL}/kurucumuzun-mesaji/`,
  },
};

export default function KurucuLayout({ children }: { children: React.ReactNode }) {
  return children;
}
