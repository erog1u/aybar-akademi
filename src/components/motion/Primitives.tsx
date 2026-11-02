"use client";

import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  useVelocity,
  useAnimationFrame,
  useMotionValue,
  useInView,
  animate,
  AnimatePresence,
} from "framer-motion";
import { ArrowUpRight, Check } from "lucide-react";

export const LUXURY_EASE = [0.22, 1, 0.36, 1] as const;

/* -------------------------------------------------------------------------- */
/* 1. Masked Line-by-Line Headline Reveal                                     */
/* -------------------------------------------------------------------------- */
export function MaskedLines({
  lines,
  className = "",
  as: Tag = "h2",
  delay = 0.04,
  immediate = false,
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
        <span
          key={idx}
          className="block overflow-hidden pt-2.5 -mt-2.5 pb-2.5 -mb-2.5 px-1.5 -mx-1.5"
        >
          <motion.span
            className="block"
            initial={{ y: "100%", opacity: 0 }}
            {...(immediate
              ? { animate: { y: "0%", opacity: 1 } }
              : {
                  whileInView: { y: "0%", opacity: 1 },
                  viewport: { once: true, amount: 0.05 },
                })}
            transition={{
              duration: 0.78,
              ease: LUXURY_EASE,
              delay: delay + idx * 0.09,
            }}
          >
            {line}
          </motion.span>
        </span>
      ))}
    </Tag>
  );
}

/* -------------------------------------------------------------------------- */
/* 2. Editorial Block Reveal                                                  */
/* -------------------------------------------------------------------------- */
export function Reveal({
  children,
  className = "",
  delay = 0,
  y = 18,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  y?: number;
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.05 }}
      transition={{ duration: 0.65, ease: LUXURY_EASE, delay }}
    >
      {children}
    </motion.div>
  );
}

/* -------------------------------------------------------------------------- */
/* 3. Clean Editorial Section Header                                          */
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
      className={`pb-6 sm:pb-8 mb-8 sm:mb-12 border-b ${
        dark ? "border-white/15" : "border-cobalt-900/10"
      }`}
    >
      <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="h-2 w-2 rounded-full bg-crimson-600 inline-block" />
            <span
              className={`text-xs sm:text-[13px] font-bold tracking-[0.08em] uppercase ${
                dark ? "text-cobalt-200" : "text-cobalt-700"
              }`}
            >
              {eyebrow}
            </span>
          </div>

          <h2
            className={`text-[1.8rem] sm:text-4xl lg:text-[2.65rem] font-extrabold tracking-tightest leading-[1.12] ${
              dark ? "text-white" : "text-ink"
            }`}
          >
            {title}
          </h2>

          {subtitle && (
            <p
              className={`mt-4 text-base sm:text-lg leading-relaxed max-w-2xl ${
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

/* Backward-compatible alias */
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
/* 4. Magnetic CTA Link                                                       */
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
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { damping: 16, stiffness: 200, mass: 0.12 });
  const springY = useSpring(y, { damping: 16, stiffness: 200, mass: 0.12 });

  const handleMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (
      typeof window !== "undefined" &&
      !window.matchMedia("(pointer: fine)").matches
    ) {
      return;
    }
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    x.set((e.clientX - cx) * 0.18);
    y.set((e.clientY - cy) * 0.18);
  };

  const handleLeave = () => {
    x.set(0);
    y.set(0);
  };

  const styles = {
    crimson:
      "bg-crimson-600 text-white hover:bg-crimson-700 shadow-crimson border border-crimson-600",
    cobalt:
      "bg-cobalt-700 text-white hover:bg-cobalt-900 border border-cobalt-700",
    "outline-light":
      "bg-white/10 text-white border border-white/30 hover:bg-white hover:text-cobalt-900 backdrop-blur-sm",
    "outline-dark":
      "bg-white text-cobalt-900 border border-cobalt-900/20 hover:border-cobalt-700 hover:bg-cobalt-50",
  }[variant];

  const content = (
    <motion.div
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      style={{ x: springX, y: springY }}
      className={`group inline-flex w-full sm:w-auto justify-center text-center items-center gap-2.5 px-6 py-3.5 text-[15px] sm:text-base font-bold rounded-lg tracking-tight transition-colors duration-300 ${styles} ${className}`}
    >
      <span>{children}</span>
      <span className="relative flex h-5 w-5 shrink-0 items-center justify-center overflow-hidden">
        <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-4 group-hover:-translate-y-4" />
        <ArrowUpRight className="absolute h-4 w-4 -translate-x-4 translate-y-4 transition-transform duration-300 group-hover:translate-x-0 group-hover:translate-y-0" />
      </span>
    </motion.div>
  );

  if (external) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex w-full sm:w-auto"
      >
        {content}
      </a>
    );
  }

  return (
    <Link href={href} className="inline-flex w-full sm:w-auto">
      {content}
    </Link>
  );
}

/* -------------------------------------------------------------------------- */
/* 5. Scroll-Velocity Kinetic Typographic Ribbon                              */
/* -------------------------------------------------------------------------- */
const wrap = (min: number, max: number, v: number) => {
  const range = max - min;
  return ((((v - min) % range) + range) % range) + min;
};

export function KineticRibbon({
  items,
  baseVelocity = -1.25,
  variant = "cobalt",
}: {
  items: string[];
  baseVelocity?: number;
  variant?: "cobalt" | "light";
}) {
  const baseX = useMotionValue(0);
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 50,
    stiffness: 380,
  });
  const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 3.5], {
    clamp: false,
  });
  const directionFactor = useRef(1);

  useAnimationFrame((_, delta) => {
    let moveBy = directionFactor.current * baseVelocity * (delta / 1000);
    const vf = velocityFactor.get();
    if (vf !== 0) {
      directionFactor.current = vf > 0 ? 1 : -1;
    }
    moveBy += directionFactor.current * moveBy * Math.abs(vf);
    baseX.set(baseX.get() + moveBy);
  });

  const x = useTransform(baseX, (v) => `${wrap(-20, -45, v)}%`);

  return (
    <div
      className={`overflow-hidden border-y select-none py-3.5 ${
        variant === "cobalt"
          ? "bg-cobalt-900 border-white/15 text-white"
          : "bg-white border-cobalt-900/10 text-cobalt-900"
      }`}
    >
      <motion.div className="flex whitespace-nowrap items-center" style={{ x }}>
        {[0, 1, 2, 3].map((rep) => (
          <div key={rep} className="flex items-center shrink-0">
            {items.map((item, i) => (
              <span key={i} className="inline-flex items-center">
                <span className="text-xs font-bold tracking-[0.12em] px-6">
                  {item}
                </span>
                <span className="h-1.5 w-1.5 rounded-full bg-crimson-600 inline-block" />
              </span>
            ))}
          </div>
        ))}
      </motion.div>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/* 6. Parallax Watermark Wordmark                                             */
/* -------------------------------------------------------------------------- */
export function ParallaxWatermark({
  text,
  className = "",
}: {
  text: string;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const x = useTransform(scrollYProgress, [0, 1], ["2%", "-8%"]);

  return (
    <div
      ref={ref}
      aria-hidden="true"
      className={`pointer-events-none overflow-hidden select-none ${className}`}
    >
      <motion.div
        style={{ x }}
        className="whitespace-nowrap font-sans font-extrabold text-[5.5rem] sm:text-[9rem] lg:text-[12rem] leading-none tracking-tightest"
      >
        {text}
      </motion.div>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/* 7. Interactive Process Steps Widget                                        */
/* -------------------------------------------------------------------------- */
const DIAGNOSTIC_STEPS = [
  {
    code: "1",
    progress: 20,
    title: "30 Dakikalık Tanışma Seansı",
    output: "Öğrenme stili analizi ve akademik altyapı tespiti yapılır.",
  },
  {
    code: "2",
    progress: 45,
    title: "Kişiselleştirilmiş Yol Haritası",
    output: "Hedefe ve öğrenme hızına uygun bireysel çalışma programı hazırlanır.",
  },
  {
    code: "3",
    progress: 70,
    title: "Ters Yüz Sınıf & Bilgi Kartları",
    output: "Ders öncesi ön hazırlık ve ders sonu bilgi kartlarıyla pekiştirme uygulanır.",
  },
  {
    code: "4",
    progress: 90,
    title: "Kişiye Özel Hata Defteri",
    output: "Takılınan soru tipleri hata defterinde eritilerek eksikler giderilir.",
  },
  {
    code: "5",
    progress: 100,
    title: "Tam Öğrenme & Veli Bilgilendirme",
    output: "Her ders sonu WhatsApp raporu ve aylık gelişim değerlendirmesi paylaşılır.",
  },
];

export function SuccessDiagnosticWidget() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const timer = setInterval(() => {
      setActive((prev) => (prev + 1) % DIAGNOSTIC_STEPS.length);
    }, 3400);
    return () => clearInterval(timer);
  }, [paused]);

  const current = DIAGNOSTIC_STEPS[active];

  return (
    <div
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      className="bg-white text-ink rounded-2xl border border-cobalt-900/12 shadow-card overflow-hidden"
    >
      <div className="bg-cobalt-950 text-white px-5 py-3.5 border-b border-white/10">
        <div className="flex items-center justify-between gap-4 mb-2">
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-crimson-500" />
            <span className="text-xs font-bold tracking-wide text-white">
              Aybar Akademi Süreç Adımları
            </span>
          </div>
          <span className="text-xs font-semibold text-cobalt-200">
            {current.code} / {DIAGNOSTIC_STEPS.length}
          </span>
        </div>

        <div className="h-1.5 w-full rounded-full bg-white/15 overflow-hidden">
          <motion.div
            className="h-full bg-crimson-600 rounded-full"
            initial={false}
            animate={{ width: `${current.progress}%` }}
            transition={{ duration: 0.6, ease: LUXURY_EASE }}
          />
        </div>
      </div>

      <div className="grid grid-cols-5 border-b border-cobalt-900/10 bg-paper-warm">
        {DIAGNOSTIC_STEPS.map((s, idx) => {
          const isActive = idx === active;
          return (
            <button
              key={s.code}
              type="button"
              onClick={() => setActive(idx)}
              className={`min-h-[42px] py-2.5 text-[13px] sm:text-sm font-bold border-r last:border-r-0 border-cobalt-900/10 transition-colors ${
                isActive
                  ? "bg-cobalt-700 text-white"
                  : "text-ink-muted hover:bg-cobalt-50 hover:text-cobalt-800"
              }`}
            >
              <span className="sm:hidden">{s.code}</span>
              <span className="hidden sm:inline">{s.code}. Adım</span>
            </button>
          );
        })}
      </div>

      <div className="p-5 sm:p-6 min-h-[140px] flex flex-col justify-center bg-white">
        <AnimatePresence mode="wait">
          <motion.div
            key={current.code}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.28, ease: LUXURY_EASE }}
          >
            <div className="flex items-center gap-2 text-xs font-bold text-cobalt-700 mb-1.5">
              <Check className="h-4 w-4 text-crimson-600" />
              <span>Standart İlke</span>
            </div>
            <h4 className="text-lg sm:text-xl font-extrabold tracking-tight text-ink leading-snug">
              {current.title}
            </h4>
            <p className="text-sm sm:text-[15px] text-ink-muted leading-relaxed mt-1.5">
              {current.output}
            </p>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/* 8. Animated Live Counter                                                   */
/* -------------------------------------------------------------------------- */
export function AnimatedCounter({
  target,
  prefix = "",
  suffix = "",
  duration = 1.5,
}: {
  target: number;
  prefix?: string;
  suffix?: string;
  duration?: number;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.1 });
  const [display, setDisplay] = useState(target);

  useEffect(() => {
    if (!inView) return;
    const controls = animate(0, target, {
      duration,
      ease: LUXURY_EASE,
      onUpdate: (val) => setDisplay(Math.round(val)),
    });
    return () => controls.stop();
  }, [inView, target, duration]);

  return (
    <span ref={ref} className="tabular-nums">
      {prefix}
      {display}
      {suffix}
    </span>
  );
}

/* -------------------------------------------------------------------------- */
/* 9. Interactive Studio Spotlight Card                                       */
/* -------------------------------------------------------------------------- */
export function SpotlightCard({
  children,
  className = "",
  glowColor = "rgba(56, 139, 255, 0.2)",
}: {
  children: React.ReactNode;
  className?: string;
  glowColor?: string;
}) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [pos, setPos] = useState({ x: 0, y: 0, active: false });

  const handleMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = cardRef.current?.getBoundingClientRect();
    if (!rect) return;
    setPos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
      active: true,
    });
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMove}
      onMouseLeave={() => setPos((p) => ({ ...p, active: false }))}
      className={`relative overflow-hidden ${className}`}
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 transition-opacity duration-300"
        style={{
          opacity: pos.active ? 1 : 0,
          background: `radial-gradient(420px circle at ${pos.x}px ${pos.y}px, ${glowColor}, transparent 70%)`,
        }}
      />
      <div className="relative z-10 h-full">{children}</div>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/* 10. Next Page Chapter Navigator (Calm Subpage Discovery Banner)            */
/* -------------------------------------------------------------------------- */
export function NextChapterBanner({
  kicker = "Sıradaki Sayfa",
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
    <section className="rounded-none bg-paper-warm border-t border-cobalt-900/10">
      <div className="max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-10 py-14 sm:py-16 flex flex-col lg:flex-row lg:items-center justify-between gap-8">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 text-sm font-semibold text-cobalt-700 mb-2.5">
            <span className="h-2 w-2 rounded-full bg-crimson-600 inline-block" />
            <span>{kicker}</span>
          </div>
          <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-ink">
            {title}
          </h3>
          <p className="mt-2.5 text-[15px] sm:text-base text-ink-muted leading-relaxed">
            {description}
          </p>
        </div>

        <div className="shrink-0 w-full sm:w-auto">
          <MagneticLink href={href} variant="crimson">
            {buttonLabel}
          </MagneticLink>
        </div>
      </div>
    </section>
  );
}
