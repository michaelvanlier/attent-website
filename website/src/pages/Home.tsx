import Nav from '../components/Nav'
import Hero from '../components/Hero'
import Statement from '../components/Statement'
import PhoneShowcase from '../components/PhoneShowcase'
import Features from '../components/Features'
import Download from '../components/Download'
import UseCases from '../components/UseCases'
import Metrics from '../components/Metrics'
import AiSection from '../components/AiSection'
import Testimonials from '../components/Testimonials'
import Faq from '../components/Faq'
import FinalCta from '../components/FinalCta'
import Footer from '../components/Footer'
import FloatingCta from '../components/FloatingCta'
import { useSiteEffects } from '../hooks/useSiteEffects'

export default function Home() {
  useSiteEffects()

  return (
    <>
      <Nav />
      <Hero />
      <Statement />
      <PhoneShowcase />
      <div className="section-divider"></div>
      <Features />
      <div className="section-divider"></div>
      <Download />
      <div className="section-divider"></div>
      <UseCases />
      <div className="section-divider"></div>
      <Metrics />
      <div className="section-divider"></div>
      <AiSection />
      <div className="section-divider"></div>
      <Testimonials />
      <div className="section-divider"></div>
      <Faq />
      <FinalCta />
      <Footer />
      <FloatingCta />
    </>
  )
}
