export default function Hero() {
  return (
    <>
      <section className="hero">
        <div className="hero-bg-image"></div>
        <div className="hero-content">
          <div className="hero-badge">
            <span className="hero-badge-new">Nieuw</span>
            <span className="hero-badge-text">Je brutale accountability partner</span>
          </div>
          <h1 className="hero-title">
            <span className="hero-title-line">Mis nooit meer</span>
            <span className="hero-title-line">
              een{' '}
              <span className="text-cycle" id="heroCycle">
                <span className="text-cycle-word active">verjaardag</span>
                <span className="text-cycle-word">jubileum</span>
                <span className="text-cycle-word">moment</span>
                <span className="text-cycle-word">mijlpaal</span>
                <span className="text-cycle-word">kans</span>
              </span>
            </span>
          </h1>
          <p className="hero-desc">
            Attent herinnert je aan elk moment dat telt voor je dierbaren. En maakt het belachelijk makkelijk om er te zijn.
          </p>
          <div className="hero-buttons">
            <a href="#" className="btn btn-primary">Start gratis</a>
            <a href="#" className="btn btn-ghost">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><polygon points="5,3 19,12 5,21" /></svg>
              Bekijk hoe het werkt
            </a>
          </div>
        </div>

        <div className="hero-phones">
          <div className="phone-mockup phone-mockup-left">
            <div className="phone-screen">
              <div className="phone-status">dinsdag, 25 maart</div>
              <div className="phone-notif">
                <div className="phone-notif-header">
                  <div className="phone-notif-icon">
                    <svg viewBox="0 0 24 24"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" /></svg>
                  </div>
                  <span className="phone-notif-app">Attent</span>
                  <span className="phone-notif-time">nu</span>
                </div>
                <div className="phone-notif-title">Psssst. Jake is over 3 dagen jarig.</div>
                <div className="phone-notif-body">Niet vergeten. Wil je iets sturen?</div>
                <div className="phone-notif-actions">
                  <button className="phone-notif-action phone-notif-action-primary">Stuur een cadeau</button>
                  <button className="phone-notif-action phone-notif-action-secondary">Herinner me later</button>
                </div>
              </div>
              <div className="phone-notif" style={{ opacity: 0.6 }}>
                <div className="phone-notif-header">
                  <div className="phone-notif-icon" style={{ background: 'var(--pink)' }}>
                    <svg viewBox="0 0 24 24"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" /></svg>
                  </div>
                  <span className="phone-notif-app">Attent</span>
                  <span className="phone-notif-time">2u geleden</span>
                </div>
                <div className="phone-notif-title">Date night deze vrijdag.</div>
                <div className="phone-notif-body">Je ouders zijn donderdag jarig getrouwd. Wat sturen we?</div>
              </div>
            </div>
          </div>

          <div className="phone-mockup phone-mockup-center">
            <div className="phone-screen" style={{ background: 'var(--cream)', paddingTop: 52 }}>
              <div style={{ textAlign: 'center', marginBottom: 16 }}>
                <div style={{ fontFamily: 'Sora', fontSize: 18, fontWeight: 600, color: 'var(--ink)' }}>Aankomende momenten</div>
                <div style={{ fontSize: 13, color: 'var(--text-muted)', marginTop: 4 }}>maart 2026</div>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                <div style={{ background: 'rgba(109,46,255,0.08)', borderRadius: 12, padding: 14, display: 'flex', alignItems: 'center', gap: 10 }}>
                  <div style={{ width: 36, height: 36, borderRadius: '50%', background: 'var(--purple)', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 14, fontWeight: 600, flexShrink: 0 }}>J</div>
                  <div>
                    <div style={{ fontSize: 14, fontWeight: 600, color: 'var(--ink)' }}>Jake's verjaardag</div>
                    <div style={{ fontSize: 12, color: 'var(--text-muted)' }}>over 3 dagen &middot; cadeau klaar</div>
                  </div>
                  <div style={{ marginLeft: 'auto', width: 8, height: 8, borderRadius: '50%', background: 'var(--purple)' }}></div>
                </div>
                <div style={{ background: 'rgba(255,162,255,0.1)', borderRadius: 12, padding: 14, display: 'flex', alignItems: 'center', gap: 10 }}>
                  <div style={{ width: 36, height: 36, borderRadius: '50%', background: 'var(--pink)', color: 'var(--ink)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 14, fontWeight: 600, flexShrink: 0 }}>M</div>
                  <div>
                    <div style={{ fontSize: 14, fontWeight: 600, color: 'var(--ink)' }}>Trouwdag papa &amp; mama</div>
                    <div style={{ fontSize: 12, color: 'var(--text-muted)' }}>donderdag &middot; actie nodig</div>
                  </div>
                </div>
                <div style={{ background: 'rgba(0,255,128,0.08)', borderRadius: 12, padding: 14, display: 'flex', alignItems: 'center', gap: 10 }}>
                  <div style={{ width: 36, height: 36, borderRadius: '50%', background: 'var(--green)', color: 'var(--ink)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 14, fontWeight: 600, flexShrink: 0 }}>S</div>
                  <div>
                    <div style={{ fontSize: 14, fontWeight: 600, color: 'var(--ink)' }}>Sarah's promotie</div>
                    <div style={{ fontSize: 12, color: 'var(--text-muted)' }}>volgende week &middot; feliciteer haar</div>
                  </div>
                </div>
                <div style={{ background: 'rgba(12,12,34,0.03)', borderRadius: 12, padding: 14, display: 'flex', alignItems: 'center', gap: 10 }}>
                  <div style={{ width: 36, height: 36, borderRadius: '50%', background: 'var(--cyan)', color: 'var(--ink)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 14, fontWeight: 600, flexShrink: 0 }}>L</div>
                  <div>
                    <div style={{ fontSize: 14, fontWeight: 600, color: 'var(--ink)' }}>Lisa's afstuderen</div>
                    <div style={{ fontSize: 12, color: 'var(--text-muted)' }}>2 apr &middot; nog 8 dagen</div>
                  </div>
                </div>
              </div>
              <div style={{ marginTop: 16, textAlign: 'center', padding: 10, background: 'rgba(109,46,255,0.06)', borderRadius: 12 }}>
                <div style={{ fontFamily: 'Sora', fontSize: 12, fontWeight: 600, color: 'var(--purple)' }}>14 dagen streak</div>
                <div style={{ fontSize: 11, color: 'var(--text-muted)' }}>Je bent lekker bezig. Blijf er zijn.</div>
              </div>
            </div>
          </div>

          <div className="phone-mockup phone-mockup-right">
            <div className="phone-screen">
              <div className="phone-status">Cadeaucatalogus</div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 10, paddingTop: 8 }}>
                <div style={{ background: 'rgba(255,248,238,0.06)', borderRadius: 14, overflow: 'hidden' }}>
                  <div style={{ height: 120, background: 'linear-gradient(135deg, var(--purple), var(--pink))', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <span style={{ fontSize: 40 }}>&#127873;</span>
                  </div>
                  <div style={{ padding: 12 }}>
                    <div style={{ fontSize: 13, fontWeight: 600, color: 'rgba(255,248,238,0.9)' }}>Persoonlijk fotoboek</div>
                    <div style={{ fontSize: 12, color: 'rgba(255,248,238,0.4)' }}>vanaf &#8364;24,99</div>
                  </div>
                </div>
                <div style={{ background: 'rgba(255,248,238,0.06)', borderRadius: 14, overflow: 'hidden' }}>
                  <div style={{ height: 80, background: 'linear-gradient(135deg, var(--cyan), var(--green))', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <span style={{ fontSize: 32 }}>&#128144;</span>
                  </div>
                  <div style={{ padding: 12 }}>
                    <div style={{ fontSize: 13, fontWeight: 600, color: 'rgba(255,248,238,0.9)' }}>Verse bloemen bezorgd</div>
                    <div style={{ fontSize: 12, color: 'rgba(255,248,238,0.4)' }}>vanaf &#8364;34,99</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Scroll indicator */}
      <div style={{ display: 'flex', justifyContent: 'center', padding: '40px 0' }}>
        <div style={{ width: 1, height: 48, background: 'linear-gradient(to bottom, var(--text-muted), transparent)', opacity: 0.3 }}></div>
      </div>
    </>
  )
}
