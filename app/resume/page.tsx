import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Resume — Makaela Johnston',
  description: 'Full production credits for Makaela Johnston — Production Designer & Set Decorator with credits on Apple TV+, Netflix, NBC, FX/Hulu, and more.',
};

const narrativeCredits = [
  {
    title: 'Dark Matter',
    role: 'Art Dept Coordinator / Set Decoration Coordinator',
    studio: 'Apple TV+',
    type: 'Series · S1–S2',
    year: '2024–2025',
  },
  {
    title: 'Saturn Return',
    role: 'Set Decoration Buyer',
    studio: 'Netflix',
    type: 'Feature Film',
    year: '2025',
  },
  {
    title: 'Chicago Fire',
    role: 'Set Decorator',
    studio: 'NBC',
    type: 'Series · Season 12',
    year: '2024',
  },
  {
    title: 'Justified: City Primeval',
    role: 'Set Decorator',
    studio: 'FX / Hulu',
    type: 'Limited Series',
    year: '2022',
  },
  {
    title: 'Light Years',
    role: 'Art Dept Coordinator',
    studio: 'Amazon Prime',
    type: 'Series · S1',
    year: '2021',
  },
];

const commercialCredits = [
  {
    title: 'Spotify × Jack Harlow',
    role: 'Production Designer',
    studio: 'Spotify',
    type: 'TikTok Ad',
    year: '2021',
  },
  {
    title: 'Chicago Blackhawks — Night at the United Center',
    role: 'Production Designer',
    studio: 'Chicago Blackhawks',
    type: 'Social Media Commercial',
    year: '2025',
  },
  {
    title: 'Chicago Bulls 1966 × Just Don',
    role: 'Production Designer',
    studio: 'Chicago Bulls',
    type: 'Multimedia Ad',
    year: '2023',
  },
  {
    title: 'A Kernel of Truth: A Benny the Bull Film',
    role: 'Production Designer',
    studio: 'Chicago Bulls',
    type: 'Short Film',
    year: '',
  },
  {
    title: 'The Crab Place — Crab Cake Eggs Benny',
    role: 'Production Designer',
    studio: 'The Crab Place',
    type: 'Commercial',
    year: '',
  },
  {
    title: 'Toyota — Naughty List',
    role: 'Production Designer',
    studio: 'Toyota',
    type: 'Commercial',
    year: '',
  },
];

export default function Resume() {
  return (
    <div>

      {/* ── Header ─────────────────────────────────────────────── */}
      <section
        className="section-dark"
        style={{ paddingTop: 'calc(var(--nav-height) + clamp(3rem, 8vw, 6rem))' }}
      >
        <div className="container">
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', paddingBottom: 'clamp(3rem, 6vw, 5rem)' }}>
            <p className="eyebrow">Resume</p>
            <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', gap: '2rem', flexWrap: 'wrap' }}>
              <h1 className="section-title">
                Production<br /><em>Credits</em>
              </h1>
              <a
                href="/assets/resume.pdf"
                download
                className="btn-outline"
                aria-label="Download resume PDF"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                  <polyline points="7 10 12 15 17 10" />
                  <line x1="12" y1="15" x2="12" y2="3" />
                </svg>
                Download PDF
              </a>
            </div>
            <div style={{ width: '2.5rem', height: '1px', backgroundColor: 'var(--rosy-brown)' }} />
          </div>
        </div>
      </section>

      {/* ── Narrative Credits ───────────────────────────────────── */}
      <section className="section-dark" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="credits-header">
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <p className="eyebrow">Television &amp; Film</p>
              <h2 className="section-title" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}>
                Narrative Work
              </h2>
            </div>
          </div>

          <div>
            {narrativeCredits.map((credit) => (
              <div key={credit.title} className="credit-row">
                <div>
                  <p className="credit-title">{credit.title}</p>
                  <p className="credit-role">{credit.role}</p>
                </div>
                <div className="credit-meta">
                  {credit.year && (
                    <span className="credit-type">{credit.year}</span>
                  )}
                  <span className="credit-type">{credit.type}</span>
                  <span className="credit-studio">{credit.studio}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Commercial Credits ──────────────────────────────────── */}
      <section className="section-mid">
        <div className="container">
          <div className="credits-header">
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <p className="eyebrow">Brand &amp; Advertisement</p>
              <h2 className="section-title" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}>
                Commercial Work
              </h2>
            </div>
          </div>

          <div>
            {commercialCredits.map((credit) => (
              <div key={credit.title} className="credit-row">
                <div>
                  <p className="credit-title">{credit.title}</p>
                  <p className="credit-role">{credit.role}</p>
                </div>
                <div className="credit-meta">
                  {credit.year && (
                    <span className="credit-type">{credit.year}</span>
                  )}
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
