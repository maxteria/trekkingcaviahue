import { getCollection, type CollectionEntry } from 'astro:content';
import type { Locale } from './ui';

export type Excursion = CollectionEntry<'excursiones'>;

export function slugOf(entry: Excursion): string {
  return entry.id.split('/').pop() as string;
}

export async function getExcursions(locale: Locale): Promise<Excursion[]> {
  const all = await getCollection('excursiones', (entry) => entry.data.locale === locale);
  return all.sort((a, b) => a.data.order - b.data.order);
}

export async function getExcursion(locale: Locale, slug: string): Promise<Excursion | undefined> {
  const all = await getExcursions(locale);
  return all.find((entry) => slugOf(entry) === slug);
}

export type DurationBucket = 'short' | 'medium' | 'long';

export function durationBucket(hours: number): DurationBucket {
  if (hours <= 3) return 'short';
  if (hours <= 5) return 'medium';
  return 'long';
}
