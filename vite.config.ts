import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig } from 'vite';

export default defineConfig({
  base: '/portfolio_Mouad/',
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'), // pointer directement vers ton dossier source
    },
  },
  server: {
    hmr: process.env.DISABLE_HMR !== 'true',
    watch: process.env.DISABLE_HMR === 'true' ? undefined : {},
    port: 5173, // tu peux fixer un port si besoin
    open: true, // ouvre automatiquement le navigateur
  },
  build: {
    outDir: 'dist', // dossier de sortie
    sourcemap: true, // utile pour le debug
  },
});
