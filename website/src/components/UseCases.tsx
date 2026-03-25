export default function UseCases() {
  return (
    <section className="section" id="usecases">
      <div className="section-inner">
        <div className="usecase-box">
          <div className="usecase-header reveal">
            <div className="section-badge" style={{ margin: '0 auto 20px' }}>Past bij elke levensstijl</div>
            <h2 className="section-title" style={{ textAlign: 'center', maxWidth: 600, margin: '0 auto 28px' }}>Gemaakt voor mensen die geven maar vergeten.</h2>
            <div className="use-cases-tabs">
              <button className="use-tab active" data-tab="professionals">Professionals</button>
              <button className="use-tab" data-tab="parents">Ouders</button>
              <button className="use-tab" data-tab="friends">Vrienden &amp; sociaal</button>
              <button className="use-tab" data-tab="couples">Stellen</button>
            </div>
          </div>

          <div className="use-case-content active" id="tab-professionals">
            <div className="usecase-image-box">
              <img src="/images/2a73a769687ea705734c17ccce41a3de.jpg" alt="" loading="lazy" />
              <div className="usecase-glass">
                <p>Voor iedereen die jongleert met meetings, deadlines en het constante schuldgevoel dat je iemands verjaardag bent vergeten.</p>
                <div className="usecase-glass-stat">
                  <span className="usecase-glass-number">87%</span>
                  <span className="usecase-glass-label">Wekelijkse consistentie</span>
                </div>
              </div>
            </div>
          </div>

          <div className="use-case-content" id="tab-parents">
            <div className="usecase-image-box">
              <img src="/images/45945e6e7262bd2703b2d8dd3e48d71d.jpg" alt="" loading="lazy" />
              <div className="usecase-glass">
                <p>Voor ouders die al op hun tandvlees lopen maar nog steeds de coole tante, de attente neef, de aanwezige vriend willen zijn.</p>
                <div className="usecase-glass-stat">
                  <span className="usecase-glass-number">92%</span>
                  <span className="usecase-glass-label">Minder gemiste momenten</span>
                </div>
              </div>
            </div>
          </div>

          <div className="use-case-content" id="tab-friends">
            <div className="usecase-image-box">
              <img src="/images/b29a2d1d956e310032cfe8f4f95e1310.jpg" alt="" loading="lazy" />
              <div className="usecase-glass">
                <p>Voor de vriend die altijd van plan is te appen maar dan gaan er drie weken voorbij en is het ineens awkward.</p>
                <div className="usecase-glass-stat">
                  <span className="usecase-glass-number">3x</span>
                  <span className="usecase-glass-label">Meer check-ins per maand</span>
                </div>
              </div>
            </div>
          </div>

          <div className="use-case-content" id="tab-couples">
            <div className="usecase-image-box">
              <img src="/images/9a47de014ad4b094f3900b67cbf74f89.jpg" alt="" loading="lazy" />
              <div className="usecase-glass">
                <p>Voor stellen die weten dat de trouwdag "ergens in juni" is maar de exacte datum niet onder ede zouden durven zeggen.</p>
                <div className="usecase-glass-stat">
                  <span className="usecase-glass-number">100%</span>
                  <span className="usecase-glass-label">Partner-goedkeuring</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
