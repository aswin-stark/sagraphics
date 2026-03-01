import GlossyBackground from "./components/GlossyBackground";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Portfolio from "./components/Services";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Faq from "./components/Faq";
import Services from "./components/Services";
export default function App() {
  return (
    <GlossyBackground>
      <Header /> {/* Put header *inside* the glossy background */}
      <Hero />
      <Services />
      <About />
      <Faq />
      <Contact />
      <Footer />
    </GlossyBackground>
  );
}