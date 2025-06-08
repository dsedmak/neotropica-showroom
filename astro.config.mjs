// @ts-check
import { defineConfig } from 'astro/config';
import AstroPWA from '@vite-pwa/astro';

// https://astro.build/config
export default defineConfig({
  base: import.meta.env.PROD ? '/neotropica-showroom/' : '/',
  outDir: 'docs',
  trailingSlash: 'always',
  integrations: [
    AstroPWA({
      base: import.meta.env.PROD ? '/neotropica-showroom/' : '/',
      mode: import.meta.env.DEV ? 'development' : 'production',
      registerType: 'autoUpdate',
      injectRegister: false,

      pwaAssets: {
        disabled: false,
        config: true,
      },

      manifest: {
        name: 'Neotropica Showroom',
        short_name: 'neotropica-showroom',
        description:
          'Welcome to the Neotropica Showroom application! This app is designed to run on tablets in an aquarium showroom, providing visitors with an interactive and informative experience.',
        theme_color: '#13171f',
        background_color: '#13171f',
        display: 'standalone',
        start_url: '/neotropica-showroom/si/predator-lagoon/'
      },

      workbox: {
        globPatterns: ['**/*.{js,css,html,svg,png,webp,jpg,ico}'],
        cleanupOutdatedCaches: true,
        clientsClaim: true,
        maximumFileSizeToCacheInBytes: 10 * 1024 * 1024,
      },

      devOptions: {
        enabled: false,
        navigateFallback: 'index.html',
        suppressWarnings: true,
        type: 'module',
      },
      experimental: {
        directoryAndTrailingSlashHandler: true,
      },
    }),
  ],
  i18n: {
    locales: ['si', 'en', 'de', 'it'],
    defaultLocale: 'si',
    routing: {
      prefixDefaultLocale: true,
      redirectToDefaultLocale: false,
    },
  },
});
