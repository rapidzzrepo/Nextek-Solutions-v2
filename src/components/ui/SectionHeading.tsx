import { ReactNode } from 'react'

interface SectionHeadingProps {
  title: string
  subtitle?: string
  action?: ReactNode
}

export default function SectionHeading({ title, subtitle, action }: SectionHeadingProps) {
  return (
    <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
      <div className="max-w-2xl">
        <h2 className="font-display-lg text-headline-xl mb-4">{title}</h2>
        {subtitle && <p className="font-body-lg text-on-surface-variant">{subtitle}</p>}
      </div>
      {action}
    </div>
  )
}
