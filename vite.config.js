import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: "/compras-super",
  plugins: [react()],
  server: {
    host: true,
    port: 3000,
  }
})
