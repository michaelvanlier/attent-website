const aiFeatures = [
  {
    icon: '\u{1F6B6}',
    color: '#0059ff',
    title: 'Morning walk',
    desc: 'Suggests the best time to remind you',
  },
  {
    icon: '\u{1F3AF}',
    color: 'red',
    title: 'Habit Priorities',
    desc: 'Reorders habits on busy days',
  },
  {
    icon: '\u{1F4CA}',
    color: '#9000ff',
    title: 'Routine Insights',
    desc: "Highlights what's working and what's slipping",
  },
  {
    icon: '\u{1F49A}',
    color: '#12a70a',
    title: 'Recovery Suggestion',
    desc: 'Helps you recover when you miss a day',
  },
]

const suggestions = [
  { icon: '\u{1F4A7}', text: 'Move drink water to 11:00 pm', action: 'Apply' },
  { icon: '\u{1F4F1}', text: "Pair with 'phone off' habit", action: 'Try this week' },
  { icon: '\u{1F4D6}', text: 'Shorten reading to 6 pages', action: 'Try this week' },
]

export default function AiSection() {
  return (
    <section className="ai" id="ai">
      <div className="container">
        <div className="ai-top reveal">
          <div className="ai-top-text">
            <span className="badge">Smart Assist</span>
            <h2 className="ai-title">AI suggestions that adjust to your day</h2>
            <p className="ai-desc">
              Habitline learns your patterns and suggests small tweaks to help you stay on track.
              Smarter habits, less thinking.
            </p>
            <a href="#" className="btn btn-dark">
              See how suggestions work
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
          </div>
          <div className="ai-top-phone">
            <div className="ai-phone-glow" />
            <div className="ai-phone">
              <img
                src="/habitline-assets/otkB8TZsvM2ULa0N3ALnKskG5ag.png"
                alt="Habitline AI"
                className="ai-phone-img"
                width="351"
                height="722"
              />
            </div>
            <div className="ai-float-cards">
              {suggestions.map((s, i) => (
                <div key={i} className={`ai-float ai-float--${i + 1}`}>
                  <span className="ai-float-icon">{s.icon}</span>
                  <span className="ai-float-text">{s.text}</span>
                  <button className="ai-float-action">{s.action}</button>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="ai-features reveal">
          {aiFeatures.map((f) => (
            <div key={f.title} className="ai-feature-card">
              <div className="ai-feature-icon" style={{ background: f.color }}>
                {f.icon}
              </div>
              <h4 className="ai-feature-title">{f.title}</h4>
              <p className="ai-feature-desc">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
