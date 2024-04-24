import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
vue.plugins
// https://vitejs.dev/config/
export default defineConfig({
  chainWebpack: config => {
    config.module
      .rule('images')
      .use('url-loader')
      .loader('url-loader')
      .tap(options => {
        // Cambia 'imagen' al nombre de tu imagen
        options.name = 'assets/[name].[hash:8].[ext]';
        return options;
      });
  },
  plugins: [
    vue(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
