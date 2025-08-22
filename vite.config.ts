import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  assetsInclude: ['**/*.ttf', '**/*.otf', '**/*.woff', '**/*.woff2'],
  build: {
    rollupOptions: {
      output: {
        assetFileNames: (assetInfo) => {
          const info = assetInfo.name?.split('.') || [];
          const ext = info[info.length - 1];
          if (/ttf|otf|woff|woff2/.test(ext)) {
            return `fonts/[name].[ext]`;
          }
          return `assets/[name]-[hash].[ext]`;
        },
      },
    },
  },
})