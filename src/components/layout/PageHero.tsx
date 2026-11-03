import React from "react";

/**
 * Shared hero: eyebrow, the page slogan as H1, optional subtitle, actions, media.
 * Typography and spacing stay the same on every page.
 */
export default function PageHero({
  eyebrow,
  title,
  subtitle,
  children,
  actions,
  media,
  wideMedia = false,
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  children?: React.ReactNode;
  actions?: React.ReactNode;
  media?: React.ReactNode;
  wideMedia?: boolean;
}) {
  return (
    <section className="studio-hero relative overflow-hidden border-b border-white/15 py-12 text-white sm:py-16 lg:py-20">
      <div className="relative z-10 mx-auto grid max-w-[1380px] grid-cols-1 items-center gap-8 px-4 sm:px-6 lg:grid-cols-12 lg:gap-12 lg:px-10">
        <div className={media ? (wideMedia ? "lg:col-span-6" : "lg:col-span-7") : "lg:col-span-12"}>
          {eyebrow ? (
            <p className="mb-4 inline-flex max-w-full items-center gap-2 text-xs font-bold uppercase tracking-[0.08em] text-white">
              <span className="h-2 w-2 shrink-0 rounded-full bg-crimson-500" />
              <span>{eyebrow}</span>
            </p>
          ) : null}
          <h1 className="max-w-4xl text-balance text-[1.55rem] font-extrabold leading-[1.15] tracking-tight text-white sm:text-4xl lg:text-[2.65rem]">
            {title}
          </h1>
          {subtitle ? (
            <p className="mt-4 max-w-2xl text-balance text-base leading-relaxed text-cobalt-50 sm:text-lg">
              {subtitle}
            </p>
          ) : null}
          {children ? (
            <div className="mt-5 max-w-2xl space-y-4 text-base leading-relaxed text-cobalt-50 sm:text-lg">
              {children}
            </div>
          ) : null}
          {actions ? (
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">{actions}</div>
          ) : null}
        </div>
        {media ? (
          <div className={wideMedia ? "lg:col-span-6" : "lg:col-span-5"}>{media}</div>
        ) : null}
      </div>
    </section>
  );
}
