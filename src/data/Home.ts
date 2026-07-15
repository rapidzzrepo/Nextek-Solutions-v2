export const html = `
<!-- 1. Hero Section -->
<section class="relative min-h-[750px] md:min-h-[800px] flex items-center overflow-hidden bg-surface py-16 md:py-section-gap" id="hero-section">
<!-- Particle System Background (Optimized Canvas) -->
<canvas class="absolute inset-0 z-0 pointer-events-none opacity-60 accelerated-layer" id="star-background" width="2600" height="1842" style="width: 1300px; height: 921px;"></canvas>
<div class="max-w-container-max mx-auto px-margin-mobile sm:px-margin-tablet md:px-margin-desktop relative z-10 gap-gutter items-center flex flex-col">
<div class="space-y-6 md:space-y-8 text-center">
<div class="inline-flex items-center gap-2 px-3 md:px-4 py-1.5 rounded-full bg-primary-fixed text-on-primary-fixed font-label-md mx-auto">
<span class="relative flex h-2 w-2">
<span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
<span class="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
</span>
                NEXT-GEN ENGINEERING
            </div>
<h1 class="font-display-lg text-[28px] sm:text-display-lg-mobile md:text-display-lg font-bold leading-[1.05] tracking-tight">
                Architecting the Future of <span class="text-primary">Absolute Performance</span>
</h1>
<p class="font-body-lg text-on-surface-variant max-w-xl mx-auto">
                A specialized engineering collective dedicated to building high-concurrency systems, mission-critical AI, and frictionless digital experiences for the world's most ambitious enterprises.
            </p>
<div class="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto sm:max-w-none sm:w-auto">
<a class="bg-primary text-on-primary px-6 md:px-8 py-3 md:py-4 rounded-lg font-headline-lg text-body-md flex items-center justify-center gap-3 hover:bg-primary-container transition-all" href="/contact">
                    Start a Project
                    <span class="material-symbols-outlined">arrow_forward</span>
</a>
<a class="border border-primary text-primary px-6 md:px-8 py-3 md:py-4 rounded-lg font-headline-lg text-body-md flex items-center justify-center gap-3 hover:bg-primary-fixed transition-all" href="/solutions">
                    View Roadmap
                </a>
</div>
</div>
</div>
</section>
<!-- 2. Certifications Marquee -->
<div class="bg-surface-container-low py-8 md:py-12 border-y border-outline-variant/30 overflow-hidden">
<div class="max-w-container-max mx-auto px-margin-mobile sm:px-margin-tablet md:px-margin-desktop">
<div class="text-center mb-12">
<p class="font-label-md text-on-surface-variant/60 uppercase tracking-widest">Performance Metrics &amp; Scale</p>
</div>
<div class="grid grid-cols-2 md:grid-cols-4 gap-gutter">
<div class="text-center p-6 accelerated-layer">
<div class="font-display-lg text-[28px] md:text-headline-xl text-primary mb-2"><span class="count-up" data-target="10" data-suffix="+">0</span></div>
<div class="font-label-md text-on-surface-variant uppercase tracking-wider">Years in Market</div>
</div>
<div class="text-center p-6 accelerated-layer">
<div class="font-display-lg text-[28px] md:text-headline-xl text-primary mb-2"><span class="count-up" data-target="250" data-suffix="+">0</span></div>
<div class="font-label-md text-on-surface-variant uppercase tracking-wider">Expert Engineers</div>
</div>
<div class="text-center p-6 accelerated-layer">
<div class="font-display-lg text-[28px] md:text-headline-xl text-primary mb-2"><span class="count-up" data-target="500" data-suffix="+">0</span></div>
<div class="font-label-md text-on-surface-variant uppercase tracking-wider">Projects Delivered</div>
</div>
<div class="text-center p-6 accelerated-layer">
<div class="font-display-lg text-[28px] md:text-headline-xl text-primary mb-2"><span class="count-up" data-target="99" data-suffix="%">0</span></div>
<div class="font-label-md text-on-surface-variant uppercase tracking-wider">Satisfied Clients</div>
</div>
</div>
</div>
</div>
<!-- 3. Engineering Excellence Grid -->
<section class="py-16 md:py-section-gap max-w-container-max mx-auto px-margin-mobile sm:px-margin-tablet md:px-margin-desktop">
<div class="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
<div class="max-w-2xl">
<h2 class="font-display-lg text-headline-xl mb-4">Engineering Excellence Across Every Domain</h2>
<p class="font-body-lg text-on-surface-variant">We bridge the gap between complex infrastructure requirements and seamless user-facing applications.</p>
</div>
<button class="bg-primary text-on-primary px-8 py-3 rounded-lg font-label-md">View All Expertise</button>
</div>
<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-gutter">
<!-- AI Card -->
<div class="bento-item p-6 md:p-8 border border-outline-variant/50 rounded-xl bg-surface group">
<div class="w-12 h-12 rounded-lg bg-primary-fixed flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-on-primary transition-all">
<span class="material-symbols-outlined" data-icon="psychology">psychology</span>
</div>
<h3 class="font-headline-lg mb-3">AI &amp; ML</h3>
<p class="font-body-md text-on-surface-variant mb-8 line-clamp-3">Custom LLMs, predictive analytics, and neural network architectures optimized for performance.</p>
<a class="text-primary font-label-md flex items-center gap-2 hover:translate-x-1 transition-transform" href="#">View Details <span class="material-symbols-outlined text-[18px]">arrow_right_alt</span></a>
</div>
<!-- Web Card -->
<div class="bento-item p-6 md:p-8 border border-outline-variant/50 rounded-xl bg-surface group">
<div class="w-12 h-12 rounded-lg bg-primary-fixed flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-on-primary transition-all">
<span class="material-symbols-outlined" data-icon="web">web</span>
</div>
<h3 class="font-headline-lg mb-3">Enterprise Web</h3>
<p class="font-body-md text-on-surface-variant mb-8 line-clamp-3">Scalable React and Next.js applications built for massive traffic and real-time synchronization.</p>
<a class="text-primary font-label-md flex items-center gap-2 hover:translate-x-1 transition-transform" href="#">View Details <span class="material-symbols-outlined text-[18px]">arrow_right_alt</span></a>
</div>
<!-- Mobile Card -->
<div class="bento-item p-6 md:p-8 border border-outline-variant/50 rounded-xl bg-surface group">
<div class="w-12 h-12 rounded-lg bg-primary-fixed flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-on-primary transition-all">
<span class="material-symbols-outlined" data-icon="smartphone">smartphone</span>
</div>
<h3 class="font-headline-lg mb-3">Native Mobile</h3>
<p class="font-body-md text-on-surface-variant mb-8 line-clamp-3">High-performance iOS and Android applications utilizing Swift and Kotlin native capabilities.</p>
<a class="text-primary font-label-md flex items-center gap-2 hover:translate-x-1 transition-transform" href="#">View Details <span class="material-symbols-outlined text-[18px]">arrow_right_alt</span></a>
</div>
<!-- Cloud Card -->
<div class="bento-item p-6 md:p-8 border border-outline-variant/50 rounded-xl bg-surface group">
<div class="w-12 h-12 rounded-lg bg-primary-fixed flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-on-primary transition-all">
<span class="material-symbols-outlined" data-icon="cloud">cloud</span>
</div>
<h3 class="font-headline-lg mb-3">Cloud Infrastructure</h3>
<p class="font-body-md text-on-surface-variant mb-8 line-clamp-3">Serverless architectures, microservices orchestration, and cost-optimized multi-cloud strategies.</p>
<a class="text-primary font-label-md flex items-center gap-2 hover:translate-x-1 transition-transform" href="#">View Details <span class="material-symbols-outlined text-[18px]">arrow_right_alt</span></a>
</div>
<!-- UI/UX Card -->
<div class="bento-item p-6 md:p-8 border border-outline-variant/50 rounded-xl bg-surface group">
<div class="w-12 h-12 rounded-lg bg-primary-fixed flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-on-primary transition-all">
<span class="material-symbols-outlined" data-icon="design_services">design_services</span>
</div>
<h3 class="font-headline-lg mb-3">UI/UX Strategy</h3>
<p class="font-body-md text-on-surface-variant mb-8 line-clamp-3">Technical-first design systems that prioritize user flow and brand identity without compromising code integrity.</p>
<a class="text-primary font-label-md flex items-center gap-2 hover:translate-x-1 transition-transform" href="#">View Details <span class="material-symbols-outlined text-[18px]">arrow_right_alt</span></a>
</div>
<!-- DevOps Card -->
<div class="bento-item p-6 md:p-8 border border-outline-variant/50 rounded-xl bg-surface group">
<div class="w-12 h-12 rounded-lg bg-primary-fixed flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-on-primary transition-all">
<span class="material-symbols-outlined" data-icon="terminal">terminal</span>
</div>
<h3 class="font-headline-lg mb-3">Elite DevOps</h3>
<p class="font-body-md text-on-surface-variant mb-8 line-clamp-3">Automated CI/CD pipelines, containerization, and zero-downtime deployment workflows.</p>
<a class="text-primary font-label-md flex items-center gap-2 hover:translate-x-1 transition-transform" href="#">View Details <span class="material-symbols-outlined text-[18px]">arrow_right_alt</span></a>
</div>
</div>
</section>
<!-- 4. Animated Stats -->
<div class="bg-surface-container-low py-8 md:py-12 border-y border-outline-variant/30 overflow-hidden"><div class="max-w-container-max mx-auto px-margin-mobile sm:px-margin-tablet md:px-margin-desktop"><div class="text-center mb-12"><p class="font-label-md text-on-surface-variant/60 uppercase tracking-widest">Technical Certifications</p></div><div class="flex flex-col gap-8"><div class="grid grid-cols-2 md:grid-cols-4 gap-6"><div class="flex flex-col items-center p-4 rounded-xl border border-outline-variant/30 bg-surface/50"><img class="w-12 h-12 object-contain mb-3" src="/Certification-Icons/screen.png" alt="ISO 27001" /><span class="font-display-lg text-[14px] font-bold uppercase tracking-wider text-center">ISO 27001</span></div><div class="flex flex-col items-center p-4 rounded-xl border border-outline-variant/30 bg-surface/50"><img class="w-12 h-12 object-contain mb-3" src="/Certification-Icons/screen copy 3.png" alt="GCP Professional" /><span class="font-display-lg text-[14px] font-bold uppercase tracking-wider text-center">GCP Professional</span></div><div class="flex flex-col items-center p-4 rounded-xl border border-outline-variant/30 bg-surface/50"><img class="w-12 h-12 object-contain mb-3" src="/Certification-Icons/screen copy 4.png" alt="CKA Kubernetes" /><span class="font-display-lg text-[14px] font-bold uppercase tracking-wider text-center">CKA Kubernetes</span></div><div class="flex flex-col items-center p-4 rounded-xl border border-outline-variant/30 bg-surface/50"><img class="w-12 h-12 object-contain mb-3" src="/Certification-Icons/screen.png" alt="HIPAA Compliant" /><span class="font-display-lg text-[14px] font-bold uppercase tracking-wider text-center">HIPAA Compliant</span></div></div><div class="grid grid-cols-2 md:grid-cols-4 gap-6"><div class="flex flex-col items-center p-4 rounded-xl border border-outline-variant/30 bg-surface/50"><img class="w-12 h-12 object-contain mb-3" src="/Certification-Icons/11.png" alt="ISO 9001" /><span class="font-display-lg text-[14px] font-bold uppercase tracking-wider text-center">ISO 9001</span></div><div class="flex flex-col items-center p-4 rounded-xl border border-outline-variant/30 bg-surface/50"><img class="w-12 h-12 object-contain mb-3" src="/Certification-Icons/123.jpg" alt="PCI DSS" /><span class="font-display-lg text-[14px] font-bold uppercase tracking-wider text-center">PCI DSS</span></div><div class="flex flex-col items-center p-4 rounded-xl border border-outline-variant/30 bg-surface/50"><img class="w-12 h-12 object-contain mb-3" src="/Certification-Icons/goodFirms.png" alt="GoodFirms" /><span class="font-display-lg text-[14px] font-bold uppercase tracking-wider text-center">GoodFirms</span></div><div class="flex flex-col items-center p-4 rounded-xl border border-outline-variant/30 bg-surface/50"><img class="w-12 h-12 object-contain mb-3" src="/Certification-Icons/top-firms.png" alt="Top Firms" /><span class="font-display-lg text-[14px] font-bold uppercase tracking-wider text-center">Top Firms</span></div></div></div></div></div>
<section class="bg-[#0a0a0a] py-12 md:py-20 relative overflow-hidden" id="marquee-star-section">
<div class="absolute inset-0 w-full h-full pointer-events-none z-0">
<canvas id="industry-leaders-precision-canvas" class="w-full h-full block"></canvas>
</div>
<div class="max-w-container-max mx-auto px-margin-mobile sm:px-margin-tablet md:px-margin-desktop mb-12 relative z-10">
<p class="font-label-md text-surface-variant/40 uppercase tracking-[0.2em] text-center">Engineered with Industry Leaders</p>
</div>
<div class="marquee relative flex overflow-hidden select-none z-10">
<div class="marquee-content"><img alt="Keiser Logo" class="h-12 w-auto object-contain hover:opacity-100 transition-opacity cursor-pointer" decoding="async" loading="lazy" src="/Partner-Logos-Old/KEISER.png"><img alt="Spivi Logo" class="h-12 w-auto object-contain hover:opacity-100 transition-opacity cursor-pointer" decoding="async" loading="lazy" src="/Partner-Logos-Old/SPIN.png"><img alt="BeaverFit Logo" class="h-12 w-auto object-contain hover:opacity-100 transition-opacity cursor-pointer" decoding="async" loading="lazy" src="/Partner-Logos-Old/BEAVER-FIT.png"><img alt="LLAX Agarrage" class="h-12 w-auto object-contain hover:opacity-100 transition-opacity cursor-pointer" decoding="async" loading="lazy" src="/Partner-Logos/LLAXAgarrage-white.png"><img alt="Lantern Finance" class="h-12 w-auto object-contain hover:opacity-100 transition-opacity cursor-pointer" decoding="async" loading="lazy" src="/Partner-Logos/Lantern-Finance-white.png"><img alt="SafeSite USA" class="h-12 w-auto object-contain hover:opacity-100 transition-opacity cursor-pointer" decoding="async" loading="lazy" src="/Partner-Logos/SafeSiteUSA-1-1-p-500.png"><img alt="Success.ai" class="h-12 w-auto object-contain hover:opacity-100 transition-opacity cursor-pointer" decoding="async" loading="lazy" src="/Partner-Logos/Success.ai-white.png"><img alt="Trove Green" class="h-12 w-auto object-contain hover:opacity-100 transition-opacity cursor-pointer" decoding="async" loading="lazy" src="/Partner-Logos/Trove_Green-white-p-500.png"><img alt="Casting Pax" class="h-12 w-auto object-contain hover:opacity-100 transition-opacity cursor-pointer" decoding="async" loading="lazy" src="/Partner-Logos/castingPax-copy.png"><img alt="OtherMind" class="h-12 w-auto object-contain hover:opacity-100 transition-opacity cursor-pointer" decoding="async" loading="lazy" src="/Partner-Logos/otherMind.png"></div>
<div aria-hidden="true" class="marquee-content"><img alt="Keiser Logo" class="h-12 w-auto object-contain hover:opacity-100 transition-opacity cursor-pointer" decoding="async" loading="lazy" src="/Partner-Logos-Old/KEISER.png"><img alt="Spivi Logo" class="h-12 w-auto object-contain hover:opacity-100 transition-opacity cursor-pointer" decoding="async" loading="lazy" src="/Partner-Logos-Old/SPIN.png"><img alt="BeaverFit Logo" class="h-12 w-auto object-contain hover:opacity-100 transition-opacity cursor-pointer" decoding="async" loading="lazy" src="/Partner-Logos-Old/BEAVER-FIT.png"><img alt="LLAX Agarrage" class="h-12 w-auto object-contain hover:opacity-100 transition-opacity cursor-pointer" decoding="async" loading="lazy" src="/Partner-Logos/LLAXAgarrage-white.png"><img alt="Lantern Finance" class="h-12 w-auto object-contain hover:opacity-100 transition-opacity cursor-pointer" decoding="async" loading="lazy" src="/Partner-Logos/Lantern-Finance-white.png"><img alt="SafeSite USA" class="h-12 w-auto object-contain hover:opacity-100 transition-opacity cursor-pointer" decoding="async" loading="lazy" src="/Partner-Logos/SafeSiteUSA-1-1-p-500.png"><img alt="Success.ai" class="h-12 w-auto object-contain hover:opacity-100 transition-opacity cursor-pointer" decoding="async" loading="lazy" src="/Partner-Logos/Success.ai-white.png"><img alt="Trove Green" class="h-12 w-auto object-contain hover:opacity-100 transition-opacity cursor-pointer" decoding="async" loading="lazy" src="/Partner-Logos/Trove_Green-white-p-500.png"><img alt="Casting Pax" class="h-12 w-auto object-contain hover:opacity-100 transition-opacity cursor-pointer" decoding="async" loading="lazy" src="/Partner-Logos/castingPax-copy.png"><img alt="OtherMind" class="h-12 w-auto object-contain hover:opacity-100 transition-opacity cursor-pointer" decoding="async" loading="lazy" src="/Partner-Logos/otherMind.png"></div>
</div>
</section>
<!-- 5. AI & Robotics Solutions Bento -->
<section class="py-16 md:py-section-gap max-w-container-max mx-auto px-margin-mobile sm:px-margin-tablet md:px-margin-desktop">
<div class="flex flex-col lg:flex-row gap-gutter h-auto lg:h-[600px]">
<div class="lg:w-2/3 grid grid-rows-2 gap-gutter">
<div class="grid md:grid-cols-2 gap-gutter">
<!-- Neural Architectures -->
<div class="bento-item rounded-xl overflow-hidden relative group min-h-[200px] md:min-h-0">
<div class="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110" style="background-image: url('https://lh3.googleusercontent.com/aida-public/AB6AXuDj0WWkwnt5Py1bSo5sELqq8me4AwFnpLughZWogTZtIjck31rS3X86zCQj7bSsqkwJVI6vKFv74cgOwxvKWVvNxlMQK_PN2AhvEIfJCx1h6TiusrGWUc5UiacYVcYg9Jaqul_84SniU6O-uQsVpuHI7djuBSYjd7m22Ik8EUQwxh0sUxPDAcvsNGVh5UPjgz5prUbfTrIUG5qHPSRarIsCUJlhFQNIDVMleVhOSDTHBSKqCKNNjCg');"></div>
<div class="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent p-8 flex flex-col justify-end">
<span class="bg-primary text-white text-[10px] font-bold px-3 py-1 rounded-full w-fit mb-4 uppercase">Deep Learning</span>
<h4 class="font-headline-lg text-white">Neural Architectures</h4>
</div>
</div>
<!-- Predictive Analytics -->
<div class="bento-item rounded-xl overflow-hidden relative group min-h-[200px] md:min-h-0">
<div class="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110" style="background-image: url('https://lh3.googleusercontent.com/aida-public/AB6AXuD-4NoKqh5gZbYY18yErxRs3zi8pv0RlqHT1l762oUE8CE3UGpfrA2UGRegMfVPHCOYoJN2W8LDtsKU_S3DaeYEVRWszvTF86joheg9riIUO3M9fBwPEwvWYvt6GfV7aGWlrWjQdovB5k9kcT3FNlnCnT9eQUlA1U6T25PIGB1E0IU_LiGtGxFblQ9ilQv_1LvB9AYX0lZuWRxdsfdkVMxbaOZ5L0VJ7vxwHKGgjm9nhGy837qcD-U');"></div>
<div class="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent p-8 flex flex-col justify-end">
<span class="bg-secondary text-white text-[10px] font-bold px-3 py-1 rounded-full w-fit mb-4 uppercase">Big Data</span>
<h4 class="font-headline-lg text-white">Predictive Analytics</h4>
</div>
</div>
</div>
<!-- Cognitive Automation -->
<div class="bento-item rounded-xl overflow-hidden relative group min-h-[200px] md:min-h-0">
<div class="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110" style="background-image: url('https://lh3.googleusercontent.com/aida-public/AB6AXuAIrhD9kC9Q8my4_gQOVwqBJuTCGQBFN8w94ljRSwp5unnmgN9LJOvgbdyBuNwGVQhyHhv6NONMbQssp53PsLnaqBbEdG-l7gCgZL4nBygCI2Q2JqSzHfXqclz1uzDJxVY1Qk12lf3xh8FHT5gzH2uWXl-YtcjisHYXKnoNw7vtcc4vYXLcbziRV3UdsY8uGU-GDJ3Lbm2TusGTTv5ZFQKFs90qjCUVt2lhaeEkLdiyyxqdLRzRPO0');"></div>
<div class="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent p-8 flex flex-col justify-end">
<span class="bg-tertiary text-white text-[10px] font-bold px-3 py-1 rounded-full w-fit mb-4 uppercase">NLP</span>
<h4 class="font-headline-lg text-white">Cognitive Automation</h4>
</div>
</div>
</div>
<div class="lg:w-1/3 bg-surface-container flex flex-col justify-center p-6 md:p-12 rounded-xl accelerated-layer">
<h3 class="font-display-lg text-headline-xl mb-6">Advanced AI/ML Solutions</h3>
<p class="font-body-md text-on-surface-variant mb-10">We architect next-generation intelligence. Our AI/ML solutions leverage deep learning and predictive analytics to solve complex data challenges and drive autonomous decision-making.</p>
<button class="w-full py-4 border border-primary text-primary font-label-md rounded-lg hover:bg-primary hover:text-on-primary transition-all flex items-center justify-center gap-2">Explore AI Capabilities <span class="material-symbols-outlined">arrow_forward</span></button>
</div>
</div>
</section>
<!-- 8. Success Stories Carousel -->
<section class="py-16 md:py-section-gap overflow-hidden">
<div class="max-w-container-max mx-auto px-margin-mobile sm:px-margin-tablet md:px-margin-desktop mb-16 flex justify-between items-end">
<div>
<h2 class="font-display-lg text-headline-xl">Success Stories</h2>
<p class="font-body-lg text-on-surface-variant">Real-world impact across global markets.</p>
</div>
<div class="flex gap-4">
<button class="w-12 h-12 rounded-full border border-outline-variant flex items-center justify-center hover:bg-surface-container transition-all" id="prevStudy">
<span class="material-symbols-outlined">chevron_left</span>
</button>
<button class="w-12 h-12 rounded-full border border-outline-variant flex items-center justify-center hover:bg-surface-container transition-all" id="nextStudy">
<span class="material-symbols-outlined">chevron_right</span>
</button>
</div>
</div>
<div class="flex gap-gutter px-margin-mobile sm:px-margin-tablet md:px-margin-desktop transition-transform duration-500 ease-in-out cursor-grab active:cursor-grabbing accelerated-layer" id="studyContainer">
<!-- Study 1 -->
<div class="min-w-[80vw] md:min-w-[600px] bg-surface-container rounded-2xl p-6 md:p-8 flex flex-col md:flex-row gap-6 md:gap-8 accelerated-layer">
<div class="w-full md:w-1/2 aspect-video rounded-xl overflow-hidden shrink-0">
<div class="w-full h-full bg-cover bg-center accelerated-layer" data-alt="A modern fintech interface showing a real-time trading dashboard" style="background-image: url(&quot;https://lh3.googleusercontent.com/aida-public/AB6AXuCejiKSN8VCK6fCi6PFTedhyUsxOUkuGzLtmWoQt7pYf4He77hdfg1OA3giju5DESf1THrvMtc_w4qd1F1iSYdkX6XUc3f1ioVJkAO7E9XourxljzHG2IVPaDrewo9vnZeMjociMs1jC9llMs08L77pwQoN1jPdytwAJFVtxszMC1BsnMkSs9Hxl-Be_l_BfCQh2MAE7cF7XYIfSNyqTjnOchdBnDI-PXN-JK5_o2YxSl_LmJ_hh_A&quot;);"></div>
</div>
<div class="flex flex-col justify-between py-4">
<div>
<span class="text-primary font-label-md mb-2 block uppercase">Fintech</span>
<h3 class="font-headline-lg mb-4">NeoBank Scalability</h3>
<p class="font-body-md text-on-surface-variant mb-6">Built a high-concurrency ledger system supporting 50k transactions per second.</p>
</div>
<button class="flex items-center gap-2 font-label-md text-primary">Read Case Study <span class="material-symbols-outlined">arrow_right_alt</span></button>
</div>
</div>
<!-- Study 2 -->
<div class="min-w-[80vw] md:min-w-[600px] bg-surface-container rounded-2xl p-6 md:p-8 flex flex-col md:flex-row gap-6 md:gap-8 accelerated-layer">
<div class="w-full md:w-1/2 aspect-video rounded-xl overflow-hidden shrink-0">
<div class="w-full h-full bg-cover bg-center accelerated-layer" data-alt="A professional medical technician looking at a wall-mounted digital screen displaying an AI-driven MRI analysis" style="background-image: url(&quot;https://lh3.googleusercontent.com/aida-public/AB6AXuAcLjewmN3NJ10k4uuNxnZjAqojCDal2R_RKPJ0y2lSqxkHYh8W5b5o_UDA8tDTyZ0zKqiq6n6N89XTK1ypdrvt_C7dy4bBn0Lk-ar6T7qODxDqHfPAVumwzqgGqaGETXkQ-dvCbv82VrGlbsu3YggtAVU848jiBq63PYVAh4-OR_d5g3td7uzh-ThZOIhr986gKsJT5Czz2tnLQbgcM2qhWIG06R_GgLaIwuBz65oy_Kk4u1iVJkA&quot;);"></div>
</div>
<div class="flex flex-col justify-between py-4">
<div>
<span class="text-secondary font-label-md mb-2 block uppercase">Healthtech</span>
<h3 class="font-headline-lg mb-4">AI Diagnostics Hub</h3>
<p class="font-body-md text-on-surface-variant mb-6">Deployment of a distributed ML model for early-stage pathology detection across 12 hospitals.</p>
</div>
<button class="flex items-center gap-2 font-label-md text-primary">Read Case Study <span class="material-symbols-outlined">arrow_right_alt</span></button>
</div>
</div>
<!-- Study 3 -->
<div class="min-w-[80vw] md:min-w-[600px] bg-surface-container rounded-2xl p-6 md:p-8 flex flex-col md:flex-row gap-6 md:gap-8 accelerated-layer">
<div class="w-full md:w-1/2 aspect-video rounded-xl overflow-hidden shrink-0">
<div class="w-full h-full bg-cover bg-center accelerated-layer" data-alt="A large-scale automated shipping port at night" style="background-image: url(&quot;https://lh3.googleusercontent.com/aida-public/AB6AXuDaePOw9tRxLDM9DHuaoM6HCbVf37gF6X9upSjKirzZ_6_PgYhSQ4RQl_lDJ6z_Ti2jh5s3o_BknnIqiHuGJHj6JDDVqJadrzHlSKnmhX_NEyyMr_3uV5hb5wkcGCYV1m7r6KqaBK4vojA4BEy1XXK_QtF9bQXPbHsnMZJzqkn17AxGIdgWgtSQNebZV1wMVx_E36ab9yb-5BnVi-cX1OjgQdcIh8WrrKdMEPmn_1HR-xXOx3wN8Zw&quot;);"></div>
</div>
<div class="flex flex-col justify-between py-4">
<div>
<span class="text-tertiary font-label-md mb-2 block uppercase">Logistics</span>
<h3 class="font-headline-lg mb-4">Global Fleet AI</h3>
<p class="font-body-md text-on-surface-variant mb-6">Predictive routing engine reducing fuel consumption by 22% for a fleet of 4,000+ vessels.</p>
</div>
<button class="flex items-center gap-2 font-label-md text-primary">Read Case Study <span class="material-symbols-outlined">arrow_right_alt</span></button>
</div>
</div>
</div>
<div class="mt-16 text-center">
<a class="bg-primary text-on-primary px-10 py-4 rounded-lg font-headline-lg" href="/case-studies">View All Case Studies</a>
</div>
</section>
<!-- 9. Industry Solutions (DARK TABBED) -->
<section class="py-16 md:py-section-gap relative overflow-hidden bg-[#000000]" id="industry-solutions-section">
<div class="absolute inset-0 w-full h-full pointer-events-none z-0">
<canvas id="industry-solutions-precision-canvas" class="w-full h-full block"></canvas>
</div>
<div class="max-w-container-max mx-auto px-margin-mobile sm:px-margin-tablet md:px-margin-desktop relative z-10">
<div class="grid lg:grid-cols-2 gap-10 lg:gap-20 items-center">
<div>
<h2 class="font-display-lg text-headline-xl text-white mb-8">Industry Solutions</h2>
<div class="space-y-4">
<button class="tab-btn w-full text-left p-6 rounded-xl border border-white/10 transition-all dark-glass active-tab" id="tab-0">
<span class="font-headline-lg text-white block">Fintech</span>
<p class="text-surface-variant/60 font-body-md mt-2">Solving high-frequency processing challenges.</p>
</button>
<button class="tab-btn w-full text-left p-6 rounded-xl border border-white/10 hover:bg-white/5 transition-all" id="tab-1">
<span class="font-headline-lg text-white block">Healthcare</span>
<p class="text-surface-variant/60 font-body-md mt-2">Bridging legacy systems with modern AI.</p>
</button>
<button class="tab-btn w-full text-left p-6 rounded-xl border border-white/10 hover:bg-white/5 transition-all" id="tab-2">
<span class="font-headline-lg text-white block">Logistics</span>
<p class="text-surface-variant/60 font-body-md mt-2">Optimizing supply chains with real-time data.</p>
</button>
</div>
</div>
<div class="p-6 md:p-12 dark-glass rounded-3xl min-h-[300px] md:min-h-[400px] flex flex-col justify-center accelerated-layer" id="tab-content">
<div class="tab-content-item" id="content-0">
<h3 class="font-display-lg text-headline-xl text-primary-fixed-dim mb-6">Fintech Resilience</h3>
<div class="space-y-6">
<div>
<h4 class="text-white font-label-md uppercase mb-2">Problem</h4>
<p class="text-surface-variant">Inconsistent latency in cross-border settlements leading to significant liquidity risk.</p>
</div>
<div class="p-6 bg-white/5 rounded-xl border-l-4 border-primary">
<h4 class="text-white font-label-md uppercase mb-2">Our Solution</h4>
<p class="text-surface-variant">We architected a distributed event-driven ledger that reduced finality times from 4 hours to 12 seconds.</p>
</div>
</div>
</div>
<div class="tab-content-item hidden" id="content-1">
<h3 class="font-display-lg text-headline-xl text-secondary-fixed-dim mb-6">Secure Healthcare</h3>
<div class="space-y-6">
<div>
<h4 class="text-white font-label-md uppercase mb-2">Problem</h4>
<p class="text-surface-variant">Siloed patient records and manual entry errors causing operational friction.</p>
</div>
<div class="p-6 bg-white/5 rounded-xl border-l-4 border-secondary">
<h4 class="text-white font-label-md uppercase mb-2">Our Solution</h4>
<p class="text-surface-variant">Implemented a HIPAA-compliant unified data platform with automated NLP for record ingestion.</p>
</div>
</div>
</div>
<div class="tab-content-item hidden" id="content-2">
<h3 class="font-display-lg text-headline-xl text-tertiary-fixed-dim mb-6">Smart Logistics</h3>
<div class="space-y-6">
<div>
<h4 class="text-white font-label-md uppercase mb-2">Problem</h4>
<p class="text-surface-variant">Lack of visibility into last-mile delivery and fuel inefficiencies.</p>
</div>
<div class="p-6 bg-white/5 rounded-xl border-l-4 border-tertiary">
<h4 class="text-white font-label-md uppercase mb-2">Our Solution</h4>
<p class="text-surface-variant">Digital twin simulation of the delivery network utilizing real-time GPS and weather data for routing.</p>
</div>
</div>
</div>
</div>
</div>
</div>
</section>
<!-- 10. Transforming Ideas (Product Showcases) -->
<section class="py-16 md:py-section-gap max-w-container-max mx-auto px-margin-mobile sm:px-margin-tablet md:px-margin-desktop">
<h2 class="font-display-lg text-display-lg-mobile md:text-headline-xl mb-8 md:mb-16 text-center">Transforming Ideas into Ecosystems</h2>
<div class="space-y-10 md:space-y-16 lg:space-y-32">
<!-- Product 1 -->
<div class="flex flex-col lg:flex-row items-center gap-10 lg:gap-20">
<div class="lg:w-1/2 order-2 lg:order-1">
<div class="flex items-center gap-4 mb-6">
<div class="w-12 h-12 bg-primary-fixed rounded-full flex items-center justify-center font-bold text-primary">01</div>
<h3 class="font-headline-xl">NexCore Cloud OS</h3>
</div>
<p class="font-body-lg text-on-surface-variant mb-8">A proprietary cloud-native operating layer designed to abstract infrastructure complexity, allowing developers to focus solely on business logic.</p>
<ul class="space-y-4 mb-10">
<li class="flex items-center gap-3 font-body-md"><span class="material-symbols-outlined text-primary">check_circle</span> Zero-configuration auto-scaling</li>
<li class="flex items-center gap-3 font-body-md"><span class="material-symbols-outlined text-primary">check_circle</span> Multi-region traffic steering</li>
<li class="flex items-center gap-3 font-body-md"><span class="material-symbols-outlined text-primary">check_circle</span> Integrated security hardening</li>
</ul>
<button class="text-primary font-bold flex items-center gap-2 group">Explorer Product <span class="material-symbols-outlined group-hover:translate-x-1 transition-transform">arrow_right_alt</span></button>
</div>
<div class="lg:w-1/2 order-1 lg:order-2">
<div class="relative">
<div class="absolute -inset-4 bg-primary/10 blur-2xl rounded-full"></div>
<div class="relative aspect-video bg-cover bg-center rounded-2xl shadow-xl accelerated-layer" data-alt="A clean, minimalist 3D rendering of a futuristic software interface" style="background-image: url(&quot;https://lh3.googleusercontent.com/aida-public/AB6AXuC-wAkZ1JBwHrAj1F93BFkWPS7MV2tvnomqtCHsR7NfimqwzxTeSjL-yrvTa32MRsb4s1JTkZwoQZAsz94kPA-Bbkq61A0t8e1lz4kIcDk2QVPkaxbX_FrrSZi87xpWXbjCp6jVD0aZg0MtUsjXCGQaAVBO9mePJgg38QPF2LsmqaJAqpCUfdus3WlvBHpIMYCoEjigAxPmFzf9pqkUvC7O1Hv7lzO0y9g9B66rFteNMTHKa8wbNbo&quot;);"></div>
</div>
</div>
</div>
<!-- Product 2 -->
<div class="flex flex-col lg:flex-row items-center gap-10 lg:gap-20">
<div class="lg:w-1/2">
<div class="relative">
<div class="absolute -inset-4 bg-secondary/10 blur-2xl rounded-full"></div>
<div class="relative aspect-video bg-cover bg-center rounded-2xl shadow-xl accelerated-layer" data-alt="A detailed digital twin of an automated warehouse" style="background-image: url(&quot;https://lh3.googleusercontent.com/aida-public/AB6AXuDjX-bJXtGmPZkdNjn0V6hI9nK0gSRxRmtpvl4B_DdAy_MX-TI2LmvrXSOTdjSAHujqm_RT5uUKRTWMukfNBxIZmpLjiEVv0bBjYcQZrzPnTDWNQCRzPHf9JO5DdcKjlwFtZ1V7nxi7XY5oLyVmal8eDUc9ig3jjJSxC6-LbtUBburM1eI5ZzoNXwzQHA2Y4p2_l5SaP4GpyjNSgb17rFnRg0NfdFkTzCWz_oKtvPewtm02Shs9w7o&quot;);"></div>
</div>
</div>
<div class="lg:w-1/2">
<div class="flex items-center gap-4 mb-6">
<div class="w-12 h-12 bg-secondary-fixed rounded-full flex items-center justify-center font-bold text-secondary">02</div>
<h3 class="font-headline-xl">Nexus AI Engine</h3>
</div>
<p class="font-body-lg text-on-surface-variant mb-8">A distributed AI/ML inference platform for real-time model deployment, automated training pipelines, and intelligent data processing at scale.</p>
<ul class="space-y-4 mb-10">
<li class="flex items-center gap-3 font-body-md"><span class="material-symbols-outlined text-secondary">check_circle</span> Automated model training &amp; deployment</li>
<li class="flex items-center gap-3 font-body-md"><span class="material-symbols-outlined text-secondary">check_circle</span> Real-time inference at scale</li>
<li class="flex items-center gap-3 font-body-md"><span class="material-symbols-outlined text-secondary">check_circle</span> Intelligent data pipeline orchestration</li>
</ul>
<button class="text-secondary font-bold flex items-center gap-2 group">Explorer Product <span class="material-symbols-outlined group-hover:translate-x-1 transition-transform">arrow_right_alt</span></button>
</div>
</div>
</div>
</section>
<!-- 11. Testimonials -->
<section class="bg-surface-container py-16 md:py-section-gap">
<div class="max-w-container-max mx-auto px-margin-mobile sm:px-margin-tablet md:px-margin-desktop">
<div class="text-center mb-16">
<h2 class="font-display-lg text-headline-xl">Trusted by the Elite</h2>
</div>
<div class="grid md:grid-cols-3 gap-gutter">
<div class="glass-card p-6 md:p-10 rounded-3xl relative accelerated-layer">
<span class="material-symbols-outlined text-primary/20 text-6xl absolute top-6 right-8">format_quote</span>
<div class="flex gap-1 mb-6 text-primary">
<span class="material-symbols-outlined" style="font-variation-settings: &quot;FILL&quot; 1;">star</span>
<span class="material-symbols-outlined" style="font-variation-settings: &quot;FILL&quot; 1;">star</span>
<span class="material-symbols-outlined" style="font-variation-settings: &quot;FILL&quot; 1;">star</span>
<span class="material-symbols-outlined" style="font-variation-settings: &quot;FILL&quot; 1;">star</span>
<span class="material-symbols-outlined" style="font-variation-settings: &quot;FILL&quot; 1;">star</span>
</div>
<p class="font-body-lg mb-8 italic text-on-surface">"nextek Sol didn't just provide a service, they architected a total transformation. Their engineering presision and refusal to settle for good enough is what diferentiates them from every other firm we've ever worked with."</p>
<div>
<p class="font-headline-lg text-body-lg">Marcus Vancity</p>
<p class="font-label-md text-on-surface-variant">CTO, Global Infra Dynamics</p>
</div>
</div>
<div class="glass-card p-6 md:p-10 rounded-3xl relative accelerated-layer">
<span class="material-symbols-outlined text-primary/20 text-6xl absolute top-6 right-8">format_quote</span>
<div class="flex gap-1 mb-6 text-primary">
<span class="material-symbols-outlined" style="font-variation-settings: &quot;FILL&quot; 1;">star</span>
<span class="material-symbols-outlined" style="font-variation-settings: &quot;FILL&quot; 1;">star</span>
<span class="material-symbols-outlined" style="font-variation-settings: &quot;FILL&quot; 1;">star</span>
<span class="material-symbols-outlined" style="font-variation-settings: &quot;FILL&quot; 1;">star</span>
<span class="material-symbols-outlined" style="font-variation-settings: &quot;FILL&quot; 1;">star</span>
</div>
<p class="font-body-lg mb-8 italic text-on-surface">"the level of technical rigor nextek brought to our cloud migration was un-precedented. they didn't just move our workloads, they optimized our entire cost to performance ratio."</p>
<div>
<p class="font-headline-lg text-body-lg">Sarah Chen</p>
<p class="font-label-md text-on-surface-variant">Head of Platform, FinStream</p>
</div>
</div>
<div class="glass-card p-6 md:p-10 rounded-3xl relative accelerated-layer">
<span class="material-symbols-outlined text-primary/20 text-6xl absolute top-6 right-8">format_quote</span>
<div class="flex gap-1 mb-6 text-primary">
<span class="material-symbols-outlined" style="font-variation-settings: &quot;FILL&quot; 1;">star</span>
<span class="material-symbols-outlined" style="font-variation-settings: &quot;FILL&quot; 1;">star</span>
<span class="material-symbols-outlined" style="font-variation-settings: &quot;FILL&quot; 1;">star</span>
<span class="material-symbols-outlined" style="font-variation-settings: &quot;FILL&quot; 1;">star</span>
<span class="material-symbols-outlined" style="font-variation-settings: &quot;FILL&quot; 1;">star</span>
</div>
<p class="font-body-lg mb-8 italic text-on-surface">"architecting for 99.999% availability is a massive chalenge. Nextek Sol delivered a resilient infrastructure that has weatheredevery peak without a single millisecond of downtime."</p>
<div>
<p class="font-headline-lg text-body-lg">David Vance</p>
<p class="font-label-md text-on-surface-variant">VP Infrastructure, Global Connect</p>
</div>
</div>
</div>
</div>
</section>
<!-- 12. Absolute Availability Section -->
<section class="py-16 md:py-section-gap relative overflow-hidden bg-black" id="resilient-infrastructure-section">
<div class="absolute inset-0 w-full h-full pointer-events-none z-0">
<canvas id="resilient-precision-canvas" class="w-full h-full block"></canvas>
</div>
<div class="max-w-container-max mx-auto px-margin-mobile sm:px-margin-tablet md:px-margin-desktop relative z-10">
<div class="p-6 md:p-12 rounded-3xl border border-primary/20 bg-transparent backdrop-blur-sm accelerated-layer"><div class="grid lg:grid-cols-10 gap-8 md:gap-12 items-center"><div class="lg:col-span-6"><div class="max-w-3xl mb-8 md:mb-16"><span class="text-primary-fixed-dim font-label-md uppercase tracking-widest mb-4 block">Zero-Downtime Data Sovereignty</span><h2 class="font-display-lg text-[24px] sm:text-[28px] md:text-headline-xl mb-6 text-white font-bold">Resilient Infrastructure for <span class="text-primary-fixed-dim">Absolute Availability</span></h2><p class="font-body-lg text-surface-variant/80">Engineered for absolute survival. Our decentralized architecture ensures total resilience against physical infrastructure failure, regional conflict, and kinetic threats. In the event of a total localized catastrophe, your systems remain operational and transition instantly to surviving global nodes.</p></div><div class="grid md:grid-cols-3 gap-6"><div class="dark-glass p-6 rounded-2xl border border-primary/20 hover:border-primary/50 transition-all group accelerated-layer"><div class="w-10 h-10 rounded-lg bg-primary-container flex items-center justify-center text-primary-fixed mb-4 group-hover:scale-110 transition-transform"><span class="material-symbols-outlined">shield</span></div><h4 class="font-headline-lg text-[18px] text-white mb-2">Attack Resilience</h4><p class="text-[14px] text-surface-variant/70">Neutralizing kinetic and cyber threats at the edge.</p></div><div class="dark-glass p-6 rounded-2xl border border-primary/20 hover:border-primary/50 transition-all group accelerated-layer"><div class="w-10 h-10 rounded-lg bg-primary-container flex items-center justify-center text-primary-fixed mb-4 group-hover:scale-110 transition-transform"><span class="material-symbols-outlined">dynamic_form</span></div><h4 class="font-headline-lg text-[18px] text-white mb-2">Automatic Failover</h4><p class="text-[14px] text-surface-variant/70">Instant redirection prevents site crashes.</p></div><div class="dark-glass p-6 rounded-2xl border border-primary/20 hover:border-primary/50 transition-all group accelerated-layer"><div class="w-10 h-10 rounded-lg bg-primary-container flex items-center justify-center text-primary-fixed mb-4 group-hover:scale-110 transition-transform"><span class="material-symbols-outlined">database</span></div><h4 class="font-headline-lg text-[18px] text-white mb-2">Stateful Recovery</h4><p class="text-[14px] text-surface-variant/70">Real-time data replication across zones.</p></div></div></div><div class="lg:col-span-4"><div class="glass-card p-4 rounded-3xl shadow-xl border border-white/10 overflow-hidden group accelerated-layer"><div class="aspect-video rounded-2xl overflow-hidden relative"><img alt="Global resilient infrastructure network visualization" class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" decoding="async" loading="lazy" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDZ_tXR0cMmkW-Hgc9Hnx4_1kI045Vgfy8ARrPSCv6JkjvwsQ-WQ6R7FqdgRR-EmZ5cDP60pOGruhAvb_wwyiurXDsvp5Qo9TGGzdepPC0z1LB-Z89_EfRRKlHb1litcenCLh0PIUDO__9dN_7uXWh5HaWSqg7-6vfxkhZuaYESXMLuRBqYiaWvcwTkUNVKJSRhvhHRXPa2bvtQ8FuZj9iJove9riys9joN3U8wUqvt8ZSdMtz4JA0"></div></div></div></div></div>
</div>
</section>
<section class="py-16 md:py-section-gap max-w-container-max mx-auto px-margin-mobile sm:px-margin-tablet md:px-margin-desktop">
<h2 class="font-display-lg text-display-lg-mobile md:text-headline-xl mb-8 md:mb-16 text-center">Engineered with Precision</h2>
<div class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
<div class="flex flex-col items-center p-6 border border-outline-variant/30 rounded-xl hover:border-primary/40 transition-all accelerated-layer">
<span class="material-symbols-outlined text-4xl mb-3 text-on-surface-variant">terminal</span>
<span class="font-label-md">React / Next.js</span>
</div>
<div class="flex flex-col items-center p-6 border border-outline-variant/30 rounded-xl hover:border-primary/40 transition-all accelerated-layer">
<span class="material-symbols-outlined text-4xl mb-3 text-on-surface-variant">data_object</span>
<span class="font-label-md">TypeScript</span>
</div>
<div class="flex flex-col items-center p-6 border border-outline-variant/30 rounded-xl hover:border-primary/40 transition-all accelerated-layer">
<span class="material-symbols-outlined text-4xl mb-3 text-on-surface-variant">cloud_sync</span>
<span class="font-label-md">Kubernetes</span>
</div>
<div class="flex flex-col items-center p-6 border border-outline-variant/30 rounded-xl hover:border-primary/40 transition-all accelerated-layer">
<span class="material-symbols-outlined text-4xl mb-3 text-on-surface-variant">memory</span>
<span class="font-label-md">Rust</span>
</div>
<div class="flex flex-col items-center p-6 border border-outline-variant/30 rounded-xl hover:border-primary/40 transition-all accelerated-layer">
<span class="material-symbols-outlined text-4xl mb-3 text-on-surface-variant">analytics</span>
<span class="font-label-md">Python / PyTorch</span>
</div>
<div class="flex flex-col items-center p-6 border border-outline-variant/30 rounded-xl hover:border-primary/40 transition-all accelerated-layer">
<span class="material-symbols-outlined text-4xl mb-3 text-on-surface-variant">database</span>
<span class="font-label-md">PostgreSQL</span>
</div>
</div><div class="mt-12 flex justify-center">
<button class="border border-primary text-primary px-8 py-3 rounded-lg font-label-md hover:bg-primary-fixed transition-all">
    View More
  </button>
</div>
</section>
<!-- 13. Insights -->
<section class="py-16 md:py-section-gap bg-surface">
<div class="max-w-container-max mx-auto px-margin-mobile sm:px-margin-tablet md:px-margin-desktop">
<div class="flex flex-col md:flex-row justify-between items-start md:items-end mb-8 md:mb-16 gap-4 md:gap-0">
<div>
<h2 class="font-display-lg text-headline-xl">Latest Insights</h2>
<p class="font-body-lg text-on-surface-variant">Thought leadership on engineering culture.</p>
</div>
<a class="font-label-md text-primary border-b border-primary pb-1" href="/case-studies">View All Articles</a>
</div>
<div class="grid md:grid-cols-3 gap-gutter">
<article class="group cursor-pointer accelerated-layer">
<div class="aspect-video rounded-xl overflow-hidden mb-6">
<div class="w-full h-full bg-cover bg-center transition-transform duration-500 group-hover:scale-105 accelerated-layer" data-alt="A futuristic workspace with multiple coding monitors" style="background-image: url(&quot;https://lh3.googleusercontent.com/aida-public/AB6AXuA6XGgGX4OqTXqIEFsmxMCoZmSAMuPGW0l0GW-4G7dzZkxRk-vpXinqaQ1prKw6D5RfiUFWVDA_J65Nag4dW09mJZ1tvsKKRo0_r3oeeliuc0oswhc5B82Nw5yG5b29kOI7a3h_q0i5zA7TQtuiPs1k-FkxmyFMvS3S3yI4mf8HNXD2i2HL0czhtsq9V9PkXa2Lhu8Lkruav0zMX19yn0xFfEFGlua3FJUa6icfSAHokv6Z5ZkT_uQ&quot;);"></div>
</div>
<span class="text-primary font-label-md uppercase mb-2 block">Engineering</span>
<h4 class="font-headline-lg mb-4 group-hover:text-primary transition-colors">The Cost of Technical Debt in Enterprise Scaling</h4>
<p class="font-body-md text-on-surface-variant mb-6 line-clamp-2">Understanding why long-term performance requires immediate architectural investment.</p>
<div class="flex items-center gap-3">
<div class="w-8 h-8 rounded-full bg-surface-container"></div>
<span class="font-label-md text-on-surface-variant">Ali Hasnain · 8 min read</span>
</div>
</article>
<article class="group cursor-pointer accelerated-layer">
<div class="aspect-video rounded-xl overflow-hidden mb-6">
<div class="w-full h-full bg-cover bg-center transition-transform duration-500 group-hover:scale-105 accelerated-layer" data-alt="Abstract neural network pathways glowing in electric purple" style="background-image: url(&quot;https://lh3.googleusercontent.com/aida-public/AB6AXuBmY99LWL2K4Yf4uuVGG_X0MmgttvzRgMt2d5CWi4Jiya2VGDyZrJXSm-av-YG4OYZOvstU8T_LRfoqk_G4ogJqQUEEYSe6kKRyxhGr496ZjG9uqX1JiCA7J5kuQ31c330BfhuD2_leyeSrKnIX3cAl4CtYP-3NlmruL7X-YvdTkh5o0aAe2pXV3RtY5-3MKaX5ts95Cr-L4jIrf8Gc-nQsGgAPmAh3lnathQLKdMR9QxrPewvrg1w&quot;);"></div>
</div>
<span class="text-secondary font-label-md uppercase mb-2 block">Artificial Intelligence</span>
<h4 class="font-headline-lg mb-4 group-hover:text-secondary transition-colors">Deploying Private LLMs for Data Sovereignty</h4>
<p class="font-body-md text-on-surface-variant mb-6 line-clamp-2">How to leverage state-of-the-art language models without compromising enterprise security.</p>
<div class="flex items-center gap-3">
<div class="w-8 h-8 rounded-full bg-surface-container"></div>
<span class="font-label-md text-on-surface-variant">Jawad Khan · 12 min read</span>
</div>
</article>
<article class="group cursor-pointer accelerated-layer">
<div class="aspect-video rounded-xl overflow-hidden mb-6">
<div class="w-full h-full bg-cover bg-center transition-transform duration-500 group-hover:scale-105 accelerated-layer" data-alt="A sleek white server rack in a modern data center" style="background-image: url(&quot;https://lh3.googleusercontent.com/aida-public/AB6AXuCwwhvDjaIwm-qv6PsUBZN761WyCw0sIi2YVvjJXxUPDmZhbGX49xNfUR1a_-n_OPewgFNy0OkN0ErOevr4y4Ij8fjBbPcJdCq5f-L8Myf8uXtgBTau9O2TiMQ056fDZYMfSfWq9Yw9eVd3Nl7doaxoeAuawwSmcblmeJMjDZybiqpVL4Tb8Ql0ZxyqSmkklthwQWKRlTRYTMdS8xDpl5plFRIm1DYpuAToCyyPpJaLer0AVqBZ3Qg&quot;);"></div>
</div>
<span class="text-tertiary font-label-md uppercase mb-2 block">Infrastructure</span>
<h4 class="font-headline-lg mb-4 group-hover:text-tertiary transition-colors">Serverless vs. Edge: Choosing the Right Layer</h4>
<p class="font-body-md text-on-surface-variant mb-6 line-clamp-2">Evaluating deployment strategies for mission-critical low-latency applications.</p>
<div class="flex items-center gap-3">
<div class="w-8 h-8 rounded-full bg-surface-container"></div>
<span class="font-label-md text-on-surface-variant">Muhammad Umair · 10 min read</span>
</div>
</article>
</div>
</div>
</section>
`;
