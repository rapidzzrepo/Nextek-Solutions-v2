export const html = `
<!-- Hero Section -->
<header class="relative w-full overflow-hidden min-h-[750px] md:min-h-[800px] flex items-center" id="solutions-hero">
<canvas id="solutions-star-bg" class="absolute inset-0 z-0 pointer-events-none opacity-60 accelerated-layer"></canvas>
<div class="absolute -top-24 -right-24 w-96 h-96 bg-primary-container/10 rounded-full blur-[100px] pointer-events-none z-[1] transition-all duration-1000 opacity-100 translate-y-0"></div>
<div class="relative z-10 px-margin-mobile sm:px-margin-tablet md:px-margin-desktop py-16 md:py-section-gap max-w-container-max mx-auto">
<div class="max-w-4xl transition-all duration-1000 opacity-100 translate-y-0 text-center">
<div class="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary-container/10 border border-primary/20 mb-8">
<span class="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
<span class="font-label-md text-primary text-[12px] uppercase tracking-widest">Solutions Portal v2.0</span>
</div>
<h1 class="font-display-lg text-[28px] sm:text-display-lg-mobile md:text-display-lg font-bold text-on-surface mb-8 leading-[1.1]">
                Solving <span class="text-gradient">Complexity</span> with Precision Engineering.
            </h1>
<p class="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mb-12">
                We bridge the gap between ambitious vision and technical reality. Nextek Sol delivers high-fidelity engineering systems designed for sovereign performance and global scale.
            </p>
<div class="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto sm:max-w-none">
<button class="bg-primary text-on-primary px-6 md:px-8 py-3 md:py-4 rounded-xl font-headline-lg text-body-md sm:flex-1 flex items-center justify-center hover:shadow-lg hover:shadow-primary/20 transition-all">Explore Our Pillars</button>
<button class="bg-surface-container border border-outline-variant text-on-surface px-6 md:px-8 py-3 md:py-4 rounded-xl font-headline-lg text-body-md sm:flex-1 flex items-center justify-center hover:bg-surface-variant transition-all">Technical Documentation</button>
</div>
</div>
</div>
</header>
<section class="relative w-full overflow-hidden" style="background-color: rgb(0, 0, 0);">
<div class="absolute inset-0 w-full h-full pointer-events-none z-0">
<canvas id="solutions-precision-canvas" class="w-full h-full block"></canvas>
</div>
<div class="relative z-10 px-margin-mobile sm:px-margin-tablet md:px-margin-desktop py-16 md:py-section-gap max-w-container-max mx-auto">
<div class="text-center mb-16">
<h2 class="font-headline-xl text-headline-xl mb-4 text-white">Engineered with <span class="text-primary-fixed-dim">Precision</span></h2>
<p class="text-white/50 max-w-2xl mx-auto">Our core technology stack is selected for performance, safety, and global scalability.</p>
</div>
<div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-5">
<div class="glass-card-v2 rounded-xl p-6 flex flex-col items-center text-center stagger-fade" style="transition-delay: 0ms;">
<span class="material-symbols-outlined icon text-primary-fixed-dim mb-4 text-3xl">javascript</span>
<span class="font-label-md text-white/70">React / Next.js</span>
</div>
<div class="glass-card-v2 rounded-xl p-6 flex flex-col items-center text-center stagger-fade" style="transition-delay: 80ms;">
<span class="material-symbols-outlined icon text-primary-fixed-dim mb-4 text-3xl">code</span>
<span class="font-label-md text-white/70">TypeScript</span>
</div>
<div class="glass-card-v2 rounded-xl p-6 flex flex-col items-center text-center stagger-fade" style="transition-delay: 160ms;">
<span class="material-symbols-outlined icon text-primary-fixed-dim mb-4 text-3xl">cloud</span>
<span class="font-label-md text-white/70">Kubernetes</span>
</div>
<div class="glass-card-v2 rounded-xl p-6 flex flex-col items-center text-center stagger-fade" style="transition-delay: 240ms;">
<span class="material-symbols-outlined icon text-primary-fixed-dim mb-4 text-3xl">memory</span>
<span class="font-label-md text-white/70">Rust</span>
</div>
<div class="glass-card-v2 rounded-xl p-6 flex flex-col items-center text-center stagger-fade" style="transition-delay: 320ms;">
<span class="material-symbols-outlined icon text-primary-fixed-dim mb-4 text-3xl">psychology</span>
<span class="font-label-md text-white/70">Python / PyTorch</span>
</div>
<div class="glass-card-v2 rounded-xl p-6 flex flex-col items-center text-center stagger-fade" style="transition-delay: 400ms;">
<span class="material-symbols-outlined icon text-primary-fixed-dim mb-4 text-3xl">database</span>
<span class="font-label-md text-white/70">PostgreSQL</span>
</div>
</div>
<div class="text-center mt-16">
<button class="bg-primary text-on-primary px-6 md:px-10 py-3 md:py-4 rounded-xl font-label-md text-label-md hover:opacity-90 active:scale-95 transition-all shadow-lg shadow-primary/20">View Full Stack</button>
</div>
</div>
</section><section class="px-margin-mobile sm:px-margin-tablet md:px-margin-desktop py-16 md:py-section-gap bg-surface-container-low transition-all duration-1000 opacity-100 translate-y-0">
<div class="max-w-container-max mx-auto">
<div class="text-center mb-12 md:mb-24">
<h2 class="font-headline-xl text-headline-xl mb-4">Strategic Engineering Pillars</h2>
<p class="text-on-surface-variant max-w-2xl mx-auto">Purpose-built frameworks that consolidate specialized expertise into outcome-driven solutions.</p>
</div>
<!-- Pillar 1: AI & ML -->
<div class="grid md:grid-cols-2 gap-10 md:gap-20 items-center mb-16 md:mb-section-gap">
<div class="order-2 md:order-1">
<img alt="Intelligent Automation Visual" class="rounded-2xl shadow-2xl w-full object-cover aspect-video" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBydwNv-aEKyVxcguvHSipCE_EdSrLdoupvuxR-BxvkGsvTzLSyzY9MK5LD-Tn2qwSupCZE_hPh5r6TCWhqGWtG0NEE2Dj5J96lpI_Omd2XkN3REWG4-MG3t4JEhhcJOQJ0-fB0HEsvTXA9r6IftnNp8kbSmAdcnz9VhFQn-7LYNAOPnEo4_BsQIqE5-lIO1KgaOPwiC67q0DwNXDdut9R4j1xb16i-XVcSd3RtTlEPs8Vg_GlSiiA">
</div>
<div class="order-1 md:order-2">
<div class="text-primary font-label-md uppercase tracking-widest mb-4">Pillar 01</div>
<h3 class="font-headline-xl text-headline-xl mb-6">Intelligent Automation &amp; ML</h3>
<p class="text-on-surface-variant text-body-lg mb-8 leading-relaxed">
                        Transforming data into sovereign intelligence. We deploy proprietary LLMs and generative models fine-tuned for high-stakes enterprise domains.
                    </p>
<ul class="space-y-4 mb-10">
<li class="flex items-center gap-3">
<span class="material-symbols-outlined text-primary">analytics</span>
<span class="font-body-md">Predictive pattern recognition &amp; anomaly detection</span>
</li>
<li class="flex items-center gap-3">
<span class="material-symbols-outlined text-primary">auto_awesome</span>
<span class="font-body-md">Generative AI workflows for process optimization</span>
</li>
<li class="flex items-center gap-3">
<span class="material-symbols-outlined text-primary">security</span>
<span class="font-body-md">Privacy-preserving federated learning models</span>
</li>
</ul>
<div class="bg-surface p-6 rounded-xl border border-primary/10 inline-block">
<div class="text-primary font-bold text-3xl mb-1">65% Faster</div>
<div class="text-on-surface-variant text-sm font-label-md uppercase">Average Deployment Acceleration</div>
</div>
</div>
</div>
<!-- Pillar 2: Global Infrastructure -->
<div class="grid md:grid-cols-2 gap-10 md:gap-20 items-center mb-16 md:mb-section-gap">
<div>
<div class="text-primary font-label-md uppercase tracking-widest mb-4">Pillar 02</div>
<h3 class="font-headline-xl text-headline-xl mb-6">Global Resilient Infrastructure</h3>
<p class="text-on-surface-variant text-body-lg mb-8 leading-relaxed">
                        Architecting absolute availability. Multi-region, self-healing cloud-native systems designed for the zero-trust era.
                    </p>
<ul class="space-y-4 mb-10">
<li class="flex items-center gap-3">
<span class="material-symbols-outlined text-primary">public</span>
<span class="font-body-md">Edge computing &amp; geo-distributed orchestration</span>
</li>
<li class="flex items-center gap-3">
<span class="material-symbols-outlined text-primary">cloud_done</span>
<span class="font-body-md">Kubernetes-driven auto-scaling architectures</span>
</li>
<li class="flex items-center gap-3">
<span class="material-symbols-outlined text-primary">verified_user</span>
<span class="font-body-md">Automated SOC2 &amp; GDPR compliance guardrails</span>
</li>
</ul>
<div class="bg-surface p-6 rounded-xl border border-primary/10 inline-block">
<div class="text-primary font-bold text-3xl mb-1">99.99%</div>
<div class="text-on-surface-variant text-sm font-label-md uppercase">Guaranteed Uptime SLA</div>
</div>
</div>
<div>
<img alt="Global Infrastructure Visual" class="rounded-2xl shadow-2xl w-full object-cover aspect-video" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB8XRzCYpojQJ3XKcVNugyatYXjMBLR3m5Yz1010a6rZpT3bbM0CnnXw1SzccuRwqhcUa7V2yqjVxSTzUaOrMjT781SnPzjRHV4wewX_89nH4R-Mu_GTgtVV3QHQMGfgOnxxF8uxJy__q4eWWlEo-PVvPe5bLiFL3iJbLYRdqpFq0JfTYD-EQ8NTeRvmy6SiW5yQhS7NlaEFRyZrwoKUtL9dRsjXq68IojzN4U0NSuuBz13l1JbxeA">
</div>
</div>
<!-- Pillar 3: Ecosystems -->
<div class="grid md:grid-cols-2 gap-10 md:gap-20 items-center">
<div class="order-2 md:order-1">
<img alt="High Performance Ecosystems" class="rounded-2xl shadow-2xl w-full object-cover aspect-video" src="https://lh3.googleusercontent.com/aida-public/AB6AXuARF9G8_y6k6Vgpx295OH8n9RA5KsCislaSZYy8lFK0DJVeqwGoP4OZg1gQNvKGRy2UEqDIBoYKqA0kz3ltbv6I2Unt7wMbv5RRWsUhoa5OhR1IOm9IqIvNN7MxUsPO8OYEpuAvokgZuDGd1Y5JWJt4OIZQfI9oJltKOPJnHNEsZ0r2a2OTGotCG-oD5T6BC2ira1EC-Q4hOlY6Kt88yWhGAUAL0J5dy4kYP7iifsea9ESUx6vw-Kw">
</div>
<div class="order-1 md:order-2">
<div class="text-primary font-label-md uppercase tracking-widest mb-4">Pillar 03</div>
<h3 class="font-headline-xl text-headline-xl mb-6">High-Performance Ecosystems</h3>
<p class="text-on-surface-variant text-body-lg mb-8 leading-relaxed">
                        Full-stack synthesis where code meets performance. We build integrated product ecosystems that deliver zero-latency experiences.
                    </p>
<ul class="space-y-4 mb-10">
<li class="flex items-center gap-3">
<span class="material-symbols-outlined text-primary">speed</span>
<span class="font-body-md">Low-latency event-driven API architectures</span>
</li>
<li class="flex items-center gap-3">
<span class="material-symbols-outlined text-primary">smartphone</span>
<span class="font-body-md">Native iOS/Android with 60FPS rendering</span>
</li>
<li class="flex items-center gap-3">
<span class="material-symbols-outlined text-primary">monitoring</span>
<span class="font-body-md">Real-time observability and telemetry suites</span>
</li>
</ul>
<div class="bg-surface p-6 rounded-xl border border-primary/10 inline-block">
<div class="text-primary font-bold text-3xl mb-1">&lt;100ms</div>
<div class="text-on-surface-variant text-sm font-label-md uppercase">System-wide Latency Threshold</div>
</div>
</div>
</div>
</div>
</section>
<!-- Vertical Market Focus -->
<section class="px-margin-mobile sm:px-margin-tablet md:px-margin-desktop py-16 md:py-section-gap max-w-container-max mx-auto transition-all duration-1000 opacity-100 translate-y-0">
<div class="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
<div class="max-w-xl">
<h2 class="font-headline-xl text-headline-xl mb-4">Domain Specialization</h2>
<p class="text-on-surface-variant">Our engineering protocols are adapted for the unique regulatory and technical constraints of critical industries.</p>
</div>
<a class="text-primary font-bold flex items-center gap-2 hover:gap-3 transition-all" href="#">Industry Reports <span class="material-symbols-outlined">arrow_forward</span></a>
</div>
<div class="grid grid-cols-1 md:grid-cols-3 gap-gutter">
<div class="glass-card p-6 md:p-8 rounded-2xl pillar-card">
<div class="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-6 text-primary">
<span class="material-symbols-outlined">payments</span>
</div>
<h4 class="font-headline-lg text-[22px] mb-3">Fintech</h4>
<p class="text-on-surface-variant text-body-md">High-frequency transaction processing and secure ledger synchronization for global finance.</p>
</div>
<div class="glass-card p-6 md:p-8 rounded-2xl pillar-card">
<div class="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-6 text-primary">
<span class="material-symbols-outlined">medical_services</span>
</div>
<h4 class="font-headline-lg text-[22px] mb-3">Healthcare</h4>
<p class="text-on-surface-variant text-body-md">HIPAA-compliant AI diagnostic tools and secure clinical data exchange protocols.</p>
</div>
<div class="glass-card p-6 md:p-8 rounded-2xl pillar-card">
<div class="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-6 text-primary">
<span class="material-symbols-outlined">local_shipping</span>
</div>
<h4 class="font-headline-lg text-[22px] mb-3">Logistics</h4>
<p class="text-on-surface-variant text-body-md">Real-time supply chain optimization and autonomous edge-routing algorithms.</p>
</div>
</div>
</section>
<!-- Engineering Protocol -->
<section class="relative w-full bg-inverse-surface overflow-hidden transition-all duration-1000 opacity-100 translate-y-0" style="background-color: rgb(0, 0, 0);">
<div class="absolute inset-0 w-full h-full pointer-events-none z-0">
<canvas id="protocol-precision-canvas" class="w-full h-full block"></canvas>
</div>
<div class="relative z-10 px-margin-mobile sm:px-margin-tablet md:px-margin-desktop py-16 md:py-section-gap max-w-container-max mx-auto">
<div class="grid md:grid-cols-2 gap-10 md:gap-20 items-center">
<div>
<h2 class="font-headline-xl text-[24px] sm:text-[28px] md:text-headline-xl text-white mb-8">Our Engineering Protocol</h2>
<div class="space-y-8 md:space-y-12">
<div class="flex gap-6 relative">
<div class="absolute left-5 top-10 bottom-[-40px] w-px bg-primary/30"></div>
<div class="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white font-bold shrink-0 z-10">1</div>
<div>
<h4 class="text-white font-bold text-[16px] sm:text-xl mb-2">Audit &amp; Discovery</h4>
<p class="text-surface-variant/70 text-body-md">Deep-dive technical assessment of legacy debt, architecture bottlenecks, and security posture.</p>
</div>
</div>
<div class="flex gap-6 relative">
<div class="absolute left-5 top-10 bottom-[-40px] w-px bg-primary/30"></div>
<div class="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white font-bold shrink-0 z-10">2</div>
<div>
<h4 class="text-white font-bold text-[16px] sm:text-xl mb-2">Architectural Blueprint</h4>
<p class="text-surface-variant/70 text-body-md">Designing high-fidelity schematics for sovereign cloud scaling and AI integration.</p>
</div>
</div>
<div class="flex gap-6">
<div class="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white font-bold shrink-0 z-10">3</div>
<div>
<h4 class="text-white font-bold text-[16px] sm:text-xl mb-2">Acceleration Phase</h4>
<p class="text-surface-variant/70 text-body-md">Rapid deployment of engineering squads to execute the blueprint with zero-downtime transition.</p>
</div>
</div>
</div>
</div>
<div class="relative flex justify-center">
<!-- Complex Architectural Visual placeholder with CSS -->
<div class="w-[250px] h-[250px] md:w-[400px] md:h-[400px] border-2 border-primary/20 rounded-full flex items-center justify-center animate-spin-slow">
<div class="w-[180px] h-[180px] md:w-[300px] md:h-[300px] border-2 border-primary/40 border-dashed rounded-full flex items-center justify-center animate-spin-reverse">
<div class="w-16 h-16 md:w-24 md:h-24 bg-primary rounded-2xl flex items-center justify-center shadow-[0_0_50px_rgba(99,14,212,0.5)]">
<span class="material-symbols-outlined text-white text-[32px] md:text-[48px]">terminal</span>
</div>
</div>
</div>
</div>
</div>
</div>
</section>
<!-- Final CTA Section -->
<section class="px-margin-mobile sm:px-margin-tablet md:px-margin-desktop py-16 md:py-section-gap max-w-container-max mx-auto text-center transition-all duration-1000 opacity-100 translate-y-0">
<div class="bg-primary rounded-[2rem] p-8 md:p-16 relative overflow-hidden shadow-2xl">
<!-- Abstract pattern overlay -->
<div class="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,white_0%,transparent_70%)]"></div>
<h2 class="font-display-lg text-headline-xl md:text-display-lg text-on-primary mb-6 relative z-10">Ready to Scale?</h2>
<p class="text-on-primary/80 font-body-lg max-w-2xl mx-auto mb-6 md:mb-10 relative z-10">
                Join the ranks of elite tech organizations. Our architects are ready to dissect your current infrastructure and map a path to peak performance.
            </p>
<div class="flex flex-col md:flex-row gap-4 justify-center relative z-10">
<a class="bg-white text-primary px-6 md:px-10 py-4 md:py-5 rounded-lg font-bold text-base md:text-lg hover:bg-surface transition-all transform hover:-translate-y-1" href="/contact">
                    Schedule a Technical Scoping Session
                </a>
<a class="bg-transparent border-2 border-white text-on-primary px-6 md:px-10 py-4 md:py-5 rounded-lg font-bold text-base md:text-lg hover:bg-white/10 transition-all" href="/case-studies">
                    View Technical Docs
                </a>
</div>
</div>
</section>
`;
