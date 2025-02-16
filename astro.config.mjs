// @ts-check
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
  experimental: {
    svg: true,
  },
  i18n: {
    locales: ["si", "en", "de", "it"],
    defaultLocale: "si",
    routing: {
      prefixDefaultLocale: true,
      redirectToDefaultLocale: false,
    },
  },
});
