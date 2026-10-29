import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://haotian-fu.github.io',
  output: 'static',
  redirects: {
    '/projects': '/research',
    '/pub': '/publications',
  },
});
