import type { Testimonial } from '../../data/testimonials'

export default function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <div className="glass-card p-6 md:p-10 rounded-3xl relative accelerated-layer">
      <span className="material-symbols-outlined text-primary/20 text-6xl absolute top-6 right-8">format_quote</span>
      <div className="flex gap-1 mb-6 text-primary">
        {[...Array(5)].map((_, i) => (
          <span key={i} className="material-symbols-outlined" style={{ fontVariationSettings: '"FILL" 1' }}>star</span>
        ))}
      </div>
      <p className="font-body-lg mb-8 italic text-on-surface">"{testimonial.quote}"</p>
      <div>
        <p className="font-headline-lg text-body-lg">{testimonial.author}</p>
        <p className="font-label-md text-on-surface-variant">{testimonial.role}</p>
      </div>
    </div>
  )
}
