const faqs = [
  {
    q: 'How many habits can I track?',
    a: 'You can track unlimited habits with Habitline. Organize them into routine stacks to keep things manageable and focused throughout your day.',
  },
  {
    q: 'Do reminders work across all devices?',
    a: 'Yes! Reminders sync across your iPhone, Android, and any device where you have Habitline installed. Never miss a habit check-in.',
  },
  {
    q: 'What happens if I miss a day?',
    a: "Life happens! Habitline offers flexible streak rules including sick day allowances, travel mode, and rest day credits so one missed day doesn't break your momentum.",
  },
  {
    q: 'Can I create routines for different times of day?',
    a: 'Absolutely. Routine stacks let you group habits into morning, afternoon, and evening blocks. Each stack can have its own schedule and reminders.',
  },
  {
    q: 'Is Habitline free to use?',
    a: 'Habitline offers a generous free plan that includes habit tracking, reminders, and basic insights. Premium features like AI suggestions and advanced analytics are available with a subscription.',
  },
]

export default function Faq() {
  return (
    <section className="faq">
      <div className="container">
        <div className="faq-layout reveal">
          <div className="faq-cta-card">
            <div className="faq-cta-icon">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#ff9803" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
              </svg>
            </div>
            <h3 className="faq-cta-title">Can&apos;t find your answer?</h3>
            <p className="faq-cta-desc">We&apos;re here to help you get started with Habitline.</p>
            <a href="#" className="btn btn-dark">Contact us</a>
          </div>
          <div className="faq-list">
            {faqs.map((faq, i) => (
              <div key={i} className={`faq-item ${i === 0 ? 'faq-item--open' : ''}`}>
                <button className="faq-question">
                  <span>{faq.q}</span>
                  <span className="faq-chevron">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M6 9l6 6 6-6" />
                    </svg>
                  </span>
                </button>
                <div className="faq-answer">
                  <p>{faq.a}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
