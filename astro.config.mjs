// @ts-check
import { defineConfig } from 'astro/config';

import alpinejs from '@astrojs/alpinejs';
import tailwindVitePlugin from '@tailwindcss/vite';


// https://astro.build/config
export default defineConfig({
  site: "https://authors-together.org",
  integrations: [
    alpinejs()
  ],
  vite: {
    plugins: [tailwindVitePlugin()]
  }
});
