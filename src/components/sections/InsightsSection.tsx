import { Link } from 'react-router-dom'
import { insights } from '../../data/Home'

export default function InsightsSection() {
  return (
    <section className="py-16 md:py-section-gap bg-surface">
      <div className="max-w-container-max mx-auto px-margin-mobile sm:px-margin-tablet md:px-margin-desktop">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-8 md:mb-16 gap-4 md:gap-0">
          <div>
            <h2 className="font-display-lg text-headline-xl">Latest Insights</h2>
            <p className="font-body-lg text-on-surface-variant">Thought leadership on engineering culture.</p>
          </div>
          <Link className="font-label-md text-primary border-b border-primary pb-1" to="/case-studies">View All Articles</Link>
        </div>
        <div className="grid md:grid-cols-3 gap-gutter">
          {insights.map((insight, i) => (
            <article key={i} className="group cursor-pointer accelerated-layer">
              <div className="aspect-video rounded-xl overflow-hidden mb-6">
                <div className={`w-full h-full bg-cover bg-center transition-transform duration-500 group-hover:scale-105 accelerated-layer`} alt={insight.imageAlt} style={{ backgroundImage: `url("${insight.imageUrl}")` }}></div>
              </div>
              <span className={`${insight.categoryColor} font-label-md uppercase mb-2 block`}>{insight.category}</span>
              <h4 className={`font-headline-lg mb-4 ${insight.hoverColorClass} transition-colors`}>{insight.title}</h4>
              <p className="font-body-md text-on-surface-variant mb-6 line-clamp-2">{insight.excerpt}</p>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-surface-container"></div>
                <span className="font-label-md text-on-surface-variant">{insight.author} &middot; {insight.readTime}</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
