"use client";

import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import ProblemSolution from '../components/ProblemSolution';
import WhyChooseUs from '../components/WhyChooseUs';
import About from '../components/About';
import Services from '../components/Services';
import Process from '../components/Process';
import Projects from '../components/Projects';
import Testimonials from '../components/Testimonials';
import Benefits from '../components/Benefits';
import Pricing from '../components/Pricing';
import FAQ from '../components/FAQ';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import './App.css';

export default function Home() {
  return (
    <div className="bg-white min-h-screen text-gray-900 font-sans selection:bg-primary selection:text-gray-900">
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
