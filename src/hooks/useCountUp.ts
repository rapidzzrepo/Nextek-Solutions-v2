import { useEffect, useRef } from 'react'

interface UseCountUpOptions {
  target: number
  suffix?: string
  duration?: number
}

export function useCountUp({ target, suffix = '', duration = 2000 }: UseCountUpOptions) {
  const ref = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    let animId = 0

    const observer = new IntersectionObserver((entries) => {
      const anyVisible = entries.some(e => e.isIntersecting)
      if (!anyVisible) return

      const start = performance.now()

      const tick = (now: number) => {
        const elapsed = now - start
        const progress = Math.min(elapsed / duration, 1)
        el.textContent = String(Math.floor(target * progress))

        if (progress < 1) {
          animId = requestAnimationFrame(tick)
        } else {
          el.textContent = String(target) + suffix
        }
      }

      animId = requestAnimationFrame(tick)
      observer.disconnect()
    }, { threshold: 0.3 })

    observer.observe(el)

    return () => {
      cancelAnimationFrame(animId)
      observer.disconnect()
    }
  }, [target, suffix, duration])

  return ref
}
