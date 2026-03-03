import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ShieldAlert, MapPin, Briefcase, Crosshair, AlertTriangle, Lock, Activity, Globe, Terminal, X } from 'lucide-react';

const teamChats = {
  ALPHA: [
    { sender: 'OSCAR', text: "Someone wanna grab a beer? I'm dying of boredom.", translation: "누구 맥주 마실 사람? 나 심심해 죽을 것 같은데." },
    { sender: 'OSCAR', text: "Hello? Anyone there?", translation: "여보세요? 아무도 없어?" },
    { sender: 'ERICK', text: "Shut up, Oscar. It's only been two minutes.", translation: "닥쳐, 오스카. 2분밖에 안 지났어." },
    { sender: 'OSCAR', text: "Oh, look who it is. The charming prince.", translation: "오, 누구신가 했더니. 매력적인 왕자님이시네." },
    { sender: 'OSCAR', text: "Did you finish polishing your rifle with the tears of your enemies?", translation: "네 적들의 눈물로 총 닦는 건 끝냈고?" },
    { sender: 'ERICK', text: "No, I was using your last date's tears. Seemed more effective.", translation: "아니, 네 마지막 데이트 상대 눈물로 닦고 있었는데. 그게 더 효과적이더라고." },
    { sender: 'OSCAR', text: "SHE WAS A NICE PERSON.", translation: "좋은 사람이었어." },
    { sender: 'ERICK', text: "For about five minutes, I bet.", translation: "한 5분 정도는 그랬겠지." },
    { sender: 'ERICK', text: "So where's the boss? And the big guy?", translation: "그래서 보스는 어디가고? 덩치는?" },
    { sender: 'OSCAR', text: "Our dear leader is probably meditating on a mountaintop, planning his next move to annoy me.", translation: "우리의 친애하는 리더께선 산꼭대기에서 명상 중이시겠지. 날 어떻게 더 짜증나게 할지 계획하면서." },
    { sender: 'ERICK', text: "You're a real poet.", translation: "아주 시인이 납셨네." },
    { sender: 'MAX', text: "Done with maintenance.", translation: "정비 끝." },
    { sender: 'OSCAR', text: "Speak of the devil! Or the grizzly, in this case.", translation: "호랑이도 제 말 하면 온다더니! 이 경우에는 그리즐리지만." },
    { sender: 'OSCAR', text: "So, Max. Beer? My treat.", translation: "그래서, 맥스. 맥주? 내가 살게." },
    { sender: 'MAX', text: "No.", translation: "싫어." },
    { sender: 'OSCAR', text: "...That was a quick and painful rejection.", translation: "…빠르고 고통스러운 거절이네." },
    { sender: 'ERICK', text: "Hah.", translation: "하." },
    { sender: 'ASHER', text: "Report in. What's the situation?", translation: "보고해. 무슨 상황인데?" },
    { sender: 'OSCAR', text: "The situation is dire. My liver is dangerously sober.", translation: "상황이 아주 심각해. 내 간이 위험할 정도로 멀쩡하거든." },
    { sender: 'ASHER', text: "He's just being a drama queen again. Ignore him.", translation: "또 그냥 관심병 도진 거야. 무시해." }
  ],
  BETA: [
    { sender: 'RAUL', text: "Hey, anyone seen my limited edition sneakers? The white ones with the red stripe.", translation: "야, 내 한정판 스니커즈 본 사람 있어? 흰색에 빨간 줄 있는 거." },
    { sender: 'NATHAN', text: "You mean the ones that look like clown shoes?", translation: "그 광대 신발처럼 생긴 거 말하는 건가?" },
    { sender: 'NATHAN', text: "Didn't see 'em. Maybe they ran away out of shame.", translation: "못 봤는데. 아마 쪽팔려서 도망갔나 보지." },
    { sender: 'RAUL', text: "Shut up, Nathan. Those cost me a fortune.", translation: "닥쳐, 네이슨. 그거 거금 들여 산 거야." },
    { sender: 'RAUL', text: "If I find out one of you idiots took them for a joyride...", translation: "니들 바보 중 하나가 그거 신고 나간 거면 알아서 해라…" },
    { sender: 'ISAAC', text: "I think I saw Vincent wearing something white earlier.", translation: "아까 빈센트가 흰색 신발 신고 있는 거 본 거 같은데." },
    { sender: 'ISAAC', text: "He was heading towards the mud pit.", translation: "진흙탕 쪽으로 가던데." },
    { sender: 'RAUL', text: "WHAT?", translation: "뭐?" },
    { sender: 'RAUL', text: "VINCENT!", translation: "빈센트!" },
    { sender: 'VINCENT', text: "Relax, Raul. I'm wearing my own running shoes.", translation: "진정해, 라울. 나 내 러닝화 신고 있어." },
    { sender: 'VINCENT', text: "And I'm nowhere near a mud pit. Just at the garden, watering the plants.", translation: "그리고 진흙탕 근처도 안 갔어. 그냥 정원에서 식물들 물 주고 있어." },
    { sender: 'PIC', text: "물조리개를 들고 웃고 있는 빈센트의 셀카", translation: "사진첨부" },
    { sender: 'NATHAN', text: "Look at that smile. Too wholesome for this team.", translation: "저 미소 좀 봐. 우리 팀에는 너무 건전해." },
    { sender: 'NATHAN', text: "It's sickening. In a good way.", translation: "구역질 나네. 좋은 의미로." },
    { sender: 'ISAAC', text: "My bad. Must have been a hallucination.", translation: "내 실수. 헛것을 봤나 봐." },
    { sender: 'RAUL', text: "You're useless, Isaac. Absolutely useless.", translation: "쓸모 없어, 아이작. 존나 쓸모 없어." },
    { sender: 'RAUL', text: "And Nathan, stop laughing. I can hear you from the hallway.", translation: "그리고 네이슨, 그만 쳐웃어. 복도까지 다 들리니까." },
    { sender: 'NATHAN', text: "Can't help it. It's like watching a cat lose its favorite toy.", translation: "어쩔 수 없어. 최애 장난감 잃어버린 고양이 보는 것 같아." },
    { sender: 'RAUL', text: "Screw you. I'm checking the security cam footage.", translation: "엿 먹어. 보안 카메라 영상 확인할 거야." }
  ],
  SUPPORT: [
    { sender: 'COLIN', text: "Server maintenance completed. Firewalls updated.", translation: "서버 점검 완료. 방화벽 업데이트 끝났어." },
    { sender: 'COLIN', text: "And I blocked that suspicious porn site you guys keep trying to access.", translation: "그리고 너희가 계속 접속하려고 시도하는 그 의심스러운 포르노 사이트 차단했어." },
    { sender: 'COLIN', text: "Seriously, have some class. The malware risk is astronomical.", translation: "진심, 수준 좀 갖춰라. 악성코드 위험이 천문학적이라고." },
    { sender: 'JOSHUA', text: "Hey! That was for research purposes!", translation: "야! 그건 연구 목적이었다고!" },
    { sender: 'JOSHUA', text: "Cultural research. Very important.", translation: "문화적인 연구. 아주 중요한 거지." },
    { sender: 'JAY', text: "Cultural research involving scantily clad women and questionable plotlines?", translation: "노출 심한 여자들과 의문스러운 줄거리가 포함된 문화 연구 말이야?" },
    { sender: 'JAY', text: "Fascinating. Please, elaborate on your thesis, Joshua.", translation: "흥미롭네. 부디 네 논문에 대해 자세히 설명해 줘, 조슈아." },
    { sender: 'JOSHUA', text: "You wouldn't understand, Jay. It's high art.", translation: "넌 이해 못 해, 제이. 이건 고차원적인 예술이야." },
    { sender: 'JOSHUA', text: "Besides, Colin, you're no fun. You're like a digital nun.", translation: "그나저나 콜린, 넌 재미가 없어. 무슨 디지털 수녀님 같아." },
    { sender: 'COLIN', text: "I prefer \"Digital Guardian Angel\". And I just saved your laptop from becoming a paperweight.", translation: "난 '디지털 수호천사' 쪽을 더 선호하는데. 그리고 방금 네 노트북이 벽돌 되는 걸 막아줬잖아." },
    { sender: 'COLIN', text: "You're welcome.", translation: "천만에." },
    { sender: 'BLAKE', text: "Is everyone's equipment secure? I saw some fluctuation in the power grid earlier.", translation: "모두 장비는 안전해? 아까 전력망에 약간의 변동이 있던데." },
    { sender: 'COLIN', text: "It was just a minor surge. Nothing the backup generators couldn't handle.", translation: "그냥 사소한 서지였어요. 백업 발전기가 감당 못할 수준은 아니었죠." },
    { sender: 'COLIN', text: "Unless someone plugged in a toaster oven in the server room again.", translation: "누가 서버실에 또 토스터 오븐을 꽂아놓지만 않았다면 말이죠." },
    { sender: 'COLIN', text: "Looking at you, Joshua.", translation: "너 보면서 하는 말이야, 조슈아." },
    { sender: 'JOSHUA', text: "Warm bagels are essential for morale.", translation: "따뜻한 베이글은 사기 진작에 필수적이야." },
    { sender: 'BLAKE', text: "Keep food out of the server room. That's an order.", translation: "서버실에 음식물 반입 금지다. 명령이야." },
    { sender: 'BLAKE', text: "We can't have crumbs in the cooling vents.", translation: "냉각 환풍구에 부스러기 들어가게 할 순 없어." }
  ]
};

export default function Worldview() {
  const [activeChat, setActiveChat] = useState<string | null>(null);
  const [showMilla, setShowMilla] = useState(false);

  return (
    <div className="space-y-8 pb-12">
      <header className="border-b border-red-900/50 pb-6 flex justify-between items-end">
        <div>
          <div className="flex items-center gap-3 mb-2">
            <h2 className="text-4xl font-display text-white tracking-tighter hover-glitch" data-text="BLACK OVER">BLACK OVER</h2>
          </div>
          <p className="text-red-500/80 font-mono text-sm tracking-widest hover-glitch">PRIVATE MILITARY COMPANY // CLASSIFIED INTEL</p>
        </div>
        <div className="text-right font-mono">
          <div className="text-green-500 text-sm flex items-center gap-2 justify-end hover-glitch">
            <Lock size={14} /> ACCESS GRANTED
          </div>
          <div className="text-gray-500 text-xs mt-1 hover-glitch">SECURITY CLEARANCE: LEVEL 5</div>
          <div className="text-gray-500 text-xs hover-glitch">ENCRYPTION: AES-256</div>
        </div>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <InfoCard 
          icon={<Globe className="text-gray-400" />}
          title="GLOBAL OPERATIONS"
          content="Extensive operational reach including classified projects, special ops, military consulting, VIP protection, and covert transport. Frequent collaboration with allied intelligence agencies."
        />
        <InfoCard 
          icon={<Briefcase className="text-gray-400" />}
          title="ORGANIZATION STATUS"
          content="Tier-1 Private Military Company. Unmatched in the industry. Possesses an independent, highly classified intelligence network."
        />
      </div>

      <div className="mt-12 grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-6">
          <h3 className="text-xl font-bold text-white border-l-4 border-red-600 pl-3 hover-glitch">TACTICAL SQUADS</h3>
          
          <div className="space-y-4">
            <SquadRow 
              name="ALPHA" 
              desc="Special operations vanguard. The undisputed aces and symbolic core of the company."
              color="border-red-500/30"
              text="text-red-400"
              onClick={() => setActiveChat('ALPHA')}
            />
            <SquadRow 
              name="BETA" 
              desc="Special operations. Highly cohesive unit. Maintains professional distance from Alpha."
              color="border-blue-500/30"
              text="text-blue-400"
              onClick={() => setActiveChat('BETA')}
            />
            <SquadRow 
              name="SUPPORT" 
              desc="Field support and tactical oversight. Fully combat-capable in contingency scenarios."
              color="border-green-500/30"
              text="text-green-400"
              onClick={() => setActiveChat('SUPPORT')}
            />
          </div>
        </div>

        <div className="space-y-6">
          <div className="p-4 bg-gray-900/40 border border-gray-800 rounded-sm relative overflow-hidden box-glitch">
            <div className="absolute inset-0 scanlines opacity-20 pointer-events-none"></div>
            <h4 className="text-gray-300 font-bold mb-2 flex items-center gap-2 hover-glitch">
              <Activity size={16} className="text-red-500" />
              MAIN SQUADS
            </h4>
            <p className="text-xs text-gray-500 mb-4">Standard 6-man squads for general missions and heavy fire support.</p>
            <div className="flex flex-wrap gap-2">
              {['PHANTOM', 'JAGUAR', 'VIPER', 'WARDEN', 'AXLE'].map(squad => (
                <span key={squad} className="px-2 py-1 bg-black border border-gray-700 text-xs text-gray-400 font-mono hover-glitch">[{squad}]</span>
              ))}
            </div>
          </div>

          <div 
            className="p-4 bg-gray-900/20 border border-gray-800/50 rounded-sm box-glitch"
            onClick={() => setShowMilla(true)}
          >
            <h4 className="text-gray-400 font-bold mb-2 text-sm hover-glitch">AUXILIARY PERSONNEL</h4>
            <p className="text-xs text-gray-600 leading-relaxed font-mono">
              TRAINEES (40+) / EQUIPMENT / TACTICAL SUPPORT / MAINTENANCE / HR / LEGAL / FINANCE / INSTRUCTORS / TRANSPORT / MEDICAL / IT
            </p>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {activeChat && (
          <ChatModal team={activeChat} onClose={() => setActiveChat(null)} />
        )}
        {showMilla && (
          <MillaModal onClose={() => setShowMilla(false)} />
        )}
      </AnimatePresence>
    </div>
  );
}

function ChatModal({ team, onClose }: { team: string, onClose: () => void }) {
  const [visibleMessages, setVisibleMessages] = useState<number>(0);
  const currentChatData = teamChats[team as keyof typeof teamChats] || [];

  useEffect(() => {
    if (visibleMessages < currentChatData.length) {
      const timer = setTimeout(() => {
        setVisibleMessages(prev => prev + 1);
      }, 700); // 700ms per message
      return () => clearTimeout(timer);
    }
  }, [visibleMessages, currentChatData.length]);

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8 bg-black/80 backdrop-blur-sm"
    >
      <div className="absolute inset-0" onClick={onClose}></div>
      
      <motion.div 
        initial={{ scale: 0.95, y: 20 }}
        animate={{ scale: 1, y: 0 }}
        exit={{ scale: 0.95, y: 20 }}
        className="relative w-full max-w-2xl h-[70vh] flex flex-col bg-[#050505] border border-green-900/50 shadow-2xl shadow-green-900/20 font-mono"
      >
        {/* Header */}
        <div className="flex items-center justify-between p-3 border-b border-green-900/50 bg-green-950/20">
          <div className="flex items-center gap-2 text-green-500">
            <Terminal size={16} />
            <span className="text-xs tracking-widest">SECURE INTRANET // {team} SQUAD CHAT</span>
            <span className="text-[10px] bg-green-900/50 px-1 ml-2 animate-pulse">ENCRYPTED</span>
          </div>
          <button onClick={onClose} className="text-green-600 hover:text-green-400">
            <X size={18} />
          </button>
        </div>

        {/* Chat Area */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4 scanlines-light relative">
          <div className="absolute inset-0 bg-[url('https://picsum.photos/seed/noise/100/100?grayscale')] opacity-5 mix-blend-overlay pointer-events-none"></div>
          {currentChatData.slice(0, visibleMessages).map((msg, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex flex-col gap-1 relative z-10"
            >
              <div className="flex items-baseline gap-2">
                <span className="text-green-600 font-bold shrink-0">[{msg.sender}]</span>
                <span className="text-green-400 text-sm">{msg.text}</span>
              </div>
              <div className="text-green-800/80 text-xs pl-2 border-l border-green-900/50 ml-1 font-korean">
                {msg.translation}
              </div>
            </motion.div>
          ))}
          
          {/* Blinking Cursor */}
          <div className="flex items-center gap-2 text-green-500 mt-4 relative z-10">
            <span className="animate-pulse font-bold">_</span>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

function InfoCard({ icon, title, content }: { icon: React.ReactNode, title: string, content: string }) {
  return (
    <motion.div 
      whileHover={{ scale: 1.02, backgroundColor: 'rgba(30, 0, 0, 0.2)' }}
      className="p-5 border border-gray-800 bg-black/40 backdrop-blur-sm relative overflow-hidden group box-glitch"
    >
      <div className="absolute top-0 left-0 w-1 h-full bg-gray-800 group-hover:bg-red-600 transition-colors"></div>
      <div className="flex items-center gap-3 mb-3">
        {icon}
        <h3 className="font-bold text-gray-200 tracking-wider text-sm hover-glitch">{title}</h3>
      </div>
      <p className="text-sm text-gray-400 leading-relaxed font-mono">{content}</p>
    </motion.div>
  );
}

function SquadRow({ name, desc, color, text, onClick }: { name: string, desc: string, color: string, text: string, onClick?: () => void }) {
  return (
    <div 
      onClick={onClick}
      className={`p-4 border ${color} bg-black/60 flex flex-col md:flex-row md:items-center gap-4 relative overflow-hidden box-glitch ${onClick ? 'cursor-pointer hover:bg-gray-900/80 transition-colors group' : ''}`}
    >
      <div className="absolute right-0 top-0 h-full w-32 bg-gradient-to-l from-gray-800/20 to-transparent pointer-events-none"></div>
      <div className={`font-bold tracking-widest ${text} w-40 shrink-0 font-display text-lg hover-glitch group-hover:scale-105 transition-transform origin-left`} data-text={`[${name}]`}>[{name}]</div>
      <div className="text-sm text-gray-400 font-mono">{desc}</div>
    </div>
  );
}

function MillaModal({ onClose }: { onClose: () => void }) {
  const textColor = "text-yellow-500";
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8 bg-black/80 backdrop-blur-sm"
    >
      <div className="absolute inset-0" onClick={onClose}></div>
      
      <motion.div 
        initial={{ scale: 0.95, y: 20 }}
        animate={{ scale: 1, y: 0 }}
        exit={{ scale: 0.95, y: 20 }}
        className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-[#0a0a0a] border border-gray-700 shadow-2xl shadow-black flex flex-col"
      >
        {/* Modal Header */}
        <div className="sticky top-0 z-30 bg-[#0a0a0a]/90 backdrop-blur-md border-b border-gray-800 p-4 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <ShieldAlert className={textColor} size={20} />
            <span className="font-mono text-xs tracking-widest text-gray-400 hover-glitch">CLASSIFIED DOSSIER</span>
          </div>
          <button onClick={onClose} className="text-gray-500 hover:text-white transition-colors">
            <X size={24} />
          </button>
        </div>

        {/* Modal Content */}
        <div className="p-6 md:p-8 flex flex-col gap-6 relative">
          <div className="absolute inset-0 scanlines opacity-30 pointer-events-none"></div>
          
          {/* Top Section: Info & Photo */}
          <div className="flex flex-col md:flex-row gap-8 relative z-10">
            
            {/* Left: Info */}
            <div className="flex-1 space-y-4 relative">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 opacity-10 pointer-events-none z-0">
                <svg className="absolute inset-0 w-full h-full animate-rotate-slow text-yellow-500" viewBox="0 0 100 100">
                  <polygon points="50,5 95,38 78,95 22,95 5,38" fill="none" stroke="currentColor" strokeWidth="2" />
                  <circle cx="50" cy="50" r="40" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="4 4" />
                </svg>
                <svg className="absolute inset-0 w-full h-full animate-rotate-slow-reverse text-yellow-500" viewBox="0 0 100 100">
                  <polygon points="50,15 85,40 72,85 28,85 15,40" fill="none" stroke="currentColor" strokeWidth="1" />
                  <line x1="50" y1="15" x2="50" y2="85" stroke="currentColor" strokeWidth="1" />
                  <line x1="15" y1="40" x2="85" y2="40" stroke="currentColor" strokeWidth="1" />
                </svg>
              </div>

              <div className="border-b-2 border-gray-700 pb-2 mb-4 relative z-10">
                <h2 className="text-4xl font-display text-white uppercase tracking-tight hover-glitch" data-text="MILLA">MILLA</h2>
              </div>
              
              <div className="grid grid-cols-1 gap-2 text-sm font-mono relative z-10">
                <InfoRow label="FILE No" value="CUTE" />
                <InfoRow label="CODENAME" value="MILL" textColor={textColor} />
                <InfoRow label="LISTED AS" value="Military Working Dog" />
                <InfoRow label="POSITION" value="Search / Detection" />
                <InfoRow label="CLEARANCE" value="LEVEL 1" textColor="text-red-500" />
                <InfoRow label="AGE" value="2" />
                <InfoRow label="DOB" value="20XX-03-03" />
                <InfoRow label="NATIONALITY" value="USA" />
              </div>
            </div>

            {/* Right: Photo */}
            <div className="w-full md:w-64 shrink-0">
              <div className="aspect-[3/4] bg-gray-900 border-2 border-gray-700 relative overflow-hidden flex items-center justify-center group box-glitch">
                <div className="absolute inset-0 bg-[url('https://picsum.photos/seed/milla/400/600?grayscale')] opacity-30 mix-blend-overlay"></div>
                <div className="absolute inset-0 scanlines opacity-50"></div>
                <img 
                  src="https://i.postimg.cc/L5kgh5P3/jemog-eobs-eum-1.jpg" 
                  alt="MILLA" 
                  className="w-full h-full object-cover relative z-10 grayscale hover:grayscale-0 transition-all duration-500"
                  referrerPolicy="no-referrer"
                />
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
                <BiometricRow label="BREED" value="German Shepherd" />
                <BiometricRow label="GENDER" value="Female" />
                <BiometricRow label="WEIGHT" value="32kg" />
              </div>
              {/* Right Column */}
              <div className="space-y-4">
                <BiometricRow label="MAIN HANDLER" value="Joshua" />
                <BiometricRow label="LIKE" value="Ball, Erick" />
                <BiometricRow label="DISLIKE" value="No praise after good job" />
              </div>
            </div>
          </div>

          {/* Bottom Section: INFORMATION */}
          <div className="relative z-10 box-glitch">
            <div className="bg-gray-200 text-black font-display text-center py-1 mb-4 tracking-widest">
              INFORMATION
            </div>
            <div className="border border-gray-800 p-4 bg-black/50 space-y-4 text-sm font-mono text-gray-300 leading-relaxed">
              <div className="font-korean whitespace-pre-wrap"><span className="text-gray-500 font-mono block mb-2">NOTES:</span>주로 수색과 탐지에 투입되는 블랙오버 유일의 기능견. 아주 영리하고 순발력이 좋지만 사람을 너무 좋아하고 착해서 대인 공격 훈련은 통과하지 못했다. 본부 내부에서 행복하게 거주하고 있으며 에릭만 보이면 배를 보이며 눕는다. 그에게서 좋은 냄새가 난다고 생각하는듯. 이상하게 네이슨만 보면 조금 어색해하며 하울링을 한다.</div>
            </div>
          </div>

        </div>
      </motion.div>
    </motion.div>
  );
}

function BiometricRow({ label, value }: { label: string, value: string }) {
  return (
    <div className="flex justify-between items-center border-b border-gray-800/50 pb-1">
      <div className="text-gray-500 text-[10px]">{label}</div>
      <div className="text-gray-200 hover-glitch font-bold uppercase">{value}</div>
    </div>
  );
}

function InfoRow({ label, value, textColor = "text-gray-200" }: { label: string, value: string, textColor?: string }) {
  return (
    <div className="flex border-b border-gray-800/50 py-1 hover:bg-gray-900/30 transition-colors">
      <div className="w-32 text-gray-500">{label}</div>
      <div className={`${textColor} font-bold hover-glitch`}>{value}</div>
    </div>
  );
}
