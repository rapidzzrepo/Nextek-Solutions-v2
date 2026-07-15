import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { initPrecisionStars } from '../utils/webglStars'

export default function Footer() {
  useEffect(() => {
    const cleanup = initPrecisionStars('footer-precision-canvas')
    return () => cleanup()
  }, [])

  return (
    <footer className="bg-[#0a0a0a] w-full py-16 md:py-section-gap border-t border-white/10 relative overflow-hidden accelerated-layer" id="footer-section">
      <div className="absolute inset-0 w-full h-full pointer-events-none z-0">
        <canvas id="footer-precision-canvas" className="w-full h-full block"></canvas>
      </div>
      <div className="max-w-container-max mx-auto px-margin-mobile sm:px-margin-tablet md:px-margin-desktop grid grid-cols-1 md:grid-cols-4 gap-gutter relative z-10 text-center md:text-left">
        <div className="col-span-1 md:col-span-1 flex flex-col items-center md:items-start">
          <div className="h-12 mb-6">
            <Link to="/" className="flex items-start h-full">
              <img alt="Nextek Sol (Inc)" className="h-full w-auto object-contain brightness-0 invert" decoding="async" loading="lazy" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDKTPm9zjG_Yba6IctY1vF6s0oZLeEGAC2Rz5nETny42BG_qne-LuTZLAgOgHegJ4XNe4NHVFcslz3QBt78H4VEZoTYwIXOXxa0Tra1Cp5BkMOsuCJrNN88tTAu8yxoqe4JTlv0imFSVx2_J9NHl2KTSd5RASFiusnFownhRyrPlleXWHbNhWjLTizc7lB8RASto4U4eanrdRExz3Nq_wEx1tx3RPp38ZEuQiwpf771JjvwZT7fJWmDILnibFKCoMJwbrceAkNCYKgV" />
            </Link>
          </div>
          <p className="text-surface-variant/80 font-body-md mb-8">Architecting high-performance digital foundations for the world's most ambitious enterprises.</p>
          <div className="flex gap-4">
            <a className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-primary transition-all" href="https://www.linkedin.com/company/nexteksolution/" target="_blank" rel="noopener noreferrer"><img alt="LinkedIn" className="w-8 h-8 object-contain" src="/Footer-Logos/linkedIn-Logo.png" /></a>
            <a className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-primary transition-all" href="https://www.facebook.com/nexteksolution/" target="_blank" rel="noopener noreferrer"><img alt="Facebook" className="w-5 h-5 object-contain" src="/Footer-Logos/Facebook-Logo.png" /></a>
            <a className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-primary transition-all" href="#"><img alt="GitHub" className="w-5 h-5 object-contain" src="/Footer-Logos/github-white-icon.png" /></a>
          </div>
        </div>
        <div>
          <h5 className="text-white font-headline-lg text-body-lg mb-6">Company</h5>
          <ul className="space-y-4">
            <li><Link className="text-surface-variant/80 hover:text-white hover:underline transition-colors decoration-primary" to="/company">Engineering Culture</Link></li>
            <li><Link className="text-surface-variant/80 hover:text-white hover:underline transition-colors decoration-primary" to="/company">Security Compliance</Link></li>
            <li><Link className="text-surface-variant/80 hover:text-white hover:underline transition-colors decoration-primary" to="/company">Career Openings</Link></li>
          </ul>
        </div>
        <div>
          <h5 className="text-white font-headline-lg text-body-lg mb-6">Services</h5>
          <ul className="space-y-4">
            <li><Link className="text-surface-variant/80 hover:text-white hover:underline transition-colors decoration-primary" to="/solutions">AI Solutions</Link></li>
            <li><Link className="text-surface-variant/80 hover:text-white hover:underline transition-colors decoration-primary" to="/solutions">Cloud Infrastructure</Link></li>
            <li><Link className="text-surface-variant/80 hover:text-white hover:underline transition-colors decoration-primary" to="/solutions">Product Design</Link></li>
          </ul>
        </div>
        <div>
          <h5 className="text-white font-headline-lg text-body-lg mb-6">Support</h5>
          <ul className="space-y-4">
            <li><Link className="text-surface-variant/80 hover:text-white hover:underline transition-colors decoration-primary" to="/contact">Contact Support</Link></li>
            <li><Link className="text-surface-variant/80 hover:text-white hover:underline transition-colors decoration-primary" to="/">Privacy Policy</Link></li>
            <li><Link className="text-surface-variant/80 hover:text-white hover:underline transition-colors decoration-primary" to="/">Status Page</Link></li>
          </ul>
        </div>
      </div>
      <div className="max-w-container-max mx-auto px-margin-mobile sm:px-margin-tablet md:px-margin-desktop mt-12 md:mt-20 pt-8 border-t border-white/5 relative z-10">
        <p className="text-surface-variant/60 font-label-md text-center md:text-left">© 2012 Nextek Sol (Inc). All rights reserved.</p>
      </div>
    </footer>
  )
}
