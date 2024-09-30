// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig(
  {
    devToolbar: {
      enabled: false,
    },
    integrations: [tailwind()],
  }, // your configuration options here...
  // https://docs.astro.build/en/reference/configuration-reference/
);
