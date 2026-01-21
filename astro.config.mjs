import cloudflare from "@astrojs/cloudflare"
import { defineConfig } from "astro/config"
import icon from "astro-icon"

// https://astro.build/config
export default defineConfig({
  adapter: cloudflare({
    imageService: "passthrough", 
  }),
  integrations: [
    icon({
      include: {
        "simple-icons": ["x", "discord"],
        heroicons: ["envelope-20-solid"],
      },
    }),
  ],
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
