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
  watchLinks?: { label: string; url: string }[];
  images?: string[];
  videoUrl?: string;
  description?: string;
};

export const commercialProjects: ProjectMeta[] = [
  {
    title: 'Chicago Stars — Media Day 2026',
    slug: 'chicago-stars-media-day',
    category: 'commercial',
    role: 'Production Designer',
    year: '2026',
    image: '/assets/commercial/chicago-stars/1 Header Image.png',
    videoUrl: 'https://www.dropbox.com/scl/fo/kl7db1fra82s1ecydppul/APyEAc5jEBzQ9g-PNiFVeGk/20260317_Chicago_Stars_Intro_Final.mp4?rlkey=xenia4clb9dst9t8eiqeiby0s&st=xzzeb0gc&raw=1',
    description: 'Production design for the Chicago Stars Media Day 2026.',
    images: [
      '/assets/commercial/chicago-stars/Screen Shot 2026-04-15 at 3.49.25 PM.png',
      '/assets/commercial/chicago-stars/Screen Shot 2026-04-15 at 3.50.20 PM.png',
      '/assets/commercial/chicago-stars/Screen Shot 2026-04-15 at 3.50.49 PM.png',
      '/assets/commercial/chicago-stars/Screen Shot 2026-04-15 at 3.51.10 PM.png',
      '/assets/commercial/chicago-stars/Screen Shot 2026-04-15 at 3.51.45 PM.png',
      '/assets/commercial/chicago-stars/Screen Shot 2026-04-15 at 3.52.14 PM.png',
      '/assets/commercial/chicago-stars/Screen Shot 2026-04-15 at 3.53.15 PM.png',
      '/assets/commercial/chicago-stars/Screen Shot 2026-04-15 at 3.53.48 PM.png',
      '/assets/commercial/chicago-stars/Screen Shot 2026-04-15 at 3.54.12 PM.png',
      '/assets/commercial/chicago-stars/Screen Shot 2026-04-15 at 3.54.59 PM.png',
      '/assets/commercial/chicago-stars/Screen Shot 2026-04-15 at 3.55.15 PM.png',
      '/assets/commercial/chicago-stars/Screen Shot 2026-04-15 at 3.55.25 PM.png',
      '/assets/commercial/chicago-stars/Screen Shot 2026-04-15 at 3.55.47 PM.png',
      '/assets/commercial/chicago-stars/BTS - put last.PNG',
    ],
  },
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
    title: '"Bloodline" x Alex Warren x Jelly Roll',
    slug: 'bloodline',
    category: 'narrative',
    role: 'Production Designer',
    year: '2025',
    type: 'Music Video',
    image: '/assets/narrative/bloodline/1HeaderPhoto.png',
    videoUrl: 'https://www.youtube-nocookie.com/embed/UBtfcphWKBY?autoplay=1&rel=0&playsinline=1',
    description: 'Production design for the music video "Bloodline" by Alex Warren featuring Jelly Roll.',
    images: [
      '/assets/narrative/bloodline/IMG_2045.JPG',
      '/assets/narrative/bloodline/IMG_2148.JPG',
      '/assets/narrative/bloodline/IMG_2228.JPG',
      '/assets/narrative/bloodline/IMG_2231.JPG',
      '/assets/narrative/bloodline/IMG_2256.JPG',
      '/assets/narrative/bloodline/Screen Shot 2026-04-03 at 1.02.46 PM.png',
      '/assets/narrative/bloodline/Screen Shot 2026-04-03 at 1.03.06 PM.png',
      '/assets/narrative/bloodline/Screen Shot 2026-04-03 at 1.04.00 PM.png',
      '/assets/narrative/bloodline/Screen Shot 2026-04-03 at 1.05.05 PM.png',
      '/assets/narrative/bloodline/Screen Shot 2026-04-03 at 1.06.14 PM.png',
      '/assets/narrative/bloodline/Screen Shot 2026-04-03 at 1.07.23 PM.png',
      '/assets/narrative/bloodline/Screen Shot 2026-04-03 at 1.07.53 PM.png',
      '/assets/narrative/bloodline/Screen Shot 2026-04-03 at 1.09.08 PM.png',
      '/assets/narrative/bloodline/Screen Shot 2026-04-06 at 9.27.13 PM.png',
    ],
  },
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
