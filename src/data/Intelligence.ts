export const html = `
<!-- Hero Section -->
<section class="relative min-h-screen flex items-center pt-24 overflow-hidden bg-[#0a0a0a]">
  <!-- Starfield Background Canvas -->
  <div class="absolute inset-0 w-full h-full pointer-events-none z-0">
    <canvas id="hero-precision-canvas" class="w-full h-full block"></canvas>
  </div>
<div class="container mx-auto px-6 md:px-[48px] max-w-[1280px] relative z-10">
<div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
<div>
<span class="inline-block px-3 py-1 mb-6 bg-white/10 text-primary-fixed-dim backdrop-blur-md border border-white/10 rounded-full font-label-md text-label-md tracking-wider uppercase">
                    Intelligence Hub
                </span>
<h1 class="font-headline-xl text-display-lg-mobile md:text-display-lg font-extrabold text-white leading-tight mb-8">
                    Engineering Intelligence <span class="text-primary-fixed-dim">at Scale</span>.
                </h1>
<p class="font-body-lg text-body-lg text-white/80 mb-10 max-w-xl">
                    Access our repository of high-fidelity technical insights, architectural deep-dives, and performance protocols for the modern enterprise.
                </p>
<div class="flex flex-wrap gap-4">
<button class="bg-primary text-on-primary px-8 py-4 rounded-lg font-label-md text-label-md hover:opacity-95 transition-opacity shadow-lg shadow-primary/20">
                        Explore Protocols
                    </button>
<button class="border border-white/20 text-white px-8 py-4 rounded-lg font-label-md text-label-md hover:bg-white/5 transition-colors">
                        Technical Manifesto
                    </button>
</div>
</div>
<div class="relative hidden md:block reveal-on-scroll visible">
<div class="relative z-10 rounded-2xl overflow-hidden shadow-2xl border border-white/10 bg-black/40 backdrop-blur-sm">
<img alt="AI-driven engineering ecosystem diagram" class="w-full h-auto object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDAMNq-h-naE35JipZb9nW-xuxoagbAYRK-NW-Whm7c5b0amU0bBsHn0xd1oQyN-1TgecZqlJ7JWbpu3seQNAvFV9W2bUP6f0Ga1PeEeWZxERN6uyGAP99-RgQPceq3roRkZL3lwvhJPD_UtlY4LAsymmxj8hEHEoorxddBp-B5qRDDLhOmwCvKCEb50NfO_Zy2WcStRi9fHl3Dk8pWlvOoP1RLSLjgH6BJadullyjaQBEOIQd_PmA">
</div>
<div class="absolute -top-10 -right-10 w-64 h-64 bg-primary/20 rounded-full blur-3xl -z-10"></div>
<div class="absolute -bottom-10 -left-10 w-64 h-64 bg-secondary/20 rounded-full blur-3xl -z-10"></div>
</div>
</div>
</div>
<div class="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce z-10">
<span class="material-symbols-outlined text-white/40">arrow_downward</span>
</div>
</section>
<!-- Content Section: Technical Insights -->
<section class="py-16 md:py-[120px] container mx-auto px-6 md:px-[48px] max-w-[1280px]">
<div class="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
<div class="max-w-2xl">
<h2 class="font-headline-lg text-headline-lg text-on-surface mb-4">Technical Insights</h2>
<p class="font-body-md text-body-md text-on-surface-variant">In-depth analysis of emerging technologies and architectural patterns developed within the Nextek Sol R&amp;D labs.</p>
</div>
<div class="flex gap-2">
<button class="p-3 border border-outline-variant rounded-full hover:border-primary text-outline hover:text-primary transition-all">
<span class="material-symbols-outlined">west</span>
</button>
<button class="p-3 border border-outline-variant rounded-full hover:border-primary text-outline hover:text-primary transition-all">
<span class="material-symbols-outlined">east</span>
</button>
</div>
</div>
<!-- Bento Technical Insights Grid -->
<div class="grid grid-cols-1 lg:grid-cols-12 gap-gutter">
<!-- Insight 1: Atomic Intelligence -->
<div class="lg:col-span-8 group reveal-on-scroll visible">
<div class="card-hover bg-surface-container-lowest border border-outline-variant/30 rounded-xl overflow-hidden h-full flex flex-col">
<div class="h-[400px] relative overflow-hidden">
<div class="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105" style="background-image: url('https://lh3.googleusercontent.com/aida-public/AB6AXuD_6lX-gS3LQwnnplY0r5fiH9mShBWm72sAOg1AX_rLWjnfShVibv9EChccSULlb3gnMTBcmS7GNAEUPeTZWWAUl5V1RnFWFU3ewVftQ8ebJOW29vAnpijaxjJIjHrQZ_OEqSnHxUIjKGS1y5bOKldEwUpdFGhyAIH42MV3wYUwb-r4pOchLVG-5QVIpBTJnqFRwKFhrvTQJhZ524lseeu3Luv4good6HBildmUERTeHdnvkF9E_jg')">
</div>
<div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
<div class="absolute bottom-8 left-8">
<span class="bg-secondary text-white px-3 py-1 rounded text-xs font-bold uppercase mb-2 inline-block">Design Engineering</span>
<h3 class="font-headline-lg text-headline-lg text-white">Atomic Intelligence</h3>
</div>
</div>
<div class="p-8 grid grid-cols-1 md:grid-cols-3 gap-8">
<div>
<h4 class="font-label-md text-label-md text-primary uppercase mb-3">Context</h4>
<p class="font-body-md text-body-md text-on-surface-variant">The shift from static component libraries to generative UI frameworks driven by user intent.</p>
</div>
<div>
<h4 class="font-label-md text-label-md text-primary uppercase mb-3">Core Concept</h4>
<p class="font-body-md text-body-md text-on-surface-variant">Tokenizing interaction patterns to allow AI models to compose interfaces in real-time without latency.</p>
</div>
<div class="bg-surface-container-low p-6 rounded-lg border border-outline-variant/20">
<h4 class="font-label-md text-label-md text-on-surface uppercase mb-1">Impact</h4>
<span class="font-headline-xl text-primary">65% faster</span>
<p class="text-xs text-on-surface-variant mt-1">Reduction in production UI deployment cycles.</p>
</div>
</div>
</div>
</div>
<!-- Insight 2: Sovereign Cloud -->
<div class="lg:col-span-4 group reveal-on-scroll visible">
<div class="card-hover bg-surface-container-lowest border border-outline-variant/30 rounded-xl overflow-hidden h-full flex flex-col">
<div class="h-[300px] relative overflow-hidden">
<div class="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105" style="background-image: url('https://lh3.googleusercontent.com/aida-public/AB6AXuCSGLWhUXtwk6V7IjotGTtTDZyJ65gxSN93K2zp-SK_93IB3SPi2nGIoIVB7zlq4oA8asUQkxIE9TBGTrUKEThTS9ciCIr0ABRVwJo9klI0VBNXxbcjg1dCEmrDIfNT0zO-spDhTuieKjcDVQz1InButLXHyuO6Oa4gYtqo62k9RLerGVPP3YkKt27laCqDjn449C_zsPp94XrsyYTxdXAzMCS6A6Z-ut4ByISWy5D0PcwTDTggMnc')">
</div>
<div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
<div class="absolute bottom-6 left-6">
<span class="bg-tertiary text-white px-3 py-1 rounded text-xs font-bold uppercase mb-2 inline-block">Infrastructure</span>
<h3 class="font-headline-lg text-headline-lg text-white">The Sovereign Cloud: Beyond the Big Three</h3>
</div>
</div>
<div class="p-8 flex-grow flex flex-col justify-between">
<div>
<h4 class="font-label-md text-label-md text-primary uppercase mb-3">The Protocol</h4>
<p class="font-body-md text-body-md text-on-surface-variant mb-6">A deep dive into decentralizing enterprise data through localized clusters and Zero-Trust orchestration.</p>
</div>
<div class="bg-surface-container-low p-4 rounded-lg border border-outline-variant/20 text-center">
<span class="font-headline-lg text-secondary">Zero Latency</span>
<p class="text-xs text-on-surface-variant">Regional orchestration target.</p>
</div>
</div>
</div>
</div>
<!-- Insight 3: LLMs in Production -->
<div class="lg:col-span-12 group reveal-on-scroll visible">
<div class="card-hover bg-surface-container-lowest border border-outline-variant/30 rounded-xl overflow-hidden grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
<div class="h-full min-h-[300px] relative overflow-hidden md:col-span-1">
<div class="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105" style="background-image: url(&quot;https://lh3.googleusercontent.com/aida-public/AB6AXuAAYWJ6BuwcLd2u2QK8LBXbBVVpHJFR51Sn26tMk9cqhLhwrrCxsWexnRkh670fGiLNBM7PVbqCeIbB98cOy47oTiSGwd_Bk3v0hqsLDRde3ltOC66uSJyJ5SSFvpH9PO2D_vE6KKCL18h_TY7KtgScYDQPY8uiAqWRlHr4ci5PkcQyPpVpfTS7yUbPS5TZu-EuA_zaH9do8E0vx1SvqEo53eKS9kV0DC8WQRIpeRNmqqxty3eTpao1itG4Tox7tVq4eAenkhOwOTqd&quot;);">
</div>
<div class="absolute inset-0 bg-gradient-to-r from-black/40 to-transparent"></div>
<div class="absolute bottom-8 left-8">
<span class="bg-primary text-white px-3 py-1 rounded text-xs font-bold uppercase mb-2 inline-block">Applied ML</span>
<h3 class="font-headline-lg text-headline-lg text-white">LLMs in Production: A Latency Survival Guide</h3>
</div>
</div>
<div class="p-8 lg:col-span-2 grid grid-cols-1 lg:grid-cols-2 gap-12">
<div class="space-y-6">
<div>
<h4 class="font-label-md text-label-md text-primary uppercase mb-2">The Analysis</h4>
<p class="font-body-md text-body-md text-on-surface-variant">Optimizing token throughput and inferencing costs for large-scale enterprise deployments without sacrificing reasoning quality.</p>
</div>
<div>
<h4 class="font-label-md text-label-md text-primary uppercase mb-2">Key Insight</h4>
<p class="font-body-md text-body-md text-on-surface-variant">Implementing hierarchical caching and model-distillation protocols for sub-millisecond responsiveness.</p>
</div>
</div>
<div class="bg-inverse-surface text-inverse-on-surface p-8 rounded-xl flex flex-col justify-center items-center text-center">
<div class="text-display-lg-mobile font-extrabold text-inverse-primary mb-2">&lt;200ms</div>
<p class="font-headline-lg text-headline-lg mb-2">Token-to-User</p>
<p class="text-sm opacity-70">New benchmark for high-fidelity reasoning response.</p>
</div>
</div>
</div>
</div>
</div>
</section>
<!-- Testimonial Carousel Highlight -->
<section class="py-16 md:py-[120px] bg-[#0a0a0a] relative overflow-hidden" id="testimonial-star-section">
<div class="absolute inset-0 w-full h-full pointer-events-none z-0">
<canvas id="testimonial-precision-canvas" class="w-full h-full block"></canvas>
</div>
<div class="container mx-auto px-6 md:px-[48px] max-w-[1280px] relative z-10">
<div class="text-center mb-12">
<span class="material-symbols-outlined text-inverse-primary text-5xl">format_quote</span>
</div>
<!-- Carousel Wrapper -->
<div class="relative group/carousel">
<!-- Horizontal Scrolling Container -->
<div class="flex overflow-x-auto overflow-y-hidden snap-x snap-mandatory no-scrollbar scroll-smooth gap-0" id="testimonial-scroll">
<!-- Testimonial 1 -->
<div class="min-w-full snap-center px-4">
<div class="max-w-4xl mx-auto text-center">
<blockquote class="font-headline-xl text-xl md:text-headline-xl lg:text-[44px] text-inverse-on-surface leading-tight mb-12 italic">
                            "NT Sol didn't just provide us a service, they literally architected our whole transformation. their engineering prescision and refusal to settle for good enough is what sets them apart from every other firm we've worked with."
                        </blockquote>
<div class="flex flex-col items-center">
<div class="w-16 h-16 rounded-full bg-surface-variant mb-4 overflow-hidden border-2 border-primary">
<img alt="Marcus Vancity" class="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA6s6uW6qR9vuh-yt3pllg9xhujcRQmOQqbB2UuW2u44V97MmVDYwm139_kXca9Bnmq-OPBbQBIxEvsp3Zk-tQq4q8Ik8Dvk3Ryf1ZSP2Ir2dtn5zFf4wGgakXtZKznWkb__azlcm1krGtIKGsOa6z3vdJm9w7XIei3qPRQZ_ew2rOTLKJmPALqJGI2Kma1rG3w12myZRXAs9Zh82mqSacOFUi2B0LqXkH-_oCpf9Aw4Puv6MpqhuY">
</div>
<cite class="not-italic">
<div class="font-headline-lg text-headline-lg text-inverse-primary">Marcus Vancity</div>
<div class="font-label-md text-label-md text-inverse-on-surface/60 uppercase tracking-widest mt-1">CTO, Global Infra Dynamics</div>
</cite>
</div>
</div>
</div>
<!-- Testimonial 2 -->
<div class="min-w-full snap-center px-4">
<div class="max-w-4xl mx-auto text-center">
<blockquote class="font-headline-xl text-xl md:text-headline-xl lg:text-[44px] text-inverse-on-surface leading-tight mb-12 italic">
                            "the level of technical rigor Nextek Sol brought to our cloud migration was unprecidented. they didnt just move our workloads, they optimized our entire cost to performance ratio."
                        </blockquote>
<div class="flex flex-col items-center">
<div class="w-16 h-16 rounded-full bg-surface-variant mb-4 flex items-center justify-center border-2 border-primary text-primary font-bold text-xl">SC</div>
<cite class="not-italic">
<div class="font-headline-lg text-headline-lg text-inverse-primary">Sarah Chen</div>
<div class="font-label-md text-label-md text-inverse-on-surface/60 uppercase tracking-widest mt-1">Head of Platform, FinStream</div>
</cite>
</div>
</div>
</div>
<!-- Testimonial 3 -->
<div class="min-w-full snap-center px-4">
<div class="max-w-4xl mx-auto text-center">
<blockquote class="font-headline-xl text-xl md:text-headline-xl lg:text-[44px] text-inverse-on-surface leading-tight mb-12 italic">
                            "architecting for 99.999% availability is a massive challenge. NT Sol delivered a resilient infrastructure that has weathered every peak without a single milisecond of downtime."
                        </blockquote>
<div class="flex flex-col items-center">
<div class="w-16 h-16 rounded-full bg-surface-variant mb-4 flex items-center justify-center border-2 border-primary text-primary font-bold text-xl">DV</div>
<cite class="not-italic">
<div class="font-headline-lg text-headline-lg text-inverse-primary">David Vance</div>
<div class="font-label-md text-label-md text-inverse-on-surface/60 uppercase tracking-widest mt-1">VP Infrastructure, Global Connect</div>
</cite>
</div>
</div>
</div>
</div>
<!-- Navigation Controls -->
<div class="hidden md:flex absolute top-1/2 -translate-y-1/2 left-0 right-0 justify-between pointer-events-none px-4 md:-mx-12 z-10">
<button class="pointer-events-auto p-3 bg-primary/20 hover:bg-primary/40 border border-white/10 rounded-full text-white transition-all backdrop-blur-md" onclick="const c=document.getElementById('testimonial-scroll');c.scrollTo({left:c.scrollLeft-c.offsetWidth,behavior:'smooth'})">
<span class="material-symbols-outlined">west</span>
</button>
<button class="pointer-events-auto p-3 bg-primary/20 hover:bg-primary/40 border border-white/10 rounded-full text-white transition-all backdrop-blur-md" onclick="const c=document.getElementById('testimonial-scroll');c.scrollTo({left:c.scrollLeft+c.offsetWidth,behavior:'smooth'})">
<span class="material-symbols-outlined">east</span>
</button>
</div>
<!-- Pagination Dots -->
<div class="flex justify-center gap-3 mt-12" id="testimonial-dots">
<button class="w-2.5 h-2.5 rounded-full bg-inverse-primary transition-all" onclick="document.getElementById('testimonial-scroll').scrollTo({left: 0, behavior: 'smooth'})"></button>
<button class="w-2.5 h-2.5 rounded-full bg-white/20 hover:bg-white/40 transition-all" onclick="document.getElementById('testimonial-scroll').scrollTo({left: document.getElementById('testimonial-scroll').offsetWidth, behavior: 'smooth'})"></button>
<button class="w-2.5 h-2.5 rounded-full bg-white/20 hover:bg-white/40 transition-all" onclick="document.getElementById('testimonial-scroll').scrollTo({left: document.getElementById('testimonial-scroll').offsetWidth * 2, behavior: 'smooth'})"></button>
</div>
</div>
</div>
</section>
<!-- Detailed Result Stats -->
<section class="py-16 md:py-[120px] bg-gradient-to-b from-surface to-surface-container-low">
<div class="container mx-auto px-6 md:px-[48px] max-w-[1280px]">
<div class="grid grid-cols-2 lg:grid-cols-4 gap-gutter">
<!-- Card 1: Deployments -->
<div class="bg-surface-container-lowest border border-outline-variant/30 p-6 md:p-8 rounded-2xl shadow-sm card-hover flex flex-col items-center text-center">
<span class="material-symbols-outlined text-primary mb-4">rocket_launch</span>
<div class="text-4xl md:text-5xl lg:text-display-lg-mobile font-bold text-primary mb-2">140+</div>
<p class="font-label-md text-label-md text-on-surface-variant/70 uppercase tracking-wider">Deployments</p>
</div>
<!-- Card 2: Uptime -->
<div class="bg-surface-container-lowest border border-outline-variant/30 p-6 md:p-8 rounded-2xl shadow-sm card-hover flex flex-col items-center text-center">
<span class="material-symbols-outlined text-primary mb-4">verified</span>
<div class="text-4xl md:text-5xl lg:text-display-lg-mobile font-bold text-primary mb-2">99.9</div>
<p class="font-label-md text-label-md text-on-surface-variant/70 uppercase tracking-wider">Uptime %</p>
</div>
<!-- Card 3: Latency -->
<div class="bg-surface-container-lowest border border-outline-variant/30 p-6 md:p-8 rounded-2xl shadow-sm card-hover flex flex-col items-center text-center">
<span class="material-symbols-outlined text-primary mb-4">speed</span>
<div class="text-4xl md:text-5xl lg:text-display-lg-mobile font-bold text-primary mb-2">12ms</div>
<p class="font-label-md text-label-md text-on-surface-variant/70 uppercase tracking-wider">Avg Latency</p>
</div>
<!-- Card 4: Patents -->
<div class="bg-surface-container-lowest border border-outline-variant/30 p-6 md:p-8 rounded-2xl shadow-sm card-hover flex flex-col items-center text-center">
<span class="material-symbols-outlined text-primary mb-4">military_tech</span>
<div class="text-4xl md:text-5xl lg:text-display-lg-mobile font-bold text-primary mb-2">15</div>
<p class="font-label-md text-label-md text-on-surface-variant/70 uppercase tracking-wider">Patents Issued</p>
</div>
</div>
</div>
</section>
<!-- Final CTA -->
<section class="py-16 md:py-[120px] container mx-auto px-6 md:px-[48px] max-w-[1280px] text-center">
<div class="bg-primary rounded-[2rem] p-8 md:p-16 lg:p-24 relative overflow-hidden group">
<div class="absolute inset-0 bg-gradient-to-br from-primary to-secondary opacity-50 group-hover:opacity-100 transition-opacity duration-1000"></div>
<div class="relative z-10">
<h2 class="font-headline-xl text-display-lg-mobile md:text-headline-xl text-on-primary mb-6 md:mb-8">Ready to engineer your <br class="hidden md:block"> next horizon?</h2>
<a class="inline-block bg-on-primary text-primary px-6 md:px-10 py-4 md:py-5 rounded-xl font-headline-lg text-body-lg md:text-headline-lg hover:scale-105 transition-transform duration-300 shadow-xl shadow-black/10" href="/contact">
                Subscribe to our Deep-Tech Insights
            </a>
</div>
</div>
</section>
<!-- Footer -->
`;
