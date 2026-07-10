import { useEffect, useRef } from 'react'
import { html } from '../data/Intelligence'
import { initPrecisionStars } from '../utils/webglStars'

export default function Intelligence() {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!ref.current) return

    const cleanups: (() => void)[] = []
    cleanups.push(initPrecisionStars('hero-precision-canvas'))
    cleanups.push(initPrecisionStars('testimonial-precision-canvas'))

    const observerOptions = { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible')
        }
      })
    }, observerOptions)
    document.querySelectorAll('.reveal-on-scroll').forEach(el => observer.observe(el))

    document.querySelectorAll('button').forEach(btn => {
      btn.addEventListener('mousedown', () => { btn.style.transform = 'scale(0.96)' })
      btn.addEventListener('mouseup', () => { btn.style.transform = '' })
      btn.addEventListener('mouseleave', () => { btn.style.transform = '' })
    })

    const scrollContainer = document.getElementById('testimonial-scroll')
    const dots = document.querySelectorAll('#testimonial-dots button')
    if (scrollContainer) {
      const onScroll = () => {
        const index = Math.round(scrollContainer.scrollLeft / scrollContainer.offsetWidth)
        dots.forEach((dot, i) => {
          if (i === index) {
            dot.classList.add('bg-inverse-primary')
            dot.classList.remove('bg-white/20')
          } else {
            dot.classList.remove('bg-inverse-primary')
            dot.classList.add('bg-white/20')
          }
        })
      }
      scrollContainer.addEventListener('scroll', onScroll)
    }

    // Dark header for Intelligence page
    const nav = document.querySelector('nav')
    const logo = document.querySelector('nav a img') as HTMLImageElement | null
    const navLinks = document.querySelectorAll('nav a:not([href="/contact"])')
    const hamburgerBtn = document.getElementById('hamburger-btn')
    if (nav) {
      nav.classList.add('bg-black/60', 'border-white/10')
      nav.classList.remove('bg-surface/80', 'border-outline-variant/30')
    }
    if (logo) {
      logo.classList.add('brightness-0', 'invert')
    }
    navLinks.forEach(link => {
      if (!link.classList.contains('text-primary')) {
        link.classList.add('text-white/70', 'hover:text-white')
        link.classList.remove('text-on-surface-variant', 'hover:text-primary')
      }
    })
    if (hamburgerBtn) {
      hamburgerBtn.classList.add('text-white')
      hamburgerBtn.classList.remove('text-on-surface-variant')
    }

    return () => {
      cleanups.forEach(fn => fn())
      observer.disconnect()
      if (nav) {
        nav.classList.remove('bg-black/60', 'border-white/10')
        nav.classList.add('bg-surface/80', 'border-outline-variant/30')
      }
      if (logo) {
        logo.classList.remove('brightness-0', 'invert')
      }
      navLinks.forEach(link => {
        if (!link.classList.contains('text-primary')) {
          link.classList.remove('text-white/70', 'hover:text-white')
          link.classList.add('text-on-surface-variant', 'hover:text-primary')
        }
      })
      if (hamburgerBtn) {
        hamburgerBtn.classList.remove('text-white')
        hamburgerBtn.classList.add('text-on-surface-variant')
      }
    }
  }, [])

  return <div ref={ref} dangerouslySetInnerHTML={{ __html: html }} />
}
