import { defineConfig } from 'astro/config';
import solidJs from "@astrojs/solid-js";
import { vanillaExtractPlugin } from '@vanilla-extract/vite-plugin';

// https://astro.build/config
export default defineConfig({
  site: "https://thecomputerm.github.io",
  integrations: [solidJs()],
  vite: {
    plugins: [vanillaExtractPlugin()],
    ssr: {
      noExternal: ['solid-toast']
    }
  }
});