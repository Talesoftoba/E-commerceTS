import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: true, // allows external devices (ngrok, phones) to connect
    port: 5173, // default Vite port, change if needed
    strictPort: true, // ensures it fails if port is in use
    allowedHosts: ['.ngrok-free.dev'], // allow any host (ngrok URLs, phones, etc.)
  },
})

