import React from "react";
import Link from "next/link";
import Breadcrumbs from "@/components/layout/Breadcrumbs";
import type { LegalDoc } from "@/data/legal";

const LINKS = [
  { href: "/kvkk/", label: "KVKK Aydınlatma Metni" },
  { href: "/cerez-politikasi/", label: "Çerez Politikası" },
  { href: "/ticari-elektronik-ileti-onayi/", label: "Ticari Elektronik İleti Onay Metni" },
];

// Avukat metnini olduğu gibi basar; metin src/data/legal.ts içindedir.
export default function LegalPage({ doc, label, href }: { doc: LegalDoc; label: string; href: string }) {
  return (
    <div className="bg-paper text-ink">
      <Breadcrumbs items={[{ label, href }]} />
      <div className="mx-auto max-w-3xl px-4 py-10 sm:px-6 sm:py-14">
        <h1 className="text-2xl font-extrabold leading-tight tracking-tight text-ink sm:text-3xl">{doc.title}</h1>
        {doc.updated ? <p className="mt-3 text-sm text-ink-muted">{doc.updated}</p> : null}
        <div className="mt-6 space-y-3 text-base leading-relaxed text-ink-muted">
          {doc.blocks.map((b, i) =>
            b.t === "h2" ? (
              <h2 key={i} className="pt-5 text-xl font-extrabold text-ink">{b.text}</h2>
            ) : b.t === "h3" ? (
              <h3 key={i} className="pt-2 text-base font-extrabold text-ink">{b.text}</h3>
            ) : b.t === "ul" ? (
              <ul key={i} className="list-disc space-y-2 pl-5">
                {b.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            ) : (
              <p key={i} className="break-words">{b.text}</p>
            ),
          )}
        </div>
        <nav aria-label="Yasal metinler" className="mt-10 flex flex-wrap gap-x-5 gap-y-2 border-t border-cobalt-900/10 pt-6 text-sm">
          {LINKS.filter((l) => l.href !== href).map((l) => (
            <Link key={l.href} href={l.href} className="font-bold text-crimson-700 underline">
              {l.label}
            </Link>
          ))}
        </nav>
      </div>
    </div>
  );
}
