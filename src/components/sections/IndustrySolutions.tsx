import { useState } from 'react'
import { industryTabs } from '../../data/Home'

export default function IndustrySolutions() {
  const [activeTab, setActiveTab] = useState(0)

  return (
    <section className="py-16 md:py-section-gap relative overflow-hidden bg-[#000000]" id="industry-solutions-section">
      <div className="absolute inset-0 w-full h-full pointer-events-none z-0">
        <canvas id="industry-solutions-precision-canvas" className="w-full h-full block"></canvas>
      </div>
      <div className="max-w-container-max mx-auto px-margin-mobile sm:px-margin-tablet md:px-margin-desktop relative z-10">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-20 items-center">
          <div>
            <h2 className="font-display-lg text-headline-xl text-white mb-8">Industry Solutions</h2>
            <div className="space-y-4">
              {industryTabs.map((tab, i) => (
                <button
                  key={i}
                  className={`w-full text-left p-6 rounded-xl border border-white/10 transition-all ${activeTab === i ? 'dark-glass active-tab' : 'hover:bg-white/5'}`}
                  onClick={() => setActiveTab(i)}
                >
                  <span className="font-headline-lg text-white block">{tab.title}</span>
                  <p className="text-surface-variant/60 font-body-md mt-2">{tab.description}</p>
                </button>
              ))}
            </div>
          </div>
          <div className="p-6 md:p-12 dark-glass rounded-3xl min-h-[300px] md:min-h-[400px] flex flex-col justify-center accelerated-layer">
            {industryTabs.map((tab, i) => (
              <div key={i} className={activeTab === i ? '' : 'hidden'}>
                <h3 className={`font-display-lg text-headline-xl ${tab.titleColorClass} mb-6`}>{tab.title === 'Fintech' ? 'Fintech Resilience' : tab.title === 'Healthcare' ? 'Secure Healthcare' : 'Smart Logistics'}</h3>
                <div className="space-y-6">
                  <div>
                    <h4 className="text-white font-label-md uppercase mb-2">Problem</h4>
                    <p className="text-surface-variant">{tab.problem}</p>
                  </div>
                  <div className={`p-6 bg-white/5 rounded-xl border-l-4 ${tab.solutionBorderColor}`}>
                    <h4 className="text-white font-label-md uppercase mb-2">Our Solution</h4>
                    <p className="text-surface-variant">{tab.solution}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
