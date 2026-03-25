export default function Features() {
  return (
    <section className="section" id="features">
      <div className="section-inner">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: 60, marginBottom: 20 }}>
          <div>
            <div className="section-badge reveal">Hoe het werkt</div>
            <h2 className="section-title reveal" style={{ maxWidth: 500 }}>Alles wat je nodig hebt om de meest attente persoon te zijn.</h2>
          </div>
          <p className="section-desc reveal" style={{ marginTop: 40 }}>Attent brengt helderheid in je relaties met slimme herinneringen, realistische planning en begeleiding die zich aanpast aan jouw dag.</p>
        </div>

        <div className="features-grid">

          {/* Card 1: Slimme tijdlijn + Streaks */}
          <div className="feature-card reveal" style={{ background: 'var(--surface)' }}>
            <div className="feature-card-content">
              <h3>Slimme tijdlijn</h3>
              <p>Bouw eerlijke streaks die echte betrokkenheid weerspiegelen. Mis een dag? Geen stress.</p>
            </div>
            <div style={{ padding: '0 28px', flex: 1, display: 'flex', flexDirection: 'column', gap: 12 }}>
              <div style={{ background: 'var(--raised)', borderRadius: 20, padding: 24, textAlign: 'center', boxShadow: '0 4px 20px rgba(12,12,34,0.06)' }}>
                <div style={{ fontSize: 48, marginBottom: 8, lineHeight: 1 }}>&#128293;</div>
                <div style={{ fontFamily: 'Sora', fontSize: 22, fontWeight: 700, color: 'var(--text-primary)', marginBottom: 4 }}>28 dagen streak</div>
                <div style={{ fontSize: 13, color: 'var(--text-muted)', marginBottom: 16 }}>Bouw streaks die echte betrokkenheid laten zien</div>
                <div style={{ display: 'flex', justifyContent: 'center', gap: 6, overflow: 'hidden' }}>
                  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 4, opacity: 0.4 }}>
                    <div style={{ width: 36, height: 36, borderRadius: '50%', background: 'rgba(12,12,34,0.08)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'Sora', fontSize: 12, fontWeight: 600, color: 'var(--text-muted)' }}>22</div>
                    <span style={{ fontSize: 9, color: 'var(--text-muted)' }}>Za</span>
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 4 }}>
                    <div style={{ width: 36, height: 36, borderRadius: '50%', background: '#FF6B35', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="white"><path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" /></svg>
                    </div>
                    <span style={{ fontSize: 9, color: 'var(--text-muted)' }}>Ma</span>
                  </div>
                  {[
                    { num: '13', day: 'Di' },
                    { num: '14', day: 'Wo' },
                    { num: '15', day: 'Do' },
                    { num: '16', day: 'Vr' },
                  ].map((d) => (
                    <div key={d.day} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 4 }}>
                      <div style={{ width: 36, height: 36, borderRadius: '50%', background: 'var(--ink)', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative', fontFamily: 'Sora', fontSize: 12, fontWeight: 600 }}>
                        {d.num}
                        <div style={{ position: 'absolute', top: -2, right: -2, width: 14, height: 14, borderRadius: '50%', background: 'var(--green)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                          <svg width="8" height="8" viewBox="0 0 24 24" fill="white"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" /></svg>
                        </div>
                      </div>
                      <span style={{ fontSize: 9, color: 'var(--text-muted)' }}>{d.day}</span>
                    </div>
                  ))}
                  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 4, opacity: 0.3 }}>
                    <div style={{ width: 36, height: 36, borderRadius: '50%', background: 'rgba(12,12,34,0.08)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'Sora', fontSize: 12, fontWeight: 600, color: 'var(--text-muted)' }}>17</div>
                    <span style={{ fontSize: 9, color: 'var(--text-muted)' }}>Za</span>
                  </div>
                </div>
              </div>
            </div>
            {/* Infinite carousel at bottom */}
            <div style={{ overflow: 'hidden', padding: '16px 0 28px', margin: '0 -1px' }}>
              <div style={{ display: 'flex', gap: 10, width: 'max-content', animation: 'streakCarousel 20s linear infinite' }}>
                {[...Array(2)].map((_, setIdx) => (
                  <div key={setIdx} style={{ display: 'contents' }}>
                    {[
                      { bg: 'var(--green)', icon: 'check', label: 'Rustdag tegoed' },
                      { bg: 'var(--purple)', icon: 'circle-check', label: 'Streak pauzeren' },
                      { bg: '#FF6B35', icon: 'send', label: 'Reismodus actief' },
                      { bg: 'var(--pink)', icon: 'star', label: 'Streak hersteld' },
                    ].map((item) => (
                      <div key={`${setIdx}-${item.label}`} style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '10px 18px', background: 'var(--raised)', borderRadius: 999, whiteSpace: 'nowrap', boxShadow: '0 2px 10px rgba(12,12,34,0.05)' }}>
                        <div style={{ width: 24, height: 24, borderRadius: '50%', background: item.bg, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                          {item.icon === 'check' && <svg width="12" height="12" viewBox="0 0 24 24" fill="white"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" /></svg>}
                          {item.icon === 'circle-check' && <svg width="12" height="12" viewBox="0 0 24 24" fill="white"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" /></svg>}
                          {item.icon === 'send' && <svg width="12" height="12" viewBox="0 0 24 24" fill="white"><path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" /></svg>}
                          {item.icon === 'star' && <svg width="12" height="12" viewBox="0 0 24 24" fill="var(--ink)"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" /></svg>}
                        </div>
                        <span style={{ fontSize: 12, fontWeight: 600, color: 'var(--text-primary)' }}>{item.label}</span>
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Card 2: Dagelijkse planner */}
          <div className="feature-card reveal">
            <div className="feature-card-content">
              <h3>Dagelijkse planner</h3>
              <p>Een simpel overzicht dat alleen laat zien wat vandaag relevant is.</p>
            </div>
            <div style={{ padding: '0 28px 28px', flex: 1, display: 'flex', flexDirection: 'column', gap: 12 }}>
              <div style={{ background: 'rgba(109,46,255,0.04)', borderRadius: 16, padding: 16, border: '1px solid rgba(109,46,255,0.06)' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 10 }}>
                  <div>
                    <span style={{ fontFamily: 'Sora', fontSize: 16, fontWeight: 600, color: 'var(--text-primary)' }}>Goedemorgen!</span>
                    <div style={{ fontSize: 12, color: 'var(--text-muted)', marginTop: 2 }}>dinsdag 25 maart</div>
                  </div>
                  <div style={{ padding: '4px 12px', background: 'var(--purple)', color: 'white', borderRadius: 999, fontSize: 11, fontWeight: 600 }}>15%</div>
                </div>
                <div style={{ width: '100%', height: 4, background: 'rgba(12,12,34,0.06)', borderRadius: 999, overflow: 'hidden' }}>
                  <div style={{ width: '15%', height: '100%', background: 'var(--purple)', borderRadius: 999 }}></div>
                </div>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
                {[
                  { color: 'var(--purple)', time: '10:00', text: 'Mama bellen', tag: 'Verjaardag', tagColor: 'var(--purple)', tagBg: 'rgba(109,46,255,0.08)' },
                  { color: 'var(--pink)', time: '14:00', text: 'Bloemen bestellen', tag: 'Trouwdag', tagColor: 'var(--pink)', tagBg: 'rgba(255,162,255,0.08)' },
                  { color: 'var(--green)', time: '17:00', text: 'Sarah feliciteren', tag: 'Promotie', tagColor: 'var(--green)', tagBg: 'rgba(0,255,128,0.08)' },
                  { color: 'var(--teal)', time: '20:00', text: 'Kaart schrijven', tag: 'Voor opa', tagColor: 'var(--teal)', tagBg: 'rgba(45,155,155,0.08)' },
                ].map((item) => (
                  <div key={item.time} style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '10px 14px', background: 'rgba(12,12,34,0.02)', borderRadius: 12, border: '1px solid rgba(12,12,34,0.04)' }}>
                    <div style={{ width: 20, height: 20, borderRadius: 6, border: `2px solid ${item.color}`, flexShrink: 0 }}></div>
                    <span style={{ fontSize: 13, color: 'var(--text-muted)', minWidth: 36 }}>{item.time}</span>
                    <span style={{ fontSize: 13, fontWeight: 500, color: 'var(--text-primary)', flex: 1 }}>{item.text}</span>
                    <span style={{ fontSize: 11, color: item.tagColor, background: item.tagBg, padding: '2px 8px', borderRadius: 999 }}>{item.tag}</span>
                  </div>
                ))}
              </div>
              <div style={{ background: 'rgba(109,46,255,0.06)', borderRadius: 12, padding: '10px 14px', border: '1px dashed rgba(109,46,255,0.2)', display: 'flex', alignItems: 'center', gap: 8 }}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="var(--purple)"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z" /></svg>
                <span style={{ fontSize: 11, color: 'var(--purple)', fontWeight: 500 }}>AI suggestie: Verplaats bellen naar 19:00 (rustigere periode)</span>
              </div>
            </div>
          </div>

          {/* Card 3: Mensen & momenten (full width) */}
          <div className="feature-card feature-card-full reveal" style={{ flexDirection: 'row', minHeight: 500, background: 'var(--raised)' }}>
            <div className="feature-card-content" style={{ flex: '0 0 38%', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
              <h3>Mensen &amp; momenten</h3>
              <p>Al je belangrijke mensen op een plek. Met alles wat je nodig hebt om er voor ze te zijn.</p>
              <a href="#" className="btn btn-dark" style={{ marginTop: 20, display: 'inline-flex', alignSelf: 'flex-start' }}>Voeg je eerste persoon toe</a>
            </div>
            <div style={{ flex: 1, padding: 28, display: 'flex', flexDirection: 'column', gap: 14 }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
                {[
                  { bg: 'rgba(0,255,128,0.1)', border: 'rgba(0,255,128,0.12)', avatarBg: 'var(--green)', avatarColor: 'var(--ink)', initial: 'M', name: 'Mama', role: 'Moeder', dots: [{ color: 'var(--purple)', text: 'Verjaardag over 3d' }, { color: 'var(--green)', text: 'Cadeau: fotoboek klaar' }] },
                  { bg: 'rgba(255,162,255,0.1)', border: 'rgba(255,162,255,0.12)', avatarBg: 'var(--pink)', avatarColor: 'var(--ink)', initial: 'E', name: 'Emma', role: 'Vriendin', dots: [{ color: 'var(--pink)', text: 'Trouwdag 12 apr' }, { color: 'rgba(12,12,34,0.2)', text: 'Bloemen bezorgen' }] },
                  { bg: 'rgba(109,46,255,0.1)', border: 'rgba(109,46,255,0.12)', avatarBg: 'var(--purple)', avatarColor: 'white', initial: 'J', name: 'Jake', role: 'Beste vriend', dots: [{ color: 'var(--purple)', text: 'Jarig 28 maart' }, { color: 'var(--green)', text: '42 dagen streak' }] },
                  { bg: 'rgba(232,255,60,0.08)', border: 'rgba(232,255,60,0.12)', avatarBg: 'var(--yellow)', avatarColor: 'var(--ink)', initial: 'O', name: 'Opa Henk', role: 'Grootvader', dots: [{ color: 'var(--teal)', text: 'Bel volgende week' }, { color: 'rgba(12,12,34,0.2)', text: 'Kaart sturen' }] },
                ].map((person) => (
                  <div key={person.name} style={{ background: person.bg, borderRadius: 18, padding: 16, border: `1px solid ${person.border}` }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 10 }}>
                      <div style={{ width: 40, height: 40, borderRadius: '50%', background: person.avatarBg, color: person.avatarColor, display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'Sora', fontWeight: 700, fontSize: 16 }}>{person.initial}</div>
                      <div>
                        <div style={{ fontFamily: 'Sora', fontSize: 15, fontWeight: 600, color: 'var(--text-primary)' }}>{person.name}</div>
                        <div style={{ fontSize: 11, color: 'var(--text-muted)' }}>{person.role}</div>
                      </div>
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
                      {person.dots.map((dot) => (
                        <div key={dot.text} style={{ fontSize: 11, color: 'var(--text-body)', display: 'flex', alignItems: 'center', gap: 4 }}>
                          <div style={{ width: 6, height: 6, borderRadius: '50%', background: dot.color }}></div>
                          {dot.text}
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8, padding: 12, border: '2px dashed rgba(12,12,34,0.08)', borderRadius: 14, cursor: 'pointer' }}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--text-muted)" strokeWidth="2"><line x1="12" y1="5" x2="12" y2="19" /><line x1="5" y1="12" x2="19" y2="12" /></svg>
                <span style={{ fontSize: 12, color: 'var(--text-muted)', fontWeight: 500 }}>Voeg nog iemand toe</span>
              </div>
            </div>
          </div>

          {/* Card 4: Wekelijks overzicht */}
          <div className="feature-card reveal" style={{ background: 'var(--raised)' }}>
            <div className="feature-card-content">
              <h3>Wekelijks overzicht</h3>
              <p>Een helder overzicht van je week. Wat je gedaan hebt en wat er nog aankomt.</p>
            </div>
            <div style={{ padding: '0 28px 28px', flex: 1, display: 'flex', flexDirection: 'column', gap: 14 }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div style={{ fontFamily: 'Sora', fontSize: 14, fontWeight: 600, color: 'var(--text-primary)' }}>Week 13 &middot; maart</div>
                <div style={{ fontSize: 11, color: 'var(--purple)', fontWeight: 600, background: 'rgba(109,46,255,0.08)', padding: '4px 10px', borderRadius: 999 }}>86% er-zijn</div>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-around', gap: 8 }}>
                {[
                  { pct: '86%', label: 'Momenten', borderStyle: '5px solid rgba(12,12,34,0.06)', borderOverride: { borderTopColor: 'var(--purple)', borderRightColor: 'var(--purple)', borderBottomColor: 'var(--purple)' } },
                  { pct: '100%', label: 'Cadeaus', borderStyle: '5px solid var(--green)', borderOverride: {} },
                  { pct: '71%', label: 'Berichten', borderStyle: '5px solid rgba(12,12,34,0.06)', borderOverride: { borderTopColor: 'var(--pink)', borderRightColor: 'var(--pink)', borderBottomColor: 'var(--pink)' } },
                ].map((item) => (
                  <div key={item.label} style={{ textAlign: 'center' }}>
                    <div style={{ width: 72, height: 72, borderRadius: '50%', border: item.borderStyle, ...item.borderOverride, display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 6px' }}>
                      <span style={{ fontFamily: 'Sora', fontSize: 16, fontWeight: 700, color: 'var(--text-primary)' }}>{item.pct}</span>
                    </div>
                    <div style={{ fontSize: 11, color: 'var(--text-muted)' }}>{item.label}</div>
                  </div>
                ))}
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10 }}>
                <div style={{ background: 'rgba(12,12,34,0.03)', borderRadius: 14, padding: 14 }}>
                  <div style={{ fontFamily: 'Sora', fontSize: 22, fontWeight: 700, color: 'var(--text-primary)' }}>12</div>
                  <div style={{ fontSize: 11, color: 'var(--text-muted)' }}>Streaks volgehouden</div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 4, marginTop: 4 }}>
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="var(--green)"><path d="M7 14l5-5 5 5z" /></svg>
                    <span style={{ fontSize: 10, color: 'var(--green)', fontWeight: 500 }}>+3 deze week</span>
                  </div>
                </div>
                <div style={{ background: 'rgba(12,12,34,0.03)', borderRadius: 14, padding: 14 }}>
                  <div style={{ fontFamily: 'Sora', fontSize: 22, fontWeight: 700, color: 'var(--text-primary)' }}>07</div>
                  <div style={{ fontSize: 11, color: 'var(--text-muted)' }}>Momenten gedeeld</div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 4, marginTop: 4 }}>
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="var(--cyan)"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" /></svg>
                    <span style={{ fontSize: 10, color: 'var(--cyan)', fontWeight: 500 }}>4u 20m totaal</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Card 5: Attente herinneringen (dark, frosted glass) */}
          <div className="feature-card feature-card-reminders reveal">
            <div className="feature-card-content" style={{ position: 'relative', zIndex: 1 }}>
              <h3>Attente herinneringen</h3>
              <p>Korte, warme nudges die je helpen om er te zijn. Zonder te pushen.</p>
            </div>
            <div style={{ padding: '0 28px 28px', position: 'relative', zIndex: 1, flex: 1, display: 'flex', flexDirection: 'column', gap: 12 }}>
              <div style={{ position: 'absolute', inset: 0, overflow: 'hidden', zIndex: 0, opacity: 0.12, padding: 20, fontSize: 12, color: 'rgba(255,248,238,1)', lineHeight: 2.4 }}>
                Vergeet mama niet &middot; Bel opa &middot; Cadeau bestellen &middot; Bloemen sturen &middot; Feliciteren &middot; Check-in &middot; Kaart schrijven &middot; Verjaardagskaart &middot; Date night plannen &middot; Bedankje sturen &middot; Housewarming &middot; Promotie vieren &middot; Jubileum herinnering &middot; Bel je zus &middot; Stuur een berichtje
              </div>
              <div className="reminder-notification" style={{ position: 'relative', zIndex: 1 }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 10 }}>
                  <span style={{ fontSize: 12, color: 'rgba(255,248,238,0.4)' }}>20:30 &middot; Avond check-in</span>
                  <span style={{ fontSize: 10, color: 'rgba(255,248,238,0.3)', background: 'rgba(255,248,238,0.06)', padding: '3px 8px', borderRadius: 999 }}>nu</span>
                </div>
                <div style={{ fontFamily: 'Sora', fontSize: 15, fontWeight: 600, color: 'rgba(255,248,238,0.9)', marginBottom: 6 }}>Mama bellen voor haar verjaardag</div>
                <div style={{ fontSize: 13, color: 'rgba(255,248,238,0.45)', lineHeight: 1.5, marginBottom: 14 }}>Ze wordt morgen 62. Een belletje maakt haar dag.</div>
                <div style={{ display: 'flex', gap: 8 }}>
                  <button style={{ padding: '8px 20px', background: 'var(--purple)', color: 'white', border: 'none', borderRadius: 'var(--radius-full)', fontFamily: 'DM Sans', fontSize: 12, fontWeight: 500, cursor: 'pointer' }}>Doe ik</button>
                  <button style={{ padding: '8px 20px', background: 'rgba(255,248,238,0.06)', color: 'rgba(255,248,238,0.5)', border: 'none', borderRadius: 'var(--radius-full)', fontFamily: 'DM Sans', fontSize: 12, fontWeight: 500, cursor: 'pointer' }}>Later</button>
                </div>
              </div>
              <div style={{ position: 'relative', zIndex: 0, background: 'rgba(255,248,238,0.04)', border: '1px solid rgba(255,248,238,0.06)', borderRadius: 16, padding: '14px 18px', marginTop: -4 }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 6 }}>
                  <span style={{ fontSize: 11, color: 'rgba(255,248,238,0.3)' }}>21:00 &middot; Herinnering</span>
                  <span style={{ fontSize: 10, color: 'rgba(255,248,238,0.2)', background: 'rgba(255,248,238,0.04)', padding: '3px 8px', borderRadius: 999 }}>straks</span>
                </div>
                <div style={{ fontFamily: 'Sora', fontSize: 13, fontWeight: 600, color: 'rgba(255,248,238,0.6)' }}>Date night plannen met Emma</div>
                <div style={{ fontSize: 12, color: 'rgba(255,248,238,0.3)', marginTop: 2 }}>Jullie trouwdag komt eraan. Zorg voor quality time.</div>
              </div>
              <div style={{ position: 'relative', zIndex: 0, background: 'rgba(255,248,238,0.03)', border: '1px solid rgba(255,248,238,0.04)', borderRadius: 14, padding: '10px 16px', marginTop: -4, opacity: 0.6 }}>
                <div style={{ fontFamily: 'Sora', fontSize: 12, fontWeight: 500, color: 'rgba(255,248,238,0.4)' }}>+ 2 meer herinneringen voor morgen</div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
