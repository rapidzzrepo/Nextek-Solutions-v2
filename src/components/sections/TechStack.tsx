import { techStack } from '../../data/Home'

export default function TechStack() {
  return (
    <section className="py-16 md:py-section-gap max-w-container-max mx-auto px-margin-mobile sm:px-margin-tablet md:px-margin-desktop">
      <h2 className="font-display-lg text-display-lg-mobile md:text-headline-xl mb-8 md:mb-16 text-center">Engineered with Precision</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
        {techStack.map((tech, i) => (
          <div key={i} className="flex flex-col items-center p-6 border border-outline-variant/30 rounded-xl hover:border-primary/40 transition-all accelerated-layer">
            <span className="material-symbols-outlined text-4xl mb-3 text-on-surface-variant">{tech.icon}</span>
            <span className="font-label-md">{tech.label}</span>
          </div>
        ))}
      </div>
      <div className="mt-12 flex justify-center">
        <button className="border border-primary text-primary px-8 py-3 rounded-lg font-label-md hover:bg-primary-fixed transition-all">
          View More
        </button>
      </div>
    </section>
  )
}
