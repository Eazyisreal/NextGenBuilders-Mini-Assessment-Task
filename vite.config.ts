import { TanStackRouterVite } from '@tanstack/router-plugin/vite';
import { defineConfig } from 'vite';
import { fileURLToPath } from 'url';
import path from 'path';
import tailwindcss from '@tailwindcss/vite';
import viteReact from '@vitejs/plugin-react';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default defineConfig({
  plugins: [
    TanStackRouterVite({ autoCodeSplitting: true }),
    viteReact(),
    tailwindcss(),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
});
