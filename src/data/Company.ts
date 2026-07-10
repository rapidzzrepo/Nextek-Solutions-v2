export const html = `
<!-- Hero Section -->
<section class="relative w-full overflow-hidden py-section-gap" id="company-hero">
<canvas id="company-star-bg" class="absolute inset-0 z-0 pointer-events-none opacity-60 accelerated-layer"></canvas>
<div class="relative z-10 px-margin-desktop max-w-container-max mx-auto text-center">
<span class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/5 text-primary border border-primary/10 mb-8 font-label-sm text-label-sm uppercase tracking-widest">
<span class="w-1.5 h-1.5 rounded-full bg-primary animate-pulse"></span>
                    Who We Are
                </span>
<h1 class="font-display-lg text-display-lg mb-6 leading-tight text-on-surface">Built on Technical Authority.</h1>
<p class="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto">
                    We don't just build software; we engineer infrastructure for the future. Nextek Sol combines high-precision development with sovereign cloud security to empower the world's most ambitious enterprises.
                </p>
</div>
</section>
<!-- Core Values: Bento Grid -->
<section class="bg-surface-container-low py-section-gap px-margin-desktop">
  <div class="max-w-container-max mx-auto">
    <div class="text-center mb-16">
      <span class="text-primary font-label-md text-label-md mb-4 block uppercase tracking-widest">Performance Metrics &amp; Scale</span>
      <h2 class="font-headline-xl text-headline-xl">Our Global Impact</h2>
    </div>
    <div class="grid grid-cols-2 md:grid-cols-4 gap-8">
      <div class="text-center">
        <div class="font-display-lg text-display-lg-mobile md:text-display-lg text-primary mb-2"><span class="count-up" data-target="10" data-suffix="+">0</span></div>
        <div class="font-label-md text-on-surface-variant uppercase tracking-widest">Years in Market</div>
      </div>
      <div class="text-center">
        <div class="font-display-lg text-display-lg-mobile md:text-display-lg text-primary mb-2"><span class="count-up" data-target="250" data-suffix="+">0</span></div>
        <div class="font-label-md text-on-surface-variant uppercase tracking-widest">Expert Engineers</div>
      </div>
      <div class="text-center">
        <div class="font-display-lg text-display-lg-mobile md:text-display-lg text-primary mb-2"><span class="count-up" data-target="500" data-suffix="+">0</span></div>
        <div class="font-label-md text-on-surface-variant uppercase tracking-widest">Projects Delivered</div>
      </div>
      <div class="text-center">
        <div class="font-display-lg text-display-lg-mobile md:text-display-lg text-primary mb-2"><span class="count-up" data-target="99" data-suffix="%">0</span></div>
        <div class="font-label-md text-on-surface-variant uppercase tracking-widest">Satisfied Clients</div>
      </div>
    </div>
  </div>
</section>
<!-- Leadership Section -->
<section class="bg-inverse-surface text-inverse-on-surface py-section-gap px-margin-desktop relative overflow-hidden" id="elite-section">
<div class="absolute inset-0 w-full h-full pointer-events-none z-0">
<canvas id="elite-precision-canvas" class="w-full h-full block"></canvas>
</div>
<div class="max-w-container-max mx-auto relative z-10">
<div class="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
<div class="max-w-xl">
<h2 class="font-display-lg text-display-lg-mobile md:text-headline-xl mb-6">Led by Elite Engineers</h2>
<p class="text-surface-variant font-body-lg text-body-lg">
                            Our leadership team is composed of technologists who have built foundational protocols and scaled unicorn infrastructure from the ground up.
                        </p>
</div>
<a class="text-primary-fixed-dim hover:text-on-primary-container transition-colors flex items-center gap-2 font-label-md" href="#">
                        View All Contributors <span class="material-symbols-outlined">arrow_forward</span>
</a>
</div>
<div class="grid grid-cols-1 md:grid-cols-4 gap-gutter">
<!-- Leader 1 -->
<div class="group">
<div class="aspect-[3/4] relative rounded-xl overflow-hidden mb-6 border border-outline/20">
<img class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" data-alt="A professional headshot of a senior software engineer in a high-tech studio environment with soft blue rim lighting. The style is modern corporate with a focus on technical expertise and leadership. The background is a blurred server room with subtle bokeh effects." src="https://lh3.googleusercontent.com/aida-public/AB6AXuATXELDtdZ_btTXke-_Uhk1b487vX1lrfW-4FAR-WbcOM2WIszsfZ-KNWSU4NDemXwJ4cMKI7nrg3gayMzL3oVEQzKyhK_i-UfpBpwZUguk_-6V35gH5jReZGUDZwhrKFFv1ZD2PW-Nmnelwr6AVcfy9gZi2XgPSZZ9Vm5BPbST8d7UxTolYzhbyPcsuBrdS90_euyzkP-xMXNoTfdBRwaFkgnz9KrWXtim1nFPsy5tznzBmMQCFEY">
</div>
<h4 class="font-headline-lg text-headline-lg mb-1">Jawad Khan</h4>
<p class="text-primary-fixed-dim font-label-md mb-4 uppercase tracking-widest">Chief Architect</p>
<div class="flex gap-4">
<a class="text-surface-variant hover:text-white transition-colors" href="#">
<svg class="w-6 h-6 fill-current" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.042-1.416-4.042-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"></path></svg>
</a>
<a class="text-surface-variant hover:text-white transition-colors" href="#">
<svg class="w-6 h-6 fill-current" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"></path></svg>
</a>
</div>
</div>
<!-- Leader 2 -->
<div class="group">
<div class="aspect-[3/4] relative rounded-xl overflow-hidden mb-6 border border-outline/20">
<img class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" data-alt="Portrait of a young male lead engineer with glasses, looking thoughtfully at a holographic code display in a dimly lit, minimalist tech office. The lighting features sharp purple and electric blue accents, reflecting a high-performance software engineering brand identity. Ultra-clean, professional cinematic aesthetic." src="https://lh3.googleusercontent.com/aida-public/AB6AXuAQ7FY-0GKrRR_ejWCOTBpBuDcgCQocU3DY6wB21RKU3NhY7WCv0gNtT-AQhCU0-6lg04sM7WgsrsdbiwiR6VtPTkRVz578GXPeaJK4v5jsKqV9esHFgkpFFbjyDiRgOIqjRApXYAnFYxVNsSRfAiAOeJyeuBpdXrkdUY5HMtCKhPD7wuwaxEyN6CtdmQWzuiSq5TJuTYWBlTcehKG102uAtey0Cx5nEkil4x-0PPQbrMrRMDqZyN0">
</div>
<h4 class="font-headline-lg text-headline-lg mb-1">Ali Hasnain</h4>
<p class="text-primary-fixed-dim font-label-md mb-4 uppercase tracking-widest">VP Engineering</p>
<div class="flex gap-4">
<a class="text-surface-variant hover:text-white transition-colors" href="#">
<svg class="w-6 h-6 fill-current" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.042-1.416-4.042-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"></path></svg>
</a>
<a class="text-surface-variant hover:text-white transition-colors" href="#">
<svg class="w-6 h-6 fill-current" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"></path></svg>
</a>
</div>
</div>
<!-- Leader 3 -->
<div class="group">
<div class="aspect-[3/4] relative rounded-xl overflow-hidden mb-6 border border-outline/20">
<img class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" data-alt="A sophisticated professional portrait of a senior cloud infrastructure specialist in a clean, brightly lit technical studio. The background is a minimalist composition of floating digital architectural diagrams. Lighting is high-key and soft, utilizing the clean white and electric purple brand palette for a modern corporate look." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCcXP8m7lpPAOqze62PLEwFsVaTaBl9F8MxVSBNmY0Vxng-8a-o-jrJcwx6c9BMbeQEz8yRgxmgDyDgPO_PvHyRkq6tH39gPLepQGRgyhY04VOlNhG5j0fCTTN5Jzm50wPitEU4RrXUZ3HGbgpvZifMUOIiVc7EOkWjOOgcT-XMje-Fn9kFLES4obToH4qzKqxJ007Lpa_Id-kErLkDqcS6Fo4xnO2ZB8jUBtRYESM6FnohdV7o3kk">
</div>
<h4 class="font-headline-lg text-headline-lg mb-1">Uzair Rahim</h4>
<p class="text-primary-fixed-dim font-label-md mb-4 uppercase tracking-widest">Head of Cloud</p>
<div class="flex gap-4">
<a class="text-surface-variant hover:text-white transition-colors" href="#">
<svg class="w-6 h-6 fill-current" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.042-1.416-4.042-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"></path></svg>
</a>
<a class="text-surface-variant hover:text-white transition-colors" href="#">
<svg class="w-6 h-6 fill-current" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"></path></svg>
</a>
</div>
</div>
<!-- Leader 4 -->
<div class="group">
<div class="aspect-[3/4] relative rounded-xl overflow-hidden mb-6 border border-outline/20">
<img class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="/Admin/Talha-Rafi.jpg" alt="Talha Rafi"/>
</div>
<h4 class="font-headline-lg text-headline-lg mb-1">Talha Rafi</h4>
<p class="text-primary-fixed-dim font-label-md mb-4 uppercase tracking-widest">Head of Sales</p>
<div class="flex gap-4">
<a class="text-surface-variant hover:text-white transition-colors" href="#">
<svg class="w-6 h-6 fill-current" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.042-1.416-4.042-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"></path></svg>
</a>
<a class="text-surface-variant hover:text-white transition-colors" href="#">
<svg class="w-6 h-6 fill-current" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"></path></svg>
</a>
</div>
</div>
</div>
</div>
</section>
<!-- Security & Compliance Section -->
<section class="px-margin-desktop py-section-gap max-w-container-max mx-auto">
<div class="flex flex-col md:flex-row gap-gutter items-center">
<div class="md:w-1/2">
<span class="text-primary font-label-md text-label-md mb-4 block">SECURITY FIRST</span>
<h2 class="font-display-lg text-display-lg-mobile md:text-headline-xl mb-8">Uncompromising Compliance Architecture.</h2>
<p class="font-body-lg text-body-lg text-on-surface-variant mb-12">
                        We don't treat security as a checkbox. Our internal frameworks are built to exceed the most stringent global standards, providing a bulletproof foundation for your enterprise data.
                    </p>
<div class="grid grid-cols-2 gap-6">
<div class="flex items-center gap-3">
<span class="material-symbols-outlined text-primary" style="font-variation-settings: 'FILL' 1;">verified_user</span>
<span class="font-label-md">ISO 27001 Certified</span>
</div>
<div class="flex items-center gap-3">
<span class="material-symbols-outlined text-primary" style="font-variation-settings: 'FILL' 1;">security</span>
<span class="font-label-md">SOC2 Type II</span>
</div>
<div class="flex items-center gap-3">
<span class="material-symbols-outlined text-primary" style="font-variation-settings: 'FILL' 1;">health_and_safety</span>
<span class="font-label-md">HIPAA Compliant</span>
</div>
<div class="flex items-center gap-3">
<span class="material-symbols-outlined text-primary" style="font-variation-settings: 'FILL' 1;">policy</span>
<span class="font-label-md">NIST Framework</span>
</div>
</div>
</div>
<div class="md:w-1/2 grid grid-cols-2 gap-4 p-8 bg-surface-container rounded-3xl">
<div class="bg-surface-container-lowest p-6 rounded-2xl flex flex-col items-center justify-center border border-outline-variant/30 text-center">
<div class="font-headline-lg font-bold text-primary mb-2">ISO</div>
<div class="font-label-md opacity-70">27001</div>
</div>
<div class="bg-surface-container-lowest p-6 rounded-2xl flex flex-col items-center justify-center border border-outline-variant/30 text-center">
<div class="font-headline-lg font-bold text-primary mb-2">SOC2</div>
<div class="font-label-md opacity-70">COMPLIANT</div>
</div>
<div class="bg-surface-container-lowest p-6 rounded-2xl flex flex-col items-center justify-center border border-outline-variant/30 text-center">
<div class="font-headline-lg font-bold text-primary mb-2">HIPAA</div>
<div class="font-label-md opacity-70">READY</div>
</div>
<div class="bg-surface-container-lowest p-6 rounded-2xl flex flex-col items-center justify-center border border-outline-variant/30 text-center">
<div class="font-headline-lg font-bold text-primary mb-2">NIST</div>
<div class="font-label-md opacity-70">ALIGNMENT</div>
</div>
</div>
</div>
</section>
<!-- Technical Authority Callout -->
<section class="mb-section-gap px-margin-desktop max-w-container-max mx-auto">
<div class="bg-primary-container text-on-primary-container p-12 md:p-24 rounded-3xl relative overflow-hidden">
<div class="absolute top-0 right-0 w-1/2 h-full opacity-20 pointer-events-none">

</div>
<div class="relative z-10 max-w-2xl">
<h2 class="font-display-lg text-display-lg-mobile md:text-display-lg mb-8">Ready to engineer your edge?</h2>
<p class="font-body-lg text-body-lg mb-12 opacity-90">
                        Join the fleet of technical leaders who trust Nextek Sol for their most critical infrastructure projects.
                    </p>
<div class="flex flex-col sm:flex-row gap-4">
<a class="bg-on-primary-container text-primary-container px-10 py-4 rounded-xl font-headline-lg hover:opacity-90 transition-all" href="/contact">Start Scoping</a>
<a class="border border-on-primary-container/30 text-on-primary-container px-10 py-4 rounded-xl font-headline-lg hover:bg-on-primary-container/10 transition-all" href="/case-studies">Download Thesis</a>
</div>
</div>
</div>
</section>
`;
