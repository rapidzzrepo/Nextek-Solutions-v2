import { type ReactNode } from 'react'

interface FeatureListItemProps {
  icon: string
  children: ReactNode
  color?: string
}

export default function FeatureListItem({ icon, children, color = 'text-primary' }: FeatureListItemProps) {
  return (
    <li className="flex items-center gap-3">
      <span className={`material-symbols-outlined ${color}`}>{icon}</span>
      <span className="font-body-md">{children}</span>
    </li>
  )
}
