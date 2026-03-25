const statementWords = [
  'Build', 'steady', 'daily',
  { type: 'emoji', content: '\u{1F431}' },
  'habits', 'with', 'a',
  'layout', 'that', 'keeps', 'your',
  'mornings,',
  'evenings,',
  { type: 'emoji', content: '\u{1F44B}' },
  'and',
  'focus', 'simple',
  'to', 'follow.',
]

export default function Statement() {
  return (
    <section className="statement">
      <div className="container">
        <div className="statement-text">
          {statementWords.map((word, i) => {
            if (typeof word === 'string') {
              return (
                <span key={i} className="stword">
                  {word}
                </span>
              )
            }
            if (word.type === 'emoji') {
              return (
                <span key={i} className="stword statement-emoji">
                  {word.content}
                </span>
              )
            }
            return null
          })}
        </div>
        <p className="statement-sub">Used by people to improve routines.</p>
        <div className="statement-tags">
          <span className="tag">#Founders</span>
          <span className="tag">#Students</span>
          <span className="tag">#Busy parents</span>
          <span className="tag">#Remote teams</span>
        </div>
        <div className="statement-strip">
          <div className="statement-strip-inner">
            <span className="statement-strip-badge">
              <span className="statement-strip-badge-icon">{'\u23F1\uFE0F'}</span>
              Smart Timers
            </span>
            <span className="statement-strip-label">Morning Routine</span>
            <span className="statement-strip-label">Evening Wind-down</span>
            <span className="statement-strip-label">Focus Blocks</span>
            <span className="statement-strip-label">Hydration Tracking</span>
          </div>
        </div>
      </div>
    </section>
  )
}
