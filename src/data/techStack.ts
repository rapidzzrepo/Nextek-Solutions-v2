export interface TechItem {
  icon: string
  name: string
  variant?: 'default' | 'light'
}

export const techStack: TechItem[] = [
  { icon: 'terminal', name: 'React / Next.js' },
  { icon: 'data_object', name: 'TypeScript' },
  { icon: 'cloud_sync', name: 'Kubernetes' },
  { icon: 'memory', name: 'Rust' },
  { icon: 'analytics', name: 'Python / PyTorch' },
  { icon: 'database', name: 'PostgreSQL' },
]

export const techStackDark: TechItem[] = [
  { icon: 'javascript', name: 'React / Next.js', variant: 'light' },
  { icon: 'code', name: 'TypeScript', variant: 'light' },
  { icon: 'cloud', name: 'Kubernetes', variant: 'light' },
  { icon: 'memory', name: 'Rust', variant: 'light' },
  { icon: 'psychology', name: 'Python / PyTorch', variant: 'light' },
  { icon: 'database', name: 'PostgreSQL', variant: 'light' },
]
