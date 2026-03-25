export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-top">
          <div className="footer-brand">
            <div className="footer-logo">
              <img src="/habitline-assets/3AsTMGQpJ4jcC8fwNEWoVEO0k.svg" alt="Habitline" className="footer-logo-img" />
            </div>
            <p className="footer-tagline">Stay on top of your habits</p>
            <p className="footer-desc">
              Build consistent routines with smart scheduling, gentle reminders, and insights that help you improve over time.
            </p>
            <div className="footer-subscribe">
              <input type="email" placeholder="Enter your email" className="footer-input" />
              <button className="btn btn-dark btn-sm">Subscribe</button>
            </div>
          </div>
          <div className="footer-links-grid">
            <div className="footer-col">
              <h4 className="footer-col-title">Quick links</h4>
              <a href="#features">Features</a>
              <a href="#usecases">Use Cases</a>
              <a href="#reviews">Social proof</a>
              <a href="#metrics">Numbers</a>
              <a href="#ai">AI Suggestions</a>
            </div>
            <div className="footer-col">
              <h4 className="footer-col-title">Pages</h4>
              <a href="#">About</a>
              <a href="#">Waitlist</a>
              <a href="#">Changelog</a>
              <a href="#">Error 404</a>
            </div>
            <div className="footer-col">
              <h4 className="footer-col-title">Support</h4>
              <a href="#">FAQs</a>
              <a href="#">Contact</a>
              <a href="#">Privacy Policy</a>
              <a href="#">Terms &amp; Conditions</a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p className="footer-credit">Designed by Webestica. Powered by Framer</p>
          <div className="footer-socials">
            <a href="#" aria-label="Instagram">
              <img src="/habitline-assets/I7kuXsHoNupDKpXkTcxbdwxo1c.svg" alt="Instagram" width="18" height="18" />
            </a>
            <a href="#" aria-label="LinkedIn">
              <img src="/habitline-assets/COOQGgpm6jSUCi7iId7APipilns.svg" alt="LinkedIn" width="18" height="18" />
            </a>
            <a href="#" aria-label="Facebook">
              <img src="/habitline-assets/bMZF184RX8NMVdedkSoFjeUIk.svg" alt="Facebook" width="18" height="18" />
            </a>
            <a href="#" aria-label="X">
              <img src="/habitline-assets/xA3haEWkHhpeiKLMxOQGOu5jeY.svg" alt="X" width="18" height="18" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
