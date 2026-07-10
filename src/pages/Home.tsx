import { useEffect, useRef } from 'react'
import { html } from '../data/Home'
import { initPrecisionStars } from '../utils/webglStars'
import { StarSystem } from '../utils/starSystem'
import { initMouseGlow } from '../utils/mouseGlow'

export default function Home() {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!ref.current) return

    const cleanups: (() => void)[] = []

    const heroStars = new StarSystem('star-background', 'hero-section')
    if (heroStars.canvas) cleanups.push(() => heroStars.destroy())
    cleanups.push(initMouseGlow('hero-section', 'hero-glow'))

    cleanups.push(initPrecisionStars('industry-leaders-precision-canvas'))
    cleanups.push(initPrecisionStars('industry-solutions-precision-canvas'))
    cleanups.push(initPrecisionStars('resilient-precision-canvas'))

    const switchTab = (index: number) => {
      document.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('dark-glass', 'active-tab'))
      document.querySelectorAll('.tab-content-item').forEach(content => content.classList.add('hidden'))
      const selectedBtn = document.getElementById(`tab-${index}`)
      const selectedContent = document.getElementById(`content-${index}`)
      if (selectedBtn) selectedBtn.classList.add('dark-glass', 'active-tab')
      if (selectedContent) selectedContent.classList.remove('hidden')
    }

    const tab0 = document.getElementById('tab-0')
    const tab1 = document.getElementById('tab-1')
    const tab2 = document.getElementById('tab-2')
    tab0?.addEventListener('click', () => switchTab(0))
    tab1?.addEventListener('click', () => switchTab(1))
    tab2?.addEventListener('click', () => switchTab(2))

    const container = document.getElementById('studyContainer')
    const nextBtn = document.getElementById('nextStudy')
    const prevBtn = document.getElementById('prevStudy')
    let scrollAmount = 0
    if (nextBtn && prevBtn && container) {
      const onNext = () => {
        scrollAmount -= 400
        if (scrollAmount < -1200) scrollAmount = 0
        container.style.transform = `translate3d(${scrollAmount}px, 0, 0)`
      }
      const onPrev = () => {
        scrollAmount += 400
        if (scrollAmount > 0) scrollAmount = -1200
        container.style.transform = `translate3d(${scrollAmount}px, 0, 0)`
      }
      nextBtn.addEventListener('click', onNext)
      prevBtn.addEventListener('click', onPrev)
    }

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
      cleanups.forEach(fn => fn())
      tab0?.removeEventListener('click', () => switchTab(0))
      tab1?.removeEventListener('click', () => switchTab(1))
      tab2?.removeEventListener('click', () => switchTab(2))
      countObserver.disconnect()
    }
  }, [])

  return <div ref={ref} dangerouslySetInnerHTML={{ __html: html }} />
}
