export interface CaseStudy {
  key: string
  title: string
  description: string
  author: string
  time: string
  img: string
  category: string
}

export const featuredStudy: CaseStudy = {
  key: 'health',
  title: 'Predictive Health: MRI Diagnostic Acceleration',
  description: 'By deploying a custom-trained computer vision model at the edge, we reduced MRI diagnostic turnaround times from 48 hours to just 15 minutes. This life-saving integration allows radiologists to prioritize critical cases in real-time, improving patient outcomes across 12 hospitals.',
  author: 'Jawad Khan',
  time: '6 min read',
  category: 'CASE STUDY',
  img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuARF9G8_y6k6Vgpx295OH8n9RA5KsCislaSZYy8lFK0DJVeqwGoP4OZg1gQNvKGRy2UEqDIBoYKqA0kz3ltbv6I2Unt7wMbv5RRWsUhoa5OhR1IOm9IqIvNN7MxUsPO8OYEpuAvokgZuDGd1Y5JWJt4OIZQfI9oJltKOPJnHNEsZ0r2a2OTGotCG-oD5T6BC2ira1EC-Q4hOlY6Kt88yWhGAUAL0J5dy4kYP7iifsea9ESUx6vw-Kw',
}

export const caseStudies: CaseStudy[] = [
  {
    key: 'sovereign',
    title: 'Sovereign Cloud: Migrating 400TB of Sensitive Healthcare Data',
    description: 'How we built a fluid design language that adapts to generative output unpredictability.',
    author: 'Ali Hasnain',
    time: '8 min read',
    category: 'Design Systems',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCYy4CDACf82FrzB_rfwuAklVJKfjlT3a3zQJlGWH70ctwzDssyExgM11dvFadBrt1zdMkDfig6cCX12eLmnUzUZ3zIahbE86xkxY2itRY44Yil5H9Q8ADgjQb_G3uUEAK0P4_iw9sZZ9QwLWv98DGita6pVl8edywezu81EHj4d17c-8UsnW7Kdjm3uI-L3GrLJwAtiwIQqWrALamxmkaDBFgWRCxpRnryYnCdJZccS8e36T8DtRA',
  },
  {
    key: 'atlas',
    title: 'Atlas Robotics: 12ms Latency Control for Industrial Fleets',
    description: 'Why enterprise compliance is driving a return to localized, hyper-secure private cloud stacks.',
    author: 'Muhammad Umair',
    time: '12 min read',
    category: 'Infrastructure',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB8XRzCYpojQJ3XKcVNugyatYXjMBLR3m5Yz1010a6rZpT3bbM0CnnXw1SzccuRwqhcUa7V2yqjVxSTzUaOrMjT781SnPzjRHV4wewX_89nH4R-Mu_GTgtVV3QHQMGfgOnxxF8uxJy__q4eWWlEo-PVvPe5bLiFL3iJbLYRdqpFq0JfTYD-EQ8NTeRvmy6SiW5yQhS7NlaEFRyZrwoKUtL9dRsjXq68IojzN4U0NSuuBz13l1JbxeA',
  },
  {
    key: 'neobank',
    title: 'NeoBank Scale: Supporting 50k Transactions Per Second',
    description: 'Optimization techniques for deploying large models without sacrificing user experience speed.',
    author: 'Uzair Rahim',
    time: '10 min read',
    category: 'AI/ML',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBydwNv-aEKyVxcguvHSipCE_EdSrLdoupvuxR-BxvkGsvTzLSyzY9MK5LD-Tn2qwSupCZE_hPh5r6TCWhqGWtG0NEE2Dj5J96lpI_Omd2XkN3REWG4-MG3t4JEhhcJOQJ0-fB0HEsvTXA9r6IftnNp8kbSmAdcnz9VhFQn-7LYNAOPnEo4_BsQIqE5-lIO1KgaOPwiC67q0DwNXDdut9R4j1xb16i-XVcSd3RtTlEPs8Vg_GlSiiA',
  },
  {
    key: 'health',
    title: 'Predictive Health: Deploying MRI Diagnostics at Scale',
    description: 'How to hire and retain elite technical talent in a post-geographic labor market.',
    author: 'Jawad Khan',
    time: '6 min read',
    category: 'Strategy',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuARF9G8_y6k6Vgpx295OH8n9RA5KsCislaSZYy8lFK0DJVeqwGoP4OZg1gQNvKGRy2UEqDIBoYKqA0kz3ltbv6I2Unt7wMbv5RRWsUhoa5OhR1IOm9IqIvNN7MxUsPO8OYEpuAvokgZuDGd1Y5JWJt4OIZQfI9oJltKOPJnHNEsZ0r2a2OTGotCG-oD5T6BC2ira1EC-Q4hOlY6Kt88yWhGAUAL0J5dy4kYP7iifsea9ESUx6vw-Kw',
  },
  {
    key: 'automation',
    title: 'Cognitive Automation: Streamlining 10k Customer Workflows',
    description: 'Managing independent deployment cycles across diverse product teams without breaking the UI.',
    author: 'Ali Hasnain',
    time: '15 min read',
    category: 'Infrastructure',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuASJopP5i9cYdIs9FVAtuwSDoKX1sDHPIInc6svh8aRHUtoqI_WaT9YUIKaHyMwCdAIONKChLK_8SRhHfulFGoQm_xVXpxQJOZrNVfvhki087ECd-bWARxsnif5eCCRQ9X6nSX5TxLBU5DLyyroeaUWj0igv9hWlA1kw1difGVaF7rPFBf1xq5SXgJNIbJ9rUoAI4CwqiYZL4M1DRmy0olWuZ-2MtFuUrWR99tngz6IDnTIZHwODU8',
  },
  {
    key: 'mesh',
    title: 'Secure Mesh: Encrypted Drone Communication for High-Risk Zones',
    description: 'Training models on decentralized data without ever moving it from the edge device.',
    author: 'Muhammad Umair',
    time: '9 min read',
    category: 'AI/ML',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDTtvbB16OK768ggsTsntYDOgTwh9H2lTFeR1bB08VtA1RWF8Rs90owRKKpMsPdaLvg36X8BlUuHhKs4DXYiFURioazN0GGstD0NA9ZbwQkyQFO56gl608-nM-fqkuyiDSXGUVhSKjedzlE-Ur1xlfwjsLPAzkIzTkAuRS_jcGzQZITv8ARgc1U50hoeoUglYkJQTz8crKOy-MQwfAYPi8fjiBesg7_o-D60oMhOn3A5-ip3kPjOhQ',
  },
]
