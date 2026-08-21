interface StarCanvasProps {
  id: string
  className?: string
}

export default function StarCanvas({ id, className = 'w-full h-full block' }: StarCanvasProps) {
  return (
    <div className="absolute inset-0 w-full h-full pointer-events-none z-0">
      <canvas id={id} className={className} />
    </div>
  )
}
