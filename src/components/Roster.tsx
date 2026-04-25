import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { agents } from '../data/agents';
import { X, Activity, User, ShieldAlert, Crosshair, Lock } from 'lucide-react';

const COMMON_ID_CARD_BACK = 'https://i.postimg.cc/pX413SY0/2.png';

export default function Roster({ team }: { team: string }) {
  const teamAgents = agents.filter(a => a.team === team);
  const [selectedAgent, setSelectedAgent] = useState<typeof agents[0] | null>(null);

  const teamColor = team === 'ALPHA' ? 'text-red-500 border-red-500/50 bg-red-500/10' : 
                    team === 'BETA' ? 'text-blue-500 border-blue-500/50 bg-blue-500/10' : 
                    'text-green-500 border-green-500/50 bg-green-500/10';
  
  const textColor = team === 'ALPHA' ? 'text-red-500' : team === 'BETA' ? 'text-blue-500' : 'text-green-500';

  return (
    <div className="pb-12 min-h-[600px]">
      <AnimatePresence mode="wait">
        {!selectedAgent ? (
          <motion.div
            key="roster-list"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
          >
            <header className="border-b border-gray-800 pb-6 mb-8">
              <h2 className={`text-2xl md:text-3xl font-bold tracking-widest ${textColor} hover-glitch font-display`} data-text={`${team} TEAM`}>
                {team} TEAM
              </h2>
              <p className="text-gray-500 font-mono text-[10px] md:text-sm mt-1 hover-glitch uppercase">Authorized Personnel Only // Level 5 Clearance Required</p>
            </header>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {teamAgents.map((agent, idx) => (
                <motion.div
                  key={agent.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  onClick={() => setSelectedAgent(agent)}
                  className={`cursor-pointer group relative overflow-hidden bg-gradient-to-br from-gray-900 to-black border border-gray-800 hover:border-gray-500 transition-colors box-glitch`}
                >
                  <div className={`absolute top-0 left-0 w-1 h-full ${teamColor.split(' ')[1]} group-hover:bg-opacity-100 transition-all`}></div>
                  
                  <div className="relative z-20 p-5 flex items-start gap-4">
                    <div className="w-16 h-16 bg-gray-800 border border-gray-700 flex items-center justify-center shrink-0 relative overflow-hidden">
                      <div className="absolute inset-0 bg-[url('https://picsum.photos/seed/noise/100/100?grayscale')] opacity-20 mix-blend-overlay"></div>
                      {agent.image ? (
                        <img 
                          src={agent.image} 
                          alt={agent.name} 
                          className="w-full h-full object-cover relative z-10 grayscale group-hover:grayscale-0 transition-all"
                          referrerPolicy="no-referrer"
                        />
                      ) : (
                        <User size={32} className="text-gray-600 group-hover:text-gray-300 transition-colors relative z-10" />
                      )}
                    </div>
                    <div className="flex-1">
                      <div className="flex justify-between items-start">
                        <div>
                          <h3 className="text-xl font-bold text-gray-200 group-hover:text-white font-display tracking-wide uppercase hover-glitch" data-text={`[${agent.designation}] ${agent.callsign}`}>[{agent.designation}] {agent.callsign}</h3>
                          <p className="text-xs text-gray-500 font-mono uppercase">{agent.name}</p>
                        </div>
                      </div>
                      <div className="mt-3 flex gap-3 text-xs text-gray-400 font-mono">
                        <span className="flex items-center gap-1"><Crosshair size={12}/> {agent.position}</span>
                        <span className="flex items-center gap-1"><Activity size={12}/> AGE: {agent.age}</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ) : (
          <motion.div
            key="agent-detail"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            transition={{ duration: 0.3 }}
          >
            <AgentDetail agent={selectedAgent} onBack={() => setSelectedAgent(null)} textColor={textColor} />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function AgentDetail({ agent, onBack, textColor }: { agent: typeof agents[0], onBack: () => void, textColor: string }) {
  const [activeEasterEgg, setActiveEasterEgg] = useState<string | null>(null);
  const [showIdCard, setShowIdCard] = useState(false);
  const [isIdCardFlipped, setIsIdCardFlipped] = useState(false);
  const [showFingerprint, setShowFingerprint] = useState(false);

  return (
    <div className="relative w-full bg-[#0a0a0a] border border-gray-700 shadow-2xl shadow-black flex flex-col">
      {/* Header */}
      <div className="sticky top-0 z-30 bg-[#0a0a0a]/90 backdrop-blur-md border-b border-gray-800 p-4 flex justify-between items-center">
        <div className="flex items-center gap-3">
          <ShieldAlert className={textColor} size={20} />
          <span className="font-mono text-xs tracking-widest text-gray-400 hover-glitch">CLASSIFIED DOSSIER</span>
        </div>
        <button onClick={onBack} className="text-gray-400 hover:text-white transition-colors flex items-center gap-2 font-mono text-sm tracking-widest border border-gray-700 px-4 py-1.5 bg-gray-900/50 hover:bg-gray-800 group">
          <span className="group-hover:-translate-x-1 transition-transform">◀</span> BACK
        </button>
      </div>

      {/* Content */}
      <div className="p-6 md:p-8 flex flex-col gap-6 relative min-h-[400px]">
          <div className="absolute inset-0 scanlines opacity-30 pointer-events-none"></div>
          
          <div className="flex flex-col gap-6">
            {/* Top Section: Info & Photo */}
            <div className="flex flex-col md:flex-row gap-8 relative z-10">
              
              {/* Left: Info */}
              <div className="flex-1 space-y-4 relative">
                {/* Pentagon Stats Graphic (Moved to background of info) */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 opacity-10 pointer-events-none z-0">
                  <svg className="absolute inset-0 w-full h-full animate-rotate-slow text-red-500" viewBox="0 0 100 100">
                    <polygon points="50,5 95,38 78,95 22,95 5,38" fill="none" stroke="currentColor" strokeWidth="2" />
                    <circle cx="50" cy="50" r="40" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="4 4" />
                  </svg>
                  <svg className="absolute inset-0 w-full h-full animate-rotate-slow-reverse text-red-500" viewBox="0 0 100 100">
                    <polygon points="50,15 85,40 72,85 28,85 15,40" fill="none" stroke="currentColor" strokeWidth="1" />
                    <line x1="50" y1="15" x2="50" y2="85" stroke="currentColor" strokeWidth="1" />
                    <line x1="15" y1="40" x2="85" y2="40" stroke="currentColor" strokeWidth="1" />
                  </svg>
                </div>

                <div className="border-b-2 border-gray-700 pb-2 mb-4 relative z-10">
                  <h2 className="text-2xl md:text-4xl font-display text-white uppercase tracking-tight hover-glitch" data-text={agent.name}>{agent.name}</h2>
                </div>
                
                <div className="grid grid-cols-1 gap-2 text-sm font-mono relative z-10">
                  <InfoRow label="FILE No" value={agent.designation} onClick={() => setActiveEasterEgg('fileNo')} />
                  <InfoRow label="CODENAME" value={agent.callsign} textColor={textColor} onClick={() => setActiveEasterEgg('codename')} />
                  <InfoRow label="LISTED AS" value={agent.role} />
                  <InfoRow label="POSITION" value={agent.position} />
                  <div className="flex border-b border-gray-800/50 py-1 hover:bg-gray-900/30 transition-colors text-[10px] md:text-sm">
                    <div className="w-24 md:w-32 text-gray-500 shrink-0">CLEARANCE</div>
                    <div className="flex items-center gap-2">
                      <span className="text-red-500 font-bold">{agent.clearance}</span>
                    </div>
                  </div>
                  <InfoRow label="AGE" value={agent.age.toString()} />
                  <InfoRow label="DOB" value={agent.dob} />
                  <InfoRow label="NATIONALITY" value={agent.nationality} />
                </div>

                {/* New Section: Signature & ID / Fingerprint */}
                <div className="mt-6 border-t border-gray-800/50 pt-4 relative z-10">
                  <div className="text-gray-500 text-[10px] mb-2 font-mono">SIGNATURE</div>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <div className="w-full sm:w-[250px] h-[100px] bg-gray-900/30 border border-gray-800 flex items-center justify-center overflow-hidden shrink-0">
                      {agent.signature ? (
                        <img src={agent.signature} alt="Signature" className="w-full h-full object-contain invert opacity-80" />
                      ) : (
                        <span className="text-gray-700 text-xs font-mono">NO SIGNATURE ON FILE</span>
                      )}
                    </div>

                    <div className="flex flex-col justify-between font-mono w-full h-[100px]">
                      <button 
                        onClick={() => setShowIdCard(true)} 
                        className="h-[46px] bg-gray-900/40 border border-gray-700 hover:bg-gray-800 text-gray-300 text-xs px-4 flex items-center justify-between group transition-colors"
                      >
                        <span>CERTIFICATE OF IDENTITY</span>
                        <span className="text-red-500 group-hover:animate-pulse">VIEW [▶]</span>
                      </button>
                      <button 
                        onClick={() => setShowFingerprint(true)} 
                        className="h-[46px] bg-gray-900/40 border border-gray-700 hover:bg-gray-800 text-gray-300 text-xs px-4 flex items-center justify-between group transition-colors"
                      >
                        <span>FINGERPRINT</span>
                        <span className="text-green-500 group-hover:animate-pulse">SCAN [▶]</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right: Photo */}
              <div className="w-full md:w-64 shrink-0">
                <div 
                  className="aspect-[3/4] bg-gray-900 border-2 border-gray-700 relative overflow-hidden flex items-center justify-center group box-glitch cursor-pointer"
                  onClick={() => setActiveEasterEgg('photo')}
                >
                  <div className="absolute inset-0 bg-[url('https://picsum.photos/seed/static/400/600?grayscale')] opacity-30 mix-blend-overlay"></div>
                  <div className="absolute inset-0 scanlines opacity-50"></div>
                  {agent.image ? (
                    <img 
                      src={agent.image} 
                      alt={agent.name} 
                      className="w-full h-full object-cover relative z-10 grayscale hover:grayscale-0 transition-all duration-500"
                      referrerPolicy="no-referrer"
                    />
                  ) : (
                    <User size={64} className="text-gray-700" />
                  )}
                </div>
              </div>
            </div>

            {/* Middle Section: BIOMETRICS */}
            <div className="relative z-10 box-glitch">
              <div className="bg-gray-200 text-black font-display text-center py-1 mb-4 tracking-widest">
                BIOMETRICS
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4 text-sm font-mono border border-gray-800 p-4 bg-black/50">
                {/* Left Column */}
                <div className="space-y-4">
                  <div className="flex justify-between items-center border-b border-gray-800/50 pb-1">
                    <div className="text-gray-500 text-[10px]">HEIGHT</div>
                    <div className="text-gray-200 hover-glitch font-bold">{agent.stats.height}</div>
                  </div>
                  <div className="flex justify-between items-center border-b border-gray-800/50 pb-1">
                    <div className="text-gray-500 text-[10px]">WEIGHT</div>
                    <div className="text-gray-200 hover-glitch font-bold">{agent.stats.weight}</div>
                  </div>
                  <div className="flex justify-between items-center border-b border-gray-800/50 pb-1">
                    <div className="text-gray-500 text-[10px]">VISION</div>
                    <div className="text-gray-200 hover-glitch font-bold">{agent.stats.vision}</div>
                  </div>
                </div>
                {/* Right Column */}
                <div className="space-y-4">
                  <div className="flex justify-between items-center border-b border-gray-800/50 pb-1">
                    <div className="text-gray-500 text-[10px]">BLOOD TYPE</div>
                    <div className="text-gray-200 hover-glitch font-bold">{agent.stats.blood}</div>
                  </div>
                  <div className="flex justify-between items-center border-b border-gray-800/50 pb-1">
                    <div className="text-gray-500 text-[10px]">FOOT SIZE</div>
                    <div className="text-gray-200 hover-glitch font-bold">{agent.stats.footSize}</div>
                  </div>
                  <div className="flex justify-between items-center border-b border-gray-800/50 pb-1">
                    <div className="text-gray-500 text-[10px]">SMOKING</div>
                    <div className="text-gray-200 hover-glitch font-bold uppercase">{agent.stats.smoking}</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Section: INFORMATION */}
            <div className="relative z-10 box-glitch">
              <div className="bg-gray-200 text-black font-display text-center py-1 mb-4 tracking-widest">
                INFORMATION
              </div>
              <div className="border border-gray-800 p-4 bg-black/50 space-y-4 text-sm font-mono text-gray-300 leading-relaxed">
                <p><span className="text-gray-500">PRIMARY ARMAMENT:</span> {agent.outside}</p>
                <div className="font-korean whitespace-pre-wrap"><span className="text-gray-500 font-mono block mb-2">NOTES:</span>{agent.notes}</div>
              </div>
            </div>

            {/* Official Database Section */}
            <div className="relative z-10 box-glitch">
              <div className="bg-gray-200 text-black font-display text-center py-1 mb-4 tracking-widest uppercase">
                OFFICIAL DATABASE
              </div>
              <div className="border border-gray-800 p-4 bg-black/50 space-y-4 text-sm font-korean text-gray-300 leading-relaxed">
                <p className="text-gray-400 text-xs mb-4 border-b border-gray-800/50 pb-4">
                  아래의 데이터 키워드는 (1:1개인챗 기준) 제작자가 프롬프트에 기재한 '공식 설정'입니다. 여기에 기재되지 않은 정보는 AI가 생성한 결과물일 수 있습니다.
                </p>
                
                <div className="space-y-6 text-sm">
                  <div>
                    <h4 className="text-gray-400 font-bold mb-1 font-mono">[기본정보]</h4>
                    <p className="text-gray-300">이름, 성별, 나이, 생일, 국적, 외모, 체향, 목소리, 과거사, 학력, 성격, 태도, 말투, 화법, 말버릇</p>
                  </div>
                  <div>
                    <h4 className="text-gray-400 font-bold mb-1 font-mono">[직업관련]</h4>
                    <p className="text-gray-300">경력, 주 무기, 작전포지션, 특기, 수행능력, 콜사인 유래</p>
                  </div>
                  <div>
                    <h4 className="text-gray-400 font-bold mb-1 font-mono">[디테일]</h4>
                    <p className="text-gray-300">혈액형, 발사이즈, 시력, 체지방률, 체질, 건강상태, 식습관, 수면습관, 아플때 모습, 자기관리, 아침루틴, 수면전 루틴, 운동루틴, 버릇, 약점, 트라우마, 종교관, 주요 소지품, 차량, 운전스타일, 휴대폰, 연락스타일, 이상형, 과거 연애경험, 필체, 요리실력, 거주지, 사유지, 재산규모, 재산관리, 소비철학, 패션감각, 호불호, 주량, 술취향, 술버릇, 취미, 특기, 흡연여부, 양손잡이 여부, 침대에서 특징, 성향, 취향, 그 외의 10여개의 일상 속 TMI</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      <AnimatePresence>
        {activeEasterEgg && (
          <EasterEggPopup 
            type={activeEasterEgg} 
            text={agent.easterEggs[activeEasterEgg as keyof typeof agent.easterEggs]} 
            onClose={() => setActiveEasterEgg(null)} 
          />
        )}
      </AnimatePresence>

      {/* ID Card Popup */}
      <AnimatePresence>
        {showIdCard && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[70] flex items-center justify-center bg-black/90 backdrop-blur-md p-4"
          >
            <div 
              className="absolute inset-0" 
              onClick={() => { 
                setShowIdCard(false); 
                setTimeout(() => setIsIdCardFlipped(false), 300); 
              }}
            ></div>
            
            <div 
              className="relative w-full max-w-sm aspect-[2/3] cursor-pointer"
              style={{ perspective: '1000px' }}
              onClick={() => {
                if (!isIdCardFlipped) setIsIdCardFlipped(true);
                else {
                  setShowIdCard(false);
                  setTimeout(() => setIsIdCardFlipped(false), 300);
                }
              }}
            >
              <motion.div
                className="w-full h-full relative preserve-3d transition-transform duration-700"
                animate={{ rotateY: isIdCardFlipped ? 180 : 0 }}
                transition={{ duration: 0.6, type: "spring", stiffness: 260, damping: 20 }}
              >
                {/* Front (Back of the card, visible initially) */}
                <div className="absolute inset-0 backface-hidden rounded-xl overflow-hidden border border-gray-700 shadow-2xl shadow-black">
                  <img src={COMMON_ID_CARD_BACK} alt="ID Card Back" className="w-full h-full object-cover" />
                </div>
                
                {/* Back (Front of the card with agent info, visible after flip) */}
                <div className="absolute inset-0 backface-hidden rotate-y-180 rounded-xl overflow-hidden border border-gray-700 shadow-2xl shadow-black">
                  <img src={agent.idCardFront} alt="ID Card Front" className="w-full h-full object-cover" />
                </div>
              </motion.div>
            </div>
            <div className="absolute bottom-8 text-gray-500 font-mono text-xs animate-pulse pointer-events-none">
              {isIdCardFlipped ? "CLICK TO CLOSE" : "CLICK TO FLIP"}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Fingerprint Popup */}
      <AnimatePresence>
        {showFingerprint && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[70] flex items-center justify-center bg-black/90 backdrop-blur-md p-4"
            onClick={() => setShowFingerprint(false)}
          >
            <div className="relative w-full max-w-xs aspect-[3/4] border border-green-500/30 bg-black overflow-hidden flex items-center justify-center shadow-[0_0_30px_rgba(0,255,0,0.1)] cursor-pointer">
              <img src={agent.fingerprint} alt="Fingerprint" className="w-full h-full object-contain invert opacity-80" />
              
              {/* Scanline */}
              <div className="absolute left-0 right-0 h-1 bg-green-500 shadow-[0_0_15px_rgba(0,255,0,0.8)] animate-scan-vertical"></div>
              <div className="absolute inset-0 bg-green-500/5 mix-blend-overlay pointer-events-none"></div>
            </div>
            <div className="absolute bottom-8 text-green-500/50 font-mono text-xs animate-pulse pointer-events-none">
              SCANNING... CLICK ANYWHERE TO CLOSE
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function InfoRow({ label, value, textColor = "text-gray-200", onClick }: { label: string, value: string, textColor?: string, onClick?: () => void }) {
  return (
    <div className="flex border-b border-gray-800/50 py-1 hover:bg-gray-900/30 transition-colors text-[10px] md:text-sm">
      <div className="w-24 md:w-32 text-gray-500 shrink-0">{label}</div>
      <div 
        className={`${textColor} font-bold hover-glitch truncate ${onClick ? 'cursor-pointer hover:underline decoration-dashed underline-offset-4' : ''}`}
        onClick={onClick}
      >
        {value}
      </div>
    </div>
  );
}

function EasterEggPopup({ type, text, onClose }: { type: string, text: string, onClose: () => void }) {
  let title = "SYSTEM QUERY";
  let content = null;

  if (type === 'fileNo') {
    title = "DATABASE ACCESS";
    content = (
      <div className="space-y-2">
        <div className="flex gap-2"><span className="text-green-500">▶</span> QUERYING ARCHIVES...</div>
        <div className="pl-4 text-gray-400">▼ MATCH FOUND</div>
        <div className="pl-4 text-gray-400">▼ DECRYPTING...</div>
        <div className="bg-green-500/20 text-green-400 p-1 pl-4 border-l-2 border-green-500">
          ▼ CLEARANCE VERIFIED
        </div>
      </div>
    );
  } else if (type === 'codename') {
    title = "ALIAS ANALYSIS";
    content = (
      <div className="space-y-2">
        <div className="flex gap-2"><span className="text-green-500">▶</span> SEMANTIC SEARCH</div>
        <div className="pl-4 text-gray-400">▼ CROSS-REFERENCING</div>
        <div className="flex gap-2"><span className="text-green-500">▶</span> BEHAVIORAL PROFILE</div>
        <div className="bg-green-500/20 text-green-400 p-1 pl-4 border-l-2 border-green-500">
          ▼ MATCH: 99.8%
        </div>
      </div>
    );
  } else if (type === 'photo') {
    title = "FACIAL RECOGNITION";
    content = (
      <div className="space-y-2">
        <div className="flex gap-2"><span className="text-green-500">▶</span> EXECUTING SCAN [FR-4]</div>
        <div className="pl-4 text-gray-400">▼ BIOMETRICS</div>
        <div className="pl-4 text-gray-400">▼ OSTEOLOGY</div>
        <div className="flex gap-2"><span className="text-green-500">▶</span> DATA OUTPUT</div>
        <div className="pl-4 text-gray-400">▼ STATISTICS</div>
        <div className="bg-green-500/20 text-green-400 p-1 pl-4 border-l-2 border-green-500">
          ▼ XZ-CORE 22.7 / 1231.B*1.36
        </div>
      </div>
    );
  }

  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[60] w-[90vw] max-w-xs bg-[#111] border border-gray-700 shadow-2xl shadow-black font-mono text-[10px] md:text-xs"
    >
      <div className="bg-[#4ade80] text-black font-bold p-1.5 px-3 flex justify-between items-center tracking-widest">
        <span>{title}</span>
        <button onClick={onClose} className="hover:text-white transition-colors"><X size={14}/></button>
      </div>
      <div className="p-4 text-gray-300 space-y-4">
        <div>{content}</div>
        <div className="border-t border-gray-700 pt-3 mt-2 text-gray-400 font-korean leading-relaxed">
          {text}
        </div>
      </div>
    </motion.div>
  );
}
