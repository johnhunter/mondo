/// <reference types="vitest" />

import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import tsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig({
  plugins: [react(), tsconfigPaths()],
  test: {
    globals: true,
    environment: 'jsdom',
    exclude: ['**/node_modules/**', '**/dist/**', './tests', './test-*'],
    setupFiles: './vitest.setup.ts',
    css: {
      modules: {
        classNameStrategy: 'non-scoped',
      },
    },
  },
});
