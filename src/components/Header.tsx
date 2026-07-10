import { Link, useLocation } from 'react-router-dom'

const navLinks = [
  { label: 'Home', path: '/' },
  { label: 'Solutions', path: '/solutions' },
  { label: 'Intelligence', path: '/intelligence' },
  { label: 'Case Studies', path: '/case-studies' },
  { label: 'Company', path: '/company' },
]

export default function Header() {
  const location = useLocation()

  return (
    <nav className="fixed top-0 left-0 w-full z-50 flex justify-between items-center px-6 md:px-[48px] py-4 bg-surface/80 glass-nav border-b border-outline-variant/30">
      <Link to="/" className="h-10">
        <img
          alt="Nextek Sol Logo"
          className="h-full w-auto object-contain"
          src="/Nextek%20Sol%20Logos/Group%201261160238.png"
        />
      </Link>
      <div className="hidden md:flex items-center gap-8">
        {navLinks.map((link) => {
          const isActive = location.pathname === link.path
          return (
            <Link
              key={link.path}
              to={link.path}
              className={`font-label-md text-label-md transition-colors ${
                isActive
                  ? 'text-primary font-bold border-b-2 border-primary pb-1'
                  : 'text-on-surface-variant hover:text-primary'
              }`}
            >
              {link.label}
            </Link>
          )
        })}
      </div>
      <Link
        to="/contact"
        className="bg-primary text-on-primary px-6 py-2.5 rounded-lg font-label-md text-label-md hover:opacity-90 active:scale-95 transition-all"
      >
        Contact Us
      </Link>
    </nav>
  )
}
