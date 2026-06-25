import type { Metadata } from 'next';
import ProjectCard from '../components/ProjectCard';
import ScrollReveal from '../components/ScrollReveal';
import { narrativeProjects } from '../data/projects';

export const metadata: Metadata = {
  title: 'Narrative — Makaela Johnston',
  description: 'Narrative production design work by Makaela Johnston — credits include Netflix, Apple TV+, NBC, FX/Hulu, and Amazon Prime.',
};

// Hide "Coming Soon" cards (projects with no header image yet), but keep the
// Snickers teaser card visible.
const projects = narrativeProjects.filter(
  (p) => p.image || p.slug === 'snickers-world-cup',
);

export default function Narrative() {
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


    </div>
  );
}
