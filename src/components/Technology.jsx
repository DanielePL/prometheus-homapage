import { useScrollAnimation } from '../hooks/useScrollAnimation'
import { Eye, Brain, Smartphone, Globe } from 'lucide-react'

const features = [
  {
    icon: Eye,
    title: 'Computer Vision VBT',
    desc: 'Real-time velocity tracking without external sensors',
  },
  {
    icon: Brain,
    title: 'AI Coaching Engine',
    desc: 'Personalized programming that adapts to your progress',
  },
  {
    icon: Smartphone,
    title: 'On-Device Processing',
    desc: 'No cloud dependency, your data stays private',
  },
  {
    icon: Globe,
    title: 'Open Ecosystem',
    desc: 'Designed to integrate with wearables and gym equipment',
  },
]

export default function Technology() {
  const [ref, isVisible] = useScrollAnimation(0.1)

  return (
    <section id="technology" ref={ref} className="py-24 lg:py-32 bg-dark-light/20 relative overflow-hidden">
      {/* Circuit pattern background */}
      <div className="absolute inset-0 opacity-[0.03]">
        <svg className="w-full h-full">
          <defs>
            <pattern id="circuit" width="80" height="80" patternUnits="userSpaceOnUse">
              <circle cx="40" cy="40" r="1.5" fill="#F2721B" />
              <path d="M 40 0 L 40 38 M 40 42 L 40 80 M 0 40 L 38 40 M 42 40 L 80 40" stroke="#F2721B" strokeWidth="0.5" fill="none" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#circuit)" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div
          className={`text-center mb-16 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <span className="text-accent text-sm font-semibold uppercase tracking-widest">
            Built Different
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-['Arimo'] uppercase mt-3 mb-4">
            Science-Grade Technology.{' '}
            <span className="text-accent">
              Athlete-Tested.
            </span>
          </h2>
        </div>

        {/* Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f, i) => (
            <div
              key={i}
              className={`group bg-dark-card border border-dark-border rounded-2xl p-8 text-center transition-all duration-500 hover:border-accent/30 hover:shadow-lg hover:shadow-accent/5 hover:-translate-y-1 ${
                isVisible
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: isVisible ? `${i * 100}ms` : '0ms' }}
            >
              <div className="w-14 h-14 bg-accent/10 border border-accent/20 rounded-2xl flex items-center justify-center mx-auto mb-5 group-hover:bg-accent/20 group-hover:scale-110 transition-all duration-300">
                <f.icon size={24} className="text-accent" />
              </div>
              <h3 className="font-bold text-lg mb-2">{f.title}</h3>
              <p className="text-sm text-[#999] leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
