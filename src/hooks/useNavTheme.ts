import { useEffect } from 'react'

type NavTheme = 'default' | 'dark'

export function useNavTheme(theme: NavTheme = 'default') {
  useEffect(() => {
    if (theme === 'default') return

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
  }, [theme])
}
