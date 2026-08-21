import { useEffect } from 'react'
import { techCategories } from '../../../data/HomeData'
import { useScrollReveal } from '../../../hooks'

export default function TechStack() {
  const sectionRef = useScrollReveal()

  useEffect(() => {
    const el = sectionRef.current
    if (!el) return
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll('.stagger-fade').forEach((child, i) => {
              setTimeout(() => child.classList.add('visible'), i * 100)
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
    <section className="py-20 md:py-[120px] bg-gradient-to-b from-surface to-surface-container relative overflow-hidden" id="tech-stack">
      <div className="absolute top-[-10%] right-[-5%] w-[400px] h-[400px] rounded-full bg-primary/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-10%] left-[-5%] w-[300px] h-[300px] rounded-full bg-secondary/5 blur-[100px] pointer-events-none" />
      <div className="max-w-container-max mx-auto px-margin-mobile sm:px-margin-tablet md:px-margin-desktop" ref={sectionRef}>
        <div className="text-center mb-12 stagger-fade">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary font-label-md text-[11px] tracking-widest uppercase mb-4">Tech Stack</span>
          <h2 className="font-display-lg text-[28px] sm:text-[36px] md:text-headline-xl text-on-surface mb-4">Built With Modern Technology</h2>
          <p className="font-body-lg text-on-surface-variant max-w-xl mx-auto">We use the best tools for the job — not one-size-fits-all solutions.</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {techCategories.map((category, i) => (
            <div key={i} className="rounded-2xl p-6 bg-white/[0.03] backdrop-blur-sm hover:bg-white/[0.06] hover:shadow-2xl hover:shadow-primary/10 transition-all duration-300 stagger-fade">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shadow-lg shadow-primary/5">
                  <span className={`material-symbols-outlined text-xl ${category.color}`}>{category.icon}</span>
                </div>
                <div>
                  <h3 className="font-headline-lg text-on-surface text-base font-semibold">{category.title}</h3>
                </div>
              </div>
              <p className="text-on-surface-variant text-[13px] leading-relaxed mb-5">{category.description}</p>
              <div className="grid grid-cols-3 gap-3">
                {category.techs.map((tech, j) => (
                  <div key={j} className="flex flex-col items-center gap-1.5 p-2.5 rounded-xl bg-surface-container/50 hover:bg-primary/10 transition-colors cursor-default group">
                    <span className="text-lg">{tech.icon}</span>
                    <span className="text-on-surface-variant text-[10px] font-medium text-center leading-tight group-hover:text-primary transition-colors">{tech.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
