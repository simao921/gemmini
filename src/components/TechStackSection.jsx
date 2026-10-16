import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Cpu, Code2, Layers, Terminal, Sparkles, CheckCircle2, Play, Flame } from 'lucide-react';

export default function TechStackSection() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedSkill, setSelectedSkill] = useState(null);

  const categories = [
    { id: 'all', label: 'Todas as Skills' },
    { id: 'frontend', label: 'Frontend & UI' },
    { id: 'motion', label: 'Animações & Motion' },
    { id: 'logic', label: 'Lógica & Linguagens' },
  ];

  const skills = [
    {
      id: 'react',
      name: 'React.js',
      category: 'frontend',
      level: 90,
      color: 'from-cyan-400 to-blue-500',
      icon: '⚛️',
      snippet: `const App = () => {\n  return (\n    <MotionContainer>\n      <CyberUI glow={true} />\n    </MotionContainer>\n  );\n};`,
      description: 'Construção de interfaces reativas baseadas em componentes modulares e estados otimizados.',
    },
    {
      id: 'motion',
      name: 'Framer Motion',
      category: 'motion',
      level: 95,
      color: 'from-purple-500 to-pink-500',
      icon: '✨',
      snippet: `<motion.div\n  animate={{ scale: [1, 1.05, 1], rotate: [0, 5, -5, 0] }}\n  transition={{ duration: 2, repeat: Infinity }}\n/>`,
      description: 'Criação de transições ultra fluidas, física de mola (spring physics) e gestos interativos.',
    },
    {
      id: 'tailwind',
      name: 'Tailwind CSS',
      category: 'frontend',
      level: 92,
      color: 'from-sky-400 to-teal-400',
      icon: '🎨',
      snippet: `<div className="glass-panel backdrop-blur-2xl border border-cyan-500/20 shadow-2xl hover:scale-105" />`,
      description: 'Estilização utilitária rápida com estética cyberpunk, glassmorphism e gradients customizados.',
    },
    {
      id: 'ts',
      name: 'TypeScript & JavaScript (ES6+)',
      category: 'logic',
      level: 88,
      color: 'from-blue-500 to-indigo-600',
      icon: '⚡',
      snippet: `type Developer = {\n  name: string;\n  age: 14;\n  skills: Array<string>;\n};\n\nconst simao: Developer = { name: "Simão", age: 14, skills: ["Code", "Motion"] };`,
      description: 'Lógica fortemente tipada, código assíncrono (async/await), manipulação de DOM e algoritmos.',
    },
    {
      id: 'canvas',
      name: 'HTML5 Canvas 2D',
      category: 'motion',
      level: 85,
      color: 'from-emerald-400 to-cyan-500',
      icon: '🎯',
      snippet: `ctx.beginPath();\nctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);\nctx.fillStyle = "rgba(0, 240, 255, 0.8)";\nctx.fill();`,
      description: 'Sistemas de partículas matemáticas, efeito matrix, atração de cursor e animação no canvas.',
    },
    {
      id: 'css3',
      name: 'CSS Motion & Keyframes',
      category: 'motion',
      level: 90,
      color: 'from-pink-500 to-rose-500',
      icon: '🌌',
      snippet: `@keyframes pulseGlow {\n  0%, 100% { transform: scale(1); opacity: 0.5; }\n  50% { transform: scale(1.08); opacity: 1; }\n}`,
      description: 'Animações 3D transform, perspectivas de profundidade e estilizações com propriedades customizadas.',
    },
  ];

  const filteredSkills =
    activeCategory === 'all'
      ? skills
      : skills.filter((s) => s.category === activeCategory);

  return (
    <section id="skills" className="py-24 relative z-10 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 font-mono text-xs mb-4"
          >
            <Cpu className="w-3.5 h-3.5 text-cyan-400" />
            <span>MINHA STACK & PAIXÕES</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight"
          >
            Matriz de <span className="text-gradient-cyan">Linguagens & Motion</span>
          </motion.h2>

          <p className="mt-4 text-slate-400 font-mono text-sm max-w-2xl mx-auto">
            Clica em qualquer habilidade para ver o código e o efeito em ação!
          </p>
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-5 py-2 rounded-xl text-xs font-mono transition-all interactive-hover ${
                activeCategory === cat.id
                  ? 'bg-cyan-500 text-black font-bold shadow-[0_0_20px_rgba(0,240,255,0.5)] scale-105'
                  : 'glass-panel text-slate-300 hover:text-cyan-400 hover:border-cyan-500/30'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Skills Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          <AnimatePresence mode="popLayout">
            {filteredSkills.map((skill) => {
              const isSelected = selectedSkill?.id === skill.id;
              return (
                <motion.div
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  key={skill.id}
                  onClick={() => setSelectedSkill(skill)}
                  className={`glass-panel rounded-2xl p-6 border transition-all cursor-pointer relative group overflow-hidden ${
                    isSelected
                      ? 'border-cyan-400 shadow-[0_0_30px_rgba(0,240,255,0.25)] bg-[#0c132c]'
                      : 'border-slate-800 hover:border-cyan-500/40 hover:bg-[#070d24]'
                  }`}
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="text-3xl">{skill.icon}</div>
                    <div className="px-2.5 py-1 rounded-full bg-slate-800 border border-slate-700 text-[10px] font-mono text-cyan-400 font-semibold">
                      {skill.level}% Nível
                    </div>
                  </div>

                  <h3 className="text-lg font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors">
                    {skill.name}
                  </h3>

                  <p className="text-slate-400 text-xs leading-relaxed mb-6 line-clamp-2">
                    {skill.description}
                  </p>

                  {/* Motion Meter Bar */}
                  <div className="w-full bg-slate-800 rounded-full h-2 overflow-hidden p-0.5 border border-slate-700/50">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, ease: 'easeOut' }}
                      className={`h-full rounded-full bg-gradient-to-r ${skill.color}`}
                    />
                  </div>

                  <div className="mt-4 flex items-center justify-between text-[11px] font-mono text-slate-500 group-hover:text-cyan-400">
                    <span>Ver Código Snippet</span>
                    <Play className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

        {/* Selected Skill Code Viewer Modal / Drawer */}
        <AnimatePresence>
          {selectedSkill && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              className="glass-panel-glow rounded-2xl p-6 sm:p-8 border border-cyan-500/30 shadow-[0_20px_50px_rgba(0,0,0,0.8)] relative"
            >
              <button
                onClick={() => setSelectedSkill(null)}
                className="absolute top-4 right-4 text-slate-400 hover:text-white font-mono text-xs px-3 py-1 rounded-lg bg-slate-800 border border-slate-700"
              >
                ✕ Fechar
              </button>

              <div className="flex items-center gap-3 mb-4">
                <span className="text-3xl">{selectedSkill.icon}</span>
                <div>
                  <h4 className="text-xl font-bold text-white">{selectedSkill.name}</h4>
                  <p className="text-xs font-mono text-cyan-400">Live Syntax Inspection</p>
                </div>
              </div>

              <div className="bg-[#030712] rounded-xl p-4 border border-slate-800 font-mono text-xs text-cyan-300 overflow-x-auto">
                <pre>{selectedSkill.snippet}</pre>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
