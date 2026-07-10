import { useEffect, useRef } from 'react'
import { html } from '../data/Company'
import { StarSystem } from '../utils/starSystem'
import { initPrecisionStars } from '../utils/webglStars'
import { initMouseGlow } from '../utils/mouseGlow'

export default function Company() {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!ref.current) return

    const heroStars = new StarSystem('company-star-bg', 'company-hero')
    if (!heroStars.canvas) heroStars.destroy()
    const glowCleanup = initMouseGlow('company-hero', 'company-hero-glow')
    const eliteCleanup = initPrecisionStars('elite-precision-canvas')

    const header = document.querySelector('header')
    const onScroll = () => {
      if (!header) return
      if (window.scrollY > 50) {
        header.classList.add('py-2', 'shadow-sm')
        header.classList.remove('py-4')
      } else {
        header.classList.remove('py-2', 'shadow-sm')
        header.classList.add('py-4')
      }
    }
    window.addEventListener('scroll', onScroll, { passive: true })

    document.querySelectorAll('.glass-card').forEach(card => {
      const onMove = (e: Event) => {
        const mouseEvent = e as MouseEvent
        const rect = card.getBoundingClientRect()
        const x = mouseEvent.clientX - rect.left
        const y = mouseEvent.clientY - rect.top
        ;(card as HTMLElement).style.setProperty('--mouse-x', `${x}px`)
        ;(card as HTMLElement).style.setProperty('--mouse-y', `${y}px`)
      }
      card.addEventListener('mousemove', onMove)
    })

    const counters = document.querySelectorAll<HTMLElement>('.count-up')
    const DURATION = 2000

    const countObserver = new IntersectionObserver((entries) => {
      const anyVisible = entries.some(e => e.isIntersecting)
      if (!anyVisible) return

      const els = Array.from(counters)
      const targets = els.map(el => parseInt(el.dataset.target || '0'))
      const suffixes = els.map(el => el.dataset.suffix || '')

      const start = performance.now()

      const tick = (now: number) => {
        const elapsed = now - start
        const progress = Math.min(elapsed / DURATION, 1)

        els.forEach((el, i) => {
          el.textContent = String(Math.floor(targets[i] * progress))
        })

        if (progress < 1) {
          requestAnimationFrame(tick)
        } else {
          els.forEach((el, i) => {
            el.textContent = String(targets[i]) + suffixes[i]
          })
        }
      }

      requestAnimationFrame(tick)
      countObserver.disconnect()
    }, { threshold: 0.3 })

    counters.forEach(c => countObserver.observe(c))

    return () => {
      heroStars.destroy()
      glowCleanup()
      eliteCleanup()
      window.removeEventListener('scroll', onScroll)
      countObserver.disconnect()
    }
  }, [])

  return <div ref={ref} dangerouslySetInnerHTML={{ __html: html }} />
}
