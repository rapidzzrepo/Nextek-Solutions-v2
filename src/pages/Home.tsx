import { useEffect, useRef } from 'react'
import { html } from '../data/Home'
import { useStarSystem } from '../hooks/useStarSystem'
import { useMouseGlow } from '../hooks/useMouseGlow'
import { initPrecisionStars } from '../utils/webglStars'
import { initCountUpAnimation } from '../utils/countUp'

function initCarousel(): () => void {
  const container = document.getElementById('studyContainer')
  const nextBtn = document.getElementById('nextStudy')
  const prevBtn = document.getElementById('prevStudy')
  if (!nextBtn || !prevBtn || !container) return () => {}

  let scrollIndex = 0

  const getStep = () => {
    const first = container.children[0] as HTMLElement
    if (!first) return 600
    const gap = parseFloat(getComputedStyle(container).gap) || 0
    return first.offsetWidth + gap
  }

  const maxIndex = container.children.length - 1
  const updateScroll = () => {
    container.style.transform = `translate3d(${-scrollIndex * getStep()}px, 0, 0)`
  }

  const onNext = () => {
    scrollIndex = scrollIndex === maxIndex ? 0 : scrollIndex + 1
    updateScroll()
  }
  const onPrev = () => {
    scrollIndex = scrollIndex === 0 ? maxIndex : scrollIndex - 1
    updateScroll()
  }

  nextBtn.addEventListener('click', onNext)
  prevBtn.addEventListener('click', onPrev)

  return () => {
    nextBtn.removeEventListener('click', onNext)
    prevBtn.removeEventListener('click', onPrev)
  }
}

function initIndustryTabs(): () => void {
  const switchTab = (index: number) => {
    document.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('dark-glass', 'active-tab'))
    document.querySelectorAll('.tab-content-item').forEach(content => content.classList.add('hidden'))
    const selectedBtn = document.getElementById(`tab-${index}`)
    const selectedContent = document.getElementById(`content-${index}`)
    if (selectedBtn) selectedBtn.classList.add('dark-glass', 'active-tab')
    if (selectedContent) selectedContent.classList.remove('hidden')
  }

  const handlers: Array<{ el: HTMLElement; handler: () => void }> = []
  for (let i = 0; i <= 2; i++) {
    const btn = document.getElementById(`tab-${i}`)
    if (btn) {
      const handler = () => switchTab(i)
      btn.addEventListener('click', handler)
      handlers.push({ el: btn, handler })
    }
  }

  return () => {
    handlers.forEach(({ el, handler }) => el.removeEventListener('click', handler))
  }
}

export default function Home() {
  const ref = useRef<HTMLDivElement>(null)

  useStarSystem('star-background', 'hero-section')
  useMouseGlow('hero-section', 'hero-glow')

  useEffect(() => {
    if (!ref.current) return
    const container = ref.current

    const cleanups: (() => void)[] = []

    cleanups.push(initPrecisionStars('industry-leaders-precision-canvas'))
    cleanups.push(initPrecisionStars('industry-solutions-precision-canvas'))
    cleanups.push(initPrecisionStars('resilient-precision-canvas'))

    cleanups.push(initIndustryTabs())
    cleanups.push(initCarousel())
    cleanups.push(initCountUpAnimation(container))

    return () => cleanups.forEach(fn => fn())
  }, [])

  return <div ref={ref} dangerouslySetInnerHTML={{ __html: html }} />
}
