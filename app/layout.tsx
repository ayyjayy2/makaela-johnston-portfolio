import type { Metadata } from "next";
import Nav from "./components/Nav";
import "./globals.css";

export const metadata: Metadata = {
  title: "Makaela Johnston",
  description: "Production Designer & Set Decorator — Chicago-based with a focus in Television, Film, and Commercial work.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full" data-scroll-behavior="smooth">
      <body className="min-h-full flex flex-col antialiased">
        <Nav />
        <main className="flex-1" style={{ paddingTop: '72px' }}>
          {children}
        </main>
      </body>
    </html>
  );
}
