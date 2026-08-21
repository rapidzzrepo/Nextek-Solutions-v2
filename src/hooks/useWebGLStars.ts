import { useEffect } from 'react'
import { initPrecisionStars } from '../utils/webglStars'

export function useWebGLStars(canvasId: string) {
  useEffect(() => {
    const cleanup = initPrecisionStars(canvasId)
    return () => cleanup()
  }, [canvasId])
}
