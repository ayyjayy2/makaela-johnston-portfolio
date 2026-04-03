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
  { title: 'Saturn Return',           role: 'Set Decoration Buyer',          studio: 'Netflix',      type: 'Feature Film' },
  { title: 'Dark Matter',             role: 'Set Decoration Coordinator',    studio: 'Apple TV+',    type: 'Series S1–S2' },
  { title: 'Chicago Fire',            role: 'Set Decorator',                 studio: 'NBC',          type: 'Series S12' },
  { title: 'Justified: City Primeval',role: 'Set Decorator',                 studio: 'FX / Hulu',    type: 'Limited Series' },
  { title: 'Light Years',             role: 'Art Department Coordinator',    studio: 'Amazon Prime', type: 'Series S1' },
  { title: 'Spotify × Jack Harlow',   role: 'Production Designer',           studio: 'Spotify',      type: 'Commercial' },
];

export default function About() {
  return (
    <div style={{ backgroundColor: 'var(--color-background)' }}>

      {/* ── Page Header ─────────────────────────────────────────── */}
      <section
        className="max-w-6xl mx-auto px-6 pt-16 pb-12"
        aria-labelledby="about-heading"
      >
        <p className="eyebrow">About</p>
        <h1 id="about-heading" className="about-display-heading">
          The story behind<br />
          <em>the work</em>
        </h1>
        <div className="about-rule" />
      </section>

      {/* ── Bio + Disciplines ───────────────────────────────────── */}
      <section className="max-w-6xl mx-auto px-6 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-16">

          {/* Bio */}
          <div className="md:col-span-7">
            <p className="about-bio">
              Makaela Johnston is a Chicago-based Production Designer and Set Decorator
              with a focus in Television, Film, and Commercial work. With over a decade
              in professional on-set experience, she has stepped foot into multiple art
              department positions across major networks and streaming platforms.
            </p>
            <p className="about-bio" style={{ marginTop: '1.5rem' }}>
              She is passionate about bringing unique stories and characters to life
              through design — crafting environments that feel lived-in, purposeful,
              and cinematic. From network dramas to national commercials, Makaela
              approaches every project with the same attention to detail and commitment
              to the story being told.
            </p>
            <div className="mt-10">
              <Link href="/contact" className="btn-primary">
                Work Together
              </Link>
            </div>
          </div>

          {/* Disciplines + Stat */}
          <aside className="md:col-span-5 flex flex-col gap-10">

            {/* Stat */}
            <div
              className="p-8"
              style={{ backgroundColor: 'var(--color-dark-green)' }}
            >
              <p style={{
                fontFamily:    'var(--font-heading)',
                fontSize:      'clamp(3rem, 6vw, 4.5rem)',
                fontWeight:    300,
                color:         'var(--color-beige)',
                lineHeight:    1,
                letterSpacing: '-0.02em',
              }}>
                10+
              </p>
              <p style={{
                fontFamily:    'var(--font-body)',
                fontSize:      '0.875rem',
                fontWeight:    400,
                color:         'var(--color-moss-green)',
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                marginTop:     '0.5rem',
              }}>
                Years on set
              </p>
            </div>

            {/* Disciplines */}
            <div>
              <p className="eyebrow" style={{ marginBottom: '1rem' }}>Disciplines</p>
              <ul style={{ listStyle: 'none', margin: 0, padding: 0 }}>
                {disciplines.map((d) => (
                  <li
                    key={d}
                    style={{
                      fontFamily:   'var(--font-body)',
                      fontSize:     '1rem',
                      fontWeight:   400,
                      color:        'var(--color-text-primary)',
                      padding:      '0.75rem 0',
                      borderBottom: '1px solid rgba(131,153,88,0.2)',
                    }}
                  >
                    {d}
                  </li>
                ))}
              </ul>
            </div>

          </aside>
        </div>
      </section>

      {/* ── Select Credits ──────────────────────────────────────── */}
      <section
        className="py-20"
        style={{ backgroundColor: 'var(--color-dark-green)' }}
        aria-labelledby="credits-heading"
      >
        <div className="max-w-6xl mx-auto px-6">
          <p className="eyebrow" style={{ color: 'var(--color-moss-green)', marginBottom: '0.75rem' }}>
            Select Credits
          </p>
          <h2
            id="credits-heading"
            style={{
              fontFamily:    'var(--font-heading)',
              fontSize:      'var(--text-h2)',
              fontWeight:    300,
              color:         'var(--color-beige)',
              marginBottom:  '3rem',
            }}
          >
            Featured Work
          </h2>

          <div style={{ borderTop: '1px solid rgba(247,244,213,0.15)' }}>
            {credits.map((credit, i) => (
              <div
                key={i}
                className="credit-row"
              >
                <div className="credit-row-inner">
                  <div>
                    <p style={{
                      fontFamily: 'var(--font-heading)',
                      fontSize:   '1.125rem',
                      fontWeight: 400,
                      color:      'var(--color-beige)',
                    }}>
                      {credit.title}
                    </p>
                    <p style={{
                      fontFamily: 'var(--font-body)',
                      fontSize:   '0.875rem',
                      color:      'var(--color-moss-green)',
                      marginTop:  '0.25rem',
                    }}>
                      {credit.role}
                    </p>
                  </div>
                  <div className="credit-meta">
                    <span style={{
                      fontFamily:    'var(--font-body)',
                      fontSize:      '0.8rem',
                      color:         'rgba(247,244,213,0.5)',
                      letterSpacing: '0.08em',
                      textTransform: 'uppercase',
                    }}>
                      {credit.type}
                    </span>
                    <span style={{
                      fontFamily: 'var(--font-body)',
                      fontSize:   '0.875rem',
                      fontWeight: 500,
                      color:      'var(--color-rosy-brown)',
                    }}>
                      {credit.studio}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12">
            <Link href="/resume" className="btn-ghost-light">
              View Full Resume <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* ── Work Images (placeholders until assets provided) ────── */}
      <section
        className="py-20"
        style={{ backgroundColor: 'var(--color-background)' }}
        aria-label="Work gallery"
      >
        <div className="max-w-6xl mx-auto px-6">
          <p className="eyebrow" style={{ marginBottom: '0.75rem' }}>On Set</p>
          <h2 style={{
            fontFamily:   'var(--font-heading)',
            fontSize:     'var(--text-h2)',
            fontWeight:   300,
            color:        'var(--color-dark-green)',
            marginBottom: '3rem',
          }}>
            Behind the Scenes
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {[1, 2, 3].map((n) => (
              <div
                key={n}
                style={{
                  aspectRatio:     '4/3',
                  backgroundColor: 'rgba(10,51,35,0.06)',
                  border:          '1px dashed rgba(131,153,88,0.35)',
                  display:         'flex',
                  alignItems:      'center',
                  justifyContent:  'center',
                }}
              >
                <p style={{
                  fontFamily:    'var(--font-body)',
                  fontSize:      '0.75rem',
                  color:         'var(--color-moss-green)',
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  opacity:       0.7,
                }}>
                  Image coming soon
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Contact CTA ─────────────────────────────────────────── */}
      <section
        className="py-24"
        style={{ backgroundColor: 'var(--color-rosy-brown)' }}
        aria-labelledby="contact-cta-heading"
      >
        <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-8">
          <h2
            id="contact-cta-heading"
            style={{
              fontFamily:  'var(--font-heading)',
              fontSize:    'var(--text-h2)',
              fontWeight:  300,
              fontStyle:   'italic',
              color:       'var(--color-dark-green)',
              maxWidth:    '28ch',
            }}
          >
            Let&rsquo;s build something worth watching.
          </h2>
          <Link
            href="/contact"
            style={{
              fontFamily:      'var(--font-body)',
              fontSize:        '0.9rem',
              fontWeight:      500,
              letterSpacing:   '0.06em',
              textTransform:   'uppercase',
              backgroundColor: 'var(--color-dark-green)',
              color:           'var(--color-beige)',
              padding:         '0.875rem 2rem',
              whiteSpace:      'nowrap',
              display:         'inline-flex',
              transition:      'background-color 300ms ease',
            }}
            className="btn-primary shrink-0"
          >
            Get In Touch
          </Link>
        </div>
      </section>

    </div>
  );
}
