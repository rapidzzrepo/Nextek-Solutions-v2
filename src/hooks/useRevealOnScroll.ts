import { useEffect, useRef } from 'react'

interface UseRevealOnScrollOptions {
  threshold?: number
  rootMargin?: string
}

export function useRevealOnScroll({ threshold = 0.1, rootMargin = '0px 0px -50px 0px' }: UseRevealOnScrollOptions = {}) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible')
        }
      })
    }, { threshold, rootMargin })

    observer.observe(el)

    return () => observer.disconnect()
  }, [threshold, rootMargin])

  return ref
}
