import { trustFeatures } from '../../../data/HomeV3'
import StarfieldBackground from '../../ui/StarfieldBackground'
import SectionDivider from '../../ui/SectionDivider'

export default function WhyTrustUs() {
  return (
    <section className="py-20 md:py-[120px] bg-[#0a0a0a] relative overflow-hidden" id="trust">
      <StarfieldBackground />
      <div className="absolute inset-x-0 top-0 pointer-events-none">
        <SectionDivider flip className="text-surface" />
      </div>
      <div className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full bg-secondary/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] rounded-full bg-primary/5 blur-[100px] pointer-events-none" />
      <div className="max-w-container-max mx-auto px-margin-mobile sm:px-margin-tablet md:px-margin-desktop relative z-10">
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-1.5 rounded-full bg-secondary/10 text-secondary font-label-md text-[11px] tracking-widest uppercase mb-4">Why Trust Us</span>
          <h2 className="font-display-lg text-[28px] sm:text-[36px] md:text-headline-xl text-white mb-4">Built on Trust, Driven by Results</h2>
          <p className="font-body-lg text-white/60 max-w-xl mx-auto">We don't just promise results — we deliver them with complete transparency.</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {trustFeatures.map((feature, i) => (
            <div key={i} className="p-6 rounded-2xl bg-white/[0.04] backdrop-blur-sm hover:bg-white/[0.08] hover:shadow-2xl hover:shadow-secondary/10 transition-all text-center group">
              <div className="w-14 h-14 rounded-full bg-secondary/10 flex items-center justify-center mx-auto mb-5 group-hover:bg-secondary/20 transition-colors shadow-lg shadow-secondary/5">
                <span className="material-symbols-outlined text-secondary text-2xl">{feature.icon}</span>
              </div>
              <h3 className="font-headline-lg text-white text-lg mb-2">{feature.title}</h3>
              <p className="text-white/50 text-[14px] leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
