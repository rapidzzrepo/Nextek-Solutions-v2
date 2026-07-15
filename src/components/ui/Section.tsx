import { ReactNode } from 'react'

interface SectionProps {
  children: ReactNode
  className?: string
  id?: string
  dark?: boolean
}

export default function Section({ children, className = '', id, dark = false }: SectionProps) {
  return (
    <section id={id} className={`py-16 md:py-section-gap max-w-container-max mx-auto px-margin-mobile sm:px-margin-tablet md:px-margin-desktop ${dark ? 'bg-[#000000]' : ''} ${className}`}>
      {children}
    </section>
  )
}
