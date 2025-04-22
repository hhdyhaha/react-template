import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import postcssPxToRem from "postcss-pxtorem";
import tailwindcss from '@tailwindcss/vite'
import path from 'path'

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd());
  
  return {
    base: '/index',
    plugins: [
      react(),
      tailwindcss()
    ],
    server: {
      host: true,
      port: 3000,
      open: true,
      proxy: {
        [env.VITE_APP_BASE_API]: {
          target: 'http://localhost:8080',
          changeOrigin: true,
          rewrite: (path) => path.replace(new RegExp(`^${env.VITE_APP_BASE_API}`), '')
        }
      }
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
    },
  }
})
