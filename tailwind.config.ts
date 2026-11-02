import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        cobalt: {
          50: "#EEF5FF",
          100: "#D9E8FF",
          200: "#BCD7FF",
          300: "#8EBDFD",
          400: "#5998FA",
          500: "#2B72F3",
          600: "#0F53D6",
          700: "#0044B5", // Primary Studio Cobalt (Reference Theme)
          800: "#07348C",
          900: "#08245E", // Aybar Crest Deep Navy
          950: "#04153B",
        },
        crimson: {
          50: "#FFF1F2",
          100: "#FFE0E3",
          500: "#EF233C",
          600: "#DC1B2E", // Primary Signal Red (Reference Theme)
          700: "#B81424", // Aybar Crest Burgundy Red
          800: "#961220",
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
        sans: ['"Plus Jakarta Sans"', "-apple-system", "BlinkMacSystemFont", "sans-serif"],
        serif: ['"Lora"', "Georgia", "serif"],
        mono: ['"JetBrains Mono"', "monospace"],
      },
      letterSpacing: {
        tightest: "-0.04em",
        tighter: "-0.028em",
      },
      boxShadow: {
        studio: "0 24px 60px -15px rgba(4, 21, 59, 0.16)",
        card: "0 12px 32px -10px rgba(8, 36, 94, 0.08)",
        crimson: "0 16px 36px -8px rgba(220, 27, 46, 0.38)",
      },
      backgroundImage: {
        "dot-white": "radial-gradient(rgba(255, 255, 255, 0.16) 1.25px, transparent 1.25px)",
        "dot-cobalt": "radial-gradient(rgba(0, 68, 181, 0.12) 1.25px, transparent 1.25px)",
      },
    },
  },
  plugins: [],
};

export default config;
