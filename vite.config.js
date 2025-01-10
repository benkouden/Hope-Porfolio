import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,  // Choisissez un port non utilisé, par exemple 3000
    host: '0.0.0.0' // Expose le serveur à toutes les adresses réseau
  },
})
