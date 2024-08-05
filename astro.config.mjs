import { defineConfig } from 'astro/config';

import cloudflare from "@astrojs/cloudflare";

// https://astro.build/config
export default defineConfig({
  adapter: cloudflare({
    imageService: "cloudflare"
  }),
  output: "server",
  site: "https://dejay.dev",
  server: {
    port: 3000
  },
  vite: {
    css: {
      transformer: "lightningcss"
    }
  },
});