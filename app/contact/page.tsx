import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact — Makaela Johnston',
  description: 'Get in touch with Makaela Johnston for Production Design and Set Decoration inquiries.',
};

const links = [
  {
    label: 'Email',
    value: 'makaela.johnston@gmail.com',
    href: 'https://mail.google.com/mail/?view=cm&to=makaela.johnston@gmail.com',
    external: true,
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="2" y="4" width="20" height="16" rx="2" />
        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
      </svg>
    ),
  },
  {
    label: 'IMDb',
    value: 'Makaela Johnston',
    href: 'https://www.imdb.com/name/nm7471624/',
    external: true,
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M14.31 9.588v.005c-.077-.048-.227-.07-.42-.07v4.815c.27 0 .44-.06.5-.177.062-.117.095-.38.095-.785v-3.168c0-.354-.017-.58-.05-.683a.388.388 0 0 0-.125-.188v.251zM0 7.5v9A1.5 1.5 0 0 0 1.5 18h21a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 22.5 6h-21A1.5 1.5 0 0 0 0 7.5zm4.39.578h1.595v7.844H4.39V8.078zm3.234 0h2.17l.818 3.433.777-3.433h2.17v7.844h-1.352V10.19l-1.023 5.732h-1.18L9.98 10.19v5.732H8.624V8.078zm6.354 0h2.236c.52 0 .908.04 1.166.12.258.08.46.207.607.382.147.175.243.396.29.664.047.268.07.673.07 1.215v2.88c0 .565-.027.972-.082 1.22a1.24 1.24 0 0 1-.31.59 1.19 1.19 0 0 1-.57.318c-.228.06-.56.09-.998.09h-2.41V8.078z"/>
      </svg>
    ),
  },
  {
    label: 'Instagram',
    value: '@heyyheyyitsmj',
    href: 'https://www.instagram.com/heyyheyyitsmj/',
    external: true,
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
      </svg>
    ),
  },
];

export default function Contact() {
  return (
    <div>
      <section
        className="section-dark"
        style={{ paddingTop: 'calc(var(--nav-height) + clamp(3rem, 8vw, 6rem))', paddingBottom: 'clamp(5rem, 12vw, 10rem)' }}
      >
        <div className="container">
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: 'clamp(3rem, 6vw, 5rem)' }}>
            <p className="eyebrow">Contact</p>
            <h1 className="section-title">
              Let&rsquo;s work<br /><em>together</em>
            </h1>
            <div style={{ width: '2.5rem', height: '1px', backgroundColor: 'var(--rosy-brown)' }} />
          </div>

          <div className="contact-links">
            {links.map(({ label, value, href, external, icon }) => (
              <a
                key={label}
                href={href}
                className="contact-link-row"
                {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
              >
                <div className="contact-link-left">
                  <span className="contact-link-icon">{icon}</span>
                  <span className="contact-link-label eyebrow">{label}</span>
                </div>
                <span className="contact-link-value">{value}</span>
                <svg className="contact-link-arrow" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M7 17L17 7M17 7H7M17 7v10" />
                </svg>
              </a>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
