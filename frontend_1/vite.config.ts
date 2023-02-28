import path from 'path'
import { visualizer } from 'rollup-plugin-visualizer'
import { defineConfig, type PluginOption } from 'vite'
import react from '@vitejs/plugin-react-swc'

export default defineConfig(({ mode }) => ({
  build: {
    rollupOptions: {
      plugins: [
        mode === 'analyze' &&
          (visualizer({
            filename: 'analyzer/index.html',
            open: true
          }) as PluginOption)
      ]
    }
  },
  plugins: [react({ jsxImportSource: '@emotion/react' })],
  resolve: {
    alias: {
      '@': path.join(__dirname, 'src')
    }
  }
}))
