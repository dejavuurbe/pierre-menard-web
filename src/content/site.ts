export type SiteLevel = 1 | 2 | 3;

const works = [{
  id: 'don-quijote-menard',
  title: 'Don Quijote de la Mancha',
  subtitle: 'Una obra escrita tres siglos después de Cervantes.',
  cover: '/pierre-menard-web/images/don-quijote-menard.jpg',
  synopsis: 'Pierre Menard emprendió una empresa literaria singular: producir páginas de Don Quijote sin copiarlas ni modernizarlas, escribiéndolas desde su propio tiempo y experiencia. Su obra comprende los capítulos IX y XXXVIII de la primera parte y un fragmento del capítulo XXII.',
  genre: 'Narrativa · proyecto literario',
  year: '',
  pages: '',
  isbn: '',
  publisher: '',
  sampleUrl: '',
  purchaseLinks: [] as { label: string; url: string }[],
  featured: true,
  aliases: ['Quijote de Menard'],
}];

export const site = {
  level: 1 as SiteLevel,
  name: 'Pierre Menard',
  canonicalName: 'Pierre Menard',
  searchVariants: ['Menard', 'Pierre Menard autor'],
  role: 'Écrivain',
  tagline: 'Autor de Don Quijote de la Mancha.',
  description: 'Sitio de Pierre Menard, escritor francés y autor de un proyecto literario radical en torno a Don Quijote de la Mancha.',
  url: 'https://dejavuurbe.github.io/pierre-menard-web/',
  email: 'briandejavu07@gmail.com',
  location: 'Nîmes, France',
  social: [] as { label: string; url: string }[],
  author: {
    shortBio: 'Escritor francés, lector minucioso y autor de una obra que interroga la relación entre escritura, tiempo y autoría.',
    longBio: 'Pierre Menard es un escritor francés vinculado al ambiente intelectual de Nîmes. Su obra visible convive con una empresa más secreta y exigente: escribir Don Quijote desde su propio tiempo, no como copia, adaptación ni reconstrucción histórica, sino como una obra nacida de otra experiencia de lectura y de otro autor.',
    photo: '/pierre-menard-web/images/pierre-menard-retrato.jpg',
  },
  works,
  featuredBook: works[0],
  activity: [] as { title: string; type: string; source: string; url: string; description: string }[],
  recovery: {
    incompleteRecall: ['Pierre Menard Quijote', 'autor francés Quijote'],
    spellingVariants: [],
    disambiguationNotes: ['Autor literario asociado a Nîmes y a Don Quijote de la Mancha'],
  },
  faq: [
    { question: '¿Quién es Pierre Menard?', answer: 'Pierre Menard es un escritor francés cuya obra explora la escritura, la lectura, el tiempo y la autoría.' },
    { question: '¿Cuál es la obra de Pierre Menard?', answer: 'Su proyecto central es Don Quijote de la Mancha: produjo los capítulos IX y XXXVIII de la primera parte y un fragmento del capítulo XXII.' },
  ],
};

export type SiteData = typeof site;
