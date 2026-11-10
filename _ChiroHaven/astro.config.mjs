import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  output: 'static',
  base: process.env.BASE_PATH || '/',
  site: 'https://chirohaven.boston-demo.com',
  trailingSlash: 'always',
  build: {
    format: 'directory'
  }
});

