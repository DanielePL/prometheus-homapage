import { useScrollAnimation } from '../hooks/useScrollAnimation'
import { FlaskConical, GraduationCap, BookCheck, Gauge } from 'lucide-react'

const research = [
  {
    icon: FlaskConical,
    text: 'Active research in acceleration-based training measurement methodology',
  },
  {
    icon: GraduationCap,
    text: 'Sports science research driving every algorithm',
  },
  {
    icon: BookCheck,
    text: 'Continuous validation against peer-reviewed protocols',
  },
  {
    icon: Gauge,
    text: 'Proprietary VBT measurement pipeline — in development since 2017',
  },
]

export default function PrometheusLab() {
  const [ref, isVisible] = useScrollAnimation(0.1)

  return (
    <section id="lab" ref={ref} className="py-24 lg:py-32 relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-[0.03]">
        <svg className="w-full h-full">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      {/* Waveform decoration */}
      <div className="absolute bottom-0 left-0 right-0 h-32 opacity-[0.04]">
        <svg viewBox="0 0 1200 100" preserveAspectRatio="none" className="w-full h-full">
          <path
            d="M0,50 Q100,10 200,50 Q300,90 400,50 Q500,10 600,50 Q700,90 800,50 Q900,10 1000,50 Q1100,90 1200,50"
            fill="none"
            stroke="#F2721B"
            strokeWidth="2"
          />
          <path
            d="M0,50 Q100,30 200,50 Q300,70 400,50 Q500,30 600,50 Q700,70 800,50 Q900,30 1000,50 Q1100,70 1200,50"
            fill="none"
            stroke="#F2721B"
            strokeWidth="1"
          />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Label */}
        <div
          className={`mb-4 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <span className="text-accent text-sm font-semibold uppercase tracking-widest">
            The Prometheus Lab
          </span>
        </div>
        <h2
          className={`text-3xl sm:text-4xl lg:text-5xl font-extrabold font-['Arimo'] uppercase mb-4 transition-all duration-700 delay-100 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          Not Just Software —{' '}
          <span className="text-accent">
            Science in Motion
          </span>
        </h2>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 mt-12">
          {/* Left — Content */}
          <div
            className={`transition-all duration-700 delay-200 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <div className="space-y-6">
              {research.map((item, i) => (
                <div key={i} className="flex items-start gap-4">
                  <div className="w-11 h-11 bg-accent/10 border border-accent/20 rounded-xl flex items-center justify-center shrink-0">
                    <item.icon size={20} className="text-accent" />
                  </div>
                  <p className="text-gray-300 leading-relaxed pt-2">{item.text}</p>
                </div>
              ))}
            </div>

            {/* Quote */}
            <div className="mt-10 p-6 bg-dark-light border-l-2 border-accent rounded-r-xl">
              <p className="text-gray-300 italic leading-relaxed">
                "We don't just build fitness apps. We build measurement instruments that happen to
                run on your phone."
              </p>
              <p className="text-sm text-accent mt-3 font-medium">
                — Dr. Basil Achermann, Chief Science Officer
              </p>
            </div>
          </div>

          {/* Right — Lab Visual */}
          <div
            className={`transition-all duration-700 delay-300 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
            }`}
          >
            <div className="bg-dark-card border border-dark-border rounded-2xl overflow-hidden h-full min-h-[400px] flex flex-col">
              {/* Top bar */}
              <div className="flex items-center gap-1.5 px-4 py-3 border-b border-dark-border">
                <div className="w-2 h-2 rounded-full bg-accent/50" />
                <div className="w-2 h-2 rounded-full bg-accent/50" />
                <div className="w-2 h-2 rounded-full bg-green-500/50" />
                <span className="text-xs text-gray-600 ml-2">prometheus-lab v3.2.1</span>
              </div>

              {/* Content */}
              <div className="flex-1 p-6 flex flex-col items-center justify-center text-center">
                <div className="grid grid-cols-3 gap-3 mb-6 w-full max-w-xs">
                  {[
                    { label: 'Acc X', value: '9.81', color: 'text-accent' },
                    { label: 'Acc Y', value: '0.02', color: 'text-accent' },
                    { label: 'Acc Z', value: '0.15', color: 'text-green-400' },
                    { label: 'Vel', value: '0.85', color: 'text-accent' },
                    { label: 'Power', value: '412', color: 'text-accent' },
                    { label: 'ROM', value: '38.2', color: 'text-green-400' },
                  ].map((d) => (
                    <div key={d.label} className="bg-dark/50 rounded-lg p-3">
                      <p className="text-[10px] text-gray-600 uppercase">{d.label}</p>
                      <p className={`text-lg font-mono font-bold ${d.color}`}>{d.value}</p>
                    </div>
                  ))}
                </div>

                {/* Mini chart */}
                <div className="w-full max-w-xs flex items-end justify-center gap-0.5 h-16">
                  {Array.from({ length: 24 }, (_, i) => (
                    <div
                      key={i}
                      className="w-2 bg-accent/40 rounded-t"
                      style={{
                        height: `${20 + Math.sin(i * 0.5) * 30 + Math.random() * 20}%`,
                      }}
                    />
                  ))}
                </div>
                <p className="text-xs text-gray-600 mt-3">
                  Research Environment — Live Sensor Data
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
