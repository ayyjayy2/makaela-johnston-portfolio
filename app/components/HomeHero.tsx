import Image from 'next/image';


export default function HomeHero() {
  return (
    <>
      {/* ── Hero ─────────────────────────────────────────────── */}
      <section className="hero" aria-label="Hero">

        {/* Gradient veil — keeps nav readable over photo */}
        <div className="hero-veil" aria-hidden="true" />

        {/* Left — content */}
        <div className="hero-content">
          <div className="hero-name-block hero-anim hero-anim-d2">
            <h1 className="hero-name">
              Makaela
              <em>Johnston</em>
            </h1>

            <div className="hero-role hero-anim hero-anim-d3">
              <div className="hero-role-line" />
              <p className="hero-role-text">Production Design &amp; Set Decoration</p>
              <div className="hero-role-line" />
            </div>

            <p className="hero-tagline hero-anim hero-anim-d4">
              Bringing unique stories and characters<br />
              to life through design.
            </p>
          </div>

        </div>

        {/* Right — photo */}
        <div className="hero-photo hero-anim-fade hero-anim-d6">
          <Image
            src="/assets/home/makaela-hero.png"
            alt="Makaela Johnston — Production Design & Set Decoration"
            fill
            className="hero-photo-img"
            priority
          />
        </div>
      </section>

    </>
  );
}
