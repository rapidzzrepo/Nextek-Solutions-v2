import { type ReactNode } from 'react'
import { Link } from 'react-router-dom'

interface ButtonProps {
  children: ReactNode
  variant?: 'primary' | 'outline' | 'ghost' | 'white'
  size?: 'sm' | 'md' | 'lg'
  href?: string
  className?: string
  onClick?: () => void
  type?: 'button' | 'submit'
  disabled?: boolean
}

export default function Button({ children, variant = 'primary', size = 'md', href, className = '', onClick, type = 'button', disabled }: ButtonProps) {
  const base = 'font-label-md rounded-lg transition-all active:scale-95 inline-flex items-center justify-center gap-2 whitespace-nowrap'

  const variants = {
    primary: 'bg-primary text-on-primary hover:opacity-90',
    outline: 'border border-primary text-primary hover:bg-primary-fixed',
    ghost: 'text-primary hover:bg-primary/10',
    white: 'bg-white text-primary hover:bg-surface'
  }

  const sizes = {
    sm: 'px-4 py-2 text-[12px]',
    md: 'px-6 md:px-8 py-3 md:py-4 text-body-md',
    lg: 'px-8 md:px-10 py-4 md:py-5 text-base md:text-lg font-bold'
  }

  const classes = `${base} ${variants[variant]} ${sizes[size]} ${className}`

  if (href) {
    return <Link to={href} className={classes}>{children}</Link>
  }

  return (
    <button type={type} className={classes} onClick={onClick} disabled={disabled}>
      {children}
    </button>
  )
}
