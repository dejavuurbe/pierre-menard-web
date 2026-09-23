import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

const site = process.env.SITE_URL || 'https://dejavuurbe.github.io/pierre-menard-web/';

export default defineConfig({
  site,
  base: '/pierre-menard-web',
  output: 'static',
  integrations: [sitemap()],
});
