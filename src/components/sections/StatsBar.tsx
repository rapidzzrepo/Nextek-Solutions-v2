import CountUpStat from '../ui/CountUpStat'
import { certStats } from '../../data/Home'

export default function StatsBar() {
  return (
    <div className="bg-surface-container-low py-8 md:py-12 border-y border-outline-variant/30 overflow-hidden">
      <div className="max-w-container-max mx-auto px-margin-mobile sm:px-margin-tablet md:px-margin-desktop">
        <div className="text-center mb-12">
          <p className="font-label-md text-on-surface-variant/60 uppercase tracking-widest">Performance Metrics &amp; Scale</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-gutter">
          {certStats.map((stat, i) => (
            <div key={i} className="text-center p-6 accelerated-layer">
              <CountUpStat target={stat.target} suffix={stat.suffix} label={stat.label} />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
