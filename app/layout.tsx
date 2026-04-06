import type { Metadata } from 'next';
import Nav from './components/Nav';
import Footer from './components/Footer';
import './globals.css';

const siteUrl = 'https://makaelajohnston.web.app';
const ogImage = '/assets/home/makaela-hero.png';
const defaultDescription = 'Production Design & Set Decoration — Chicago-based with a focus in Television, Film, and Commercial work.';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Makaela Johnston',
    template: '%s — Makaela Johnston',
  },
  description: defaultDescription,
  keywords: ['Production Design', 'Set Decoration', 'Film', 'Television', 'Commercial', 'Chicago', 'Makaela Johnston', 'Art Department'],
  authors: [{ name: 'Makaela Johnston', url: siteUrl }],
  openGraph: {
    type: 'website',
    siteName: 'Makaela Johnston',
    title: 'Makaela Johnston',
    description: defaultDescription,
    url: siteUrl,
    images: [{ url: ogImage, alt: 'Makaela Johnston — Production Design & Set Decoration' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Makaela Johnston',
    description: defaultDescription,
    images: [ogImage],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <body>
        <Nav />
        <main style={{ paddingTop: 0 }}>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
