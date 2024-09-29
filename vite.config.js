import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  // Had to add this bcs for some reason the default output directory is dist
  build: {
    outDir: 'build',
  },
  base: './',
  plugins: [react()],
})
