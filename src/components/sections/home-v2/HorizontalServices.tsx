import { horizontalServices } from '../../../data/HomeV2'
import { useScrollReveal } from '../../../hooks'
import { useEffect } from 'react'

export default function HorizontalServices() {
  const sectionRef = useScrollReveal()

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

  return (
    <section className="py-20 md:py-[120px] bg-gradient-to-b from-surface via-surface to-surface relative overflow-hidden" id="h-services-v2" ref={sectionRef}>
      <div className="px-4 sm:px-8 md:px-[48px] mb-10 stagger-fade">
        <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary font-label-md text-[11px] tracking-widest uppercase mb-4">What We Do</span>
        <h2 className="font-display-lg text-[28px] sm:text-[36px] md:text-headline-xl text-on-surface mb-4">Marketing + Engineering, Unified</h2>
        <p className="font-body-lg text-on-surface-variant max-w-xl">Everything you need to grow — from ad campaigns to custom software.</p>
      </div>
      <div className="overflow-x-auto no-scrollbar scroll-smooth">
        <div className="flex gap-6 px-4 sm:px-8 md:px-[48px] pb-4" style={{ minWidth: 'max-content' }}>
          {horizontalServices.map((service, i) => (
            <div
              key={i}
              className="stagger-fade flex-shrink-0 w-[260px] md:w-[300px] p-8 rounded-3xl border border-outline-variant/40 bg-white/[0.04] backdrop-blur-sm hover:border-primary/50 hover:bg-white/[0.08] hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500 group cursor-default"
            >
              <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-primary/20 transition-all duration-300 shadow-lg shadow-primary/5">
                <span className={`material-symbols-outlined text-2xl ${service.color}`}>{service.icon}</span>
              </div>
              <h3 className="font-headline-lg text-on-surface text-xl mb-3">{service.title}</h3>
              <p className="text-on-surface-variant text-[14px] leading-relaxed">{service.shortDescription}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="px-4 sm:px-8 md:px-[48px] mt-6">
        <p className="text-on-surface-variant/50 text-[12px] flex items-center gap-2">
          <span className="material-symbols-outlined text-sm">swipe</span>
          Scroll horizontally to explore
        </p>
      </div>
    </section>
  )
}
