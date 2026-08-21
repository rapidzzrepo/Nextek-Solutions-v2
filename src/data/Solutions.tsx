import type { ReactNode } from 'react'

export interface TechItem {
  icon: string
  label: string
}

export interface PillarFeature {
  icon: string
  text: string
}

export interface Pillar {
  number: string
  title: string
  description: string
  features: PillarFeature[]
  stat: { value: string; label: string }
  imageUrl: string
  imageAlt: string
  imageFirst?: boolean
}

export interface DomainCard {
  icon: string
  title: string
  description: string
}

export interface EngineeringStep {
  number: string
  title: string
  description: string
}

export const heroBadge = 'Solutions Portal v2.0'

export const heroTitle: ReactNode[] = [
  'Solving ',
  <span key="complexity" className="text-gradient">Complexity</span>,
  ' with Precision Engineering.',
]

export const heroDescription =
  'We bridge the gap between ambitious vision and technical reality. Nextek Sol delivers high-fidelity engineering systems designed for sovereign performance and global scale.'

export const techStack: TechItem[] = [
  { icon: 'javascript', label: 'React / Next.js' },
  { icon: 'code', label: 'TypeScript' },
  { icon: 'cloud', label: 'Kubernetes' },
  { icon: 'memory', label: 'Rust' },
  { icon: 'psychology', label: 'Python / PyTorch' },
  { icon: 'database', label: 'PostgreSQL' },
]

export const pillars: Pillar[] = [
  {
    number: 'Pillar 01',
    title: 'Intelligent Automation & ML',
    description:
      'Transforming data into sovereign intelligence. We deploy proprietary LLMs and generative models fine-tuned for high-stakes enterprise domains.',
    features: [
      { icon: 'analytics', text: 'Predictive pattern recognition & anomaly detection' },
      { icon: 'auto_awesome', text: 'Generative AI workflows for process optimization' },
      { icon: 'security', text: 'Privacy-preserving federated learning models' },
    ],
    stat: { value: '65% Faster', label: 'Average Deployment Acceleration' },
    imageUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBydwNv-aEKyVxcguvHSipCE_EdSrLdoupvuxR-BxvkGsvTzLSyzY9MK5LD-Tn2qwSupCZE_hPh5r6TCWhqGWtG0NEE2Dj5J96lpI_Omd2XkN3REWG4-MG3t4JEhhcJOQJ0-fB0HEsvTXA9r6IftnNp8kbSmAdcnz9VhFQn-7LYNAOPnEo4_BsQIqE5-lIO1KgaOPwiC67q0DwNXDdut9R4j1xb16i-XVcSd3RtTlEPs8Vg_GlSiiA',
    imageAlt: 'Intelligent Automation Visual',
    imageFirst: true,
  },
  {
    number: 'Pillar 02',
    title: 'Global Resilient Infrastructure',
    description:
      'Architecting absolute availability. Multi-region, self-healing cloud-native systems designed for the zero-trust era.',
    features: [
      { icon: 'public', text: 'Edge computing & geo-distributed orchestration' },
      { icon: 'cloud_done', text: 'Kubernetes-driven auto-scaling architectures' },
      { icon: 'verified_user', text: 'Automated SOC2 & GDPR compliance guardrails' },
    ],
    stat: { value: '99.99%', label: 'Guaranteed Uptime SLA' },
    imageUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuB8XRzCYpojQJ3XKcVNugyatYXjMBLR3m5Yz1010a6rZpT3bbM0CnnXw1SzccuRwqhcUa7V2yqjVxSTzUaOrMjT781SnPzjRHV4wewX_89nH4R-Mu_GTgtVV3QHQMGfgOnxxF8uxJy__q4eWWlEo-PVvPe5bLiFL3iJbLYRdqpFq0JfTYD-EQ8NTeRvmy6SiW5yQhS7NlaEFRyZrwoKUtL9dRsjXq68IojzN4U0NSuuBz13l1JbxeA',
    imageAlt: 'Global Infrastructure Visual',
    imageFirst: false,
  },
  {
    number: 'Pillar 03',
    title: 'High-Performance Ecosystems',
    description:
      'Full-stack synthesis where code meets performance. We build integrated product ecosystems that deliver zero-latency experiences.',
    features: [
      { icon: 'speed', text: 'Low-latency event-driven API architectures' },
      { icon: 'smartphone', text: 'Native iOS/Android with 60FPS rendering' },
      { icon: 'monitoring', text: 'Real-time observability and telemetry suites' },
    ],
    stat: { value: '<100ms', label: 'System-wide Latency Threshold' },
    imageUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuARF9G8_y6k6Vgpx295OH8n9RA5KsCislaSZYy8lFK0DJVeqwGoP4OZg1gQNvKGRy2UEqDIBoYKqA0kz3ltbv6I2Unt7wMbv5RRWsUhoa5OhR1IOm9IqIvNN7MxUsPO8OYEpuAvokgZuDGd1Y5JWJt4OIZQfI9oJltKOPJnHNEsZ0r2a2OTGotCG-oD5T6BC2ira1EC-Q4hOlY6Kt88yWhGAUAL0J5dy4kYP7iifsea9ESUx6vw-Kw',
    imageAlt: 'High Performance Ecosystems',
    imageFirst: true,
  },
]

export const domains: DomainCard[] = [
  {
    icon: 'payments',
    title: 'Fintech',
    description:
      'High-frequency transaction processing and secure ledger synchronization for global finance.',
  },
  {
    icon: 'medical_services',
    title: 'Healthcare',
    description:
      'HIPAA-compliant AI diagnostic tools and secure clinical data exchange protocols.',
  },
  {
    icon: 'local_shipping',
    title: 'Logistics',
    description:
      'Real-time supply chain optimization and autonomous edge-routing algorithms.',
  },
]

export const protocolSteps: EngineeringStep[] = [
  {
    number: '1',
    title: 'Audit & Discovery',
    description:
      'Deep-dive technical assessment of legacy debt, architecture bottlenecks, and security posture.',
  },
  {
    number: '2',
    title: 'Architectural Blueprint',
    description:
      'Designing high-fidelity schematics for sovereign cloud scaling and AI integration.',
  },
  {
    number: '3',
    title: 'Acceleration Phase',
    description:
      'Rapid deployment of engineering squads to execute the blueprint with zero-downtime transition.',
  },
]

export const ctaTitle = 'Ready to Scale?'
export const ctaDescription =
  'Join the ranks of elite tech organizations. Our architects are ready to dissect your current infrastructure and map a path to peak performance.'
export const ctaPrimaryText = 'Schedule a Technical Scoping Session'
export const ctaSecondaryText = 'View Technical Docs'
