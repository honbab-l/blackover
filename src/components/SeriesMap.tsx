import React from 'react';
import { motion } from 'motion/react';
import { ExternalLink, Gamepad2 } from 'lucide-react';

const seriesData = [
  { 
    id: 1, 
    title: "BLACK OVER: ORIGINS", 
    image: "https://picsum.photos/seed/bo1/400/400?grayscale", 
    safeLink: "#", 
    unsafeLink: "#" 
  },
  { 
    id: 2, 
    title: "BLACK OVER: PROTOCOL", 
    image: "https://picsum.photos/seed/bo2/400/400?grayscale", 
    safeLink: "#", 
    unsafeLink: "#" 
  },
  { 
    id: 3, 
    title: "BLACK OVER: REQUIEM", 
    image: "https://picsum.photos/seed/bo3/400/400?grayscale", 
    safeLink: "#", 
    unsafeLink: "#" 
  },
  { 
    id: 4, 
    title: "BLACK OVER: NEXUS", 
    image: "https://picsum.photos/seed/bo4/400/400?grayscale", 
    safeLink: "#", 
    unsafeLink: "#" 
  },
];

export default function SeriesMap() {
  return (
    <div className="pb-12">
      <header className="border-b border-gray-800 pb-6 mb-8">
        <h2 className="text-2xl md:text-3xl font-bold tracking-widest text-white hover-glitch font-display" data-text="SERIES MAP">
          SERIES MAP
        </h2>
        <p className="text-gray-500 font-mono text-[10px] md:text-sm mt-1 hover-glitch uppercase">Black Over Operational Archives // Game Series</p>
      </header>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {seriesData.map((item, idx) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1 }}
            className="bg-black/40 border border-gray-800 p-4 hover:border-gray-500 transition-colors group box-glitch flex flex-col"
          >
            <div className="aspect-square w-full relative overflow-hidden mb-4 border border-gray-700">
              <div className="absolute inset-0 bg-[url('https://picsum.photos/seed/noise/100/100?grayscale')] opacity-20 mix-blend-overlay z-10 pointer-events-none"></div>
              <img src={item.image} alt={item.title} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" />
              <div className="absolute top-2 right-2 z-20 bg-black/80 p-1.5 border border-gray-700 text-gray-400 group-hover:text-white transition-colors">
                <Gamepad2 size={16} />
              </div>
            </div>
            
            <h3 className="text-white font-display tracking-widest mb-4 text-center text-lg">{item.title}</h3>
            
            <div className="flex gap-2 mt-auto">
              <a 
                href={item.safeLink} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex-1 bg-gray-800 hover:bg-gray-700 text-white text-[10px] md:text-xs py-2.5 px-2 text-center font-korean transition-colors flex items-center justify-center gap-1 border border-gray-600"
              >
                세이프티 바로가기 <ExternalLink size={12} />
              </a>
              <a 
                href={item.unsafeLink} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex-1 bg-red-900/40 hover:bg-red-900/80 text-red-100 text-[10px] md:text-xs py-2.5 px-2 text-center font-korean transition-colors flex items-center justify-center gap-1 border border-red-800/50"
              >
                언세이프티 바로가기 <ExternalLink size={12} />
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
