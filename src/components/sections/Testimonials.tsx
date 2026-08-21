import { testimonials } from '../../data/Home'

export default function Testimonials() {
  return (
    <section className="bg-surface-container py-16 md:py-section-gap">
      <div className="max-w-container-max mx-auto px-margin-mobile sm:px-margin-tablet md:px-margin-desktop">
        <div className="text-center mb-16">
          <h2 className="font-display-lg text-headline-xl">Trusted by the Elite</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-gutter">
          {testimonials.map((t, i) => (
            <div key={i} className="glass-card p-6 md:p-10 rounded-3xl relative accelerated-layer">
              <span className="material-symbols-outlined text-primary/20 text-6xl absolute top-6 right-8">format_quote</span>
              <div className="flex gap-1 mb-6 text-primary">
                <span className="material-symbols-outlined" style={{ fontVariationSettings: '"FILL" 1' }}>star</span>
                <span className="material-symbols-outlined" style={{ fontVariationSettings: '"FILL" 1' }}>star</span>
                <span className="material-symbols-outlined" style={{ fontVariationSettings: '"FILL" 1' }}>star</span>
                <span className="material-symbols-outlined" style={{ fontVariationSettings: '"FILL" 1' }}>star</span>
                <span className="material-symbols-outlined" style={{ fontVariationSettings: '"FILL" 1' }}>star</span>
              </div>
              <p className="font-body-lg mb-8 italic text-on-surface">{t.quote}</p>
              <div>
                <p className="font-headline-lg text-body-lg">{t.name}</p>
                <p className="font-label-md text-on-surface-variant">{t.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
