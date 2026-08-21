import { resilienceFeatures } from '../../data/Home'

export default function ResilienceSection() {
  return (
    <section className="py-16 md:py-section-gap relative overflow-hidden bg-black" id="resilient-infrastructure-section">
      <div className="absolute inset-0 w-full h-full pointer-events-none z-0">
        <canvas id="resilient-precision-canvas" className="w-full h-full block"></canvas>
      </div>
      <div className="max-w-container-max mx-auto px-margin-mobile sm:px-margin-tablet md:px-margin-desktop relative z-10">
        <div className="p-6 md:p-12 rounded-3xl border border-primary/20 bg-transparent backdrop-blur-sm accelerated-layer">
          <div className="grid lg:grid-cols-10 gap-8 md:gap-12 items-center">
            <div className="lg:col-span-6">
              <div className="max-w-3xl mb-8 md:mb-16">
                <span className="text-primary-fixed-dim font-label-md uppercase tracking-widest mb-4 block">Zero-Downtime Data Sovereignty</span>
                <h2 className="font-display-lg text-[24px] sm:text-[28px] md:text-headline-xl mb-6 text-white font-bold">Resilient Infrastructure for <span className="text-primary-fixed-dim">Absolute Availability</span></h2>
                <p className="font-body-lg text-surface-variant/80">Engineered for absolute survival. Our decentralized architecture ensures total resilience against physical infrastructure failure, regional conflict, and kinetic threats. In the event of a total localized catastrophe, your systems remain operational and transition instantly to surviving global nodes.</p>
              </div>
              <div className="grid md:grid-cols-3 gap-6">
                {resilienceFeatures.map((feature, i) => (
                  <div key={i} className="dark-glass p-6 rounded-2xl border border-primary/20 hover:border-primary/50 transition-all group accelerated-layer">
                    <div className="w-10 h-10 rounded-lg bg-primary-container flex items-center justify-center text-primary-fixed mb-4 group-hover:scale-110 transition-transform">
                      <span className="material-symbols-outlined">{feature.icon}</span>
                    </div>
                    <h4 className="font-headline-lg text-[18px] text-white mb-2">{feature.title}</h4>
                    <p className="text-[14px] text-surface-variant/70">{feature.description}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="lg:col-span-4">
              <div className="glass-card p-4 rounded-3xl shadow-xl border border-white/10 overflow-hidden group accelerated-layer">
                <div className="aspect-video rounded-2xl overflow-hidden relative">
                  <img alt="Global resilient infrastructure network visualization" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" decoding="async" loading="lazy" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDZ_tXR0cMmkW-Hgc9Hnx4_1kI045Vgfy8ARrPSCv6JkjvwsQ-WQ6R7FqdgRR-EmZ5cDP60pOGruhAvb_wwyiurXDsvp5Qo9TGGzdepPC0z1LB-Z89_EfRRKlHb1litcenCLh0PIUDO__9dN_7uXWh5HaWSqg7-6vfxkhZuaYESXMLuRBqYiaWvcwTkUNVKJSRhvhHRXPa2bvtQ8FuZj9iJove9riys9joN3U8wUqvt8ZSdMtz4JA0" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
