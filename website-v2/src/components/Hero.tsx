export default function Hero() {
  return (
    <section className="hero" id="hero">
      {/* Background: dark base + photo + radial overlay */}
      <div className="hero-bg">
        <img
          src="/habitline-assets/5AAyXsYWLAPDHoR0Qd3rIax2A4.jpg"
          alt=""
          className="hero-bg-photo"
          loading="eager"
        />
        <div className="hero-bg-overlay" />
      </div>

      {/* Content */}
      <div className="hero-inner">
        <div className="hero-content reveal">
          <div className="hero-badge">
            <span className="hero-badge-new">New</span>
            <span className="hero-badge-text">A calmer way to build habits</span>
          </div>
          <h1 className="hero-title">
            Build habits that<br />actually stick
          </h1>
          <p className="hero-desc">
            You see the right habits at the right time<br />
            so your day never feels crowded.
          </p>
          <div className="hero-buttons">
            <a href="#download" className="btn btn-white">Start tracking for free</a>
            <a href="#demo" className="btn btn-ghost-hero">
              <svg width="14" height="16" viewBox="0 0 16 18" fill="currentColor">
                <path d="M15 7.268a2 2 0 010 3.464l-12 6.928A2 2 0 010 15.928V2.072A2 2 0 013 .34l12 6.928z" />
              </svg>
              Watch demo
            </a>
          </div>
        </div>

        {/* Three phone SVG illustrations */}
        <div className="hero-phones reveal">
          <div className="hero-phone hero-phone--left">
            <img src="/habitline-assets/J6tYwRM8iq0YqS6ObBlnUEGwtk.svg" alt="" />
          </div>
          <div className="hero-phone hero-phone--center">
            <img src="/habitline-assets/OGzYNaZSYQsNCwj4a6L79KkrdA.svg" alt="Habitline app" />
          </div>
          <div className="hero-phone hero-phone--right">
            <img src="/habitline-assets/nI2Ch2iiqtacQc0WAW4xJLQicfc.svg" alt="" />
          </div>
        </div>
      </div>

      {/* Blur overlay at bottom — extends beyond container */}
      <div className="hero-blur">
        <img src="/habitline-assets/pUHkyH58LSJDgk8jqtzFiFqUyvY.svg" alt="" />
      </div>

      {/* Bottom fade to page bg */}
      <div className="hero-fade" />
    </section>
  )
}
