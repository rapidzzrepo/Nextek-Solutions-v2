import { Link } from 'react-router-dom'
import { caseStudies } from '../../data/Home'

export default function CaseStudiesCarousel() {
  return (
    <section className="py-16 md:py-section-gap overflow-hidden">
      <div className="max-w-container-max mx-auto px-margin-mobile sm:px-margin-tablet md:px-margin-desktop mb-16 flex justify-between items-end">
        <div>
          <h2 className="font-display-lg text-headline-xl">Success Stories</h2>
          <p className="font-body-lg text-on-surface-variant">Real-world impact across global markets.</p>
        </div>
        <div className="flex gap-4">
          <button className="w-12 h-12 rounded-full border border-outline-variant flex items-center justify-center hover:bg-surface-container transition-all" id="prevStudy">
            <span className="material-symbols-outlined">chevron_left</span>
          </button>
          <button className="w-12 h-12 rounded-full border border-outline-variant flex items-center justify-center hover:bg-surface-container transition-all" id="nextStudy">
            <span className="material-symbols-outlined">chevron_right</span>
          </button>
        </div>
      </div>
      <div className="flex gap-gutter px-margin-mobile sm:px-margin-tablet md:px-margin-desktop transition-transform duration-500 ease-in-out cursor-grab active:cursor-grabbing accelerated-layer" id="studyContainer">
        {caseStudies.map((study, i) => (
          <div key={i} className="min-w-[80vw] md:min-w-[600px] bg-surface-container rounded-2xl p-6 md:p-8 flex flex-col md:flex-row gap-6 md:gap-8 accelerated-layer">
            <div className="w-full md:w-1/2 aspect-video rounded-xl overflow-hidden shrink-0">
              <div className="w-full h-full bg-cover bg-center accelerated-layer" alt={study.imageAlt} style={{ backgroundImage: `url("${study.imageUrl}")` }}></div>
            </div>
            <div className="flex flex-col justify-between py-4">
              <div>
                <span className={`${study.categoryColor} font-label-md mb-2 block uppercase`}>{study.category}</span>
                <h3 className="font-headline-lg mb-4">{study.title}</h3>
                <p className="font-body-md text-on-surface-variant mb-6">{study.description}</p>
              </div>
              <button className="flex items-center gap-2 font-label-md text-primary">Read Case Study <span className="material-symbols-outlined">arrow_right_alt</span></button>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-16 text-center">
        <Link className="bg-primary text-on-primary px-10 py-4 rounded-lg font-headline-lg" to="/case-studies">View All Case Studies</Link>
      </div>
    </section>
  )
}
