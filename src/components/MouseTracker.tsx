import React, { useEffect, useState } from 'react';
import { motion } from 'motion/react';

export default function MouseTracker() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 w-10 h-10 border border-red-500/40 rounded-full pointer-events-none z-[100] flex items-center justify-center mix-blend-screen"
        animate={{ x: mousePos.x - 20, y: mousePos.y - 20 }}
        transition={{ type: 'spring', stiffness: 400, damping: 28, mass: 0.5 }}
      >
        <div className="w-1 h-1 bg-red-500 rounded-full"></div>
        <div className="absolute w-full h-[1px] bg-red-500/20"></div>
        <div className="absolute h-full w-[1px] bg-red-500/20"></div>
      </motion.div>
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[100] text-[10px] font-mono text-red-500/70 ml-8 mt-6 mix-blend-screen"
        animate={{ x: mousePos.x, y: mousePos.y }}
        transition={{ type: 'spring', stiffness: 300, damping: 30, mass: 0.8 }}
      >
        X:{mousePos.x} Y:{mousePos.y}
      </motion.div>
    </>
  );
}
