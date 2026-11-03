import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const compat = new FlatCompat({
  baseDirectory: dirname(fileURLToPath(import.meta.url)),
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  {
    rules: {
      // Static export uses plain <img> with explicit lazy/async attributes.
      "@next/next/no-img-element": "off",
      // Fonts are loaded once from the App Router root layout.
      "@next/next/no-page-custom-font": "off",
    },
  },
];

export default eslintConfig;
