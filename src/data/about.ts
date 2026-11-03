import type { ImageMetadata } from 'astro';
import type { Locale } from './ui';

import portrait from '../assets/uploads/2021/09/josefina-18.jpg';
import mountain from '../assets/uploads/2021/09/josefina-06.jpg';
import guiding from '../assets/uploads/2021/09/josefina-21.jpg';

type AboutCopy = {
  intro: string[];
  sections: { title: string; body: string }[];
  gallery: { src: ImageMetadata; alt: string }[];
};

export const ABOUT: Record<Locale, AboutCopy> = {
  es: {
    intro: [
      'Llegué a Caviahue hace 24 años y fue amor a primera vista. La vida cerca de la naturaleza me quedó para siempre.',
      'En el camino crecí y aprendí muchas cosas. Soy musher —guía de trineos tirados por perros—, hago trekking, esquí de fondo y raquetas de nieve. Disfruto vivir en contacto con la naturaleza y compartirlo con quien viene a visitarnos.',
    ],
    sections: [
      {
        title: 'Guía de montaña',
        body: 'Soy prestadora de servicios turísticos, habilitada por la Secretaría de Turismo de la provincia de Neuquén, la ANP y la Municipalidad de Caviahue-Copahue.',
      },
      {
        title: 'Guía de trekking',
        body: 'Si bien la nieve es hermosa, recorrer Caviahue en modalidad trekking es otra historia. Vivimos en un paraíso y siempre me encantó caminar en la montaña. Después de años de trekking personal llegó la hora de compartir: disfruto guiar a las personas hasta cada rincón de Caviahue-Copahue.',
      },
      {
        title: 'Esquí de fondo',
        body: 'Otra disciplina que me encanta es el esquí de fondo. Me permite recorrer las montañas nevadas de Caviahue y es la opción que elijo cuando quiero conectar con la naturaleza en invierno. Soy instructora en el Club Andino de Caviahue y también enseño y guío excursiones en esquí a los turistas que nos visitan.',
      },
      {
        title: 'Musher',
        body: 'Ser musher fue un largo camino y es uno de los deportes que más me gusta. Cuidarlos, darles de comer, entrenarlos y darles amor, sabiendo que cada salida es una oportunidad para compartir una aventura en equipo.',
      },
      {
        title: 'Caviahue.tur.ar',
        body: 'Además de guía de trekking soy emprendedora: cofundadora de la agencia de viajes caviahue.tur.ar. Mi objetivo es ofrecer experiencias únicas y personalizadas para que cada visitante descubra la belleza auténtica de esta región, contribuyendo a un turismo sostenible.',
      },
    ],
    gallery: [
      { src: portrait, alt: 'Josefina Cabral en Caviahue' },
      { src: mountain, alt: 'Josefina Cabral en la montaña' },
      { src: guiding, alt: 'Josefina Cabral guiando una excursión' },
    ],
  },
  en: {
    intro: [
      'I arrived in Caviahue 24 years ago and it was love at first sight. Life close to nature stayed with me forever.',
      'Along the way I grew and learned a lot. I am a musher —a dog sled guide— and I also trek, cross-country ski and snowshoe. I enjoy living in contact with nature and sharing it with everyone who visits.',
    ],
    sections: [
      {
        title: 'Mountain guide',
        body: 'I am a licensed tourism provider, authorised by the Tourism Secretariat of Neuquén province, the ANP and the Municipality of Caviahue-Copahue.',
      },
      {
        title: 'Trekking guide',
        body: 'Snow is beautiful, but exploring Caviahue on foot is another story. We live in a paradise and I have always loved walking in the mountains. After years of personal trekking, the time came to share it: I love guiding people to every corner of Caviahue-Copahue.',
      },
      {
        title: 'Cross-country skiing',
        body: 'Another discipline I love is cross-country skiing. It lets me travel the snowy mountains of Caviahue and it is what I choose when I want to connect with nature in winter. I teach at the Club Andino de Caviahue and guide ski excursions for visitors.',
      },
      {
        title: 'Musher',
        body: 'Becoming a musher was a long road and it is one of the sports I enjoy most. Caring for the dogs, feeding them, training them and giving them love, knowing every run is a chance to share an adventure as a team.',
      },
      {
        title: 'Caviahue.tur.ar',
        body: 'Beyond guiding, I am an entrepreneur: co-founder of the travel agency caviahue.tur.ar. My goal is to offer unique, personal experiences so every visitor discovers the authentic beauty of this region, contributing to sustainable tourism.',
      },
    ],
    gallery: [
      { src: portrait, alt: 'Josefina Cabral in Caviahue' },
      { src: mountain, alt: 'Josefina Cabral in the mountains' },
      { src: guiding, alt: 'Josefina Cabral guiding an excursion' },
    ],
  },
};
