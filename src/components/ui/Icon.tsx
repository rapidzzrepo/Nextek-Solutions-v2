interface IconProps {
  name: string
  className?: string
  filled?: boolean
}

export default function Icon({ name, className = '', filled = false }: IconProps) {
  const variationSettings = filled ? "'FILL' 1" : "'FILL' 0"
  return (
    <span
      className={`material-symbols-outlined ${className}`}
      style={{ fontVariationSettings: variationSettings }}
    >
      {name}
    </span>
  )
}
