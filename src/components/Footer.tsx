import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { initPrecisionStars } from '../utils/webglStars'
import { footerSections } from '../data/navigation'

const socialLinks = [
  { label: 'LinkedIn', href: 'https://www.linkedin.com/company/nexteksolution/', img: '/Footer-Logos/linkedIn-Logo.png' },
  { label: 'Facebook', href: 'https://www.facebook.com/nexteksolution/', img: '/Footer-Logos/Facebook-Logo.png' },
  { label: 'GitHub', href: '#', img: '/Footer-Logos/github-white-icon.png' },
]

export default function Footer() {
  useEffect(() => {
    const cleanup = initPrecisionStars('footer-precision-canvas')
    return () => cleanup()
  }, [])

  return (
    <footer className="bg-[#0a0a0a] w-full py-16 md:py-section-gap border-t border-white/10 relative overflow-hidden accelerated-layer" id="footer-section">
      <div className="absolute inset-0 w-full h-full pointer-events-none z-0">
        <canvas id="footer-precision-canvas" className="w-full h-full block" />
      </div>
      <div className="max-w-container-max mx-auto px-margin-mobile sm:px-margin-tablet md:px-margin-desktop grid grid-cols-1 md:grid-cols-4 gap-gutter relative z-10">
        <div className="col-span-1 md:col-span-1">
          <div className="h-12 mb-6">
            <Link to="/" className="flex items-start h-full">
              <img
                alt="Nextek Sol (Inc)"
                className="h-full w-auto object-contain brightness-0 invert"
                decoding="async"
                loading="lazy"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDKTPm9zjG_Yba6IctY1vF6s0oZLeEGAC2Rz5nETny42BG_qne-LuTZLAgOgHegJ4XNe4NHVFcslz3QBt78H4VEZoTYwIXOXxa0Tra1Cp5BkMOsuCJrNN88tTAu8yxoqe4JTlv0imFSVx2_J9NHl2KTSd5RASFiusnFownhRyrPlleXWHbNhWjLTizc7lB8RASto4U4eanrdRExz3Nq_wEx1tx3RPp38ZEuQiwpf771JjvwZT7fJWmDILnibFKCoMJwbrceAkNCYKgV"
              />
            </Link>
          </div>
          <p className="text-surface-variant/80 font-body-md mb-8">
            Architecting high-performance digital foundations for the world's most ambitious enterprises.
          </p>
          <div className="flex gap-4">
            {socialLinks.map(link => (
              <a
                key={link.label}
                className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-primary transition-all"
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img alt={link.label} className="w-8 h-8 object-contain" src={link.img} />
              </a>
            ))}
          </div>
        </div>

        {footerSections.map(section => (
          <div key={section.title}>
            <h5 className="text-white font-headline-lg text-body-lg mb-6">{section.title}</h5>
            <ul className="space-y-4">
              {section.links.map(link => (
                <li key={link.label}>
                  <Link
                    className="text-surface-variant/80 hover:text-white hover:underline transition-colors decoration-primary"
                    to={link.path}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="max-w-container-max mx-auto px-margin-mobile sm:px-margin-tablet md:px-margin-desktop mt-12 md:mt-20 pt-8 border-t border-white/5 relative z-10">
        <p className="text-surface-variant/60 font-label-md">© 2012 Nextek Sol (Inc). All rights reserved.</p>
      </div>
    </footer>
  )
}
