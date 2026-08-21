import { services } from '../../data/Home'

export default function ServicesGrid() {
  return (
    <section className="py-16 md:py-section-gap max-w-container-max mx-auto px-margin-mobile sm:px-margin-tablet md:px-margin-desktop">
      <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
        <div className="max-w-2xl">
          <h2 className="font-display-lg text-headline-xl mb-4">Engineering Excellence Across Every Domain</h2>
          <p className="font-body-lg text-on-surface-variant">We bridge the gap between complex infrastructure requirements and seamless user-facing applications.</p>
        </div>
        <button className="bg-primary text-on-primary px-8 py-3 rounded-lg font-label-md">View All Expertise</button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-gutter">
        {services.map((service, i) => (
          <div key={i} className="bento-item p-6 md:p-8 border border-outline-variant/50 rounded-xl bg-surface group">
            <div className="w-12 h-12 rounded-lg bg-primary-fixed flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-on-primary transition-all">
              <span className="material-symbols-outlined">{service.icon}</span>
            </div>
            <h3 className="font-headline-lg mb-3">{service.title}</h3>
            <p className="font-body-md text-on-surface-variant mb-8 line-clamp-3">{service.description}</p>
            <a className="text-primary font-label-md flex items-center gap-2 hover:translate-x-1 transition-transform" href={service.link}>View Details <span className="material-symbols-outlined text-[18px]">arrow_right_alt</span></a>
          </div>
        ))}
      </div>
    </section>
  )
}
