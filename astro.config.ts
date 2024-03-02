import preact from "@astrojs/preact";
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  integrations: [preact()],
  output: "static",
  server: {
    port: 3000
  },
});