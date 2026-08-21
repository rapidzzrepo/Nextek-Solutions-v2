import { useEffect, useRef, useState } from 'react'

interface UseCountUpOptions {
  target: number
  suffix?: string
  duration?: number
  threshold?: number
}

export function useCountUp({ target, suffix = '', duration = 2000, threshold = 0.3 }: UseCountUpOptions) {
  const [value, setValue] = useState('0')
  const ref = useRef<HTMLDivElement>(null)
  const hasAnimated = useRef(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      (entries) => {
        const anyVisible = entries.some((e) => e.isIntersecting)
        if (!anyVisible || hasAnimated.current) return
        hasAnimated.current = true

        const start = performance.now()

        const tick = (now: number) => {
          const elapsed = now - start
          const progress = Math.min(elapsed / duration, 1)

          setValue(String(Math.floor(target * progress)))

          if (progress < 1) {
            requestAnimationFrame(tick)
          } else {
            setValue(String(target) + suffix)
          }
        }

        requestAnimationFrame(tick)
        observer.disconnect()
      },
      { threshold }
    )

    observer.observe(el)

    return () => observer.disconnect()
  }, [target, suffix, duration, threshold])

  return { ref, value }
}
