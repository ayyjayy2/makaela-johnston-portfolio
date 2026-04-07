import type { Metadata } from 'next';
import { Archivo, Space_Grotesk } from 'next/font/google';
import Nav from './components/Nav';
import Footer from './components/Footer';
import './globals.css';

const archivo = Archivo({
  subsets: ['latin'],
  variable: '--font-heading',
  weight: ['100', '200', '300', '400', '500', '600', '700'],
  style: ['normal', 'italic'],
  display: 'swap',
});

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-body',
  weight: ['300', '400', '500', '600', '700'],
  display: 'swap',
});

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
    <html lang="en" className={`${archivo.variable} ${spaceGrotesk.variable}`}>
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
