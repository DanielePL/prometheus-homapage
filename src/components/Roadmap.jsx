import { useScrollAnimation } from '../hooks/useScrollAnimation'
import { Check, Circle } from 'lucide-react'

const milestones = [
  {
    year: '2010',
    title: 'First Fitness CRM Development',
    heritage: true,
    done: true,
  },
  {
    year: '2017',
    title: '9-Axis VBT Prototype',
    heritage: true,
    done: true,
  },
  {
    year: '2024–25',
    title: 'Prometheus R&D & Development',
    done: true,
  },
  {
    year: '2026',
    title: 'Public Launch — Athlete App & Coach Software',
    current: true,
  },
  {
    year: '2026 H2',
    title: 'Enterprise Launch & Clinic/Gym Partnerships',
  },
  {
    year: '2027',
    title: 'Wearable Integration & Global Expansion',
  },
  {
    year: '2028',
    title: 'Clinical Validation Studies & Medical Partnerships',
  },
]

export default function Roadmap() {
  const [ref, isVisible] = useScrollAnimation(0.1)

  return (
    <section id="roadmap" ref={ref} className="py-24 lg:py-32 bg-dark-light/20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div
          className={`text-center mb-16 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <span className="text-accent text-sm font-semibold uppercase tracking-widest">
            Where We're Going
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-['Arimo'] uppercase mt-3 mb-4">
            Vision &{' '}
            <span className="text-accent">
              Roadmap
            </span>
          </h2>
        </div>

        {/* Timeline — Desktop (horizontal) */}
        <div
          className={`hidden lg:block transition-all duration-700 delay-200 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          {/* Line */}
          <div className="relative">
            <div className="absolute top-6 left-0 right-0 h-0.5 bg-dark-border" />
            <div className="grid grid-cols-7 gap-2">
              {milestones.map((m, i) => (
                <div key={i} className="relative pt-0">
                  {/* Dot */}
                  <div className="flex justify-center mb-4">
                    <div
                      className={`w-12 h-12 rounded-full flex items-center justify-center z-10 relative ${
                        m.current
                          ? 'bg-accent shadow-lg shadow-accent/30'
                          : m.done
                            ? 'bg-dark-card border-2 border-accent/50'
                            : 'bg-dark-card border border-dark-border'
                      }`}
                    >
                      {m.done ? (
                        <Check size={18} className="text-accent" />
                      ) : m.current ? (
                        <div className="w-3 h-3 bg-white rounded-full animate-pulse" />
                      ) : (
                        <Circle size={14} className="text-gray-600" />
                      )}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="text-center px-1">
                    <span
                      className={`text-xs font-semibold uppercase tracking-wider ${
                        m.heritage
                          ? 'text-accent'
                          : m.current
                            ? 'text-accent'
                            : 'text-gray-600'
                      }`}
                    >
                      {m.heritage && '★ '}
                      {m.year}
                    </span>
                    <p
                      className={`text-sm mt-1 leading-snug ${
                        m.current ? 'text-white font-semibold' : m.done ? 'text-[#999]' : 'text-[#999]'
                      }`}
                    >
                      {m.title}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Timeline — Mobile (vertical) */}
        <div className="lg:hidden space-y-0">
          {milestones.map((m, i) => (
            <div
              key={i}
              className={`flex gap-4 transition-all duration-500 ${
                isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'
              }`}
              style={{ transitionDelay: isVisible ? `${i * 80}ms` : '0ms' }}
            >
              {/* Dot + Line */}
              <div className="flex flex-col items-center">
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center shrink-0 ${
                    m.current
                      ? 'bg-accent shadow-lg shadow-accent/30'
                      : m.done
                        ? 'bg-dark-card border-2 border-accent/50'
                        : 'bg-dark-card border border-dark-border'
                  }`}
                >
                  {m.done ? (
                    <Check size={16} className="text-accent" />
                  ) : m.current ? (
                    <div className="w-2.5 h-2.5 bg-white rounded-full animate-pulse" />
                  ) : (
                    <Circle size={12} className="text-gray-600" />
                  )}
                </div>
                {i < milestones.length - 1 && (
                  <div className="w-0.5 h-12 bg-dark-border" />
                )}
              </div>

              {/* Content */}
              <div className="pb-8 pt-1.5">
                <span
                  className={`text-xs font-semibold uppercase tracking-wider ${
                    m.heritage ? 'text-accent' : m.current ? 'text-accent' : 'text-gray-600'
                  }`}
                >
                  {m.heritage && '★ '}
                  {m.year}
                </span>
                <p
                  className={`text-sm mt-0.5 ${
                    m.current ? 'text-white font-semibold' : m.done ? 'text-[#999]' : 'text-[#999]'
                  }`}
                >
                  {m.title}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
