import { ReactNode } from 'react'

interface CtaBannerProps {
  title: string
  description?: string
  primaryAction?: ReactNode
  secondaryAction?: ReactNode
}

export default function CtaBanner({ title, description, primaryAction, secondaryAction }: CtaBannerProps) {
  return (
    <section className="py-16 md:py-section-gap max-w-container-max mx-auto px-margin-mobile sm:px-margin-tablet md:px-margin-desktop text-center">
      <div className="bg-primary rounded-[2rem] p-8 md:p-16 relative overflow-hidden shadow-2xl">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,white_0%,transparent_70%)]" />
        <h2 className="font-display-lg text-headline-xl md:text-display-lg text-on-primary mb-6 relative z-10">{title}</h2>
        {description && (
          <p className="text-on-primary/80 font-body-lg max-w-2xl mx-auto mb-6 md:mb-10 relative z-10">{description}</p>
        )}
        {(primaryAction || secondaryAction) && (
          <div className="flex flex-col md:flex-row gap-4 justify-center relative z-10">
            {primaryAction}
            {secondaryAction}
          </div>
        )}
      </div>
    </section>
  )
}
