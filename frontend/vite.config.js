import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    watch: {
      ignored: [
        '**/../backend/**',  // completely ignore backend folder
        '**/backend/**'
      ],
    },
  },
})
