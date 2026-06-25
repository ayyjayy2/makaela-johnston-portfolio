import type { Metadata } from 'next';
import ProjectCard from '../components/ProjectCard';
import ScrollReveal from '../components/ScrollReveal';
import { commercialProjects } from '../data/projects';

export const metadata: Metadata = {
  title: 'Commercial — Makaela Johnston',
  description: 'Commercial production design work by Makaela Johnston — brands including Spotify, Toyota, Chicago Bulls, and more.',
};

// Hide "Coming Soon" cards (projects with no header image yet), but keep the
// Snickers teaser card visible.
const projects = commercialProjects.filter(
  (p) => p.image || p.slug === 'snickers-world-cup',
);

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
