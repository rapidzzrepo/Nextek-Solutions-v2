import { useState, useCallback } from 'react'
import { caseStudies, featuredStudy as defaultFeatured } from '../data/CaseStudies'
import CaseStudyCard from '../components/ui/CaseStudyCard'

export default function CaseStudies() {
  const [activeStudy, setActiveStudy] = useState(defaultFeatured)
  const [fadeOpacity, setFadeOpacity] = useState(1)

  const handleStudyClick = useCallback((key: string) => {
    const study = caseStudies.find(s => s.key === key)
    if (!study || study.key === activeStudy.key) return

    setFadeOpacity(0)
    setTimeout(() => {
      setActiveStudy(study)
      setFadeOpacity(1)
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }, 200)
  }, [activeStudy.key])

  const handleNext = useCallback(() => {
    const currentIndex = caseStudies.findIndex(s => s.key === activeStudy.key)
    const nextIndex = (currentIndex + 1) % caseStudies.length
    handleStudyClick(caseStudies[nextIndex].key)
  }, [activeStudy.key, handleStudyClick])

  return (
    <div className="pt-20">
      <section className="py-16 md:py-section-gap max-w-container-max mx-auto px-margin-mobile sm:px-margin-tablet md:px-margin-desktop">
        <div className="mb-16">
          <h1 className="font-display-lg text-headline-xl mb-4">Case Studies</h1>
          <p className="font-body-lg text-on-surface-variant">Explore our latest work and real-world impact across global markets.</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10 items-start">
          <div
            className="transition-opacity duration-200"
            style={{ opacity: fadeOpacity }}
          >
            <CaseStudyCard study={activeStudy} featured />
          </div>

          <div className="space-y-4">
            <div className="flex items-center justify-between mb-6">
              <h3 className="font-headline-lg text-lg">All Studies</h3>
              <button
                onClick={handleNext}
                className="w-10 h-10 rounded-full border border-outline-variant flex items-center justify-center hover:bg-surface-container transition-all"
                aria-label="Next study"
              >
                <span className="material-symbols-outlined">arrow_forward</span>
              </button>
            </div>
            <div className="grid gap-4 max-h-[600px] overflow-y-auto pr-2 no-scrollbar">
              {caseStudies.map(study => (
                <div
                  key={study.key}
                  className={`p-4 rounded-xl border transition-all cursor-pointer ${
                    study.key === activeStudy.key
                      ? 'border-primary bg-primary/5'
                      : 'border-outline-variant/30 hover:border-primary/40'
                  }`}
                  onClick={() => handleStudyClick(study.key)}
                >
                  <span className="text-primary font-label-md text-xs uppercase">{study.category}</span>
                  <h4 className="font-headline-lg text-sm mt-1">{study.title}</h4>
                  <p className="font-body-md text-on-surface-variant text-xs mt-1 line-clamp-2">{study.description}</p>
                  <div className="flex items-center gap-2 mt-2">
                    <span className="font-label-sm text-on-surface-variant text-[10px]">{study.author}</span>
                    <span className="text-on-surface-variant text-[10px]">·</span>
                    <span className="font-label-sm text-on-surface-variant text-[10px]">{study.time}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-section-gap max-w-container-max mx-auto px-margin-mobile sm:px-margin-tablet md:px-margin-desktop">
        <h2 className="font-display-lg text-headline-xl mb-8 md:mb-16 text-center">More Case Studies</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {caseStudies.map(study => (
            <CaseStudyCard
              key={study.key}
              study={study}
              onClick={() => handleStudyClick(study.key)}
            />
          ))}
        </div>
      </section>
    </div>
  )
}
