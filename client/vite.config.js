import { defineConfig } from 'vite';
import { svelte } from '@sveltejs/vite-plugin-svelte';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [svelte()],
  server: {
    open: true,
    proxy: {
      '/api': {
        target: 'http://localhost:3001'
      },
      '/user': {
        target: 'http://localhost:3001'
      }
    }
  }
});
