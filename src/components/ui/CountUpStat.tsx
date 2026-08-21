import { useCountUp } from '../../hooks'

interface CountUpStatProps {
  target: number
  suffix?: string
  label: string
  className?: string
}

export default function CountUpStat({ target, suffix = '', label, className = '' }: CountUpStatProps) {
  const { ref, value } = useCountUp({ target, suffix })

  return (
    <div ref={ref} className={`text-center ${className}`}>
      <div className="font-display-lg text-[28px] md:text-headline-xl text-primary mb-2">{value}</div>
      <div className="font-label-md text-on-surface-variant uppercase tracking-wider">{label}</div>
    </div>
  )
}
