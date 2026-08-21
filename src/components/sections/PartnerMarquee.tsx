import { partnerLogos } from '../../data/Home'

export default function PartnerMarquee() {
  return (
    <section className="bg-[#0a0a0a] py-12 md:py-20 relative overflow-hidden" id="marquee-star-section">
      <div className="absolute inset-0 w-full h-full pointer-events-none z-0">
        <canvas id="industry-leaders-precision-canvas" className="w-full h-full block"></canvas>
      </div>
      <div className="max-w-container-max mx-auto px-margin-mobile sm:px-margin-tablet md:px-margin-desktop mb-12 relative z-10">
        <p className="font-label-md text-surface-variant/40 uppercase tracking-[0.2em] text-center">Engineered with Industry Leaders</p>
      </div>
      <div className="marquee relative flex overflow-hidden select-none z-10">
        <div className="marquee-content">
          {partnerLogos.map((logo, i) => (
            <img key={i} alt={logo.alt} className="h-12 w-auto object-contain hover:opacity-100 transition-opacity cursor-pointer" decoding="async" loading="lazy" src={logo.src} />
          ))}
        </div>
        <div aria-hidden="true" className="marquee-content">
          {partnerLogos.map((logo, i) => (
            <img key={i} alt={logo.alt} className="h-12 w-auto object-contain hover:opacity-100 transition-opacity cursor-pointer" decoding="async" loading="lazy" src={logo.src} />
          ))}
        </div>
      </div>
    </section>
  )
}
