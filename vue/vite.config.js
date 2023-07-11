import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  //fix reload config
    server: {
        watch: {
            usePolling: true,
        }
    },
})
