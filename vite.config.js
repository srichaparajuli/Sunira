import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: 'https://sunira.com.np/', 
  
  plugins: [react()],

  build: {
    chunkSizeWarningLimit: 1000 
  }
})
