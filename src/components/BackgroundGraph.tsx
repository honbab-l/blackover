import React, { useEffect, useState } from 'react';
import { motion } from 'motion/react';

export default function BackgroundGraph() {
  const [binaryLines, setBinaryLines] = useState<string[]>([]);

  useEffect(() => {
    const generateBinary = () => {
      let result = '';
      for (let i = 0; i < 40; i++) {
        result += Math.random() > 0.5 ? '1' : '0';
      }
      return result;
    };

    const lines = Array.from({ length: 15 }, generateBinary);
    setBinaryLines(lines);

    const interval = setInterval(() => {
      setBinaryLines(prev => [...prev.slice(1), generateBinary()]);
    }, 200);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden flex items-center justify-center opacity-70">
      {/* Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,255,0,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,0,0.08)_1px,transparent_1px)] bg-[size:40px_40px]"></div>
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,255,0,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,0,0.03)_1px,transparent_1px)] bg-[size:10px_10px]"></div>
      
      {/* Moving Radar Line */}
      <motion.div 
        className="absolute top-1/2 left-1/2 w-[200vw] h-[2px] bg-green-500/40 origin-left"
        animate={{ rotate: 360 }}
        transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
      />

      {/* Center HUD Circle */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-green-500/20 rounded-full flex items-center justify-center">
        <div className="w-[600px] h-[600px] border border-green-500/10 rounded-full"></div>
        <motion.div 
          className="absolute w-[700px] h-[700px] border-t-4 border-l-4 border-green-500/40 rounded-full"
          animate={{ rotate: 360 }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        />
        <motion.div 
          className="absolute w-[500px] h-[500px] border-b-4 border-r-4 border-green-500/30 rounded-full"
          animate={{ rotate: -360 }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
        />
      </div>

      {/* Sine Wave */}
      <svg className="absolute w-full h-64 top-1/4 opacity-60" preserveAspectRatio="none">
        <motion.path
          d="M 0 100 Q 250 0 500 100 T 1000 100 T 1500 100 T 2000 100"
          fill="none"
          stroke="rgba(0, 255, 0, 0.5)"
          strokeWidth="2"
          animate={{
            d: [
              "M 0 100 Q 250 0 500 100 T 1000 100 T 1500 100 T 2000 100",
              "M 0 100 Q 250 200 500 100 T 1000 100 T 1500 100 T 2000 100",
            ]
          }}
          transition={{ repeat: Infinity, duration: 4, ease: "easeInOut", repeatType: "mirror" }}
        />
      </svg>

      {/* Random Data Blocks Right */}
      <div className="absolute top-32 right-16 flex flex-col gap-4 opacity-90">
        <div className="text-xs font-mono text-green-500/90 mb-2 font-bold tracking-widest">SYSTEM.PERFORMANCE.MONITOR</div>
        {Array.from({length: 8}).map((_, i) => (
          <div key={i} className="flex items-center gap-2">
            <div className="text-[10px] font-mono text-green-500/70 w-10">CPU_0{i}</div>
            <motion.div 
              className="h-2 bg-green-500/70"
              animate={{ width: [20, 150, 40, 100, 20] }}
              transition={{ duration: 2 + i * 0.5, repeat: Infinity, ease: "linear" }}
            />
          </div>
        ))}
      </div>
      
      {/* Binary Code Block Left */}
      <div className="absolute bottom-32 left-16 flex flex-col opacity-90 font-mono text-xs text-green-500/80 leading-tight">
        <div className="text-green-500 font-bold mb-2 border-b border-green-500/50 pb-1 inline-block tracking-widest">DATA_STREAM_ACTIVE</div>
        {binaryLines.map((line, i) => (
          <div key={i}>{line}</div>
        ))}
      </div>

      {/* Decorative HUD Elements */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 flex gap-1 opacity-70">
        {Array.from({length: 20}).map((_, i) => (
          <div key={i} className="w-3 h-6 border border-green-500/50"></div>
        ))}
      </div>
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex gap-1 opacity-70">
        {Array.from({length: 40}).map((_, i) => (
          <div key={i} className="w-1.5 h-3 bg-green-500/40"></div>
        ))}
      </div>

      {/* Crosshairs */}
      <div className="absolute top-1/4 left-1/4 w-12 h-12 border-2 border-green-500/40 rounded-full flex items-center justify-center opacity-70">
        <div className="w-2 h-2 bg-green-500/80 rounded-full"></div>
      </div>
      <div className="absolute bottom-1/4 right-1/4 w-16 h-16 border-2 border-green-500/40 rounded-full flex items-center justify-center opacity-70">
        <div className="w-3 h-3 border-2 border-green-500/80 rounded-full"></div>
      </div>
    </div>
  );
}
