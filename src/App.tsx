import './App.css'
import FAQSection from './components/faq-section'
import Features from './components/Features'
import FooterSection from './components/Footer'
import Header from './components/Header'
import Hero from './components/Hero'
import ValueProposition from './components/SecondFeatures'
// import HartiviaSection from './components/SecondFeatures'

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <Features />
      <ValueProposition />
      <FAQSection />
      <FooterSection />
    </main>
  )
}

