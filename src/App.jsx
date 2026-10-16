import React, { useState } from 'react';
import ParticleCanvas from './components/ParticleCanvas';
import CustomCursor from './components/CustomCursor';
import ScrollProgress from './components/ScrollProgress';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import TechStackSection from './components/TechStackSection';
import InteractiveTerminal from './components/InteractiveTerminal';
import Footer from './components/Footer';

export default function App() {
  const [soundEnabled, setSoundEnabled] = useState(true);

  return (
    <div className="relative min-h-screen bg-[#030712] text-slate-100 font-sans selection:bg-cyan-500 selection:text-black overflow-x-hidden">
      {/* Top Scroll Progress Indicator */}
      <ScrollProgress />

      {/* Interactive Background Canvas */}
      <ParticleCanvas />

      {/* Custom Spring Cursor Follower */}
      <CustomCursor />

      {/* Navbar Header */}
      <Navbar soundEnabled={soundEnabled} setSoundEnabled={setSoundEnabled} />

      {/* Main Content Sections */}
      <main className="relative z-10 space-y-12 sm:space-y-24">
        <HeroSection />
        <AboutSection />
        <TechStackSection />
        <InteractiveTerminal />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
