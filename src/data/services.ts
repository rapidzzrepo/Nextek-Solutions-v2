export interface Service {
  icon: string
  title: string
  description: string
}

export const services: Service[] = [
  { icon: 'psychology', title: 'AI & ML', description: 'Custom LLMs, predictive analytics, and neural network architectures optimized for performance.' },
  { icon: 'web', title: 'Enterprise Web', description: 'Scalable React and Next.js applications built for massive traffic and real-time synchronization.' },
  { icon: 'smartphone', title: 'Native Mobile', description: 'High-performance iOS and Android applications utilizing Swift and Kotlin native capabilities.' },
  { icon: 'cloud', title: 'Cloud Infrastructure', description: 'Serverless architectures, microservices orchestration, and cost-optimized multi-cloud strategies.' },
  { icon: 'design_services', title: 'UI/UX Strategy', description: 'Technical-first design systems that prioritize user flow and brand identity without compromising code integrity.' },
  { icon: 'terminal', title: 'Elite DevOps', description: 'Automated CI/CD pipelines, containerization, and zero-downtime deployment workflows.' },
]
