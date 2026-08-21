export default function CTASection() {
  return (
    <section className="py-20 md:py-[120px] bg-[#0a0a0a] relative overflow-hidden" id="contact">
      <div className="absolute top-[-20%] left-[-10%] w-[500px] h-[500px] rounded-full bg-primary/10 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-5%] w-[400px] h-[400px] rounded-full bg-secondary/5 blur-[100px] pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-secondary/5 pointer-events-none" />
      <div className="max-w-container-max mx-auto px-margin-mobile sm:px-margin-tablet md:px-margin-desktop relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-display-lg text-[28px] sm:text-[36px] md:text-headline-xl text-white mb-5">Ready to Accelerate Your Growth?</h2>
          <p className="font-body-lg text-white/60 mb-8">Book a free consultation and discover how we can help you achieve measurable results.</p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
            <a href="#contact" className="inline-flex items-center gap-3 px-8 py-4 rounded-2xl bg-primary text-white font-label-lg hover:bg-primary/90 transition-colors group">
              <span>Book Free Consultation</span>
              <span className="material-symbols-outlined text-xl group-hover:translate-x-1 transition-transform">arrow_forward</span>
            </a>
            <a href="tel:+1234567890" className="inline-flex items-center gap-3 px-8 py-4 rounded-2xl bg-white/[0.05] backdrop-blur-sm text-white font-label-lg hover:bg-white/[0.1] transition-colors">
              <span className="material-symbols-outlined text-xl">call</span>
              <span>+1 (234) 567-890</span>
            </a>
          </div>
          
          <p className="text-white/40 text-[13px]">No commitment required. Let's talk about your goals.</p>
        </div>
      </div>
    </section>
  )
}
