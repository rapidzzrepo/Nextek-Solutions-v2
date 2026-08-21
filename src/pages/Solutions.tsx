import { useStarSystem, useMouseGlow, useWebGLStars } from '../hooks'
import { Badge, Button, StarCanvas, FeatureListItem, ProgressBar } from '../components/ui'
import {
  heroBadge,
  heroTitle,
  heroDescription,
  techStack,
  pillars,
  domains,
  protocolSteps,
  ctaTitle,
  ctaDescription,
  ctaPrimaryText,
  ctaSecondaryText,
} from '../data/Solutions'

export default function Solutions() {
  useStarSystem('solutions-star-bg', 'solutions-hero')
  useMouseGlow('solutions-hero', 'solutions-hero-glow')
  useWebGLStars('solutions-precision-canvas')
  useWebGLStars('protocol-precision-canvas')

  const container = 'max-w-container-max mx-auto px-margin-mobile sm:px-margin-tablet md:px-margin-desktop'

  return (
    <>
      {/* Hero */}
      <header
        id="solutions-hero"
        className="relative w-full overflow-hidden min-h-[750px] md:min-h-[800px] flex items-center"
      >
        <StarCanvas id="solutions-star-bg" className="absolute inset-0 z-0 pointer-events-none opacity-60 accelerated-layer" />
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-primary-container/10 rounded-full blur-[100px] pointer-events-none z-[1]" />
        <div className={`relative z-10 py-16 md:py-section-gap ${container}`}>
          <div className="max-w-4xl text-center">
            <Badge variant="outline" pulse className="mb-8">
              {heroBadge}
            </Badge>
            <h1 className="font-display-lg text-[28px] sm:text-display-lg-mobile md:text-display-lg font-bold text-on-surface mb-8 leading-[1.1]">
              {heroTitle}
            </h1>
            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mb-12">
              {heroDescription}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto sm:max-w-none">
              <Button className="sm:flex-1">Explore Our Pillars</Button>
              <Button variant="outline" className="sm:flex-1 border-outline-variant">Technical Documentation</Button>
            </div>
          </div>
        </div>
      </header>

      {/* Tech Stack */}
      <section className="relative w-full overflow-hidden bg-black">
        <StarCanvas id="solutions-precision-canvas" />
        <div className={`relative z-10 py-16 md:py-section-gap ${container}`}>
          <div className="text-center mb-16">
            <h2 className="font-headline-xl text-headline-xl mb-4 text-white">
              Engineered with <span className="text-primary-fixed-dim">Precision</span>
            </h2>
            <p className="text-white/50 max-w-2xl mx-auto">
              Our core technology stack is selected for performance, safety, and global scalability.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-5">
            {techStack.map((tech, i) => (
              <div
                key={tech.label}
                className="glass-card-v2 rounded-xl p-6 flex flex-col items-center text-center"
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <span className="material-symbols-outlined icon text-primary-fixed-dim mb-4 text-3xl">
                  {tech.icon}
                </span>
                <span className="font-label-md text-white/70">{tech.label}</span>
              </div>
            ))}
          </div>
          <div className="text-center mt-16">
            <Button>View Full Stack</Button>
          </div>
        </div>
      </section>

      {/* Pillars */}
      <section className="px-margin-mobile sm:px-margin-tablet md:px-margin-desktop py-16 md:py-section-gap bg-surface-container-low">
        <div className="max-w-container-max mx-auto">
          <div className="text-center mb-12 md:mb-24">
            <h2 className="font-headline-xl text-headline-xl mb-4">Strategic Engineering Pillars</h2>
            <p className="text-on-surface-variant max-w-2xl mx-auto">
              Purpose-built frameworks that consolidate specialized expertise into outcome-driven solutions.
            </p>
          </div>

          {pillars.map((pillar) => (
            <div
              key={pillar.number}
              className="grid md:grid-cols-2 gap-10 md:gap-20 items-center mb-16 md:mb-section-gap last:mb-0"
            >
              <div className={pillar.imageFirst ? '' : 'md:order-2'}>
                <img
                  alt={pillar.imageAlt}
                  src={pillar.imageUrl}
                  className="rounded-2xl shadow-2xl w-full object-cover aspect-video"
                />
              </div>
              <div className={pillar.imageFirst ? '' : 'md:order-1'}>
                <div className="text-primary font-label-md uppercase tracking-widest mb-4">
                  {pillar.number}
                </div>
                <h3 className="font-headline-xl text-headline-xl mb-6">{pillar.title}</h3>
                <p className="text-on-surface-variant text-body-lg mb-8 leading-relaxed">
                  {pillar.description}
                </p>
                <ul className="space-y-4 mb-10">
                  {pillar.features.map((f) => (
                    <FeatureListItem key={f.icon} icon={f.icon}>
                      {f.text}
                    </FeatureListItem>
                  ))}
                </ul>
                <ProgressBar value={pillar.stat.value} label={pillar.stat.label} />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Domain Specialization */}
      <section className="px-margin-mobile sm:px-margin-tablet md:px-margin-desktop py-16 md:py-section-gap max-w-container-max mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-xl">
            <h2 className="font-headline-xl text-headline-xl mb-4">Domain Specialization</h2>
            <p className="text-on-surface-variant">
              Our engineering protocols are adapted for the unique regulatory and technical constraints of critical industries.
            </p>
          </div>
          <Button variant="ghost" href="#" className="shrink-0">
            Industry Reports
            <span className="material-symbols-outlined">arrow_forward</span>
          </Button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
          {domains.map((domain) => (
            <div key={domain.title} className="glass-card p-6 md:p-8 rounded-2xl pillar-card">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-6 text-primary">
                <span className="material-symbols-outlined">{domain.icon}</span>
              </div>
              <h4 className="font-headline-lg text-[22px] mb-3">{domain.title}</h4>
              <p className="text-on-surface-variant text-body-md">{domain.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Engineering Protocol */}
      <section className="relative w-full bg-inverse-surface overflow-hidden bg-black">
        <StarCanvas id="protocol-precision-canvas" />
        <div className={`relative z-10 py-16 md:py-section-gap ${container}`}>
          <div className="grid md:grid-cols-2 gap-10 md:gap-20 items-center">
            <div>
              <h2 className="font-headline-xl text-[24px] sm:text-[28px] md:text-headline-xl text-white mb-8">
                Our Engineering Protocol
              </h2>
              <div className="space-y-8 md:space-y-12">
                {protocolSteps.map((step, i) => (
                  <div key={step.number} className="flex gap-6 relative">
                    {i < protocolSteps.length - 1 && (
                      <div className="absolute left-5 top-10 bottom-[-40px] w-px bg-primary/30" />
                    )}
                    <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white font-bold shrink-0 z-10">
                      {step.number}
                    </div>
                    <div>
                      <h4 className="text-white font-bold text-[16px] sm:text-xl mb-2">{step.title}</h4>
                      <p className="text-surface-variant/70 text-body-md">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative flex justify-center">
              <div className="w-[250px] h-[250px] md:w-[400px] md:h-[400px] border-2 border-primary/20 rounded-full flex items-center justify-center animate-spin-slow">
                <div className="w-[180px] h-[180px] md:w-[300px] md:h-[300px] border-2 border-primary/40 border-dashed rounded-full flex items-center justify-center animate-spin-reverse">
                  <div className="w-16 h-16 md:w-24 md:h-24 bg-primary rounded-2xl flex items-center justify-center shadow-[0_0_50px_rgba(99,14,212,0.5)]">
                    <span className="material-symbols-outlined text-white text-[32px] md:text-[48px]">
                      terminal
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-margin-mobile sm:px-margin-tablet md:px-margin-desktop py-16 md:py-section-gap max-w-container-max mx-auto text-center">
        <div className="bg-primary rounded-[2rem] p-8 md:p-16 relative overflow-hidden shadow-2xl">
          <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,white_0%,transparent_70%)]" />
          <h2 className="font-display-lg text-headline-xl md:text-display-lg text-on-primary mb-6 relative z-10">
            {ctaTitle}
          </h2>
          <p className="text-on-primary/80 font-body-lg max-w-2xl mx-auto mb-6 md:mb-10 relative z-10">
            {ctaDescription}
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center items-stretch md:items-center relative z-10">
            <Button variant="white" href="/contact" size="lg" className="w-full md:w-auto !whitespace-normal">
              {ctaPrimaryText}
            </Button>
            <Button
              variant="outline"
              href="/case-studies"
              size="lg"
              className="w-full md:w-auto !border-white !text-white hover:!bg-white/10 !whitespace-normal"
            >
              {ctaSecondaryText}
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}
