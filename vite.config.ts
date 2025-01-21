import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { fileURLToPath, URL } from 'node:url';
import { version } from './package.json';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  //   base: '/ave-mujica-images/',
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  define: {
    BUILD_DATE: JSON.stringify(new Date().toLocaleDateString().split('T')[0]),
    APP_VERSION: JSON.stringify(version),
  },
});
