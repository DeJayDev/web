import preact from "@astrojs/preact";
import icon from "astro-icon";
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  integrations: [icon(), preact()],
  output: "static",
  server: {
    port: 3000
  },
});