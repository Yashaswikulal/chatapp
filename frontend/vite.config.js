import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: [
      'cloudinary',
      'http',
      'https',
      'fs',
      'path',
      'util'
    ],
  },
  build: {
    rollupOptions: {
      external: [
        'cloudinary',
        /^node:.*/,
        'http',
        'https',
        'fs',
        'path'
      ],
    },
  },
  server: {
    watch: {
      ignored: ['/backend/'],
    },
  },
})