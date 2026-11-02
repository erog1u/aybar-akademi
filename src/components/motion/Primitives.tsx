"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

export const LUXURY_EASE = [0.22, 1, 0.36, 1] as const;

/* -------------------------------------------------------------------------- */
/* 1. Masked Line-by-Line Headline (Sıfır JS yükü, anında 120 FPS render)     */
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
        <span key={idx} className="block pt-0.5 pb-0.5">
          {line}
        </span>
      ))}
    </Tag>
  );
}

/* -------------------------------------------------------------------------- */
/* 2. Editorial Block Reveal (Sıfır scroll dinleyicisi, anında görünürlük)    */
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
/* 3. Smooth Photo Frame with Hover Zoom & Async Decoding                     */
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
      className={`group overflow-hidden rounded-2xl bg-white p-2.5 sm:p-3.5 border border-cobalt-900/10 shadow-studio ${className}`}
    >
      <div className={`overflow-hidden rounded-xl bg-cobalt-50 ${aspectClass}`}>
        <img
          src={src}
          alt={alt}
          loading={priority ? "eager" : "lazy"}
          decoding="async"
          className={`w-full h-full object-cover ${objectPosition} transition-transform duration-500 ease-out group-hover:scale-105`}
        />
      </div>
      {caption && <div className="pt-3 pb-1 px-1.5">{caption}</div>}
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/* 4. Clean Editorial Section Header                                          */
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
    <Reveal
      className={`pb-6 sm:pb-8 mb-8 sm:mb-10 border-b ${
        dark ? "border-white/15" : "border-cobalt-900/10"
      }`}
    >
      <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="h-2 w-2 rounded-full bg-crimson-600 inline-block" />
            <span
              className={`text-xs sm:text-[13px] font-extrabold tracking-[0.09em] uppercase ${
                dark ? "text-cobalt-200" : "text-cobalt-700"
              }`}
            >
              {eyebrow}
            </span>
          </div>

          <h2
            className={`text-[1.8rem] sm:text-4xl lg:text-[2.6rem] font-extrabold tracking-tightest leading-[1.12] ${
              dark ? "text-white" : "text-ink"
            }`}
          >
            {title}
          </h2>

          {subtitle && (
            <p
              className={`mt-3.5 text-base sm:text-lg leading-relaxed max-w-2xl ${
                dark ? "text-cobalt-100/90" : "text-ink-muted"
              }`}
            >
              {subtitle}
            </p>
          )}
        </div>

        {rightSlot && <div className="shrink-0">{rightSlot}</div>}
      </div>
    </Reveal>
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
/* 5. Lightweight Tactile CTA Link (Zero JS Spring Overhead on Mobile!)       */
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
  variant?: "crimson" | "cobalt" | "outline-light" | "outline-dark";
  external?: boolean;
  className?: string;
}) {
  const styles = {
    crimson:
      "bg-crimson-600 text-white hover:bg-crimson-700 shadow-crimson border border-crimson-600",
    cobalt:
      "bg-cobalt-700 text-white hover:bg-cobalt-900 border border-cobalt-700",
    "outline-light":
      "bg-white/12 text-white border border-white/30 hover:bg-white hover:text-cobalt-900",
    "outline-dark":
      "bg-white text-cobalt-900 border border-cobalt-900/20 hover:border-cobalt-700 hover:bg-cobalt-50",
  }[variant];

  const inner = (
    <span
      className={`group inline-flex w-full sm:w-auto justify-center text-center items-center gap-2.5 px-6 py-3.5 text-[15px] sm:text-base font-bold rounded-xl tracking-tight transition-all duration-200 hover:-translate-y-0.5 active:scale-[0.98] ${styles} ${className}`}
    >
      <span>{children}</span>
      <span className="relative flex h-5 w-5 shrink-0 items-center justify-center overflow-hidden">
        <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-4 group-hover:-translate-y-4" />
        <ArrowUpRight className="absolute h-4 w-4 -translate-x-4 translate-y-4 transition-transform duration-300 group-hover:translate-x-0 group-hover:translate-y-0" />
      </span>
    </span>
  );

  if (external) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex w-full sm:w-auto"
      >
        {inner}
      </a>
    );
  }

  return (
    <Link href={href} className="inline-flex w-full sm:w-auto">
      {inner}
    </Link>
  );
}

/* -------------------------------------------------------------------------- */
/* 6. Next Page Chapter Navigator                                             */
/* -------------------------------------------------------------------------- */
export function NextChapterBanner({
  kicker = "Sıradaki Bölüm",
  title,
  description,
  href,
  buttonLabel,
}: {
  kicker?: string;
  title: string;
  description: string;
  href: string;
  buttonLabel: string;
}) {
  return (
    <section className="bg-cobalt-950 text-white border-t border-white/10">
      <Reveal className="max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-10 py-14 sm:py-16 flex flex-col lg:flex-row lg:items-center justify-between gap-8">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-crimson-600/20 border border-crimson-500/40 text-xs sm:text-[13px] font-extrabold tracking-wider uppercase text-crimson-300 mb-3">
            <span className="h-2 w-2 rounded-full bg-crimson-500 inline-block" />
            <span>{kicker}</span>
          </div>
          <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white leading-snug">
            {title}
          </h3>
          <p className="mt-2.5 text-[15px] sm:text-base text-cobalt-100/90 leading-relaxed">
            {description}
          </p>
        </div>

        <div className="shrink-0 w-full sm:w-auto">
          <MagneticLink href={href} variant="crimson">
            {buttonLabel}
          </MagneticLink>
        </div>
      </Reveal>
    </section>
  );
}
