export const SITE = {
  name: 'Trekking Caviahue',
  url: 'https://trekkingcaviahue.ar',
  guide: 'Josefina Cabral',
  email: 'hola@trekkingcaviahue.ar',
  whatsapp: '5492942545621',
  whatsappDisplay: '+54 9 2942 54-5621',
  instagram: 'trekkingcaviahue',
  instagramUrl: 'https://instagram.com/trekkingcaviahue',
  agencyUrl: 'https://caviahue.tur.ar',
  location: {
    city: 'Caviahue',
    region: 'Neuquén',
    country: 'AR',
    countryName: 'Argentina',
  },
} as const;

export function whatsappLink(message: string): string {
  return `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(message)}`;
}

export const ROUTES = {
  home: { es: '/', en: '/en/' },
  excursions: { es: '/excursiones/', en: '/en/excursions/' },
  about: { es: '/sobre-josefina/', en: '/en/about/' },
  excursion: (slug: string) => ({
    es: `/excursiones/${slug}/`,
    en: `/en/excursions/${slug}/`,
  }),
} as const;

export const OG_LOCALE = { es: 'es_AR', en: 'en_US' } as const;
