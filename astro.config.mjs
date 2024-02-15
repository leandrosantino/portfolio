import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwind from "@astrojs/tailwind";
import { defineConfig } from 'astro/config';

import netlify from "@astrojs/netlify";

// https://astro.build/config
export default defineConfig({
  // site: 'https://leandrosantino.github.io',
  // dase: '/portifolio',
  // server: {
  //   host: true
  // },
  integrations: [mdx(), sitemap(), tailwind()],
  output: "server",
  adapter: netlify()
});