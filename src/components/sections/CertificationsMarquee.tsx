import { certifications } from '../../data/Home'

export default function CertificationsMarquee() {
  return (
    <div className="bg-surface-container-low py-8 md:py-12 border-y border-outline-variant/30 overflow-hidden">
      <div className="max-w-container-max mx-auto px-margin-mobile sm:px-margin-tablet md:px-margin-desktop">
        <div className="text-center mb-12">
          <p className="font-label-md text-on-surface-variant/60 uppercase tracking-widest">Technical Certifications</p>
        </div>
        <div className="flex flex-col gap-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {certifications.slice(0, 4).map((cert, i) => (
              <div key={i} className="flex flex-col items-center p-4 rounded-xl border border-outline-variant/30 bg-surface/50">
                <img className="w-12 h-12 object-contain mb-3" src={cert.src} alt={cert.alt} />
                <span className="font-display-lg text-[14px] font-bold uppercase tracking-wider text-center">{cert.label}</span>
              </div>
            ))}
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {certifications.slice(4, 8).map((cert, i) => (
              <div key={i} className="flex flex-col items-center p-4 rounded-xl border border-outline-variant/30 bg-surface/50">
                <img className="w-12 h-12 object-contain mb-3" src={cert.src} alt={cert.alt} />
                <span className="font-display-lg text-[14px] font-bold uppercase tracking-wider text-center">{cert.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
