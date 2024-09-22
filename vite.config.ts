import { resolve } from 'node:path';
import { defineConfig } from 'vite';
import vike from 'vike/plugin';
import vue from '@vitejs/plugin-vue';

export default defineConfig({
  root: resolve(import.meta.dirname, './client'),
  plugins: [vike(), vue()],
});
