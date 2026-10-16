import React, { useState, useEffect } from 'react';
import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion';
import { Code, Terminal, Sparkles, Zap, ArrowDown, Cpu, Layers, Rocket, ShieldCheck } from 'lucide-react';

export default function HeroSection() {
  const [typedText, setTypedText] = useState('');
  const fullText = 'Crio experiências digitais com código, motion e matemática.';

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index < fullText.length) {
        setTypedText((prev) => prev + fullText.charAt(index));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 45);
    return () => clearInterval(timer);
  }, []);

  // Mouse tilt parallax for 3D card effect
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useSpring(useTransform(mouseY, [-300, 300], [12, -12]), { stiffness: 150, damping: 20 });
  const rotateY = useSpring(useTransform(mouseX, [-300, 300], [-12, 12]), { stiffness: 150, damping: 20 });

  function handleMouseMove(event) {
    const rect = event.currentTarget.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    mouseX.set(event.clientX - centerX);
    mouseY.set(event.clientY - centerY);
  }

  function handleMouseLeave() {
    mouseX.set(0);
    mouseY.set(0);
  }

  return (
    <section
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative min-h-screen pt-28 pb-16 flex flex-col justify-center items-center overflow-hidden"
    >
      {/* Background Ambient Radial Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-500/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/3 left-1/4 w-[400px] h-[400px] bg-purple-600/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[350px] h-[350px] bg-pink-500/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full text-center flex flex-col items-center">
        {/* Age & Status Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full glass-panel-glow text-cyan-300 text-xs font-mono mb-8 border border-cyan-500/30"
        >
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-cyan-400"></span>
          </span>
          <span>14 Anos • Programador Futuro & Motion Creator</span>
          <Zap className="w-3.5 h-3.5 text-yellow-400" />
        </motion.div>

        {/* Name Title with Motion Reveal */}
        <motion.h1
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-5xl sm:text-7xl lg:text-8xl font-black tracking-tight mb-6 leading-none"
        >
          <span className="text-white">Simão</span>{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-500 drop-shadow-[0_0_35px_rgba(0,240,255,0.4)]">
            Januário
          </span>
        </motion.h1>

        {/* Dynamic Typed Subtitle */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="h-12 max-w-2xl text-slate-300 text-base sm:text-xl font-mono flex items-center justify-center mb-10"
        >
          <p className="text-slate-300">
            {typedText}
            <span className="animate-pulse text-cyan-400 font-bold">|</span>
          </p>
        </motion.div>

        {/* Interactive 3D Holographic Code Canvas Display */}
        <motion.div
          style={{ rotateX, rotateY, transformStyle: 'preserve-3d' }}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.4 }}
          className="w-full max-w-3xl glass-panel-glow rounded-2xl p-6 sm:p-8 text-left relative group border border-cyan-500/20 shadow-[0_20px_50px_rgba(0,0,0,0.7)] my-4"
        >
          {/* Top Window Bar */}
          <div className="flex items-center justify-between border-b border-slate-800 pb-4 mb-4">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-rose-500/80" />
              <div className="w-3 h-3 rounded-full bg-amber-500/80" />
              <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
              <span className="ml-3 font-mono text-xs text-slate-400 flex items-center gap-2">
                <Terminal className="w-3.5 h-3.5 text-cyan-400" />
                simao_motion_engine.ts
              </span>
            </div>
            <div className="flex items-center gap-2 text-slate-500 text-xs font-mono">
              <span className="px-2 py-0.5 rounded bg-slate-800 text-cyan-400">TypeScript</span>
              <span>v5.4</span>
            </div>
          </div>

          {/* Interactive Live Syntax Code Lines */}
          <div className="font-mono text-xs sm:text-sm space-y-2 leading-relaxed text-slate-300 overflow-x-auto">
            <div>
              <span className="text-purple-400">const</span>{' '}
              <span className="text-cyan-300">developer</span> = &#123;
            </div>
            <div className="pl-6">
              <span className="text-slate-400">nome:</span>{' '}
              <span className="text-emerald-300">'Simão Januário'</span>,
            </div>
            <div className="pl-6">
              <span className="text-slate-400">idade:</span>{' '}
              <span className="text-amber-400">14</span>,
            </div>
            <div className="pl-6">
              <span className="text-slate-400">foco:</span> [
              <span className="text-emerald-300">'Motion Code'</span>,{' '}
              <span className="text-emerald-300">'Futuristic Web Design'</span>,{' '}
              <span className="text-emerald-300">'Interactive Canvas'</span>],
            </div>
            <div className="pl-6">
              <span className="text-slate-400">paixao:</span>{' '}
              <span className="text-cyan-400">Infinity</span>,
            </div>
            <div className="pl-6">
              <span className="text-purple-400">motionEngine</span>() &#123;
            </div>
            <div className="pl-12 text-slate-400">
              <span className="text-purple-400">return</span>{' '}
              <span className="text-pink-400">`Transformando linhas de código em arte visual!`</span>;
            </div>
            <div className="pl-6">&#125;</div>
            <div>&#125;;</div>
          </div>

          {/* Floating Floating Badges attached in 3D Space */}
          <motion.div
            style={{ translateZ: 30 }}
            className="absolute -top-5 -right-4 sm:-right-8 bg-[#0a0f24] border border-cyan-500/40 px-4 py-2 rounded-xl shadow-lg flex items-center gap-2 text-xs font-mono text-cyan-300"
          >
            <Sparkles className="w-4 h-4 text-cyan-400 animate-spin" style={{ animationDuration: '4s' }} />
            <span>Smooth Motion 60 FPS</span>
          </motion.div>

          <motion.div
            style={{ translateZ: 40 }}
            className="absolute -bottom-6 -left-4 sm:-left-8 bg-[#0a0f24] border border-purple-500/40 px-4 py-2 rounded-xl shadow-lg flex items-center gap-2 text-xs font-mono text-purple-300"
          >
            <Cpu className="w-4 h-4 text-purple-400" />
            <span>Clean & Logic Mindset</span>
          </motion.div>
        </motion.div>

        {/* Scroll CTA Button */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="mt-12 flex flex-col items-center gap-3"
        >
          <a
            href="#sobre"
            className="group px-8 py-4 rounded-xl bg-gradient-to-r from-cyan-500 via-purple-600 to-pink-500 font-mono text-xs sm:text-sm font-semibold tracking-wider uppercase text-white shadow-[0_0_30px_rgba(0,240,255,0.4)] hover:shadow-[0_0_50px_rgba(0,240,255,0.7)] transition-all hover:scale-105 flex items-center gap-3 interactive-hover"
          >
            <span>Explorar O Universo Motion</span>
            <Rocket className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>

          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
            className="text-slate-500 mt-4 flex items-center gap-1 font-mono text-[11px]"
          >
            <ArrowDown className="w-3.5 h-3.5 text-cyan-400" />
            <span>Desliza para ver a magia</span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
