import { useScrollAnimation } from '../hooks/useScrollAnimation'
import { Star } from 'lucide-react'

const testimonials = [
  {
    quote: "Prometheus changed the way I train. The VBT tracking alone replaced $2,000 worth of equipment — and it's right on my phone.",
    name: 'Beta Tester',
    role: 'Competitive Powerlifter',
    initials: 'AT',
    color: 'from-accent to-orange-400',
  },
  {
    quote: "As a coach managing 30+ athletes, the AI-assisted programming saves me hours every week. It's like having a research assistant built into my workflow.",
    name: 'Beta Tester',
    role: 'Strength & Conditioning Coach',
    initials: 'SC',
    color: 'from-accent to-orange-400',
  },
  {
    quote: "The enterprise features are exactly what our physiotherapy clinic needed. Patient tracking, progress analytics, and it integrates seamlessly with our workflow.",
    name: 'Beta Tester',
    role: 'Clinic Director',
    initials: 'CD',
    color: 'from-green-400 to-emerald-500',
  },
]

export default function Testimonials() {
  const [ref, isVisible] = useScrollAnimation(0.1)

  return (
    <section ref={ref} className="py-24 lg:py-32 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div
          className={`text-center mb-16 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-['Arimo'] uppercase mb-4">
            What Athletes{' '}
            <span className="text-accent">
              Say
            </span>
          </h2>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className={`bg-dark-card border border-dark-border rounded-2xl p-6 transition-all duration-500 hover:border-accent/20 ${
                isVisible
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: isVisible ? `${i * 100}ms` : '0ms' }}
            >
              {/* Stars */}
              <div className="flex gap-0.5 mb-4">
                {Array.from({ length: 5 }).map((_, j) => (
                  <Star key={j} size={14} className="text-accent fill-accent" />
                ))}
              </div>

              <p className="text-gray-300 text-sm leading-relaxed mb-6 italic">
                "{t.quote}"
              </p>

              <div className="flex items-center gap-3 pt-4 border-t border-dark-border">
                <div
                  className={`w-10 h-10 bg-gradient-to-br ${t.color} rounded-full flex items-center justify-center`}
                >
                  <span className="text-xs font-bold text-dark">{t.initials}</span>
                </div>
                <div>
                  <p className="text-sm font-semibold text-white">{t.name}</p>
                  <p className="text-xs text-[#999]">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
