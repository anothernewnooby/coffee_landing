// astro.config.mjs
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  // Configura el adaptador para el despliegue en Vercel
  output: 'static',
  // Configura el adaptador para desplegar en Vercel
  integrations: [],
});
