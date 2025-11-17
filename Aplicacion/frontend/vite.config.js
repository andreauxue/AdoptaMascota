import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  
  server: {
    proxy: {
      // Redirige cualquier petición que comience con /api al backend de Django
      '/api': {
        target: 'http://127.0.0.1:8000',
        changeOrigin: true, 
        secure: false, 
      },
      // También redirige /media para las imágenes de mascotas
      '/media': {
        target: 'http://127.0.0.1:8000',
        changeOrigin: true,
        secure: false,
      }
    }
  }
})