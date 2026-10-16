import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Compass, Flame, Heart, Lightbulb, Sparkles, Terminal, Award, Clock, Cpu } from 'lucide-react';

export default function AboutSection() {
  const cards = [
    {
      title: 'Idade & Determinação',
      highlight: '14 Anos de Idade',
      desc: 'Enquanto muitos veem a idade como uma limitação, eu vejo como o meu maior superpoder. Começar cedo permitiu-me desenvolver raciocínio lógico e sensibilidade estética de forma natural.',
      icon: Flame,
      color: 'from-orange-500 to-amber-500',
      badge: 'Jovem Talento',
    },
    {
      title: 'Paixão Absoluta pelo Código',
      highlight: 'Curiosidade Sem Limites',
      desc: 'Adoro compreender como as coisas funcionam sob o capô. Para mim, programar não é só escrever sintaxe — é construir universos interativos e resolver problemas complexos com elegância.',
      icon: Code2,
      color: 'from-cyan-500 to-blue-600',
      badge: 'Lógica & Criatividade',
    },
    {
      title: 'Design Absurdo & Motion',
      highlight: 'Efeitos Ultra Fluidos',
      desc: 'Fascinam-me interações que reagem instantaneamente ao utilizador, física visual, parallax e efeitos de profundidade. O meu objetivo é transformar o simples scroll numa experiência inesquecível.',
      icon: Sparkles,
      color: 'from-purple-500 to-pink-500',
      badge: 'Motion Specialist',
    },
  ];

  const stats = [
    { label: 'Idade', value: '14', unit: 'anos' },
    { label: 'Horas a Programar', value: '1,200+', unit: 'horas' },
    { label: 'Paixão por Animações', value: '100%', unit: 'motion' },
    { label: 'Curiosidade', value: '∞', unit: 'infinita' },
  ];

  return (
    <section id="sobre" className="py-24 relative z-10 overflow-hidden">
      {/* Background Subtle Accent Glow */}
      <div className="absolute top-1/2 -right-40 w-96 h-96 bg-purple-600/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 -left-40 w-96 h-96 bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-300 font-mono text-xs mb-4"
          >
            <Compass className="w-3.5 h-3.5 text-purple-400" />
            <span>QUEM SOU EU</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight"
          >
            A Minha História & <span className="text-gradient-cyan">Visão</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-4 text-slate-400 font-mono text-sm sm:text-base max-w-2xl mx-auto"
          >
            Chamo-me Simão Januário. Sou apaixonado por tecnologia, linhas de código limpas e experiências visuais futuristas.
          </motion.p>
        </div>

        {/* Narrative Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {cards.map((card, idx) => {
            const Icon = card.icon;
            return (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.15 }}
                whileHover={{ y: -8, transition: { duration: 0.2 } }}
                className="glass-panel rounded-2xl p-6 sm:p-8 relative group border border-slate-800 hover:border-cyan-500/40 transition-all flex flex-col justify-between overflow-hidden"
              >
                {/* Glow Backdrop */}
                <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${card.color} opacity-10 rounded-full blur-2xl group-hover:opacity-25 transition-opacity`} />

                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${card.color} p-[1px] shadow-lg`}>
                      <div className="w-full h-full bg-[#070c1e] rounded-xl flex items-center justify-center">
                        <Icon className="w-6 h-6 text-slate-100" />
                      </div>
                    </div>
                    <span className="text-[10px] font-mono uppercase tracking-wider px-2.5 py-1 rounded-full bg-slate-800 text-slate-300 border border-slate-700">
                      {card.badge}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-2">{card.title}</h3>
                  <div className="text-cyan-400 font-mono text-xs font-semibold mb-4">{card.highlight}</div>
                  <p className="text-slate-400 text-sm leading-relaxed">{card.desc}</p>
                </div>

                <div className="mt-8 pt-4 border-t border-slate-800/80 flex items-center justify-between font-mono text-[11px] text-slate-500 group-hover:text-cyan-400 transition-colors">
                  <span>MOTION DRIVEN</span>
                  <Sparkles className="w-3.5 h-3.5" />
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Animated Counter Stats Panel */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="glass-panel-glow rounded-2xl p-8 border border-cyan-500/20 shadow-[0_10px_40px_rgba(0,0,0,0.5)]"
        >
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 text-center divide-y lg:divide-y-0 lg:divide-x divide-slate-800">
            {stats.map((stat, i) => (
              <div key={stat.label} className={`pt-4 lg:pt-0 ${i > 0 ? 'lg:pl-6' : ''}`}>
                <div className="text-3xl sm:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400 font-mono">
                  {stat.value}
                </div>
                <div className="text-xs font-mono text-slate-400 mt-2 uppercase tracking-wider">{stat.label}</div>
                <div className="text-[10px] font-mono text-cyan-500/70">{stat.unit}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
