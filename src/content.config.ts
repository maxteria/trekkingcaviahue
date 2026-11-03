import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const excursiones = defineCollection({
  loader: glob({ base: './src/content/excursiones', pattern: '**/*.md' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      locale: z.enum(['es', 'en']),
      summary: z.string(),
      season: z.array(z.enum(['verano', 'invierno'])).min(1),
      difficulty: z.enum(['baja', 'media', 'alta']),
      durationHours: z.number().positive(),
      distanceKm: z.number().positive().optional(),
      elevationGainM: z.number().positive().optional(),
      maxAltitudeM: z.number().positive().optional(),
      includes: z.array(z.string()).default([]),
      bring: z.array(z.string()).default([]),
      meetingPoint: z.string().optional(),
      featured: z.boolean().default(false),
      order: z.number().default(100),
      cover: image(),
      coverAlt: z.string(),
      gallery: z.array(z.object({ src: image(), alt: z.string() })).default([]),
      seo: z.object({
        title: z.string(),
        description: z.string(),
      }),
      dataReviewed: z.boolean().default(false),
    }),
});

export const collections = { excursiones };
