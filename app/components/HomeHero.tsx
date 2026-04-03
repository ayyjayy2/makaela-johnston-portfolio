'use client';

import Image from 'next/image';
import Link from 'next/link';

const clients = [
  'Netflix', 'Apple TV+', 'NBC', 'FX · Hulu', 'Amazon Prime',
  'Spotify', 'Chicago Bulls', 'Toyota', 'Netflix', 'Apple TV+',
  'NBC', 'FX · Hulu', 'Amazon Prime', 'Spotify', 'Chicago Bulls', 'Toyota',
];

export default function HomeHero() {
  return (
    <>
      {/* ── Hero ───────────────────────────────────────────────── */}
      <section
        className="relative overflow-hidden"
        style={{
          minHeight:       '100svh',
          backgroundColor: 'var(--color-background)',
        }}
        aria-label="Hero"
      >
        {/* Photo — right half, full bleed */}
        <div
          className="absolute top-0 right-0 bottom-0"
          style={{ width: '48%' }}
          aria-hidden="true"
        >
          <Image
            src="/assets/home/makaela-hero.png"
            alt=""
            fill
            style={{ objectFit: 'cover', objectPosition: 'center top' }}
            priority
          />
          {/* gradient bleed to blend with bg */}
          <div
            className="absolute inset-0"
            style={{
              background: 'linear-gradient(to right, var(--color-background) 0%, transparent 30%)',
            }}
          />
        </div>

        {/* Content */}
        <div
          className="relative max-w-6xl mx-auto px-6 lg:px-8 flex flex-col justify-end"
          style={{ minHeight: '100svh', paddingBottom: 'clamp(3rem, 8vw, 6rem)' }}
        >
          {/* Vertical role label */}
          <p
            className="eyebrow hidden md:block"
            style={{
              position:  'absolute',
              left:      '-2.5rem',
              top:       '50%',
              transform: 'translateY(-50%) rotate(-90deg)',
              transformOrigin: 'center center',
              opacity:   0.7,
            }}
          >
            Production Design &amp; Set Decoration
          </p>

          <div className="flex flex-col gap-6 md:gap-8" style={{ maxWidth: '62%' }}>

            {/* Eyebrow */}
            <p className="eyebrow">Chicago · Film · Television · Commercial</p>

            {/* Name */}
            <div>
              <h1
                className="display-heading"
                style={{ lineHeight: 0.9 }}
              >
                Makaela<br />
                <em>Johnston</em>
              </h1>
            </div>

            {/* Role — mobile only */}
            <p
              className="eyebrow md:hidden"
              style={{ color: 'var(--color-text-muted)', letterSpacing: '0.1em' }}
            >
              Production Design &amp; Set Decoration
            </p>

            {/* CTAs */}
            <div className="flex items-center gap-8 mt-2">
              <Link href="/commercial" className="btn-primary">
                Commercial
              </Link>
              <Link href="/narrative" className="btn-ghost">
                Narrative <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>

          {/* Scroll cue */}
          <div
            className="hidden md:flex absolute bottom-10 left-6 lg:left-8 items-center gap-3"
            aria-hidden="true"
          >
            <div style={{ width: '2rem', height: '1px', backgroundColor: 'var(--color-moss-green)', opacity: 0.6 }} />
            <span
              style={{
                fontFamily:    'var(--font-body)',
                fontSize:      '0.65rem',
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
                color:         'var(--color-moss-green)',
                opacity:       0.7,
              }}
            >
              Scroll
            </span>
          </div>
        </div>
      </section>

      {/* ── Client marquee ─────────────────────────────────────── */}
      <div
        className="overflow-hidden py-5 border-y"
        style={{
          backgroundColor: 'var(--color-dark-green)',
          borderColor:     'rgba(247,244,213,0.1)',
        }}
        aria-hidden="true"
      >
        <div className="marquee-track">
          {clients.map((name, i) => (
            <span
              key={i}
              style={{
                fontFamily:    'var(--font-body)',
                fontSize:      '0.7rem',
                fontWeight:    400,
                letterSpacing: '0.25em',
                textTransform: 'uppercase',
                color:         i % 3 === 1 ? 'var(--color-moss-green)' : 'rgba(247,244,213,0.45)',
                whiteSpace:    'nowrap',
              }}
            >
              {name}
            </span>
          ))}
        </div>
      </div>

      {/* ── Quote / Intro ───────────────────────────────────────── */}
      <section
        className="py-24 md:py-32"
        style={{ backgroundColor: 'var(--color-dark-green)' }}
        aria-label="Introduction"
      >
        <div className="max-w-6xl mx-auto px-6 lg:px-8 grid md:grid-cols-12 gap-8 md:gap-16 items-end">
          <div className="md:col-span-8">
            <blockquote
              style={{
                fontFamily:    'var(--font-heading)',
                fontSize:      'clamp(1.5rem, 3.5vw, 2.5rem)',
                fontWeight:    200,
                fontStyle:     'italic',
                color:         'var(--color-beige)',
                lineHeight:    1.4,
                letterSpacing: '-0.01em',
              }}
            >
              &ldquo;Bringing unique stories and characters to life through design.&rdquo;
            </blockquote>
          </div>
          <div className="md:col-span-4 flex flex-col gap-4 items-start md:items-end">
            <div className="rule" style={{ backgroundColor: 'var(--color-rosy-brown)' }} />
            <p
              style={{
                fontFamily:  'var(--font-body)',
                fontSize:    '0.875rem',
                color:       'var(--color-moss-green)',
                lineHeight:  1.6,
                textAlign:   'right',
                maxWidth:    '24ch',
              }}
            >
              Over a decade bringing film, television, and commercial projects to life.
            </p>
            <Link href="/about" className="btn-ghost light mt-2">
              About Makaela <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
