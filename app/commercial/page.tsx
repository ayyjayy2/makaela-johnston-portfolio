import type { Metadata } from 'next';
import ProjectCard, { type Project } from '../components/ProjectCard';

export const metadata: Metadata = {
  title: 'Commercial — Makaela Johnston',
  description: 'Commercial production design work by Makaela Johnston — brands including Spotify, Toyota, Chicago Bulls, and more.',
};

const projects: Project[] = [
  {
    title: 'Spotify × Jack Harlow',
    slug: 'spotify-jack-harlow',
    category: 'commercial',
    role: 'Production Designer',
    client: 'Spotify',
  },
  {
    title: 'Chicago Blackhawks — Night at the United Center',
    slug: 'chicago-blackhawks-united-center',
    category: 'commercial',
    role: 'Production Designer',
    client: 'Chicago Blackhawks',
  },
  {
    title: 'Chicago Bulls 1966 × Just Don',
    slug: 'chicago-bulls-just-don',
    category: 'commercial',
    role: 'Production Designer',
    client: 'Chicago Bulls',
  },
  {
    title: 'A Kernel of Truth: A Benny the Bull Film',
    slug: 'benny-the-bull',
    category: 'commercial',
    role: 'Production Designer',
    client: 'Chicago Bulls',
  },
  {
    title: 'The Crab Place — Crab Cake Eggs Benny',
    slug: 'the-crab-place',
    category: 'commercial',
    role: 'Production Designer',
    client: 'The Crab Place',
  },
  {
    title: 'Toyota — Naughty List',
    slug: 'toyota-naughty-list',
    category: 'commercial',
    role: 'Production Designer',
    client: 'Toyota',
  },
];

export default function Commercial() {
  return (
    <div>

      {/* ── Page Header ─────────────────────────────────────────── */}
      <section
        className="section-dark"
        style={{ paddingTop: 'calc(var(--nav-height) + clamp(3rem, 8vw, 6rem))' }}
      >
        <div className="container">
          <div className="page-header">
            <p className="eyebrow">Selected Work</p>
            <h1 className="section-title">
              Commercial<br /><em>Projects</em>
            </h1>
          </div>
        </div>
      </section>

      {/* ── Grid ────────────────────────────────────────────────── */}
      <section className="section-dark" style={{ paddingTop: '0' }}>
        <div className="container">
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
