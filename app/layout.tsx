import type { Metadata } from "next";
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
    <html lang="en" className="h-full">
      <body className="min-h-full flex flex-col antialiased">
        {children}
      </body>
    </html>
  );
}
