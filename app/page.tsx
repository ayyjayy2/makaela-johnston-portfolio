import type { Metadata } from 'next';
import HomeHero from './components/HomeHero';

export const metadata: Metadata = {
  title: 'Makaela Johnston — Production Design & Set Decoration',
  description: 'Chicago-based Production Design and Set Decoration professional with credits on Netflix, Apple TV+, NBC, FX/Hulu, and more.',
  openGraph: {
    title: 'Makaela Johnston — Production Design & Set Decoration',
    description: 'Chicago-based Production Design and Set Decoration professional with credits on Netflix, Apple TV+, NBC, FX/Hulu, and more.',
  },
};

export default function Home() {
  return <HomeHero />;
}
