import { type ReactNode } from 'react'

export interface NavItem {
  label: string
  path: string
}

export interface StatItem {
  target: number
  suffix: string
  label: string
}

export interface ServiceCard {
  icon: string
  title: string
  description: string
  href?: string
}

export interface IndustryTab {
  title: string
  description: string
  problem: string
  solution: string
  accentColor: string
}

export interface ProductShowcase {
  number: string
  title: string
  description: string
  features: string[]
  accentColor: string
  imageUrl: string
  imageAlt: string
}

export interface Testimonial {
  quote: string
  name: string
  role: string
  avatar?: string
  initials?: string
}

export interface CaseStudyCard {
  key: string
  category: string
  title: string
  description: string
  author: string
  authorRole?: string
  readTime: string
  imageUrl: string
  imageAlt: string
  authorAvatar?: string
}

export interface FeaturedStudy {
  title: string
  description: string
  author: string
  authorRole: string
  readTime: string
  imageUrl: string
  imageAlt: string
  authorAvatar?: string
}

export interface Leader {
  name: string
  role: string
  imageUrl: string
  imageAlt: string
  github?: string
  linkedin?: string
}

export interface OfficeHub {
  city: string
  label: string
  code: string
  address: string[]
  email: string
  phone: string
  timezone: string
  timezoneLabel: string
}

export interface Insight {
  category: string
  title: string
  excerpt: string
  author: string
  readTime: string
  imageUrl: string
  imageAlt: string
  accentColor: string
}

export interface TechItem {
  icon: string
  label: string
}

export interface Certification {
  icon: string
  label: string
}

export interface PartnerLogo {
  src: string
  alt: string
}

export interface BentoCard {
  icon: string
  title: string
  description: string
}

export interface SecurityItem {
  icon: string
  label: string
}

export interface PillarFeature {
  icon: string
  text: string
}

export interface EngineeringStep {
  number: string
  title: string
  description: string
}

export interface DomainCard {
  icon: string
  title: string
  description: string
}

export type IconSymbol = ReactNode

export interface LayoutProps {
  children: ReactNode
}
