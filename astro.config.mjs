// @ts-check
import { defineConfig } from 'astro/config';

import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  // TODO: confirmar domínio de produção antes de publicar
  site: 'https://bengoacai.com',
  integrations: [sitemap()],
});
