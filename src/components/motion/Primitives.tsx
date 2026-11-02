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
  delay = 0.05,
}: {
  lines: React.ReactNode[];
  className?: string;
  as?: "h1" | "h2" | "h3" | "div";
  delay?: number;
}) {
  return (
    <Tag className={className}>
      {lines.map((line, idx) => (
        <span key={idx} className="block overflow-hidden pb-1 -mb-1">
          <motion.span
            className="block"
            initial={{ y: "108%", opacity: 0 }}
            whileInView={{ y: "0%", opacity: 1 }}
            viewport={{ once: true, margin: "-8% 0px" }}
            transition={{
              duration: 0.85,
              ease: LUXURY_EASE,
              delay: delay + idx * 0.1,
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
  y = 22,
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
      viewport={{ once: true, margin: "-8% 0px" }}
      transition={{ duration: 0.75, ease: LUXURY_EASE, delay }}
    >
      {children}
    </motion.div>
  );
}

/* -------------------------------------------------------------------------- */
/* 3. Swiss Section Folio Header with + Register Crosshairs                   */
/* -------------------------------------------------------------------------- */
export function SwissSectionHeader({
  index,
  eyebrow,
  title,
  subtitle,
  dark = false,
  rightSlot,
}: {
  index: string;
  eyebrow: string;
  title: React.ReactNode;
  subtitle?: string;
  dark?: boolean;
  rightSlot?: React.ReactNode;
}) {
  return (
    <div
      className={`relative pb-10 mb-12 border-b ${
        dark ? "border-white/15" : "border-cobalt-900/12"
      }`}
    >
      {/* Swiss + Register Marks */}
      <span
        aria-hidden="true"
        className="absolute -bottom-[9px] left-0 font-mono text-xs leading-none text-crimson-600 select-none"
      >
        +
      </span>
      <span
        aria-hidden="true"
        className="absolute -bottom-[9px] right-0 font-mono text-xs leading-none text-crimson-600 select-none"
      >
        +
      </span>

      <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
        <div className="max-w-3xl">
          <div className="flex items-center gap-3 mb-4">
            <span
              className={`inline-flex items-center px-2.5 py-1 font-mono text-[11px] tracking-[0.16em] border ${
                dark
                  ? "border-white/20 bg-white/5 text-white"
                  : "border-cobalt-700/20 bg-cobalt-50 text-cobalt-700"
              }`}
            >
              [{index}]
            </span>
            <span className="h-[1px] w-6 bg-crimson-600" />
            <span
              className={`font-mono text-[11px] tracking-[0.18em] ${
                dark ? "text-cobalt-200" : "text-ink-muted"
              }`}
            >
              {eyebrow}
            </span>
          </div>

          <h2
            className={`text-3xl sm:text-4xl lg:text-[2.75rem] font-extrabold tracking-tightest leading-[1.08] ${
              dark ? "text-white" : "text-ink"
            }`}
          >
            {title}
          </h2>

          {subtitle && (
            <p
              className={`mt-4 text-base sm:text-lg leading-relaxed max-w-2xl ${
                dark ? "text-cobalt-100/85" : "text-ink-muted"
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

/* -------------------------------------------------------------------------- */
/* 4. Magnetic CTA Link (Internal & External)                                 */
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
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    x.set((e.clientX - cx) * 0.22);
    y.set((e.clientY - cy) * 0.22);
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
      "bg-transparent text-ink border border-cobalt-900/20 hover:border-cobalt-700 hover:bg-cobalt-50/70",
  }[variant];

  const content = (
    <motion.div
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      style={{ x: springX, y: springY }}
      className={`group inline-flex items-center gap-3 px-6 py-3.5 text-sm font-bold tracking-tight transition-colors duration-300 ${styles} ${className}`}
    >
      <span>{children}</span>
      <span className="relative flex h-5 w-5 items-center justify-center overflow-hidden">
        <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-4 group-hover:-translate-y-4" />
        <ArrowUpRight className="absolute h-4 w-4 -translate-x-4 translate-y-4 transition-transform duration-300 group-hover:translate-x-0 group-hover:translate-y-0" />
      </span>
    </motion.div>
  );

  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className="inline-block">
        {content}
      </a>
    );
  }

  return (
    <Link href={href} className="inline-block">
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
  baseVelocity = -1.35,
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
  const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 4], {
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
      className={`overflow-hidden border-y select-none py-4 ${
        variant === "cobalt"
          ? "bg-cobalt-900 border-white/15 text-white"
          : "bg-paper-warm border-cobalt-900/10 text-cobalt-900"
      }`}
    >
      <motion.div className="flex whitespace-nowrap items-center" style={{ x }}>
        {[0, 1, 2, 3].map((rep) => (
          <div key={rep} className="flex items-center shrink-0">
            {items.map((item, i) => (
              <span key={i} className="inline-flex items-center">
                <span className="font-mono text-xs sm:text-[13px] font-medium tracking-[0.18em] px-6">
                  {item}
                </span>
                <span className="h-1.5 w-1.5 bg-crimson-600 rotate-45 inline-block" />
              </span>
            ))}
          </div>
        ))}
      </motion.div>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/* 6. Parallax Watermark Wordmark (Reference Image 4 Motif)                   */
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
  const x = useTransform(scrollYProgress, [0, 1], ["4%", "-10%"]);

  return (
    <div
      ref={ref}
      aria-hidden="true"
      className={`pointer-events-none overflow-hidden select-none ${className}`}
    >
      <motion.div
        style={{ x }}
        className="whitespace-nowrap font-sans font-extrabold text-[6.5rem] sm:text-[10rem] lg:text-[13.5rem] leading-none tracking-tightest"
      >
        {text}
      </motion.div>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/* 7. Interactive "Başarı Yükleniyor..." Diagnostic Terminal (Ref Image 3)    */
/* -------------------------------------------------------------------------- */
const DIAGNOSTIC_STEPS = [
  {
    code: "01",
    progress: 22,
    tag: "ÜCRETSİZ KEŞİF",
    title: "30 Dakikalık Tanışma & Öğrenme Stili Analizi",
    output: "Görsel / İşitsel / Kinestetik profil ve akademik önyargı haritası çıkarıldı.",
  },
  {
    code: "02",
    progress: 46,
    tag: "YOL HARİTASI",
    title: "Kişiye Özel VIP Program & İş Birliği Taahhüdü",
    output: "Konu bitiş takvimi ve sürdürülebilir haftalık çalışma planı oluşturuldu.",
  },
  {
    code: "03",
    progress: 72,
    tag: "AKTİF ÖĞRENME",
    title: "Flipped Classroom & Active Recall Kartları",
    output: "Ders öncesi 5-10 dk ön hazırlık + ders sonu bilgi kartı pekiştirmesi aktif.",
  },
  {
    code: "04",
    progress: 92,
    tag: "SIFIR HATA",
    title: "Dijital Hata Defteri & Sıfırlama Tekniği",
    output: "Deneme ve yazılılardaki hatalı soru tipleri eritildi; net artışı katlandı.",
  },
  {
    code: "05",
    progress: 100,
    tag: "HEDEF ZİRVE",
    title: "Tam Öğrenme & Veli Raporlama Sistemi",
    output: "Her ders sonu WhatsApp raporu + aylık performans analizi ile %100 şeffaf takip.",
  },
];

export function SuccessDiagnosticWidget() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const timer = setInterval(() => {
      setActive((prev) => (prev + 1) % DIAGNOSTIC_STEPS.length);
    }, 3600);
    return () => clearInterval(timer);
  }, [paused]);

  const current = DIAGNOSTIC_STEPS[active];

  return (
    <div
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      className="bg-white text-ink border border-cobalt-900/15 shadow-studio overflow-hidden"
    >
      {/* Top Crimson Status Header — Inspired by Reference Image 3 */}
      <div className="bg-cobalt-950 text-white px-5 py-4 border-b border-white/10">
        <div className="flex items-center justify-between gap-4 mb-2.5">
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-crimson-500 animate-pulse" />
            <span className="font-mono text-[11px] tracking-[0.16em] text-cobalt-100">
              BAŞARI YÜKLENİYOR...
            </span>
          </div>
          <span className="font-mono text-xs font-semibold text-white">
            %{current.progress}
          </span>
        </div>

        {/* Smooth Progress Track */}
        <div className="h-2 w-full bg-white/12 overflow-hidden p-[1px] border border-white/20">
          <motion.div
            className="h-full bg-crimson-600"
            initial={false}
            animate={{ width: `${current.progress}%` }}
            transition={{ duration: 0.65, ease: LUXURY_EASE }}
          />
        </div>
      </div>

      {/* Step Selector Pills */}
      <div className="grid grid-cols-5 border-b border-cobalt-900/10 bg-paper-warm">
        {DIAGNOSTIC_STEPS.map((s, idx) => {
          const isActive = idx === active;
          return (
            <button
              key={s.code}
              type="button"
              onClick={() => setActive(idx)}
              className={`py-2.5 font-mono text-xs font-semibold border-r last:border-r-0 border-cobalt-900/10 transition-colors ${
                isActive
                  ? "bg-crimson-600 text-white"
                  : "text-ink-muted hover:bg-cobalt-50 hover:text-cobalt-800"
              }`}
            >
              {s.code}
            </button>
          );
        })}
      </div>

      {/* Printed Receipt / Action Dossier Card */}
      <div className="p-5 sm:p-6 min-h-[168px] flex flex-col justify-between bg-white">
        <AnimatePresence mode="wait">
          <motion.div
            key={current.code}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.32, ease: LUXURY_EASE }}
          >
            <div className="flex items-center justify-between gap-2 mb-2">
              <span className="inline-block px-2 py-0.5 bg-crimson-600 text-white font-mono text-[10px] font-semibold tracking-[0.14em]">
                ADIM {current.code} · {current.tag}
              </span>
              <span className="inline-flex items-center gap-1 font-mono text-[11px] text-cobalt-700 font-medium">
                <Check className="h-3.5 w-3.5 text-crimson-600" />
                AKTİF STANDART
              </span>
            </div>

            <h4 className="text-base sm:text-lg font-extrabold tracking-tight text-ink leading-snug mt-2">
              {current.title}
            </h4>
            <p className="text-xs sm:text-sm text-ink-muted leading-relaxed mt-2">
              {current.output}
            </p>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/* 8. Animated Live Counter (Spring-Driven Metric Roll)                       */
/* -------------------------------------------------------------------------- */
export function AnimatedCounter({
  target,
  prefix = "",
  suffix = "",
  duration = 1.6,
}: {
  target: number;
  prefix?: string;
  suffix?: string;
  duration?: number;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-10% 0px" });
  const [display, setDisplay] = useState(0);

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
  glowColor = "rgba(56, 139, 255, 0.22)",
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

