import { defineConfig } from "astro/config"

import cloudflare from "@astrojs/cloudflare"
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
        heroicons: ["map-pin-16-solid", "envelope-open-20-solid"],
      },
    }),
  ],
  server: {
    port: 3000,
  },
  output: "server",
  serverIslands: true,
  site: "https://dejay.dev",
  vite: {
    css: {
      transformer: "lightningcss",
    },
  },
})
