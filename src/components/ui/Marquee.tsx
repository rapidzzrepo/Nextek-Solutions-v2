import { partners } from '../../data/partners'

interface MarqueeProps {
  dark?: boolean
}

export default function Marquee({ dark = false }: MarqueeProps) {
  const logos = partners.map(p => (
    <img key={p.name} alt={`${p.name} Logo`} className="h-12 w-auto object-contain hover:opacity-100 transition-opacity cursor-pointer" decoding="async" loading="lazy" src={p.src} />
  ))

  return (
    <section className={`${dark ? 'bg-[#0a0a0a]' : 'bg-surface-container-low'} py-8 md:py-12 border-y border-outline-variant/30 overflow-hidden`}>
      <div className="max-w-container-max mx-auto px-margin-mobile sm:px-margin-tablet md:px-margin-desktop">
        <div className="text-center mb-12">
          <p className={`font-label-md ${dark ? 'text-surface-variant/40' : 'text-on-surface-variant/60'} uppercase tracking-[0.2em]`}>Engineered with Industry Leaders</p>
        </div>
      </div>
      <div className="marquee relative flex overflow-hidden select-none z-10">
        <div className="marquee-content">{logos}</div>
        <div aria-hidden="true" className="marquee-content">{logos}</div>
      </div>
    </section>
  )
}
