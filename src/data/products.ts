export interface Product {
  number: string
  title: string
  description: string
  colorClass: string
  bgColorClass: string
  features: string[]
  img: string
}

export const products: Product[] = [
  {
    number: '01',
    title: 'NexCore Cloud OS',
    description: 'A proprietary cloud-native operating layer designed to abstract infrastructure complexity, allowing developers to focus solely on business logic.',
    colorClass: 'text-primary',
    bgColorClass: 'bg-primary-fixed',
    features: [
      'Zero-configuration auto-scaling',
      'Multi-region traffic steering',
      'Integrated security hardening',
    ],
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC-wAkZ1JBwHrAj1F93BFkWPS7MV2tvnomqtCHsR7NfimqwzxTeSjL-yrvTa32MRsb4s1JTkZwoQZAsz94kPA-Bbkq61A0t8e1lz4kIcDk2QVPkaxbX_FrrSZi87xpWXbjCp6jVD0aZg0MtUsjXCGQaAVBO9mePJgg38QPF2LsmqaJAqpCUfdus3WlvBHpIMYCoEjigAxPmFzf9pqkUvC7O1Hv7lzO0y9g9B66rFteNMTHKa8wbNbo',
  },
  {
    number: '02',
    title: 'Nexus AI Engine',
    description: 'A distributed AI/ML inference platform for real-time model deployment, automated training pipelines, and intelligent data processing at scale.',
    colorClass: 'text-secondary',
    bgColorClass: 'bg-secondary-fixed',
    features: [
      'Automated model training & deployment',
      'Real-time inference at scale',
      'Intelligent data pipeline orchestration',
    ],
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDjX-bJXtGmPZkdNjn0V6hI9nK0gSRxRmtpvl4B_DdAy_MX-TI2LmvrXSOTdjSAHujqm_RT5uUKRTWMukfNBxIZmpLjiEVv0bBjYcQZrzPnTDWNQCRzPHf9JO5DdcKjlwFtZ1V7nxi7XY5oLyVmal8eDUc9ig3jjJSxC6-LbtUBburM1eI5ZzoNXwzQHA2Y4p2_l5SaP4GpyjNSgb17rFnRg0NfdFkTzCWz_oKtvPewtm02Shs9w7o',
  },
]
