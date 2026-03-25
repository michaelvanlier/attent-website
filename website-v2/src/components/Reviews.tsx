const videoReviews = [
  { name: 'Sarah K.', thumb: '/habitline-assets/ZzBHGGaTqk0aSLMiZ87omsIk5Yc.jpg' },
  { name: 'James L.', thumb: '/habitline-assets/1Gm8xH2RytPJQrcLAGShFH8LuM.jpg' },
  { name: 'Emma R.', thumb: '/habitline-assets/360Mpxs47saxpqyH2hnDZ2G9GU.jpg' },
]

const textReviews = [
  {
    name: 'Maya Zong',
    role: 'Student',
    text: 'Habitline helped me build a morning routine I actually stick to. The gentle reminders are perfect.',
    avatar: '/habitline-assets/hYfCvJ3IVdEznEOwIQiiAxWOsPY.jpg',
  },
  {
    name: 'Ethan Miller',
    role: 'Freelancer',
    text: 'I love the routine stacks feature. Grouping my habits by time of day made everything click.',
    avatar: '/habitline-assets/E0DlVQ4cHxgNCHBSHOdAc7mG7w.jpg',
  },
  {
    name: 'Hannah Lee',
    role: 'Designer',
    text: 'The AI suggestions are surprisingly helpful. It noticed I always skip reading at night and moved it to morning.',
    avatar: '/habitline-assets/pfX9Sn5qRme6iCFMisneY4YIt7I.jpg',
  },
  {
    name: 'Daniel Perez',
    role: 'Engineer',
    text: "Best habit app I've used. The weekly reflections keep me motivated and the streaks are flexible enough to not stress me out.",
    avatar: '/habitline-assets/X0ECJ5xGgYrCVgHB8RYd3RABTQ.jpg',
  },
  {
    name: 'Aisha Patel',
    role: 'Parent',
    text: 'Finally an app that understands life gets messy. The pause streak feature is a game changer for busy parents.',
    avatar: '/habitline-assets/bphS41hVtvFCNiuHkZkxk8imJk.jpg',
  },
  {
    name: 'Tom Wright',
    role: 'Teacher',
    text: 'Clean design, simple to use, and actually helps me stay consistent. Highly recommend.',
    avatar: '/habitline-assets/P0sSNnMlhW7adaGkZFmKHL828bY.jpg',
  },
  {
    name: 'Lena Chen',
    role: 'Photographer',
    text: 'The visual progress tracking is motivating. I can see my streaks grow and it pushes me to keep going.',
    avatar: '/habitline-assets/W13V3WO2YwDah4yBxCcZc70Es.jpg',
  },
  {
    name: 'Marcus Johnson',
    role: 'Entrepreneur',
    text: 'Habitline simplified my morning routine. I no longer overthink what to do next.',
    avatar: '/habitline-assets/CYC5VQ0ZcK8uEE5jBbm51FTJq0.jpg',
  },
  {
    name: 'Priya Sharma',
    role: 'Consultant',
    text: 'AI suggestions are spot on. It even suggested I move my workout earlier based on my patterns.',
    avatar: '/habitline-assets/gDcaZH5xt6hqSU2VbK2snAw.jpg',
  },
]

export default function Reviews() {
  return (
    <section className="reviews">
      <div className="container">
        <div className="reviews-header reveal">
          <h2 className="reviews-title">How people use Habitline every day</h2>
          <div className="reviews-rating">
            <img
              src="/habitline-assets/FfmG8vzlH3tOeU2kFU0oUxANr9Y.svg"
              alt="5 stars"
              className="reviews-stars-img"
              width="100"
              height="20"
            />
            <span className="reviews-score">4.5/5</span>
            <span className="reviews-count">(1582+ users)</span>
          </div>
        </div>

        <div className="reviews-videos-wrap reveal">
          <button className="reviews-arrow reviews-arrow--left" aria-label="Previous">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M15 18l-6-6 6-6"/></svg>
          </button>
          <div className="reviews-videos">
            {videoReviews.map((v) => (
              <div key={v.name} className="review-video-card">
                <img src={v.thumb} alt={v.name} />
                <div className="review-video-overlay">
                  <button className="review-play-btn" aria-label={`Play ${v.name} review`}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="white">
                      <path d="M8 5v14l11-7L8 5z" />
                    </svg>
                  </button>
                </div>
                <span className="review-video-name">{v.name}</span>
              </div>
            ))}
          </div>
          <button className="reviews-arrow reviews-arrow--right" aria-label="Next">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 18l6-6-6-6"/></svg>
          </button>
        </div>

        <div className="reviews-grid reveal">
          {textReviews.map((r) => (
            <div key={r.name} className="review-card">
              <div className="review-card-header">
                <div className="review-card-author">
                  <img src={r.avatar} alt={r.name} className="review-card-avatar-img" />
                  <div>
                    <div className="review-card-name">{r.name}</div>
                    <div className="review-card-role">{r.role}</div>
                  </div>
                </div>
                <svg className="review-card-x" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </div>
              <p className="review-card-text">{r.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
