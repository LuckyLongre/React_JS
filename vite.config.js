// Import Vite's configuration function
import { defineConfig } from 'vite'
// Import the React plugin for Vite
import react from '@vitejs/plugin-react'
// Import the Tailwind CSS plugin for Vite
import tailwindcss from "@tailwindcss/vite"

// Vite configuration (https://vite.dev/config/)
export default defineConfig({
  // Configure plugins:
  // - react(): Enables React support and features
  // - tailwindcss(): Enables Tailwind CSS processing
  plugins: [react(), tailwindcss()],
})
