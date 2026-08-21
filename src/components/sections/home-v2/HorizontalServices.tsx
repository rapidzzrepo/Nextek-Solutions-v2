import { horizontalServices } from '../../../data/HomeData'
import { useScrollReveal } from '../../../hooks'
import { useEffect, useState, useCallback, useRef } from 'react'

function getVisibleCount() {
  if (typeof window === 'undefined') return 3
  if (window.innerWidth < 640) return 1
  if (window.innerWidth < 1024) return 2
  return 3
}

export default function HorizontalServices() {
  const sectionRef = useScrollReveal()
  const [index, setIndex] = useState(0)
  const [visibleCount, setVisibleCount] = useState(getVisibleCount)

  useEffect(() => {
    const onResize = () => {
      const vc = getVisibleCount()
      setVisibleCount(vc)
      setIndex((prev) => Math.min(prev, Math.max(0, horizontalServices.length - vc)))
    }
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  const maxIndex = Math.max(0, horizontalServices.length - visibleCount)

  const carouselRef = useRef<HTMLDivElement>(null)
  const touchStartX = useRef(0)
  const stateRef = useRef({ index, maxIndex })
  stateRef.current = { index, maxIndex }

  const handlePrev = useCallback(() => setIndex((i) => Math.max(0, i - 1)), [])
  const handleNext = useCallback(
    () => setIndex((i) => Math.min(maxIndex, i + 1)),
    [maxIndex]
  )

  useEffect(() => {
    const el = carouselRef.current
    if (!el) return
    let lastSnap = 0
    const onWheel = (e: WheelEvent) => {
      const delta = Math.abs(e.deltaX) > Math.abs(e.deltaY) ? e.deltaX : e.deltaY
      if (Math.abs(delta) < 5) return
      const { index: cur, maxIndex: max } = stateRef.current
      const goingNext = delta > 0
      if (goingNext ? cur >= max : cur <= 0) return
      e.preventDefault()
      const now = performance.now()
      if (now - lastSnap < 300) return
      lastSnap = now
      setIndex((i) => Math.min(max, Math.max(0, goingNext ? i + 1 : i - 1)))
    }
    el.addEventListener('wheel', onWheel, { passive: false })
    return () => el.removeEventListener('wheel', onWheel)
  }, [])

  useEffect(() => {
    const el = sectionRef.current
    if (!el) return
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll('.stagger-fade').forEach((child, i) => {
              setTimeout(() => child.classList.add('visible'), i * 120)
            })
          }
        })
      },
      { threshold: 0.1 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [sectionRef])

  const arrowClasses =
    'w-11 h-11 rounded-full border border-outline-variant/40 bg-white/[0.04] flex items-center justify-center text-on-surface transition-all duration-300 hover:bg-primary hover:border-primary hover:text-white active:scale-95 disabled:opacity-30 disabled:pointer-events-none'

  return (
    <section className="py-20 md:py-[120px] bg-gradient-to-b from-surface via-surface to-surface relative overflow-hidden" id="h-services-v2" ref={sectionRef}>
      <div className="px-margin-mobile sm:px-margin-tablet md:px-[48px] mb-10 stagger-fade">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6">
          <div>
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary font-label-md text-[11px] tracking-widest uppercase mb-4">What We Do</span>
            <h2 className="font-display-lg text-[28px] sm:text-[36px] md:text-headline-xl text-on-surface mb-4">Marketing + Engineering, Unified</h2>
            <p className="font-body-lg text-on-surface-variant max-w-xl">Everything you need to grow — from ad campaigns to custom software.</p>
          </div>
          <div className="flex items-center gap-3 shrink-0">
            <button onClick={handlePrev} disabled={index === 0} className={arrowClasses} aria-label="Previous services">
              <span className="material-symbols-outlined text-xl">arrow_back</span>
            </button>
            <button onClick={handleNext} disabled={index === maxIndex} className={arrowClasses} aria-label="Next services">
              <span className="material-symbols-outlined text-xl">arrow_forward</span>
            </button>
          </div>
        </div>
      </div>
      <div
        ref={carouselRef}
        className="overflow-hidden -mx-3 px-margin-mobile sm:px-margin-tablet md:px-[48px]"
        onTouchStart={(e) => {
          touchStartX.current = e.touches[0].clientX
        }}
        onTouchEnd={(e) => {
          const delta = e.changedTouches[0].clientX - touchStartX.current
          if (Math.abs(delta) < 40) return
          setIndex((i) =>
            delta < 0 ? Math.min(maxIndex, i + 1) : Math.max(0, i - 1)
          )
        }}
      >
        <div
          className="flex transition-transform duration-500 ease-out"
          style={{ transform: `translateX(-${index * (100 / visibleCount)}%)` }}
        >
          {horizontalServices.map((service, i) => (
            <div key={i} className="stagger-fade shrink-0 w-full sm:w-1/2 lg:w-1/3 px-3">
              <div className="h-full p-8 rounded-3xl border border-outline-variant/40 bg-white/[0.04] backdrop-blur-sm hover:border-primary/50 hover:bg-white/[0.08] hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500 group cursor-default">
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-primary/20 transition-all duration-300 shadow-lg shadow-primary/5">
                  <span className={`material-symbols-outlined text-2xl ${service.color}`}>{service.icon}</span>
                </div>
                <h3 className="font-headline-lg text-on-surface text-xl mb-3">{service.title}</h3>
                <p className="text-on-surface-variant text-[14px] leading-relaxed">{service.shortDescription}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
