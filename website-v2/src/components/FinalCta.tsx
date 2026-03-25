const clouds = [
  { src: 'c5yKOUxAULPtn3CoxX5b92vgJ8U.png', className: 'final-cta-cloud--1' },
  { src: 'bWh0pVd78Am5KRfPjOhMoF5Ddk.png', className: 'final-cta-cloud--2' },
  { src: 'vK1naOOAfBeOfzjSqlloxH7w.png', className: 'final-cta-cloud--3' },
  { src: 'oUscxluBetLnso5wtiCRMM5TpDE.png', className: 'final-cta-cloud--4' },
  { src: 'Z13RlvdoTurS0rPL8TlEtyXaTWA.png', className: 'final-cta-cloud--5' },
  { src: '7AeCYMcqGCsC65f7s3s7l9eKk4.png', className: 'final-cta-cloud--6' },
  { src: 'W3nBncXQ3FLPgBR3WohrCEac.png', className: 'final-cta-cloud--7' },
]

export default function FinalCta() {
  return (
    <section className="final-cta">
      <div className="final-cta-bg">
        {clouds.map((c) => (
          <img
            key={c.className}
            src={`/habitline-assets/${c.src}`}
            alt=""
            className={`final-cta-cloud ${c.className}`}
          />
        ))}
      </div>
      <div className="container">
        <div className="final-cta-layout reveal">
          <div className="final-cta-left">
            <h2 className="final-cta-title">Build better habits with less effort</h2>
            <p className="final-cta-desc">
              Track what matters, stay organized, and improve at your own pace.
            </p>
            <div className="final-cta-buttons">
              <a href="#" className="final-cta-store-btn">
                <img src="/habitline-assets/tZgMAFzyPGsO40W7ech3SKx8UjM.svg" alt="Download on the App Store" height="48" />
              </a>
              <a href="#" className="final-cta-store-btn">
                <img src="/habitline-assets/QxyLFSYgQIUx9LdkimXlQpsWjw.svg" alt="Get it on Google Play" height="48" />
              </a>
            </div>
          </div>

          <div className="final-cta-center">
            <div className="final-cta-phone">
              <img
                src="/habitline-assets/Yxyz4xAO2Afi4x2mrtShsiVlWA.png"
                alt="Habitline app on phone"
                width="1046"
                height="1600"
              />
            </div>
          </div>

          <div className="final-cta-right">
            <div className="final-cta-qr">
              <img
                src="/habitline-assets/IZP7ndOJbXLF7y92URQe9epVO0.svg"
                alt="QR code"
                className="qr-image"
                width="120"
                height="120"
              />
              <p className="qr-text">Scan the QR code to download the app</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
