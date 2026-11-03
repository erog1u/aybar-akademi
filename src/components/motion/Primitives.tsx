"use client";

import React from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export const LUXURY_EASE = [0.22, 1, 0.36, 1] as const;

/* -------------------------------------------------------------------------- */
/* 1. Masked Headline — Anında Render, Sıfır Takılma, %100 Akıcı             */
/* -------------------------------------------------------------------------- */
export function MaskedLines({
  lines,
  className = "",
  as: Tag = "h2",
}: {
  lines: React.ReactNode[];
  className?: string;
  as?: "h1" | "h2" | "h3" | "div";
  delay?: number;
  immediate?: boolean;
}) {
  return (
    <Tag className={className}>
      {lines.map((line, idx) => (
        <span key={idx} className="block">
          {line}
        </span>
      ))}
    </Tag>
  );
}

/* -------------------------------------------------------------------------- */
/* 2. Instant Editorial Reveal — Sıfır JS Gecikmesi, Anında Görünür          */
/* -------------------------------------------------------------------------- */
export function Reveal({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  y?: number;
  immediate?: boolean;
}) {
  return <div className={className}>{children}</div>;
}

/* -------------------------------------------------------------------------- */
/* 3. Smooth Photo Frame — Donanım Hızlandırmalı Hover Yakınlaştırma        */
/* -------------------------------------------------------------------------- */
export function PhotoFrame({
  src,
  alt,
  aspectClass = "aspect-[16/10]",
  className = "",
  priority = false,
  caption,
  objectPosition = "object-center",
}: {
  src: string;
  alt: string;
  aspectClass?: string;
  className?: string;
  priority?: boolean;
  caption?: React.ReactNode;
  objectPosition?: string;
}) {
  return (
    <div
      className={`group overflow-hidden rounded-2xl bg-white p-2 sm:p-2.5 border border-cobalt-900/10 shadow-sm ${className}`}
    >
      <div className={`overflow-hidden rounded-xl bg-cobalt-50 ${aspectClass}`}>
        <img
          src={src}
          alt={alt}
          loading={priority ? "eager" : "lazy"}
          decoding="async"
          fetchPriority={priority ? "high" : undefined}
          className={`w-full h-full object-cover ${objectPosition} transition-transform duration-500 ease-out group-hover:scale-105`}
        />
      </div>
      {caption && <div className="pt-2.5 pb-1 px-1">{caption}</div>}
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/* 4. Clean Section Header                                                    */
/* -------------------------------------------------------------------------- */
export function SectionHeader({
  eyebrow,
  title,
  subtitle,
  dark = false,
  rightSlot,
}: {
  eyebrow: string;
  title: React.ReactNode;
  subtitle?: string;
  dark?: boolean;
  rightSlot?: React.ReactNode;
}) {
  return (
    <div
      className={`pb-5 sm:pb-6 mb-7 sm:mb-8 border-b ${
        dark ? "border-white/15" : "border-cobalt-900/10"
      }`}
    >
      <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-4">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 mb-2">
            <span className="h-2 w-2 rounded-full bg-crimson-600 inline-block" />
            <span
              className={`text-xs font-bold tracking-wider uppercase ${
                dark ? "text-cobalt-200" : "text-cobalt-700"
              }`}
            >
              {eyebrow}
            </span>
          </div>

          <h2
            className={`text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight ${
              dark ? "text-white" : "text-ink"
            }`}
          >
            {title}
          </h2>

          {subtitle && (
            <p
              className={`mt-2 text-sm sm:text-base leading-relaxed max-w-2xl ${
                dark ? "text-cobalt-100/90" : "text-ink-muted"
              }`}
            >
              {subtitle}
            </p>
          )}
        </div>

        {rightSlot && <div className="shrink-0">{rightSlot}</div>}
      </div>
    </div>
  );
}

export function SwissSectionHeader(props: {
  index?: string;
  eyebrow: string;
  title: React.ReactNode;
  subtitle?: string;
  dark?: boolean;
  rightSlot?: React.ReactNode;
}) {
  return (
    <SectionHeader
      eyebrow={props.eyebrow}
      title={props.title}
      subtitle={props.subtitle}
      dark={props.dark}
      rightSlot={props.rightSlot}
    />
  );
}

/* -------------------------------------------------------------------------- */
/* 5. Lightweight Tactile CTA Link                                            */
/* -------------------------------------------------------------------------- */
export function MagneticLink({
  href,
  children,
  variant = "crimson",
  external = false,
  className = "",
}: {
  href: string;
  children: React.ReactNode;
  variant?: "crimson" | "cobalt" | "outline-light" | "outline-dark" | "luminous";
  external?: boolean;
  className?: string;
}) {
  const styles = {
    crimson:
      "bg-crimson-600 text-white hover:bg-crimson-700 shadow-crimson border border-crimson-600",
    cobalt:
      "bg-cobalt-700 text-white hover:bg-cobalt-800 shadow-sm border border-cobalt-700",
    luminous:
      "bg-white text-cobalt-950 hover:bg-cobalt-50 shadow-md border border-white/80 font-extrabold",
    "outline-light":
      "bg-white/10 text-white hover:bg-white/20 border border-white/25",
    "outline-dark":
      "bg-transparent text-cobalt-950 hover:bg-cobalt-50 border border-cobalt-900/20",
  }[variant];

  const content = (
    <span
      className={`inline-flex items-center justify-center gap-2 rounded-xl px-5 py-3 text-sm sm:text-[15px] font-bold transition-all duration-200 active:scale-[0.98] ${styles} ${className}`}
    >
      <span>{children}</span>
      {external && <ArrowUpRight className="h-4 w-4 shrink-0" />}
    </span>
  );

  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer">
        {content}
      </a>
    );
  }

  return (
    <Link href={href} prefetch={true}>
      {content}
    </Link>
  );
}

/* -------------------------------------------------------------------------- */
/* 6. Next Chapter Banner (Subpage Footer Navigator)                          */
/* -------------------------------------------------------------------------- */
export function NextChapterBanner({
  title,
  description,
  href,
  buttonLabel = "Devam Et",
}: {
  title: string;
  description: string;
  href: string;
  buttonLabel?: string;
}) {
  return (
    <section className="bg-cobalt-950 text-white py-14 sm:py-16 border-t border-white/10">
      <div className="max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-10">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="max-w-2xl">
            <h3 className="text-2xl font-extrabold leading-[1.2] tracking-tight text-white sm:text-3xl">
              {title}
            </h3>
            <p className="mt-2 text-sm sm:text-base text-cobalt-200 leading-relaxed">
              {description}
            </p>
          </div>

          <div className="shrink-0">
            <MagneticLink href={href} variant="crimson">
              {buttonLabel}
            </MagneticLink>
          </div>
        </div>
      </div>
    </section>
  );
}
