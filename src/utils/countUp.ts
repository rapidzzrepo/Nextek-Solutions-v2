export function initCountUpAnimation(container: ParentNode, duration = 2000): () => void {
  const counters = container.querySelectorAll<HTMLElement>('.count-up')
  if (counters.length === 0) return () => {}

  let animId = 0

  const observer = new IntersectionObserver((entries) => {
    const anyVisible = entries.some(e => e.isIntersecting)
    if (!anyVisible) return

    const els = Array.from(counters)
    const targets = els.map(el => parseInt(el.dataset.target || '0'))
    const suffixes = els.map(el => el.dataset.suffix || '')
    const start = performance.now()

    const tick = (now: number) => {
      const elapsed = now - start
      const progress = Math.min(elapsed / duration, 1)

      els.forEach((el, i) => {
        el.textContent = String(Math.floor(targets[i] * progress))
      })

      if (progress < 1) {
        animId = requestAnimationFrame(tick)
      } else {
        els.forEach((el, i) => {
          el.textContent = String(targets[i]) + suffixes[i]
        })
      }
    }

    animId = requestAnimationFrame(tick)
    observer.disconnect()
  }, { threshold: 0.3 })

  counters.forEach(c => observer.observe(c))

  return () => {
    cancelAnimationFrame(animId)
    observer.disconnect()
  }
}
