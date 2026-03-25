const images = [
  { src: '/images/4a9ceee3172674a92409e3b920a9d6e1.jpg', name: 'Sara', role: 'Drukke ouder', desc: 'Nooit meer een verjaardag gemist sinds ze Attent downloadde. 42-dagen streak.' },
  { src: '/images/67fa9e9ddaa33405f186fae1107ab8b9.jpg', name: 'Leo', role: 'Creatieve professional', desc: 'Stuurde deze maand doordachte cadeaus naar 8 vrienden.' },
  { src: '/images/248777c5c404051722dd831a52821412.jpg', name: 'Ramya', role: 'Software developer', desc: 'Houdt haar familiemomenten georganiseerd zonder moeite.' },
  { src: '/images/90fa8e09482c7ff359193c2fbf425ab5.jpg', name: 'Maya', role: 'Student', desc: '21 dagen streak. Haar vriendengroep is onder de indruk.' },
  { src: '/images/b7a860aeef1802877d260bc335c31bb9.jpg', name: 'Daniel', role: 'Founder', desc: '87% meer attent in vergelijking met vorig jaar.' },
  { src: '/images/ebea52536f2a43b9705e6832cc234ab7.jpg', name: 'Aaron', role: 'Remote engineer', desc: 'Stopt met momenten missen sinds hij Attent gebruikt.' },
]

export default function Metrics() {
  const allCards = [...images, ...images]

  return (
    <section className="section" id="metrics">
      <div className="section-inner">
        <div style={{ textAlign: 'center', marginBottom: 48 }}>
          <div className="section-badge reveal" style={{ margin: '0 auto 24px' }}>Vertrouwde early adopters</div>
          <h2 className="section-title reveal" style={{ maxWidth: 600, margin: '0 auto', textAlign: 'center' }}>Wat mensen bereiken met Attent.</h2>
        </div>
      </div>
      <div style={{ overflow: 'hidden', width: '100%' }}>
        <div className="proof-carousel">
          {allCards.map((card, i) => (
            <div key={i} className="proof-card-img">
              <img src={card.src} alt={card.name} loading="lazy" />
              <div className="proof-overlay">
                <div style={{ fontFamily: 'Sora', fontSize: 14, fontWeight: 600 }}>{card.name} &middot; {card.role}</div>
                <div style={{ fontSize: 14, lineHeight: 1.4, marginTop: 8, color: 'rgba(255,255,255,0.85)' }}>{card.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
