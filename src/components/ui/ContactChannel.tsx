import type { ContactChannel as ContactChannelType } from '../../data/contactInfo'

export default function ContactChannelItem({ channel }: { channel: ContactChannelType }) {
  return (
    <div className="group flex gap-5">
      <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-primary/5 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-on-primary transition-all duration-300">
        <span className="material-symbols-outlined">{channel.icon}</span>
      </div>
      <div>
        <p className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-widest mb-1">{channel.label}</p>
        {channel.isLink ? (
          <a href={`mailto:${channel.value}`} className="font-sora font-semibold text-on-surface">{channel.value}</a>
        ) : (
          <p className="font-sora font-semibold text-on-surface text-sm leading-relaxed">{channel.value}</p>
        )}
      </div>
    </div>
  )
}
