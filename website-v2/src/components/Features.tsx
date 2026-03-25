export default function Features() {
  const days = ['M', 'T', 'W', 'T', 'F', 'S', 'S']
  const daysDone = [true, true, true, true, true, false, false]

  return (
    <section className="features" id="features">
      <div className="container">
        <div className="features-header reveal">
          <span className="badge">What&apos;s Inside</span>
          <h2 className="features-title">A layout that keeps your day clear.</h2>
          <p className="features-desc">
            Every feature is designed to help you build habits without feeling overwhelmed.
            Structure meets simplicity.
          </p>
        </div>
        <div className="features-grid">
          {/* Flexible streak rules */}
          <div className="feature-card feature-card--white reveal">
            <div className="feature-card-content">
              <h3 className="feature-card-title">Flexible streak rules</h3>
              <p className="feature-card-desc">
                Life happens. Your streaks adapt with travel mode, sick days, and rest day credits.
              </p>
            </div>
            <div className="feature-card-visual">
              <div className="streak-display">
                <div className="streak-header">
                  <span className="streak-flame">{'\u{1F525}'}</span>
                  <span className="streak-label">28 Day Streak Active</span>
                </div>
                <div className="streak-days">
                  {days.map((d, i) => (
                    <div key={i} className={`streak-day ${daysDone[i] ? 'streak-day--done' : ''}`}>
                      {d}
                    </div>
                  ))}
                </div>
                <div className="streak-tags">
                  <span className="streak-tag">Travel Mode Active</span>
                  <span className="streak-tag">Sick Day Allowance</span>
                  <span className="streak-tag">Weekend Flexibility</span>
                  <span className="streak-tag">Rest Day Credit</span>
                  <span className="streak-tag">Pause Streak</span>
                </div>
              </div>
            </div>
          </div>

          {/* Smart daily planner */}
          <div className="feature-card feature-card--dark reveal">
            <div className="feature-card-content">
              <h3 className="feature-card-title">Smart daily planner</h3>
              <p className="feature-card-desc">
                See your day at a glance with time-based habit scheduling.
              </p>
            </div>
            <div className="feature-card-visual">
              <div className="planner-display">
                <div className="planner-greeting">Good Morning! Tuesday, 25 Nov</div>
                <div className="planner-list">
                  <div className="planner-item">
                    <span className="planner-time">9:00</span>
                    <span className="planner-habit">Deep work session</span>
                    <span className="planner-check planner-check--done">&#10003;</span>
                  </div>
                  <div className="planner-item">
                    <span className="planner-time">12:00</span>
                    <span className="planner-habit">Read 10 pages</span>
                    <span className="planner-check">&#10003;</span>
                  </div>
                  <div className="planner-item">
                    <span className="planner-time">17:00</span>
                    <span className="planner-habit">Stretch routine</span>
                    <span className="planner-check">&#10003;</span>
                  </div>
                  <div className="planner-item">
                    <span className="planner-time">21:00</span>
                    <span className="planner-habit">Plan tomorrow</span>
                    <span className="planner-check">&#10003;</span>
                  </div>
                </div>
                <div className="planner-progress">
                  <div className="planner-progress-bar">
                    <div className="planner-progress-fill" style={{ width: '15%' }} />
                  </div>
                  <span className="planner-progress-text">15% complete</span>
                </div>
              </div>
            </div>
          </div>

          {/* Routine stacks */}
          <div className="feature-card feature-card--dark feature-card--wide reveal">
            <div className="feature-card-bg">
              <img src="/habitline-assets/yyE2pUgUrjBeDKRRIF0gWhZRuhM.jpg" alt="" />
              <div className="feature-card-bg-overlay" />
            </div>
            <div className="feature-card-content feature-card-content--stacks">
              <h3 className="feature-card-title">Routine stacks</h3>
              <p className="feature-card-desc">
                Group habits into simple blocks that fit your daily rhythm.
              </p>
            </div>
            <div className="feature-card-visual feature-card-visual--stacks">
              <img
                src="/habitline-assets/GCmP0bgqstik77X2yDWYranE.svg"
                alt="Phone mockup"
                className="feature-stacks-phone"
              />
            </div>
          </div>

          {/* Weekly reflection */}
          <div className="feature-card feature-card--white reveal">
            <div className="feature-card-content">
              <h3 className="feature-card-title">Weekly reflection</h3>
              <p className="feature-card-desc">Your week at a glance with meaningful insights.</p>
            </div>
            <div className="feature-card-visual">
              <div className="reflection-display">
                <div className="reflection-header">Your week at a glance</div>
                <div className="reflection-charts">
                  <div className="reflection-ring">
                    <svg viewBox="0 0 60 60">
                      <circle cx="30" cy="30" r="24" fill="none" stroke="#eee" strokeWidth="5" />
                      <circle
                        cx="30" cy="30" r="24" fill="none" stroke="#12a70a" strokeWidth="5"
                        strokeDasharray="120 151" strokeLinecap="round" transform="rotate(-90 30 30)"
                      />
                    </svg>
                    <span className="reflection-ring-label">80%</span>
                  </div>
                  <div className="reflection-ring">
                    <svg viewBox="0 0 60 60">
                      <circle cx="30" cy="30" r="24" fill="none" stroke="#eee" strokeWidth="5" />
                      <circle
                        cx="30" cy="30" r="24" fill="none" stroke="#0059ff" strokeWidth="5"
                        strokeDasharray="105 151" strokeLinecap="round" transform="rotate(-90 30 30)"
                      />
                    </svg>
                    <span className="reflection-ring-label">70%</span>
                  </div>
                  <div className="reflection-ring">
                    <svg viewBox="0 0 60 60">
                      <circle cx="30" cy="30" r="24" fill="none" stroke="#eee" strokeWidth="5" />
                      <circle
                        cx="30" cy="30" r="24" fill="none" stroke="#ff9803" strokeWidth="5"
                        strokeDasharray="135 151" strokeLinecap="round" transform="rotate(-90 30 30)"
                      />
                    </svg>
                    <span className="reflection-ring-label">90%</span>
                  </div>
                </div>
                <div className="reflection-stats">
                  <div className="reflection-stat">
                    <span className="reflection-stat-num">12</span>Streaks completed
                  </div>
                  <div className="reflection-stat">
                    <span className="reflection-stat-num">3</span>Improved
                  </div>
                  <div className="reflection-stat">
                    <span className="reflection-stat-num">7</span>Focused sessions
                  </div>
                  <div className="reflection-stat">
                    <span className="reflection-stat-num">4h 20m</span>Total time
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Gentle reminders */}
          <div className="feature-card feature-card--white reveal">
            <div className="feature-card-content">
              <h3 className="feature-card-title">Gentle reminders</h3>
              <p className="feature-card-desc">Timely nudges that respect your schedule.</p>
            </div>
            <div className="feature-card-visual">
              <div className="reminder-display">
                <div className="reminder-notification">
                  <div className="reminder-notif-icon">{'\u{1F319}'}</div>
                  <div className="reminder-notif-content">
                    <div className="reminder-notif-time">8:30 PM</div>
                    <div className="reminder-notif-title">Evening Wind-Down</div>
                    <div className="reminder-notif-desc">Time to start your evening routine</div>
                  </div>
                </div>
                <div className="reminder-actions">
                  <button className="reminder-btn reminder-btn--primary">I&apos;m on it</button>
                  <button className="reminder-btn reminder-btn--secondary">Later</button>
                </div>
                <div className="reminder-categories">
                  <div className="reminder-cat">
                    <span className="reminder-cat-icon">{'\u2600\uFE0F'}</span>
                    <span>Morning</span>
                  </div>
                  <div className="reminder-cat">
                    <span className="reminder-cat-icon">{'\u{1F3AF}'}</span>
                    <span>Focus</span>
                  </div>
                  <div className="reminder-cat">
                    <span className="reminder-cat-icon">{'\u{1F319}'}</span>
                    <span>Evening</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
