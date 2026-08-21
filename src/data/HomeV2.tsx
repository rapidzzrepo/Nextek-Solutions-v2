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
