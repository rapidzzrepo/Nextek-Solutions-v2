import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useStarSystem } from '../hooks/useStarSystem'
import { useMouseGlow } from '../hooks/useMouseGlow'
import { useWebGLStars } from '../hooks/useWebGLStars'
import { Badge, StarCanvas, CountUpStat, Icon } from '../components/ui'
import {
  heroBadge,
  heroTitle,
  heroDescription,
  stats,
  leaders,
  securityItems,
  certGrid,
  ctaTitle,
  ctaDescription,
} from '../data/Company'

const GitHubIcon = () => (
  <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.042-1.416-4.042-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
  </svg>
)

const LinkedInIcon = () => (
  <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
  </svg>
)

export default function Company() {
  useStarSystem('company-star-bg', 'company-hero')
  useMouseGlow('company-hero', 'company-hero-glow')
  useWebGLStars('elite-precision-canvas')

  useEffect(() => {
    const header = document.querySelector('header')
    const onScroll = () => {
      if (!header) return
      if (window.scrollY > 50) {
        header.classList.add('py-2', 'shadow-sm')
        header.classList.remove('py-4')
      } else {
        header.classList.remove('py-2', 'shadow-sm')
        header.classList.add('py-4')
      }
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      {/* Hero Section */}
      <section
        className="relative w-full overflow-hidden min-h-[750px] md:min-h-[600px] py-16 md:py-section-gap flex items-center"
        id="company-hero"
      >
        <canvas
          id="company-star-bg"
          className="absolute inset-0 z-0 pointer-events-none opacity-60 accelerated-layer"
        />
        <div className="relative z-10 px-margin-mobile sm:px-margin-tablet md:px-margin-desktop max-w-container-max mx-auto text-center">
          <Badge pulse className="mb-8">
            {heroBadge}
          </Badge>
          <h1 className="font-display-lg text-[28px] sm:text-display-lg-mobile md:text-display-lg font-bold mb-6 leading-tight text-on-surface">
            {heroTitle}
          </h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto">
            {heroDescription}
          </p>
        </div>
      </section>

      {/* Core Values: Bento Grid */}
      <section className="bg-surface-container-low py-16 md:py-section-gap px-margin-mobile sm:px-margin-tablet md:px-margin-desktop">
        <div className="max-w-container-max mx-auto">
          <div className="text-center mb-16">
            <span className="text-primary font-label-md text-label-md mb-4 block uppercase tracking-widest">
              Performance Metrics &amp; Scale
            </span>
            <h2 className="font-headline-xl text-[22px] sm:text-headline-xl">
              Our Global Impact
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <CountUpStat
                key={stat.label}
                target={stat.target}
                suffix={stat.suffix}
                label={stat.label}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <section
        className="bg-inverse-surface text-inverse-on-surface py-16 md:py-section-gap px-margin-mobile sm:px-margin-tablet md:px-margin-desktop relative overflow-hidden"
        id="elite-section"
      >
        <StarCanvas id="elite-precision-canvas" />
        <div className="max-w-container-max mx-auto relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <div className="max-w-xl">
              <h2 className="font-display-lg text-[28px] sm:text-display-lg-mobile md:text-headline-xl mb-6">
                Led by Elite Engineers
              </h2>
              <p className="text-surface-variant font-body-lg text-body-lg">
                Our leadership team is composed of technologists who have built foundational
                protocols and scaled unicorn infrastructure from the ground up.
              </p>
            </div>
            <a
              className="text-primary-fixed-dim hover:text-on-primary-container transition-colors flex items-center gap-2 font-label-md"
              href="#"
            >
              View All Contributors{' '}
              <span className="material-symbols-outlined">arrow_forward</span>
            </a>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-gutter">
            {leaders.map((leader) => (
              <div key={leader.name} className="group">
                <div className="aspect-[3/4] relative rounded-xl overflow-hidden mb-6 border border-outline/20">
                  <img
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    alt={leader.imageAlt}
                    src={leader.imageUrl}
                  />
                </div>
                <h4 className="font-headline-lg text-[20px] sm:text-headline-lg mb-1">
                  {leader.name}
                </h4>
                <p className="text-primary-fixed-dim font-label-md mb-4 uppercase tracking-widest">
                  {leader.role}
                </p>
                <div className="flex gap-4">
                  {leader.github && (
                    <a
                      className="text-surface-variant hover:text-white transition-colors"
                      href={leader.github}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <GitHubIcon />
                    </a>
                  )}
                  {leader.linkedin && (
                    <a
                      className="text-surface-variant hover:text-white transition-colors"
                      href={leader.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <LinkedInIcon />
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Security & Compliance Section */}
      <section className="px-margin-mobile sm:px-margin-tablet md:px-margin-desktop py-16 md:py-section-gap max-w-container-max mx-auto">
        <div className="flex flex-col md:flex-row gap-gutter items-center">
          <div className="md:w-1/2">
            <span className="text-primary font-label-md text-label-md mb-4 block">
              SECURITY FIRST
            </span>
            <h2 className="font-display-lg text-[28px] sm:text-display-lg-mobile md:text-headline-xl mb-8">
              Uncompromising Compliance Architecture.
            </h2>
            <p className="font-body-lg text-body-lg text-on-surface-variant mb-12">
              We don't treat security as a checkbox. Our internal frameworks are built to exceed
              the most stringent global standards, providing a bulletproof foundation for your
              enterprise data.
            </p>
            <div className="grid grid-cols-2 gap-6">
              {securityItems.map((item) => (
                <div key={item.label} className="flex items-center gap-3">
                  <Icon name={item.icon} className="text-primary" filled />
                  <span className="font-label-md">{item.label}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="md:w-1/2 grid grid-cols-2 gap-4 p-6 md:p-8 bg-surface-container rounded-3xl">
            {certGrid.map((cert) => (
              <div
                key={cert.title}
                className="bg-surface-container-lowest p-6 rounded-2xl flex flex-col items-center justify-center border border-outline-variant/30 text-center"
              >
                <div className="font-headline-lg font-bold text-primary mb-2">{cert.title}</div>
                <div className="font-label-md opacity-70">{cert.subtitle}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Authority Callout */}
      <section className="mb-12 md:mb-section-gap px-margin-mobile sm:px-margin-tablet md:px-margin-desktop max-w-container-max mx-auto">
        <div className="bg-primary-container text-on-primary-container p-8 md:p-12 lg:p-24 rounded-3xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-1/2 h-full opacity-20 pointer-events-none" />
          <div className="relative z-10 max-w-2xl">
            <h2 className="font-display-lg text-[28px] sm:text-display-lg-mobile md:text-display-lg mb-8">
              {ctaTitle}
            </h2>
            <p className="font-body-lg text-body-lg mb-12 opacity-90">{ctaDescription}</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Link
                to="/contact"
                className="bg-on-primary-container text-primary-container px-8 py-3 md:py-4 rounded-xl font-headline-lg flex items-center justify-center hover:opacity-90 transition-all"
              >
                Start Scoping
              </Link>
              <Link
                to="/case-studies"
                className="border border-on-primary-container/30 text-on-primary-container px-8 py-3 md:py-4 rounded-xl font-headline-lg flex items-center justify-center hover:bg-on-primary-container/10 transition-all"
              >
                Download Thesis
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
