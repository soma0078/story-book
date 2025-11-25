import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import svgr from "vite-plugin-svgr";
import path from "node:path";

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
    // SCSS 전역 변수 및 믹스인 자동 로드 설정
    preprocessorOptions: {
      scss: {
        // @use 문법을 사용하여 모든 SCSS 파일에 _variables.scss를 자동으로 포함시킵니다.
        // 'as *'를 사용하면 네임스페이스 없이 변수를 직접 사용할 수 있습니다.
        additionalData: `@use "${path
          .resolve(__dirname, "src/styles/abstracts/_variables.scss")
          .replace(/\\/g, "/")}" as *;`,
      },
    },
  },
});
