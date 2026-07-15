import { useEffect, useRef } from 'react'
import { html } from '../data/Company'
import { useStarSystem } from '../hooks/useStarSystem'
import { useMouseGlow } from '../hooks/useMouseGlow'
import { initPrecisionStars } from '../utils/webglStars'
import { initCountUpAnimation } from '../utils/countUp'

function initGlassCardTracking(): () => void {
  const handlers: Array<{ el: Element; handler: (e: Event) => void }> = []

  document.querySelectorAll('.glass-card').forEach(card => {
    const handler = (e: Event) => {
      const mouseEvent = e as MouseEvent
      const rect = card.getBoundingClientRect()
      ;(card as HTMLElement).style.setProperty('--mouse-x', `${mouseEvent.clientX - rect.left}px`)
      ;(card as HTMLElement).style.setProperty('--mouse-y', `${mouseEvent.clientY - rect.top}px`)
    }
    card.addEventListener('mousemove', handler)
    handlers.push({ el: card, handler })
  })

  return () => {
    handlers.forEach(({ el, handler }) => el.removeEventListener('mousemove', handler))
  }
}

function initScrollNav(): () => void {
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
  return () => window.removeEventListener('scroll', onScroll)
}

export default function Company() {
  const ref = useRef<HTMLDivElement>(null)

  useStarSystem('company-star-bg', 'company-hero')
  useMouseGlow('company-hero', 'company-hero-glow')

  useEffect(() => {
    if (!ref.current) return
    const cleanups: (() => void)[] = []

    cleanups.push(initPrecisionStars('elite-precision-canvas'))
    cleanups.push(initScrollNav())
    cleanups.push(initGlassCardTracking())
    cleanups.push(initCountUpAnimation(ref.current))

    return () => cleanups.forEach(fn => fn())
  }, [])

  return <div ref={ref} dangerouslySetInnerHTML={{ __html: html }} />
}
