import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import Sitemap from 'vite-plugin-sitemap';

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    // 2. Configurar el Sitemap
    Sitemap({ 
      hostname: 'https://truyester.com',
      dynamicRoutes: [
        '/',
        // Añade aquí otras rutas si llegas a tener /projects o /about por separado
      ],
      // Esto genera el archivo en la raíz de tu carpeta /dist
    }),
  ],
});