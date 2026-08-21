export interface Insight {
  category: string
  colorClass: string
  title: string
  description: string
  author: string
  readTime: string
  img: string
}

export const insights: Insight[] = [
  {
    category: 'Engineering',
    colorClass: 'text-primary',
    title: 'The Cost of Technical Debt in Enterprise Scaling',
    description: 'Understanding why long-term performance requires immediate architectural investment.',
    author: 'Ali Hasnain',
    readTime: '8 min read',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA6XGgGX4OqTXqIEFsmxMCoZmSAMuPGW0l0GW-4G7dzZkxRk-vpXinqaQ1prKw6D5RfiUFWVDA_J65Nag4dW09mJZ1tvsKKRo0_r3oeeliuc0oswhc5B82Nw5yG5b29kOI7a3h_q0i5zA7TQtuiPs1k-FkxmyFMvS3S3yI4mf8HNXD2i2HL0czhtsq9V9PkXa2Lhu8Lkruav0zMX19yn0xFfEFGlua3FJUa6icfSAHokv6Z5ZkT_uQ',
  },
  {
    category: 'Artificial Intelligence',
    colorClass: 'text-secondary',
    title: 'Deploying Private LLMs for Data Sovereignty',
    description: 'How to leverage state-of-the-art language models without compromising enterprise security.',
    author: 'Jawad Khan',
    readTime: '12 min read',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBmY99LWL2K4Yf4uuVGG_X0MmgttvzRgMt2d5CWi4Jiya2VGDyZrJXSm-av-YG4OYZOvstU8T_LRfoqk_G4ogJqQUEEYSe6kKRyxhGr496ZjG9uqX1JiCA7J5kuQ31c330BfhuD2_leyeSrKnIX3cAl4CtYP-3NlmruL7X-YvdTkh5o0aAe2pXV3RtY5-3MKaX5ts95Cr-L4jIrf8Gc-nQsGgAPmAh3lnathQLKdMR9QxrPewvrg1w',
  },
  {
    category: 'Infrastructure',
    colorClass: 'text-tertiary',
    title: 'Serverless vs. Edge: Choosing the Right Layer',
    description: 'Evaluating deployment strategies for mission-critical low-latency applications.',
    author: 'Muhammad Umair',
    readTime: '10 min read',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCwwhvDjaIwm-qv6PsUBZN761WyCw0sIi2YVvjJXxUPDmZhbGX49xNfUR1a_-n_OPewgFNy0OkN0ErOevr4y4Ij8fjBbPcJdCq5f-L8Myf8uXtgBTau9O2TiMQ056fDZYMfSfWq9Yw9eVd3Nl7doaxoeAuawwSmcblmeJMjDZybiqpVL4Tb8Ql0ZxyqSmkklthwQWKRlTRYTMdS8xDpl5plFRIm1DYpuAToCyyPpJaLer0AVqBZ3Qg',
  },
]
