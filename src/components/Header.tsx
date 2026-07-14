import { useState, useEffect, useCallback } from 'react'
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
  const [menuOpen, setMenuOpen] = useState(false)

  const closeMenu = useCallback(() => setMenuOpen(false), [])

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  useEffect(() => {
    closeMenu()
  }, [location.pathname, closeMenu])

  return (
    <>
      <nav className="fixed top-0 left-0 w-full z-50 flex justify-between items-center px-4 sm:px-8 md:px-[48px] py-3 md:py-4 bg-surface/80 glass-nav border-b border-outline-variant/30">
        <Link to="/" className="h-8 md:h-10" onClick={closeMenu}>
          <img
            alt="Nextek Sol Logo"
            className="h-full w-auto object-contain"
            src="/Nextek%20Sol%20Logos/Group%201261160238.png"
          />
        </Link>
        <div className="hidden md:flex items-center gap-4 lg:gap-8">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.path
            return (
              <Link
                key={link.path}
                to={link.path}
                className={`font-label-md text-[12px] md:text-label-md transition-colors whitespace-nowrap ${
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
        <div className="flex items-center gap-2 md:gap-3">
          <Link
            to="/contact"
            className="bg-primary text-on-primary px-4 md:px-6 py-2 md:py-2.5 rounded-lg font-label-md text-[12px] md:text-label-md hover:opacity-90 active:scale-95 transition-all whitespace-nowrap"
          >
            Contact Us
          </Link>
          <button
            id="hamburger-btn"
            onClick={() => setMenuOpen(prev => !prev)}
            className="md:hidden relative w-8 h-8 flex flex-col items-center justify-center gap-[5px] bg-transparent border-none cursor-pointer z-[60]"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          >
            <span className={`block w-5 h-[2px] rounded bg-current transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-[3.5px]' : ''}`} />
            <span className={`block w-5 h-[2px] rounded bg-current transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
            <span className={`block w-5 h-[2px] rounded bg-current transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-[3.5px]' : ''}`} />
          </button>
        </div>
      </nav>
      <div
        className={`fixed inset-0 z-[60] md:hidden transition-opacity duration-300 ${
          menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div className="absolute inset-0 bg-black/40" onClick={closeMenu} />
        <div
          className={`absolute top-0 right-0 h-full w-1/2 min-w-[240px] max-w-[320px] bg-white shadow-xl transition-transform duration-300 flex flex-col ${
            menuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <button
            onClick={closeMenu}
            className="absolute top-4 left-4 w-8 h-8 flex items-center justify-center bg-transparent border-none cursor-pointer text-gray-500 hover:text-gray-800 transition-colors z-10"
            aria-label="Close menu"
          >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M15 5L5 15M5 5L15 15" stroke="currentColor" stroke-width="2" stroke-linecap="round" />
            </svg>
          </button>
          <div className="flex-1 flex flex-col px-6 pt-24 pb-4 overflow-y-auto">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={closeMenu}
                  className={`py-4 text-lg font-sora font-semibold border-b border-gray-100 transition-colors ${
                    isActive
                      ? 'text-primary'
                      : 'text-gray-800 hover:text-primary'
                  }`}
                >
                  {link.label}
                </Link>
              )
            })}
          </div>
          <div className="px-6 pb-10 pt-2">
            <Link
              to="/contact"
              onClick={closeMenu}
              className="block w-full bg-primary text-on-primary text-center py-2.5 rounded-lg font-label-md text-label-md hover:opacity-90 active:scale-95 transition-all"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}
