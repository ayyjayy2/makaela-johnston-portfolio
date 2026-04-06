import type { Metadata } from 'next';
import Link from 'next/link';
import CreditsFilter from '../components/CreditsFilter';

export const metadata: Metadata = {
  title: 'Resume — Makaela Johnston',
  description: 'Full production credits for Makaela Johnston — Production Designer & Set Decorator with credits on Apple TV+, Netflix, NBC, FX/Hulu, and more.',
};

const credits = [
  {
    title: 'Dark Matter',
    role: 'Art Dept Coordinator / Set Decoration Coordinator',
    studio: 'Apple TV+',
    type: 'Series · S1–S2',
    year: '2024–2025',
    sortYear: 2025,
    category: 'Narrative',
  },
  {
    title: 'Saturn Return',
    role: 'Set Decoration Buyer',
    studio: 'Netflix',
    type: 'Feature Film',
    year: '2025',
    sortYear: 2025,
    category: 'Narrative',
  },
  {
    title: 'Chicago Blackhawks — Night at the United Center',
    role: 'Production Designer',
    studio: 'Chicago Blackhawks',
    type: 'Social Media Commercial',
    year: '2025',
    sortYear: 2025,
    category: 'Commercial',
  },
  {
    title: 'Chicago Fire',
    role: 'Set Decorator',
    studio: 'NBC',
    type: 'Series · Season 12',
    year: '2024',
    sortYear: 2024,
    category: 'Narrative',
  },
  {
    title: 'Chicago Bulls 1966 × Just Don',
    role: 'Production Designer',
    studio: 'Chicago Bulls',
    type: 'Multimedia Ad',
    year: '2023',
    sortYear: 2023,
    category: 'Commercial',
  },
  {
    title: 'Justified: City Primeval',
    role: 'Set Decorator',
    studio: 'FX / Hulu',
    type: 'Limited Series',
    year: '2022',
    sortYear: 2022,
    category: 'Narrative',
  },
  {
    title: 'Light Years',
    role: 'Art Dept Coordinator',
    studio: 'Amazon Prime',
    type: 'Series · S1',
    year: '2021',
    sortYear: 2021,
    category: 'Narrative',
  },
  {
    title: 'Spotify × Jack Harlow',
    role: 'Production Designer',
    studio: 'Spotify',
    type: 'TikTok Ad',
    year: '2021',
    sortYear: 2021,
    category: 'Commercial',
  },
  {
    title: 'A Kernel of Truth: A Benny the Bull Film',
    role: 'Production Designer',
    studio: 'Chicago Bulls',
    type: 'Short Film',
    year: '',
    sortYear: 0,
    category: 'Commercial',
  },
  {
    title: 'The Crab Place — Crab Cake Eggs Benny',
    role: 'Production Designer',
    studio: 'The Crab Place',
    type: 'Commercial',
    year: '',
    sortYear: 0,
    category: 'Commercial',
  },
  {
    title: 'Toyota — Naughty List',
    role: 'Production Designer',
    studio: 'Toyota',
    type: 'Commercial',
    year: '',
    sortYear: 0,
    category: 'Commercial',
  },
].sort((a, b) => b.sortYear - a.sortYear);

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
            <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', gap: '2rem', flexWrap: 'wrap' }}>
              <h1 className="section-title">
                <em>Resume</em>
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

          {/* ── Credits list ─────────────────────────────────────── */}
          <CreditsFilter credits={credits} />
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
