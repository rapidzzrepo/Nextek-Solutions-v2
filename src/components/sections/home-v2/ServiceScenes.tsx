import { serviceScenes } from '../../../data/HomeV2'
import { useScrollReveal } from '../../../hooks'
import StarfieldBackground from '../../ui/StarfieldBackground'

function SceneVisual({ type, isDark }: { type: string; isDark: boolean }) {
  const card = isDark ? 'rgba(255,255,255,0.03)' : 'rgba(0,0,0,0.02)'
  const stroke = isDark ? 'rgba(255,255,255,0.08)' : 'rgba(0,0,0,0.06)'
  const muted = isDark ? 'rgba(255,255,255,0.12)' : 'rgba(0,0,0,0.08)'
  const textMuted = isDark ? 'rgba(255,255,255,0.25)' : 'rgba(0,0,0,0.15)'

  if (type === 'chart') {
    return (
      <svg viewBox="0 0 440 320" className="w-full h-full">
        <defs>
          <linearGradient id="seoGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#22c55e" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#22c55e" stopOpacity="0" />
          </linearGradient>
        </defs>
        {/* Browser chrome */}
        <rect x="20" y="20" width="400" height="280" rx="12" fill={card} stroke={stroke} strokeWidth="1" />
        <rect x="20" y="20" width="400" height="36" rx="12" fill={isDark ? 'rgba(255,255,255,0.04)' : 'rgba(0,0,0,0.03)'} />
        <rect x="20" y="44" width="400" height="12" fill={isDark ? 'rgba(255,255,255,0.04)' : 'rgba(0,0,0,0.03)'} />
        <circle cx="40" cy="38" r="5" fill="#ef4444" opacity="0.7" />
        <circle cx="56" cy="38" r="5" fill="#eab308" opacity="0.7" />
        <circle cx="72" cy="38" r="5" fill="#22c55e" opacity="0.7" />
        <rect x="90" y="32" width="120" height="12" rx="6" fill={muted} />
        {/* Rank position indicator */}
        <rect x="40" y="72" width="60" height="14" rx="4" fill="#22c55e" opacity="0.2" />
        <text x="50" y="82" fill="#22c55e" fontSize="8" fontFamily="Inter, sans-serif" fontWeight="600">POS #1</text>
        <text x="110" y="82" fill={textMuted} fontSize="8" fontFamily="Inter, sans-serif">google.com/search</text>
        {/* Animated ranking chart */}
        <rect x="40" y="100" width="360" height="160" rx="8" fill={isDark ? 'rgba(255,255,255,0.02)' : 'rgba(0,0,0,0.01)'} />
        {/* Grid lines */}
        <line x1="80" y1="120" x2="380" y2="120" stroke={stroke} strokeWidth="0.5" />
        <line x1="80" y1="160" x2="380" y2="160" stroke={stroke} strokeWidth="0.5" />
        <line x1="80" y1="200" x2="380" y2="200" stroke={stroke} strokeWidth="0.5" />
        <line x1="80" y1="240" x2="380" y2="240" stroke={stroke} strokeWidth="0.5" />
        {/* Area fill */}
        <path d="M80,230 Q130,220 160,195 L200,170 Q240,140 280,130 L320,110 Q350,100 380,85 L380,250 L80,250 Z" fill="url(#seoGrad)">
          <animate attributeName="d" values="M80,230 Q130,220 160,195 L200,170 Q240,140 280,130 L320,110 Q350,100 380,85 L380,250 L80,250 Z;M80,225 Q130,215 160,190 L200,165 Q240,135 280,125 L320,105 Q350,95 380,80 L380,250 L80,250 Z;M80,230 Q130,220 160,195 L200,170 Q240,140 280,130 L320,110 Q350,100 380,85 L380,250 L80,250 Z" dur="5s" repeatCount="indefinite" />
        </path>
        <path d="M80,230 Q130,220 160,195 L200,170 Q240,140 280,130 L320,110 Q350,100 380,85" fill="none" stroke="#22c55e" strokeWidth="2" strokeLinecap="round">
          <animate attributeName="d" values="M80,230 Q130,220 160,195 L200,170 Q240,140 280,130 L320,110 Q350,100 380,85;M80,225 Q130,215 160,190 L200,165 Q240,135 280,125 L320,105 Q350,95 380,80;M80,230 Q130,220 160,195 L200,170 Q240,140 280,130 L320,110 Q350,100 380,85" dur="5s" repeatCount="indefinite" />
        </path>
        <circle cx="380" cy="85" r="4" fill="#22c55e" opacity="0.9">
          <animate attributeName="cy" values="85;80;85" dur="3s" repeatCount="indefinite" />
        </circle>
        <circle cx="380" cy="85" r="2" fill="white" opacity="0.9">
          <animate attributeName="cy" values="85;80;85" dur="3s" repeatCount="indefinite" />
        </circle>
        {/* Metric badges */}
        <rect x="280" y="72" width="80" height="20" rx="4" fill="#22c55e" opacity="0.15" />
        <text x="292" y="86" fill="#22c55e" fontSize="9" fontFamily="Inter, sans-serif" fontWeight="600">↑ 524%</text>
      </svg>
    )
  }
  if (type === 'code') {
    return (
      <svg viewBox="0 0 440 320" className="w-full h-full">
        <defs>
          <linearGradient id="codeAccent" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#630ed4" />
            <stop offset="100%" stopColor="#3d48d9" />
          </linearGradient>
        </defs>
        {/* IDE window */}
        <rect x="20" y="20" width="400" height="280" rx="12" fill={card} stroke={stroke} strokeWidth="1" />
        {/* Title bar */}
        <rect x="20" y="20" width="400" height="36" rx="12" fill={isDark ? 'rgba(255,255,255,0.04)' : 'rgba(0,0,0,0.03)'} />
        <rect x="20" y="44" width="400" height="12" fill={isDark ? 'rgba(255,255,255,0.04)' : 'rgba(0,0,0,0.03)'} />
        <circle cx="40" cy="38" r="5" fill="#ef4444" opacity="0.7" />
        <circle cx="56" cy="38" r="5" fill="#eab308" opacity="0.7" />
        <circle cx="72" cy="38" r="5" fill="#22c55e" opacity="0.7" />
        {/* Sidebar */}
        <rect x="20" y="56" width="80" height="244" fill={isDark ? 'rgba(255,255,255,0.02)' : 'rgba(0,0,0,0.01)'} />
        <rect x="32" y="70" width="56" height="6" rx="3" fill={muted} />
        <rect x="32" y="86" width="48" height="6" rx="3" fill="#630ed4" opacity="0.4" />
        <rect x="32" y="102" width="52" height="6" rx="3" fill={muted} />
        <rect x="32" y="118" width="44" height="6" rx="3" fill={muted} />
        <rect x="32" y="134" width="50" height="6" rx="3" fill="#3d48d9" opacity="0.4" />
        {/* Code lines */}
        <rect x="116" y="70" width="50" height="7" rx="3" fill="#630ed4" opacity="0.7" />
        <rect x="116" y="88" width="140" height="5" rx="2.5" fill={muted} />
        <rect x="116" y="102" width="100" height="5" rx="2.5" fill={muted} />
        <rect x="130" y="120" width="180" height="5" rx="2.5" fill="#3d48d9" opacity="0.5" />
        <rect x="130" y="134" width="120" height="5" rx="2.5" fill={muted} />
        <rect x="130" y="148" width="160" height="5" rx="2.5" fill={muted} />
        <rect x="130" y="162" width="90" height="5" rx="2.5" fill="#630ed4" opacity="0.4" />
        <rect x="116" y="180" width="70" height="7" rx="3" fill="#3d48d9" opacity="0.6" />
        <rect x="116" y="198" width="130" height="5" rx="2.5" fill={muted} />
        <rect x="130" y="216" width="170" height="5" rx="2.5" fill={muted} />
        <rect x="130" y="230" width="110" height="5" rx="2.5" fill="#630ed4" opacity="0.3" />
        {/* Animated cursor blink */}
        <rect x="130" y="248" width="2" height="14" rx="1" fill="#630ed4" opacity="0.8">
          <animate attributeName="opacity" values="0.8;0.2;0.8" dur="1.2s" repeatCount="indefinite" />
        </rect>
        {/* Deploy badge */}
        <rect x="310" y="70" width="90" height="22" rx="6" fill="#22c55e" opacity="0.15" />
        <text x="330" y="85" fill="#22c55e" fontSize="8" fontFamily="Inter, sans-serif" fontWeight="600">● DEPLOYED</text>
      </svg>
    )
  }
  return (
    <svg viewBox="0 0 440 320" className="w-full h-full">
      <defs>
        <linearGradient id="appScreen" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor={isDark ? '#1a1a2e' : '#f8f9fa'} />
          <stop offset="100%" stopColor={isDark ? '#0a0a0a' : '#ffffff'} />
        </linearGradient>
      </defs>
      {/* Phone frame */}
      <rect x="145" y="20" width="150" height="280" rx="20" fill={card} stroke={stroke} strokeWidth="1.5" />
      <rect x="150" y="30" width="140" height="256" rx="14" fill="url(#appScreen)" />
      {/* Status bar */}
      <text x="162" y="48" fill={textMuted} fontSize="7" fontFamily="Inter, sans-serif" fontWeight="600">9:41</text>
      {/* Notch */}
      <rect x="195" y="22" width="50" height="8" rx="4" fill={stroke} />
      {/* App header */}
      <rect x="160" y="58" width="120" height="10" rx="3" fill="#630ed4" opacity="0.6" />
      {/* Hero image area */}
      <rect x="160" y="76" width="120" height="60" rx="8" fill="#630ed4" opacity="0.15" />
      <rect x="170" y="86" width="50" height="6" rx="3" fill="#630ed4" opacity="0.4" />
      <rect x="170" y="98" width="80" height="4" rx="2" fill={muted} />
      <rect x="170" y="108" width="60" height="4" rx="2" fill={muted} />
      <rect x="170" y="122" width="40" height="12" rx="4" fill="#630ed4" opacity="0.5" />
      {/* Cards */}
      <rect x="160" y="146" width="120" height="36" rx="8" fill={isDark ? 'rgba(255,255,255,0.04)' : 'rgba(0,0,0,0.03)'} stroke={stroke} strokeWidth="0.5" />
      <circle cx="176" cy="160" r="8" fill="#22c55e" opacity="0.3" />
      <rect x="190" y="154" width="50" height="4" rx="2" fill={muted} />
      <rect x="190" y="164" width="70" height="4" rx="2" fill={textMuted} />
      <rect x="160" y="190" width="120" height="36" rx="8" fill={isDark ? 'rgba(255,255,255,0.04)' : 'rgba(0,0,0,0.03)'} stroke={stroke} strokeWidth="0.5" />
      <circle cx="176" cy="204" r="8" fill="#3d48d9" opacity="0.3" />
      <rect x="190" y="198" width="60" height="4" rx="2" fill={muted} />
      <rect x="190" y="208" width="45" height="4" rx="2" fill={textMuted} />
      {/* Bottom nav */}
      <rect x="160" y="250" width="120" height="28" rx="0" fill={isDark ? 'rgba(255,255,255,0.04)' : 'rgba(0,0,0,0.03)'} />
      <circle cx="185" cy="264" r="6" fill="#630ed4" opacity="0.4" />
      <circle cx="210" cy="264" r="6" fill={muted} />
      <circle cx="235" cy="264" r="6" fill={muted} />
      <circle cx="260" cy="264" r="6" fill={muted} />
      {/* Notification badge */}
      <circle cx="145" cy="55" r="8" fill="#ef4444" opacity="0.8" />
      <text x="142" y="58" fill="white" fontSize="6" fontFamily="Inter, sans-serif" fontWeight="700" textAnchor="middle">3</text>
    </svg>
  )
}

function SceneCard({ scene, index }: { scene: (typeof serviceScenes)[number]; index: number }) {
  const isReversed = index % 2 !== 0
  const isDark = index % 2 !== 0
  const sceneRef = useScrollReveal()

  return (
    <div ref={sceneRef} className={`min-h-[70vh] flex items-center stagger-fade relative overflow-hidden ${isDark ? 'bg-[#0a0a0a]' : 'bg-surface'}`}>
      {isDark && <StarfieldBackground />}
      <div className="max-w-container-max mx-auto px-margin-mobile sm:px-margin-tablet md:px-margin-desktop w-full grid lg:grid-cols-2 gap-12 lg:gap-20 items-center py-16 relative z-10">
        <div className={isReversed ? 'lg:order-2' : ''}>
          <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-5">
            <span className="material-symbols-outlined text-primary text-xl">{scene.icon}</span>
          </div>
          <h3 className={`font-display-lg text-[28px] sm:text-[36px] md:text-headline-xl mb-4 ${isDark ? 'text-white' : 'text-on-surface'}`}>{scene.title}</h3>
          <p className={`font-body-lg mb-6 max-w-lg ${isDark ? 'text-white/60' : 'text-on-surface-variant'}`}>{scene.description}</p>
          <ul className="space-y-3">
            {scene.bullets.map((bullet, j) => (
              <li key={j} className={`flex items-center gap-3 text-[14px] ${isDark ? 'text-white/60' : 'text-on-surface-variant'}`}>
                <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                {bullet}
              </li>
            ))}
          </ul>
        </div>
        <div className={`${isReversed ? 'lg:order-1' : ''} aspect-[4/3] rounded-3xl overflow-hidden ${isDark ? 'border border-white/[0.08] bg-white/[0.03]' : 'border border-outline-variant/20 bg-surface-container'}`}>
          <SceneVisual type={scene.visual} isDark={isDark} />
        </div>
      </div>
    </div>
  )
}

export default function ServiceScenes() {
  return (
    <section className="relative" id="service-scenes-v2">
      <div className="max-w-container-max mx-auto px-margin-mobile sm:px-margin-tablet md:px-margin-desktop py-20 md:py-[120px] mb-4 text-center">
        <span className="inline-block px-4 py-1.5 rounded-full bg-secondary/10 text-secondary font-label-md text-[11px] tracking-widest uppercase mb-4">Our Services</span>
        <h2 className="font-display-lg text-[28px] sm:text-[36px] md:text-headline-xl text-on-surface mb-4">How We Help You Grow</h2>
        <p className="font-body-lg text-on-surface-variant max-w-xl mx-auto">Deep-dive into the services that drive real results.</p>
      </div>
      {serviceScenes.map((scene, i) => (
        <SceneCard key={i} scene={scene} index={i} />
      ))}
    </section>
  )
}
