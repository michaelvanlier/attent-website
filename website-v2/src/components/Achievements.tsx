const achievements = [
  {
    name: 'Priya',
    role: 'Busy Parent',
    stat: '',
    achievement: 'Logged 40 focus sessions this month with Routine Stacks',
    image: '/habitline-assets/ZzBHGGaTqk0aSLMiZ87omsIk5Yc.jpg',
  },
  {
    name: 'Leo',
    role: 'Creative Professional',
    stat: '10 Days',
    achievement: 'Hit hydration goals',
    image: '/habitline-assets/1Gm8xH2RytPJQrcLAGShFH8LuM.jpg',
  },
  {
    name: 'Ramya',
    role: 'Software Developer',
    stat: '',
    achievement: 'Finally keeps his day organized with routine-based habit groups',
    image: '/habitline-assets/360Mpxs47saxpqyH2hnDZ2G9GU.jpg',
  },
  {
    name: 'Maya',
    role: 'Student',
    stat: '',
    achievement: 'Completed 21-day streak using Habitline',
    image: '/habitline-assets/7dKCE0xdVPy08DUKqzOy8dtxWg.jpg',
  },
  {
    name: 'Daniel',
    role: 'Founder',
    stat: '87%',
    achievement: 'Consistency improvement',
    image: '/habitline-assets/XtZSnP4lf3r3xqtGfWddUZ7DwhI.jpg',
  },
  {
    name: 'Aaron',
    role: 'Remote Engineer',
    stat: '',
    achievement: 'Weekend habit breakthrough',
    image: '/habitline-assets/pmABpxPTuD1JS2FQjWsbhiqm7g.jpg',
  },
]

export default function Achievements() {
  return (
    <section className="achievements">
      <div className="container">
        <div className="achievements-header reveal">
          <div>
            <h2 className="achievements-title">What users are achieving with Habitline</h2>
          </div>
          <div className="achievements-trusted">
            <div className="avatar-stack">
              <img src="/habitline-assets/ZzBHGGaTqk0aSLMiZ87omsIk5Yc.jpg" alt="" className="avatar-circle avatar-circle--img" />
              <img src="/habitline-assets/1Gm8xH2RytPJQrcLAGShFH8LuM.jpg" alt="" className="avatar-circle avatar-circle--img" />
              <img src="/habitline-assets/360Mpxs47saxpqyH2hnDZ2G9GU.jpg" alt="" className="avatar-circle avatar-circle--img" />
              <img src="/habitline-assets/7dKCE0xdVPy08DUKqzOy8dtxWg.jpg" alt="" className="avatar-circle avatar-circle--img" />
            </div>
            <span className="achievements-trusted-text">+53 Trusted worldwide</span>
          </div>
        </div>
        <div className="achievements-scroll reveal">
          {achievements.map((a) => (
            <div key={a.name} className="achievement-card">
              <img src={a.image} alt={a.name} className="achievement-card-bg" />
              <div className="achievement-card-top">
                <span className="achievement-card-name">{a.name}</span>
                <span className="achievement-card-dot">&middot;</span>
                <span className="achievement-card-role">{a.role}</span>
              </div>
              <div className="achievement-card-bottom">
                {a.stat && <div className="achievement-card-stat">{a.stat}</div>}
                <div className="achievement-card-text">{a.achievement}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
