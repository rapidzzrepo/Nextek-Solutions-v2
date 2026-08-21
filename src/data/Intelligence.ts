import type { ReactNode } from 'react'

export const heroBadge = 'Intelligence Hub'

export const heroTitle = {
  text: 'Engineering Intelligence ',
  highlight: 'at Scale',
}

export const heroDescription =
  'Access our repository of high-fidelity technical insights, architectural deep-dives, and performance protocols for the modern enterprise.'

export const heroImageUrl =
  'https://lh3.googleusercontent.com/aida-public/AB6AXuDAMNq-h-naE35JipZb9nW-xuxoagbAYRK-NW-Whm7c5b0amU0bBsHn0xd1oQyN-1TgecZqlJ7JWbpu3seQNAvFV9W2bUP6f0Ga1PeEeWZxERN6uyGAP99-RgQPceq3roRkZL3lwvhJPD_UtlY4LAsymmxj8hEHEoorxddBp-B5qRDDLhOmwCvKCEb50NfO_Zy2WcStRi9fHl3Dk8pWlvOoP1RLSLjgH6BJadullyjaQBEOIQd_PmA'

export interface InsightSection {
  heading: string
  text: string | ReactNode
}

export interface InsightStat {
  value: string
  label: string
  sublabel: string
}

export interface Insight {
  badge: string
  badgeColor: string
  title: string
  imageUrl: string
  imageAlt: string
  sections: InsightSection[]
  stats?: InsightStat
}

export const insights: Insight[] = [
  {
    badge: 'Design Engineering',
    badgeColor: 'bg-secondary',
    title: 'Atomic Intelligence',
    imageUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuD_6lX-gS3LQwnnplY0r5fiH9mShBWm72sAOg1AX_rLWjnfShVibv9EChccSULlb3gnMTBcmS7GNAEUPeTZWWAUl5V1RnFWFU3ewVftQ8ebJOW29vAnpijaxjJIjHrQZ_OEqSnHxUIjKGS1y5bOKldEwUpdFGhyAIH42MV3wYUwb-r4pOchLVG-5QVIpBTJnqFRwKFhrvTQJhZ524lseeu3Luv4good6HBildmUERTeHdnvkF9E_jg',
    imageAlt: 'Atomic intelligence visualization',
    sections: [
      {
        heading: 'Context',
        text: 'The shift from static component libraries to generative UI frameworks driven by user intent.',
      },
      {
        heading: 'Core Concept',
        text: 'Tokenizing interaction patterns to allow AI models to compose interfaces in real-time without latency.',
      },
    ],
    stats: {
      value: '65% faster',
      label: 'Impact',
      sublabel: 'Reduction in production UI deployment cycles.',
    },
  },
  {
    badge: 'Infrastructure',
    badgeColor: 'bg-tertiary',
    title: 'The Sovereign Cloud: Beyond the Big Three',
    imageUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCSGLWhUXtwk6V7IjotGTtTDZyJ65gxSN93K2zp-SK_93IB3SPi2nGIoIVB7zlq4oA8asUQkxIE9TBGTrUKEThTS9ciCIr0ABRVwJo9klI0VBNXxbcjg1dCEmrDIfNT0zO-spDhTuieKjcDVQz1InButLXHyuO6Oa4gYtqo62k9RLerGVPP3YkKt27laCqDjn449C_zsPp94XrsyYTxdXAzMCS6A6Z-ut4ByISWy5D0PcwTDTggMnc',
    imageAlt: 'Sovereign cloud infrastructure',
    sections: [
      {
        heading: 'The Protocol',
        text: 'A deep dive into decentralizing enterprise data through localized clusters and Zero-Trust orchestration.',
      },
    ],
    stats: {
      value: 'Zero Latency',
      label: '',
      sublabel: 'Regional orchestration target.',
    },
  },
  {
    badge: 'Applied ML',
    badgeColor: 'bg-primary',
    title: 'LLMs in Production: A Latency Survival Guide',
    imageUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAAYWJ6BuwcLd2u2QK8LBXbBVVpHJFR51Sn26tMk9cqhLhwrrCxsWexnRkh670fGiLNBM7PVbqCeIbB98cOy47oTiSGwd_Bk3v0hqsLDRde3ltOC66uSJyJ5SSFvpH9PO2D_vE6KKCL18h_TY7KtgScYDQPY8uiAqWRlHr4ci5PkcQyPpVpfTS7yUbPS5TZu-EuA_zaH9do8E0vx1SvqEo53eKS9kV0DC8WQRIpeRNmqqxty3eTpao1itG4Tox7tVq4eAenkhOwOTqd',
    imageAlt: 'LLM production latency guide',
    sections: [
      {
        heading: 'The Analysis',
        text: 'Optimizing token throughput and inferencing costs for large-scale enterprise deployments without sacrificing reasoning quality.',
      },
      {
        heading: 'Key Insight',
        text: 'Implementing hierarchical caching and model-distillation protocols for sub-millisecond responsiveness.',
      },
    ],
    stats: {
      value: '<200ms',
      label: 'Token-to-User',
      sublabel: 'New benchmark for high-fidelity reasoning response.',
    },
  },
]

export interface Testimonial {
  quote: string
  name: string
  role: string
  avatar?: string
  initials?: string
}

export const testimonials: Testimonial[] = [
  {
    quote:
      '"NT Sol didn\'t just provide us a service, they literally architected our whole transformation. their engineering prescision and refusal to settle for good enough is what sets them apart from every other firm we\'ve worked with."',
    name: 'Marcus Vancity',
    role: 'CTO, Global Infra Dynamics',
    avatar:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuA6s6uW6qR9vuh-yt3pllg9xhujcRQmOQqbB2UuW2u44V97MmVDYwm139_kXca9Bnmq-OPBbQBIxEvsp3Zk-tQq4q8Ik8Dvk3Ryf1ZSP2Ir2dtn5zFf4wGgakXtZKznWkb__azlcm1krGtIKGsOa6z3vdJm9w7XIei3qPRQZ_ew2rOTLKJmPALqJGI2Kma1rG3w12myZRXAs9Zh82mqSacOFUi2B0LqXkH-_oCpf9Aw4Puv6MpqhuY',
  },
  {
    quote:
      '"the level of technical rigor Nextek Sol brought to our cloud migration was unprecidented. they didnt just move our workloads, they optimized our entire cost to performance ratio."',
    name: 'Sarah Chen',
    role: 'Head of Platform, FinStream',
    initials: 'SC',
  },
  {
    quote:
      '"architecting for 99.999% availability is a massive challenge. NT Sol delivered a resilient infrastructure that has weathered every peak without a single milisecond of downtime."',
    name: 'David Vance',
    role: 'VP Infrastructure, Global Connect',
    initials: 'DV',
  },
]

export interface ResultStat {
  icon: string
  value: string
  label: string
}

export const resultStats: ResultStat[] = [
  { icon: 'rocket_launch', value: '140+', label: 'Deployments' },
  { icon: 'verified', value: '99.9', label: 'Uptime %' },
  { icon: 'speed', value: '12ms', label: 'Avg Latency' },
  { icon: 'military_tech', value: '15', label: 'Patents Issued' },
]

export const ctaTitle = 'Ready to engineer your next horizon?'

export const ctaButtonText = 'Subscribe to our Deep-Tech Insights'
