import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import svgr from "vite-plugin-svgr";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), svgr()],
  css: {
    modules: {
      // Ensures that CSS module class names are converted to camelCase
      // in the `styles` object, allowing access like `styles.myClassName`
      // instead of `styles['my-class-name']`.
      localsConvention: "camelCase",
    },
  },
});
