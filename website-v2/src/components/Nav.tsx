export default function Nav() {
  return (
    <nav className="nav">
      <div className="nav-inner">
        {/* Left: Brand pill */}
        <a href="#" className="nav-brand" aria-label="Habitline Home">
          <img
            src="/habitline-assets/3AsTMGQpJ4jcC8fwNEWoVEO0k.svg"
            alt="Habitline"
            className="nav-brand-logo"
            width="134"
            height="32"
          />
        </a>

        {/* Center: Links pill */}
        <div className="nav-center">
          <div className="nav-links-pill">
            <div className="nav-links">
              <a href="#features" className="nav-link">What&apos;s inside</a>
              <a href="#usecases" className="nav-link">Use case</a>
              <a href="#metrics" className="nav-link">Metrics</a>
              <a href="#ai" className="nav-link">Smart Assist</a>
            </div>
          </div>
        </div>

        {/* Right: Store buttons pill */}
        <div className="nav-right">
          <div className="nav-right-wrap">
            <a
              href="https://www.apple.com/app-store/"
              target="_blank"
              rel="noopener noreferrer"
              className="nav-store-btn"
              aria-label="Download on App Store"
            >
              <img src="/habitline-assets/BZYkl56vzaLH9uCPqEid8uQg9ZE.svg" alt="" width="22" height="22" />
            </a>
            <a
              href="https://play.google.com/store/"
              target="_blank"
              rel="noopener noreferrer"
              className="nav-store-btn"
              aria-label="Get it on Google Play"
            >
              <img src="/habitline-assets/J4VPLNaOdWSrA6fBUpuZ0eLYNAI.svg" alt="" width="22" height="22" />
            </a>
          </div>
        </div>
      </div>
    </nav>
  )
}
