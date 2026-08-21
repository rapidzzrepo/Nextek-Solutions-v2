import { Link } from 'react-router-dom'
import { insights } from '../../../data/HomeData'

export default function LatestInsights() {
  return (
    <section className="py-20 md:py-[120px] bg-gradient-to-b from-surface-container/30 to-surface relative overflow-hidden" id="insights">
      <div className="absolute top-[20%] left-[-10%] w-[350px] h-[350px] rounded-full bg-primary/5 blur-[120px] pointer-events-none" />
      <div className="max-w-container-max mx-auto px-margin-mobile sm:px-margin-tablet md:px-margin-desktop">
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary font-label-md text-[11px] tracking-widest uppercase mb-4">Latest Insights</span>
          <h2 className="font-display-lg text-[28px] sm:text-[36px] md:text-headline-xl text-on-surface mb-4">From Our Team</h2>
          <p className="font-body-lg text-on-surface-variant max-w-xl mx-auto">Expert tips on marketing, engineering, and growing your business.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {insights.map((post, i) => (
            <article key={i} className="group rounded-2xl bg-surface-container/40 backdrop-blur-sm overflow-hidden hover:bg-surface-container hover:shadow-2xl hover:shadow-primary/5 transition-all cursor-pointer">
              <div className="relative aspect-[16/10] overflow-hidden">
                <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110" style={{ backgroundImage: `url("${post.imageUrl}")` }} />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 rounded-full bg-primary text-white text-[10px] font-bold tracking-wider uppercase">
                    {post.category}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <div className="text-on-surface-variant/50 text-[12px] mb-2">{post.date}</div>
                <h3 className="font-headline-lg text-on-surface text-lg mb-3 group-hover:text-primary transition-colors">{post.title}</h3>
                <Link to="/case-studies" className="inline-flex items-center gap-1 text-primary font-label-md text-[13px] group-hover:gap-2 transition-all">
                  Read More
                  <span className="material-symbols-outlined text-sm">arrow_forward</span>
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
