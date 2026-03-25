const testimonials = [
  { text: '"Attent zorgde ervoor dat ik de meest attente persoon in mijn vriendengroep leek. Dat ben ik niet. De app doet gewoon al het werk."', initial: 'M', name: 'Maya Z.', role: 'Student', delay: '' },
  { text: '"Ik negeerde altijd herinneringen van andere apps. Deze voelen alsof een vriend me appt. Ik doe er daadwerkelijk iets mee."', initial: 'E', name: 'Ethan M.', role: 'Sportcoach', delay: 'reveal-delay-1' },
  { text: '"Het is de eerste app die me geen slecht gevoel geeft als ik iets vergeet. Het helpt me gewoon om het op te lossen."', initial: 'H', name: 'Hannah L.', role: 'Contentschrijver', delay: 'reveal-delay-2' },
  { text: '"De cadeaucatalogus alleen al is het waard. Nooit meer \'cadeau voor papa die alles al heeft\' googlen om 23:00."', initial: 'D', name: 'Daniel P.', role: 'Software engineer', delay: '' },
  { text: '"Mijn partner vroeg of ik een persoonlijke assistent had ingehuurd. Nee. Gewoon Attent die z\'n ding doet."', initial: 'K', name: 'Kevin B.', role: 'Fitnesscoach', delay: 'reveal-delay-1' },
  { text: '"Ik ben nu echt consistent met er zijn. Kleine stappen tellen op. Mijn relaties zijn nog nooit zo goed geweest."', initial: 'S', name: 'Sofia M.', role: 'UX researcher', delay: 'reveal-delay-2' },
]

export default function Testimonials() {
  return (
    <section className="section">
      <div className="section-inner">
        <div style={{ textAlign: 'center', marginBottom: 48 }}>
          <div className="section-badge reveal" style={{ margin: '0 auto 24px' }}>Van dichtbij bekeken</div>
          <h2 className="section-title reveal" style={{ maxWidth: 600, margin: '0 auto 8px', textAlign: 'center' }}>Wat mensen zeggen over Attent.</h2>
          <p className="reveal" style={{ fontSize: 14, color: 'var(--text-muted)' }}>4.9 &#9733;&#9733;&#9733;&#9733;&#9733; (vertrouwd door early access gebruikers)</p>
        </div>

        <div className="testimonials-grid">
          {testimonials.map((t) => (
            <div key={t.name} className={`testimonial-card reveal ${t.delay}`}>
              <p className="testimonial-text">{t.text}</p>
              <div className="testimonial-author">
                <div className="testimonial-avatar-placeholder">{t.initial}</div>
                <div>
                  <div className="testimonial-name">{t.name}</div>
                  <div className="testimonial-role">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div style={{ textAlign: 'center', marginTop: 40 }} className="reveal">
          <a href="#" className="btn btn-dark">Bekijk alle reviews</a>
        </div>
      </div>
    </section>
  )
}
