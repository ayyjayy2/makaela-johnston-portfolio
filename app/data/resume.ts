export type Credit = {
  title: string;
  role: string;
  studio: string;
  type: string;
  year: string;
  sortYear: number;
  category: 'Commercial' | 'Narrative';
};

export const resumeInfo = {
  name: 'Makaela Johnston',
  title: 'Production Design & Set Decoration',
  email: 'makaela.johnston@gmail.com',
  phone: '',          // add when available
  location: 'Chicago, IL',
  website: 'makaelajohnston.com',
  union: 'IATSE',    // update / remove if not applicable
};

const creditData: Credit[] = [
  {
    title: 'Dark Matter',
    role: 'Art Dept Coordinator / Set Decoration Coordinator',
    studio: 'Apple TV+',
    type: 'Series · S1–S2',
    year: '2024–2025',
    sortYear: 2025,
    category: 'Narrative',
  },
  {
    title: 'Saturn Return',
    role: 'Set Decoration Buyer',
    studio: 'Netflix',
    type: 'Feature Film',
    year: '2025',
    sortYear: 2025,
    category: 'Narrative',
  },
  {
    title: 'Chicago Blackhawks — Night at the United Center',
    role: 'Production Design',
    studio: 'Chicago Blackhawks',
    type: 'Social Media Commercial',
    year: '2025',
    sortYear: 2025,
    category: 'Commercial',
  },
  {
    title: 'Chicago Fire',
    role: 'Set Decorator',
    studio: 'NBC',
    type: 'Series · Season 12',
    year: '2024',
    sortYear: 2024,
    category: 'Narrative',
  },
  {
    title: 'Chicago Bulls 1966 × Just Don',
    role: 'Production Design',
    studio: 'Chicago Bulls',
    type: 'Multimedia Ad',
    year: '2023',
    sortYear: 2023,
    category: 'Commercial',
  },
  {
    title: 'Justified: City Primeval',
    role: 'Set Decorator',
    studio: 'FX / Hulu',
    type: 'Limited Series',
    year: '2022',
    sortYear: 2022,
    category: 'Narrative',
  },
  {
    title: 'Light Years',
    role: 'Art Dept Coordinator',
    studio: 'Amazon Prime',
    type: 'Series · S1',
    year: '2021',
    sortYear: 2021,
    category: 'Narrative',
  },
  {
    title: 'Spotify × Jack Harlow',
    role: 'Production Design',
    studio: 'Spotify',
    type: 'TikTok Ad',
    year: '2021',
    sortYear: 2021,
    category: 'Commercial',
  },
  {
    title: 'A Kernel of Truth: A Benny the Bull Film',
    role: 'Production Design',
    studio: 'Chicago Bulls',
    type: 'Short Film',
    year: '',
    sortYear: 0,
    category: 'Commercial',
  },
  {
    title: 'The Crab Place — Crab Cake Eggs Benny',
    role: 'Production Design',
    studio: 'The Crab Place',
    type: 'Commercial',
    year: '',
    sortYear: 0,
    category: 'Commercial',
  },
  {
    title: 'Toyota — Naughty List',
    role: 'Production Design',
    studio: 'Toyota',
    type: 'Commercial',
    year: '',
    sortYear: 0,
    category: 'Commercial',
  },
];

export const credits = creditData.sort((a, b) => b.sortYear - a.sortYear);
