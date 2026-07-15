export interface ContactChannel {
  icon: string
  label: string
  value: string
  isLink?: boolean
}

export const contactChannels: ContactChannel[] = [
  { icon: 'terminal', label: 'Architecture Desk', value: '+92 321 8819634' },
  { icon: 'alternate_email', label: 'Inquiry Node', value: 'info@nexteksol.com', isLink: true },
  { icon: 'location_on', label: 'Headquarters', value: 'Zee Heights, International Market, M Block Model Town, Lahore' },
]

export const INQUIRY_EMAIL = 'umairshafi737@gmail.com'
export const SUBJECT_LINE = 'Inquiry Request from NextekSol Website'
