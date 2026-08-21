import { useEffect } from 'react'
import { clientResults } from '../../../data/HomeData'
import { useCountUp, useScrollReveal } from '../../../hooks'

function MiniChart({ values, color }: { values: number[]; color: string }) {
  const max = Math.max(...values)
  const barWidth = 8
  const gap = 4
  const chartWidth = values.length * (barWidth + gap)
  const chartHeight = 48
  return (
    <svg width={chartWidth} height={chartHeight} viewBox={`0 0 ${chartWidth} ${chartHeight}`} className="shrink-0">
      {values.map((v, i) => {
        const barHeight = (v / max) * chartHeight
        return (
          <rect
            key={i}
            x={i * (barWidth + gap)}
            y={chartHeight - barHeight}
            width={barWidth}
            height={barHeight}
            rx="3"
            fill="currentColor"
            className={color}
            opacity={0.2 + (i / values.length) * 0.6}
          >
            <animate
              attributeName="height"
              from="0"
              to={barHeight}
              dur="0.8s"
              begin={`${i * 0.1}s`}
              fill="freeze"
            />
            <animate
              attributeName="y"
              from={chartHeight}
              to={chartHeight - barHeight}
              dur="0.8s"
              begin={`${i * 0.1}s`}
              fill="freeze"
            />
          </rect>
        )
      })}
    </svg>
  )
}

function ProgressRing({ value, color, logo, client }: { value: number; color: string; logo: string; client: string }) {
  const radius = 36
  const circumference = 2 * Math.PI * radius
  const filled = (value / 500) * circumference
  return (
    <div className="relative w-[88px] h-[88px] shrink-0 mx-auto sm:mx-0">
      <svg width="88" height="88" viewBox="0 0 88 88">
        <circle cx="44" cy="44" r={radius} fill="none" stroke="rgba(0,0,0,0.06)" strokeWidth="6" />
        <circle
          cx="44"
          cy="44"
          r={radius}
          fill="none"
          stroke="currentColor"
          strokeWidth="6"
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={circumference - filled}
          className={`${color} progress-ring-circle`}
          style={{ transform: 'rotate(-90deg)', transformOrigin: '50% 50%' }}
        />
      </svg>
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[56px] h-[56px] rounded-full bg-[#131b2e] flex items-center justify-center p-2 shadow-lg shadow-primary/10">
          <img src={logo} alt={`${client} logo`} className="max-w-full max-h-full w-auto h-auto object-contain" loading="lazy" decoding="async" />
        </div>
      </div>
    </div>
  )
}

function ResultCard({ result, index }: { result: (typeof clientResults)[number]; index: number }) {
  const { ref, value } = useCountUp({ target: result.metricValue, suffix: result.metricSuffix, duration: 2000 })
  const chartValues = [
    [20, 35, 28, 45, 55, 48, 65, 72, 80, 95],
    [30, 25, 40, 35, 50, 55, 60, 70, 75, 85],
    [40, 45, 38, 52, 60, 55, 68, 78, 85, 92],
    [15, 22, 30, 28, 42, 55, 62, 70, 82, 100],
  ][index]
  return (
    <div ref={ref} className="p-6 rounded-2xl bg-surface-container/50 backdrop-blur-sm hover:bg-surface-container hover:shadow-2xl hover:shadow-primary/5 transition-all duration-300">
      <div className="flex flex-col sm:flex-row sm:items-start gap-4 sm:gap-5">
        <ProgressRing value={result.metricValue} color={result.color} logo={result.logo} client={result.client} />
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-1">
            <span className="font-label-md text-primary text-[11px] tracking-widest uppercase">{result.category}</span>
          </div>
          <h4 className="font-headline-lg text-on-surface text-lg mb-1">{result.client}</h4>
          <div className="font-display-lg text-on-surface text-2xl font-bold mb-2">{value}</div>
          <p className="text-on-surface-variant text-[13px] leading-relaxed mb-3">{result.description}</p>
          <MiniChart values={chartValues} color={result.color} />
        </div>
      </div>
    </div>
  )
}

export default function ClientResults() {
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
    <section className="py-20 md:py-[120px] bg-gradient-to-b from-surface to-surface-container/30 relative overflow-hidden" id="client-results">
      <div className="max-w-container-max mx-auto px-margin-mobile sm:px-margin-tablet md:px-margin-desktop relative z-10" ref={sectionRef}>
        <div className="text-center mb-12 stagger-fade">
          <span className="inline-block px-4 py-1.5 rounded-full bg-secondary/10 text-secondary font-label-md text-[11px] tracking-widest uppercase mb-4">Client Results</span>
          <h2 className="font-display-lg text-[28px] sm:text-[36px] md:text-headline-xl text-on-surface mb-4">Real Outcomes, Real Businesses</h2>
          <p className="font-body-lg text-on-surface-variant max-w-xl mx-auto">We don't just deliver projects — we deliver measurable growth.</p>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          {clientResults.map((result, i) => (
            <ResultCard key={i} result={result} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
