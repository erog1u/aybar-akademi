import type { Metadata } from "next";
import LegalPage from "@/components/legal/LegalPage";
import { iletiDoc } from "@/data/legal";

export const metadata: Metadata = {
  title: "Ticari Elektronik İleti Onay Metni",
  description: "AYBARİst AKADEMİ ticari elektronik ileti onay metni ve onayın geri alınması.",
  alternates: { canonical: "/ticari-elektronik-ileti-onayi/" },
};

export default function Page() {
  return <LegalPage doc={iletiDoc} label="Ticari Elektronik İleti Onay Metni" href="/ticari-elektronik-ileti-onayi/" />;
}
