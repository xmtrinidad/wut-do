import { defineConfig } from 'vite';
import { svelte } from '@sveltejs/vite-plugin-svelte';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [svelte()],
  server: {
    open: false,
    proxy: {
      '/api': {
        target: 'http://backend:3001'
      },
      '/user': {
        target: 'http://backend:3001'
      }
    }
  }
});
