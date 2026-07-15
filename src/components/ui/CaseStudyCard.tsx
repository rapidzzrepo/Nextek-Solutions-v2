import type { CaseStudy } from '../../data/CaseStudies'

interface CaseStudyCardProps {
  study: CaseStudy
  featured?: boolean
  onClick?: () => void
}

export default function CaseStudyCard({ study, featured = false, onClick }: CaseStudyCardProps) {
  if (featured) {
    return (
      <div className="flex flex-col gap-8">
        <div className="w-full aspect-video rounded-2xl overflow-hidden">
          <img
            src={study.img}
            alt={study.title}
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
            loading="lazy"
          />
        </div>
        <div className="flex flex-col justify-between">
          <div>
            <span className="text-primary font-label-md mb-2 block uppercase">{study.category}</span>
            <h3 className="font-headline-lg text-2xl mb-4">{study.title}</h3>
            <p className="font-body-md text-on-surface-variant mb-6">{study.description}</p>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-surface-container flex items-center justify-center">
              <span className="font-label-md text-on-surface-variant">{study.author.split(' ').map(n => n[0]).join('')}</span>
            </div>
            <div>
              <p className="font-label-md text-on-surface text-sm">{study.author}</p>
              <p className="font-label-sm text-on-surface-variant text-xs">{study.time}</p>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div
      className="min-w-[80vw] md:min-w-[400px] bg-surface-container rounded-2xl overflow-hidden cursor-pointer hover:translate-y-[-4px] transition-all duration-300 group"
      onClick={onClick}
      data-study={study.key}
    >
      <div className="aspect-video overflow-hidden">
        <img
          src={study.img}
          alt={study.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
      </div>
      <div className="p-6">
        <span className="text-primary font-label-md text-xs uppercase mb-2 block">{study.category}</span>
        <h4 className="font-headline-lg text-lg mb-2 group-hover:text-primary transition-colors">{study.title}</h4>
        <p className="font-body-md text-on-surface-variant text-sm line-clamp-2 mb-4">{study.description}</p>
        <div className="flex items-center gap-2">
          <span className="font-label-sm text-on-surface-variant">{study.author}</span>
          <span className="text-on-surface-variant">·</span>
          <span className="font-label-sm text-on-surface-variant">{study.time}</span>
        </div>
      </div>
    </div>
  )
}
