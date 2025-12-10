import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  // 👇 this MUST match your repo name exactly
  base: "/netflix_style_portafolio/",
  plugins: [react()],
});
