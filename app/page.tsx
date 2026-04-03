export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center gap-6 p-8">
      <h1 style={{ fontFamily: "var(--font-heading)", fontSize: "var(--text-display)", color: "var(--color-dark-green)" }}>
        Makaela Johnston
      </h1>
      <p style={{ fontFamily: "var(--font-body)", color: "var(--color-text-muted)" }}>
        Production Design &amp; Set Decoration
      </p>
      <div className="flex gap-4 flex-wrap justify-center mt-8">
        {[
          ["Dark Green",     "#0A3323", "var(--color-dark-green)"],
          ["Moss Green",     "#839958", "var(--color-moss-green)"],
          ["Beige",          "#F7F4D5", "var(--color-beige)"],
          ["Rosy Brown",     "#D3968C", "var(--color-rosy-brown)"],
          ["Midnight Green", "#105666", "var(--color-midnight-green)"],
        ].map(([name, hex, cssVar]) => (
          <div key={hex} className="flex flex-col items-center gap-2">
            <div
              className="w-16 h-16 rounded-full border border-black/10"
              style={{ backgroundColor: cssVar as string }}
            />
            <span style={{ fontFamily: "var(--font-body)", fontSize: "var(--text-small)", color: "var(--color-text-primary)" }}>
              {name}
            </span>
            <span style={{ fontFamily: "var(--font-body)", fontSize: "var(--text-small)", color: "var(--color-text-muted)" }}>
              {hex}
            </span>
          </div>
        ))}
      </div>
    </main>
  );
}
