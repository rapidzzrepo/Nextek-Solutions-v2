import { heroTitle, heroDescription, heroStats } from '../../../data/HomeData'
import StarfieldBackground from '../../ui/StarfieldBackground'

export default function HeroSection() {
  return (
    <section className="relative min-h-[750px] md:min-h-[800px] flex items-center overflow-hidden hero-mesh" id="hero-section-v2">
      <StarfieldBackground />
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[-20%] left-[-10%] w-[600px] h-[600px] rounded-full bg-primary/20 blur-[120px] animate-blob" />
        <div className="absolute bottom-[-10%] right-[-5%] w-[500px] h-[500px] rounded-full bg-secondary/15 blur-[100px] animate-blob animation-delay-2000" />
        <div className="absolute top-[40%] left-[50%] w-[300px] h-[300px] rounded-full bg-primary/10 blur-[80px] animate-blob animation-delay-4000" />
      </div>
      <div className="max-w-container-max mx-auto px-margin-mobile sm:px-margin-tablet md:px-margin-desktop py-20 md:py-28 relative z-10 w-full">
        <div className="grid lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] gap-12 lg:gap-16 items-center">
          <div className="max-w-2xl lg:max-w-3xl lg:pr-6">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/[0.04] backdrop-blur-sm text-white/75 text-[11px] font-label-lg tracking-[0.22em] uppercase mb-6">
              <span className="h-2 w-2 rounded-full bg-primary shadow-[0_0_12px_rgba(99,14,212,0.7)]" />
              Growth Partner
            </div>
            <h1 className="font-display-lg text-[32px] sm:text-[54px] md:text-[68px] lg:text-[76px] leading-[1.05] sm:leading-[1.03] tracking-[-0.03em] text-white mb-6">
              {heroTitle}
            </h1>
            <p className="font-body-lg text-white/75 text-[17px] sm:text-lg md:text-xl leading-[1.7] mb-10 max-w-xl">
              {heroDescription}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <a href="#contact" className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-2xl bg-white text-[#0a0a0a] font-label-lg hover:bg-white/92 transition-all duration-300 shadow-lg shadow-white/10">
                Get Free Consultation
                <span className="material-symbols-outlined text-xl">arrow_forward</span>
              </a>
              <a href="#services" className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-2xl bg-white/[0.05] backdrop-blur-sm text-white font-label-lg border border-white/10 hover:bg-white/[0.1] hover:border-white/20 transition-all duration-300">
                View Services
              </a>
            </div>
            <div className="grid grid-cols-3 gap-2 sm:gap-4 max-w-xl">
              {heroStats.map((stat, i) => (
                <div key={i} className="rounded-2xl border border-white/10 bg-white/[0.04] backdrop-blur-sm px-2.5 py-3 sm:px-4 sm:py-4">
                  <div className="font-display-lg text-white text-[17px] sm:text-[26px] md:text-[30px] font-bold tracking-tight">{stat.value}</div>
                  <div className="text-white/55 text-[9px] sm:text-[12px] mt-1 uppercase tracking-[0.1em] sm:tracking-[0.18em] leading-tight">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="hidden lg:block justify-self-end w-full max-w-[520px] pl-6 xl:pl-10 pointer-events-none">
            <svg viewBox="0 0 520 480" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <linearGradient id="heroGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#630ed4" />
                  <stop offset="100%" stopColor="#3d48d9" />
                </linearGradient>
                <linearGradient id="chartFill" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#630ed4" stopOpacity="0.3" />
                  <stop offset="100%" stopColor="#630ed4" stopOpacity="0" />
                </linearGradient>
                <linearGradient id="chartFill2" x1="0%" y1="0%" y2="100%">
                  <stop offset="0%" stopColor="#3d48d9" stopOpacity="0.2" />
                  <stop offset="100%" stopColor="#3d48d9" stopOpacity="0" />
                </linearGradient>
                <filter id="glow">
                  <feGaussianBlur stdDeviation="4" result="blur" />
                  <feMerge>
                    <feMergeNode in="blur" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
                <filter id="cardShadow">
                  <feDropShadow dx="0" dy="20" stdDeviation="30" floodColor="#630ed4" floodOpacity="0.15" />
                </filter>
              </defs>

              {/* Main dashboard card */}
              <rect x="40" y="40" width="440" height="280" rx="20" fill="rgba(255,255,255,0.03)" stroke="rgba(255,255,255,0.08)" strokeWidth="1" filter="url(#cardShadow)" />
              <text x="70" y="80" fill="rgba(255,255,255,0.4)" fontSize="11" fontFamily="Inter, sans-serif" fontWeight="500" letterSpacing="0.1em">TRAFFIC OVERVIEW</text>
              <text x="70" y="112" fill="white" fontSize="28" fontFamily="Inter, sans-serif" fontWeight="700">+524%</text>
              <rect x="155" y="98" width="52" height="18" rx="4" fill="rgba(34,197,94,0.15)" />
              <text x="161" y="111" fill="#22c55e" fontSize="10" fontFamily="Inter, sans-serif" fontWeight="600">↑ 12.4%</text>

              {/* Animated area chart */}
              <path d="M70,230 L70,200 Q110,195 140,180 L180,165 Q210,150 240,130 L280,145 Q310,120 340,100 L380,110 Q410,90 440,80 L450,80 L450,250 L70,250 Z" fill="url(#chartFill)" opacity="0.6">
                <animate attributeName="d" values="M70,230 L70,200 Q110,195 140,180 L180,165 Q210,150 240,130 L280,145 Q310,120 340,100 L380,110 Q410,90 440,80 L450,80 L450,250 L70,250 Z;M70,235 L70,205 Q110,190 140,175 L180,160 Q210,145 240,125 L280,140 Q310,115 340,95 L380,105 Q410,85 440,75 L450,75 L450,250 L70,250 Z;M70,230 L70,200 Q110,195 140,180 L180,165 Q210,150 240,130 L280,145 Q310,120 340,100 L380,110 Q410,90 440,80 L450,80 L450,250 L70,250 Z" dur="6s" repeatCount="indefinite" />
              </path>
              <path d="M70,200 Q110,195 140,180 L180,165 Q210,150 240,130 L280,145 Q310,120 340,100 L380,110 Q410,90 440,80" fill="none" stroke="url(#heroGrad1)" strokeWidth="2.5" strokeLinecap="round">
                <animate attributeName="d" values="M70,200 Q110,195 140,180 L180,165 Q210,150 240,130 L280,145 Q310,120 340,100 L380,110 Q410,90 440,80;M70,205 Q110,190 140,175 L180,160 Q210,145 240,125 L280,140 Q310,115 340,95 L380,105 Q410,85 440,75;M70,200 Q110,195 140,180 L180,165 Q210,150 240,130 L280,145 Q310,120 340,100 L380,110 Q410,90 440,80" dur="6s" repeatCount="indefinite" />
              </path>
              {/* Glowing dot on chart */}
              <circle cx="440" cy="80" r="5" fill="#630ed4" filter="url(#glow)">
                <animate attributeName="cy" values="80;75;80" dur="3s" repeatCount="indefinite" />
              </circle>
              <circle cx="440" cy="80" r="2" fill="white" opacity="0.9">
                <animate attributeName="cy" values="80;75;80" dur="3s" repeatCount="indefinite" />
              </circle>

              {/* Bar chart section */}
              <rect x="350" y="140" width="24" height="80" rx="4" fill="#630ed4" opacity="0.3" />
              <rect x="350" y="160" width="24" height="60" rx="4" fill="#630ed4" opacity="0.8">
                <animate attributeName="height" values="60;65;60" dur="4s" repeatCount="indefinite" />
                <animate attributeName="y" values="160;155;160" dur="4s" repeatCount="indefinite" />
              </rect>
              <rect x="384" y="150" width="24" height="70" rx="4" fill="#3d48d9" opacity="0.8">
                <animate attributeName="height" values="70;75;70" dur="3.5s" repeatCount="indefinite" />
                <animate attributeName="y" values="150;145;150" dur="3.5s" repeatCount="indefinite" />
              </rect>

              {/* Metric cards floating below */}
              <rect x="40" y="350" width="200" height="100" rx="16" fill="rgba(255,255,255,0.03)" stroke="rgba(255,255,255,0.06)" strokeWidth="1">
                <animate attributeName="y" values="350;345;350" dur="5s" repeatCount="indefinite" />
              </rect>
              <text x="64" y="385" fill="rgba(255,255,255,0.4)" fontSize="10" fontFamily="Inter, sans-serif" fontWeight="500" letterSpacing="0.08em">CONVERSIONS</text>
              <text x="64" y="415" fill="white" fontSize="22" fontFamily="Inter, sans-serif" fontWeight="700">2,847</text>
              <rect x="130" y="402" width="36" height="16" rx="4" fill="rgba(34,197,94,0.15)" />
              <text x="136" y="414" fill="#22c55e" fontSize="9" fontFamily="Inter, sans-serif" fontWeight="600">+18%</text>

              <rect x="260" y="350" width="220" height="100" rx="16" fill="rgba(255,255,255,0.03)" stroke="rgba(255,255,255,0.06)" strokeWidth="1">
                <animate attributeName="y" values="350;355;350" dur="4.5s" repeatCount="indefinite" />
              </rect>
              <text x="284" y="385" fill="rgba(255,255,255,0.4)" fontSize="10" fontFamily="Inter, sans-serif" fontWeight="500" letterSpacing="0.08em">REVENUE</text>
              <text x="284" y="415" fill="white" fontSize="22" fontFamily="Inter, sans-serif" fontWeight="700">$142K</text>
              <rect x="350" y="402" width="36" height="16" rx="4" fill="rgba(34,197,94,0.15)" />
              <text x="356" y="414" fill="#22c55e" fontSize="9" fontFamily="Inter, sans-serif" fontWeight="600">+32%</text>
            </svg>
          </div>
        </div>
      </div>
    </section>
  )
}
