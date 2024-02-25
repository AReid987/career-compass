import { defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react'
import tsconfigPaths from 'vite-tsconfig-paths'
export default defineConfig({
  plugins: [react(), tsconfigPaths()],
  test: {
    environment: 'jsdom',
    reporters: [
      process.env.GITHUB_ACTIONS ? ['verbose', 'github-actions'] : ['verbose']
    ],
    outputFile: {
      html: 'report.html'
    },
    globals: true,
    css: true,
    coverage: {
      enabled: true,
      provider: 'v8',
      reporter: ['text', 'json', 'html']
    }
  }
})
