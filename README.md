# Portfolio con Contacto via Resend

Este proyecto es un portfolio personal construido con React, TypeScript y Vite. Incluye un formulario de contacto que envía emails usando Resend a través de Cloudflare Workers.

## Configuración

### 1. Instalar dependencias
```bash
npm install
```

### 2. Configurar Resend
- Crea una cuenta en [Resend](https://resend.com)
- Obtén tu API key
- Actualiza `wrangler.toml` con tu API key:
  ```toml
  [vars]
  RESEND_API_KEY = "tu-api-key-real"
  ```

### 3. Configurar dominio en Cloudflare
- Actualiza `wrangler.toml` con tu dominio real:
  ```toml
  routes = [
    { pattern = "tu-dominio.com", zone_name = "tu-dominio.com" }
  ]
  ```

### 4. Actualizar URL del formulario
En `src/components/sections/Contact.tsx`, cambia la URL por tu dominio:
```typescript
const response = await fetch('https://tu-dominio.com/api/contact', {
```

## Despliegue

### Desarrollo local
```bash
npm run dev
```

### Producción
```bash
npm run build
npm run deploy
```

## Funcionalidades

- Formulario de contacto con validación
- Envío de emails via Resend
- UI moderna con Tailwind CSS
- Despliegue serverless con Cloudflare Workers
import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```
