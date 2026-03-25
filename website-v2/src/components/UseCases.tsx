import { useState } from 'react'

const cases = [
  {
    id: 'professionals',
    label: 'Professionals',
    title: 'Structured routines for busy workdays',
    desc: 'Habitline helps professionals manage their daily habits around meetings, deadlines, and deep work sessions. Stay consistent even when your calendar is full.',
    stat: '87%',
    statLabel: 'Weekly consistency',
    image: '/habitline-assets/ubUH31gw3mKXQBS06KHaijaBY.jpg',
    tags: ['#fitness enthusiasts', '#creatives', '#entrepreneurs', '#freelancers'],
  },
  {
    id: 'students',
    label: 'Students',
    title: 'Build study habits that last',
    desc: 'From morning routines to study sessions, Habitline keeps students on track with gentle reminders and flexible scheduling that adapts to class times.',
    stat: '92%',
    statLabel: 'Study consistency',
    image: '/habitline-assets/kmAong4xy6gvqhgzcssHKUFJnmA.jpg',
    tags: ['#study habits', '#focus time', '#exam prep', '#wellness'],
  },
  {
    id: 'parents',
    label: 'Parents',
    title: 'Family routines made simple',
    desc: 'Juggling family and personal goals is easier with routine stacks. Build habits that work around your family schedule with built-in flexibility.',
    stat: '78%',
    statLabel: 'Routine completion',
    image: '/habitline-assets/GrOi64i02AZCaZvYDyn1wZuzEo.jpg',
    tags: ['#morning routines', '#self-care', '#family time', '#balance'],
  },
]

export default function UseCases() {
  const [active, setActive] = useState(0)
  const c = cases[active]

  return (
    <section className="usecases" id="usecases">
      <div className="container">
        <div className="usecases-header reveal">
          <span className="badge">Fits every lifestyle</span>
          <h2 className="usecases-title">Adapted for the way you live and work</h2>
        </div>
        <div className="usecases-tabs reveal">
          {cases.map((item, i) => (
            <button
              key={item.id}
              className={`usecases-tab ${i === active ? 'usecases-tab--active' : ''}`}
              onClick={() => setActive(i)}
            >
              {item.label}
            </button>
          ))}
        </div>
        <div className="usecases-content reveal">
          <div className="usecases-image">
            <img src={c.image} alt={c.label} />
            <div className="usecases-stat-card">
              <span className="usecases-stat-num">{c.stat}</span>
              <span className="usecases-stat-label">{c.statLabel}</span>
            </div>
          </div>
          <div className="usecases-info">
            <h3 className="usecases-info-title">{c.title}</h3>
            <p className="usecases-info-desc">{c.desc}</p>
            <div className="usecases-tags">
              {c.tags.map((tag) => (
                <span key={tag} className="tag">{tag}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
