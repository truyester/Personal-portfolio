# Portfolio personal — Vite · React · TypeScript

Portfolio personal desarrollado con Vite, React y TypeScript. Incluye un formulario de contacto que envía correos mediante la API de Resend desde un endpoint serverless (Cloudflare Workers / Functions).

## Características
- Sitio estático con UI moderna (Tailwind CSS / PostCSS)
- Formulario de contacto con validación y envío por Resend
- Estructura preparada para desplegar funciones serverless con `wrangler`

## Tecnologías
- Vite
- React 19 + TypeScript
- Tailwind CSS y PostCSS
- Cloudflare Workers / Wrangler (para el endpoint de contacto)

## Estructura principal
- `src/` — código fuente de la aplicación (componentes, secciones, estilos)
- `public/` — activos estáticos
- `functions/api/contact.js` — endpoint de contacto (envía emails)
- `wrangler.toml` — configuración de despliegue para Cloudflare

## Requisitos
- Node.js 18+ y npm o pnpm
- Cuenta en Resend (para enviar correos) — `RESEND_API_KEY`

## Instalación y desarrollo
1. Instalar dependencias:

```bash
npm install
```

2. Ejecutar en modo desarrollo:

```bash
npm run dev
```

3. Previsualizar build de producción:

```bash
npm run build
npm run preview
```

## Configurar el formulario de contacto
- Regístrate en https://resend.com y obtiene tu API key.
- Añade la variable a `wrangler.toml` dentro de `[vars]` o configúrala en el panel de Cloudflare:

```toml
[vars]
RESEND_API_KEY = "tu-api-key-aqui"
```

- Si usas un dominio personalizado, ajusta `wrangler.toml` según corresponda (routes/zone).
- En `src/components/sections/Contact.tsx` revisa la URL que usa el formulario y cámbiala si hace falta:

```ts
const response = await fetch('https://tu-dominio.com/api/contact', {
  method: 'POST',
  body: JSON.stringify(data),
})
```

## Despliegue
El proyecto está preparado para desplegarse como sitio estático y publicar el endpoint de contacto con Wrangler.

- Construir el sitio:

```bash
npm run build
```

- Publicar funciones (Cloudflare Workers):

```bash
npx wrangler publish
```

Nota: `wrangler` está incluido en `devDependencies`; puedes usar `npx` o instalarlo globalmente.

## Scripts disponibles
- `npm run dev` — arranca Vite en modo desarrollo
- `npm run build` — compila el proyecto (incluye `tsc -b` y `vite build`)
- `npm run preview` — sirve la versión de producción localmente
- `npm run lint` — ejecuta ESLint

## Contribuciones
Si detectas algún fallo o quieres sugerir mejoras, abre un issue o envía un pull request. Agradezco feedback sobre diseño, contenido o accesibilidad.

## Contacto
Si deseas contactarme sobre este proyecto, usa el formulario del sitio o crea un issue en este repositorio.

---
_Generado y adaptado al repositorio presente. Puedo traducirlo al inglés o añadir badges si lo deseas._

