import { useState, useCallback, useRef } from 'react'

export function useCarousel(itemCount: number) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const containerRef = useRef<HTMLDivElement>(null)

  const getStep = useCallback(() => {
    const container = containerRef.current
    if (!container) return 600
    const first = container.children[0] as HTMLElement
    if (!first) return 600
    const gap = parseFloat(getComputedStyle(container).gap) || 0
    return first.offsetWidth + gap
  }, [])

  const updateScroll = useCallback(() => {
    const container = containerRef.current
    if (!container) return
    container.style.transform = `translate3d(${-currentIndex * getStep()}px, 0, 0)`
  }, [currentIndex, getStep])

  const next = useCallback(() => {
    setCurrentIndex(prev => (prev === itemCount - 1 ? 0 : prev + 1))
  }, [itemCount])

  const prev = useCallback(() => {
    setCurrentIndex(prev => (prev === 0 ? itemCount - 1 : prev - 1))
  }, [itemCount])

  return { currentIndex, containerRef, next, prev, updateScroll }
}
