import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Sparkles, Heart, Zap, ArrowUp } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative z-10 border-t border-slate-800/80 bg-[#02050e] py-12 overflow-hidden">
      {/* Background Bottom Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-32 bg-cyan-500/5 blur-[100px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-6">
        {/* Brand Signoff */}
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-cyan-500 to-purple-600 p-[1px]">
            <div className="w-full h-full bg-[#050814] rounded-xl flex items-center justify-center">
              <span className="font-mono font-bold text-xs text-cyan-400">SJ</span>
            </div>
          </div>
          <div>
            <div className="font-mono text-sm font-semibold text-white flex items-center gap-1.5">
              Simão Januário
              <span className="text-cyan-400 text-xs">• 14 Anos</span>
            </div>
            <p className="text-[11px] font-mono text-slate-500">
              Desenvolvido com pura paixão por Código & Motion.
            </p>
          </div>
        </div>

        {/* Central Quote / Manifesto */}
        <div className="hidden md:flex items-center gap-2 text-xs font-mono text-slate-400 bg-slate-900/60 px-4 py-2 rounded-full border border-slate-800">
          <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
          <span>"O código é a tela, a imaginação é a arte."</span>
        </div>

        {/* Scroll Back To Top Button */}
        <button
          onClick={scrollToTop}
          className="p-3 rounded-xl glass-panel text-slate-300 hover:text-cyan-400 hover:border-cyan-500/30 transition-all flex items-center gap-2 font-mono text-xs interactive-hover"
          title="Voltar ao topo"
        >
          <span>Topo</span>
          <ArrowUp className="w-4 h-4 text-cyan-400" />
        </button>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mt-8 pt-6 border-t border-slate-900 text-center text-[11px] font-mono text-slate-600">
        © {new Date().getFullYear()} Simão Januário — Motion Portfolio Experience.
      </div>
    </footer>
  );
}
