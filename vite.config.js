import { resolve } from "path"
import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    lib: {
      entry: resolve(__dirname, "src/components/gantt.jsx"),
      name: "my-library",
      fileName: "index",
    },
    rollupOptions: {
      external: ["react"],
    },
  },
})
