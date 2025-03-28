import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import postcssPxToRem from "postcss-pxtorem";

// https://vite.dev/config/
export default defineConfig({
  base: '/',
  plugins: [react()],
  server: {
    host: true
  },
  css: {
    postcss: {
      plugins: [
        postcssPxToRem({
          rootValue: 75,
          propList: ["*"],
          selectorBlackList: ["html"],
          mediaQuery: true
        }),
      ],
    },
    preprocessorOptions: {
      scss: { api: 'modern-compiler' },
    }
  }
})
