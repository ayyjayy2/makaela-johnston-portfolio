import type { Metadata } from 'next';
import ContactForm from '../components/ContactForm';

export const metadata: Metadata = {
  title: 'Contact — Makaela Johnston',
  description: 'Get in touch with Makaela Johnston for Production Design and Set Decoration inquiries.',
};

export default function Contact() {
  return (
    <div>

      {/* ── Header + Form ───────────────────────────────────────── */}
      <section
        className="section-dark"
        style={{ paddingTop: 'calc(var(--nav-height) + clamp(3rem, 8vw, 6rem))' }}
      >
        <div className="container">
          <div className="contact-grid">

            {/* Left — heading + direct contact */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <p className="eyebrow">Contact</p>
                <h1 className="section-title">
                  Let&rsquo;s work<br /><em>together</em>
                </h1>
                <div style={{ width: '2.5rem', height: '1px', backgroundColor: 'var(--rosy-brown)' }} />
              </div>

              <p className="lead-text" style={{ maxWidth: '36ch' }}>
                Available for Production Design and Set Decoration on television,
                film, and commercial projects. Based in Chicago — open to travel.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', paddingTop: '0.5rem' }}>
                <p className="eyebrow" style={{ marginBottom: '0.25rem' }}>Direct</p>
                <a
                  href="mailto:makaela.johnston@gmail.com"
                  className="contact-email-link"
                >
                  makaela.johnston@gmail.com
                </a>
              </div>
            </div>

            {/* Right — form */}
            <ContactForm />

          </div>
        </div>
      </section>

    </div>
  );
}
