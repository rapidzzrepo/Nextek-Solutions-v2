export default function SectionDivider({ flip = false, className = '' }: { flip?: boolean; className?: string }) {
  return (
    <div className={`relative w-full overflow-hidden leading-[0] ${flip ? 'rotate-180' : ''} ${className}`}>
      <svg
        viewBox="0 0 1440 60"
        preserveAspectRatio="none"
        className="w-full h-[40px] md:h-[60px]"
      >
        <path
          d="M0,0 C480,60 960,0 1440,40 L1440,60 L0,60 Z"
          fill="currentColor"
        />
      </svg>
    </div>
  )
}
