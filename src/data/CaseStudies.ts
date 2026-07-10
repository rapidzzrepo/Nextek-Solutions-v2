export const html = `
<!-- Hero Section: Featured Article -->
<section class="max-w-container-max mx-auto px-margin-desktop mb-section-gap">
<div class="flex flex-col lg:flex-row gap-12 items-center bg-white border border-outline-variant rounded-xl overflow-hidden p-8 lg:p-12" style="opacity: 1; transition: opacity 0.2s ease-in-out;">
<div class="lg:w-3/5 space-y-6">
<div class="flex items-center gap-3">
<span class="bg-primary-fixed-dim text-on-primary-fixed-variant px-3 py-1 rounded-full text-label-md font-label-md">CASE STUDY</span>
<span class="text-outline text-label-md font-label-md uppercase tracking-widest">FEATURED CASE STUDY</span>
</div>
<h1 class="font-display-lg text-display-lg leading-tight text-on-surface max-w-2xl" id="featured-title">Predictive Health: MRI Diagnostic Acceleration</h1>
<p class="font-body-lg text-body-lg text-on-surface-variant max-w-xl" id="featured-desc">By deploying a custom-trained computer vision model at the edge, we reduced MRI diagnostic turnaround times from 48 hours to just 15 minutes. This life-saving integration allows radiologists to prioritize critical cases in real-time, improving patient outcomes across 12 hospitals.</p>
<div class="flex items-center gap-6 pt-4">
<div class="flex items-center gap-3">
<div class="w-12 h-12 rounded-full overflow-hidden border border-outline-variant bg-surface-container">
<img class="w-full h-full object-cover" data-alt="A professional headshot of a female technology executive with sharp features and a confident expression. The lighting is crisp and editorial, reflecting a high-end corporate tech aesthetic. The background is a clean, minimalist architectural space with soft shadows and neutral tones of white and grey." src="https://lh3.googleusercontent.com/aida-public/AB6AXuC9O3jZkB470bcrICE0li35VcQGFfqBSRYPpQiMvANJLVR4IPjMBEd-bAdVeFBPYDdkCpXoFeMX9U7i9S-qTUgV-f3b4Zwix1iAaPYSBLPKzsV4Iv3ACZpJp3C8m-aagA4jxMoeLTtCM1WQ3inG-5KhGbY3B4F-aRjVJLTGCRaza_ZYl7fCxPiUBAH2dcV7fBSJurXjly2mR_zAD0Xb4Ei6fxAg1HldW4rip55Bf4cUa5ezWd7XiiA">
</div>
<div>
<p class="font-label-md text-label-md text-on-surface" id="featured-author">Jawad Khan</p>
<p class="text-[12px] text-outline">Chief Technology Strategist</p>
</div>
</div>
<div class="h-8 w-px bg-outline-variant/50"></div>
<div class="flex items-center gap-2 text-outline">
<span class="material-symbols-outlined text-[18px]">schedule</span>
<span class="font-label-md text-label-md" id="featured-time">6 min read</span>
</div>
</div>
</div>
<div class="lg:w-2/5 w-full h-[400px] rounded-lg overflow-hidden relative group cursor-pointer border border-outline-variant transition-all duration-700 opacity-100 translate-y-0 bg-surface-container">
<img class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 transition-all ease-in-out opacity-100 scale-100" data-alt="A sophisticated 3D abstract visualization representing complex network data architecture. Interconnected glass-like nodes and crystalline structures glow with faint purple and blue luminescence. The scene is rendered with deep depth of field against a pristine white background, conveying a sense of order, precision, and high-level software engineering." src="https://lh3.googleusercontent.com/aida-public/AB6AXuARF9G8_y6k6Vgpx295OH8n9RA5KsCislaSZYy8lFK0DJVeqwGoP4OZg1gQNvKGRy2UEqDIBoYKqA0kz3ltbv6I2Unt7wMbv5RRWsUhoa5OhR1IOm9IqIvNN7MxUsPO8OYEpuAvokgZuDGd1Y5JWJt4OIZQfI9oJltKOPJnHNEsZ0r2a2OTGotCG-oD5T6BC2ira1EC-Q4hOlY6Kt88yWhGAUAL0J5dy4kYP7iifsea9ESUx6vw-Kw" id="featured-img" onload="this.classList.remove('opacity-0', 'scale-95'); this.classList.add('opacity-100', 'scale-100'); this.parentElement.classList.remove('animate-pulse');" loading="eager" decoding="async" style="will-change: opacity, transform; transition: opacity 0.7s ease-in-out;">
<div class="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
<span class="material-symbols-outlined text-primary text-5xl bg-white rounded-full p-4 shadow-xl">arrow_forward</span>
</div>
</div>
</div>
</section>
<!-- Category Filter -->
<section class="max-w-container-max mx-auto px-margin-desktop mb-16">
<div class="flex flex-wrap items-center justify-between gap-6 border-b border-outline-variant/30 pb-6">
<div class="flex gap-4 items-center"><button class="bg-primary text-on-primary px-6 py-2 rounded-full font-label-md text-label-md">All Case Studies</button><button class="text-on-surface-variant hover:text-primary transition-colors px-6 py-2 rounded-full font-label-md text-label-md">Fintech</button><button class="text-on-surface-variant hover:text-primary transition-colors px-6 py-2 rounded-full font-label-md text-label-md">Healthcare</button><button class="text-on-surface-variant hover:text-primary transition-colors px-6 py-2 rounded-full font-label-md text-label-md">Logistics</button></div>
<div class="flex items-center gap-2 text-on-surface-variant border border-outline-variant px-4 py-2 rounded-lg bg-white">
<span class="material-symbols-outlined">search</span>
<input class="bg-transparent border-none focus:ring-0 font-body-md text-body-md" placeholder="Search the hub..." type="text">
</div>
</div>
</section>
<!-- Insight Cards Grid -->
<section class="max-w-container-max mx-auto px-margin-desktop mb-section-gap">
<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-gutter">
<!-- Card 1 -->
<div class="group bg-white border border-outline-variant rounded-xl overflow-hidden hover-card transition-all duration-300 duration-700 opacity-100 translate-y-0" data-study="sovereign">
<div class="h-56 overflow-hidden">
<img class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" data-alt="A clean, minimalist workspace view from above featuring a high-end laptop, a sleek tablet displaying a design system UI kit, and a single cup of espresso. The lighting is soft morning sun from a side window, highlighting high-contrast purple accents on the screen. The aesthetic is professional, modern, and impeccably organized." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCYy4CDACf82FrzB_rfwuAklVJKfjlT3a3zQJlGWH70ctwzDssyExgM11dvFadBrt1zdMkDfig6cCX12eLmnUzUZ3zIahbE86xkxY2itRY44Yil5H9Q8ADgjQb_G3uUEAK0P4_iw9sZZ9QwLWv98DGita6pVl8edywezu81EHj4d17c-8UsnW7Kdjm3uI-L3GrLJwAtiwIQqWrALamxmkaDBFgWRCxpRnryYnCdJZccS8e36T8DtRA">
</div>
<div class="p-6 space-y-4">
<div class="flex justify-between items-center">
<span class="bg-tertiary-fixed text-tertiary px-2 py-1 rounded text-[12px] font-bold uppercase tracking-tighter">Design Systems</span>
<span class="text-outline font-label-md text-label-md">8 min read</span>
</div>
<h3 class="font-headline-lg text-headline-lg text-on-surface leading-snug group-hover:text-primary transition-colors">Sovereign Cloud: Migrating 400TB of Sensitive Healthcare Data</h3>
<p class="text-on-surface-variant line-clamp-2">How we built a fluid design language that adapts to generative output unpredictability.</p>
<div class="pt-4 flex items-center gap-3">
<div class="w-8 h-8 rounded-full overflow-hidden bg-surface-variant">
<img class="w-full h-full object-cover" data-alt="A portrait of a male lead designer with a creative look, wearing stylish glasses. The background is a soft-focus architectural studio with hints of electric purple lighting. Professional photography style, clean and modern." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDmdxhYKwMy4bELOlPedt5gPaG9vssuFg9U_e-K9cGbPdtVCZ7xFqclKnQKAJFS9g5Y-l-rs8QGIc8YTtTSK4whIuH5KXgIJ5AdAqJqQy_4xxwPboDP8Y6Jk8SUi_P3uoH9yPlLgcezDaq7K__lTCx8bHuznwmYzMez_Y0qphJfY46DI_pEA4AvbM9q2EbfIZYfdPdeu2KM3S0ojV3m1NQKTNPBtZb7TXZ-mTaZMaRUw5Qi8l2D3hs">
</div>
<span class="text-label-md font-label-md text-on-surface">Ali Hasnain</span>
</div>
</div>
</div>
<!-- Card 2 -->
<div class="group bg-white border border-outline-variant rounded-xl overflow-hidden hover-card transition-all duration-300 duration-700 opacity-100 translate-y-0" data-study="atlas">
<div class="h-56 overflow-hidden">
<img class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" data-alt="A high-tech server room interior rendered with an artistic perspective. Blue and purple neon lights trace the edges of server racks, creating leading lines into the distance. The floor is polished and reflective, mirroring the complex electronic infrastructure. The atmosphere is quiet, powerful, and technologically advanced." src="https://lh3.googleusercontent.com/aida-public/AB6AXuB8XRzCYpojQJ3XKcVNugyatYXjMBLR3m5Yz1010a6rZpT3bbM0CnnXw1SzccuRwqhcUa7V2yqjVxSTzUaOrMjT781SnPzjRHV4wewX_89nH4R-Mu_GTgtVV3QHQMGfgOnxxF8uxJy__q4eWWlEo-PVvPe5bLiFL3iJbLYRdqpFq0JfTYD-EQ8NTeRvmy6SiW5yQhS7NlaEFRyZrwoKUtL9dRsjXq68IojzN4U0NSuuBz13l1JbxeA">
</div>
<div class="p-6 space-y-4">
<div class="flex justify-between items-center">
<span class="bg-tertiary-fixed text-tertiary px-2 py-1 rounded text-[12px] font-bold uppercase tracking-tighter">Infrastructure</span>
<span class="text-outline font-label-md text-label-md">12 min read</span>
</div>
<h3 class="font-headline-lg text-headline-lg text-on-surface leading-snug group-hover:text-primary transition-colors">Atlas Robotics: 12ms Latency Control for Industrial Fleets</h3>
<p class="text-on-surface-variant line-clamp-2">Why enterprise compliance is driving a return to localized, hyper-secure private cloud stacks.</p>
<div class="pt-4 flex items-center gap-3">
<div class="w-8 h-8 rounded-full overflow-hidden bg-surface-variant">
<img class="w-full h-full object-cover" data-alt="Portrait of a serious male infrastructure engineer with a tech-focused appearance. Minimalist studio lighting, high contrast, monochromatic shirt, professional corporate portrait style." src="https://lh3.googleusercontent.com/aida-public/AB6AXuB3wIhFd-amjGRP2Gi8wVks9rvcxnOl6oMpmlJwev-ku_SLz5_YiPc9H3huT8DEaVdZ2ug_sazJC1UnIcPas4wBj956hjDoED0fSsPL7aUqR1edEt1R4UHO1WFyEL3IlB0a8hvI7hMxhYZvBrz7coXW99wv0dhv2wUCu08IjuYRwovwnSNP5cyI5fcnXKRhB1bCIOOKAZZiqHx5i4MKsseLdKAS2Hy2N0ObxtWyHBrm_MtphHeDddc">
</div>
<span class="text-label-md font-label-md text-on-surface">Muhammad Umair</span>
</div>
</div>
</div>
<!-- Card 3 -->
<div class="group bg-white border border-outline-variant rounded-xl overflow-hidden hover-card transition-all duration-300 duration-700 opacity-100 translate-y-0" data-study="neobank">
<div class="h-56 overflow-hidden">
<img class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" data-alt="A conceptual digital art piece of a neural network being constructed by microscopic light particles. The light trails are vibrant purple and deep blue, forming a complex web of intelligence. The background is a deep charcoal, making the electric light trails pop with intensity and clarity. A metaphor for deep learning and AI innovation." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBydwNv-aEKyVxcguvHSipCE_EdSrLdoupvuxR-BxvkGsvTzLSyzY9MK5LD-Tn2qwSupCZE_hPh5r6TCWhqGWtG0NEE2Dj5J96lpI_Omd2XkN3REWG4-MG3t4JEhhcJOQJ0-fB0HEsvTXA9r6IftnNp8kbSmAdcnz9VhFQn-7LYNAOPnEo4_BsQIqE5-lIO1KgaOPwiC67q0DwNXDdut9R4j1xb16i-XVcSd3RtTlEPs8Vg_GlSiiA">
</div>
<div class="p-6 space-y-4">
<div class="flex justify-between items-center">
<span class="bg-tertiary-fixed text-tertiary px-2 py-1 rounded text-[12px] font-bold uppercase tracking-tighter">AI/ML</span>
<span class="text-outline font-label-md text-label-md">10 min read</span>
</div>
<h3 class="font-headline-lg text-headline-lg text-on-surface leading-snug group-hover:text-primary transition-colors">NeoBank Scale: Supporting 50k Transactions Per Second</h3>
<p class="text-on-surface-variant line-clamp-2">Optimization techniques for deploying large models without sacrificing user experience speed.</p>
<div class="pt-4 flex items-center gap-3">
<div class="w-8 h-8 rounded-full overflow-hidden bg-surface-variant">
<img class="w-full h-full object-cover" data-alt="A portrait of a young female AI researcher with a brilliant and thoughtful expression. She is in a modern office with glass walls reflecting city lights. Soft, natural lighting combined with sharp professional focus. Modern corporate tech aesthetic." src="https://lh3.googleusercontent.com/aida-public/AB6AXuD28ScxEcdpyUEyRInGEpNcpcmpfBiC-2PaZ10Aq8gr6Wrg1gtlNlz4VsklZl8QkZxFKqqc6mnpuY4scEK5roSKpRUCw2rW9crUtOtFuWSYs532SSdyCLqSLFRGB7Z4kc3LLvffyi7Hds8WnbbBa1ykYqnYiRkqLGBJdXkm6P4nLtqL0rScU-kyFKXMruZj0EGzbVYBLUtIuhR6NNlmR_XJKDAWQuYspmsbs01HDkPtwKWhYC1-P1Y">
</div>
<span class="text-label-md font-label-md text-on-surface">Uzair Rahim</span>
</div>
</div>
</div>
<!-- Card 4 -->
<div class="group bg-white border border-outline-variant rounded-xl overflow-hidden hover-card transition-all duration-300 duration-700 opacity-100 translate-y-0" data-study="health">
<div class="h-56 overflow-hidden">
<img class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" data-alt="Close-up of a high-end mechanical keyboard and a coding screen with syntax-highlighted code in vibrant purples and blues. The lighting is low and atmospheric, focusing on the precision of the hardware and the intellectual labor of software engineering. Clean, sharp lines and expensive tech aesthetic." src="https://lh3.googleusercontent.com/aida-public/AB6AXuARF9G8_y6k6Vgpx295OH8n9RA5KsCislaSZYy8lFK0DJVeqwGoP4OZg1gQNvKGRy2UEqDIBoYKqA0kz3ltbv6I2Unt7wMbv5RRWsUhoa5OhR1IOm9IqIvNN7MxUsPO8OYEpuAvokgZuDGd1Y5JWJt4OIZQfI9oJltKOPJnHNEsZ0r2a2OTGotCG-oD5T6BC2ira1EC-Q4hOlY6Kt88yWhGAUAL0J5dy4kYP7iifsea9ESUx6vw-Kw">
</div>
<div class="p-6 space-y-4">
<div class="flex justify-between items-center">
<span class="bg-tertiary-fixed text-tertiary px-2 py-1 rounded text-[12px] font-bold uppercase tracking-tighter">Strategy</span>
<span class="text-outline font-label-md text-label-md">6 min read</span>
</div>
<h3 class="font-headline-lg text-headline-lg text-on-surface leading-snug group-hover:text-primary transition-colors">Predictive Health: Deploying MRI Diagnostics at Scale</h3>
<p class="text-on-surface-variant line-clamp-2">How to hire and retain elite technical talent in a post-geographic labor market.</p>
<div class="pt-4 flex items-center gap-3">
<div class="w-8 h-8 rounded-full overflow-hidden bg-surface-variant">
<img class="w-full h-full object-cover" data-alt="A friendly but authoritative male CTO headshot. Bright and professional lighting, high-key white background, modern and approachable look for a tech leader." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBxMMRL2YW4r1t1gsn0rPLxnYCJeglhHQzudypDtypgAtDtz2yQKsRYX_PsuwtuVugLo3hzjw5Iz-Cyb6yqbaMDq0R6LWx18BRX3MQly0bdNqzR_0pKDdu1xzSLX6oo9-gMP-xZRoZaWztSDd5IQ58pQ3lzqG0Fzloz8VjLZ07ZEByiXmh3f-iQTC0TOJvlN0RBjg2vmItSkmnoJqCdQzKv1EwPb7SH5v-BytGINjOQIJUV0fSd10U">
</div>
<span class="text-label-md font-label-md text-on-surface">Jawad Khan</span>
</div>
</div>
</div>
<!-- Card 5 -->
<div class="group bg-white border border-outline-variant rounded-xl overflow-hidden hover-card transition-all duration-300 duration-700 opacity-100 translate-y-0" data-study="automation">
<div class="h-56 overflow-hidden">
<img class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" data-alt="Abstract geometric landscape made of white porcelain blocks and thin purple laser lines. The composition is asymmetrical and editorial, resembling an architectural model of a futuristic city. The lighting is very bright and clean, casting soft, long shadows. Represents structured complexity and modern planning." src="https://lh3.googleusercontent.com/aida-public/AB6AXuASJopP5i9cYdIs9FVAtuwSDoKX1sDHPIInc6svh8aRHUtoqI_WaT9YUIKaHyMwCdAIONKChLK_8SRhHfulFGoQm_xVXpxQJOZrNVfvhki087ECd-bWARxsnif5eCCRQ9X6nSX5TxLBU5DLyyroeaUWj0igv9hWlA1kw1difGVaF7rPFBf1xq5SXgJNIbJ9rUoAI4CwqiYZL4M1DRmy0olWuZ-2MtFuUrWR99tngz6IDnTIZHwODU8">
</div>
<div class="p-6 space-y-4">
<div class="flex justify-between items-center">
<span class="bg-tertiary-fixed text-tertiary px-2 py-1 rounded text-[12px] font-bold uppercase tracking-tighter">Infrastructure</span>
<span class="text-outline font-label-md text-label-md">15 min read</span>
</div>
<h3 class="font-headline-lg text-headline-lg text-on-surface leading-snug group-hover:text-primary transition-colors">Cognitive Automation: Streamlining 10k Customer Workflows</h3>
<p class="text-on-surface-variant line-clamp-2">Managing independent deployment cycles across diverse product teams without breaking the UI.</p>
<div class="pt-4 flex items-center gap-3">
<div class="w-8 h-8 rounded-full overflow-hidden bg-surface-variant">
<img class="w-full h-full object-cover" data-alt="Female software architect with a focused, analytical look. Studio portrait with soft directional lighting. Minimalist styling, modern corporate vibe." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCgq0vBOzy7YY9tjhJG8WSzhw4W9nVaoRVa__yTpyenKxiBcrz0R-gb9DWyeUyEqeckkh1tM44EXIafYK4aY9saJMrttIbLlPYOO8DOydrtnVhsZbbMxgH6iGfoR5uExPTmLo2nkP5QQLTavSpMkZfkXXrZObpJPrhJQVlP2CLkw11Twc60QRwwo_pvssYyjDFXuBdosMK4gD7Vz_-IgoHAT0smrxMAcim0orKgpAGgoLklxMmBr8s">
</div>
<span class="text-label-md font-label-md text-on-surface">Ali Hasnain</span>
</div>
</div>
</div>
<!-- Card 6 -->
<div class="group bg-white border border-outline-variant rounded-xl overflow-hidden hover-card transition-all duration-300 duration-700 opacity-100 translate-y-0" data-study="mesh">
<div class="h-56 overflow-hidden">
<img class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" data-alt="Visualization of a secure data vault using abstract light rays and layered glass plates. The light is focused on a central point, symbolizing encryption and security. The color palette is dominated by tech-blue and deep navy, with sharp white light highlights. Minimalist, powerful, and secure aesthetic." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDTtvbB16OK768ggsTsntYDOgTwh9H2lTFeR1bB08VtA1RWF8Rs90owRKKpMsPdaLvg36X8BlUuHhKs4DXYiFURioazN0GGstD0NA9ZbwQkyQFO56gl608-nM-fqkuyiDSXGUVhSKjedzlE-Ur1xlfwjsLPAzkIzTkAuRS_jcGzQZITv8ARgc1U50hoeoUglYkJQTz8crKOy-MQwfAYPi8fjiBesg7_o-D60oMhOn3A5-ip3kPjOhQ">
</div>
<div class="p-6 space-y-4">
<div class="flex justify-between items-center">
<span class="bg-tertiary-fixed text-tertiary px-2 py-1 rounded text-[12px] font-bold uppercase tracking-tighter">AI/ML</span>
<span class="text-outline font-label-md text-label-md">9 min read</span>
</div>
<h3 class="font-headline-lg text-headline-lg text-on-surface leading-snug group-hover:text-primary transition-colors">Secure Mesh: Encrypted Drone Communication for High-Risk Zones</h3>
<p class="text-on-surface-variant line-clamp-2">Training models on decentralized data without ever moving it from the edge device.</p>
<div class="pt-4 flex items-center gap-3">
<div class="w-8 h-8 rounded-full overflow-hidden bg-surface-variant">
<img class="w-full h-full object-cover" data-alt="Portrait of a male machine learning engineer, technical and focused. Sharp professional lighting, modern minimalist background, sophisticated tech-forward portrait." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBwbfIHKR02f_Q4ZGlvxLrh0MHBsqLfO6p5Q1MiyNzebFvTGBFVy7vVHNvdZ7YIHIV1xKWHnh389dxb_F5lq80KG0RXBtyXfTV-daQiHlbPXvc1w0EoU4e0oqDrNe_WSWlxZe9_IKsAEXWUVB0vNvy_WV3muLN8T9hXGSVp9QV4OX2JGMBdL3SF-mV4TOSVugYwUgCoDA0dybl3CFnxmYGItd4YUeNcc5n35m1aFmu1rPMtDpRZ6L4">
</div>
<span class="text-label-md font-label-md text-on-surface">Muhammad Umair</span>
</div>
</div>
</div>
</div>
</section>
<!-- Newsletter CTA: Dark Mode Contrast -->
<section class="w-full bg-inverse-surface py-24 px-margin-desktop">
<div class="max-w-container-max mx-auto flex flex-col items-center text-center space-y-8">
<div class="bg-primary/20 p-4 rounded-2xl mb-4">
<span class="material-symbols-outlined text-inverse-primary text-5xl">mail</span>
</div>
<h2 class="font-headline-xl text-headline-xl text-inverse-on-surface max-w-2xl">Partner with Our Architects</h2>
<p class="text-surface-variant/70 font-body-lg text-body-lg max-w-xl">Let's discuss your next mission-critical engineering challenge.</p>
<form class="flex flex-col sm:flex-row gap-4 w-full max-w-md pt-4" onsubmit="event.preventDefault(); alert('Subscribed!')">
<input class="flex-grow bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder:text-white/40 focus:ring-2 focus:ring-primary focus:border-transparent transition-all outline-none" placeholder="Enter your work email" required="" type="email">
<button class="bg-primary text-white px-8 py-3 rounded-lg font-label-md text-label-md hover:opacity-90 active:scale-95 transition-all" type="submit">Schedule a Scoping Session</button>
</form>
<p class="text-white/30 text-[12px]">Join 45,000+ technical leaders. No fluff, just precision engineering.</p>
</div>
</section>
`;
