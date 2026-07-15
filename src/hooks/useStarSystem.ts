import { useEffect } from 'react'
import { StarSystem } from '../utils/starSystem'

export function useStarSystem(canvasId: string, containerId: string) {
  useEffect(() => {
    const starSystem = new StarSystem(canvasId, containerId)
    return () => {
      if (starSystem.canvas) starSystem.destroy()
    }
  }, [canvasId, containerId])
}
