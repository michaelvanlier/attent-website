export default function AiSection() {
  return (
    <section className="section" id="ai">
      <div className="section-inner">
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 60, alignItems: 'center', marginBottom: 80 }}>
          <div>
            <div className="section-badge reveal">Slimmer er zijn</div>
            <h2 className="section-title reveal">AI-suggesties die zich aanpassen aan jouw dag.</h2>
            <p className="section-desc reveal">Attent leert je patronen en biedt kleine, nuttige suggesties die je helpen om consistent te zijn. Zonder te hoeven nadenken over wat je moet doen.</p>
            <div className="reveal" style={{ marginTop: 32 }}>
              <a href="#" className="btn btn-dark">Ontdek hoe het werkt</a>
            </div>
          </div>
          <div style={{ position: 'relative', minHeight: 500 }}>
            <div style={{ width: 280, height: 540, background: 'var(--ink)', borderRadius: 36, boxShadow: '0 20px 60px rgba(0,0,0,0.15)', overflow: 'hidden', marginLeft: 'auto', position: 'relative' }}>
              <div style={{ padding: '48px 20px 20px', display: 'flex', flexDirection: 'column', gap: 12 }}>
                <div style={{ textAlign: 'center', padding: 8 }}>
                  <div style={{ fontFamily: 'Sora', fontSize: 11, color: 'rgba(255,248,238,0.4)' }}>Vandaag</div>
                </div>
                <div style={{ background: 'rgba(109,46,255,0.12)', borderRadius: 14, padding: 14 }}>
                  <div style={{ fontSize: 13, fontWeight: 600, color: 'rgba(255,248,238,0.9)' }}>&#127874; Mama bellen</div>
                  <div style={{ fontSize: 11, color: 'rgba(255,248,238,0.4)', marginTop: 2 }}>Verjaardag morgen &middot; AI suggestie</div>
                </div>
                <div style={{ background: 'rgba(0,255,128,0.08)', borderRadius: 14, padding: 14 }}>
                  <div style={{ fontSize: 13, fontWeight: 600, color: 'rgba(255,248,238,0.9)' }}>&#9989; Ochtendwandeling</div>
                  <div style={{ fontSize: 11, color: 'rgba(255,248,238,0.4)', marginTop: 2 }}>Voltooid om 7:18</div>
                </div>
                <div style={{ background: 'rgba(255,248,238,0.04)', borderRadius: 14, padding: 14 }}>
                  <div style={{ fontSize: 13, fontWeight: 600, color: 'rgba(255,248,238,0.9)' }}>&#128144; Bloemen voor Emma</div>
                  <div style={{ fontSize: 11, color: 'rgba(255,248,238,0.4)', marginTop: 2 }}>Trouwdag over 3 dagen</div>
                </div>
              </div>
            </div>
            <div className="ai-float-card" style={{ position: 'absolute', top: 60, left: 0, background: 'var(--raised)', borderRadius: 16, padding: '16px 20px', boxShadow: 'var(--shadow-float)', maxWidth: 240 }}>
              <div style={{ fontSize: 14, fontWeight: 500, color: 'var(--text-primary)' }}>Verplaats bellen naar 19:00</div>
              <div style={{ marginTop: 8 }}><span style={{ display: 'inline-block', padding: '4px 12px', background: 'var(--purple)', color: 'white', borderRadius: 999, fontSize: 12, fontWeight: 500, cursor: 'pointer' }}>Toepassen</span></div>
            </div>
            <div className="ai-float-card" style={{ position: 'absolute', top: 220, left: -20, background: 'var(--raised)', borderRadius: 16, padding: '16px 20px', boxShadow: 'var(--shadow-float)', maxWidth: 260 }}>
              <div style={{ fontSize: 14, fontWeight: 500, color: 'var(--text-primary)' }}>Combineer met "bloemen kopen"</div>
              <div style={{ marginTop: 8 }}><span style={{ display: 'inline-block', padding: '4px 12px', background: 'rgba(12,12,34,0.06)', color: 'var(--text-body)', borderRadius: 999, fontSize: 12, fontWeight: 500 }}>Probeer deze week</span></div>
            </div>
            <div className="ai-float-card" style={{ position: 'absolute', bottom: 100, left: 20, background: 'var(--raised)', borderRadius: 16, padding: '16px 20px', boxShadow: 'var(--shadow-float)', maxWidth: 260 }}>
              <div style={{ fontSize: 14, fontWeight: 500, color: 'var(--text-primary)' }}>Verkort wachttijd naar 2 dagen</div>
              <div style={{ marginTop: 8 }}><span style={{ display: 'inline-block', padding: '4px 12px', background: 'rgba(12,12,34,0.06)', color: 'var(--text-body)', borderRadius: 999, fontSize: 12, fontWeight: 500 }}>Probeer deze week</span></div>
            </div>
          </div>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 20 }}>
          {[
            { emoji: '\uD83D\uDD14', bg: 'rgba(109,46,255,0.1)', title: 'Slimme timing', desc: 'Stelt het beste moment voor om je te herinneren.' },
            { emoji: '\uD83D\uDCCB', bg: 'rgba(255,77,77,0.1)', title: 'Prioriteiten', desc: 'Herschikt momenten op drukke dagen.' },
            { emoji: '\uD83D\uDCCA', bg: 'rgba(109,46,255,0.1)', title: 'Inzichten', desc: 'Laat zien wat werkt en wat beter kan.' },
            { emoji: '\uD83D\uDCA1', bg: 'rgba(0,255,128,0.1)', title: 'Herstel suggestie', desc: 'Helpt je herstellen als je een dag mist.' },
          ].map((card) => (
            <div key={card.title} style={{ background: 'var(--raised)', borderRadius: 'var(--radius-md)', padding: 32, boxShadow: 'var(--shadow-card)' }}>
              <div style={{ width: 48, height: 48, borderRadius: '50%', background: card.bg, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 80, fontSize: 24 }}>{card.emoji}</div>
              <h4 style={{ fontFamily: 'Sora', fontSize: 18, fontWeight: 600, marginBottom: 8 }}>{card.title}</h4>
              <p style={{ fontSize: 14, color: 'var(--text-body)', lineHeight: 1.5 }}>{card.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
