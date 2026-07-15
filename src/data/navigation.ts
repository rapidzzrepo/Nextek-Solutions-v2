export interface NavLink {
  label: string
  path: string
}

export interface FooterSection {
  title: string
  links: NavLink[]
}

export const navLinks: NavLink[] = [
  { label: 'Home', path: '/' },
  { label: 'Solutions', path: '/solutions' },
  { label: 'Intelligence', path: '/intelligence' },
  { label: 'Case Studies', path: '/case-studies' },
  { label: 'Company', path: '/company' },
]

export const footerSections: FooterSection[] = [
  {
    title: 'Company',
    links: [
      { label: 'Engineering Culture', path: '/company' },
      { label: 'Security Compliance', path: '/company' },
      { label: 'Career Openings', path: '/company' },
    ],
  },
  {
    title: 'Services',
    links: [
      { label: 'AI Solutions', path: '/solutions' },
      { label: 'Cloud Infrastructure', path: '/solutions' },
      { label: 'Product Design', path: '/solutions' },
    ],
  },
  {
    title: 'Support',
    links: [
      { label: 'Contact Support', path: '/contact' },
      { label: 'Privacy Policy', path: '/' },
      { label: 'Status Page', path: '/' },
    ],
  },
]
