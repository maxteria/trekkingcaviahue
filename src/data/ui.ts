export const LANGUAGES = { es: 'Español', en: 'English' } as const;
export type Locale = keyof typeof LANGUAGES;

const es = {
  nav: {
    home: 'Inicio',
    excursions: 'Excursiones',
    about: 'Sobre Josefina',
  },
  cta: {
    whatsapp: 'Reservar por WhatsApp',
    consult: 'Consultar disponibilidad',
    seeAll: 'Ver todas las excursiones',
    seeExcursion: 'Ver la excursión',
    gallery: 'Abrir galería',
    back: 'Volver al catálogo',
  },
  season: {
    label: 'Temporada',
    verano: 'Verano',
    invierno: 'Invierno',
  },
  difficulty: {
    label: 'Dificultad',
    baja: 'Baja',
    media: 'Media',
    alta: 'Alta',
  },
  duration: {
    label: 'Duración',
    short: 'Hasta 3 h',
    medium: '4 a 5 h',
    long: '6 h o más',
    hours: (value: number) => `${value} h`,
  },
  home: {
    eyebrow: 'Caviahue · Neuquén · Patagonia',
    title: 'Me enamoré de Caviahue. La montaña hizo el resto.',
    subtitle:
      'Hace 24 años que vivo acá. Recorro estas montañas en cada estación y quiero compartir con vos sus senderos, paisajes y secretos.',
    primary: 'Ver excursiones',
    secondary: 'Un poco más sobre mí',
    featuredTitle: 'Las más elegidas',
    featuredSubtitle: 'Once experiencias entre cráteres activos, riscos de ceniza y bosques milenarios.',
    seasonsTitle: 'Dos Caviahue en un mismo año',
    veranoTitle: 'Verano',
    veranoText: 'Cráteres activos, riscos de ceniza volcánica y bosques de araucarias bajo el sol de la cordillera.',
    inviernoTitle: 'Invierno',
    inviernoText: 'Raquetas de nieve, cascadas congeladas y termas a cielo abierto en un pueblo nevado.',
    aboutTitle: 'Quién te lleva',
    aboutText:
      'Josefina Cabral vive en Caviahue hace 24 años. Es guía de montaña habilitada, musher e instructora de esquí de fondo. Conoce cada sendero porque los camina todo el año.',
    aboutCta: 'Leer su historia',
    contactTitle: '¿Armamos tu salida?',
    contactText: 'Contame qué te gustaría hacer y en qué fechas. Coordinamos todo por WhatsApp.',
  },
  catalog: {
    title: 'Excursiones',
    subtitle: 'Once salidas guiadas entre volcanes, lagunas, cascadas y bosques milenarios.',
    filters: 'Filtrar',
    all: 'Todas',
    results: (count: number) => (count === 1 ? '1 excursión' : `${count} excursiones`),
    empty: 'No hay excursiones con esos filtros.',
    reset: 'Limpiar filtros',
    viewAll: 'Ver todas',
    from: 'Precio a consultar',
  },
  detail: {
    overview: 'La excursión',
    specs: 'Datos de la salida',
    distance: 'Distancia',
    distanceValue: (km: number) => `${km} km`,
    elevation: 'Desnivel positivo',
    elevationValue: (m: number) => `${m} m`,
    altitude: 'Altitud máxima',
    altitudeValue: (m: number) => `${m} msnm`,
    includes: 'Incluye',
    bring: 'Qué llevar',
    meeting: 'Punto de encuentro',
    galleryTitle: 'Galería',
    priceNote: 'Precio a consultar',
    ctaNote: 'Coordinamos fechas, cupos y punto de encuentro por WhatsApp.',
    waMessage: (title: string) => `Hola Josefina! Me interesa la excursión "${title}". ¿Me contás disponibilidad y precio?`,
    notFound: 'No encontramos esa excursión.',
  },
  about: {
    eyebrow: 'La guía',
    title: 'Josefina Cabral',
    subtitle: 'Guía de montaña, musher e instructora de esquí de fondo en Caviahue.',
    cta: 'Ver excursiones',
  },
  footer: {
    tagline: 'Trekking, raquetas de nieve y esquí de fondo en Caviahue y Copahue, Patagonia argentina.',
    contact: 'Contacto',
    follow: 'Seguime',
    whatsapp: 'WhatsApp',
    email: 'Email',
    instagram: 'Instagram',
    rights: (year: number) => `© ${year} Trekking Caviahue. Todos los derechos reservados.`,
    credit: 'Guía habilitada por la Secretaría de Turismo de Neuquén, ANP y la Municipalidad de Caviahue-Copahue.',
  },
  meta: {
    home: {
      title: 'Trekking Caviahue · Excursiones guiadas en Caviahue y Copahue',
      description:
        'Excursiones guiadas de trekking, raquetas de nieve y esquí de fondo en Caviahue y Copahue. Volcán Copahue, Cerro Pirámide, Riscos Bayos y cascadas del Agrio.',
    },
    catalog: {
      title: 'Excursiones en Caviahue y Copahue',
      description:
        'Catálogo completo de excursiones guiadas en Caviahue: verano e invierno, trekking, raquetas de nieve y esquí de fondo.',
    },
    about: {
      title: 'Josefina Cabral · Guía de montaña en Caviahue',
      description:
        'Josefina Cabral: guía de montaña, musher e instructora de esquí de fondo. Excursiones guiadas en Caviahue y Copahue desde hace 24 años.',
    },
  },
};

export type Dict = typeof es;

const en: Dict = {
  nav: {
    home: 'Home',
    excursions: 'Excursions',
    about: 'About Josefina',
  },
  cta: {
    whatsapp: 'Book on WhatsApp',
    consult: 'Check availability',
    seeAll: 'See all excursions',
    seeExcursion: 'See the excursion',
    gallery: 'Open gallery',
    back: 'Back to catalog',
  },
  season: {
    label: 'Season',
    verano: 'Summer',
    invierno: 'Winter',
  },
  difficulty: {
    label: 'Difficulty',
    baja: 'Easy',
    media: 'Moderate',
    alta: 'Challenging',
  },
  duration: {
    label: 'Duration',
    short: 'Up to 3 h',
    medium: '4 to 5 h',
    long: '6 h or more',
    hours: (value: number) => `${value} h`,
  },
  home: {
    eyebrow: 'Caviahue · Neuquén · Patagonia',
    title: 'I fell in love with Caviahue. The mountains did the rest.',
    subtitle:
      "I've lived here for 24 years. I explore these mountains in every season, and I want to share their trails, landscapes, and hidden gems with you.",
    primary: 'Explore excursions',
    secondary: 'A little about me',
    featuredTitle: 'Guests’ favourites',
    featuredSubtitle: 'Eleven experiences among active craters, volcanic ash ridges and ancient forests.',
    seasonsTitle: 'Two Caviahues in a single year',
    veranoTitle: 'Summer',
    veranoText: 'Active craters, volcanic ash ridges and araucaria forests under the cordillera sun.',
    inviernoTitle: 'Winter',
    inviernoText: 'Snowshoes, frozen waterfalls and open-air hot springs in a snow-covered village.',
    aboutTitle: 'Who guides you',
    aboutText:
      'Josefina Cabral has lived in Caviahue for 24 years. She is a licensed mountain guide, musher and cross-country skiing instructor. She knows every trail because she walks them all year round.',
    aboutCta: 'Read her story',
    contactTitle: 'Shall we plan your trip?',
    contactText: 'Tell me what you would like to do and when. We arrange everything on WhatsApp.',
  },
  catalog: {
    title: 'Excursions',
    subtitle: 'Eleven guided trips among volcanoes, lakes, waterfalls and ancient forests.',
    filters: 'Filter',
    all: 'All',
    results: (count: number) => (count === 1 ? '1 excursion' : `${count} excursions`),
    empty: 'No excursions match those filters.',
    reset: 'Clear filters',
    viewAll: 'See all',
    from: 'Price on request',
  },
  detail: {
    overview: 'The excursion',
    specs: 'Trip details',
    distance: 'Distance',
    distanceValue: (km: number) => `${km} km`,
    elevation: 'Elevation gain',
    elevationValue: (m: number) => `${m} m`,
    altitude: 'Max altitude',
    altitudeValue: (m: number) => `${m} m.a.s.l.`,
    includes: "What's included",
    bring: 'What to bring',
    meeting: 'Meeting point',
    galleryTitle: 'Gallery',
    priceNote: 'Price on request',
    ctaNote: 'We arrange dates, availability and meeting point on WhatsApp.',
    waMessage: (title: string) => `Hi Josefina! I'm interested in the "${title}" excursion. Could you tell me availability and price?`,
    notFound: 'We could not find that excursion.',
  },
  about: {
    eyebrow: 'The guide',
    title: 'Josefina Cabral',
    subtitle: 'Mountain guide, musher and cross-country skiing instructor in Caviahue.',
    cta: 'See excursions',
  },
  footer: {
    tagline: 'Trekking, snowshoeing and cross-country skiing in Caviahue and Copahue, Argentine Patagonia.',
    contact: 'Contact',
    follow: 'Follow me',
    whatsapp: 'WhatsApp',
    email: 'Email',
    instagram: 'Instagram',
    rights: (year: number) => `© ${year} Trekking Caviahue. All rights reserved.`,
    credit: 'Licensed guide by the Tourism Secretariat of Neuquén, ANP and the Municipality of Caviahue-Copahue.',
  },
  meta: {
    home: {
      title: 'Trekking Caviahue · Guided excursions in Caviahue and Copahue',
      description:
        'Guided trekking, snowshoeing and cross-country skiing in Caviahue and Copahue. Copahue volcano, Cerro Pirámide, Riscos Bayos and Agrio waterfalls.',
    },
    catalog: {
      title: 'Excursions in Caviahue and Copahue',
      description:
        'Full catalog of guided excursions in Caviahue: summer and winter, trekking, snowshoeing and cross-country skiing.',
    },
    about: {
      title: 'Josefina Cabral · Mountain guide in Caviahue',
      description:
        'Josefina Cabral: mountain guide, musher and cross-country skiing instructor. Guided excursions in Caviahue and Copahue for 24 years.',
    },
  },
};

export const UI: Record<Locale, Dict> = { es, en };

export function t(locale: Locale): Dict {
  return UI[locale];
}
