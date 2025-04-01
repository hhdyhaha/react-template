import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import postcssPxToRem from "postcss-pxtorem";
import tailwindcss from '@tailwindcss/vite'
import path from 'path'

// https://vite.dev/config/
export default defineConfig({
  base: '/',
  plugins: [
    react(),
    tailwindcss()
  ],
  server: {
    host: true
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src')
    }
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
