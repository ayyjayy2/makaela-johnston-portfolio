import type { Metadata } from 'next';
import ProjectCard, { type Project } from '../components/ProjectCard';
import ScrollReveal from '../components/ScrollReveal';

export const metadata: Metadata = {
  title: 'Commercial — Makaela Johnston',
  description: 'Commercial production design work by Makaela Johnston — brands including Spotify, Toyota, Chicago Bulls, and more.',
};

const projects: Project[] = [
  {
    title: 'Chicago Sky — 2026 Rebel Jersey',
    slug: 'chicago-sky-rebel-jersey',
    category: 'commercial',
    role: 'Production Design',
    client: 'Chicago Sky',
    image: '/assets/commercial/chicago-sky-rebel-jersey/1.png',
  },
  {
    title: 'Chicago Bulls — Salute to Derrick Rose',
    slug: 'chicago-bulls-salute-derrick-rose',
    category: 'commercial',
    role: 'Production Design',
    client: 'Chicago Bulls',
    image: '/assets/commercial/chicago-bulls-salute-derrick-rose/1 Header.png',
  },
  {
    title: 'Chicago Bulls — Derrick Rose Retirement Banner',
    slug: 'chicago-bulls-derrick-rose-retirement-banner',
    category: 'commercial',
    role: 'Art Director',
    client: 'Chicago Bulls',
    image: '/assets/commercial/chicago-bulls-derrick-rose-retirement-banner/1 Header.png',
  },
  {
    title: 'Chicago Bulls — Ring of Honor: Neil Funk',
    slug: 'chicago-bulls-ring-of-honor-neil-funk',
    category: 'commercial',
    role: 'Production Design',
    client: 'Chicago Bulls',
    image: '/assets/commercial/chicago-bulls-ring-of-honor-neil-funk/1 Header.png',
  },
  {
    title: 'Chicago Stars — Media Day 2026',
    slug: 'chicago-stars-media-day',
    category: 'commercial',
    role: 'Production Design',
    client: 'Chicago Stars',
    image: '/assets/commercial/chicago-stars/1 Header Image.png',
  },
  {
    title: 'Spotify × Jack Harlow',
    slug: 'spotify-jack-harlow',
    category: 'commercial',
    role: 'Production Design',
    client: 'Spotify',
  },
  {
    title: 'Chicago Blackhawks — Night at the United Center',
    slug: 'chicago-blackhawks-united-center',
    category: 'commercial',
    role: 'Production Design',
    client: 'Chicago Blackhawks',
  },
  {
    title: 'Chicago Bulls 1966 × Just Don',
    slug: 'chicago-bulls-just-don',
    category: 'commercial',
    role: 'Production Design',
    client: 'Chicago Bulls',
  },
  {
    title: 'A Kernel of Truth: A Benny the Bull Film',
    slug: 'benny-the-bull',
    category: 'commercial',
    role: 'Production Design',
    client: 'Chicago Bulls',
  },
  {
    title: 'The Crab Place — Crab Cake Eggs Benny',
    slug: 'the-crab-place',
    category: 'commercial',
    role: 'Production Design',
    client: 'The Crab Place',
  },
  {
    title: 'Toyota — Naughty List',
    slug: 'toyota-naughty-list',
    category: 'commercial',
    role: 'Production Design',
    client: 'Toyota',
  },
];

export default function Commercial() {
  return (
    <div>

      {/* ── Header + Grid ───────────────────────────────────────── */}
      <section
        className="section-projects"
        style={{ paddingTop: 'calc(var(--nav-height) + clamp(3rem, 8vw, 6rem))' }}
      >
        <div className="container">
          <ScrollReveal>
            <div className="page-header">
              <h1 className="section-title">
                Commercial<br /><em>Projects</em>
              </h1>
            </div>
          </ScrollReveal>
          <div className="projects-grid">
            {projects.map((project, i) => (
              <ScrollReveal key={project.slug} delay={i * 80}>
                <ProjectCard {...project} />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ─────────────────────────────────────────────────── */}

    </div>
  );
}
