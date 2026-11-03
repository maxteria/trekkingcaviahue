# trekkingcaviahue.ar

Sitio de excursiones guiadas de **Josefina Cabral** en Caviahue y Copahue, Neuquén.

Migración del sitio WordPress anterior: se conservó **solo el contenido y las imágenes**. El diseño, la estructura y el código son nuevos.

- Catálogo de excursiones con filtros por temporada, dificultad y duración.
- Sin precios publicados: cada salida se consulta por WhatsApp (`+54 9 2942 54-5621`) con mensaje precargado.
- Bilingüe español / inglés.
- Contenido editable como Markdown versionado en el repositorio.

## Stack

| Pieza | Versión |
| --- | --- |
| Astro | 7.4.5 |
| Tailwind CSS | 4.3.4 (`@tailwindcss/vite`) |
| TypeScript | 5.9.3 |
| Fuentes | `@fontsource-variable/fraunces` + `@fontsource-variable/inter` (self-hosted) |

Sin framework de UI ni islas: los filtros y el lightbox son JavaScript nativo. Las imágenes se optimizan en build con `astro:assets`.

## Requisitos

- Node.js 22 LTS (o superior)
- npm

## Comandos

```bash
npm install       # instalar dependencias
npm run dev       # servidor de desarrollo en http://localhost:4321
npm run build     # generar el sitio estático en dist/
npm run preview   # servir dist/ localmente
npm run check     # chequear tipos y errores de Astro/TS
```

## Estructura

```text
src/
├── assets/
│   ├── brand/logo.png            # logo original
│   └── uploads/<año>/<mes>/       # imágenes migradas del WordPress
├── components/
│   ├── pages/                    # cuerpo de cada página (HomePage, CatalogPage, ...)
│   ├── ExcursionCard.astro
│   ├── FilterBar.astro
│   ├── Gallery.astro
│   ├── Header.astro
│   ├── Footer.astro
│   ├── SeasonChip.astro
│   └── WhatsAppCta.astro
├── content/
│   └── excursiones/
│       ├── es/*.md               # fichas en español
│       └── en/*.md               # fichas en inglés
├── data/
│   ├── site.ts                   # nombre, WhatsApp, email, Instagram, rutas
│   ├── ui.ts                     # todos los textos de interfaz ES/EN
│   ├── about.ts                  # biografía de Josefina ES/EN
│   └── excursions.ts             # helpers de consulta del catálogo
├── layouts/BaseLayout.astro      # <head>, SEO, JSON-LD, header y footer
├── pages/
│   ├── index.astro               # Inicio ES
│   ├── excursiones/index.astro   # Catálogo ES
│   ├── excursiones/[slug].astro  # Ficha ES
│   ├── sobre-josefina.astro      # Sobre Josefina ES
│   ├── 404.astro
│   └── en/                       # mismas páginas en inglés
├── styles/global.css             # tokens de color, tipografía y estilos base
└── content.config.ts             # schema Zod del contenido
public/                           # favicon, OG por defecto, robots.txt, _redirects
```

## Editar una excursión

Cada excursión vive en dos archivos, uno por idioma:

```text
src/content/excursiones/es/trekking-volcan-copahue.md
src/content/excursiones/en/trekking-volcan-copahue.md
```

### Frontmatter

```yaml
---
title: "Trekking al cráter del Volcán Copahue"
locale: es                      # es | en
summary: "Una línea que aparece en la tarjeta del catálogo."
season: [verano]                # verano | invierno (puede tener ambas)
difficulty: alta                # baja | media | alta
durationHours: 7                # número
distanceKm: 11                  # opcional
elevationGainM: 800             # opcional, desnivel positivo
maxAltitudeM: 2850              # opcional, altura máxima
includes:                       # qué incluye la salida
  - "Guía de montaña habilitada"
bring:                          # qué llevar
  - "2 litros de agua"
meetingPoint: "Te paso a buscar por tu hospedaje."
featured: true                  # aparece en la home
order: 1                        # orden dentro del catálogo
cover: ../../../assets/uploads/2021/11/trekking-volcan-copahue.jpg
coverAlt: "Trekking al cráter del Volcán Copahue"
gallery:
  - src: ../../../assets/uploads/2021/11/trekking-crater-volcan-copahue-01.jpeg
    alt: "Trekking al cráter del Volcán Copahue — Caviahue"
seo:
  title: "Trekking al cráter del Volcán Copahue con Josefina Cabral"
  description: "Ascendé al cráter activo a 2.850 msnm con guía habilitada."
dataReviewed: false             # true cuando Josefina validó los datos
---
```

Después del segundo `---` va el cuerpo en Markdown. Se permiten `##`, `###`, listas, negritas y enlaces.

> El schema está en `src/content.config.ts`. Si un campo obligatorio falta o un valor no es válido, el build falla con un mensaje indicando el archivo y la línea.

### Agregar una excursión nueva

1. Copiá una carpeta de imágenes a `src/assets/uploads/<año>/<mes>/`.
2. Creá el Markdown en `es/` y su traducción en `en/` con el **mismo nombre de archivo**: ese nombre es el slug de la URL (`/excursiones/<slug>/` y `/en/excursions/<slug>/`).
3. Referenciá las imágenes con ruta relativa desde el Markdown: `../../../assets/uploads/...`.
4. Completá `seo.title` y `seo.description`.
5. Corré `npm run dev` y verificá la ficha.

### Cambiar textos de interfaz

Los menús, botones, títulos de sección, mensajes de WhatsApp y textos de la home están en `src/data/ui.ts`, con una versión en español y otra en inglés. `src/data/about.ts` contiene la biografía.

### Cambiar datos de contacto

En `src/data/site.ts`: WhatsApp, email, Instagram y URL de la agencia. El botón de WhatsApp arma el mensaje con `whatsappLink(mensaje)`.

## Idiomas

- Español en la raíz: `/`, `/excursiones/`, `/sobre-josefina/`.
- Inglés bajo `/en/`: `/en/`, `/en/excursions/`, `/en/about/`.
- `BaseLayout` genera `hreflang`, canonical, Open Graph y JSON-LD (`TravelAgency`, `TouristTrip`, `ItemList`).

## Imágenes

- Van en `src/assets/` (no en `public/`) para que Astro las optimice y genere `srcset`.
- El OG por defecto (`public/og-default.jpg`) y los iconos (`favicon.png`, `apple-touch-icon.png`) ya están generados a partir del logo y de una foto del catálogo; si querés regenerarlos, usá `sharp` con el logo y una imagen 1200×630.
- Cada ficha genera su propia imagen Open Graph 1200×630 en build.

## Deploy en Cloudflare Pages

1. Subí el repositorio a GitHub.
2. En Cloudflare Pages: **Create a project → Connect to Git**.
3. Configuración:
   - Framework preset: **Astro**
   - Build command: `npm run build`
   - Build output directory: `dist`
   - Node version: `22` (variable de entorno `NODE_VERSION=22`)
4. Dominio: agregá `trekkingcaviahue.ar` y `www.trekkingcaviahue.ar`.

`public/_redirects` mantiene las URLs viejas de WordPress apuntando a las nuevas, y `public/robots.txt` declara el sitemap.

## Pendientes

Ver [`PENDIENTES.md`](./PENDIENTES.md): dificultades y duraciones inferidas, «qué incluye» sin verificar, textos redactados, correcciones de ortografía y traducciones al inglés que conviene revisar.
