export interface Stat {
  target: number
  suffix: string
  label: string
}

export const homeStats: Stat[] = [
  { target: 10, suffix: '+', label: 'Years in Market' },
  { target: 250, suffix: '+', label: 'Expert Engineers' },
  { target: 500, suffix: '+', label: 'Projects Delivered' },
  { target: 99, suffix: '%', label: 'Satisfied Clients' },
]
