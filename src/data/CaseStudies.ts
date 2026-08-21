export interface FeaturedStudy {
  title: string
  description: string
  author: string
  authorRole: string
  readTime: string
  imageUrl: string
  imageAlt: string
  authorAvatar: string
}

export interface CaseStudyCard {
  key: string
  category: string
  title: string
  description: string
  author: string
  readTime: string
  imageUrl: string
  imageAlt: string
  authorAvatar?: string
}

export interface StudySwapData {
  title: string
  desc: string
  author: string
  authorRole: string
  time: string
  img: string
}

export const featuredStudy: FeaturedStudy = {
  title: 'Predictive Health: MRI Diagnostic Acceleration',
  description:
    'By deploying a custom-trained computer vision model at the edge, we reduced MRI diagnostic turnaround times from 48 hours to just 15 minutes. This life-saving integration allows radiologists to prioritize critical cases in real-time, improving patient outcomes across 12 hospitals.',
  author: 'Jawad Khan',
  authorRole: 'Chief Technology Strategist',
  readTime: '6 min read',
  imageUrl:
    'https://lh3.googleusercontent.com/aida-public/AB6AXuARF9G8_y6k6Vgpx295OH8n9RA5KsCislaSZYy8lFK0DJVeqwGoP4OZg1gQNvKGRy2UEqDIBoYKqA0kz3ltbv6I2Unt7wMbv5RRWsUhoa5OhR1IOm9IqIvNN7MxUsPO8OYEpuAvokgZuDGd1Y5JWJt4OIZQfI9oJltKOPJnHNEsZ0r2a2OTGotCG-oD5T6BC2ira1EC-Q4hOlY6Kt88yWhGAUAL0J5dy4kYP7iifsea9ESUx6vw-Kw',
  imageAlt:
    'A sophisticated 3D abstract visualization representing complex network data architecture. Interconnected glass-like nodes and crystalline structures glow with faint purple and blue luminescence. The scene is rendered with deep depth of field against a pristine white background, conveying a sense of order, precision, and high-level software engineering.',
  authorAvatar:
    'https://lh3.googleusercontent.com/aida-public/AB6AXuC9O3jZkB470bcrICE0li35VcQGFfqBSRYPpQiMvANJLVR4IPjMBEd-bAdVeFBPYDdkCpXoFeMX9U7i9S-qTUgV-f3b4Zwix1iAaPYSBLPKzsV4Iv3ACZpJp3C8m-aagA4jxMoeLTtCM1WQ3inG-5KhGbY3B4F-aRjVJLTGCRaza_ZYl7fCxPiUBAH2dcV7fBSJurXjly2mR_zAD0Xb4Ei6fxAg1HldW4rip55Bf4cUa5ezWd7XiiA',
}

export const categories = [
  'All Case Studies',
  'Fintech',
  'Healthcare',
  'Logistics',
  'Digital Marketing',
] as const

export const studies: CaseStudyCard[] = [
  {
    key: 'sovereign',
    category: 'Logistics',
    title: 'Sovereign Cloud: Migrating 400TB of Sensitive Healthcare Data',
    description:
      'How we built a fluid design language that adapts to generative output unpredictability.',
    author: 'Ali Hasnain',
    readTime: '8 min read',
    imageUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCYy4CDACf82FrzB_rfwuAklVJKfjlT3a3zQJlGWH70ctwzDssyExgM11dvFadBrt1zdMkDfig6cCX12eLmnUzUZ3zIahbE86xkxY2itRY44Yil5H9Q8ADgjQb_G3uUEAK0P4_iw9sZZ9QwLWv98DGita6pVl8edywezu81EHj4d17c-8UsnW7Kdjm3uI-L3GrLJwAtiwIQqWrALamxmkaDBFgWRCxpRnryYnCdJZccS8e36T8DtRA',
    imageAlt:
      'A clean, minimalist workspace view from above featuring a high-end laptop, a sleek tablet displaying a design system UI kit, and a single cup of espresso. The lighting is soft morning sun from a side window, highlighting high-contrast purple accents on the screen. The aesthetic is professional, modern, and impeccably organized.',
    authorAvatar:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDmdxhYKwMy4bELOlPedt5gPaG9vssuFg9U_e-K9cGbPdtVCZ7xFqclKnQKAJFS9g5Y-l-rs8QGIc8YTtTSK4whIuH5KXgIJ5AdAqJqQy_4xxwPboDP8Y6Jk8SUi_P3uoH9yPlLgcezDaq7K__lTCx8bHuznwmYzMez_Y0qphJfY46DI_pEA4AvbM9q2EbfIZYfdPdeu2KM3S0ojV3m1NQKTNPBtZb7TXZ-mTaZMaRUw5Qi8l2D3hs',
  },
  {
    key: 'atlas',
    category: 'Fintech',
    title: 'Atlas Robotics: 12ms Latency Control for Industrial Fleets',
    description:
      'Why enterprise compliance is driving a return to localized, hyper-secure private cloud stacks.',
    author: 'Muhammad Umair',
    readTime: '12 min read',
    imageUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuB8XRzCYpojQJ3XKcVNugyatYXjMBLR3m5Yz1010a6rZpT3bbM0CnnXw1SzccuRwqhcUa7V2yqjVxSTzUaOrMjT781SnPzjRHV4wewX_89nH4R-Mu_GTgtVV3QHQMGfgOnxxF8uxJy__q4eWWlEo-PVvPe5bLiFL3iJbLYRdqpFq0JfTYD-EQ8NTeRvmy6SiW5yQhS7NlaEFRyZrwoKUtL9dRsjXq68IojzN4U0NSuuBz13l1JbxeA',
    imageAlt:
      'A high-tech server room interior rendered with an artistic perspective. Blue and purple neon lights trace the edges of server racks, creating leading lines into the distance. The floor is polished and reflective, mirroring the complex electronic infrastructure. The atmosphere is quiet, powerful, and technologically advanced.',
    authorAvatar:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuB3wIhFd-amjGRP2Gi8wVks9rvcxnOl6oMpmlJwev-ku_SLz5_YiPc9H3huT8DEaVdZ2ug_sazJC1UnIcPas4wBj956hjDoED0fSsPL7aUqR1edEt1R4UHO1WFyEL3IlB0a8hvI7hMxhYZvBrz7coXW99wv0dhv2wUCu08IjuYRwovwnSNP5cyI5fcnXKRhB1bCIOOKAZZiqHx5i4MKsseLdKAS2Hy2N0ObxtWyHBrm_MtphHeDddc',
  },
  {
    key: 'neobank',
    category: 'Fintech',
    title: 'NeoBank Scale: Supporting 50k Transactions Per Second',
    description:
      'Optimization techniques for deploying large models without sacrificing user experience speed.',
    author: 'Uzair Rahim',
    readTime: '10 min read',
    imageUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBydwNv-aEKyVxcguvHSipCE_EdSrLdoupvuxR-BxvkGsvTzLSyzY9MK5LD-Tn2qwSupCZE_hPh5r6TCWhqGWtG0NEE2Dj5J96lpI_Omd2XkN3REWG4-MG3t4JEhhcJOQJ0-fB0HEsvTXA9r6IftnNp8kbSmAdcnz9VhFQn-7LYNAOPnEo4_BsQIqE5-lIO1KgaOPwiC67q0DwNXDdut9R4j1xb16i-XVcSd3RtTlEPs8Vg_GlSiiA',
    imageAlt:
      'A conceptual digital art piece of a neural network being constructed by microscopic light particles. The light trails are vibrant purple and deep blue, forming a complex web of intelligence. The background is a deep charcoal, making the electric light trails pop with intensity and clarity. A metaphor for deep learning and AI innovation.',
    authorAvatar:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuD28ScxEcdpyUEyRInGEpNcpcmpfBiC-2PaZ10Aq8gr6Wrg1gtlNlz4VsklZl8QkZxFKqqc6mnpuY4scEK5roSKpRUCw2rW9crUtOtFuWSYs532SSdyCLqSLFRGB7Z4kc3LLvffyi7Hds8WnbbBa1ykYqnYiRkqLGBJdXkm6P4nLtqL0rScU-kyFKXMruZj0EGzbVYBLUtIuhR6NNlmR_XJKDAWQuYspmsbs01HDkPtwKWhYC1-P1Y',
  },
  {
    key: 'health',
    category: 'Healthcare',
    title: 'Predictive Health: Deploying MRI Diagnostics at Scale',
    description:
      'How to hire and retain elite technical talent in a post-geographic labor market.',
    author: 'Jawad Khan',
    readTime: '6 min read',
    imageUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuARF9G8_y6k6Vgpx295OH8n9RA5KsCislaSZYy8lFK0DJVeqwGoP4OZg1gQNvKGRy2UEqDIBoYKqA0kz3ltbv6I2Unt7wMbv5RRWsUhoa5OhR1IOm9IqIvNN7MxUsPO8OYEpuAvokgZuDGd1Y5JWJt4OIZQfI9oJltKOPJnHNEsZ0r2a2OTGotCG-oD5T6BC2ira1EC-Q4hOlY6Kt88yWhGAUAL0J5dy4kYP7iifsea9ESUx6vw-Kw',
    imageAlt:
      'Close-up of a high-end mechanical keyboard and a coding screen with syntax-highlighted code in vibrant purples and blues. The lighting is low and atmospheric, focusing on the precision of the hardware and the intellectual labor of software engineering. Clean, sharp lines and expensive tech aesthetic.',
    authorAvatar:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBxMMRL2YW4r1t1gsn0rPLxnYCJeglhHQzudypDtypgAtDtz2yQKsRYX_PsuwtuVugLo3hzjw5Iz-Cyb6yqbaMDq0R6LWx18BRX3MQly0bdNqzR_0pKDdu1xzSLX6oo9-gMP-xZRoZaWztSDd5IQ58pQ3lzqG0Fzloz8VjLZ07ZEByiXmh3f-iQTC0TOJvlN0RBjg2vmItSkmnoJqCdQzKv1EwPb7SH5v-BytGINjOQIJUV0fSd10U',
  },
  {
    key: 'automation',
    category: 'Logistics',
    title: 'Cognitive Automation: Streamlining 10k Customer Workflows',
    description:
      'Managing independent deployment cycles across diverse product teams without breaking the UI.',
    author: 'Ali Hasnain',
    readTime: '15 min read',
    imageUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuASJopP5i9cYdIs9FVAtuwSDoKX1sDHPIInc6svh8aRHUtoqI_WaT9YUIKaHyMwCdAIONKChLK_8SRhHfulFGoQm_xVXpxQJOZrNVfvhki087ECd-bWARxsnif5eCCRQ9X6nSX5TxLBU5DLyyroeaUWj0igv9hWlA1kw1difGVaF7rPFBf1xq5SXgJNIbJ9rUoAI4CwqiYZL4M1DRmy0olWuZ-2MtFuUrWR99tngz6IDnTIZHwODU8',
    imageAlt:
      'Abstract geometric landscape made of white porcelain blocks and thin purple laser lines. The composition is asymmetrical and editorial, resembling an architectural model of a futuristic city. The lighting is very bright and clean, casting soft, long shadows. Represents structured complexity and modern planning.',
    authorAvatar:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCgq0vBOzy7YY9tjhJG8WSzhw4W9nVaoRVa__yTpyenKxiBcrz0R-gb9DWyeUyEqeckkh1tM44EXIafYK4aY9saJMrttIbLlPYOO8DOydrtnVhsZbbMxgH6iGfoR5uExPTmLo2nkP5QQLTavSpMkZfkXXrZObpJPrhJQVlP2CLkw11Twc60QRwwo_pvssYyjDFXuBdosMK4gD7Vz_-IgoHAT0smrxMAcim0orKgpAGgoLklxMmBr8s',
  },
  {
    key: 'mesh',
    category: 'Fintech',
    title: 'Secure Mesh: Encrypted Drone Communication for High-Risk Zones',
    description:
      'Training models on decentralized data without ever moving it from the edge device.',
    author: 'Muhammad Umair',
    readTime: '9 min read',
    imageUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDTtvbB16OK768ggsTsntYDOgTwh9H2lTFeR1bB08VtA1RWF8Rs90owRKKpMsPdaLvg36X8BlUuHhKs4DXYiFURioazN0GGstD0NA9ZbwQkyQFO56gl608-nM-fqkuyiDSXGUVhSKjedzlE-Ur1xlfwjsLPAzkIzTkAuRS_jcGzQZITv8ARgc1U50hoeoUglYkJQTz8crKOy-MQwfAYPi8fjiBesg7_o-D60oMhOn3A5-ip3kPjOhQ',
    imageAlt:
      'Visualization of a secure data vault using abstract light rays and layered glass plates. The light is focused on a central point, symbolizing encryption and security. The color palette is dominated by tech-blue and deep navy, with sharp white light highlights. Minimalist, powerful, and secure aesthetic.',
    authorAvatar:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBwbfIHKR02f_Q4ZGlvxLrh0MHBsqLfO6p5Q1MiyNzebFvTGBFVy7vVHNvdZ7YIHIV1xKWHnh389dxb_F5lq80KG0RXBtyXfTV-daQiHlbPXvc1w0EoU4e0oqDrNe_WSWlxZe9_IKsAEXWUVB0vNvy_WV3muLN8T9hXGSVp9QV4OX2JGMBdL3SF-mV4TOSVugYwUgCoDA0dybl3CFnxmYGItd4YUeNcc5n35m1aFmu1rPMtDpRZ6L4',
  },
  {
    key: 'retailmedia',
    category: 'Digital Marketing',
    title: 'Retail Rocket: 312% ROAS with AI-Powered Ad Targeting',
    description:
      'How a first-party data CDP and predictive audiences cut acquisition costs by 41%.',
    author: 'Ali Hasnain',
    readTime: '7 min read',
    imageUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuD_6lX-gS3LQwnnplY0r5fiH9mShBWm72sAOg1AX_rLWjnfShVibv9EChccSULlb3gnMTBcmS7GNAEUPeTZWWAUl5V1RnFWFU3ewVftQ8ebJOW29vAnpijaxjJIjHrQZ_OEqSnHxUIjKGS1y5bOKldEwUpdFGhyAIH42MV3wYUwb-r4pOchLVG-5QVIpBTJnqFRwKFhrvTQJhZ524lseeu3Luv4good6HBildmUERTeHdnvkF9E_jg',
    imageAlt:
      'A modern marketing analytics dashboard glowing on a large monitor in a dark studio. Vibrant purple and blue charts rise sharply upward, visualizing exponential return on ad spend. The scene is sleek, data-driven, and high-performance.',
    authorAvatar:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDmdxhYKwMy4bELOlPedt5gPaG9vssuFg9U_e-K9cGbPdtVCZ7xFqclKnQKAJFS9g5Y-l-rs8QGIc8YTtTSK4whIuH5KXgIJ5AdAqJqQy_4xxwPboDP8Y6Jk8SUi_P3uoH9yPlLgcezDaq7K__lTCx8bHuznwmYzMez_Y0qphJfY46DI_pEA4AvbM9q2EbfIZYfdPdeu2KM3S0ojV3m1NQKTNPBtZb7TXZ-mTaZMaRUw5Qi8l2D3hs',
  },
  {
    key: 'seosurge',
    category: 'Digital Marketing',
    title: 'SEO Surge: 480% Organic Growth for a B2B SaaS Platform',
    description:
      'A technical SEO overhaul and programmatic content engine that tripled demo bookings.',
    author: 'Uzair Rahim',
    readTime: '11 min read',
    imageUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDj0WWkwnt5Py1bSo5sELqq8me4AwFnpLughZWogTZtIjck31rS3X86zCQj7bSsqkwJVI6vKFv74cgOwxvKWVvNxlMQK_PN2AhvEIfJCx1h6TiusrGWUc5UiacYVcYg9Jaqul_84SniU6O-uQsVpuHI7djuBSYjd7m22Ik8EUQwxh0sUxPDAcvsNGVh5UPjgz5prUbfTrIUG5qHPSRarIsCUJlhFQNIDVMleVhOSDTHBSKqCKNNjCg',
    imageAlt:
      'An abstract visualization of organic search growth, with luminous purple light trails climbing like a rising graph through a clean white space. Minimalist, editorial, and optimistic, conveying compounding traffic growth.',
    authorAvatar:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuD28ScxEcdpyUEyRInGEpNcpcmpfBiC-2PaZ10Aq8gr6Wrg1gtlNlz4VsklZl8QkZxFKqqc6mnpuY4scEK5roSKpRUCw2rW9crUtOtFuWSYs532SSdyCLqSLFRGB7Z4kc3LLvffyi7Hds8WnbbBa1ykYqnYiRkqLGBJdXkm6P4nLtqL0rScU-kyFKXMruZj0EGzbVYBLUtIuhR6NNlmR_XJKDAWQuYspmsbs01HDkPtwKWhYC1-P1Y',
  },
  {
    key: 'viralloops',
    category: 'Digital Marketing',
    title: 'Viral Velocity: 25M Impressions from a Single Launch Campaign',
    description:
      'Engineering a multi-channel launch playbook that converted reach into 18k signups.',
    author: 'Muhammad Umair',
    readTime: '9 min read',
    imageUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCSGLWhUXtwk6V7IjotGTtTDZyJ65gxSN93K2zp-SK_93IB3SPi2nGIoIVB7zlq4oA8asUQkxIE9TBGTrUKEThTS9ciCIr0ABRVwJo9klI0VBNXxbcjg1dCEmrDIfNT0zO-spDhTuieKjcDVQz1InButLXHyuO6Oa4gYtqo62k9RLerGVPP3YkKt27laCqDjn449C_zsPp94XrsyYTxdXAzMCS6A6Z-ut4ByISWy5D0PcwTDTggMnc',
    imageAlt:
      'A dynamic burst of interconnected social media nodes radiating outward in electric purple and blue, symbolizing a viral multi-channel campaign spreading across networks. Energetic, modern, and precise.',
    authorAvatar:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuB3wIhFd-amjGRP2Gi8wVks9rvcxnOl6oMpmlJwev-ku_SLz5_YiPc9H3huT8DEaVdZ2ug_sazJC1UnIcPas4wBj956hjDoED0fSsPL7aUqR1edEt1R4UHO1WFyEL3IlB0a8hvI7hMxhYZvBrz7coXW99wv0dhv2wUCu08IjuYRwovwnSNP5cyI5fcnXKRhB1bCIOOKAZZiqHx5i4MKsseLdKAS2Hy2N0ObxtWyHBrm_MtphHeDddc',
  },
]

export const studySwapData: Record<string, StudySwapData> = {
  sovereign: {
    title: 'Sovereign Cloud: Migrating 400TB of Sensitive Healthcare Data',
    desc: 'How we built a fluid design language that adapts to generative output unpredictability.',
    author: 'Marcus Chen',
    authorRole: 'Lead Solutions Architect',
    time: '8 min read',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCYy4CDACf82FrzB_rfwuAklVJKfjlT3a3zQJlGWH70ctwzDssyExgM11dvFadBrt1zdMkDfig6cCX12eLmnUzUZ3zIahbE86xkxY2itRY44Yil5H9Q8ADgjQb_G3uUEAK0P4_iw9sZZ9QwLWv98DGita6pVl8edywezu81EHj4d17c-8UsnW7Kdjm3uI-L3GrLJwAtiwIQqWrALamxmkaDBFgWRCxpRnryYnCdJZccS8e36T8DtRA',
  },
  atlas: {
    title: 'Atlas Robotics: Autonomous Fleet Orchestration',
    desc: 'Our team delivered a real-time control layer for a fleet of 500+ autonomous mobile robots in an 800,000 sq ft fulfillment center. The solution reduced collision-related downtime to zero and improved overall pathing efficiency by 22% through advanced predictive modeling.',
    author: 'David Vance',
    authorRole: 'Principal Engineer',
    time: '12 min read',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB8XRzCYpojQJ3XKcVNugyatYXjMBLR3m5Yz1010a6rZpT3bbM0CnnXw1SzccuRwqhcUa7V2yqjVxSTzUaOrMjT781SnPzjRHV4wewX_89nH4R-Mu_GTgtVV3QHQMGfgOnxxF8uxJy__q4eWWlEo-PVvPe5bLiFL3iJbLYRdqpFq0JfTYD-EQ8NTeRvmy6SiW5yQhS7NlaEFRyZrwoKUtL9dRsjXq68IojzN4U0NSuuBz13l1JbxeA',
  },
  neobank: {
    title: 'NeoBank Scale: Optimizing High-Frequency Ledgers',
    desc: 'We architected a distributed ledger system for a global Neobank that successfully handles 50,000 transactions per second with sub-millisecond finality. This overhaul eliminated previous scaling bottlenecks and enabled 300% growth in their active user base within six months.',
    author: 'Sarah Lopez',
    authorRole: 'Director of Engineering',
    time: '10 min read',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBydwNv-aEKyVxcguvHSipCE_EdSrLdoupvuxR-BxvkGsvTzLSyzY9MK5LD-Tn2qwSupCZE_hPh5r6TCWhqGWtG0NEE2Dj5J96lpI_Omd2XkN3REWG4-MG3t4JEhhcJOQJ0-fB0HEsvTXA9r6IftnNp8kbSmAdcnz9VhFQn-7LYNAOPnEo4_BsQIqE5-lIO1KgaOPwiC67q0DwNXDdut9R4j1xb16i-XVcSd3RtTlEPs8Vg_GlSiiA',
  },
  health: {
    title: 'Predictive Health: MRI Diagnostic Acceleration',
    desc: 'By deploying a custom-trained computer vision model at the edge, we reduced MRI diagnostic turnaround times from 48 hours to just 15 minutes. This life-saving integration allows radiologists to prioritize critical cases in real-time, improving patient outcomes across 12 hospitals.',
    author: 'Julian Rossi',
    authorRole: 'Chief Technology Strategist',
    time: '6 min read',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuARF9G8_y6k6Vgpx295OH8n9RA5KsCislaSZYy8lFK0DJVeqwGoP4OZg1gQNvKGRy2UEqDIBoYKqA0kz3ltbv6I2Unt7wMbv5RRWsUhoa5OhR1IOm9IqIvNN7MxUsPO8OYEpuAvokgZuDGd1Y5JWJt4OIZQfI9oJltKOPJnHNEsZ0r2a2OTGotCG-oD5T6BC2ira1EC-Q4hOlY6Kt88yWhGAUAL0J5dy4kYP7iifsea9ESUx6vw-Kw',
  },
  automation: {
    title: 'Cognitive Automation: Streamlining 10k Workflows',
    desc: 'We implemented a sovereign NLP engine that automates 85% of complex customer service inquiries for a global logistics provider. This reduced operational costs by $1.2M annually while maintaining a 98% customer satisfaction score through natural, context-aware interactions.',
    author: 'Ingrid Schmidt',
    authorRole: 'Head of Automation',
    time: '15 min read',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuASJopP5i9cYdIs9FVAtuwSDoKX1sDHPIInc6svh8aRHUtoqI_WaT9YUIKaHyMwCdAIONKChLK_8SRhHfulFGoQm_xVXpxQJOZrNVfvhki087ECd-bWARxsnif5eCCRQ9X6nSX5TxLBU5DLyyroeaUWj0igv9hWlA1kw1difGVaF7rPFBf1xq5SXgJNIbJ9rUoAI4CwqiYZL4M1DRmy0olWuZ-2MtFuUrWR99tngz6IDnTIZHwODU8',
  },
  mesh: {
    title: 'Secure Mesh: Encrypted Drone Communications',
    desc: 'Nextek engineered a quantum-resistant mesh network for autonomous drone swarms operating in high-interference environments. The protocol ensures absolute data integrity and link stability, even under active electronic countermeasures, protecting critical intelligence assets.',
    author: 'Hiroshi Sato',
    authorRole: 'Security Architect',
    time: '9 min read',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDTtvbB16OK768ggsTsntYDOgTwh9H2lTFeR1bB08VtA1RWF8Rs90owRKKpMsPdaLvg36X8BlUuHhKs4DXYiFURioazN0GGstD0NA9ZbwQkyQFO56gl608-nM-fqkuyiDSXGUVhSKjedzlE-Ur1xlfwjsLPAzkIzTkAuRS_jcGzQZITv8ARgc1U50hoeoUglYkJQTz8crKOy-MQwfAYPi8fjiBesg7_o-D60oMhOn3A5-ip3kPjOhQ',
  },
  retailmedia: {
    title: 'Retail Rocket: 312% ROAS with AI-Powered Ad Targeting',
    desc: "We rebuilt a fashion retailer's paid media engine around a first-party data CDP and predictive audience segments. Blended ROAS climbed from 2.4x to 7.5x within two quarters while customer acquisition costs dropped 41% across Google, Meta, and TikTok.",
    author: 'Ali Hasnain',
    authorRole: 'Head of Growth Marketing',
    time: '7 min read',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD_6lX-gS3LQwnnplY0r5fiH9mShBWm72sAOg1AX_rLWjnfShVibv9EChccSULlb3gnMTBcmS7GNAEUPeTZWWAUl5V1RnFWFU3ewVftQ8ebJOW29vAnpijaxjJIjHrQZ_OEqSnHxUIjKGS1y5bOKldEwUpdFGhyAIH42MV3wYUwb-r4pOchLVG-5QVIpBTJnqFRwKFhrvTQJhZ524lseeu3Luv4good6HBildmUERTeHdnvkF9E_jg',
  },
  seosurge: {
    title: 'SEO Surge: 480% Organic Growth for a B2B SaaS Platform',
    desc: 'Through a full technical SEO overhaul, Core Web Vitals remediation, and a programmatic content engine targeting 1,200 long-tail keywords, we grew organic sessions by 480% in nine months — tripling qualified demo bookings without increasing content headcount.',
    author: 'Uzair Rahim',
    authorRole: 'Director of Demand Generation',
    time: '11 min read',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDj0WWkwnt5Py1bSo5sELqq8me4AwFnpLughZWogTZtIjck31rS3X86zCQj7bSsqkwJVI6vKFv74cgOwxvKWVvNxlMQK_PN2AhvEIfJCx1h6TiusrGWUc5UiacYVcYg9Jaqul_84SniU6O-uQsVpuHI7djuBSYjd7m22Ik8EUQwxh0sUxPDAcvsNGVh5UPjgz5prUbfTrIUG5qHPSRarIsCUJlhFQNIDVMleVhOSDTHBSKqCKNNjCg',
  },
  viralloops: {
    title: 'Viral Velocity: 25M Impressions from a Single Launch Campaign',
    desc: 'We orchestrated a creator-led, multi-channel launch campaign combining short-form video, LinkedIn thought leadership, and retargeting loops. The campaign generated 25M impressions and converted reach into 18,000 trial signups at a 62% lower cost per acquisition than previous launches.',
    author: 'Muhammad Umair',
    authorRole: 'VP of Brand & Performance',
    time: '9 min read',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCSGLWhUXtwk6V7IjotGTtTDZyJ65gxSN93K2zp-SK_93IB3SPi2nGIoIVB7zlq4oA8asUQkxIE9TBGTrUKEThTS9ciCIr0ABRVwJo9klI0VBNXxbcjg1dCEmrDIfNT0zO-spDhTuieKjcDVQz1InButLXHyuO6Oa4gYtqo62k9RLerGVPP3YkKt27laCqDjn449C_zsPp94XrsyYTxdXAzMCS6A6Z-ut4ByISWy5D0PcwTDTggMnc',
  },
}

export const studyKeys = [
  'sovereign',
  'atlas',
  'neobank',
  'health',
  'automation',
  'mesh',
  'retailmedia',
  'seosurge',
  'viralloops',
]

export const newsletterTitle = 'Partner with Our Architects'
export const newsletterDescription =
  "Let's discuss your next mission-critical engineering challenge."
