import { type ReactNode } from 'react'

interface GlassCardProps {
  children: ReactNode
  className?: string
  variant?: 'light' | 'dark' | 'v2'
  hover?: boolean
}

export default function GlassCard({ children, className = '', variant = 'light', hover = true }: GlassCardProps) {
  const base = variant === 'dark' ? 'dark-glass' : variant === 'v2' ? 'glass-card-v2' : 'glass-card'
  const hoverClass = hover ? (variant === 'v2' ? '' : 'hover-card') : ''

  return (
    <div className={`${base} ${hoverClass} ${className}`}>
      {children}
    </div>
  )
}
