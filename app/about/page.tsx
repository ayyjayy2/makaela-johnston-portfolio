import type { Metadata } from 'next';
import Link from 'next/link';
import ScrollReveal from '../components/ScrollReveal';

export const metadata: Metadata = {
  title: 'About',
  description: 'Chicago-based Production Design and Set Decoration with over a decade of experience in Television, Film, and Commercial work.',
};

const disciplines = [
  'Production Designer',
  'Art Director',
  'Set Decoration Buyer',
  'Set Decoration Coordinator',
  'Art Department Coordinator',
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
            <ScrollReveal>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                <p className="eyebrow">About</p>
                <h1 className="section-title">
                  <em>My Story</em>
                </h1>
                <div style={{ width: '2.5rem', height: '1px', backgroundColor: 'var(--rosy-brown)' }} />
              </div>
            </ScrollReveal>
            <ScrollReveal delay={150}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', paddingTop: '0.5rem' }}>
                <p className="lead-text">
                  Makaela Johnston is a Chicago-based Production Design and Set Decoration
                  professional with a focus in Television, Film, and Commercial work. With over a decade
                  in professional on-set experience, she has stepped into multiple art
                  department positions across major networks and streaming platforms.
                </p>
                <p className="lead-text">
                  She is passionate about bringing unique stories and characters to life
                  through design — crafting environments that feel lived-in, purposeful,
                  and cinematic.
                </p>
                <div style={{ paddingTop: '0.5rem', paddingBottom: '1.5rem' }}>
                  <Link href="/contact" className="btn-primary">Contact</Link>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ── Stat + Disciplines ─────────────────────────────────── */}
      <section className="section-mid">
        <div className="container">
          <div className="about-grid" style={{ alignItems: 'center' }}>
            <ScrollReveal>
              <div className="stat-block">
                <p className="stat-number">10+</p>
                <p className="eyebrow">Years on set</p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={150}>
              <div>
                <p className="eyebrow" style={{ marginBottom: '1.5rem' }}>Disciplines</p>
                <p className="disciplines-text">
                  {disciplines.map((d, i) => (
                    <span key={d}>
                      <span style={{ whiteSpace: 'nowrap' }}>
                        {d}{i < disciplines.length - 1 ? ' ·' : ''}
                      </span>
                      {i < disciplines.length - 1 ? ' ' : ''}
                    </span>
                  ))}
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>



    </div>
  );
}
