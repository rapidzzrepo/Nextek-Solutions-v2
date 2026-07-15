export interface Industry {
  name: string
  subtitle: string
  title: string
  colorClass: string
  borderClass: string
  problem: string
  solution: string
}

export const industries: Industry[] = [
  {
    name: 'Fintech',
    subtitle: 'Solving high-frequency processing challenges.',
    title: 'Fintech Resilience',
    colorClass: 'text-primary-fixed-dim',
    borderClass: 'border-primary',
    problem: 'Inconsistent latency in cross-border settlements leading to significant liquidity risk.',
    solution: 'We architected a distributed event-driven ledger that reduced finality times from 4 hours to 12 seconds.',
  },
  {
    name: 'Healthcare',
    subtitle: 'Bridging legacy systems with modern AI.',
    title: 'Secure Healthcare',
    colorClass: 'text-secondary-fixed-dim',
    borderClass: 'border-secondary',
    problem: 'Siloed patient records and manual entry errors causing operational friction.',
    solution: 'Implemented a HIPAA-compliant unified data platform with automated NLP for record ingestion.',
  },
  {
    name: 'Logistics',
    subtitle: 'Optimizing supply chains with real-time data.',
    title: 'Smart Logistics',
    colorClass: 'text-tertiary-fixed-dim',
    borderClass: 'border-tertiary',
    problem: 'Lack of visibility into last-mile delivery and fuel inefficiencies.',
    solution: 'Digital twin simulation of the delivery network utilizing real-time GPS and weather data for routing.',
  },
]
