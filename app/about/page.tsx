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
  { title: 'Saturn Return',            role: 'Set Decoration Buyer',       studio: 'Netflix',      type: 'Feature Film'    },
  { title: 'Dark Matter',              role: 'Set Decoration Coordinator', studio: 'Apple TV+',    type: 'Series · S1–S2'  },
  { title: 'Chicago Fire',             role: 'Set Decorator',              studio: 'NBC',          type: 'Series · S12'    },
  { title: 'Justified: City Primeval', role: 'Set Decorator',              studio: 'FX / Hulu',    type: 'Limited Series'  },
  { title: 'Light Years',              role: 'Art Dept Coordinator',       studio: 'Amazon Prime', type: 'Series · S1'     },
  { title: 'Spotify × Jack Harlow',    role: 'Production Designer',        studio: 'Spotify',      type: 'Commercial'      },
];

export default function About() {
  return (
    <div style={{ backgroundColor: 'var(--color-background)' }}>

      {/* ── Opening statement ──────────────────────────────────── */}
      <section
        className="max-w-6xl mx-auto px-6 lg:px-8"
        style={{ paddingTop: 'clamp(5rem, 12vw, 9rem)', paddingBottom: 'clamp(4rem, 8vw, 7rem)' }}
      >
        <div className="grid md:grid-cols-12 gap-8 items-start">
          <div className="md:col-span-5 flex flex-col gap-6">
            <p className="eyebrow">About</p>
            <h1 className="display-heading" style={{ fontSize: 'var(--text-h1)' }}>
              The story<br />behind<br /><em>the work</em>
            </h1>
            <div className="rule" />
          </div>
          <div className="md:col-span-7 md:pt-6">
            <p className="lead-text">
              Makaela Johnston is a Chicago-based Production Designer and Set Decorator
              with a focus in Television, Film, and Commercial work. With over a decade
              in professional on-set experience, she has stepped foot into multiple art
              department positions across major networks and streaming platforms.
            </p>
            <p className="lead-text" style={{ marginTop: '1.5rem', opacity: 0.85 }}>
              She is passionate about bringing unique stories and characters to life
              through design — crafting environments that feel lived-in, purposeful,
              and cinematic. From network dramas to national commercials, every project
              receives the same exacting attention to detail.
            </p>
          </div>
        </div>
      </section>

      {/* ── Disciplines + Stat ─────────────────────────────────── */}
      <section
        style={{
          backgroundColor: 'var(--color-dark-green)',
          padding:         'clamp(4rem, 8vw, 7rem) 0',
        }}
      >
        <div className="max-w-6xl mx-auto px-6 lg:px-8 grid md:grid-cols-12 gap-12 md:gap-16 items-start">

          {/* Big stat */}
          <div className="md:col-span-4 flex flex-col gap-3">
            <p
              style={{
                fontFamily:    'var(--font-heading)',
                fontSize:      'clamp(5rem, 14vw, 10rem)',
                fontWeight:    100,
                lineHeight:    0.9,
                color:         'var(--color-beige)',
                letterSpacing: '-0.04em',
              }}
            >
              10+
            </p>
            <p
              className="eyebrow"
              style={{ color: 'var(--color-moss-green)' }}
            >
              Years on set
            </p>
          </div>

          {/* Disciplines list */}
          <div className="md:col-span-8">
            <p
              className="eyebrow"
              style={{ color: 'var(--color-moss-green)', marginBottom: '2rem' }}
            >
              Disciplines
            </p>
            <ul style={{ listStyle: 'none' }}>
              {disciplines.map((d, i) => (
                <li
                  key={d}
                  style={{
                    fontFamily:    'var(--font-heading)',
                    fontSize:      'clamp(1.25rem, 3vw, 2rem)',
                    fontWeight:    i === 0 ? 300 : 200,
                    fontStyle:     i % 2 !== 0 ? 'italic' : 'normal',
                    color:         i === 0 ? 'var(--color-beige)' : 'rgba(247,244,213,0.55)',
                    padding:       '0.9rem 0',
                    borderBottom:  '1px solid rgba(247,244,213,0.1)',
                    letterSpacing: '-0.01em',
                    transition:    'color var(--transition-fast)',
                  }}
                >
                  {d}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ── Select Credits ─────────────────────────────────────── */}
      <section
        style={{ padding: 'clamp(4rem, 8vw, 7rem) 0' }}
        aria-labelledby="credits-heading"
      >
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div
            className="flex items-end justify-between mb-12"
            style={{ borderBottom: '1px solid var(--color-border)', paddingBottom: '1.5rem' }}
          >
            <div>
              <p className="eyebrow" style={{ marginBottom: '0.5rem' }}>Select Credits</p>
              <h2 id="credits-heading" className="section-heading">
                Featured Work
              </h2>
            </div>
            <Link href="/resume" className="btn-ghost hidden md:inline-flex">
              Full Resume <span aria-hidden="true">→</span>
            </Link>
          </div>

          <div>
            {credits.map((credit, i) => (
              <div key={i} className="credit-row" style={{ borderColor: 'var(--color-border)' }}>
                <div>
                  <p
                    style={{
                      fontFamily: 'var(--font-heading)',
                      fontSize:   'clamp(1rem, 2vw, 1.25rem)',
                      fontWeight: 400,
                      color:      'var(--color-dark-green)',
                    }}
                  >
                    {credit.title}
                  </p>
                  <p
                    style={{
                      fontFamily: 'var(--font-body)',
                      fontSize:   '0.8125rem',
                      color:      'var(--color-text-muted)',
                      marginTop:  '0.2rem',
                    }}
                  >
                    {credit.role}
                  </p>
                </div>
                <div className="credit-meta">
                  <span
                    style={{
                      fontFamily:    'var(--font-body)',
                      fontSize:      '0.7rem',
                      color:         'var(--color-moss-green)',
                      letterSpacing: '0.1em',
                      textTransform: 'uppercase',
                    }}
                  >
                    {credit.type}
                  </span>
                  <span
                    style={{
                      fontFamily: 'var(--font-body)',
                      fontSize:   '0.875rem',
                      fontWeight: 500,
                      color:      'var(--color-dark-green)',
                    }}
                  >
                    {credit.studio}
                  </span>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 md:hidden">
            <Link href="/resume" className="btn-ghost">
              Full Resume <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* ── Contact CTA ────────────────────────────────────────── */}
      <section
        style={{
          backgroundColor: 'var(--color-rosy-brown)',
          padding:         'clamp(4rem, 8vw, 7rem) 0',
        }}
      >
        <div className="max-w-6xl mx-auto px-6 lg:px-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-8">
          <h2
            style={{
              fontFamily:    'var(--font-heading)',
              fontSize:      'clamp(1.75rem, 4vw, 3rem)',
              fontWeight:    200,
              fontStyle:     'italic',
              color:         'var(--color-dark-green)',
              letterSpacing: '-0.02em',
              lineHeight:    1.2,
              maxWidth:      '22ch',
            }}
          >
            Let&rsquo;s build something worth watching.
          </h2>
          <Link href="/contact" className="btn-primary" style={{ flexShrink: 0 }}>
            Get In Touch
          </Link>
        </div>
      </section>

    </div>
  );
}
