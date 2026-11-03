# Migración trekkingcaviahue.ar → Astro

Objetivo: sitio estático de catálogo de excursiones (ES/EN) con estética Airbnb, contenido y fotos rescatados del backup WordPress.
Branch: `main` (repo nuevo). Deploy: Cloudflare Pages. Runner: `npm run build` (Astro) + `astro check`.

## Specs

- **S1** — "El siti web que esta online y del cual me quiero quedar solo con e contenido y las imagenes." Se conserva únicamente el contenido editorial y las imágenes. Nada de WordPress, Elementor, JetEngine, ni HTML viejo.
- **S2** — "migrarlo a astro, tailwind y las tecnologias que me recomiendes para lograr un catalaogo de excuriones moderno". Stack: Astro 7 + Tailwind 4 + `astro:assets` + content collections + i18n nativo. Sin framework de UI (11 excursiones no lo justifican).
- **S3** — "minimalista, con un toque calido, muy enfocado en lo que podria ser arbnb en tano a su estetica". Fotografía protagonista, cards redondeadas, mucho aire, tipografía display cálida + sans neutra.
- **S4** — "Los colores son lo que al rojo de airbnb en rosa del ogo de trekkingcaviahue." Paleta extraída del logo real: rosa `#D43967` (primario), carbón `#2E3038` (texto), dorado `#FCC300`, naranja `#ED6D05`, crema `#FFF9DC`, arena `#CBC3B2`.
- **S5** — Secciones: Inicio, Catálogo de excursiones, Ficha de excursión, Sobre Josefina. (Caviahue/destino, Contacto y Medios de pago quedan fuera por decisión del usuario; el contacto vive en el footer y en el CTA de cada ficha.)
- **S6** — "WhatsApp con mensaje prearmado": cada excursión abre `wa.me` con el nombre del trekking ya escrito. Número: `5492942545621` (del backup).
- **S7** — "No, sólo 'consultar'": no se publican precios en ninguna vista.
- **S8** — Filtros: temporada + dificultad + duración. Dificultad/duración se infieren de las descripciones reales y quedan marcadas para revisión del usuario (ver `PENDIENTES.md`).
- **S9** — "Markdown versionado en el repo": una excursión = un `.md` con frontmatter validado por Zod.
- **S10** — Deploy en Cloudflare Pages (build estático, `_redirects` para URLs viejas).
- **S11** — "Español + inglés": rutas `/` y `/en/`, un `.md` por idioma, traducciones generadas por el agente y sujetas a revisión del usuario.

## Tasks

| ID | Task | Specs | Route | Status |
|----|------|-------|-------|--------|
| T1 | Scaffold Astro 7 + Tailwind 4 + tokens de diseño + layout base | S2, S3, S4 | inline | ✅ |
| T2 | Pipeline de imágenes (125 archivos) + logo + tipografías + Header/Footer | S1, S3, S4 | inline | ✅ |
| T3 | Colección `excursiones` + 11 entradas ES con dificultad/duración inferidas | S8, S9, S7 | inline | ✅ |
| T4 | Traducciones EN + routing i18n + selector de idioma | S11 | inline | ✅ |
| T5 | Home | S3, S5 | inline | ✅ |
| T6 | Catálogo con filtros (temporada, dificultad, duración) | S8, S7 | inline | ✅ |
| T7 | Ficha de excursión (galería, specs, CTA WhatsApp, JSON-LD) | S6, S7 | inline | ✅ |
| T8 | Sobre Josefina | S5 | inline | ✅ |
| T9 | SEO: sitemap, robots, hreflang, OG, `_redirects` | S10 | inline | ✅ |
| T10 | Verificación: build, `astro check`, QA visual, README | todas | inline | 🟡 build + check verdes; QA visual en navegador pendiente |

## Log

### L1 — Pedido original (verbatim)

> ahora deje un archivo ZIP con el backup de trekkingcaviahue.ar. El siti web que esta online y del cual me quiero quedar solo con e contenido y las imagenes.
>
> El resto es migrarlo a astro, tailwind y las tecnologias que me recomiendes para lograr un catalaogo de excuriones moderno, minimalista, con un toque calido, muy enfocado en lo que podria ser arbnb en tano a su estetica. Los colores son lo que al rojo de airbnb en rosa del ogo de trekkingcaviahue. haceme todas las preguntas necesarias

### L2 — Decisiones (respuestas del usuario)

- Secciones: Catálogo, Ficha, Sobre Josefina, Inicio.
- Reserva: WhatsApp con mensaje prearmado.
- Precios: no se muestran, sólo "consultar".
- Catálogo: temporada + dificultad + duración.
- Edición: Markdown versionado en el repo.
- Hosting: Cloudflare Pages.
- Idioma: español + inglés.
- Dificultad/duración: las infiere el agente, el usuario revisa.
- Traducciones EN: las genera el agente.

### L3 — Auditoría del backup

- `dup-database__b0f480d-30100646.sql` (6.6 MB), prefijo `wp_7jq8ci_`, strings con comillas dobles.
- 11 excursiones publicadas, 3 páginas publicadas (Inicio, Caviahue, Josefina Cabral) y 2 borradores (Contacto, Medios de pago).
- Campos reales por excursión: `_descripcion-corta`, `_descripcion-extendida`, `_galeria-de-imagenes`, `precio`, `precio_promo`, taxonomía `temporadas` (verano / invierno / mis-favoritas).
- 1.319 archivos en `uploads`; 125 únicos referenciados por el contenido.
- Datos de contacto reales: WhatsApp `+54 9 2942 54-5621`, `hola@trekkingcaviahue.ar`, IG `@trekkingcaviahue`.
- Erratas detectadas en títulos: "Vólcan" (375), "Las Maquina" (810), "Caivahue" (572).

### L4 — Implementación (2026-11-03)

- Stack final: Astro 7.4.5, Tailwind 4.3.4 vía `@tailwindcss/vite`, `astro:assets`, content collections con `glob` + Zod, i18n nativo (`prefixDefaultLocale: false`).
- Paleta y tipografías desde el logo real; `global.css` define `@theme` con `brand`, `ink`, `cream`, `gold`, `sand`, `--radius-card`, `--shadow-soft/lift`.
- Contenido: 11 excursiones × 2 idiomas en `src/content/excursiones/{es,en}/*.md`; slugs iguales a los del WordPress viejo.
- Componentes: `BaseLayout` (SEO/OG/JSON-LD/hreflang), `Header` (nav + menú móvil en `<details>` + selector EN/ES), `Footer`, `SeasonChip`, `ExcursionCard` (con `data-card/season/difficulty/duration`), `FilterBar` (filtros OR por grupo, contador, reset, presets por query string `temporada`/`dificultad`/`duracion` y sincronización de URL), `Gallery` (`<dialog>` + teclado), `WhatsAppCta`, y las páginas `HomePage`, `CatalogPage`, `ExcursionPage`, `AboutPage`.
- Rutas: `/`, `/excursiones/`, `/excursiones/[slug]/`, `/sobre-josefina/`, `/en/`, `/en/excursions/`, `/en/excursions/[slug]/`, `/en/about/`, `404`.
- Sin precios: todas las fichas muestran «Consultá disponibilidad» y CTA a WhatsApp `5492942545621` con mensaje por excursión.
- SEO: sitemap con i18n `es-AR`/`en-US`, `robots.txt`, OG por página (1200×630 generado con `getImage`), `TravelAgency`/`TouristTrip`/`ItemList` en JSON-LD, `_redirects` para `/inicio/`, `/caviahue/`, `/josefina-cabral/`, `/contacto/`, `/medios-de-pago/`, `/wp-*`.
- Docs: `README.md` (stack, comandos, edición de Markdown, deploy Cloudflare Pages) y `PENDIENTES.md` (dificultad/duración inferidas, includes sin verificar, textos redactados, erratas corregidas, traducciones a revisar).

### L5 — Verificación

- `npx astro check`: 0 errores, 0 warnings, 0 hints (29 archivos).
- `npx astro build`: 29 páginas, sitemap con 28 URLs (excluye 404), salida estática en `dist/`.
- Build bloqueante corregido: `getStaticPaths` no podía ver `const locale` de módulo; se inlineó el literal en `excursiones/[slug].astro` y `en/excursions/[slug].astro`.
- Tipo `Dict` corregido: se quitó `as const` del diccionario ES para que las traducciones EN no queden restringidas a literales.
- QA estructural sobre HTML construido: 11 tarjetas con `data-*`, 3 grupos de filtro, contador y estado vacío presentes; 9 ítems de galería y `<dialog>` en ficha; OG por ficha apunta a un asset real de `/_astro/`; hreflang/canonical correctos; CSS contiene `.container-page`, `.prose-trek` y todos los tokens usados.
- Pendiente de QA visual en navegador real (dev server OK en `http://localhost:4325/`, todas las rutas responden 200): revisar hero, mosaico, filtros, lightbox, menú móvil y contraste.
