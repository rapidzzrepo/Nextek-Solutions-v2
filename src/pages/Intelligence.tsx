import { useState, useRef, useCallback, type MouseEvent } from 'react'
import { useWebGLStars } from '../hooks'
import { useScrollReveal } from '../hooks/useScrollReveal'
import { Badge, Button, StarCanvas } from '../components/ui'
import ResilienceSection from '../components/sections/home-v3/ResilienceSection'
import {
  heroBadge,
  heroTitle,
  heroDescription,
  heroImageUrl,
  insights,
  testimonials,
  resultStats,
  ctaButtonText,
} from '../data/Intelligence'

const CONTAINER = 'container mx-auto px-margin-mobile sm:px-margin-tablet md:px-[48px] max-w-[1280px]'

function ScrollReveal({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  const ref = useScrollReveal()
  return (
    <div ref={ref} className={`reveal-on-scroll ${className}`}>
      {children}
    </div>
  )
}

function InsightCard({ insight, colSpan, variant }: { insight: typeof insights[number]; colSpan: string; variant?: 'wide' }) {
  const ref = useScrollReveal()

  if (variant === 'wide') {
    return (
      <div ref={ref} className={`${colSpan} group reveal-on-scroll`}>
        <div className="card-hover bg-surface-container-lowest border border-outline-variant/30 rounded-xl overflow-hidden grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          <div className="h-full min-h-[300px] relative overflow-hidden md:col-span-1">
            <div
              className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
              style={{ backgroundImage: `url('${insight.imageUrl}')` }}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-transparent" />
            <div className="absolute bottom-8 left-8">
              <span className={`${insight.badgeColor} text-white px-3 py-1 rounded text-xs font-bold uppercase mb-2 inline-block`}>
                {insight.badge}
              </span>
              <h3 className="font-headline-lg text-headline-lg text-white">{insight.title}</h3>
            </div>
          </div>
          <div className="p-8 lg:col-span-2 grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="space-y-6">
              {insight.sections.map((section) => (
                <div key={section.heading}>
                  <h4 className="font-label-md text-label-md text-primary uppercase mb-2">{section.heading}</h4>
                  <p className="font-body-md text-body-md text-on-surface-variant">{section.text}</p>
                </div>
              ))}
            </div>
            {insight.stats && (
              <div className="bg-inverse-surface text-inverse-on-surface p-8 rounded-xl flex flex-col justify-center items-center text-center">
                <div className="text-[28px] sm:text-display-lg-mobile font-extrabold text-inverse-primary mb-2">
                  {insight.stats.value}
                </div>
                <p className="font-headline-lg text-[16px] sm:text-headline-lg mb-2">{insight.stats.label}</p>
                <p className="text-sm opacity-70">{insight.stats.sublabel}</p>
              </div>
            )}
          </div>
        </div>
      </div>
    )
  }

  const isCompact = colSpan === 'lg:col-span-4'

  return (
    <div ref={ref} className={`${colSpan} group reveal-on-scroll`}>
      <div className="card-hover bg-surface-container-lowest border border-outline-variant/30 rounded-xl overflow-hidden h-full flex flex-col">
        <div
          className={`${isCompact ? 'h-[300px]' : 'h-[400px]'} relative overflow-hidden bg-cover bg-center transition-transform duration-700 group-hover:scale-105`}
          style={{ backgroundImage: `url('${insight.imageUrl}')` }}
        >
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          <div className={`${isCompact ? 'bottom-6 left-6' : 'bottom-8 left-8'} absolute`}>
            <span className={`${insight.badgeColor} text-white px-3 py-1 rounded text-xs font-bold uppercase mb-2 inline-block`}>
              {insight.badge}
            </span>
            <h3 className="font-headline-lg text-headline-lg text-white">{insight.title}</h3>
          </div>
        </div>
        <div className={`p-8 ${isCompact ? 'flex-grow flex flex-col justify-between' : 'grid grid-cols-1 md:grid-cols-3 gap-8'}`}>
          {insight.sections.map((section) => (
            <div key={section.heading}>
              <h4 className="font-label-md text-label-md text-primary uppercase mb-3">{section.heading}</h4>
              <p className="font-body-md text-body-md text-on-surface-variant">{section.text}</p>
            </div>
          ))}
          {insight.stats && !isCompact && (
            <div className="bg-surface-container-low p-6 rounded-lg border border-outline-variant/20">
              <h4 className="font-label-md text-label-md text-on-surface uppercase mb-1">{insight.stats.label}</h4>
              <span className="font-headline-xl text-primary">{insight.stats.value}</span>
              <p className="text-xs text-on-surface-variant mt-1">{insight.stats.sublabel}</p>
            </div>
          )}
          {insight.stats && isCompact && (
            <div className="bg-surface-container-low p-4 rounded-lg border border-outline-variant/20 text-center">
              <span className="font-headline-lg text-secondary">{insight.stats.value}</span>
              <p className="text-xs text-on-surface-variant">{insight.stats.sublabel}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

function TestimonialSlide({ testimonial }: { testimonial: typeof testimonials[number] }) {
  return (
    <div className="min-w-full snap-center px-4">
      <div className="max-w-4xl mx-auto text-center">
        <blockquote className="font-headline-xl text-xl md:text-headline-xl lg:text-[44px] text-inverse-on-surface leading-tight mb-12 italic">
          {testimonial.quote}
        </blockquote>
        <div className="flex flex-col items-center">
          {testimonial.avatar ? (
            <div className="w-16 h-16 rounded-full bg-surface-variant mb-4 overflow-hidden border-2 border-primary">
              <img
                alt={testimonial.name}
                className="w-full h-full object-cover"
                src={testimonial.avatar}
              />
            </div>
          ) : (
            <div className="w-16 h-16 rounded-full bg-surface-variant mb-4 flex items-center justify-center border-2 border-primary text-primary font-bold text-xl">
              {testimonial.initials}
            </div>
          )}
          <cite className="not-italic">
            <div className="font-headline-lg text-headline-lg text-inverse-primary">{testimonial.name}</div>
            <div className="font-label-md text-label-md text-inverse-on-surface/60 uppercase tracking-widest mt-1">
              {testimonial.role}
            </div>
          </cite>
        </div>
      </div>
    </div>
  )
}

export default function Intelligence() {
  useWebGLStars('hero-precision-canvas')
  useWebGLStars('testimonial-precision-canvas')

  const [activeSlide, setActiveSlide] = useState(0)
  const scrollRef = useRef<HTMLDivElement>(null)

  const scrollToSlide = useCallback((index: number) => {
    const container = scrollRef.current
    if (!container) return
    container.scrollTo({ left: container.offsetWidth * index, behavior: 'smooth' })
  }, [])

  const handleScroll = useCallback(() => {
    const container = scrollRef.current
    if (!container) return
    const index = Math.round(container.scrollLeft / container.offsetWidth)
    setActiveSlide(index)
  }, [])

  const handlePrev = useCallback(() => {
    const container = scrollRef.current
    if (!container) return
    container.scrollTo({ left: container.scrollLeft - container.offsetWidth, behavior: 'smooth' })
  }, [])

  const handleNext = useCallback(() => {
    const container = scrollRef.current
    if (!container) return
    container.scrollTo({ left: container.scrollLeft + container.offsetWidth, behavior: 'smooth' })
  }, [])

  const pressBtn = useCallback((e: MouseEvent<HTMLButtonElement>) => {
    e.currentTarget.style.transform = 'scale(0.96)'
  }, [])

  const releaseBtn = useCallback((e: MouseEvent<HTMLButtonElement>) => {
    e.currentTarget.style.transform = ''
  }, [])

  const insightColSpans = ['lg:col-span-8', 'lg:col-span-4', 'lg:col-span-12']

  return (
    <div>
      {/* Hero */}
      <section className="relative min-h-screen flex items-center py-16 md:py-24 overflow-hidden bg-[#0a0a0a]">
        <StarCanvas id="hero-precision-canvas" />
        <div className={`${CONTAINER} relative z-10`}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <Badge variant="dark" className="mb-6">
                {heroBadge}
              </Badge>
              <h1 className="font-headline-xl text-[28px] sm:text-display-lg-mobile md:text-display-lg font-extrabold text-white leading-tight mb-8">
                {heroTitle.text}
                <span className="text-primary-fixed-dim">{heroTitle.highlight}</span>.
              </h1>
              <p className="font-body-lg text-body-lg text-white/80 mb-10 max-w-xl mx-auto lg:mx-0">
                {heroDescription}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto lg:max-w-none">
                <Button
                  variant="primary"
                  size="md"
                  className="shadow-lg shadow-primary/20"
                >
                  Explore Protocols
                </Button>
                <Button
                  variant="outline"
                  size="md"
                  className="border-white/20 text-white hover:bg-white/5"
                >
                  Technical Manifesto
                </Button>
              </div>
            </div>
            <ScrollReveal className="hidden md:block visible">
              <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl border border-white/10 bg-black/40 backdrop-blur-sm">
                <img
                  alt="AI-driven engineering ecosystem diagram"
                  className="w-full h-auto object-cover"
                  src={heroImageUrl}
                />
              </div>
              <div className="absolute -top-10 -right-10 w-64 h-64 bg-primary/20 rounded-full blur-3xl -z-10" />
              <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-secondary/20 rounded-full blur-3xl -z-10" />
            </ScrollReveal>
          </div>
        </div>
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce z-10">
          <span className="material-symbols-outlined text-white/40">arrow_downward</span>
        </div>
      </section>

      {/* Technical Insights */}
      <section className="py-16 md:py-[120px] container mx-auto px-margin-mobile sm:px-margin-tablet md:px-[48px] max-w-[1280px]">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="font-headline-lg text-headline-lg text-on-surface mb-4">Technical Insights</h2>
            <p className="font-body-md text-body-md text-on-surface-variant">
              In-depth analysis of emerging technologies and architectural patterns developed within the Nextek Sol R&amp;D labs.
            </p>
          </div>
          <div className="flex gap-2">
            <button
              className="p-3 border border-outline-variant rounded-full hover:border-primary text-outline hover:text-primary transition-all"
              onMouseDown={pressBtn}
              onMouseUp={releaseBtn}
              onMouseLeave={releaseBtn}
            >
              <span className="material-symbols-outlined">west</span>
            </button>
            <button
              className="p-3 border border-outline-variant rounded-full hover:border-primary text-outline hover:text-primary transition-all"
              onMouseDown={pressBtn}
              onMouseUp={releaseBtn}
              onMouseLeave={releaseBtn}
            >
              <span className="material-symbols-outlined">east</span>
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter">
          {insights.map((insight, i) => (
            <InsightCard
              key={insight.title}
              insight={insight}
              colSpan={insightColSpans[i]}
              variant={i === 2 ? 'wide' : undefined}
            />
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 md:py-[120px] bg-[#0a0a0a] relative overflow-hidden">
        <StarCanvas id="testimonial-precision-canvas" />
        <div className={`${CONTAINER} relative z-10`}>
          <div className="text-center mb-12">
            <span className="material-symbols-outlined text-inverse-primary text-5xl">format_quote</span>
          </div>

          <div className="relative group/carousel">
            <div
              ref={scrollRef}
              onScroll={handleScroll}
              className="flex overflow-x-auto overflow-y-hidden snap-x snap-mandatory no-scrollbar scroll-smooth gap-0"
            >
              {testimonials.map((t) => (
                <TestimonialSlide key={t.name} testimonial={t} />
              ))}
            </div>

            {/* Navigation Arrows */}
            <div className="hidden md:flex absolute top-1/2 -translate-y-1/2 left-0 right-0 justify-between pointer-events-none px-4 md:-mx-12 z-10">
              <button
                onClick={handlePrev}
                className="pointer-events-auto p-3 bg-primary/20 hover:bg-primary/40 border border-white/10 rounded-full text-white transition-all backdrop-blur-md"
                onMouseDown={pressBtn}
                onMouseUp={releaseBtn}
                onMouseLeave={releaseBtn}
              >
                <span className="material-symbols-outlined">west</span>
              </button>
              <button
                onClick={handleNext}
                className="pointer-events-auto p-3 bg-primary/20 hover:bg-primary/40 border border-white/10 rounded-full text-white transition-all backdrop-blur-md"
                onMouseDown={pressBtn}
                onMouseUp={releaseBtn}
                onMouseLeave={releaseBtn}
              >
                <span className="material-symbols-outlined">east</span>
              </button>
            </div>

            {/* Pagination Dots */}
            <div className="flex justify-center gap-3 mt-12">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => scrollToSlide(i)}
                  className={`w-2.5 h-2.5 rounded-full transition-all ${
                    activeSlide === i ? 'bg-inverse-primary' : 'bg-white/20 hover:bg-white/40'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Result Stats */}
      <section className="py-16 md:py-[120px] bg-gradient-to-b from-surface to-surface-container-low">
        <div className={CONTAINER}>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-gutter">
            {resultStats.map((stat) => (
              <div
                key={stat.label}
                className="bg-surface-container-lowest border border-outline-variant/30 p-6 md:p-8 rounded-2xl shadow-sm card-hover flex flex-col items-center text-center"
              >
                <span className="material-symbols-outlined text-primary mb-4">{stat.icon}</span>
                <div className="text-[28px] md:text-4xl lg:text-display-lg-mobile font-bold text-primary mb-2">
                  {stat.value}
                </div>
                <p className="font-label-md text-label-md text-on-surface-variant/70 uppercase tracking-wider">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Resilient Infrastructure */}
      <ResilienceSection />

      {/* CTA */}
      <section className={`py-16 md:py-[120px] ${CONTAINER} text-center`}>
        <div className="bg-primary rounded-[2rem] p-8 md:p-16 lg:p-24 relative overflow-hidden group">
          <div className="absolute inset-0 bg-gradient-to-br from-primary to-secondary opacity-50 group-hover:opacity-100 transition-opacity duration-1000" />
          <div className="relative z-10">
            <h2 className="font-headline-xl text-display-lg-mobile md:text-headline-xl text-on-primary mb-6 md:mb-8">
              Ready to engineer your <br className="hidden md:block" /> next horizon?
            </h2>
            <a
              className="inline-block bg-on-primary text-primary px-6 md:px-10 py-4 md:py-5 rounded-xl font-headline-lg text-body-lg md:text-headline-lg hover:scale-105 transition-transform duration-300 shadow-xl shadow-black/10"
              href="/contact"
            >
              {ctaButtonText}
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
