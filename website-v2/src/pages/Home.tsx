import Nav from '../components/Nav'
import Hero from '../components/Hero'
import Statement from '../components/Statement'
import PhoneShowcase from '../components/PhoneShowcase'
import Features from '../components/Features'
import UseCases from '../components/UseCases'
import Achievements from '../components/Achievements'
import Metrics from '../components/Metrics'
import AiSection from '../components/AiSection'
import Reviews from '../components/Reviews'
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
      <Features />
      <UseCases />
      <Achievements />
      <Metrics />
      <AiSection />
      <Reviews />
      <Faq />
      <FinalCta />
      <Footer />
      <FloatingCta />
    </>
  )
}
