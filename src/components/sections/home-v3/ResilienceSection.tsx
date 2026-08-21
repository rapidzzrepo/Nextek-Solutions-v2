import { resilienceFeatures } from '../../../data/HomeData'

export default function ResilienceSection() {
  return (
    <section className="py-16 md:py-section-gap bg-[#0a0a0a] relative overflow-hidden" id="resilience">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/5 via-transparent to-transparent pointer-events-none" />
      <div className="max-w-container-max mx-auto px-margin-mobile sm:px-margin-tablet md:px-margin-desktop relative z-10">
        <div className="p-8 md:p-12 rounded-3xl border border-primary/20 bg-white/[0.02] backdrop-blur-sm">
          <div className="grid lg:grid-cols-10 gap-8 md:gap-12 items-center">
            <div className="lg:col-span-6">
              <div className="max-w-3xl mb-8 md:mb-12">
                <span className="text-primary font-label-md text-[11px] tracking-widest uppercase mb-4 block">Zero-Downtime Data Sovereignty</span>
                <h2 className="font-display-lg text-[24px] sm:text-[28px] md:text-headline-xl mb-6 text-white font-bold">Resilient Infrastructure for <span className="text-primary">Absolute Availability</span></h2>
                <p className="font-body-lg text-white/50">Engineered for absolute survival. Our decentralized architecture ensures total resilience against physical infrastructure failure, regional conflict, and kinetic threats. In the event of a total localized catastrophe, your systems remain operational and transition instantly to surviving global nodes.</p>
              </div>
              <div className="grid md:grid-cols-3 gap-6">
                {resilienceFeatures.map((feature, i) => (
                  <div key={i} className="p-6 rounded-2xl border border-white/10 bg-white/[0.03] hover:border-primary/40 transition-all group">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                      <span className="material-symbols-outlined text-primary">{feature.icon}</span>
                    </div>
                    <h4 className="font-headline-lg text-[18px] text-white mb-2">{feature.title}</h4>
                    <p className="text-[14px] text-white/40">{feature.description}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="lg:col-span-4">
              <div className="rounded-3xl border border-white/10 overflow-hidden group">
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
