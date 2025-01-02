import ContactSection from "./components/ContactSection";
import FeaturesSection from "./components/FeaturesSection";
import Footer from "./components/Footer";
import HeroSection from "./components/Hero";
import InspirationSection from "./components/InspirationSection";
import Navbar from "./components/Navbar";
import NewsSection from "./components/NewsSection";
import TestimonialsSection from "./components/TestimonialsSection";

function App() {
  return (
    <>
      <Navbar />
      <HeroSection/>
      <InspirationSection/>
      <TestimonialsSection/>
      <FeaturesSection/>
      <ContactSection/>
      <NewsSection/>
      <Footer/>
    </>
  );
}

export default App;
