import type { Metadata } from "next";
import LegalPage from "@/components/legal/LegalPage";
import { kvkkDoc } from "@/data/legal";

export const metadata: Metadata = {
  title: "KVKK Aydınlatma Metni",
  description: "AYBARİst AKADEMİ kişisel verilerin işlenmesine ilişkin aydınlatma metni.",
  alternates: { canonical: "/kvkk/" },
};

export default function Page() {
  return <LegalPage doc={kvkkDoc} label="KVKK Aydınlatma Metni" href="/kvkk/" />;
}
