import { type ReactNode, type RefObject } from 'react'

interface SectionProps {
  children: ReactNode
  className?: string
  id?: string
  dark?: boolean
  ref?: RefObject<HTMLElement>
}

export default function Section({ children, className = '', id, dark = false, ref }: SectionProps) {
  return (
    <section
      ref={ref}
      id={id}
      className={`px-margin-mobile sm:px-margin-tablet md:px-margin-desktop py-16 md:py-section-gap max-w-container-max mx-auto ${dark ? 'bg-black text-white' : ''} ${className}`}
    >
      {children}
    </section>
  )
}
