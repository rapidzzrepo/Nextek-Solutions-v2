export const heroBadge = 'Inquiry Protocol 0.1'

export const heroTitle = {
  text: 'Architect Your ',
  highlight: 'Next System',
}

export const heroDescription =
  'Connect with our specialized engineering hubs to discuss mission-critical infrastructure, AI operations, or sovereign cloud architecture.'

export interface FormField {
  name: string
  label: string
  type: 'text' | 'email' | 'textarea'
  placeholder: string
  required: boolean
  halfWidth?: boolean
  rows?: number
}

export const formFields: FormField[] = [
  { name: 'first_name', label: 'First Name', type: 'text', placeholder: 'Jane', required: true, halfWidth: true },
  { name: 'last_name', label: 'Last Name', type: 'text', placeholder: 'Doe', required: true, halfWidth: true },
  { name: 'from_email', label: 'Work Email', type: 'email', placeholder: 'jane.doe@enterprise.com', required: true, halfWidth: true },
  { name: 'company', label: 'Organization', type: 'text', placeholder: 'Global Systems Inc.', required: false, halfWidth: true },
  { name: 'subject', label: 'System Domain', type: 'text', placeholder: 'e.g. AI Infrastucture, Quantum Security, Cloud Ops', required: true },
  { name: 'message', label: 'Technical Brief', type: 'textarea', placeholder: 'Outline your requirements and performance targets...', required: true, rows: 5 },
]

export interface ContactInfoItem {
  icon: string
  label: string
  value: string
  image?: string
  subValue?: string
}

export const contactInfo: ContactInfoItem[] = [
  { icon: 'terminal', label: 'Architecture Desk', value: '+92 321 8819634' },
  { icon: 'alternate_email', label: 'Inquiry Node', value: 'info@nexteksol.com' },
  { icon: 'location_on', label: 'Headquarters', value: 'Zee Heights, International Market, M Block Model Town, Lahore' },
  {
    icon: 'person',
    label: 'Head of Sales',
    value: 'Talha Rafi',
    image: '/Admin/Talha-Rafi.jpg',
    subValue: '+92 321 8819634',
  },
]

export interface OfficeHub {
  city: string
  label: string
  code: string
  addressLines: string[]
  email: string
  phone: string
  timezone: string
  timezoneLabel: string
}

export const hubs: OfficeHub[] = [
  {
    city: 'New York',
    label: 'Americas Primary Node',
    code: 'HQ-01',
    addressLines: ['6611 Comet Cir Apt 402', 'Springfield, VA 22150', 'United States'],
    email: 'info@nexteksol.com',
    phone: '+1 (212) 555-0198',
    timezone: 'America/New_York',
    timezoneLabel: 'EST',
  },
  {
    city: 'Lahore',
    label: 'South Asia Primary Node',
    code: 'HQ-02',
    addressLines: ['Zee Heights, International Market', 'M Block Model Town, Lahore', 'Pakistan'],
    email: 'info@nexteksol.com',
    phone: '+92 42 35218902',
    timezone: 'Asia/Karachi',
    timezoneLabel: 'PKT',
  },
  {
    city: 'Dubai',
    label: 'MEA Primary Node',
    code: 'HQ-03',
    addressLines: ['Office#306, 3rd Floor, Zakir Center', 'Abu Hail Area, Dubai', 'UAE'],
    email: 'info@nexteksol.com',
    phone: '+971 56 462 1703',
    timezone: 'Asia/Dubai',
    timezoneLabel: 'GST',
  },
]
