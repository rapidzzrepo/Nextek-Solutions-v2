import { useState, useCallback } from 'react'
import { Button, Icon } from '../components/ui'
import {
  categories,
  studies,
  featuredStudy as defaultFeatured,
  studySwapData,
  studyKeys,
  newsletterTitle,
  newsletterDescription,
} from '../data/CaseStudies'

export default function CaseStudies() {
  const [currentIndex, setCurrentIndex] = useState(studyKeys.indexOf('health'))
  const [activeCategory, setActiveCategory] = useState('All Case Studies')
  const [searchQuery, setSearchQuery] = useState('')
  const [newsletterEmail, setNewsletterEmail] = useState('')
  const [featuredOpacity, setFeaturedOpacity] = useState(1)

  const currentStudy = studySwapData[studyKeys[currentIndex]] ?? {
    title: defaultFeatured.title,
    desc: defaultFeatured.description,
    author: defaultFeatured.author,
    authorRole: defaultFeatured.authorRole,
    time: defaultFeatured.readTime,
    img: defaultFeatured.imageUrl,
  }

  const swapStudy = useCallback(
    (key: string, smoothScroll = false) => {
      setFeaturedOpacity(0)
      setTimeout(() => {
        setCurrentIndex(studyKeys.indexOf(key))
        setFeaturedOpacity(1)
        if (smoothScroll) window.scrollTo({ top: 0, behavior: 'smooth' })
      }, 200)
    },
    []
  )

  const handleNext = useCallback(() => {
    const next = (currentIndex + 1) % studyKeys.length
    swapStudy(studyKeys[next])
  }, [currentIndex, swapStudy])

  const handleCardClick = useCallback(
    (key: string) => {
      swapStudy(key, true)
    },
    [swapStudy]
  )

  const filteredStudies = studies.filter((study) => {
    const matchesCategory =
      activeCategory === 'All Case Studies' || study.category === activeCategory
    const matchesSearch =
      searchQuery === '' ||
      study.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      study.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      study.author.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesCategory && matchesSearch
  })

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    alert('Subscribed!')
    setNewsletterEmail('')
  }

  return (
    <div className="pt-20">
      {/* Hero Section: Featured Article */}
      <section className="max-w-container-max mx-auto px-margin-mobile sm:px-margin-tablet md:px-margin-desktop mb-12 md:mb-section-gap">
        <div
          className="flex flex-col lg:flex-row gap-8 md:gap-12 items-center bg-white border border-outline-variant rounded-xl overflow-hidden p-6 md:p-8 lg:p-12"
          style={{ opacity: 1, transition: 'opacity 0.2s ease-in-out' }}
        >
          <div
            className="lg:w-3/5 space-y-6"
            style={{ opacity: featuredOpacity, transition: 'opacity 0.2s ease-in-out' }}
          >
            <div className="flex items-center gap-3">
              <span className="bg-primary-fixed-dim text-on-primary-fixed-variant px-3 py-1 rounded-full text-label-md font-label-md">
                CASE STUDY
              </span>
              <span className="text-outline text-label-md font-label-md uppercase tracking-widest">
                FEATURED CASE STUDY
              </span>
            </div>
            <h1 className="font-display-lg text-[28px] sm:text-display-lg-mobile md:text-display-lg font-bold leading-tight text-on-surface max-w-2xl">
              {currentStudy.title}
            </h1>
            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-xl">
              {currentStudy.desc}
            </p>
            <div className="flex flex-wrap items-center gap-3 sm:gap-6 pt-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full overflow-hidden border border-outline-variant bg-surface-container">
                  <img
                    className="w-full h-full object-cover"
                    alt={defaultFeatured.authorAvatar ? 'Author avatar' : ''}
                    src={defaultFeatured.authorAvatar}
                  />
                </div>
                <div>
                  <p className="font-label-md text-label-md text-on-surface">
                    {currentStudy.author}
                  </p>
                  <p className="text-[12px] text-outline">{currentStudy.authorRole}</p>
                </div>
              </div>
              <div className="h-8 w-px bg-outline-variant/50"></div>
              <div className="flex items-center gap-2 text-outline">
                <Icon name="schedule" className="text-[18px]" />
                <span className="font-label-md text-label-md">{currentStudy.time}</span>
              </div>
            </div>
          </div>
          <div className="lg:w-2/5 w-full h-[250px] md:h-[400px] rounded-lg overflow-hidden relative group cursor-pointer border border-outline-variant transition-all duration-700 opacity-100 translate-y-0 bg-surface-container">
            <img
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 transition-all ease-in-out"
              alt={defaultFeatured.imageAlt}
              src={currentStudy.img}
              loading="eager"
              decoding="async"
              style={{ willChange: 'opacity, transform', transition: 'opacity 0.7s ease-in-out' }}
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <button
                onClick={handleNext}
                className="material-symbols-outlined text-primary text-5xl bg-white/90 hover:bg-white rounded-full p-4 shadow-xl cursor-pointer transition-transform hover:scale-110 active:scale-95 select-none"
                aria-label="Next case study"
              >
                arrow_forward
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="max-w-container-max mx-auto px-margin-mobile sm:px-margin-tablet md:px-margin-desktop mb-12 md:mb-16">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 md:gap-6 border-b border-outline-variant/30 pb-6">
          <div className="flex gap-2 md:gap-4 items-center overflow-x-auto no-scrollbar -mx-margin-mobile px-margin-mobile md:mx-0 md:px-0">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={
                  activeCategory === cat
                    ? 'bg-primary text-on-primary px-4 md:px-6 py-2 rounded-full font-label-md text-[12px] md:text-label-md whitespace-nowrap shrink-0'
                    : 'text-on-surface-variant hover:text-primary transition-colors px-4 md:px-6 py-2 rounded-full font-label-md text-[12px] md:text-label-md whitespace-nowrap shrink-0'
                }
              >
                {cat}
              </button>
            ))}
          </div>
          <div className="flex items-center gap-2 text-on-surface-variant border border-outline-variant px-4 py-2 rounded-lg bg-white w-full md:w-auto">
            <Icon name="search" className="text-lg" />
            <input
              className="bg-transparent border-none focus:ring-0 font-body-md text-body-md w-full"
              placeholder="Search the hub..."
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>
      </section>

      {/* Insight Cards Grid */}
      <section className="max-w-container-max mx-auto px-margin-mobile sm:px-margin-tablet md:px-margin-desktop mb-12 md:mb-section-gap">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-gutter">
          {filteredStudies.map((study) => (
            <div
              key={study.key}
              onClick={() => handleCardClick(study.key)}
              className="group bg-white border border-outline-variant rounded-xl overflow-hidden hover-card transition-all duration-300 duration-700 opacity-100 translate-y-0 cursor-pointer"
            >
              <div className="h-56 overflow-hidden">
                <img
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  alt={study.imageAlt}
                  src={study.imageUrl}
                />
              </div>
              <div className="p-6 space-y-4">
                <div className="flex justify-between items-center">
                  <span className="bg-tertiary-fixed text-tertiary px-2 py-1 rounded text-[12px] font-bold uppercase tracking-tighter">
                    {study.category}
                  </span>
                  <span className="text-outline font-label-md text-label-md">
                    {study.readTime}
                  </span>
                </div>
                <h3 className="font-headline-lg text-[18px] sm:text-headline-lg text-on-surface leading-snug group-hover:text-primary transition-colors">
                  {study.title}
                </h3>
                <p className="text-on-surface-variant line-clamp-none sm:line-clamp-2">
                  {study.description}
                </p>
                <div className="pt-4 flex items-center gap-3">
                  {study.authorAvatar && (
                    <div className="w-8 h-8 rounded-full overflow-hidden bg-surface-variant">
                      <img
                        className="w-full h-full object-cover"
                        alt={`${study.author} avatar`}
                        src={study.authorAvatar}
                      />
                    </div>
                  )}
                  <span className="text-label-md font-label-md text-on-surface">
                    {study.author}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="w-full bg-inverse-surface py-12 md:py-24 px-margin-mobile sm:px-margin-tablet md:px-margin-desktop">
        <div className="max-w-container-max mx-auto flex flex-col items-center text-center space-y-8">
          <div className="bg-primary/20 p-4 rounded-2xl mb-4">
            <Icon name="mail" className="text-inverse-primary text-5xl" />
          </div>
          <h2 className="font-headline-xl text-[22px] sm:text-headline-xl text-inverse-on-surface max-w-2xl">
            {newsletterTitle}
          </h2>
          <p className="text-surface-variant/70 font-body-lg text-body-lg max-w-xl">
            {newsletterDescription}
          </p>
          <form
            className="flex flex-col sm:flex-row gap-4 w-full max-w-md pt-4"
            onSubmit={handleNewsletterSubmit}
          >
            <input
              className="flex-grow bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder:text-white/40 focus:ring-2 focus:ring-primary focus:border-transparent transition-all outline-none"
              placeholder="Enter your work email"
              required
              type="email"
              value={newsletterEmail}
              onChange={(e) => setNewsletterEmail(e.target.value)}
            />
            <Button type="submit" size="md">
              Schedule a Scoping Session
            </Button>
          </form>
          <p className="text-white/30 text-[12px]">
            Join 45,000+ technical leaders. No fluff, just precision engineering.
          </p>
        </div>
      </section>
    </div>
  )
}
