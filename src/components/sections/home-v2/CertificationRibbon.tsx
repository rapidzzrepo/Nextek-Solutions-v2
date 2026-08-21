import { certBadges } from '../../../data/HomeV2'
import { useScrollReveal } from '../../../hooks'
import { useEffect } from 'react'

export default function CertificationRibbon() {
  const sectionRef = useScrollReveal()

  useEffect(() => {
    const el = sectionRef.current
    if (!el) return
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll('.stagger-fade').forEach((child, i) => {
              setTimeout(() => child.classList.add('visible'), i * 80)
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
    <section className="py-16 md:py-20 bg-gradient-to-r from-primary via-primary/90 to-secondary relative overflow-hidden" id="certs-v2" ref={sectionRef}>
      <div className="max-w-container-max mx-auto px-margin-mobile sm:px-margin-tablet md:px-margin-desktop relative z-10">
        <div className="text-center mb-12 stagger-fade">
          <p className="font-label-md text-white/70 text-[11px] tracking-[0.24em] uppercase mb-2">Industry-Certified Excellence</p>
          <h2 className="font-headline-lg text-white text-xl md:text-2xl">Recognized & Trusted Worldwide</h2>
        </div>
        <div className="flex flex-wrap justify-center sm:grid sm:grid-cols-3 lg:grid-cols-5 gap-0 border-t sm:border-l border-white/15 stagger-fade">
          {certBadges.map((cert, i) => (
            <div
              key={i}
              className={`relative flex flex-col items-center text-center px-3 sm:px-5 md:px-6 py-8 md:py-12 border-r border-b border-white/15 min-h-[240px] md:min-h-[330px] justify-between w-1/2 sm:w-auto ${
                i % 2 === 0 ? 'border-l sm:border-l-0' : ''
              }`}
            >
              <span className="font-label-lg text-white text-[13px] sm:text-[15px] md:text-[16px] uppercase tracking-[0.14em] sm:tracking-[0.18em] leading-[1.5] min-h-[60px] md:min-h-[84px] flex items-start justify-center">
                {cert.label}
              </span>
              <div className="flex items-center justify-center w-full min-h-[120px] md:min-h-[170px]">
                <img src={cert.src} alt={cert.alt} className="max-w-[100px] max-h-[100px] sm:max-w-[150px] sm:max-h-[150px] md:max-w-[170px] md:max-h-[170px] object-contain" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
