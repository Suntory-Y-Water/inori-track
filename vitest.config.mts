/// <reference types="vitest" />
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vitest/config';

export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: 'happy-dom',
    setupFiles: './vitest-setup.ts',
    exclude: ['src/test/e2e/', 'node_modules'],
  },
  resolve: {
    alias: {
      // biome-ignore lint/style/useTemplate: <explanation>
      '@': __dirname + '/src',
    },
  },
});
