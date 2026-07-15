export interface Testimonial {
  quote: string
  author: string
  role: string
  initials?: string
  avatarUrl?: string
}

export const testimonials: Testimonial[] = [
  {
    quote: "Nextek Sol didn't just provide a service, they architected a total transformation. Their engineering precision and refusal to settle for good enough is what differentiates them from every other firm we've ever worked with.",
    author: 'Marcus Vancity',
    role: 'CTO, Global Infra Dynamics',
    avatarUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA6s6uW6qR9vuh-yt3pllg9xhujcRQmOQqbB2UuW2u44V97MmVDYwm139_kXca9Bnmq-OPBbQBIxEvsp3Zk-tQq4q8Ik8Dvk3Ryf1ZSP2Ir2dtn5zFf4wGgakXtZKznWkb__azlcm1krGtIKGsOa6z3vdJm9w7XIei3qPRQZ_ew2rOTLKJmPALqJGI2Kma1rG3w12myZRXAs9Zh82mqSacOFUi2B0LqXkH-_oCpf9Aw4Puv6MpqhuY',
  },
  {
    quote: "The level of technical rigor Nextek Sol brought to our cloud migration was unprecedented. They didn't just move our workloads, they optimized our entire cost to performance ratio.",
    author: 'Sarah Chen',
    role: 'Head of Platform, FinStream',
    initials: 'SC',
  },
  {
    quote: "Architecting for 99.999% availability is a massive challenge. Nextek Sol delivered a resilient infrastructure that has weathered every peak without a single millisecond of downtime.",
    author: 'David Vance',
    role: 'VP Infrastructure, Global Connect',
    initials: 'DV',
  },
]
