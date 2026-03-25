const avatars = [
  'gDcaZH5xt6hqSU2VbK2snAw.jpg',
  'Wu0ngxjedkJ31EstGJABQBoafk.jpg',
  '5O8P63EQwkFO1m5OTR4jsw7hI8.jpg',
  'CChKPhjar0Z3WFjF2BWc2QYAhM.jpg',
  'lBDnhYYdiFDDzKLziT6CyXW3maU.jpg',
  '622M5cyJBdKPIK1fPnBlo3qONk.jpg',
]

export default function Metrics() {
  return (
    <section className="metrics" id="metrics">
      <div className="container">
        <div className="metrics-ticker reveal">
          <div className="metrics-ticker-track">
            {[...avatars, ...avatars, ...avatars].map((a, i) => (
              <img
                key={i}
                src={`/habitline-assets/${a}`}
                alt=""
                className="metrics-ticker-avatar"
              />
            ))}
          </div>
        </div>

        <div className="metrics-header reveal">
          <h2 className="metrics-title">How people stay consistent over time</h2>
        </div>

        <div className="metrics-hero reveal">
          <div className="metrics-globe">
            <img
              src="/habitline-assets/yWxRZ8t5CVMV4D5n7KRMmGL04.png"
              alt="Globe"
              className="globe-image"
              width="445"
              height="444"
            />
          </div>
        </div>

        <div className="metrics-big reveal">
          <span className="metrics-big-number">62,000+</span>
          <span className="metrics-big-label">Check-ins logged last month</span>
        </div>

        <div className="metrics-row reveal">
          <div className="metric-item">
            <span className="metric-number">87%</span>
            <span className="metric-label">Avg weekly consistency</span>
          </div>
          <div className="metric-item">
            <span className="metric-number">46</span>
            <span className="metric-label">Avg daily check-ins</span>
          </div>
          <div className="metric-item">
            <span className="metric-number">32+</span>
            <span className="metric-label">Countries</span>
          </div>
        </div>
      </div>
    </section>
  )
}
