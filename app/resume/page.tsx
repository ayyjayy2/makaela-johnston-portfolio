import type { Metadata } from 'next';
import Link from 'next/link';
import CreditsFilter from '../components/CreditsFilter';
import DownloadResumeButton from '../components/DownloadResumeButton';
import ScrollReveal from '../components/ScrollReveal';
import { credits } from '../data/resume';

export const metadata: Metadata = {
  title: 'Resume — Makaela Johnston',
  description: 'Full production credits for Makaela Johnston — Production Design & Set Decoration with credits on Apple TV+, Netflix, NBC, FX/Hulu, and more.',
};

export default function Resume() {
  return (
    <div>

      {/* ── Header ─────────────────────────────────────────────── */}
      <section
        className="section-dark"
        style={{ paddingTop: 'calc(var(--nav-height) + clamp(3rem, 8vw, 6rem))' }}
      >
        <div className="container">
          <ScrollReveal>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', paddingBottom: 'clamp(3rem, 6vw, 5rem)' }}>
              <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', gap: '2rem', flexWrap: 'wrap' }}>
                <h1 className="section-title">
                  <em>Resume</em>
                </h1>
                <DownloadResumeButton />
              </div>
              <div style={{ width: '2.5rem', height: '1px', backgroundColor: 'var(--rosy-brown)' }} />
            </div>
          </ScrollReveal>

          {/* ── Credits list ─────────────────────────────────────── */}
          <ScrollReveal delay={100}>
            <CreditsFilter credits={credits} />
          </ScrollReveal>
        </div>
      </section>

      {/* ── CTA ────────────────────────────────────────────────── */}
      <ScrollReveal>
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
      </ScrollReveal>

    </div>
  );
}
