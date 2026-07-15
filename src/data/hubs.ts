export interface Hub {
  city: string
  region: string
  code: string
  address: string[]
  email: string
  phone: string
  timezone: string
  tzLabel: string
}

export const hubs: Hub[] = [
  {
    city: 'New York',
    region: 'Americas Primary Node',
    code: 'HQ-01',
    address: ['6611 Comet Cir Apt 402', 'Springfield, VA 22150', 'United States'],
    email: 'info@nexteksol.com',
    phone: '+1 (212) 555-0198',
    timezone: 'America/New_York',
    tzLabel: 'EST',
  },
  {
    city: 'Lahore',
    region: 'South Asia Primary Node',
    code: 'HQ-02',
    address: ['Zee Heights, International Market', 'M Block Model Town, Lahore', 'Pakistan'],
    email: 'info@nexteksol.com',
    phone: '+92 42 35218902',
    timezone: 'Asia/Karachi',
    tzLabel: 'PKT',
  },
  {
    city: 'Dubai',
    region: 'MEA Primary Node',
    code: 'HQ-03',
    address: ['Office#306, 3rd Floor, Zakir Center', 'Abu Hail Area, Dubai', 'UAE'],
    email: 'info@nexteksol.com',
    phone: '+971 56 462 1703',
    timezone: 'Asia/Dubai',
    tzLabel: 'GST',
  },
]
