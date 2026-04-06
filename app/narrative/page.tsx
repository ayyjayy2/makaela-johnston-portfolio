import type { Metadata } from 'next';
import ProjectCard, { type Project } from '../components/ProjectCard';
import ScrollReveal from '../components/ScrollReveal';

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
          <ScrollReveal>
            <div className="page-header">
              <h1 className="section-title">
                Narrative<br /><em>Projects</em>
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
      <ScrollReveal>
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
      </ScrollReveal>

    </div>
  );
}
