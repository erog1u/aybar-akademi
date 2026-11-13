import type { Metadata } from "next";
import LegalPage from "@/components/legal/LegalPage";
import { cerezDoc } from "@/data/legal";

export const metadata: Metadata = {
  title: "Çerez Politikası",
  description: "AYBARİst AKADEMİ internet sitesinde kullanılan çerezler hakkında bilgilendirme.",
  alternates: { canonical: "/cerez-politikasi/" },
};

export default function Page() {
  return <LegalPage doc={cerezDoc} label="Çerez Politikası" href="/cerez-politikasi/" />;
}
