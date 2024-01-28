/// <reference types="vitest" />
import react from '@vitejs/plugin-react-swc';
import { defineConfig } from 'vite';
import tsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig({
  plugins: [react(), tsconfigPaths()],
  test: {
    globals: true,
    environment: 'happy-dom',
    setupFiles: ['./vitest-setup.ts'],
    coverage: {
      provider: 'v8',
      reporter: ['text', 'html'],
      include: ['src/**/*.{js,ts,jsx,tsx}'], // srcディレクトリ内のファイルを対象にする
      exclude: [
        '**/tests/**',
        '**/*.d.ts',
        '**/types.ts',
        // 除外するフォルダやファイル
        '**/src/components/ui/**',
        '**/src/data/**',
        '**/src/lib/**',
        '**/src/main.tsx',
        '**/src/App.tsx',
      ],
    },
  },
});
