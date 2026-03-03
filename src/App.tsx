import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronRight } from 'lucide-react';
import MatrixRain from './components/MatrixRain';
import Worldview from './components/Worldview';
import Roster from './components/Roster';
import MouseTracker from './components/MouseTracker';
import BackgroundData from './components/BackgroundData';
import BackgroundGraph from './components/BackgroundGraph';

export default function App() {
  const [booting, setBooting] = useState(true);
  const [activeTab, setActiveTab] = useState('overview');

  useEffect(() => {
    const timer = setTimeout(() => {
      setBooting(false);
    }, 2500);
    return () => clearTimeout(timer);
  }, []);

  if (booting) {
    return <BootSequence />;
  }

  return (
    <div className="min-h-screen bg-[#050505] text-gray-300 font-mono overflow-hidden relative selection:bg-red-900 selection:text-white">
      <MouseTracker />
      <MatrixRain />
      <BackgroundData />
      <BackgroundGraph />
      <div className="scanlines"></div>
      <div className="crt"></div>

      <div className="relative z-10 flex h-screen">
        {/* Sidebar Navigation */}
        <nav className="w-64 border-r border-red-900/30 bg-black/80 backdrop-blur-md flex flex-col">
          <div className="p-6 border-b border-red-900/30 flex flex-col items-center">

            <img 
              src="https://i.postimg.cc/C5bqBnFx/logo.png" 
              alt="Black Over Logo" 
              className="w-full object-contain invert opacity-90 hover-glitch"
            />
            <p className="text-[10px] text-red-500/70 mt-2 tracking-widest uppercase hover-glitch">
              Top Secret Classified
            </p>
          </div>

          <div className="flex-1 py-6 flex flex-col gap-2 px-4">
            <NavButton 
              active={activeTab === 'overview'} 
              onClick={() => setActiveTab('overview')}
              label="SYSTEM OVERVIEW"
            />
            <div className="my-2 border-t border-gray-800"></div>
            <div className="text-[10px] text-gray-600 mb-1 px-2 tracking-widest">OPERATIVE ROSTERS</div>
            <NavButton 
              active={activeTab === 'ALPHA'} 
              onClick={() => setActiveTab('ALPHA')}
              label="TEAM ALPHA"
              color="text-red-500"
            />
            <NavButton 
              active={activeTab === 'BETA'} 
              onClick={() => setActiveTab('BETA')}
              label="TEAM BETA"
              color="text-blue-500"
            />
            <NavButton 
              active={activeTab === 'SUPPORT'} 
              onClick={() => setActiveTab('SUPPORT')}
              label="TEAM SUPPORT"
              color="text-green-500"
            />
          </div>

          <div className="p-4 border-t border-red-900/30 text-[10px] text-gray-600 flex justify-between items-center">
            <span className="hover-glitch">SYS.VER 9.4.2</span>
            <span className="animate-pulse text-red-500 hover-glitch">SECURE</span>
          </div>
        </nav>

        {/* Main Content Area */}
        <main className="flex-1 overflow-y-auto relative bg-black/60">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 10, filter: 'blur(4px)' }}
              animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              exit={{ opacity: 0, y: -10, filter: 'blur(4px)' }}
              transition={{ duration: 0.3 }}
              className="p-8 max-w-6xl mx-auto"
            >
              {activeTab === 'overview' ? (
                <Worldview />
              ) : (
                <Roster team={activeTab} />
              )}
            </motion.div>
          </AnimatePresence>
        </main>
      </div>
    </div>
  );
}

function NavButton({ active, onClick, label, color = "text-gray-400" }: { active: boolean, onClick: () => void, label: string, color?: string }) {
  return (
    <button
      onClick={onClick}
      className={`flex items-center gap-3 px-3 py-2.5 text-sm transition-all duration-200 text-left relative group box-glitch ${
        active ? 'bg-red-950/20 text-white border-l-2 border-red-600' : 'hover:bg-gray-900/50 text-gray-400 border-l-2 border-transparent'
      }`}
    >
      <span className={`tracking-wider hover-glitch ${active ? color : 'group-hover:text-gray-300'}`}>[{label}]</span>
      {active && <ChevronRight size={14} className="absolute right-2 text-red-600 animate-pulse" />}
    </button>
  );
}

function BootSequence() {
  const [lines, setLines] = useState<string[]>([]);
  
  useEffect(() => {
    const bootText = [
      "INITIALIZING SECURE CONNECTION...",
      "BYPASSING FIREWALL PROTOCOLS...",
      "DECRYPTING BLACK OVER MAINFRAME...",
      "ACCESSING CLASSIFIED PERSONNEL FILES...",
      "AUTHENTICATION SUCCESSFUL.",
      "WELCOME, OPERATIVE."
    ];
    
    let currentIndex = 0;
    const interval = setInterval(() => {
      if (currentIndex < bootText.length) {
        setLines(prev => [...prev, bootText[currentIndex]]);
        currentIndex++;
      } else {
        clearInterval(interval);
      }
    }, 300);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="h-screen w-screen bg-black text-green-500 font-mono p-8 flex flex-col justify-end pb-24">
      <div className="scanlines"></div>
      <div className="max-w-2xl">
        {lines.map((line, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            className="mb-2 flex items-center gap-2"
          >
            <span className="text-green-800">{'>'}</span> {line}
          </motion.div>
        ))}
        <motion.div 
          animate={{ opacity: [1, 0] }} 
          transition={{ repeat: Infinity, duration: 0.8 }}
          className="w-3 h-5 bg-green-500 mt-2"
        />
      </div>
    </div>
  );
}
