# Pendientes de revisión

Este documento lista todo lo que el sitio nuevo **infiere o redacta** y que Josefina debería confirmar antes de publicar. No hay precios en el sitio: todas las excursiones dicen «consultar disponibilidad».

Cuando confirmes un dato, actualizá el Markdown correspondiente en `src/content/excursiones/es/` y `src/content/excursiones/en/` y cambiá `dataReviewed: false` por `dataReviewed: true`.

---

## 1. Dificultad y duración (inferidas por el agente)

Ninguna de estas etiquetas estaba en el sitio original. Se dedujeron del resumen, la distancia y el desnivel cuando existían.

| Excursión | Dificultad | Duración |
| --- | --- | --- |
| Trekking al cráter del Volcán Copahue | Alta | 7 h |
| Ascenso a la Cumbre del Volcán Copahue | Alta | 9 h |
| Trekking al Cerro Pirámide | Alta | 7 h |
| Las Máquinas en invierno | Alta | 6 h |
| Laguna Escondida con raquetas de nieve | Media | 4 h |
| Cascadas del Agrio con raquetas de nieve | Media | 4 h |
| Esquí de fondo | Media | 3 h |
| Excursión a los Riscos Bayos | Baja | 4 h |
| Cascada del Jara | Baja | 3 h |
| Cascada Escondida con raquetas de nieve | Baja | 3 h |
| Puente de Piedra | Baja | 3 h |

Distancias y desniveles cargados solo donde el sitio original los mencionaba: Copahue cráter (11 km, +800 m, 2.850 msnm), Cerro Pirámide (14 km, +849 m, 2.498 msnm), Cumbre Copahue (2.958 msnm), Riscos Bayos (10 km), Puente de Piedra (2 km).

## 2. Textos redactados sin descripción original

Estas excursiones no tenían descripción larga en el sitio viejo. El cuerpo se redactó a partir del resumen, las fotos y el contexto de Caviahue. Revisar que el recorrido y el tono sean correctos:

- Ascenso a la Cumbre del Volcán Copahue
- Cascada del Jara
- Cascada Escondida con raquetas de nieve
- Cascadas del Agrio con raquetas de nieve
- Laguna Escondida con raquetas de nieve
- Las Máquinas en invierno
- Esquí de fondo

## 3. «Qué incluye» sin verificar

Los ítems de `includes` se completaron con lo habitual del rubro (guía habilitada, traslado desde el hospedaje). Confirmar por excursión:

- ¿Siempre hay traslado desde Caviahue y Copahue, o solo en algunas salidas?
- En las salidas de invierno: ¿raquetas, bastones y botas están incluidos o se alquilan aparte?
- En esquí de fondo: ¿el equipo (tablas, botas, bastones) está incluido?
- ¿Se incluye algo más: seguro, refrigerio, entrada a área protegida?

## 4. Correcciones de ortografía aplicadas

El sitio original tenía errores que se corrigieron en el contenido nuevo:

| Original | Corregido |
| --- | --- |
| Vólcan | Volcán |
| Las Maquina | Las Máquinas |
| Caivahue | Caviahue |

También se reescribieron los textos con tildes y puntuación correctas (la base de WordPress tenía los emojis y algunos caracteres dañados por la migración original).

## 5. Traducciones al inglés

Las 11 fichas y las páginas institucionales en `/en/` fueron traducidas por el agente. Revisar especialmente:

- Nombres propios de lugares (Caviahue, Copahue, Riscos Bayos, Las Máquinas, Cascada del Jara).
- Términos técnicos: *snowshoeing*, *cross-country skiing*, *crater rim*.
- Tono: el inglés es neutro, no usa voseo ni regionalismos.

## 6. Datos de contacto

Verificar que sigan vigentes:

- WhatsApp: `+54 9 2942 54-5621`
- Email: (el que figuraba en el sitio original)
- Instagram: (el que figuraba en el sitio original)

Se editan en `src/data/site.ts`.

## 7. Páginas del sitio viejo que no se migraron

Se decidió no migrar estas páginas y redirigir sus URLs al inicio o a «Sobre Josefina»:

- **Caviahue** (destino) → `/`
- **Contacto** (estaba en borrador) → `/`
- **Medios de pago** (estaba en borrador) → `/`

Los redirects están en `public/_redirects`. El contenido útil de «Caviahue» quedó dentro de «Sobre Josefina».

## 8. Fotos

Se copiaron 124 imágenes del sitio original y se optimizan automáticamente al construir. No se agregaron fotos nuevas. Si falta alguna foto de una excursión, agregarla en `src/assets/uploads/` y referenciarla en el Markdown.

## 9. SEO

- Los slugs de las excursiones se mantuvieron iguales a los del sitio viejo para no perder posicionamiento.
- Cada ficha tiene `seo.title` y `seo.description` redactados por el agente: conviene una pasada de marketing.
