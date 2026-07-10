import { useEffect, useRef } from 'react'
import { html } from '../data/CaseStudies'

export default function CaseStudies() {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!ref.current) return

    const observerOptions = { threshold: 0.1 }
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('opacity-100', 'translate-y-0')
          entry.target.classList.remove('opacity-0', 'translate-y-10')
        }
      })
    }, observerOptions)
    document.querySelectorAll('.group').forEach(el => {
      el.classList.add('transition-all', 'duration-700', 'opacity-0', 'translate-y-10')
      observer.observe(el)
    })

    const nav = document.querySelector('nav')
    const onScroll = () => {
      if (!nav) return
      if (window.scrollY > 20) {
        nav.classList.add('shadow-sm', 'py-3')
        nav.classList.remove('py-4')
      } else {
        nav.classList.remove('shadow-sm', 'py-3')
        nav.classList.add('py-4')
      }
    }
    window.addEventListener('scroll', onScroll, { passive: true })

    // Study card click handlers
    const studyData: Record<string, { title: string; desc: string; author: string; time: string; img: string }> = {
      sovereign: {
        title: "Sovereign Cloud: Migrating 400TB of Sensitive Healthcare Data",
        desc: "How we built a fluid design language that adapts to generative output unpredictability.",
        author: "Marcus Chen",
        time: "8 min read",
        img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCYy4CDACf82FrzB_rfwuAklVJKfjlT3a3zQJlGWH70ctwzDssyExgM11dvFadBrt1zdMkDfig6cCX12eLmnUzUZ3zIahbE86xkxY2itRY44Yil5H9Q8ADgjQb_G3uUEAK0P4_iw9sZZ9QwLWv98DGita6pVl8edywezu81EHj4d17c-8UsnW7Kdjm3uI-L3GrLJwAtiwIQqWrALamxmkaDBFgWRCxpRnryYnCdJZccS8e36T8DtRA"
      },
      atlas: {
        title: "Atlas Robotics: Autonomous Fleet Orchestration",
        desc: "Our team delivered a real-time control layer for a fleet of 500+ autonomous mobile robots in an 800,000 sq ft fulfillment center. The solution reduced collision-related downtime to zero and improved overall pathing efficiency by 22% through advanced predictive modeling.",
        author: "David Vance",
        time: "12 min read",
        img: "https://lh3.googleusercontent.com/aida-public/AB6AXuB8XRzCYpojQJ3XKcVNugyatYXjMBLR3m5Yz1010a6rZpT3bbM0CnnXw1SzccuRwqhcUa7V2yqjVxSTzUaOrMjT781SnPzjRHV4wewX_89nH4R-Mu_GTgtVV3QHQMGfgOnxxF8uxJy__q4eWWlEo-PVvPe5bLiFL3iJbLYRdqpFq0JfTYD-EQ8NTeRvmy6SiW5yQhS7NlaEFRyZrwoKUtL9dRsjXq68IojzN4U0NSuuBz13l1JbxeA"
      },
      neobank: {
        title: "NeoBank Scale: Optimizing High-Frequency Ledgers",
        desc: "We architected a distributed ledger system for a global Neobank that successfully handles 50,000 transactions per second with sub-millisecond finality. This overhaul eliminated previous scaling bottlenecks and enabled 300% growth in their active user base within six months.",
        author: "Sarah Lopez",
        time: "10 min read",
        img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBydwNv-aEKyVxcguvHSipCE_EdSrLdoupvuxR-BxvkGsvTzLSyzY9MK5LD-Tn2qwSupCZE_hPh5r6TCWhqGWtG0NEE2Dj5J96lpI_Omd2XkN3REWG4-MG3t4JEhhcJOQJ0-fB0HEsvTXA9r6IftnNp8kbSmAdcnz9VhFQn-7LYNAOPnEo4_BsQIqE5-lIO1KgaOPwiC67q0DwNXDdut9R4j1xb16i-XVcSd3RtTlEPs8Vg_GlSiiA"
      },
      health: {
        title: "Predictive Health: MRI Diagnostic Acceleration",
        desc: "By deploying a custom-trained computer vision model at the edge, we reduced MRI diagnostic turnaround times from 48 hours to just 15 minutes. This life-saving integration allows radiologists to prioritize critical cases in real-time, improving patient outcomes across 12 hospitals.",
        author: "Julian Rossi",
        time: "6 min read",
        img: "https://lh3.googleusercontent.com/aida-public/AB6AXuARF9G8_y6k6Vgpx295OH8n9RA5KsCislaSZYy8lFK0DJVeqwGoP4OZg1gQNvKGRy2UEqDIBoYKqA0kz3ltbv6I2Unt7wMbv5RRWsUhoa5OhR1IOm9IqIvNN7MxUsPO8OYEpuAvokgZuDGd1Y5JWJt4OIZQfI9oJltKOPJnHNEsZ0r2a2OTGotCG-oD5T6BC2ira1EC-Q4hOlY6Kt88yWhGAUAL0J5dy4kYP7iifsea9ESUx6vw-Kw"
      },
      automation: {
        title: "Cognitive Automation: Streamlining 10k Workflows",
        desc: "We implemented a sovereign NLP engine that automates 85% of complex customer service inquiries for a global logistics provider. This reduced operational costs by $1.2M annually while maintaining a 98% customer satisfaction score through natural, context-aware interactions.",
        author: "Ingrid Schmidt",
        time: "15 min read",
        img: "https://lh3.googleusercontent.com/aida-public/AB6AXuASJopP5i9cYdIs9FVAtuwSDoKX1sDHPIInc6svh8aRHUtoqI_WaT9YUIKaHyMwCdAIONKChLK_8SRhHfulFGoQm_xVXpxQJOZrNVfvhki087ECd-bWARxsnif5eCCRQ9X6nSX5TxLBU5DLyyroeaUWj0igv9hWlA1kw1difGVaF7rPFBf1xq5SXgJNIbJ9rUoAI4CwqiYZL4M1DRmy0olWuZ-2MtFuUrWR99tngz6IDnTIZHwODU8"
      },
      mesh: {
        title: "Secure Mesh: Encrypted Drone Communications",
        desc: "Nextek engineered a quantum-resistant mesh network for autonomous drone swarms operating in high-interference environments. The protocol ensures absolute data integrity and link stability, even under active electronic countermeasures, protecting critical intelligence assets.",
        author: "Hiroshi Sato",
        time: "9 min read",
        img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDTtvbB16OK768ggsTsntYDOgTwh9H2lTFeR1bB08VtA1RWF8Rs90owRKKpMsPdaLvg36X8BlUuHhKs4DXYiFURioazN0GGstD0NA9ZbwQkyQFO56gl608-nM-fqkuyiDSXGUVhSKjedzlE-Ur1xlfwjsLPAzkIzTkAuRS_jcGzQZITv8ARgc1U50hoeoUglYkJQTz8crKOy-MQwfAYPi8fjiBesg7_o-D60oMhOn3A5-ip3kPjOhQ"
      }
    }

    // Study key order for cycling
    const studyKeys = ['sovereign', 'atlas', 'neobank', 'health', 'automation', 'mesh']
    let currentIndex = studyKeys.indexOf('health') // default featured is 'health'

    const swapStudy = (key: string, smoothScroll = false) => {
      const data = studyData[key]
      if (!data) return
      const titleEl = document.getElementById('featured-title')
      const descEl = document.getElementById('featured-desc')
      const imgEl = document.getElementById('featured-img') as HTMLImageElement
      const authorEl = document.getElementById('featured-author')
      const timeEl = document.getElementById('featured-time')
      const container = titleEl?.closest('.flex-col')
      if (container) {
        ;(container as HTMLElement).style.opacity = '0'
        ;(container as HTMLElement).style.transition = 'opacity 0.2s ease-in-out'
      }
      setTimeout(() => {
        if (titleEl) titleEl.textContent = data.title
        if (descEl) descEl.textContent = data.desc
        if (imgEl) imgEl.src = data.img
        if (authorEl) authorEl.textContent = data.author
        if (timeEl) timeEl.textContent = data.time
        if (container) (container as HTMLElement).style.opacity = '1'
        if (smoothScroll) window.scrollTo({ top: 0, behavior: 'smooth' })
      }, 200)
    }

    document.querySelectorAll('[data-study]').forEach(card => {
      card.addEventListener('click', () => {
        const studyKey = card.getAttribute('data-study')
        if (!studyKey) return
        currentIndex = studyKeys.indexOf(studyKey)
        swapStudy(studyKey, true)
      })
    })

    const nextBtn = document.getElementById('featured-next-btn')
    nextBtn?.addEventListener('click', () => {
      currentIndex = (currentIndex + 1) % studyKeys.length
      swapStudy(studyKeys[currentIndex])
    })

    return () => {
      observer.disconnect()
      window.removeEventListener('scroll', onScroll)
    }
  }, [])

  return <div ref={ref} className="pt-20" dangerouslySetInnerHTML={{ __html: html }} />
}
