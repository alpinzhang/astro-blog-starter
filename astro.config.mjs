import { defineConfig } from 'astro/config';
import sentry from "@sentry/astro";
import spotlightjs from "@spotlightjs/astro";

import vue from "@astrojs/vue";

// https://astro.build/config
export default defineConfig({
  site: "https://example.com",
  integrations: [sentry(), spotlightjs(), vue()]
});