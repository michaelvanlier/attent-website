export default function PhoneShowcase() {
  const topRowCards = [
    { type: 'photo', src: '/habitline-assets/xWPekEuNbvgPERKSnbylJIlw5o.jpg', alt: 'Person' },
    { type: 'achievement', icon: '\u{1F525}', text: '7 Day Streak', sub: 'Morning routine' },
    { type: 'photo', src: '/habitline-assets/tyQlVexPG6JIDCWExGwbiGuN5h8.jpg', alt: 'Beach' },
    { type: 'tag', text: 'Focus session', icon: '\u{1F3AF}' },
    { type: 'photo', src: '/habitline-assets/EvRLW1yV1DMzPgDGTRFL8268Y.jpg', alt: 'Friends' },
    { type: 'achievement', icon: '\u{1F4A7}', text: '100% Hydrated', sub: 'Today' },
    { type: 'photo', src: '/habitline-assets/HXp1j2ozGA25sNyS8ZbVMkMuV3A.jpg', alt: 'Selfie' },
    { type: 'tag', text: 'Stretch', icon: '\u{1F4AA}' },
  ]

  const bottomRowCards = [
    { type: 'tag', text: 'Read 10 pages', icon: '\u{1F4D6}' },
    { type: 'photo', src: '/habitline-assets/HXp1j2ozGA25sNyS8ZbVMkMuV3A.jpg', alt: 'Joy' },
    { type: 'achievement', icon: '\u{1F3AF}', text: 'Deep Work', sub: '2hr block done' },
    { type: 'photo', src: '/habitline-assets/EvRLW1yV1DMzPgDGTRFL8268Y.jpg', alt: 'Travel' },
    { type: 'tag', text: 'Evening walk', icon: '\u{1F319}' },
    { type: 'photo', src: '/habitline-assets/tyQlVexPG6JIDCWExGwbiGuN5h8.jpg', alt: 'Beach' },
    { type: 'tag', text: 'Journal', icon: '\u{1F4DD}' },
    { type: 'photo', src: '/habitline-assets/xWPekEuNbvgPERKSnbylJIlw5o.jpg', alt: 'Person' },
  ]

  const habitLabels = [
    'Morning walk', 'Focus session', 'Meditate', 'Stretch', 'Track water',
    'Write journal', 'Clean workspace', 'Evening walk', 'Read 10 pages', 'Hydration',
  ]

  const renderCard = (card: (typeof topRowCards)[number], i: number) => {
    if (card.type === 'photo') {
      return (
        <div key={i} className="marquee-card marquee-card--photo">
          <img src={card.src} alt={card.alt} />
        </div>
      )
    }
    if (card.type === 'achievement') {
      return (
        <div key={i} className="marquee-card marquee-card--achievement">
          <span className="marquee-achievement-icon">{card.icon}</span>
          <span className="marquee-achievement-text">{card.text}</span>
          <span className="marquee-achievement-sub">{card.sub}</span>
        </div>
      )
    }
    return (
      <div key={i} className="marquee-card marquee-card--tag">
        <span className="marquee-icon">{card.icon}</span>
        {card.text}
      </div>
    )
  }

  return (
    <section className="showcase reveal">
      <div className="showcase-marquee-wrap">
        <div className="showcase-marquee">
          <div className="marquee-track">
            {[...topRowCards, ...topRowCards].map(renderCard)}
          </div>
        </div>

        <div className="showcase-phone">
          <img
            src="/habitline-assets/HOI14HQm9TteAT5Gus0apcpG1o.png"
            alt="Habitline app"
            className="showcase-phone-img"
            width="351"
            height="722"
          />
          <div className="showcase-labels">
            {habitLabels.map((label) => (
              <span key={label} className="showcase-label-pill">{label}</span>
            ))}
          </div>
        </div>

        <div className="showcase-marquee">
          <div className="marquee-track marquee-track--reverse">
            {[...bottomRowCards, ...bottomRowCards].map(renderCard)}
          </div>
        </div>
      </div>

      <div className="showcase-bottom">
        <div className="showcase-rating">
          <span className="showcase-stars">&#9733;&#9733;&#9733;&#9733;&#9733;</span>
          <span className="showcase-rating-num">4.7</span>
          <span className="showcase-rating-text">Rating based on 125 reviews</span>
        </div>
        <div className="showcase-download-btns">
          <a href="#" className="btn btn-dark btn-sm">
            <img src="/habitline-assets/BZYkl56vzaLH9uCPqEid8uQg9ZE.svg" alt="" width="14" height="14" />
            Download for iPhone
          </a>
          <a href="#" className="btn btn-ghost-light btn-sm">
            <img src="/habitline-assets/J4VPLNaOdWSrA6fBUpuZ0eLYNAI.svg" alt="" width="14" height="14" />
            Get it on Android
          </a>
        </div>
      </div>
    </section>
  )
}
