export type ProjectMeta = {
  title: string;
  slug: string;
  category: 'commercial' | 'narrative';
  role: string;
  client?: string;
  image?: string;
  // Detail page fields
  year?: string;
  director?: string;
  studio?: string;
  type?: string;
  watchUrl?: string;
  images?: string[];
  videoUrl?: string;
  description?: string;
};

export const commercialProjects: ProjectMeta[] = [
  {
    title: 'Spotify × Jack Harlow',
    slug: 'spotify-jack-harlow',
    category: 'commercial',
    role: 'Production Design',
    client: 'Spotify',
    year: '2021',
    studio: 'Pyramid Studios',
    type: 'TikTok Ad',
    description: 'Production design for Spotify Wrapped featuring Jack Harlow.',
  },
  {
    title: 'Chicago Blackhawks — Night at the United Center',
    slug: 'chicago-blackhawks-united-center',
    category: 'commercial',
    role: 'Production Design',
    client: 'Chicago Blackhawks',
    year: '2025',
    type: 'Social Media Commercial',
    description: 'Production design for a social media commercial for the Chicago Blackhawks.',
  },
  {
    title: 'Chicago Bulls 1966 × Just Don',
    slug: 'chicago-bulls-just-don',
    category: 'commercial',
    role: 'Production Design',
    client: 'Chicago Bulls',
    year: '2023',
    type: 'Multimedia Ad',
    description: 'Set design for the Chicago Bulls 1966 × Just Don multimedia advertisement.',
  },
  {
    title: 'A Kernel of Truth: A Benny the Bull Film',
    slug: 'benny-the-bull',
    category: 'commercial',
    role: 'Production Design',
    client: 'Chicago Bulls',
    type: 'Short Film',
    description: 'Production design for the Chicago Bulls\' short film featuring Benny the Bull.',
  },
  {
    title: 'The Crab Place — Crab Cake Eggs Benny',
    slug: 'the-crab-place',
    category: 'commercial',
    role: 'Production Design',
    client: 'The Crab Place',
    type: 'Commercial',
    description: 'Production design for The Crab Place commercial.',
  },
  {
    title: 'Toyota — Naughty List',
    slug: 'toyota-naughty-list',
    category: 'commercial',
    role: 'Production Design',
    client: 'Toyota',
    type: 'Commercial',
    description: 'Production design for Toyota\'s Naughty List commercial.',
  },
];

export const narrativeProjects: ProjectMeta[] = [
  {
    title: 'Saturn Return',
    slug: 'saturn-return',
    category: 'narrative',
    role: 'Set Decoration Buyer',
    client: 'Netflix',
    year: '2025',
    type: 'Feature Film',
    description: 'Set decoration buying for the Netflix feature film Saturn Return.',
  },
  {
    title: 'Dark Matter',
    slug: 'dark-matter',
    category: 'narrative',
    role: 'Set Decoration Coordinator',
    client: 'Apple TV+',
    year: '2025',
    type: 'Series · S1–S2',
    studio: 'Sony Pictures',
    director: 'Patricio Farrell',
    description: 'Set decoration coordination for both seasons of Apple TV+\'s Dark Matter.',
  },
  {
    title: 'Chicago Fire',
    slug: 'chicago-fire',
    category: 'narrative',
    role: 'Set Decorator',
    client: 'NBC',
    year: '2024',
    type: 'Series · Season 12',
    description: 'Set decoration for Season 12 of NBC\'s Chicago Fire.',
  },
  {
    title: 'Justified: City Primeval',
    slug: 'justified-city-primeval',
    category: 'narrative',
    role: 'Art Dept Coordinator',
    client: 'FX / Hulu',
    year: '2022',
    type: 'Limited Series',
    studio: 'Sony Pictures',
    director: 'Marek Dobrowolski',
    description: 'Art department coordination for the FX/Hulu limited series Justified: City Primeval.',
  },
  {
    title: 'Light Years',
    slug: 'light-years',
    category: 'narrative',
    role: 'Art Dept Coordinator',
    client: 'Amazon Prime',
    year: '2021',
    type: 'Series · S1',
    studio: 'Legendary Studios',
    director: 'Scott Kuzio',
    description: 'Art department coordination for Season 1 of Amazon Prime\'s Light Years.',
  },
];

export const allProjects = [...commercialProjects, ...narrativeProjects];

export function getProject(category: string, slug: string): ProjectMeta | undefined {
  return allProjects.find((p) => p.category === category && p.slug === slug);
}

export function getAdjacentProjects(project: ProjectMeta): {
  prev: ProjectMeta | null;
  next: ProjectMeta | null;
} {
  const list = project.category === 'commercial' ? commercialProjects : narrativeProjects;
  const index = list.findIndex((p) => p.slug === project.slug);
  return {
    prev: index > 0 ? list[index - 1] : null,
    next: index < list.length - 1 ? list[index + 1] : null,
  };
}
