import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function CustomCursor() {
  const [mousePos, setMousePos] = useState({ x: -100, y: -100 });
  const [isHovered, setIsHovered] = useState(false);
  const [isClicking, setIsClicking] = useState(false);

  useEffect(() => {
    const onMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });

      // Check if hovering interactive elements
      const target = e.target;
      const isInteractive =
        target.tagName === 'BUTTON' ||
        target.tagName === 'A' ||
        target.tagName === 'INPUT' ||
        target.closest('button') ||
        target.closest('a') ||
        target.closest('.interactive-hover');

      setIsHovered(!!isInteractive);
    };

    const onMouseDown = () => setIsClicking(true);
    const onMouseUp = () => setIsClicking(false);

    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mousedown', onMouseDown);
    window.addEventListener('mouseup', onMouseUp);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mousedown', onMouseDown);
      window.removeEventListener('mouseup', onMouseUp);
    };
  }, []);

  return (
    <div className="hidden lg:block pointer-events-none fixed inset-0 z-50 overflow-hidden">
      {/* Outer Spring Glow Ring */}
      <motion.div
        className={`fixed top-0 left-0 rounded-full border border-cyan-400/40 mix-blend-screen transition-opacity duration-300 ${
          isHovered ? 'bg-cyan-500/10 border-cyan-300 scale-125' : ''
        }`}
        animate={{
          x: mousePos.x - (isHovered ? 28 : 18),
          y: mousePos.y - (isHovered ? 28 : 18),
          width: isHovered ? 56 : 36,
          height: isHovered ? 56 : 36,
          scale: isClicking ? 0.8 : 1,
        }}
        transition={{ type: 'spring', damping: 25, stiffness: 350, mass: 0.2 }}
        style={{
          boxShadow: '0 0 20px rgba(0, 240, 255, 0.3)',
        }}
      />

      {/* Inner Precision Dot */}
      <motion.div
        className="fixed top-0 left-0 w-2.5 h-2.5 bg-cyan-300 rounded-full mix-blend-difference"
        animate={{
          x: mousePos.x - 5,
          y: mousePos.y - 5,
        }}
        transition={{ type: 'spring', damping: 30, stiffness: 800, mass: 0.05 }}
      />
    </div>
  );
}
