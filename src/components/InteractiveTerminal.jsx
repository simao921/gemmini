import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Terminal, Send, Sparkles, HelpCircle, Code2, RefreshCw, Check, Monitor } from 'lucide-react';

export default function InteractiveTerminal() {
  const [input, setInput] = useState('');
  const [history, setHistory] = useState([
    {
      type: 'system',
      content: 'Bem-vindo ao Simão Januário Motion Terminal v1.0.4. Digita "help" para ver os comandos disponíveis.',
    },
  ]);
  const bottomRef = useRef(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history]);

  const handleCommand = (cmdStr) => {
    const cmd = cmdStr.trim().toLowerCase();
    const newHistory = [...history, { type: 'user', content: `$ ${cmdStr}` }];

    switch (cmd) {
      case 'help':
        newHistory.push({
          type: 'response',
          content: `Comandos disponíveis:\n  • bio      : Resumo sobre quem é o Simão Januário\n  • skills   : Lista rápida de tecnologias & motion\n  • matrix   : Ativar modo hacker e efeito especial\n  • quote    : Frase de inspiração sobre programação\n  • clear    : Limpar o ecrã do terminal`,
        });
        break;

      case 'bio':
        newHistory.push({
          type: 'response',
          content: `Simão Januário, 14 anos.\nProgramador apaixonado por animações motion, gráficos em tempo real, interatividade ultra-fluida e arquiteturas limpas.`,
        });
        break;

      case 'skills':
        newHistory.push({
          type: 'response',
          content: `Stack de eleição:\n  [x] React.js & JavaScript (ES6+)\n  [x] Framer Motion & CSS Animations\n  [x] Tailwind CSS & Modern UI\n  [x] HTML5 Canvas 2D & Particle Physics`,
        });
        break;

      case 'matrix':
        newHistory.push({
          type: 'response',
          content: `[01001101 01001111 01010100 01001001 01001111 01001110]\nIniciando simulação Matrix... O futuro do código pertence a quem o cria! ⚡`,
        });
        break;

      case 'quote':
        newHistory.push({
          type: 'response',
          content: `"The best way to predict the future is to invent it." — Alan Kay\nSimão Januário @ 14 anos de idade.`,
        });
        break;

      case 'clear':
        setHistory([]);
        return;

      case '':
        break;

      default:
        newHistory.push({
          type: 'error',
          content: `Comando não reconhecido: "${cmdStr}". Digita "help" para ver as opções.`,
        });
        break;
    }

    setHistory(newHistory);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!input.trim()) return;
    handleCommand(input);
    setInput('');
  };

  const quickChips = ['help', 'bio', 'skills', 'matrix', 'quote', 'clear'];

  return (
    <section id="terminal" className="py-24 relative z-10 overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-300 font-mono text-xs mb-4"
          >
            <Terminal className="w-3.5 h-3.5 text-emerald-400" />
            <span>INTERACTIVE MOTION LAB</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight"
          >
            Simão <span className="text-emerald-400 font-mono">&gt;_ Terminal</span>
          </motion.h2>

          <p className="mt-3 text-slate-400 font-mono text-xs sm:text-sm">
            Executa comandos em tempo real e explora o universo de código.
          </p>
        </div>

        {/* Terminal Window Box */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass-panel-glow rounded-2xl border border-emerald-500/30 overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.8)]"
        >
          {/* Top Bar */}
          <div className="bg-[#050917] px-4 py-3 border-b border-slate-800 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-rose-500/80" />
              <div className="w-3 h-3 rounded-full bg-amber-500/80" />
              <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
              <span className="ml-2 font-mono text-xs text-slate-400 flex items-center gap-1.5">
                <Monitor className="w-3.5 h-3.5 text-emerald-400" />
                bash — simao@motion-lab:~
              </span>
            </div>

            {/* Quick Chips */}
            <div className="hidden sm:flex items-center gap-1.5">
              {quickChips.map((chip) => (
                <button
                  key={chip}
                  onClick={() => handleCommand(chip)}
                  className="px-2.5 py-1 rounded-md bg-slate-800 hover:bg-emerald-500/20 hover:text-emerald-300 text-[10px] font-mono text-slate-400 border border-slate-700 transition-colors"
                >
                  {chip}
                </button>
              ))}
            </div>
          </div>

          {/* Terminal Logs Viewport */}
          <div className="p-6 font-mono text-xs sm:text-sm h-80 overflow-y-auto space-y-3 bg-[#030712]/95 text-slate-200">
            {history.map((item, idx) => (
              <div key={idx} className="leading-relaxed">
                {item.type === 'user' && (
                  <div className="text-emerald-400 font-semibold">{item.content}</div>
                )}
                {item.type === 'system' && (
                  <div className="text-slate-400 italic">{item.content}</div>
                )}
                {item.type === 'response' && (
                  <pre className="text-cyan-300 whitespace-pre-wrap font-mono pl-2 border-l-2 border-emerald-500/40 my-1">
                    {item.content}
                  </pre>
                )}
                {item.type === 'error' && (
                  <div className="text-rose-400">{item.content}</div>
                )}
              </div>
            ))}
            <div ref={bottomRef} />
          </div>

          {/* Command Input Form */}
          <form
            onSubmit={handleSubmit}
            className="bg-[#070d22] p-3 border-t border-slate-800 flex items-center gap-3"
          >
            <span className="text-emerald-400 font-mono font-bold text-sm pl-2">$</span>
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Digita um comando (ex: help, bio, skills)..."
              className="flex-1 bg-transparent text-xs sm:text-sm font-mono text-white focus:outline-none placeholder:text-slate-600"
            />
            <button
              type="submit"
              className="p-2 rounded-xl bg-emerald-500/20 text-emerald-400 hover:bg-emerald-500 hover:text-black transition-all"
            >
              <Send className="w-4 h-4" />
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
