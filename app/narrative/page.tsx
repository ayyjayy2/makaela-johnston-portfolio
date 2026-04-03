import type { Metadata } from 'next';
import ProjectCard, { type Project } from '../components/ProjectCard';

export const metadata: Metadata = {
  title: 'Narrative — Makaela Johnston',
  description: 'Narrative production design work by Makaela Johnston — credits include Netflix, Apple TV+, NBC, FX/Hulu, and Amazon Prime.',
};

const projects: Project[] = [
  {
    title: 'Saturn Return',
    slug: 'saturn-return',
    category: 'narrative',
    role: 'Set Decoration Buyer',
    client: 'Netflix · Feature Film',
  },
  {
    title: 'Dark Matter',
    slug: 'dark-matter',
    category: 'narrative',
    role: 'Set Decoration Coordinator',
    client: 'Apple TV+ · S1–S2',
  },
  {
    title: 'Chicago Fire',
    slug: 'chicago-fire',
    category: 'narrative',
    role: 'Set Decorator',
    client: 'NBC · Season 12',
  },
  {
    title: 'Justified: City Primeval',
    slug: 'justified-city-primeval',
    category: 'narrative',
    role: 'Set Decorator',
    client: 'FX / Hulu · Limited Series',
  },
  {
    title: 'Light Years',
    slug: 'light-years',
    category: 'narrative',
    role: 'Art Dept Coordinator',
    client: 'Amazon Prime · S1',
  },
];

export default function Narrative() {
  return (
    <div>

      {/* ── Header + Grid ───────────────────────────────────────── */}
      <section
        className="section-dark"
        style={{ paddingTop: 'calc(var(--nav-height) + clamp(3rem, 8vw, 6rem))' }}
      >
        <div className="container">
          <div className="page-header">
            <h1 className="section-title">
              Narrative<br /><em>Projects</em>
            </h1>
          </div>
          <div className="projects-grid">
            {projects.map((project) => (
              <ProjectCard key={project.slug} {...project} />
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ─────────────────────────────────────────────────── */}
      <div className="cta-band">
        <div className="container">
          <div className="cta-band-inner">
            <h2 className="cta-band-heading">
              Let&rsquo;s build something worth watching.
            </h2>
            <a href="/contact" className="btn-primary-dark">
              Get In Touch
            </a>
          </div>
        </div>
      </div>

    </div>
  );
}
