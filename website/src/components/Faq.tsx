const faqs = [
  { q: 'Hoeveel contacten kan ik toevoegen?', a: 'Zoveel als je wilt. Attent groeit mee met je netwerk. Familie, vrienden, collega\'s, je special someone. Voeg ze allemaal toe. Wij houden het bij zodat jij dat niet hoeft.' },
  { q: 'Werken herinneringen op alle apparaten?', a: 'Ja. iPhone, Android, waar je ook bent. Zet notificaties aan en je mist nooit meer iets. Dat is eigenlijk het hele punt.' },
  { q: 'Wat als ik een moment mis?', a: 'Geen schuldgevoel. Attent suggereert een alsnog-gebaar zodat je toch nog er kunt zijn. Beter laat dan nooit, toch? Je streak krijgt misschien een deuk, maar we helpen je een nieuwe te starten.' },
  { q: 'Kan ik cadeaus direct via de app sturen?', a: 'Ja. Onze uitgelezen cadeaucatalogus laat je iets doordachts kiezen en in een paar tikken versturen. Geen generieke cadeaubonnen. Geen sokken. Tenzij ze echt sokken willen.' },
  { q: 'Is Attent gratis?', a: 'De kernervaring is helemaal gratis. Herinneringen, contacten, streaks, alles. Premium features zoals de volledige cadeaucatalogus en AI-suggesties komen met een abonnement. Maar je kunt nu al gratis beginnen met er zijn.' },
]

const PlusIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
    <line x1="12" y1="5" x2="12" y2="19" />
    <line x1="5" y1="12" x2="19" y2="12" />
  </svg>
)

export default function Faq() {
  return (
    <section className="section">
      <div className="section-inner">
        <div className="section-badge reveal">Veelgestelde vragen</div>
        <h2 className="section-title reveal">Veelgestelde vragen.</h2>

        <div className="faq-layout">
          <div className="faq-cta-card reveal">
            <div style={{ width: 48, height: 48, background: 'var(--purple)', borderRadius: 'var(--radius-sm)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 20 }}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="white"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" /></svg>
            </div>
            <h3>Antwoord niet gevonden?</h3>
            <p>We helpen je graag. Neem contact op en we reageren sneller dan je een verjaardag kunt vergeten.</p>
            <a href="#" className="btn btn-dark" style={{ marginTop: 8 }}>Neem contact op</a>
          </div>

          <div className="faq-list">
            {faqs.map((faq) => (
              <div key={faq.q} className="faq-item reveal">
                <button className="faq-question">
                  {faq.q}
                  <span className="faq-icon"><PlusIcon /></span>
                </button>
                <div className="faq-answer">
                  <div className="faq-answer-inner">{faq.a}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
