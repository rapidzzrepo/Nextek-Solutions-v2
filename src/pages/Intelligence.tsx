import { useEffect, useRef } from 'react'
import { html } from '../data/Intelligence'
import { useNavTheme } from '../hooks/useNavTheme'
import { initPrecisionStars } from '../utils/webglStars'

function initRevealOnScroll(): () => void {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) entry.target.classList.add('visible')
    })
  }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' })

  document.querySelectorAll('.reveal-on-scroll').forEach(el => observer.observe(el))
  return () => observer.disconnect()
}

function initButtonPress(): () => void {
  const handlers: Array<{ el: Element; down: () => void; up: () => void }> = []

  document.querySelectorAll('button').forEach(btn => {
    const down = () => { btn.style.transform = 'scale(0.96)' }
    const up = () => { btn.style.transform = '' }
    btn.addEventListener('mousedown', down)
    btn.addEventListener('mouseup', up)
    btn.addEventListener('mouseleave', up)
    handlers.push({ el: btn, down, up })
  })

  return () => {
    handlers.forEach(({ el, down, up }) => {
      el.removeEventListener('mousedown', down)
      el.removeEventListener('mouseup', up)
      el.removeEventListener('mouseleave', up)
    })
  }
}

function initTestimonialDots(): () => void {
  const scrollContainer = document.getElementById('testimonial-scroll')
  const dots = document.querySelectorAll('#testimonial-dots button')
  if (!scrollContainer) return () => {}

  const onScroll = () => {
    const index = Math.round(scrollContainer.scrollLeft / scrollContainer.offsetWidth)
    dots.forEach((dot, i) => {
      dot.classList.toggle('bg-inverse-primary', i === index)
      dot.classList.toggle('bg-white/20', i !== index)
    })
  }

  scrollContainer.addEventListener('scroll', onScroll)
  return () => scrollContainer.removeEventListener('scroll', onScroll)
}

export default function Intelligence() {
  const ref = useRef<HTMLDivElement>(null)

  useNavTheme('dark')

  useEffect(() => {
    if (!ref.current) return
    const cleanups: (() => void)[] = []

    cleanups.push(initPrecisionStars('hero-precision-canvas'))
    cleanups.push(initPrecisionStars('testimonial-precision-canvas'))
    cleanups.push(initRevealOnScroll())
    cleanups.push(initButtonPress())
    cleanups.push(initTestimonialDots())

    return () => cleanups.forEach(fn => fn())
  }, [])

  return <div ref={ref} dangerouslySetInnerHTML={{ __html: html }} />
}
