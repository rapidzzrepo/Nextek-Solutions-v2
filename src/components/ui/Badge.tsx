import { type ReactNode } from 'react'

interface BadgeProps {
  children: ReactNode
  className?: string
  variant?: 'primary' | 'outline' | 'dark'
  pulse?: boolean
}

export default function Badge({ children, className = '', variant = 'primary', pulse = false }: BadgeProps) {
  const variants = {
    primary: 'bg-primary/5 text-primary border border-primary/10',
    outline: 'bg-primary-container/10 border border-primary/20 text-primary',
    dark: 'bg-white/10 text-primary-fixed-dim backdrop-blur-md border border-white/10'
  }

  return (
    <span className={`inline-flex items-center gap-2 px-3 py-1 rounded-full font-label-sm text-label-sm uppercase tracking-widest ${variants[variant]} ${className}`}>
      {pulse && (
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
          <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
        </span>
      )}
      {children}
    </span>
  )
}
