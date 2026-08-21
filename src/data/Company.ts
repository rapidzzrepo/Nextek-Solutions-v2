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
    imageUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuATXELDtdZ_btTXke-_Uhk1b487vX1lrfW-4FAR-WbcOM2WIszsfZ-KNWSU4NDemXwJ4cMKI7nrg3gayMzL3oVEQzKyhK_i-UfpBpwZUguk_-6V35gH5jReZGUDZwhrKFFv1ZD2PW-Nmnelwr6AVcfy9gZi2XgPSZZ9Vm5BPbST8d7UxTolYzhbyPcsuBrdS90_euyzkP-xMXNoTfdBRwaFkgnz9KrWXtim1nFPsy5tznzBmMQCFEY',
    imageAlt:
      'A professional headshot of a senior software engineer in a high-tech studio environment with soft blue rim lighting.',
  },
  {
    name: 'Ali Hasnain',
    role: 'VP Engineering',
    imageUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAQ7FY-0GKrRR_ejWCOTBpBuDcgCQocU3DY6wB21RKU3NhY7WCv0gNtT-AQhCU0-6lg04sM7WgsrsdbiwiR6VtPTkRVz578GXPeaJK4v5jsKqV9esHFgkpFFbjyDiRgOIqjRApXYAnFYxVNsSRfAiAOeJyeuBpdXrkdUY5HMtCKhPD7wuwaxEyN6CtdmQWzuiSq5TJuTYWBlTcehKG102uAtey0Cx5nEkil4x-0PPQbrMrRMDqZyN0',
    imageAlt:
      'Portrait of a young male lead engineer with glasses, looking thoughtfully at a holographic code display in a dimly lit, minimalist tech office.',
  },
  {
    name: 'Uzair Rahim',
    role: 'Head of Cloud',
    imageUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCcXP8m7lpPAOqze62PLEwFsVaTaBl9F8MxVSBNmY0Vxng-8a-o-jrJcwx6c9BMbeQEz8yRgxmgDyDgPO_PvHyRkq6tH39gPLepQGRgyhY04VOlNhG5j0fCTTN5Jzm50wPitEU4RrXUZ3HGbgpvZifMUOIiVc7EOkWjOOgcT-XMje-Fn9kFLES4obToH4qzKqxJ007Lpa_Id-kErLkDqcS6Fo4xnO2ZB8jUBtRYESM6FnohdV7o3kk',
    imageAlt:
      'A sophisticated professional portrait of a senior cloud infrastructure specialist in a clean, brightly lit technical studio.',
  },
  {
    name: 'Talha Rafi',
    role: 'Head of Sales',
    imageUrl: '/Admin/Talha-Rafi.jpg',
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
