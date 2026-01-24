import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProblemSolution from './components/ProblemSolution';
import WhyChooseUs from './components/WhyChooseUs';
import About from './components/About';
import Services from './components/Services';
import Process from './components/Process';
import Projects from './components/Projects';
import Testimonials from './components/Testimonials';
import Benefits from './components/Benefits';
import Pricing from './components/Pricing';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="bg-dark min-h-screen text-white font-sans selection:bg-primary selection:text-white">
      <Navbar />
      <Hero />
      <ProblemSolution />
      <WhyChooseUs />
      <About />
      <Services />
      <Process />
      <Projects />
      <Testimonials />
      <Benefits />
      <Pricing />
      <FAQ />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
