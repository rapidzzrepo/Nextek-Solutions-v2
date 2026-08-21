import type { ReactNode } from 'react'

export interface HeroStat {
  value: string
  label: string
}

export interface ServiceItem {
  icon: string
  title: string
  shortDescription: string
  color: string
}

export interface ServiceScene {
  icon: string
  title: string
  description: string
  bullets: string[]
  visual: 'chart' | 'code' | 'mobile' | 'cloud'
}

export interface CertBadge {
  src: string
  alt: string
  label: string
}

export interface StatCounter {
  icon: string
  value: number
  suffix: string
  label: string
}

export interface ServiceCard {
  icon: string
  title: string
  description: string
  color: string
}

export interface DetailedService {
  icon: string
  title: string
  description: string
  bullets: string[]
}

export interface ResultMetric {
  value: string
  label: string
}

export interface ProcessStep {
  number: number
  title: string
  description: string
}

export interface TrustFeature {
  icon: string
  title: string
  description: string
}

export interface PartnerLogo {
  src: string
  alt: string
}

export interface InsightPost {
  title: string
  category: string
  imageUrl: string
  date: string
}

export interface Certification {
  src: string
  alt: string
  label: string
}

export interface ResilienceFeature {
  icon: string
  title: string
  description: string
}

export interface AnimatedStat {
  icon: string
  value: number
  suffix: string
  label: string
  chartValues: number[]
}

export interface ClientResult {
  client: string
  category: string
  metric: string
  metricValue: number
  metricSuffix: string
  description: string
  color: string
}

export interface TechCategory {
  icon: string
  title: string
  description: string
  color: string
  techs: { name: string; icon: string }[]
}

export interface NetworkNode {
  city: string
  x: number
  y: number
}

export interface NetworkConnection {
  from: number
  to: number
}

export const heroTitle: ReactNode[] = [
  'We Build, Market & ',
  <span key="hl" className="bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent">Scale Your Business</span>,
]

export const heroDescription = 'Full-service digital agency combining marketing expertise with world-class engineering. We don\'t just bring traffic — we build the products that convert it.'

export const heroStats: HeroStat[] = [
  { value: '500+%', label: 'Traffic Increase' },
  { value: '99.9%', label: 'Uptime' },
  { value: '150+', label: 'Projects' },
]

export const horizontalServices: ServiceItem[] = [
  { icon: 'search', title: 'SEO', shortDescription: 'Dominate search rankings and drive organic traffic that converts.', color: 'text-primary' },
  { icon: 'ads_click', title: 'PPC', shortDescription: 'Maximize ROI with targeted pay-per-click campaigns across Google and Meta.', color: 'text-secondary' },
  { icon: 'share', title: 'Social', shortDescription: 'Build engaged communities and amplify your brand across every platform.', color: 'text-primary' },
  { icon: 'web', title: 'Web Dev', shortDescription: 'Custom websites and web apps built for performance and conversions.', color: 'text-secondary' },
  { icon: 'phone_iphone', title: 'Mobile', shortDescription: 'Native iOS and Android apps that users love and keep coming back to.', color: 'text-primary' },
  { icon: 'cloud', title: 'Cloud', shortDescription: 'Scalable infrastructure with 99.9% uptime and rapid deployments.', color: 'text-secondary' },
]

export const certBadges: CertBadge[] = [
  { src: '/Certification-Icons/screen.png', alt: 'ISO 27001', label: 'ISO 27001' },
  { src: '/Certification-Icons/11.png', alt: 'ISO 9001', label: 'ISO 9001' },
  { src: '/Certification-Icons/screen copy 3.png', alt: 'GCP Professional', label: 'GCP Professional' },
  { src: '/Certification-Icons/123.jpg', alt: 'PCI DSS', label: 'PCI DSS' },
  { src: '/Certification-Icons/screen copy 4.png', alt: 'CKA Kubernetes', label: 'CKA Kubernetes' },
]

export const serviceScenes: ServiceScene[] = [
  {
    icon: 'search',
    title: 'SEO Optimization',
    description: 'We optimize your website to rank higher on Google and drive qualified organic traffic that actually converts into customers.',
    bullets: ['Technical SEO audits & fixes', 'Keyword research & strategy', 'On-page & off-page optimization', 'Local SEO for businesses'],
    visual: 'chart',
  },
  {
    icon: 'web',
    title: 'Web Development',
    description: 'Custom websites and web applications built for speed, scalability, and conversions — from landing pages to full-stack platforms.',
    bullets: ['React / Next.js development', 'E-commerce platforms', 'Landing page optimization', 'API development & integration'],
    visual: 'code',
  },
  {
    icon: 'phone_iphone',
    title: 'Mobile Apps',
    description: 'Native and cross-platform mobile apps that deliver exceptional user experiences your customers will love.',
    bullets: ['iOS & Android native apps', 'React Native / Flutter', 'App Store optimization', 'Push notification strategies'],
    visual: 'mobile',
  },
]

export const statCounters: StatCounter[] = [
  { icon: 'trending_up', value: 500, suffix: '+%', label: 'Avg. Traffic Increase' },
  { icon: 'verified', value: 99, suffix: '.9%', label: 'Platform Uptime' },
  { icon: 'rocket_launch', value: 150, suffix: '+', label: 'Projects Delivered' },
  { icon: 'schedule', value: 48, suffix: 'h', label: 'Response Time' },
]

export const whatWeDo: ServiceCard[] = [
  { icon: 'search', title: 'SEO Optimization', description: 'Dominate search rankings and drive organic traffic that converts.', color: 'text-primary' },
  { icon: 'ads_click', title: 'PPC Advertising', description: 'Maximize ROI with targeted pay-per-click campaigns across Google and Meta.', color: 'text-secondary' },
  { icon: 'share', title: 'Social Media', description: 'Build engaged communities and amplify your brand across every platform.', color: 'text-primary' },
  { icon: 'web', title: 'Web Development', description: 'Custom websites and web apps built for performance and conversions.', color: 'text-secondary' },
  { icon: 'phone_iphone', title: 'Mobile Apps', description: 'Native iOS and Android apps that users love and keep coming back to.', color: 'text-primary' },
  { icon: 'cloud', title: 'Cloud & DevOps', description: 'Scalable infrastructure with 99.9% uptime and rapid deployments.', color: 'text-secondary' },
]

export const detailedServices: DetailedService[] = [
  {
    icon: 'search',
    title: 'SEO Optimization',
    description: 'We optimize your website to rank higher on Google and drive qualified organic traffic.',
    bullets: ['Technical SEO audits & fixes', 'Keyword research & strategy', 'On-page & off-page optimization', 'Local SEO for businesses'],
  },
  {
    icon: 'ads_click',
    title: 'PPC Advertising',
    description: 'Targeted ad campaigns that deliver immediate, measurable results.',
    bullets: ['Google Ads management', 'Meta & Instagram ads', 'Retargeting campaigns', 'A/B testing & optimization'],
  },
  {
    icon: 'share',
    title: 'Social Media Management',
    description: 'Build your brand presence and engage audiences across all platforms.',
    bullets: ['Content calendar planning', 'Community management', 'Influencer partnerships', 'Analytics & reporting'],
  },
  {
    icon: 'web',
    title: 'Web Development',
    description: 'Custom websites and web applications built for speed, scalability, and conversions.',
    bullets: ['React / Next.js development', 'E-commerce platforms', 'Landing page optimization', 'API development & integration'],
  },
  {
    icon: 'phone_iphone',
    title: 'Mobile App Development',
    description: 'Native and cross-platform mobile apps that deliver exceptional user experiences.',
    bullets: ['iOS & Android native apps', 'React Native / Flutter', 'App Store optimization', 'Push notification strategies'],
  },
  {
    icon: 'cloud',
    title: 'Cloud & DevOps',
    description: 'Scalable, secure infrastructure that keeps your products running 24/7.',
    bullets: ['AWS / GCP cloud setup', 'CI/CD pipeline automation', 'Docker & Kubernetes', 'Monitoring & alerting'],
  },
]

export const results: ResultMetric[] = [
  { value: '500+%', label: 'Avg. Traffic Increase' },
  { value: '99.9%', label: 'Platform Uptime' },
  { value: '150+', label: 'Projects Delivered' },
  { value: '<48h', label: 'Avg. Response Time' },
]

export const processSteps: ProcessStep[] = [
  { number: 1, title: 'Discovery', description: 'We audit your current setup — marketing channels, tech stack, and business goals — to identify opportunities.' },
  { number: 2, title: 'Strategy & Build', description: 'Our team creates a unified plan covering marketing campaigns AND technical development. One team, one vision.' },
  { number: 3, title: 'Launch & Scale', description: 'We execute, measure everything, and optimize continuously. Your growth compounds every month.' },
]

export const trustFeatures: TrustFeature[] = [
  { icon: 'hub', title: 'One Team, Zero Silos', description: 'Marketing and engineering work together. No miscommunication, no finger-pointing, faster results.' },
  { icon: 'query_stats', title: 'Data-Driven Results', description: 'Every decision backed by data. We track, measure, and optimize for maximum ROI across all channels.' },
  { icon: 'code', title: 'Full-Stack Capability', description: 'From ad campaigns to backend infrastructure — we handle everything under one roof.' },
  { icon: 'support_agent', title: 'Dedicated Support', description: 'A dedicated account manager who knows your business. Direct access, no call centers.' },
]

export const partnerLogos: PartnerLogo[] = [
  { src: '/Partner-Logos/OLX_2019.svg.webp', alt: 'OLX' },
  { src: '/Partner-Logos/Lamudi_idvk2HTUsH_1.svg', alt: 'Lamudi' },
  { src: '/Partner-Logos/Glovo_logo.svg.webp', alt: 'Glovo' },
  { src: '/Partner-Logos/Flutterwave_Logo.png', alt: 'Flutterwave' },
  { src: '/Partner-Logos/castingPax-copy.png', alt: 'CastingPax' },
  { src: '/Partner-Logos/otherMind.png', alt: 'OtherMind' },
  { src: '/Partner-Logos/Lantern-Finance-white.png', alt: 'Lantern Finance' },
  { src: '/Partner-Logos/LLAXAgarrage-white.png', alt: 'LLAX Garage' },
  { src: '/Partner-Logos/SafeSiteUSA-1-1-p-500.png', alt: 'SafeSite USA' },
  { src: '/Partner-Logos/Success.ai-white.png', alt: 'Success.ai' },
  { src: '/Partner-Logos/Trove_Green-white-p-500.png', alt: 'Trove Green' },
  { src: '/Partner-Logos/pw-logo.png', alt: 'PW' },
]

export const insights: InsightPost[] = [
  {
    title: 'Why Marketing + Engineering Under One Roof Wins',
    category: 'Strategy',
    imageUrl: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&q=80',
    date: 'Jan 15, 2025',
  },
  {
    title: 'How We Cut Client Deploy Times by 90%',
    category: 'Engineering',
    imageUrl: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=600&q=80',
    date: 'Jan 10, 2025',
  },
  {
    title: 'The ROI of Technical SEO: A Case Study',
    category: 'Marketing',
    imageUrl: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&q=80',
    date: 'Jan 5, 2025',
  },
]

export const certifications: Certification[] = [
  { src: '/Certification-Icons/screen.png', alt: 'ISO 27001', label: 'ISO 27001' },
  { src: '/Certification-Icons/screen copy 3.png', alt: 'GCP Professional', label: 'GCP Professional' },
  { src: '/Certification-Icons/screen copy 4.png', alt: 'CKA Kubernetes', label: 'CKA Kubernetes' },
  { src: '/Certification-Icons/11.png', alt: 'ISO 9001', label: 'ISO 9001' },
  { src: '/Certification-Icons/123.jpg', alt: 'PCI DSS', label: 'PCI DSS' },
  { src: '/Certification-Icons/goodFirms.png', alt: 'GoodFirms', label: 'GoodFirms Top Agency' },
]

export const resilienceFeatures: ResilienceFeature[] = [
  { icon: 'shield', title: 'Attack Resilience', description: 'Neutralizing kinetic and cyber threats at the edge.' },
  { icon: 'dynamic_form', title: 'Automatic Failover', description: 'Instant redirection prevents site crashes.' },
  { icon: 'database', title: 'Stateful Recovery', description: 'Real-time data replication across zones.' },
]

export const animatedStats: AnimatedStat[] = [
  { icon: 'trending_up', value: 500, suffix: '+%', label: 'Avg. Traffic Increase', chartValues: [30, 55, 40, 70, 50, 85, 65, 90, 75, 100] },
  { icon: 'uptime', value: 99, suffix: '.9%', label: 'Platform Uptime', chartValues: [95, 97, 96, 98, 97, 99, 98, 99, 99, 100] },
  { icon: 'rocket_launch', value: 150, suffix: '+', label: 'Projects Delivered', chartValues: [20, 35, 50, 60, 80, 95, 110, 125, 140, 150] },
  { icon: 'schedule', value: 48, suffix: 'h', label: 'Avg. Response Time', chartValues: [80, 70, 65, 55, 60, 50, 48, 48, 48, 48] },
]

export const clientResults: ClientResult[] = [
  { client: 'SUCCESS.AI', category: 'E-Commerce', metric: 'Organic Traffic Growth', metricValue: 340, metricSuffix: '%', description: 'Boosted organic visibility through technical SEO and content strategy across 12 regional markets.', color: 'text-primary' },
  { client: 'SPiN', category: 'Food Delivery', metric: 'Revenue Increase', metricValue: 280, metricSuffix: '%', description: 'Rebuilt the delivery partner app and optimized conversion funnels, driving massive revenue gains.', color: 'text-secondary' },
  { client: 'CastingPAX', category: 'Fintech', metric: 'Transaction Speed', metricValue: 95, metricSuffix: '% faster', description: 'Architected a high-performance payment processing pipeline handling millions of daily transactions.', color: 'text-primary' },
  { client: 'Lantern Finance', category: 'Finance', metric: 'Lead Conversion', metricValue: 420, metricSuffix: '%', description: 'Combined paid campaigns with a custom CRM integration to triple qualified lead generation.', color: 'text-secondary' },
]

export const techCategories: TechCategory[] = [
  {
    icon: 'code',
    title: 'Frontend',
    description: 'Modern, performant user interfaces',
    color: 'text-primary',
    techs: [
      { name: 'React', icon: '⚛' },
      { name: 'Next.js', icon: '▲' },
      { name: 'TypeScript', icon: 'TS' },
      { name: 'Tailwind', icon: '🌊' },
      { name: 'Vue', icon: 'V' },
      { name: 'Flutter', icon: '🦋' },
    ],
  },
  {
    icon: 'dns',
    title: 'Backend',
    description: 'Scalable APIs and microservices',
    color: 'text-secondary',
    techs: [
      { name: 'Node.js', icon: '🟢' },
      { name: 'Python', icon: '🐍' },
      { name: 'Go', icon: '🔵' },
      { name: 'PostgreSQL', icon: '🐘' },
      { name: 'Redis', icon: '🔴' },
      { name: 'GraphQL', icon: '◈' },
    ],
  },
  {
    icon: 'cloud',
    title: 'Cloud & DevOps',
    description: 'Infrastructure that scales globally',
    color: 'text-primary',
    techs: [
      { name: 'AWS', icon: '☁' },
      { name: 'GCP', icon: 'G' },
      { name: 'Docker', icon: '🐳' },
      { name: 'Kubernetes', icon: '⎈' },
      { name: 'Terraform', icon: '⬡' },
      { name: 'GitHub Actions', icon: '⚙' },
    ],
  },
  {
    icon: 'smart_toy',
    title: 'AI & Machine Learning',
    description: 'Intelligent automation and insights',
    color: 'text-secondary',
    techs: [
      { name: 'OpenAI', icon: '🤖' },
      { name: 'TensorFlow', icon: '🧠' },
      { name: 'LangChain', icon: '🔗' },
      { name: 'Pinecone', icon: '🌲' },
      { name: 'Hugging Face', icon: '🤗' },
      { name: 'MLflow', icon: '📊' },
    ],
  },
]

export const networkNodes: NetworkNode[] = [
  { city: 'New York', x: 180, y: 130 },
  { city: 'Dubai', x: 440, y: 150 },
  { city: 'Lahore', x: 510, y: 130 },
]

export const networkConnections: NetworkConnection[] = [
  { from: 0, to: 1 },
  { from: 1, to: 2 },
  { from: 0, to: 2 },
]
