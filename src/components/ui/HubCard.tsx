import type { Hub } from '../../data/hubs'

interface HubCardProps {
  hub: Hub
  timeElementId: string
}

export default function HubCard({ hub, timeElementId }: HubCardProps) {
  return (
    <div className="glass-card rounded-xl overflow-hidden hover:translate-y-[-4px] transition-all duration-300 group">
      <div className="p-6 md:p-8 space-y-6">
        <div className="flex justify-between items-start">
          <div>
            <h3 className="font-sora font-bold text-xl text-on-surface group-hover:text-primary transition-colors">{hub.city}</h3>
            <p className="font-label-sm text-[10px] text-on-surface-variant uppercase tracking-widest mt-1">{hub.region}</p>
          </div>
          <span className="bg-primary/10 text-primary px-2 py-1 rounded text-[10px] font-bold">{hub.code}</span>
        </div>
        <p className="text-on-surface-variant text-sm leading-relaxed font-body-md">
          {hub.address.map((line, i) => (
            <span key={i}>{line}{i < hub.address.length - 1 && <br />}</span>
          ))}
        </p>
        <div className="space-y-2 pt-4 border-t border-outline-variant/30">
          <div className="flex items-center gap-2 text-sm text-on-surface-variant">
            <span className="material-symbols-outlined text-primary text-lg">alternate_email</span>
            <span>{hub.email}</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-on-surface-variant">
            <span className="material-symbols-outlined text-primary text-lg">call</span>
            <span>{hub.phone}</span>
          </div>
        </div>
        <div className="pt-4 border-t border-outline-variant/30 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-primary text-lg">schedule</span>
            <span className="font-mono text-xs text-on-surface-variant" id={timeElementId}>--:--:-- {hub.tzLabel}</span>
          </div>
          <span className="material-symbols-outlined text-outline-variant group-hover:text-primary transition-colors">hub</span>
        </div>
      </div>
    </div>
  )
}
