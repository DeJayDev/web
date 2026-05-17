import cloudflare from "@astrojs/cloudflare"
import { defineConfig } from "astro/config"
import Icons from "unplugin-icons/vite"

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
    plugins: [Icons({ compiler: "astro" })],
  },
})
