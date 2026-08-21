import { resultStats } from '../../../data/Intelligence'
import { useScrollReveal } from '../../../hooks'

export default function TrustStats() {
  const sectionRef = useScrollReveal()

  return (
    <section className="py-12 md:py-16 bg-[#0a0a0a]" ref={sectionRef}>
      <div className="max-w-container-max mx-auto px-margin-mobile sm:px-margin-tablet md:px-margin-desktop">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {resultStats.map((stat) => (
            <div key={stat.label} className="p-6 rounded-2xl border border-white/10 bg-white/[0.03] text-center hover:border-secondary/30 transition-all">
              <span className="material-symbols-outlined text-secondary text-3xl mb-3">{stat.icon}</span>
              <div className="font-display-lg text-white text-2xl md:text-3xl font-bold mb-1">{stat.value}</div>
              <p className="text-white/50 text-[12px] uppercase tracking-wider">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
