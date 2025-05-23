import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react'; // Required for Next.js projects if not using SWC directly

export default defineConfig({
  plugins: [react()], // Or use Next.js SWC integration if preferred and available
  test: {
    globals: true, // Use Vitest global APIs (describe, it, expect)
    environment: 'node', // For API tests, 'node' environment is suitable
    include: ['**/*.{test,spec}.?(c|m)[jt]s?(x)'],
    // Optional: setup files, environment variables, etc.
    // setupFiles: './vitest.setup.ts', // If you need a setup file
  },
});
