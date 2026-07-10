import { useEffect, useRef } from 'react'
import { html } from '../data/Solutions'
import { StarSystem } from '../utils/starSystem'
import { initMouseGlow } from '../utils/mouseGlow'
import { initPrecisionStars } from '../utils/webglStars'

export default function Solutions() {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!ref.current) return

    // Hero star canvas
    const heroStars = new StarSystem('solutions-star-bg', 'solutions-hero')
    if (!heroStars.canvas) heroStars.destroy()
    const glowCleanup = initMouseGlow('solutions-hero', 'solutions-hero-glow')

    const protocolCleanup = initPrecisionStars('protocol-precision-canvas')

    const precisionCleanup = initPrecisionStars('solutions-precision-canvas')

    const staggerObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) entry.target.querySelectorAll('.stagger-fade').forEach(el => el.classList.add('visible'))
      })
    }, { threshold: 0.15 })
    const precisionSection = document.getElementById('solutions-precision-canvas')?.closest('section')
    if (precisionSection) staggerObserver.observe(precisionSection)

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

    return () => {
      heroStars.destroy()
      glowCleanup()
      protocolCleanup()
      precisionCleanup()
      staggerObserver.disconnect()
      observer.disconnect()
    }
  }, [])

  return <div ref={ref} dangerouslySetInnerHTML={{ __html: html }} />
}
