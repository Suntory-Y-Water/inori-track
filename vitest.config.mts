/// <reference types="vitest" />
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vitest/config';

export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: 'happy-dom',
    setupFiles: './vitest-setup.ts',
    // e2eテストは除外
    include: ['src/test/app/**/*.test.tsx', 'src/test/components/**/*.test.tsx'],
  },
  resolve: {
    alias: {
      // biome-ignore lint/style/useTemplate: <explanation>
      '@': __dirname + '/src',
    },
  },
});
