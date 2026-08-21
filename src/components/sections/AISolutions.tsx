import { aiSolutions, aiDescription } from '../../data/Home'

export default function AISolutions() {
  return (
    <section className="py-16 md:py-section-gap max-w-container-max mx-auto px-margin-mobile sm:px-margin-tablet md:px-margin-desktop">
      <div className="flex flex-col lg:flex-row gap-gutter h-auto lg:h-[600px]">
        <div className="lg:w-2/3 grid grid-rows-2 gap-gutter">
          <div className="grid md:grid-cols-2 gap-gutter">
            {aiSolutions.slice(0, 2).map((card, i) => (
              <div key={i} className="bento-item rounded-xl overflow-hidden relative group min-h-[200px] md:min-h-0">
                <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110" style={{ backgroundImage: `url('${card.imageUrl}')` }}></div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent p-8 flex flex-col justify-end">
                  <span className={`${card.badgeColor} text-white text-[10px] font-bold px-3 py-1 rounded-full w-fit mb-4 uppercase`}>{card.badge}</span>
                  <h4 className="font-headline-lg text-white">{card.title}</h4>
                </div>
              </div>
            ))}
          </div>
          <div className="bento-item rounded-xl overflow-hidden relative group min-h-[200px] md:min-h-0">
            <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110" style={{ backgroundImage: `url('${aiSolutions[2].imageUrl}')` }}></div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent p-8 flex flex-col justify-end">
              <span className={`${aiSolutions[2].badgeColor} text-white text-[10px] font-bold px-3 py-1 rounded-full w-fit mb-4 uppercase`}>{aiSolutions[2].badge}</span>
              <h4 className="font-headline-lg text-white">{aiSolutions[2].title}</h4>
            </div>
          </div>
        </div>
        <div className="lg:w-1/3 bg-surface-container flex flex-col justify-center p-6 md:p-12 rounded-xl accelerated-layer">
          <h3 className="font-display-lg text-headline-xl mb-6">Advanced AI/ML Solutions</h3>
          <p className="font-body-md text-on-surface-variant mb-10">{aiDescription}</p>
          <button className="w-full py-4 border border-primary text-primary font-label-md rounded-lg hover:bg-primary hover:text-on-primary transition-all flex items-center justify-center gap-2">Explore AI Capabilities <span className="material-symbols-outlined">arrow_forward</span></button>
        </div>
      </div>
    </section>
  )
}
