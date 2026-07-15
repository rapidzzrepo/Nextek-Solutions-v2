import { useEffect, useRef } from 'react'
import { html } from '../data/Solutions'
import { useStarSystem } from '../hooks/useStarSystem'
import { useMouseGlow } from '../hooks/useMouseGlow'
import { initPrecisionStars } from '../utils/webglStars'

function initScrollReveal(): () => void {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('opacity-100', 'translate-y-0')
        entry.target.classList.remove('opacity-0', 'translate-y-10')
      }
    })
  }, { threshold: 0.1 })

  document.querySelectorAll('section, header > div').forEach(el => {
    el.classList.add('transition-all', 'duration-1000', 'opacity-0', 'translate-y-10')
    observer.observe(el)
  })

  return () => observer.disconnect()
}

function initStaggerReveal(): () => void {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.querySelectorAll('.stagger-fade').forEach(el => el.classList.add('visible'))
      }
    })
  }, { threshold: 0.15 })

  const precisionSection = document.getElementById('solutions-precision-canvas')?.closest('section')
  if (precisionSection) observer.observe(precisionSection)

  return () => observer.disconnect()
}

export default function Solutions() {
  const ref = useRef<HTMLDivElement>(null)

  useStarSystem('solutions-star-bg', 'solutions-hero')
  useMouseGlow('solutions-hero', 'solutions-hero-glow')

  useEffect(() => {
    if (!ref.current) return
    const cleanups: (() => void)[] = []

    cleanups.push(initPrecisionStars('protocol-precision-canvas'))
    cleanups.push(initPrecisionStars('solutions-precision-canvas'))
    cleanups.push(initScrollReveal())
    cleanups.push(initStaggerReveal())

    return () => cleanups.forEach(fn => fn())
  }, [])

  return <div ref={ref} dangerouslySetInnerHTML={{ __html: html }} />
}
