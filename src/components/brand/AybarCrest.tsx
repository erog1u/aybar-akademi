"use client";

import React, { useId } from "react";
import { siteConfig } from "@/config/site";

export function AybarCrestEmblem({
  variant = "light",
  className = "h-12 w-12",
  compact = false,
}: {
  variant?: "light" | "dark" | "watermark";
  className?: string;
  compact?: boolean;
}) {
  const uid = useId().replace(/:/g, "");
  const topArcId = `aybar-top-${uid}`;
  const bottomArcId = `aybar-bot-${uid}`;

  const navy =
    variant === "dark"
      ? "#FFFFFF"
      : variant === "watermark"
      ? "currentColor"
      : "#08245E";

  const secondaryRing =
    variant === "dark"
      ? "rgba(188, 215, 255, 0.75)"
      : variant === "watermark"
      ? "currentColor"
      : "#0F3D8A";

  const crimson =
    variant === "dark"
      ? "#FF2E43"
      : variant === "watermark"
      ? "currentColor"
      : "#B81424";

  const sealFill =
    variant === "dark"
      ? "rgba(8, 36, 94, 0.55)"
      : variant === "watermark"
      ? "none"
      : "#FFFFFF";

  // Helper to generate symmetrical laurel leaf pairs along left & right arcs
  const leafAngles = [148, 160, 172, 184, 196, 208];

  return (
    <svg
      viewBox="0 0 240 240"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label={siteConfig.name}
    >
      <defs>
        {/* Upper arc for AYBAR AKADEMİ */}
        <path
          id={topArcId}
          d="M 39,120 A 81,81 0 1,1 201,120"
          fill="none"
        />
        {/* Lower arc for Eğitim Yayıncılık Danışmanlık */}
        <path
          id={bottomArcId}
          d="M 43,126 A 78,78 0 0,0 197,126"
          fill="none"
        />
      </defs>

      {/* Outer Medallion Disc */}
      <circle
        cx="120"
        cy="120"
        r="112"
        fill={sealFill}
        stroke={navy}
        strokeWidth="5.5"
      />
      <circle
        cx="120"
        cy="120"
        r="103"
        stroke={secondaryRing}
        strokeWidth="2"
      />

      {/* Inner Crimson Double Ring */}
      <circle
        cx="120"
        cy="120"
        r="68"
        stroke={crimson}
        strokeWidth="3.5"
      />
      <circle
        cx="120"
        cy="120"
        r="62"
        stroke={crimson}
        strokeWidth="1.4"
        strokeOpacity="0.85"
      />

      {/* Curved Arc Typography (Hidden in ultra-small navbar compact mode for crispness) */}
      {!compact && (
        <>
          <text
            fill={crimson}
            fontFamily="Lora, Georgia, serif"
            fontWeight="700"
            fontSize="20.5"
            letterSpacing="2.2"
          >
            <textPath
              href={`#${topArcId}`}
              startOffset="50%"
              textAnchor="middle"
            >
              AYBAR AKADEMİ
            </textPath>
          </text>

          <text
            fill={navy}
            fontFamily="Lora, Georgia, serif"
            fontWeight="600"
            fontSize="11.2"
            letterSpacing="0.7"
          >
            <textPath
              href={`#${bottomArcId}`}
              startOffset="50%"
              textAnchor="middle"
            >
              Eğitim · Yayıncılık · Danışmanlık
            </textPath>
          </text>
        </>
      )}

      {/* Left & Right Laurel Wreath Accents */}
      {leafAngles.map((deg, idx) => {
        const radL = (deg * Math.PI) / 180;
        const lx = 120 + 86 * Math.cos(radL);
        const ly = 120 + 86 * Math.sin(radL);

        const radR = ((360 - deg + 180) * Math.PI) / 180;
        const rx = 120 - 86 * Math.cos(radL);
        const ry = ly;
        void radR;

        return (
          <g key={idx} fill={navy} opacity={variant === "watermark" ? 0.6 : 0.92}>
            <ellipse
              cx={lx}
              cy={ly}
              rx="6.2"
              ry="2.6"
              transform={`rotate(${deg - 55} ${lx} ${ly})`}
            />
            <ellipse
              cx={rx}
              cy={ry}
              rx="6.2"
              ry="2.6"
              transform={`rotate(${-(deg - 55)} ${rx} ${ry})`}
            />
          </g>
        );
      })}

      {/* Central Scholarly Monogram "A" */}
      <g>
        {/* Classic Serif "A" */}
        <path
          d="M120 68 L97 125 H107.5 L112.5 111.5 H127.5 L132.5 125 H143 L120 68 Z M115.2 103.5 L120 89.5 L124.8 103.5 H115.2 Z"
          fill={navy}
        />
        {/* Serif Foot Bars of "A" */}
        <rect x="93" y="123" width="17" height="3" fill={navy} />
        <rect x="130" y="123" width="17" height="3" fill={navy} />
      </g>

      {/* Open Academic Book Below "A" */}
      <g transform="translate(0, 3)">
        {/* Outer Crimson Book Cover */}
        <path
          d="M84 149 L91 129 C103 128 113 131 120 136 C127 131 137 128 149 129 L156 149 C142 147 129 149 120 155 C111 149 98 147 84 149 Z"
          fill={crimson}
        />
        {/* Inner Left & Right Pages */}
        <path
          d="M93 131.5 C103 130.5 112 133 118.5 137.5 V150.5 C111 146 101 144.5 89.5 145.5 L93 131.5 Z"
          fill={variant === "dark" ? "#08245E" : "#FFFFFF"}
        />
        <path
          d="M147 131.5 C137 130.5 128 133 121.5 137.5 V150.5 C129 146 139 144.5 150.5 145.5 L147 131.5 Z"
          fill={variant === "dark" ? "#08245E" : "#FFFFFF"}
        />
        {/* Subtle Page Lines */}
        <path
          d="M96 136.5 C103 136 110 137.5 115 140.5 M94.5 141 C102 140.5 109 142 115 144.8"
          stroke={crimson}
          strokeWidth="1.3"
          strokeLinecap="round"
        />
        <path
          d="M144 136.5 C137 136 130 137.5 125 140.5 M145.5 141 C138 140.5 131 142 125 144.8"
          stroke={crimson}
          strokeWidth="1.3"
          strokeLinecap="round"
        />
      </g>

      {/* Ornamental Divider (— ••• —) */}
      <g fill={crimson} stroke={crimson}>
        <line x1="97" y1="165" x2="110" y2="165" strokeWidth="1.6" />
        <circle cx="115" cy="165" r="1.8" stroke="none" />
        <circle cx="120" cy="165" r="2.4" stroke="none" />
        <circle cx="125" cy="165" r="1.8" stroke="none" />
        <line x1="130" y1="165" x2="143" y2="165" strokeWidth="1.6" />
      </g>
    </svg>
  );
}

export function AybarBrandLockup({
  variant = "light",
}: {
  variant?: "light" | "dark";
}) {
  return (
    <div className="inline-flex items-center gap-3.5 select-none">
      <div className="relative shrink-0 transition-transform duration-300 group-hover:scale-105">
        <AybarCrestEmblem
          variant={variant}
          compact
          className="h-11 w-11 sm:h-12 sm:w-12"
        />
      </div>
      <div className="flex flex-col">
        <span
          className={`font-serif font-bold text-lg sm:text-[1.24rem] tracking-tight leading-none ${
            variant === "dark" ? "text-white" : "text-cobalt-900"
          }`}
        >
          {siteConfig.name}
        </span>
        <span
          className={`text-[11px] font-medium tracking-[0.06em] mt-1 ${
            variant === "dark" ? "text-cobalt-200" : "text-ink-muted"
          }`}
        >
          {siteConfig.legalSubtitle}
        </span>
      </div>
    </div>
  );
}

export function AybarInstitutionalSeal({
  variant = "light",
  className = "",
}: {
  variant?: "light" | "dark";
  className?: string;
}) {
  return (
    <div className={`inline-flex flex-col items-center text-center ${className}`}>
      <AybarCrestEmblem
        variant={variant}
        className="h-36 w-36 sm:h-40 sm:w-40"
      />
      {/* Integrated Architectural Ribbon Banner */}
      <div
        className={`mt-3 px-5 py-2 border font-serif italic text-xs sm:text-sm tracking-wide ${
          variant === "dark"
            ? "bg-cobalt-900/90 border-cobalt-400/35 text-cobalt-100"
            : "bg-cobalt-900 border-cobalt-900 text-white"
        }`}
      >
        “{siteConfig.motto}”
      </div>
    </div>
  );
}
