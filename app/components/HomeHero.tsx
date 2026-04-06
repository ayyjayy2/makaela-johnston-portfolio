import Image from 'next/image';
import Link from 'next/link';

const marqueeItems = [
  { label: 'Netflix',       highlight: false },
  { label: 'Apple TV+',     highlight: true  },
  { label: 'NBC',           highlight: false },
  { label: 'FX · Hulu',    highlight: false },
  { label: 'Amazon Prime',  highlight: true  },
  { label: 'Spotify',       highlight: false },
  { label: 'Chicago Bulls', highlight: true  },
  { label: 'Toyota',        highlight: false },
  // duplicate for seamless loop
  { label: 'Netflix',       highlight: false },
  { label: 'Apple TV+',     highlight: true  },
  { label: 'NBC',           highlight: false },
  { label: 'FX · Hulu',    highlight: false },
  { label: 'Amazon Prime',  highlight: true  },
  { label: 'Spotify',       highlight: false },
  { label: 'Chicago Bulls', highlight: true  },
  { label: 'Toyota',        highlight: false },
];

export default function HomeHero() {
  return (
    <>
      {/* ── Hero ─────────────────────────────────────────────── */}
      <section className="hero" aria-label="Hero">

        {/* Gradient veil — keeps nav readable over photo */}
        <div className="hero-veil" aria-hidden="true" />

        {/* Left — content */}
        <div className="hero-content">
          <p className="hero-eyebrow">Chicago · Film · Television · Commercial</p>

          <h1 className="hero-name">
            Makaela<br />
            <em>Johnston</em>
          </h1>

          <div className="hero-role">
            <div className="hero-role-line" />
            <p className="hero-role-text">Production Design &amp; Set Decoration</p>
          </div>

          <div className="hero-ctas">
            <Link href="/commercial" className="btn-primary">
              Commercial
            </Link>
            <Link href="/narrative" className="btn-ghost">
              Narrative <span aria-hidden="true">→</span>
            </Link>
          </div>

          <div className="hero-scroll" aria-hidden="true">
            <div className="hero-scroll-line" />
            <span className="hero-scroll-label">Scroll</span>
          </div>
        </div>

        {/* Right — photo */}
        <div className="hero-photo">
          <Image
            src="/assets/home/makaela-hero.png"
            alt="Makaela Johnston — Production Design & Set Decoration"
            fill
            style={{ objectFit: 'cover', objectPosition: 'center top' }}
            priority
          />
        </div>
      </section>

      {/* ── Client marquee ────────────────────────────────────── */}
      <div className="marquee-wrap" aria-hidden="true">
        <div className="marquee-track">
          {marqueeItems.map((item, i) => (
            <span
              key={i}
              className={`marquee-item${item.highlight ? ' highlight' : ''}`}
            >
              {item.label}
            </span>
          ))}
        </div>
      </div>

      {/* ── Quote ─────────────────────────────────────────────── */}
      <section className="quote-section" aria-label="Introduction">
        <div className="container">
          <div className="quote-grid">
            <blockquote className="quote-text">
              &ldquo;Bringing unique stories and characters to life through design.&rdquo;
            </blockquote>
            <div className="quote-meta">
              <div className="quote-rule" />
              <p className="quote-sub">
                Over a decade crafting environments for film, television, and commercial productions.
              </p>
              <Link href="/about" className="btn-ghost" style={{ marginTop: '0.5rem' }}>
                About Makaela <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
