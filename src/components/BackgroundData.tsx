import React, { useEffect, useState } from 'react';

export default function BackgroundData() {
  const [lines, setLines] = useState<string[]>([]);

  useEffect(() => {
    const generateLine = () => {
      const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%&*';
      let result = '';
      for (let i = 0; i < 150; i++) {
        result += chars.charAt(Math.floor(Math.random() * chars.length));
      }
      return `[SYS_LOG_${Math.floor(Math.random() * 9999).toString().padStart(4, '0')}] ` + result;
    };

    const initialLines = Array.from({ length: 45 }, generateLine);
    setLines(initialLines);

    const interval = setInterval(() => {
      setLines(prev => [...prev.slice(1), generateLine()]);
    }, 60);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none opacity-20 font-mono text-[11px] text-green-500/80 leading-tight whitespace-nowrap select-none flex flex-col justify-end">
      {lines.map((line, i) => (
        <div key={i}>{line}</div>
      ))}
    </div>
  );
}
