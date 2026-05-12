import cloudflare from "@astrojs/cloudflare"
import { defineConfig } from "astro/config"

// https://astro.build/config
export default defineConfig({
  adapter: cloudflare({
    imageService: "passthrough",
  }),
  server: {
    port: 3000,
  },
  output: "server",
  site: "https://dejay.dev",
  vite: {
    server: {
      allowedHosts: "localhost.dejaydev.com",
    },
    css: {
      transformer: "lightningcss",
    },
  },
})
