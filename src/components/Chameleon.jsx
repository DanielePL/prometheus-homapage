import { useScrollAnimation } from '../hooks/useScrollAnimation'
import {
  Dumbbell,
  HeartPulse,
  Hand,
  Activity,
  Building2,
  GraduationCap,
  Briefcase,
  UserCheck,
} from 'lucide-react'

const useCases = [
  {
    icon: Dumbbell,
    title: 'Strength & Performance Gyms',
    desc: 'VBT tracking, AI programming, athlete management',
  },
  {
    icon: HeartPulse,
    title: 'Physiotherapy Clinics',
    desc: 'Rehabilitation tracking, progress measurement, patient CRM',
  },
  {
    icon: Hand,
    title: 'Ergotherapy Practices',
    desc: 'Functional movement assessment, treatment documentation, outcome tracking',
  },
  {
    icon: Activity,
    title: 'MTT Studios',
    desc: 'Supervised training management, medical-grade progress analytics',
  },
  {
    icon: Building2,
    title: 'Hospitals & Rehab Centers',
    desc: 'Enterprise patient management, multi-department coordination, clinical data integration',
  },
  {
    icon: GraduationCap,
    title: 'Talent & Sport Schools',
    desc: 'Young athlete development, coach collaboration, long-term athletic development planning',
  },
  {
    icon: Briefcase,
    title: 'Corporate Wellness',
    desc: 'Employee fitness programs, health analytics, engagement tracking',
  },
  {
    icon: UserCheck,
    title: 'Personal Training Studios',
    desc: 'Client management, scheduling, AI-assisted program design',
  },
]

export default function Chameleon() {
  const [ref, isVisible] = useScrollAnimation(0.1)

  return (
    <section id="solutions" ref={ref} className="py-24 lg:py-32 bg-dark-light/20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div
          className={`text-center mb-16 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <span className="text-accent text-sm font-semibold uppercase tracking-widest">
            The Chameleon of Health & Performance
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-['Arimo'] uppercase mt-3 mb-4">
            One Ecosystem.{' '}
            <span className="text-accent">
              Infinite Applications.
            </span>
          </h2>
          <p className="text-[#999] text-lg max-w-2xl mx-auto">
            Prometheus adapts to any health and performance environment
          </p>
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {useCases.map((uc, i) => (
            <div
              key={i}
              className={`group relative bg-dark-card border border-dark-border rounded-xl p-6 transition-all duration-500 hover:border-accent/30 hover:shadow-lg hover:shadow-accent/5 hover:-translate-y-1 ${
                isVisible
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: isVisible ? `${i * 80}ms` : '0ms' }}
            >
              {/* Glow effect */}
              <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div className="relative z-10">
                <div className="w-11 h-11 bg-accent/10 border border-accent/20 rounded-xl flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
                  <uc.icon size={20} className="text-accent" />
                </div>
                <h3 className="font-semibold text-white mb-2">{uc.title}</h3>
                <p className="text-sm text-[#999] leading-relaxed">{uc.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Closing Statement */}
        <div
          className={`text-center mt-16 transition-all duration-700 delay-500 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <p className="text-[#999] text-lg max-w-3xl mx-auto mb-8 leading-relaxed">
            From elite sport to clinical rehabilitation — Prometheus speaks the language of every
            professional who works with human performance.
          </p>
          <a
            href="https://play.google.com/store/apps/details?id=prometheus.coach&pcampaignid=web_share"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-3.5 bg-dark-card border border-accent/30 text-accent hover:bg-accent hover:text-white font-semibold rounded-lg transition-all duration-200 hover:shadow-[0px_2px_18px_0px_#F2721B]"
          >
            Discover Your Use Case
          </a>
        </div>
      </div>
    </section>
  )
}
