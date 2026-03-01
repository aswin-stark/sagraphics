import GlossyBackground from "./components/GlossyBackground";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Portfolio from "./components/portfolio";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Faq from "./components/Faq";
export default function App() {
  return (
    <GlossyBackground>
      <Header /> {/* Put header *inside* the glossy background */}
      <Hero />
      <Portfolio />
      <About />
      <Faq />
      <Contact />
      <Footer />
    </GlossyBackground>
  );
}