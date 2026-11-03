import path from "path";
import type { Config } from "tailwindcss";

const config: Config = {
  content: [path.join(__dirname, "./src/**/*.{js,ts,jsx,tsx,mdx}")],
  theme: {
    extend: {
      spacing: {
        18: "4.5rem",
        22: "5.5rem",
        26: "6.5rem",
      },
      opacity: {
        12: "0.12",
        85: "0.85",
        98: "0.98",
      },
      colors: {
        cobalt: {
          50: "#EEF5FF",
          100: "#D9E8FF",
          200: "#BCD7FF",
          300: "#8EBDFD",
          400: "#5998FA",
          500: "#2B72F3",
          600: "#0F53D6",
          700: "#0044B5",
          800: "#07348C",
          900: "#08245E",
          950: "#04153B",
        },
        crimson: {
          50: "#FFF1F2",
          100: "#FFE0E3",
          200: "#FECDD3",
          300: "#FDA4AF",
          400: "#FB5668",
          500: "#EF233C",
          600: "#DC1B2E",
          700: "#B81424",
          800: "#961220",
          900: "#7F101C",
          950: "#4C050D",
        },
        ink: {
          DEFAULT: "#09152B",
          muted: "#42526E",
          subtle: "#6B7A94",
        },
        paper: {
          DEFAULT: "#FAFBFD",
          warm: "#F4F7FC",
          tint: "#EAF2FF",
        },
      },
      fontFamily: {
        sans: [
          "var(--font-sans)",
          '"Plus Jakarta Sans"',
          "var(--font-inter)",
          "Inter",
          "-apple-system",
          "BlinkMacSystemFont",
          "sans-serif",
        ],
        brand: [
          "var(--font-brand)",
          '"Montserrat"',
          "var(--font-sans)",
          '"Plus Jakarta Sans"',
          "-apple-system",
          "sans-serif",
        ],
      },
      letterSpacing: {
        tightest: "-0.018em",
        tighter: "-0.012em",
        tight: "-0.01em",
      },
      boxShadow: {
        studio: "0 20px 50px -14px rgba(4, 21, 59, 0.18)",
        card: "0 10px 28px -10px rgba(8, 36, 94, 0.08)",
        crimson: "0 14px 30px -8px rgba(220, 27, 46, 0.36)",
      },
    },
  },
  plugins: [],
};

export default config;
