import { ReactNode } from 'react'

interface HeroProps {
  pill?: string
  title: ReactNode
  subtitle?: string
  ctaPrimary?: { label: string; href: string }
  ctaSecondary?: { label: string; href: string }
  starCanvasId?: string
  dark?: boolean
  children?: ReactNode
}

export default function Hero({ pill, title, subtitle, ctaPrimary, ctaSecondary, starCanvasId, dark = false, children }: HeroProps) {
  return (
    <section className={`relative min-h-[750px] md:min-h-[800px] flex items-center overflow-hidden ${dark ? 'bg-[#0a0a0a]' : 'bg-surface'} py-16 md:py-section-gap`}>
      {starCanvasId && (
        <canvas className="absolute inset-0 z-0 pointer-events-none opacity-60 accelerated-layer" id={starCanvasId} />
      )}
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-primary-container/10 rounded-full blur-[100px] pointer-events-none z-[1]" />
      <div className="max-w-container-max mx-auto px-margin-mobile sm:px-margin-tablet md:px-margin-desktop relative z-10 gap-gutter items-center flex flex-col">
        <div className="space-y-6 md:space-y-8 text-center">
          {pill && (
            <div className={`inline-flex items-center gap-2 px-3 md:px-4 py-1.5 rounded-full ${dark ? 'bg-white/10 text-primary-fixed-dim border border-white/10' : 'bg-primary-fixed text-on-primary-fixed'} font-label-md mx-auto`}>
              {!dark && (
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
                </span>
              )}
              {pill}
            </div>
          )}
          <h1 className={`font-display-lg text-[28px] sm:text-display-lg-mobile md:text-display-lg leading-[1.05] tracking-tight ${dark ? 'text-white' : 'text-on-surface'}`}>
            {title}
          </h1>
          {subtitle && (
            <p className={`font-body-lg max-w-xl mx-auto ${dark ? 'text-white/80' : 'text-on-surface-variant'}`}>
              {subtitle}
            </p>
          )}
          {(ctaPrimary || ctaSecondary) && (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 justify-center max-w-md mx-auto sm:max-w-none sm:w-auto">
              {ctaPrimary && (
                <a className="bg-primary text-on-primary px-6 md:px-8 py-3 md:py-4 rounded-lg font-headline-lg flex items-center justify-center gap-3 hover:bg-primary-container transition-all" href={ctaPrimary.href}>
                  {ctaPrimary.label}
                  <span className="material-symbols-outlined">arrow_forward</span>
                </a>
              )}
              {ctaSecondary && (
                <a className={`border ${dark ? 'border-white/20 text-white' : 'border-primary text-primary'} px-6 md:px-8 py-3 md:py-4 rounded-lg font-headline-lg flex items-center justify-center transition-all`} href={ctaSecondary.href}>
                  {ctaSecondary.label}
                </a>
              )}
            </div>
          )}
        </div>
        {children}
      </div>
    </section>
  )
}
