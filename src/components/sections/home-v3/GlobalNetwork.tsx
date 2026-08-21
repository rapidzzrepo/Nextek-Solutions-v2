import { useEffect } from 'react'
import { networkNodes, networkConnections } from '../../../data/HomeData'
import { useScrollReveal } from '../../../hooks'
import StarfieldBackground from '../../ui/StarfieldBackground'
import SectionDivider from '../../ui/SectionDivider'

export default function GlobalNetwork() {
  const sectionRef = useScrollReveal()

  useEffect(() => {
    const el = sectionRef.current
    if (!el) return
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll('.stagger-fade').forEach((child, i) => {
              setTimeout(() => child.classList.add('visible'), i * 100)
            })
          }
        })
      },
      { threshold: 0.1 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [sectionRef])

  return (
    <section className="py-20 md:py-[120px] bg-[#0a0a0a] relative overflow-hidden" id="global-network">
      <StarfieldBackground />
      <div className="absolute inset-x-0 top-0 pointer-events-none">
        <SectionDivider flip className="text-surface" />
      </div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-secondary/5 via-transparent to-transparent pointer-events-none" />
      <div className="max-w-container-max mx-auto px-margin-mobile sm:px-margin-tablet md:px-margin-desktop relative z-10" ref={sectionRef}>
        <div className="mb-12 max-w-lg stagger-fade">
          <span className="inline-block px-4 py-1.5 rounded-full bg-secondary/10 text-secondary font-label-md text-[11px] tracking-widest uppercase mb-4">Global Reach</span>
          <h2 className="font-display-lg text-[28px] sm:text-[36px] md:text-headline-xl text-white mb-4">Where We Operate</h2>
          <p className="font-body-lg text-white/50">Delivering results across continents with teams on the ground worldwide.</p>
        </div>
        <div className="stagger-fade">
          <div className="rounded-3xl bg-white/[0.02] backdrop-blur-sm p-4 md:p-8 overflow-hidden">
            <svg viewBox="0 0 700 300" className="w-full h-auto" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M100,110 Q120,90 150,95 L180,100 Q200,95 230,100 L280,105 Q310,100 340,105 L380,110 Q410,105 440,110 L480,115 Q510,110 540,120 L560,125 Q575,135 570,150 L565,160 Q570,175 555,185 L540,190 Q520,195 500,190 L480,180 Q460,185 440,180 L420,175 Q400,180 380,175 L360,170 Q340,175 320,170 L300,165 Q280,170 260,165 L240,155 Q220,150 200,145 L180,135 Q160,130 140,120 L120,115 Q105,110 100,110 Z"
                fill="none"
                stroke="rgba(255,255,255,0.06)"
                strokeWidth="1"
              />

              {networkConnections.map((conn, i) => {
                const from = networkNodes[conn.from]
                const to = networkNodes[conn.to]
                return (
                  <line
                    key={i}
                    x1={from.x}
                    y1={from.y}
                    x2={to.x}
                    y2={to.y}
                    stroke="url(#lineGrad)"
                    strokeWidth="1"
                    strokeDasharray="4 4"
                    opacity="0.4"
                    className="network-line"
                    style={{ animationDelay: `${i * 0.3}s` }}
                  />
                )
              })}

              {networkNodes.map((node, i) => (
                <g key={i}>
                  <circle cx={node.x} cy={node.y} r="16" fill="rgba(99,14,212,0.08)" className="network-pulse" style={{ animationDelay: `${i * 0.5}s` }} />
                  <circle cx={node.x} cy={node.y} r="6" fill="#630ed4" className="network-dot" style={{ animationDelay: `${i * 0.5}s` }} />
                  <circle cx={node.x} cy={node.y} r="3" fill="#fff" opacity="0.9" />
                  <text
                    x={node.x}
                    y={node.y - 22}
                    textAnchor="middle"
                    fill="rgba(255,255,255,0.6)"
                    fontSize="10"
                    fontFamily="Inter, sans-serif"
                    fontWeight="500"
                    className="hidden md:block"
                  >
                    {node.city}
                  </text>
                </g>
              ))}

              <defs>
                <linearGradient id="lineGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#630ed4" stopOpacity="0.6" />
                  <stop offset="100%" stopColor="#3d48d9" stopOpacity="0.6" />
                </linearGradient>
              </defs>
            </svg>
          </div>
          <div className="flex flex-wrap justify-center gap-x-4 gap-y-3 md:gap-6 mt-8">
            {networkNodes.map((node, i) => (
              <div key={i} className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                <span className="text-white/50 text-[13px]">{node.city}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
