import { useEffect } from 'react'
import { initMouseGlow } from '../utils/mouseGlow'

export function useMouseGlow(containerId: string, glowId: string) {
  useEffect(() => {
    const cleanup = initMouseGlow(containerId, glowId)
    return () => cleanup()
  }, [containerId, glowId])
}
