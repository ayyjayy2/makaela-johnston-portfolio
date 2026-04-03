'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function HomeHero() {
  return (
    <>
      {/* Hero */}
      <section
        className="relative min-h-screen flex items-center"
        style={{ backgroundColor: 'var(--color-background)' }}
      >
        <div className="max-w-6xl mx-auto px-6 w-full py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">

            {/* Text */}
            <div className="flex flex-col gap-6 order-2 md:order-1">

              {/* Eyebrow */}
              <p style={{
                fontFamily:    'var(--font-body)',
                fontSize:      'var(--text-small)',
                fontWeight:    500,
                letterSpacing: '0.18em',
                textTransform: 'uppercase' as const,
                color:         'var(--color-moss-green)',
              }}>
                Chicago · Film · Television · Commercial
              </p>

              {/* Name */}
              <h1 style={{
                fontFamily:    'var(--font-heading)',
                fontSize:      'var(--text-display)',
                fontWeight:    300,
                lineHeight:    1.05,
                color:         'var(--color-dark-green)',
                letterSpacing: '-0.01em',
              }}>
                Makaela<br />
                <em style={{ fontStyle: 'italic', fontWeight: 400 }}>Johnston</em>
              </h1>

              {/* Divider */}
              <div style={{
                width:           '2.5rem',
                height:          '1px',
                backgroundColor: 'var(--color-rosy-brown)',
                margin:          '0.25rem 0',
              }} />

              {/* Role */}
              <p style={{
                fontFamily:    'var(--font-body)',
                fontSize:      '1.125rem',
                fontWeight:    400,
                color:         'var(--color-text-muted)',
                letterSpacing: '0.02em',
                lineHeight:    1.5,
              }}>
                Production Design<br />&amp; Set Decoration
              </p>

              {/* CTAs */}
              <div className="flex flex-wrap gap-4 mt-4">
                <Link href="/commercial" className="btn-primary cursor-pointer">
                  Commercial
                </Link>
                <Link href="/narrative" className="btn-outline cursor-pointer">
                  Narrative
                </Link>
              </div>
            </div>

            {/* Image */}
            <div className="relative order-1 md:order-2 flex justify-center md:justify-end">
              <div
                className="relative overflow-visible"
                style={{ width: '100%', maxWidth: '420px', aspectRatio: '3/4' }}
              >
                {/* Decorative offset border */}
                <div
                  className="absolute z-0"
                  style={{
                    inset:  0,
                    border: '1px solid var(--color-moss-green)',
                    opacity: 0.5,
                    transform: 'translate(-12px, -12px)',
                  }}
                />
                <div className="relative z-10 w-full h-full overflow-hidden">
                  <Image
                    src="/assets/home/makaela-hero.png"
                    alt="Makaela Johnston — Production Designer & Set Decorator"
                    fill
                    style={{ objectFit: 'cover', objectPosition: 'center top' }}
                    priority
                  />
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Scroll indicator */}
        <div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
          aria-hidden="true"
        >
          <span style={{
            fontFamily:    'var(--font-body)',
            fontSize:      '0.7rem',
            letterSpacing: '0.15em',
            textTransform: 'uppercase' as const,
            color:         'var(--color-moss-green)',
          }}>
            Scroll
          </span>
          <div style={{
            width:           '1px',
            height:          '40px',
            backgroundColor: 'var(--color-moss-green)',
            opacity:         0.6,
          }} />
        </div>
      </section>

      {/* Intro strip */}
      <section className="py-20" style={{ backgroundColor: 'var(--color-dark-green)' }}>
        <div className="max-w-6xl mx-auto px-6">
          <p style={{
            fontFamily: 'var(--font-heading)',
            fontSize:   'clamp(1.25rem, 2.5vw, 1.75rem)',
            fontWeight: 300,
            fontStyle:  'italic',
            color:      'var(--color-beige)',
            lineHeight: 1.6,
            maxWidth:   '52ch',
          }}>
            &ldquo;Passionate about bringing unique stories and characters to life through design.&rdquo;
          </p>
          <div className="mt-8">
            <Link href="/about" className="btn-ghost-light cursor-pointer">
              About Makaela <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
