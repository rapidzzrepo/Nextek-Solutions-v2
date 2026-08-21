import { useEffect, useRef } from 'react'
import { StarSystem } from '../utils/starSystem'

export function useStarSystem(canvasId: string, containerId: string, customColors?: string[]) {
  const systemRef = useRef<StarSystem | null>(null)

  useEffect(() => {
    const system = new StarSystem(canvasId, containerId, customColors)
    systemRef.current = system

    return () => {
      if (system.canvas) {
        system.destroy()
      }
    }
  }, [canvasId, containerId])

  return systemRef
}
