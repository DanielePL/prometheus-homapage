import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useScrollAnimation } from '../hooks/useScrollAnimation'
import {
  Smartphone,
  Monitor,
  Building2,
  Eye,
  Cpu,
  Utensils,
  TrendingUp,
  Users,
  BarChart3,
  Bot,
  CalendarDays,
  LayoutDashboard,
  ScanLine,
  Gauge,
  Wifi,
} from 'lucide-react'

const tabs = [
  {
    id: 'athlete',
    label: 'Athlete App',
    icon: Smartphone,
    title: 'Prometheus Athlete App',
    description: 'Your AI-powered training companion that learns, adapts, and evolves with every rep.',
    features: [
      { icon: Bot, text: 'AI coaching & periodization' },
      { icon: Eye, text: 'Real-time VBT barbell velocity analysis via phone camera' },
      { icon: Utensils, text: 'Nutrition tracking with 4.5M food database' },
      { icon: TrendingUp, text: 'Progressive overload planning' },
    ],
    mockup: 'phone',
    screens: [
      { label: 'Training Dashboard', img: '/images/screenshots/training-framed.png' },
      { label: 'AI Coach', img: '/images/screenshots/coach-framed.png' },
      { label: 'Nutrition Tracker', img: '/images/screenshots/nutrition-framed.png' },
    ],
  },
  {
    id: 'coach',
    label: 'Coach Software',
    icon: Monitor,
    title: 'Prometheus Coach Software',
    description: 'Professional-grade tools to manage, program, and analyze your athletes.',
    features: [
      { icon: Users, text: 'Client management & program design' },
      { icon: BarChart3, text: 'Progress analytics & reporting' },
      { icon: Bot, text: 'AI-assisted programming suggestions' },
    ],
    mockup: 'laptop',
    screenshot: '/images/screenshots/coach-dashboard.png',
  },
  {
    id: 'enterprise',
    label: 'Enterprise',
    icon: Building2,
    title: 'Prometheus Enterprise',
    description: 'End-to-end studio and clinic management with AI-powered insights.',
    features: [
      { icon: LayoutDashboard, text: 'Managed coaching software & member CRM' },
      { icon: Smartphone, text: 'Studio entry management via phone' },
      { icon: CalendarDays, text: 'Group course organization' },
      { icon: Bot, text: 'Full CRM with analytics and AI assistants' },
    ],
    mockup: 'laptop',
    screenshot: '/images/screenshots/enterprise-dashboard.png',
  },
  {
    id: 'vbt',
    label: 'Prometheus Lab',
    icon: Eye,
    title: 'Prometheus Lab',
    description: 'Coaches and gyms deliver training data from the field. Prometheus Lab transforms it into research-grade insights — Load-Velocity Profiles, velocity trends, e1RM estimation, and R² regression analysis. Beyond VBT, it analyzes cross-performance between training, nutrition, and periodization/recovery — then delivers actionable recommendations back so every client reaches their goals faster.',
    features: [
      { icon: ScanLine, text: 'Load-Velocity Profile scatter plots per exercise' },
      { icon: TrendingUp, text: 'Velocity trend analysis across sessions' },
      { icon: Gauge, text: 'R² correlation values for scientific validation' },
      { icon: Cpu, text: 'Per-athlete e1RM estimation and MVT tracking' },
      { icon: BarChart3, text: 'Cross-performance analysis: training × nutrition × periodization/recovery' },
      { icon: Wifi, text: 'CSV export for external research collaboration' },
    ],
    mockup: 'laptop',
    screenshot: '/images/screenshots/vbt-lab-dashboard.png',
  },
]

function PhoneMockup({ screens }) {
  return (
    <div className="flex justify-center items-end">
      {screens.map((screen, i) => (
        <div
          key={screen.label}
          className={`${
            i === 1 ? 'w-48 z-10' : 'w-36 opacity-70 hidden sm:block -mx-2'
          }`}
        >
          <img
            src={screen.img}
            alt={screen.label}
            className="w-full h-auto rounded-[30px] shadow-[0_20px_50px_rgba(0,0,0,0.4)]"
          />
        </div>
      ))}
    </div>
  )
}

function LaptopMockup({ title, screenshot }) {
  return (
    <div className="bg-dark-light border border-dark-border rounded-2xl overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.4)] w-full mx-auto">
      <div className="flex items-center gap-1.5 px-4 py-2.5 bg-dark-card border-b border-dark-border">
        <div className="w-2.5 h-2.5 rounded-full bg-red-500/50" />
        <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/50" />
        <div className="w-2.5 h-2.5 rounded-full bg-green-500/50" />
        <div className="flex-1 mx-8">
          <div className="h-5 bg-dark rounded-md" />
        </div>
      </div>
      {screenshot ? (
        <img src={screenshot} alt={title} className="w-full h-auto" />
      ) : (
        <div className="p-8 flex flex-col items-center justify-center h-48">
          <Monitor size={32} className="text-accent/40 mb-3" />
          <p className="text-sm text-[#999]">{title} Dashboard</p>
        </div>
      )}
    </div>
  )
}

export default function ProductShowcase() {
  const [activeTab, setActiveTab] = useState('athlete')
  const [ref, isVisible] = useScrollAnimation(0.1)
  const active = tabs.find((t) => t.id === activeTab)

  return (
    <section id="product" ref={ref} className="py-24 lg:py-32 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div
          className={`text-center mb-16 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <h2 className="font-['Arimo'] text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 uppercase">
            The Prometheus{' '}
            <span className="text-accent">Ecosystem</span>
          </h2>
          <p className="text-[#999] text-lg max-w-2xl mx-auto">
            Every tool a serious athlete and health professional needs. One platform.
          </p>
        </div>

        {/* Tabs */}
        <div
          className={`flex flex-wrap justify-center gap-2 mb-12 transition-all duration-700 delay-200 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-1.5 sm:gap-2 px-3 sm:px-5 py-2.5 sm:py-3 rounded-lg text-xs sm:text-sm font-medium transition-all duration-200 ${
                activeTab === tab.id
                  ? 'bg-accent text-white shadow-[0px_2px_18px_0px_#F2721B]'
                  : 'bg-dark-card text-[#999] hover:text-white border border-dark-border hover:border-accent/30'
              }`}
            >
              <tab.icon size={16} />
              {tab.label}
            </button>
          ))}
        </div>

        {/* Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="grid lg:grid-cols-2 gap-12 items-center"
          >
            {/* Info */}
            <div>
              <h3 className="font-['Arimo'] text-2xl sm:text-3xl font-bold mb-4 uppercase">{active.title}</h3>
              <p className="text-[#999] mb-8">{active.description}</p>
              <div className="space-y-4">
                {active.features.map((f, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="w-9 h-9 bg-accent/10 rounded-lg flex items-center justify-center shrink-0 mt-0.5">
                      <f.icon size={18} className="text-accent" />
                    </div>
                    <span className="text-gray-300 text-sm leading-relaxed pt-1.5">{f.text}</span>
                  </div>
                ))}
              </div>
              <a
                href="https://play.google.com/store/apps/details?id=prometheus.coach&pcampaignid=web_share"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-block px-8 py-3 bg-accent text-white font-bold rounded-lg text-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0px_2px_18px_0px_#F2721B]"
              >
                Start Free Trial
              </a>
            </div>

            {/* Mockup */}
            <div className="flex justify-center">
              {active.mockup === 'phone' && <PhoneMockup screens={active.screens} />}
              {active.mockup === 'laptop' && <LaptopMockup title={active.title} screenshot={active.screenshot} />}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  )
}
