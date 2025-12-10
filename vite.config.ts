import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// 👇 Add correct base path for GitHub Pages
export default defineConfig({
  base: "/netflix_style_portafolio/",
  plugins: [react()]
})

