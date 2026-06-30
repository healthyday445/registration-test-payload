import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
    hmr: {
      overlay: false,
    },
    proxy: {
      '/.netlify/functions': {
        target: 'http://localhost:9999',
        changeOrigin: true,
      },
      '/api/register': {
        target: 'http://localhost:9999',
        rewrite: () => '/.netlify/functions/register',
        changeOrigin: true,
      },

      '/api': {
        target: 'https://healthyday-backend-v2-773381060399.asia-south1.run.app',
        changeOrigin: true,
        secure: false,
      }
    }
  },
  plugins: [react(), mode === "development" && componentTagger()].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    modulePreload: false,
  },
}));
