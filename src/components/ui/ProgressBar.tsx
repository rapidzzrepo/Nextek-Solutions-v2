interface ProgressBarProps {
  value: string
  label: string
  color?: string
  className?: string
}

export default function ProgressBar({ value, label, className = '' }: ProgressBarProps) {
  return (
    <div className={`bg-surface p-6 rounded-xl border border-primary/10 inline-block ${className}`}>
      <div className={`text-primary font-bold text-3xl mb-1`}>{value}</div>
      <div className="text-on-surface-variant text-sm font-label-md uppercase">{label}</div>
    </div>
  )
}
