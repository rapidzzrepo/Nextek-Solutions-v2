export interface StatItem {
  target: number
  suffix: string
  label: string
}

export interface Leader {
  name: string
  role: string
  imageUrl: string
  imageAlt: string
  imagePosition?: string
  imageScale?: number
  github?: string
  linkedin?: string
}

export interface SecurityItem {
  icon: string
  label: string
}

export interface CertItem {
  title: string
  subtitle: string
}

export const heroBadge = 'Who We Are'

export const heroTitle = 'Built on Technical Authority.'

export const heroDescription =
  "We don't just build software; we engineer infrastructure for the future. Nextek Sol combines high-precision development with sovereign cloud security to empower the world's most ambitious enterprises."

export const stats: StatItem[] = [
  { target: 10, suffix: '+', label: 'Years in Market' },
  { target: 250, suffix: '+', label: 'Expert Engineers' },
  { target: 500, suffix: '+', label: 'Projects Delivered' },
  { target: 99, suffix: '%', label: 'Satisfied Clients' },
]

export const leaders: Leader[] = [
  {
    name: 'Jawad Khan',
    role: 'Chief Architect',
    imageUrl: '/Admin/Jawad.png',
    imageAlt: 'Portrait of Jawad Khan, Chief Architect.',
    imageScale: 1.2,
  },
  {
    name: 'Amjad Islam Khan',
    role: 'CTO',
    imageUrl: '/Admin/Amjad.png',
    imageAlt: 'Portrait of Amjad Islam Khan, Chief Technology Officer.',
  },
  {
    name: 'Uzair Rahim',
    role: 'Head of Cloud',
    imageUrl: '/Admin/Uzair-2.png',
    imageAlt: 'Portrait of Uzair Rahim, Head of Cloud.',
  },
  {
    name: 'Talha Rafi',
    role: 'Head of Sales',
    imageUrl: '/Admin/Talha-Rafi.png',
    imageAlt: 'Talha Rafi',
  },
]

export const securityItems: SecurityItem[] = [
  { icon: 'verified_user', label: 'ISO 27001 Certified' },
  { icon: 'security', label: 'SOC2 Type II' },
  { icon: 'health_and_safety', label: 'HIPAA Compliant' },
  { icon: 'policy', label: 'NIST Framework' },
]

export const certGrid: CertItem[] = [
  { title: 'ISO', subtitle: '27001' },
  { title: 'SOC2', subtitle: 'COMPLIANT' },
  { title: 'HIPAA', subtitle: 'READY' },
  { title: 'NIST', subtitle: 'ALIGNMENT' },
]

export const ctaTitle = 'Ready to engineer your edge?'

export const ctaDescription =
  'Join the fleet of technical leaders who trust Nextek Sol for their most critical infrastructure projects.'
