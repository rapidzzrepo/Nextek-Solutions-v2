import { products } from '../../data/Home'

export default function ProductShowcases() {
  return (
    <section className="py-16 md:py-section-gap max-w-container-max mx-auto px-margin-mobile sm:px-margin-tablet md:px-margin-desktop">
      <h2 className="font-display-lg text-display-lg-mobile md:text-headline-xl mb-8 md:mb-16 text-center">Transforming Ideas into Ecosystems</h2>
      <div className="space-y-10 md:space-y-16 lg:space-y-32">
        {products.map((product, i) => (
          <div key={i} className={`flex flex-col lg:flex-row items-center gap-10 lg:gap-20${i === 1 ? '' : ''}`}>
            {i === 0 ? (
              <>
                <div className="lg:w-1/2 order-2 lg:order-1">
                  <div className="flex items-center gap-4 mb-6">
                    <div className={`w-12 h-12 ${product.numberBg} rounded-full flex items-center justify-center font-bold ${product.numberText}`}>{product.number}</div>
                    <h3 className="font-headline-xl">{product.title}</h3>
                  </div>
                  <p className="font-body-lg text-on-surface-variant mb-8">{product.description}</p>
                  <ul className="space-y-4 mb-10">
                    {product.features.map((feature, fi) => (
                      <li key={fi} className="flex items-center gap-3 font-body-md"><span className={`material-symbols-outlined ${product.featureIconColor}`}>check_circle</span> {feature}</li>
                    ))}
                  </ul>
                  <button className="text-primary font-bold flex items-center gap-2 group">Explorer Product <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">arrow_right_alt</span></button>
                </div>
                <div className="lg:w-1/2 order-1 lg:order-2">
                  <div className="relative">
                    <div className={`absolute -inset-4 ${product.glowColor} blur-2xl rounded-full`}></div>
                    <div className="relative aspect-video bg-cover bg-center rounded-2xl shadow-xl accelerated-layer" role="img" aria-label={product.imageAlt} style={{ backgroundImage: `url("${product.imageUrl}")` }}></div>
                  </div>
                </div>
              </>
            ) : (
              <>
                <div className="lg:w-1/2">
                  <div className="relative">
                    <div className={`absolute -inset-4 ${product.glowColor} blur-2xl rounded-full`}></div>
                    <div className="relative aspect-video bg-cover bg-center rounded-2xl shadow-xl accelerated-layer" role="img" aria-label={product.imageAlt} style={{ backgroundImage: `url("${product.imageUrl}")` }}></div>
                  </div>
                </div>
                <div className="lg:w-1/2">
                  <div className="flex items-center gap-4 mb-6">
                    <div className={`w-12 h-12 ${product.numberBg} rounded-full flex items-center justify-center font-bold ${product.numberText}`}>{product.number}</div>
                    <h3 className="font-headline-xl">{product.title}</h3>
                  </div>
                  <p className="font-body-lg text-on-surface-variant mb-8">{product.description}</p>
                  <ul className="space-y-4 mb-10">
                    {product.features.map((feature, fi) => (
                      <li key={fi} className="flex items-center gap-3 font-body-md"><span className={`material-symbols-outlined ${product.featureIconColor}`}>check_circle</span> {feature}</li>
                    ))}
                  </ul>
                  <button className={`${product.numberText} font-bold flex items-center gap-2 group`}>Explorer Product <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">arrow_right_alt</span></button>
                </div>
              </>
            )}
          </div>
        ))}
      </div>
    </section>
  )
}
