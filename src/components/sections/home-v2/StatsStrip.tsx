import { statCounters } from '../../../data/HomeV2'
import { useCountUp } from '../../../hooks'

function Counter({ stat, index }: { stat: (typeof statCounters)[number]; index: number }) {
  const { ref, value } = useCountUp({ target: stat.value, suffix: stat.suffix, duration: 2000 })
  return (
    <div ref={ref} className="flex flex-col items-start gap-3 sm:flex-row sm:items-center sm:gap-4">
      {index > 0 && <div className="hidden md:block absolute left-0 top-1/2 -translate-y-1/2 w-[1px] h-10 bg-white/15" />}
      <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-2xl bg-white/10 backdrop-blur-sm flex items-center justify-center shrink-0 shadow-lg shadow-black/10 relative z-10">
        <span className="material-symbols-outlined text-white text-2xl">{stat.icon}</span>
      </div>
      <div className="relative z-10">
        <div className="font-display-lg text-white text-xl sm:text-2xl md:text-3xl font-bold tracking-tight">{value}</div>
        <div className="text-white/50 text-[11px] uppercase tracking-wider leading-tight whitespace-normal sm:whitespace-nowrap">{stat.label}</div>
      </div>
    </div>
  )
}

export default function StatsStrip() {
  return (
    <section className="relative overflow-hidden" id="stats-strip-v2">
      <div className="absolute inset-0 bg-gradient-to-r from-primary via-[#4a1ac4] to-secondary" />
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMjAiIGN5PSIyMCIgcj0iMSIgZmlsbD0icmdiYSgyNTUsMjU1LDI1NSwwLjA4KSIvPjwvc3ZnPg==')] pointer-events-none" />
      <div className="absolute top-0 left-1/4 w-[300px] h-[300px] rounded-full bg-white/5 blur-[80px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[250px] h-[250px] rounded-full bg-white/5 blur-[80px] pointer-events-none" />
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent" />
      <div className="max-w-container-max mx-auto px-margin-mobile sm:px-margin-tablet md:px-margin-desktop py-14 md:py-18 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-10">
          {statCounters.map((stat, i) => (
            <Counter key={i} stat={stat} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
