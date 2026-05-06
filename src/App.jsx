import Navbar from './components/Navbar';
import Hero from './components/Hero';
import LogoMarquee from './components/LogoMarquee';
import CarCategories from './components/CarCategories';
import Services from './components/Services';
import ParallaxExperience from './components/ParallaxExperience';
import Reviews from './components/Reviews';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="bg-luxury-black min-h-screen selection:bg-white selection:text-black">
      <Navbar />
      <Hero />
      <CarCategories />
      <Services />
      <LogoMarquee />
      <Reviews />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;





