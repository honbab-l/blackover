import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Image as ImageIcon } from 'lucide-react';
import { fanarts } from '../data/fanart';

export default function FanartGallery() {
  const [selectedImage, setSelectedImage] = useState<typeof fanarts[0] | null>(null);

  return (
    <div className="pb-12 min-h-[600px]">
      <AnimatePresence mode="wait">
        {!selectedImage ? (
          <motion.div
            key="gallery-grid"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
          >
            <header className="border-b border-gray-800 pb-6 mb-8 mt-2">
              <h2 className="text-2xl md:text-3xl font-bold tracking-widest text-[#d8b4e2] hover-glitch font-display flex items-center gap-3">
                <ImageIcon />
                FAN ART
              </h2>
              <div className="mt-4 space-y-4">
                <p className="text-gray-300 font-korean text-sm leading-relaxed">
                  보내주신 팬아트를 함께 나누는 페이지 입니다. 공유해주실 이미지가 있다면 아래의 메일로 언제든 보내주세요.<br/>
                  <span className="text-[#d8b4e2] font-mono">■이메일: honbab__@naver.com</span>
                </p>
                <div className="bg-gray-900/50 border-l-2 border-gray-600 p-4 space-y-2">
                  <p className="text-gray-400 font-korean text-xs leading-relaxed">
                    저는 보내주시는 모든 이미지를 환영하고 감사히 감상합니다! (모두 정말 근사하다고 생각합니다♡)
                  </p>
                  <p className="text-gray-500 font-korean text-xs leading-relaxed">
                    하지만 홈페이지는 모두가 보는 곳인 만큼 아래에 해당되는 이미지를 제외하고 업로드 할 수 있으니 너른 양해 부탁드립니다.<br/>
                    - 과도하게 선정적이거나 폭력적인 이미지<br/>
                    - 타인의 캐릭터 이입에 방해가 될 수 있는 요소 (여장, TS, 드림커플 등)
                  </p>
                </div>
              </div>
            </header>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
              {[...fanarts].reverse().map((item, idx) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: (idx % 10) * 0.05 }}
                  onClick={() => item.imageUrl && setSelectedImage(item)}
                  className={`group relative aspect-square bg-gray-900 border border-gray-800 transition-colors overflow-hidden ${item.imageUrl ? 'cursor-pointer hover:border-gray-500 box-glitch' : ''}`}
                >
                  {item.imageUrl ? (
                    <img 
                      src={item.imageUrl} 
                      alt={item.title} 
                      className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                      referrerPolicy="no-referrer"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-gray-700 font-mono text-xs opacity-50 bg-[url('https://picsum.photos/seed/noise/100/100?grayscale')] mix-blend-overlay">
                      [NO SIGNAL]
                    </div>
                  )}
                  {item.imageUrl && (
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent p-4 flex flex-col justify-end opacity-80 group-hover:opacity-100 transition-opacity">
                      <span className="font-korean text-sm font-bold text-gray-200">{item.title}</span>
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>
        ) : (
          <motion.div
            key="gallery-detail"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            transition={{ duration: 0.3 }}
            className="flex flex-col items-center"
          >
            <div className="w-full bg-[#0a0a0a] border border-gray-700 shadow-2xl shadow-black p-4 mb-6">
              <div className="flex justify-between items-center border-b border-gray-800 pb-4 mb-6">
                <button 
                  onClick={() => setSelectedImage(null)} 
                  className="text-gray-400 hover:text-white transition-colors flex items-center gap-2 font-mono text-sm tracking-widest border border-gray-700 px-4 py-1.5 bg-gray-900/50 hover:bg-gray-800 group"
                >
                  <span className="group-hover:-translate-x-1 transition-transform">◀</span> BACK
                </button>
                <span className="font-mono text-xs tracking-widest text-[#d8b4e2] hover-glitch hidden md:block">RECORD: {selectedImage.title}</span>
              </div>
              
              <div className="w-full flex justify-center bg-black/50 p-2 md:p-8 min-h-[50vh] border border-gray-800 relative z-10">
                <img 
                  src={selectedImage.imageUrl} 
                  alt={selectedImage.title} 
                  className="max-h-[75vh] w-auto object-contain shadow-2xl"
                  referrerPolicy="no-referrer"
                />
              </div>

              <div className="mt-6 text-center border-t border-gray-800 pt-6 px-4">
                <h3 className="font-korean text-lg md:text-xl text-gray-200">{selectedImage.title}</h3>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
