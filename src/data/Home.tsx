import { ReactNode } from 'react'

export interface StatItem {
  target: number
  suffix: string
  label: string
}

export interface ServiceCard {
  icon: string
  title: string
  description: string
  link: string
}

export interface Certification {
  src: string
  alt: string
  label: string
}

export interface PartnerLogo {
  src: string
  alt: string
}

export interface AIBentoCard {
  badge: string
  badgeColor: string
  title: string
  imageUrl: string
}

export interface CaseStudy {
  category: string
  categoryColor: string
  title: string
  description: string
  imageUrl: string
  imageAlt: string
}

export interface IndustryTab {
  title: string
  description: string
  titleColorClass: string
  problem: string
  solution: string
  solutionBorderColor: string
}

export interface ProductShowcase {
  number: string
  numberBg: string
  numberText: string
  title: string
  description: string
  features: string[]
  featureIconColor: string
  imageUrl: string
  imageAlt: string
  glowColor: string
}

export interface Testimonial {
  quote: string
  name: string
  role: string
}

export interface TechItem {
  icon: string
  label: string
}

export interface Insight {
  category: string
  categoryColor: string
  hoverColorClass: string
  title: string
  excerpt: string
  author: string
  readTime: string
  imageUrl: string
  imageAlt: string
}

export const heroBadge = 'NEXT-GEN ENGINEERING'

export const heroTitle: ReactNode[] = [
  'Architecting the Future of ',
  <span key="hero-highlight" className="text-primary">Absolute Performance</span>,
]

export const heroDescription = 'A specialized engineering collective dedicated to building high-concurrency systems, mission-critical AI, and frictionless digital experiences for the world\'s most ambitious enterprises.'

export const certStats: StatItem[] = [
  { target: 10, suffix: '+', label: 'Years in Market' },
  { target: 250, suffix: '+', label: 'Expert Engineers' },
  { target: 500, suffix: '+', label: 'Projects Delivered' },
  { target: 99, suffix: '%', label: 'Satisfied Clients' },
]

export const services: ServiceCard[] = [
  {
    icon: 'psychology',
    title: 'AI & ML',
    description: 'Custom LLMs, predictive analytics, and neural network architectures optimized for performance.',
    link: '#',
  },
  {
    icon: 'web',
    title: 'Enterprise Web',
    description: 'Scalable React and Next.js applications built for massive traffic and real-time synchronization.',
    link: '#',
  },
  {
    icon: 'smartphone',
    title: 'Native Mobile',
    description: 'High-performance iOS and Android applications utilizing Swift and Kotlin native capabilities.',
    link: '#',
  },
  {
    icon: 'cloud',
    title: 'Cloud Infrastructure',
    description: 'Serverless architectures, microservices orchestration, and cost-optimized multi-cloud strategies.',
    link: '#',
  },
  {
    icon: 'design_services',
    title: 'UI/UX Strategy',
    description: 'Technical-first design systems that prioritize user flow and brand identity without compromising code integrity.',
    link: '#',
  },
  {
    icon: 'terminal',
    title: 'Elite DevOps',
    description: 'Automated CI/CD pipelines, containerization, and zero-downtime deployment workflows.',
    link: '#',
  },
]

export const certifications: Certification[] = [
  { src: '/Certification-Icons/screen.png', alt: 'ISO 27001', label: 'ISO 27001' },
  { src: '/Certification-Icons/screen copy 3.png', alt: 'GCP Professional', label: 'GCP Professional' },
  { src: '/Certification-Icons/screen copy 4.png', alt: 'CKA Kubernetes', label: 'CKA Kubernetes' },
  { src: '/Certification-Icons/screen.png', alt: 'HIPAA Compliant', label: 'HIPAA Compliant' },
  { src: '/Certification-Icons/11.png', alt: 'ISO 9001', label: 'ISO 9001' },
  { src: '/Certification-Icons/123.jpg', alt: 'PCI DSS', label: 'PCI DSS' },
  { src: '/Certification-Icons/goodFirms.png', alt: 'GoodFirms', label: 'GoodFirms' },
  { src: '/Certification-Icons/top-firms.png', alt: 'Top Firms', label: 'Top Firms' },
]

export const partnerLogos: PartnerLogo[] = [
  { src: '/Partner-Logos-Old/KEISER.png', alt: 'Keiser Logo' },
  { src: '/Partner-Logos-Old/SPIN.png', alt: 'Spivi Logo' },
  { src: '/Partner-Logos-Old/BEAVER-FIT.png', alt: 'BeaverFit Logo' },
  { src: '/Partner-Logos/LLAXAgarrage-white.png', alt: 'LLAX Agarrage' },
  { src: '/Partner-Logos/Lantern-Finance-white.png', alt: 'Lantern Finance' },
  { src: '/Partner-Logos/SafeSiteUSA-1-1-p-500.png', alt: 'SafeSite USA' },
  { src: '/Partner-Logos/Success.ai-white.png', alt: 'Success.ai' },
  { src: '/Partner-Logos/Trove_Green-white-p-500.png', alt: 'Trove Green' },
  { src: '/Partner-Logos/castingPax-copy.png', alt: 'Casting Pax' },
  { src: '/Partner-Logos/otherMind.png', alt: 'OtherMind' },
]

export const aiSolutions: AIBentoCard[] = [
  {
    badge: 'Deep Learning',
    badgeColor: 'bg-primary',
    title: 'Neural Architectures',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDj0WWkwnt5Py1bSo5sELqq8me4AwFnpLughZWogTZtIjck31rS3X86zCQj7bSsqkwJVI6vKFv74cgOwxvKWVvNxlMQK_PN2AhvEIfJCx1h6TiusrGWUc5UiacYVcYg9Jaqul_84SniU6O-uQsVpuHI7djuBSYjd7m22Ik8EUQwxh0sUxPDAcvsNGVh5UPjgz5prUbfTrIUG5qHPSRarIsCUJlhFQNIDVMleVhOSDTHBSKqCKNNjCg',
  },
  {
    badge: 'Big Data',
    badgeColor: 'bg-secondary',
    title: 'Predictive Analytics',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD-4NoKqh5gZbYY18yErxRs3zi8pv0RlqHT1l762oUE8CE3UGpfrA2UGRegMfVPHCOYoJN2W8LDtsKU_S3DaeYEVRWszvTF86joheg9riIUO3M9fBwPEwvWYvt6GfV7aGWlrWjQdovB5k9kcT3FNlnCnT9eQUlA1U6T25PIGB1E0IU_LiGtGxFblQ9ilQv_1LvB9AYX0lZuWRxdsfdkVMxbaOZ5L0VJ7vxwHKGgjm9nhGy837qcD-U',
  },
  {
    badge: 'NLP',
    badgeColor: 'bg-tertiary',
    title: 'Cognitive Automation',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAIrhD9kC9Q8my4_gQOVwqBJuTCGQBFN8w94ljRSwp5unnmgN9LJOvgbdyBuNwGVQhyHhv6NONMbQssp53PsLnaqBbEdG-l7gCgZL4nBygCI2Q2JqSzHfXqclz1uzDJxVY1Qk12lf3xh8FHT5gzH2uWXl-YtcjisHYXKnoNw7vtcc4vYXLcbziRV3UdsY8uGU-GDJ3Lbm2TusGTTv5ZFQKFs90qjCUVt2lhaeEkLdiyyxqdLRzRPO0',
  },
]

export const aiDescription = 'We architect next-generation intelligence. Our AI/ML solutions leverage deep learning and predictive analytics to solve complex data challenges and drive autonomous decision-making.'

export const caseStudies: CaseStudy[] = [
  {
    category: 'Fintech',
    categoryColor: 'text-primary',
    title: 'NeoBank Scalability',
    description: 'Built a high-concurrency ledger system supporting 50k transactions per second.',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCejiKSN8VCK6fCi6PFTedhyUsxOUkuGzLtmWoQt7pYf4He77hdfg1OA3giju5DESf1THrvMtc_w4qd1F1iSYdkX6XUc3f1ioVJkAO7E9XourxljzHG2IVPaDrewo9vnZeMjociMs1jC9llMs08L77pwQoN1jPdytwAJFVtxszMC1BsnMkSs9Hxl-Be_l_BfCQh2MAE7cF7XYIfSNyqTjnOchdBnDI-PXN-JK5_o2YxSl_LmJ_hh_A',
    imageAlt: 'A modern fintech interface showing a real-time trading dashboard',
  },
  {
    category: 'Healthtech',
    categoryColor: 'text-secondary',
    title: 'AI Diagnostics Hub',
    description: 'Deployment of a distributed ML model for early-stage pathology detection across 12 hospitals.',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAcLjewmN3NJ10k4uuNxnZjAqojCDal2R_RKPJ0y2lSqxkHYh8W5b5o_UDA8tDTyZ0zKqiq6n6N89XTK1ypdrvt_C7dy4bBn0Lk-ar6T7qODxDqHfPAVumwzqgGqaGETXkQ-dvCbv82VrGlbsu3YggtAVU848jiBq63PYVAh4-OR_d5g3td7uzh-ThZOIhr986gKsJT5Czz2tnLQbgcM2qhWIG06R_GgLaIwuBz65oy_Kk4u1iVJkA',
    imageAlt: 'A professional medical technician looking at a wall-mounted digital screen displaying an AI-driven MRI analysis',
  },
  {
    category: 'Logistics',
    categoryColor: 'text-tertiary',
    title: 'Global Fleet AI',
    description: 'Predictive routing engine reducing fuel consumption by 22% for a fleet of 4,000+ vessels.',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDaePOw9tRxLDM9DHuaoM6HCbVf37gF6X9upSjKirzZ_6_PgYhSQ4RQl_lDJ6z_Ti2jh5s3o_BknnIqiHuGJHj6JDDVqJadrzHlSKnmhX_NEyyMr_3uV5hb5wkcGCYV1m7r6KqaBK4vojA4BEy1XXK_QtF9bQXPbHsnMZJzqkn17AxGIdgWgtSQNebZV1wMVx_E36ab9yb-5BnVi-cX1OjgQdcIh8WrrKdMEPmn_1HR-xXOx3wN8Zw',
    imageAlt: 'A large-scale automated shipping port at night',
  },
]

export const industryTabs: IndustryTab[] = [
  {
    title: 'Fintech',
    description: 'Solving high-frequency processing challenges.',
    titleColorClass: 'text-primary-fixed-dim',
    problem: 'Inconsistent latency in cross-border settlements leading to significant liquidity risk.',
    solution: 'We architected a distributed event-driven ledger that reduced finality times from 4 hours to 12 seconds.',
    solutionBorderColor: 'border-primary',
  },
  {
    title: 'Healthcare',
    description: 'Bridging legacy systems with modern AI.',
    titleColorClass: 'text-secondary-fixed-dim',
    problem: 'Siloed patient records and manual entry errors causing operational friction.',
    solution: 'Implemented a HIPAA-compliant unified data platform with automated NLP for record ingestion.',
    solutionBorderColor: 'border-secondary',
  },
  {
    title: 'Logistics',
    description: 'Optimizing supply chains with real-time data.',
    titleColorClass: 'text-tertiary-fixed-dim',
    problem: 'Lack of visibility into last-mile delivery and fuel inefficiencies.',
    solution: 'Digital twin simulation of the delivery network utilizing real-time GPS and weather data for routing.',
    solutionBorderColor: 'border-tertiary',
  },
]

export const products: ProductShowcase[] = [
  {
    number: '01',
    numberBg: 'bg-primary-fixed',
    numberText: 'text-primary',
    title: 'NexCore Cloud OS',
    description: 'A proprietary cloud-native operating layer designed to abstract infrastructure complexity, allowing developers to focus solely on business logic.',
    features: [
      'Zero-configuration auto-scaling',
      'Multi-region traffic steering',
      'Integrated security hardening',
    ],
    featureIconColor: 'text-primary',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC-wAkZ1JBwHrAj1F93BFkWPS7MV2tvnomqtCHsR7NfimqwzxTeSjL-yrvTa32MRsb4s1JTkZwoQZAsz94kPA-Bbkq61A0t8e1lz4kIcDk2QVPkaxbX_FrrSZi87xpWXbjCp6jVD0aZg0MtUsjXCGQaAVBO9mePJgg38QPF2LsmqaJAqpCUfdus3WlvBHpIMYCoEjigAxPmFzf9pqkUvC7O1Hv7lzO0y9g9B66rFteNMTHKa8wbNbo',
    imageAlt: 'A clean, minimalist 3D rendering of a futuristic software interface',
    glowColor: 'bg-primary/10',
  },
  {
    number: '02',
    numberBg: 'bg-secondary-fixed',
    numberText: 'text-secondary',
    title: 'Nexus AI Engine',
    description: 'A distributed AI/ML inference platform for real-time model deployment, automated training pipelines, and intelligent data processing at scale.',
    features: [
      'Automated model training & deployment',
      'Real-time inference at scale',
      'Intelligent data pipeline orchestration',
    ],
    featureIconColor: 'text-secondary',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDjX-bJXtGmPZkdNjn0V6hI9nK0gSRxRmtpvl4B_DdAy_MX-TI2LmvrXSOTdjSAHujqm_RT5uUKRTWMukfNBxIZmpLjiEVv0bBjYcQZrzPnTDWNQCRzPHf9JO5DdcKjlwFtZ1V7nxi7XY5oLyVmal8eDUc9ig3jjJSxC6-LbtUBburM1eI5ZzoNXwzQHA2Y4p2_l5SaP4GpyjNSgb17rFnRg0NfdFkTzCWz_oKtvPewtm02Shs9w7o',
    imageAlt: 'A detailed digital twin of an automated warehouse',
    glowColor: 'bg-secondary/10',
  },
]

export const testimonials: Testimonial[] = [
  {
    quote: '"nextek Sol didn\'t just provide a service, they architected a total transformation. Their engineering presision and refusal to settle for good enough is what diferentiates them from every other firm we\'ve ever worked with."',
    name: 'Marcus Vancity',
    role: 'CTO, Global Infra Dynamics',
  },
  {
    quote: '"the level of technical rigor nextek brought to our cloud migration was un-precedented. they didn\'t just move our workloads, they optimized our entire cost to performance ratio."',
    name: 'Sarah Chen',
    role: 'Head of Platform, FinStream',
  },
  {
    quote: '"architecting for 99.999% availability is a massive chalenge. Nextek Sol delivered a resilient infrastructure that has weatheredevery peak without a single millisecond of downtime."',
    name: 'David Vance',
    role: 'VP Infrastructure, Global Connect',
  },
]

export const resilienceFeatures = [
  {
    icon: 'shield',
    title: 'Attack Resilience',
    description: 'Neutralizing kinetic and cyber threats at the edge.',
  },
  {
    icon: 'dynamic_form',
    title: 'Automatic Failover',
    description: 'Instant redirection prevents site crashes.',
  },
  {
    icon: 'database',
    title: 'Stateful Recovery',
    description: 'Real-time data replication across zones.',
  },
]

export const techStack: TechItem[] = [
  { icon: 'terminal', label: 'React / Next.js' },
  { icon: 'data_object', label: 'TypeScript' },
  { icon: 'cloud_sync', label: 'Kubernetes' },
  { icon: 'memory', label: 'Rust' },
  { icon: 'analytics', label: 'Python / PyTorch' },
  { icon: 'database', label: 'PostgreSQL' },
]

export const insights: Insight[] = [
  {
    category: 'Engineering',
    categoryColor: 'text-primary',
    hoverColorClass: 'group-hover:text-primary',
    title: 'The Cost of Technical Debt in Enterprise Scaling',
    excerpt: 'Understanding why long-term performance requires immediate architectural investment.',
    author: 'Ali Hasnain',
    readTime: '8 min read',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA6XGgGX4OqTXqIEFsmxMCoZmSAMuPGW0l0GW-4G7dzZkxRk-vpXinqaQ1prKw6D5RfiUFWVDA_J65Nag4dW09mJZ1tvsKKRo0_r3oeeliuc0oswhc5B82Nw5yG5b29kOI7a3h_q0i5zA7TQtuiPs1k-FkxmyFMvS3S3yI4mf8HNXD2i2HL0czhtsq9V9PkXa2Lhu8Lkruav0zMX19yn0xFfEFGlua3FJUa6icfSAHokv6Z5ZkT_uQ',
    imageAlt: 'A futuristic workspace with multiple coding monitors',
  },
  {
    category: 'Artificial Intelligence',
    categoryColor: 'text-secondary',
    hoverColorClass: 'group-hover:text-secondary',
    title: 'Deploying Private LLMs for Data Sovereignty',
    excerpt: 'How to leverage state-of-the-art language models without compromising enterprise security.',
    author: 'Jawad Khan',
    readTime: '12 min read',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBmY99LWL2K4Yf4uuVGG_X0MmgttvzRgMt2d5CWi4Jiya2VGDyZrJXSm-av-YG4OYZOvstU8T_LRfoqk_G4ogJqQUEEYSe6kKRyxhGr496ZjG9uqX1JiCA7J5kuQ31c330BfhuD2_leyeSrKnIX3cAl4CtYP-3NlmruL7X-YvdTkh5o0aAe2pXV3RtY5-3MKaX5ts95Cr-L4jIrf8Gc-nQsGgAPmAh3lnathQLKdMR9QxrPewvrg1w',
    imageAlt: 'Abstract neural network pathways glowing in electric purple',
  },
  {
    category: 'Infrastructure',
    categoryColor: 'text-tertiary',
    hoverColorClass: 'group-hover:text-tertiary',
    title: 'Serverless vs. Edge: Choosing the Right Layer',
    excerpt: 'Evaluating deployment strategies for mission-critical low-latency applications.',
    author: 'Muhammad Umair',
    readTime: '10 min read',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCwwhvDjaIwm-qv6PsUBZN761WyCw0sIi2YVvjJXxUPDmZhbGX49xNfUR1a_-n_OPewgFNy0OkN0ErOevr4y4Ij8fjBbPcJdCq5f-L8Myf8uXtgBTau9O2TiMQ056fDZYMfSfWq9Yw9eVd3Nl7doaxoeAuawwSmcblmeJMjDZybiqpVL4Tb8Ql0ZxyqSmkklthwQWKRlTRYTMdS8xDpl5plFRIm1DYpuAToCyyPpJaLer0AVqBZ3Qg',
    imageAlt: 'A sleek white server rack in a modern data center',
  },
]
