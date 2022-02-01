import { defineConfig } from 'vite';
import { svelte } from '@sveltejs/vite-plugin-svelte';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [svelte()],
  server: {
    open: true,
    https: false,
    proxy: {
      '/api': {
        target: 'http://localhost:3001/'
      }
    }
  }
});
