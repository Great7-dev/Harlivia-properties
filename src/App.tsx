import "./App.css";
import Features from "./components/Features/Features";
import Header from "./components/Navbar/Header";
import Hero from "./components/Hero/Hero";
import ValueProposition from "./components/Features/SecondFeatures";
import FAQSection from "./components/Faq/faq-section";
import FooterSection from "./components/Footer/Footer";
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
  );
}
