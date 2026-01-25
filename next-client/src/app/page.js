"use client";

import Hero from '../components/Hero';
import ProblemSolution from '../components/ProblemSolution';
import Benefits from '../components/Benefits';
import Testimonials from '../components/Testimonials';
import CallToAction from '../components/CallToAction';
import Projects from '../components/Projects';
import Contact from '../components/Contact';
import './App.css';

export default function Home() {
  return (
    <div className="bg-white min-h-screen text-gray-900 font-sans">
      <Hero />
      <ProblemSolution />
      <Benefits />
      <Projects />
      <Testimonials />
      <CallToAction />
      <Contact />
    </div>
  );
}
