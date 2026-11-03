import React from "react";
import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";
import { SITE_URL } from "@/config/site";

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

export interface BreadcrumbsProps {
  items: BreadcrumbItem[];
}

export default function Breadcrumbs({ items }: BreadcrumbsProps) {
  const baseUrl = SITE_URL;

  const breadcrumbsSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Ana Sayfa",
        item: `${baseUrl}/`,
      },
      ...items.map((it, idx) => {
        const itemUrl = it.href
          ? `${baseUrl}${it.href.startsWith("/") ? "" : "/"}${it.href}${it.href.endsWith("/") ? "" : "/"}`
          : `${baseUrl}/`;
        return {
          "@type": "ListItem",
          position: idx + 2,
          name: it.label,
          item: itemUrl,
        };
      }),
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbsSchema),
        }}
      />
      <nav
        aria-label="Sayfa Yolu"
        className="w-full max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-10 pt-4 pb-1"
      >
        <ol className="flex items-center flex-wrap gap-1.5 text-xs sm:text-[13px] text-ink-muted">
          <li className="inline-flex items-center">
            <Link
              href="/"
              className="inline-flex items-center gap-1 text-ink hover:text-cobalt-700 transition-colors font-semibold focus-visible:ring-2 focus-visible:ring-cobalt-600 focus-visible:outline-none rounded"
            >
              <Home className="h-3.5 w-3.5 text-cobalt-700" />
              <span>Ana Sayfa</span>
            </Link>
          </li>
          {items.map((it, index) => {
            const isLast = index === items.length - 1;
            return (
              <li key={index} className="inline-flex items-center gap-1.5">
                <ChevronRight className="h-3 w-3 text-ink-muted/60 shrink-0" />
                {it.href && !isLast ? (
                  <Link
                    href={it.href}
                    className="hover:text-cobalt-700 transition-colors font-medium focus-visible:ring-2 focus-visible:ring-cobalt-600 focus-visible:outline-none rounded"
                  >
                    {it.label}
                  </Link>
                ) : (
                  <span
                    className="text-cobalt-900 font-bold"
                    aria-current={isLast ? "page" : undefined}
                  >
                    {it.label}
                  </span>
                )}
              </li>
            );
          })}
        </ol>
      </nav>
    </>
  );
}
