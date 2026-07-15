import { useEffect } from 'react'
import { initPrecisionStars } from '../../utils/webglStars'

interface StarCanvasProps {
  canvasId: string
  className?: string
}

export default function StarCanvas({ canvasId, className = 'w-full h-full block' }: StarCanvasProps) {
  useEffect(() => {
    const cleanup = initPrecisionStars(canvasId)
    return () => cleanup()
  }, [canvasId])

  return (
    <div className="absolute inset-0 w-full h-full pointer-events-none z-0">
      <canvas id={canvasId} className={className} />
    </div>
  )
}
