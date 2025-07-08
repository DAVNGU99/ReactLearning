import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import eslint from "vite-plugin-eslint";

export default defineConfig({
  plugins: [
    react(),
    eslint({
      failOnError: false, // ⛔ Don't crash on errors
      failOnWarning: false, // ⚠️ Don't crash on warnings
    }),
  ],
});
