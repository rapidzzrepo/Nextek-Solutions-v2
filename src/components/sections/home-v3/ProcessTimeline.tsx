import { processSteps } from '../../../data/HomeData'

export default function ProcessTimeline() {
  return (
    <section className="py-20 md:py-[120px] bg-surface relative overflow-hidden" id="process">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] rounded-full bg-primary/3 blur-[120px] pointer-events-none" />
      <div className="max-w-container-max mx-auto px-margin-mobile sm:px-margin-tablet md:px-margin-desktop">
        <div className="mb-16 max-w-lg">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary font-label-md text-[11px] tracking-widest uppercase mb-4">How It Works</span>
          <h2 className="font-display-lg text-[28px] sm:text-[36px] md:text-headline-xl text-on-surface mb-4">3 Simple Steps to Growth</h2>
          <p className="font-body-lg text-on-surface-variant">No complexity. Just a clear path from where you are to where you want to be.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 relative">
          <div className="hidden md:block absolute top-[48px] left-[20%] right-[20%] h-[2px] bg-gradient-to-r from-primary/20 via-primary/40 to-primary/20" />
          
          {processSteps.map((step, i) => (
            <div key={i} className="flex flex-col items-center text-center relative">
              <div className="w-[96px] h-[96px] rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center mb-6 relative z-10 shadow-lg shadow-primary/20">
                <span className="font-display-lg text-white text-3xl font-bold">{step.number}</span>
              </div>
              <h3 className="font-headline-lg text-on-surface text-xl mb-3">{step.title}</h3>
              <p className="text-on-surface-variant text-[14px] leading-relaxed max-w-[280px]">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
