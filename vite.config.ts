import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
   // ✅ Esta es la línea clave
  base: '/Ecommerce/', 
})
