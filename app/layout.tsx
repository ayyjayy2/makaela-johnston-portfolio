import type { Metadata } from 'next';
import Nav from './components/Nav';
import Footer from './components/Footer';
import './globals.css';

export const metadata: Metadata = {
  title: 'Makaela Johnston',
  description: 'Production Design & Set Decoration — Chicago-based with a focus in Television, Film, and Commercial work.',
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
