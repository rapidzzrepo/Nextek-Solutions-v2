import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: true,
    allowedHosts: ['sacred-motive-visa.ngrok-free.dev'],
    proxy: {
      '/api': 'http://localhost:3001'
    }
  }
})
