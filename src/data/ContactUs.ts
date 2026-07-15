export const html = `
<!-- Hero Section -->
<section class="hero-gradient relative overflow-hidden bg-surface min-h-[750px] md:min-h-[600px] py-16 md:py-section-gap border-b border-outline-variant/20 flex items-center" id="contact-hero">
<canvas class="absolute inset-0 z-0 pointer-events-none opacity-60 accelerated-layer" id="contact-star-bg"></canvas>
<div class="max-w-container-max mx-auto px-margin-mobile sm:px-margin-tablet md:px-margin-desktop text-center relative z-10">
<span class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/5 text-primary border border-primary/10 mb-8 font-label-sm text-label-sm uppercase tracking-widest">
<span class="w-1.5 h-1.5 rounded-full bg-primary animate-pulse"></span>
                Inquiry Protocol 0.1
            </span>
<h1 class="font-display-lg text-[28px] sm:text-display-lg-mobile md:text-display-lg font-bold mb-6 leading-tight text-on-surface tracking-tight">
                Architect Your <span class="text-gradient">Next System</span>
</h1>
<p class="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto mb-10 leading-relaxed">
                Connect with our specialized engineering hubs to discuss mission-critical infrastructure, AI operations, or sovereign cloud architecture.
            </p>
</div>
</section>
<!-- Contact Interface -->
<section class="py-16 md:py-section-gap bg-surface-container-lowest" id="contact-interface">
<div class="max-w-container-max mx-auto px-margin-mobile sm:px-margin-tablet md:px-margin-desktop grid md:grid-cols-12 gap-gutter items-start">
<!-- Technical Form -->
<div class="md:col-span-8">
<div class="glass-card p-6 md:p-10 rounded-xl shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
<div class="mb-8 flex items-center justify-between">
<h2 class="font-headline-lg text-headline-lg text-on-surface">System Intake Form</h2>
<span class="text-on-surface-variant/40 font-mono text-xs">REF: FRM-2024-NT</span>
</div>
<form class="space-y-6" id="contact-form">
<div class="grid md:grid-cols-2 gap-6">
<div class="space-y-2 group">
<label class="font-label-sm text-label-sm uppercase tracking-wider text-on-surface-variant group-focus-within:text-primary transition-colors">First Name</label>
    <input class="w-full bg-surface border border-outline-variant/40 rounded-ROUND_EIGHT p-4 focus:border-primary focus:ring-0 outline-none transition-all text-on-surface font-body-md input-focus-ring" name="first_name" placeholder="Jane" required="" type="text"/>
</div>
<div class="space-y-2 group">
<label class="font-label-sm text-label-sm uppercase tracking-wider text-on-surface-variant group-focus-within:text-primary transition-colors">Last Name</label>
<input class="w-full bg-surface border border-outline-variant/40 rounded-ROUND_EIGHT p-4 focus:border-primary focus:ring-0 outline-none transition-all text-on-surface font-body-md input-focus-ring" name="last_name" placeholder="Doe" required="" type="text"/>
</div>
</div>
<div class="grid md:grid-cols-2 gap-6">
<div class="space-y-2 group">
<label class="font-label-sm text-label-sm uppercase tracking-wider text-on-surface-variant group-focus-within:text-primary transition-colors">Work Email</label>
<input class="w-full bg-surface border border-outline-variant/40 rounded-ROUND_EIGHT p-4 focus:border-primary focus:ring-0 outline-none transition-all text-on-surface font-body-md input-focus-ring" name="from_email" placeholder="jane.doe@enterprise.com" required="" type="email"/>
</div>
<div class="space-y-2 group">
<label class="font-label-sm text-label-sm uppercase tracking-wider text-on-surface-variant group-focus-within:text-primary transition-colors">Organization</label>
<input class="w-full bg-surface border border-outline-variant/40 rounded-ROUND_EIGHT p-4 focus:border-primary focus:ring-0 outline-none transition-all text-on-surface font-body-md input-focus-ring" name="company" placeholder="Global Systems Inc." type="text"/>
</div>
</div>
<div class="space-y-2 group">
<label class="font-label-sm text-label-sm uppercase tracking-wider text-on-surface-variant group-focus-within:text-primary transition-colors">System Domain</label>
<input class="w-full bg-surface border border-outline-variant/40 rounded-ROUND_EIGHT p-4 focus:border-primary focus:ring-0 outline-none transition-all text-on-surface font-body-md input-focus-ring" name="subject" placeholder="e.g. AI Infrastucture, Quantum Security, Cloud Ops" required="" type="text"/>
</div>
<div class="space-y-2 group">
<label class="font-label-sm text-label-sm uppercase tracking-wider text-on-surface-variant group-focus-within:text-primary transition-colors">Technical Brief</label>
<textarea class="w-full bg-surface border border-outline-variant/40 rounded-ROUND_EIGHT p-4 focus:border-primary focus:ring-0 outline-none transition-all text-on-surface font-body-md input-focus-ring min-h-[160px]" name="message" placeholder="Outline your requirements and performance targets..." required="" rows="5"></textarea>
</div>
<div class="pt-4">
<button class="w-full bg-primary text-on-primary py-5 rounded-ROUND_EIGHT font-sora font-semibold text-body-md hover:bg-tertiary shadow-xl shadow-primary/10 transition-all active:scale-[0.99] flex items-center justify-center gap-3" id="contact-submit-btn" type="submit">
                                Initialize Inquiry
                                <span class="material-symbols-outlined text-sm">arrow_forward</span>
</button>
</div>
</form>
</div>
</div>
<!-- Side Info -->
<div class="md:col-span-4 space-y-8 md:space-y-12 pl-0 md:pl-8">
<div class="space-y-8">
<h3 class="font-headline-lg text-[20px] sm:text-headline-lg text-on-surface flex items-center gap-3">
                        Direct Access
                        <span class="w-8 h-[1px] bg-outline-variant"></span>
</h3>
<div class="space-y-6">
<div class="group flex gap-5">
<div class="flex-shrink-0 w-12 h-12 rounded-xl bg-primary/5 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-on-primary transition-all duration-300">
<span class="material-symbols-outlined">terminal</span>
</div>
<div>
<p class="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-widest mb-1">Architecture Desk</p>
<p class="font-sora font-semibold text-on-surface">+92 321 8819634</p>
</div>
</div>
<div class="group flex gap-5">
<div class="flex-shrink-0 w-12 h-12 rounded-xl bg-primary/5 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-on-primary transition-all duration-300">
<span class="material-symbols-outlined">alternate_email</span>
</div>
<div>
<p class="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-widest mb-1">Inquiry Node</p>
<p class="font-sora font-semibold text-on-surface">info@nexteksol.com</p>
</div>
</div>
<div class="group flex gap-5">
<div class="flex-shrink-0 w-12 h-12 rounded-xl bg-primary/5 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-on-primary transition-all duration-300">
<span class="material-symbols-outlined">location_on</span>
</div>
<div>
<p class="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-widest mb-1">Headquarters</p>
<p class="font-sora font-semibold text-on-surface text-sm leading-relaxed">Zee Heights, International Market, M Block Model Town, Lahore</p>
</div>
</div>
<div class="group flex gap-5">
<div class="flex-shrink-0 w-12 h-12 rounded-xl overflow-hidden">
<img class="w-full h-full object-cover" src="/Admin/Talha-Rafi.jpg" alt="Talha Rafi"/>
</div>
<div>
<p class="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-widest mb-1">Head of Sales</p>
<p class="font-sora font-semibold text-on-surface">Talha Rafi</p>
<p class="text-sm text-on-surface-variant">+92 321 8819634</p>
</div>
</div>
</div>
</div>
<div class="p-6 md:p-8 rounded-xl bg-surface-container-low border border-outline-variant/30">
<h4 class="font-sora font-bold text-on-surface mb-4">Availability</h4>
<p class="text-on-surface-variant text-sm leading-relaxed mb-6">
                        Engineering teams operate across three global shifts to ensure 24/7 technical oversight and deployment capability.
                    </p>
<div class="flex items-center gap-2 text-primary font-bold">
<span class="w-2 h-2 rounded-full bg-primary animate-ping"></span>
<span class="text-sm">SYSTEMS ONLINE</span>
</div>
</div>
</div>
</div>
</section>
<!-- Global Hubs Section -->
<section class="py-16 md:py-section-gap bg-surface" id="hubs">
<div class="max-w-container-max mx-auto px-margin-mobile sm:px-margin-tablet md:px-margin-desktop">
<div class="flex flex-col md:flex-row justify-between items-center md:items-end text-center md:text-left mb-16 gap-8">
<div class="space-y-4">
<span class="font-label-sm text-label-sm text-primary uppercase tracking-widest">Distributed Presence</span>
<h2 class="font-headline-xl text-[22px] sm:text-headline-xl text-on-surface">Strategic Global Hubs</h2>
<p class="text-on-surface-variant max-w-xl text-body-md">
                        Our sovereign engineering nodes are strategically placed in key financial and technology corridors to provide local expertise with global reach.
                    </p>
</div>
<div class="flex gap-12 items-center">
<div class="text-center">
<div class="text-primary font-bold font-sora text-2xl md:text-3xl">24/7</div>
<div class="font-label-sm text-label-sm text-on-surface-variant uppercase">Uptime</div>
</div>
<div class="text-center">
<div class="text-primary font-bold font-sora text-2xl md:text-3xl">3</div>
<div class="font-label-sm text-label-sm text-on-surface-variant uppercase">HeadQuarters</div>
</div>
</div>
</div>
<div class="grid md:grid-cols-3 gap-gutter">
<!-- New York Hub -->
<div class="glass-card rounded-xl overflow-hidden hover:translate-y-[-4px] transition-all duration-300 group">
<div class="p-6 md:p-8 space-y-6">
<div class="flex justify-between items-start">
<div>
<h3 class="font-sora font-bold text-xl text-on-surface group-hover:text-primary transition-colors">New York</h3>
<p class="font-label-sm text-[10px] text-on-surface-variant uppercase tracking-widest mt-1">Americas Primary Node</p>
</div>
<span class="bg-primary/10 text-primary px-2 py-1 rounded text-[10px] font-bold">HQ-01</span>
</div>
<p class="text-on-surface-variant text-sm leading-relaxed font-body-md">
                            6611 Comet Cir Apt 402<br/>
                            Springfield, VA 22150<br/>
                            United States
                        </p>
<div class="space-y-2 pt-4 border-t border-outline-variant/30">
<div class="flex items-center gap-2 text-sm text-on-surface-variant">
<span class="material-symbols-outlined text-primary text-lg">alternate_email</span>
<span>info@nexteksol.com</span>
</div>
<div class="flex items-center gap-2 text-sm text-on-surface-variant">
<span class="material-symbols-outlined text-primary text-lg">call</span>
<span>+1 (212) 555-0198</span>
</div>
</div>
<div class="pt-4 border-t border-outline-variant/30 flex items-center justify-between">
<div class="flex items-center gap-2">
<span class="material-symbols-outlined text-primary text-lg">schedule</span>
<span class="font-mono text-xs text-on-surface-variant" id="time-ny">09:57:39 EST</span>
</div>
<span class="material-symbols-outlined text-outline-variant group-hover:text-primary transition-colors">hub</span>
</div>
</div>
</div>
<!-- Pakistan Hub -->
<div class="glass-card rounded-xl overflow-hidden hover:translate-y-[-4px] transition-all duration-300 group">
<div class="p-6 md:p-8 space-y-6">
<div class="flex justify-between items-start">
<div>
<h3 class="font-sora font-bold text-xl text-on-surface group-hover:text-primary transition-colors">Lahore</h3>
<p class="font-label-sm text-[10px] text-on-surface-variant uppercase tracking-widest mt-1">South Asia Primary Node</p>
</div>
<span class="bg-primary/10 text-primary px-2 py-1 rounded text-[10px] font-bold">HQ-02</span>
</div>
<p class="text-on-surface-variant text-sm leading-relaxed font-body-md">
                            Zee Heights, International Market<br/>
                            M Block Model Town, Lahore<br/>
                            Pakistan
                        </p>
<div class="space-y-2 pt-4 border-t border-outline-variant/30">
<div class="flex items-center gap-2 text-sm text-on-surface-variant">
<span class="material-symbols-outlined text-primary text-lg">alternate_email</span>
<span>info@nexteksol.com</span>
</div>
<div class="flex items-center gap-2 text-sm text-on-surface-variant">
<span class="material-symbols-outlined text-primary text-lg">call</span>
<span>+92 42 35218902</span>
</div>
</div>
<div class="pt-4 border-t border-outline-variant/30 flex items-center justify-between">
<div class="flex items-center gap-2">
<span class="material-symbols-outlined text-primary text-lg">schedule</span>
<span class="font-mono text-xs text-on-surface-variant" id="time-pak">05:57:39 PKT</span>
</div>
<span class="material-symbols-outlined text-outline-variant group-hover:text-primary transition-colors">hub</span>
</div>
</div>
</div>
<!-- Dubai Hub -->
<div class="glass-card rounded-xl overflow-hidden hover:translate-y-[-4px] transition-all duration-300 group">
<div class="p-6 md:p-8 space-y-6">
<div class="flex justify-between items-start">
<div>
<h3 class="font-sora font-bold text-xl text-on-surface group-hover:text-primary transition-colors">Dubai</h3>
<p class="font-label-sm text-[10px] text-on-surface-variant uppercase tracking-widest mt-1">MEA Primary Node</p>
</div>
<span class="bg-primary/10 text-primary px-2 py-1 rounded text-[10px] font-bold">HQ-03</span>
</div>
<p class="text-on-surface-variant text-sm leading-relaxed font-body-md">
                            Office#306, 3rd Floor, Zakir Center<br/>
                            Abu Hail Area, Dubai<br/>
                            UAE
                        </p>
<div class="space-y-2 pt-4 border-t border-outline-variant/30">
<div class="flex items-center gap-2 text-sm text-on-surface-variant">
<span class="material-symbols-outlined text-primary text-lg">alternate_email</span>
<span>info@nexteksol.com</span>
</div>
<div class="flex items-center gap-2 text-sm text-on-surface-variant">
<span class="material-symbols-outlined text-primary text-lg">call</span>
<span>+971 56 462 1703</span>
</div>
</div>
<div class="pt-4 border-t border-outline-variant/30 flex items-center justify-between">
<div class="flex items-center gap-2">
<span class="material-symbols-outlined text-primary text-lg">schedule</span>
<span class="font-mono text-xs text-on-surface-variant" id="time-dxb">01:57:39 GST</span>
</div>
<span class="material-symbols-outlined text-outline-variant group-hover:text-primary transition-colors">hub</span>
</div>
</div>
</div>
</div>
</div>
</section>
`;
