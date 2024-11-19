import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import path from 'path'

// https://vite.dev/config/
export default defineConfig({
  server:{
    proxy:{'/api':{                      // each time the url begins with /api this proxy will add http://localhost:4000 at the beginning,
         target:'http://localhost:4000',   
         secure:false,
    }}
  },
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
})
