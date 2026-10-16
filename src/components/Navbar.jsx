import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Terminal, Code2, User, Cpu, Sparkles, Volume2, VolumeX, Menu, X } from 'lucide-react';

export default function Navbar({ soundEnabled, setSoundEnabled }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Sobre Mim', href: '#sobre', icon: User },
    { name: 'Tech Stack', href: '#skills', icon: Cpu },
    { name: 'Terminal Lab', href: '#terminal', icon: Terminal },
  ];

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled ? 'py-3 bg-[#030712]/80 backdrop-blur-xl border-b border-cyan-500/10 shadow-[0_10px_30px_rgba(0,0,0,0.8)]' : 'py-6 bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <a href="#" className="flex items-center gap-3 group interactive-hover">
          <div className="relative w-10 h-10 rounded-xl bg-gradient-to-tr from-cyan-500 to-purple-600 p-[1px] transition-transform duration-300 group-hover:scale-105">
            <div className="w-full h-full bg-[#050814] rounded-xl flex items-center justify-center">
              <span className="font-mono font-bold text-cyan-400 group-hover:text-cyan-300">SJ</span>
            </div>
            <div className="absolute inset-0 bg-cyan-400/20 blur-md rounded-xl group-hover:bg-cyan-400/40 transition-all" />
          </div>
          <div className="flex flex-col">
            <span className="font-mono text-sm font-semibold tracking-wider text-slate-100 flex items-center gap-1.5">
              Simão Januário
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            </span>
            <span className="text-[10px] font-mono text-cyan-400/80">14 YO Motion Dev</span>
          </div>
        </a>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex items-center gap-1 glass-panel px-4 py-1.5 rounded-full border border-slate-800">
          {navLinks.map((link) => {
            const Icon = link.icon;
            return (
              <a
                key={link.name}
                href={link.href}
                className="px-4 py-2 text-xs font-mono text-slate-300 hover:text-cyan-400 transition-colors rounded-full hover:bg-white/5 flex items-center gap-2 interactive-hover"
              >
                <Icon className="w-3.5 h-3.5" />
                {link.name}
              </a>
            );
          })}
        </nav>

        {/* Right Action Controls */}
        <div className="hidden md:flex items-center gap-3">
          {/* Audio FX Toggle Button */}
          <button
            onClick={() => setSoundEnabled(!soundEnabled)}
            className="p-2.5 rounded-xl glass-panel text-slate-300 hover:text-cyan-400 hover:border-cyan-500/30 transition-all flex items-center gap-2 text-xs font-mono interactive-hover"
            title={soundEnabled ? 'Desativar Efeitos Sonoros' : 'Ativar Efeitos Sonoros'}
          >
            {soundEnabled ? (
              <>
                <Volume2 className="w-4 h-4 text-cyan-400" />
                <span className="text-[11px] text-cyan-400">AUDIO ON</span>
              </>
            ) : (
              <>
                <VolumeX className="w-4 h-4 text-slate-500" />
                <span className="text-[11px] text-slate-500">AUDIO OFF</span>
              </>
            )}
          </button>

          {/* Status Indicator Pill */}
          <div className="px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 text-xs font-mono flex items-center gap-2">
            <Sparkles className="w-3.5 h-3.5 animate-spin" style={{ animationDuration: '6s' }} />
            <span>Learning & Building</span>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center gap-2">
          <button
            onClick={() => setSoundEnabled(!soundEnabled)}
            className="p-2 rounded-lg glass-panel text-cyan-400"
          >
            {soundEnabled ? <Volume2 className="w-5 h-5" /> : <VolumeX className="w-5 h-5 text-slate-500" />}
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg glass-panel text-slate-200 hover:text-cyan-400"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-[#050814]/95 backdrop-blur-2xl border-b border-cyan-500/20 px-6 py-6"
          >
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => {
                const Icon = link.icon;
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center gap-3 text-slate-200 hover:text-cyan-400 font-mono text-sm py-2"
                  >
                    <Icon className="w-4 h-4 text-cyan-400" />
                    {link.name}
                  </a>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
