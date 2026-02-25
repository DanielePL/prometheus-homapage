import { useScrollAnimation, useCountUp } from '../hooks/useScrollAnimation'

const stats = [
  { end: 1200, suffix: '+', label: 'Exercises' },
  { end: 92, suffix: '', label: 'Sports Biomechanically Mapped' },
  { end: 4.5, suffix: 'M+', label: 'Foods Database', decimal: true },
  { label: 'CV Barbell + Body Motion Tracking', text: true },
]

function StatItem({ stat, isVisible }) {
  const count = useCountUp(
    stat.decimal ? 45 : stat.end || 0,
    2000,
    false,
    isVisible
  )

  return (
    <div className="flex flex-col items-center gap-1 px-4 py-6 sm:py-8">
      {stat.text ? (
        <span className="text-xl sm:text-2xl lg:text-3xl font-bold text-white">{stat.label}</span>
      ) : (
        <>
          <span className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-accent">
            {stat.decimal ? `${(count / 10).toFixed(1)}` : count}
            {stat.suffix}
          </span>
          <span className="text-xs sm:text-sm text-[#999] font-medium">{stat.label}</span>
        </>
      )}
    </div>
  )
}

export default function SocialProof() {
  const [ref, isVisible] = useScrollAnimation(0.2)

  return (
    <section ref={ref} className="relative py-8 border-y border-dark-border bg-dark-light/30">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-y-2 sm:divide-x divide-dark-border">
          {stats.map((stat, i) => (
            <StatItem key={i} stat={stat} isVisible={isVisible} />
          ))}
        </div>
      </div>
    </section>
  )
}
