import { partnerLogos } from '../../../data/HomeData'

export default function PartnerLogos() {
  return (
    <section className="bg-[#0a0a0a] py-16 md:py-20 relative overflow-hidden" id="partner-logos">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[200px] rounded-full bg-primary/5 blur-[100px] pointer-events-none" />
      <div className="max-w-container-max mx-auto px-margin-mobile sm:px-margin-tablet md:px-margin-desktop mb-10 relative z-10">
        <p className="font-label-md text-white/40 uppercase tracking-[0.2em] text-center">Engineered with Industry Leaders</p>
      </div>
      <div className="marquee relative flex overflow-hidden select-none z-10">
        <div className="marquee-content">
          {partnerLogos.map((logo, i) => (
            <img key={i} alt={logo.alt} className="h-10 md:h-12 w-auto object-contain opacity-50 hover:opacity-100 transition-opacity cursor-pointer" decoding="async" loading="lazy" src={logo.src} />
          ))}
        </div>
        <div aria-hidden="true" className="marquee-content">
          {partnerLogos.map((logo, i) => (
            <img key={i} alt={logo.alt} className="h-10 md:h-12 w-auto object-contain opacity-50 hover:opacity-100 transition-opacity cursor-pointer" decoding="async" loading="lazy" src={logo.src} />
          ))}
        </div>
      </div>
    </section>
  )
}
