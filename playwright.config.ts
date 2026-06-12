import { defineConfig } from '@playwright/test'

export default defineConfig({
  projects: [
    { name: 'Desktop', use: { viewport: { width: 1280, height: 720 } } },
    { name: 'Mobile', use: { viewport: { width: 375, height: 667 } } }
  ]
})