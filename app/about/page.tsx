import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'About — Makaela Johnston',
  description: 'Chicago-based Production Designer and Set Decorator with over a decade of experience in Television, Film, and Commercial work.',
};

const disciplines = [
  'Production Designer',
  'Art Director',
  'Set Decoration Buyer',
  'Set Decoration Coordinator',
  'Art Department Coordinator',
];

const credits = [
  { title: 'Saturn Return',            role: 'Set Decoration Buyer',       studio: 'Netflix',      type: 'Feature Film'   },
  { title: 'Dark Matter',              role: 'Set Decoration Coordinator', studio: 'Apple TV+',    type: 'Series · S1–S2' },
  { title: 'Chicago Fire',             role: 'Set Decorator',              studio: 'NBC',          type: 'Series · S12'   },
  { title: 'Justified: City Primeval', role: 'Set Decorator',              studio: 'FX / Hulu',    type: 'Limited Series' },
  { title: 'Light Years',              role: 'Art Dept Coordinator',       studio: 'Amazon Prime', type: 'Series · S1'    },
  { title: 'Spotify × Jack Harlow',    role: 'Production Designer',        studio: 'Spotify',      type: 'Commercial'     },
];

export default function About() {
  return (
    <div>

      {/* ── Opening ────────────────────────────────────────────── */}
      <section
        className="section-dark"
        style={{ paddingTop: 'calc(var(--nav-height) + clamp(3rem, 8vw, 6rem))' }}
      >
        <div className="container">
          <div className="about-grid">
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              <p className="eyebrow">About</p>
              <h1 className="section-title">
                The story<br />behind<br /><em>the work</em>
              </h1>
              <div style={{ width: '2.5rem', height: '1px', backgroundColor: 'var(--rosy-brown)' }} />
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', paddingTop: '0.5rem' }}>
              <p className="lead-text">
                Makaela Johnston is a Chicago-based Production Designer and Set Decorator
                with a focus in Television, Film, and Commercial work. With over a decade
                in professional on-set experience, she has stepped into multiple art
                department positions across major networks and streaming platforms.
              </p>
              <p className="lead-text">
                She is passionate about bringing unique stories and characters to life
                through design — crafting environments that feel lived-in, purposeful,
                and cinematic.
              </p>
              <div style={{ paddingTop: '0.5rem' }}>
                <Link href="/contact" className="btn-primary">Work Together</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Stat + Disciplines ─────────────────────────────────── */}
      <section className="section-mid">
        <div className="container">
          <div className="about-grid" style={{ alignItems: 'center' }}>
            <div className="stat-block">
              <p className="stat-number">10+</p>
              <p className="eyebrow">Years on set</p>
            </div>
            <div>
              <p className="eyebrow" style={{ marginBottom: '1.5rem' }}>Disciplines</p>
              <ul className="disciplines-list">
                {disciplines.map((d) => (
                  <li key={d} className="discipline-item">{d}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── Credits ────────────────────────────────────────────── */}
      <section className="section-dark">
        <div className="container">
          <div className="credits-header">
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <p className="eyebrow">Select Credits</p>
              <h2 className="section-title" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}>
                Featured Work
              </h2>
            </div>
            <Link href="/resume" className="btn-ghost" style={{ paddingBottom: '0.5rem' }}>
              Full Resume <span aria-hidden="true">→</span>
            </Link>
          </div>

          <div>
            {credits.map((credit, i) => (
              <div key={i} className="credit-row">
                <div>
                  <p className="credit-title">{credit.title}</p>
                  <p className="credit-role">{credit.role}</p>
                </div>
                <div className="credit-meta">
                  <span className="credit-type">{credit.type}</span>
                  <span className="credit-studio">{credit.studio}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ────────────────────────────────────────────────── */}
      <div className="cta-band">
        <div className="container">
          <div className="cta-band-inner">
            <h2 className="cta-band-heading">
              Let&rsquo;s build something worth watching.
            </h2>
            <Link href="/contact" className="btn-primary-dark">
              Get In Touch
            </Link>
          </div>
        </div>
      </div>

    </div>
  );
}
