import { useId } from 'react'
import { useWebGLStars } from '../../hooks'

export default function StarfieldBackground() {
  const canvasId = useId().replace(/:/g, '')
  useWebGLStars(canvasId)
  return (
    <div className="absolute inset-0 w-full h-full pointer-events-none z-0">
      <canvas id={canvasId} className="w-full h-full block" />
    </div>
  )
}
