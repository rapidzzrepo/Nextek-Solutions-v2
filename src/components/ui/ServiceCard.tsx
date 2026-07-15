import type { Service } from '../../data/services'

export default function ServiceCard({ service }: { service: Service }) {
  return (
    <div className="bento-item p-6 md:p-8 border border-outline-variant/50 rounded-xl bg-surface group">
      <div className="w-12 h-12 rounded-lg bg-primary-fixed flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-on-primary transition-all">
        <span className="material-symbols-outlined">{service.icon}</span>
      </div>
      <h3 className="font-headline-lg mb-3">{service.title}</h3>
      <p className="font-body-md text-on-surface-variant mb-8 line-clamp-3">{service.description}</p>
      <a className="text-primary font-label-md flex items-center gap-2 hover:translate-x-1 transition-transform" href="#">
        View Details <span className="material-symbols-outlined text-[18px]">arrow_right_alt</span>
      </a>
    </div>
  )
}
