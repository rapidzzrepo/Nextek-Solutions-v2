import { Link } from 'react-router-dom'
import { heroBadge, heroTitle, heroDescription } from '../../data/Home'

export default function HeroSection() {
  return (
    <section className="relative min-h-[750px] md:min-h-[800px] flex items-center overflow-hidden bg-surface py-16 md:py-section-gap" id="hero-section">
      <canvas className="absolute inset-0 z-0 pointer-events-none opacity-60 accelerated-layer" id="star-background" width="2600" height="1842" style={{ width: 1300, height: 921 }} />
      <div className="max-w-container-max mx-auto px-margin-mobile sm:px-margin-tablet md:px-margin-desktop relative z-10 gap-gutter items-center flex flex-col">
        <div className="space-y-6 md:space-y-8 text-center">
          <div className="inline-flex items-center gap-2 px-3 md:px-4 py-1.5 rounded-full bg-primary-fixed text-on-primary-fixed font-label-md mx-auto">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            {heroBadge}
          </div>
          <h1 className="font-display-lg text-[28px] sm:text-display-lg-mobile md:text-display-lg font-bold leading-[1.05] tracking-tight">
            {heroTitle}
          </h1>
          <p className="font-body-lg text-on-surface-variant max-w-xl mx-auto">
            {heroDescription}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto sm:max-w-none sm:w-auto">
            <Link className="bg-primary text-on-primary px-6 md:px-8 py-3 md:py-4 rounded-lg font-headline-lg text-body-md flex items-center justify-center gap-3 hover:bg-primary-container transition-all" to="/contact">
              Start a Project
              <span className="material-symbols-outlined">arrow_forward</span>
            </Link>
            <Link className="border border-primary text-primary px-6 md:px-8 py-3 md:py-4 rounded-lg font-headline-lg text-body-md flex items-center justify-center gap-3 hover:bg-primary-fixed transition-all" to="/solutions">
              View Roadmap
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
