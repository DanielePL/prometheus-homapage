import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link } from 'react-router-dom'
import { useScrollAnimation, useCountUp } from '../hooks/useScrollAnimation'
import {
  Smartphone,
  Monitor,
  Building2,
  Eye,
  ArrowLeft,
  Lock,
  Check,
  X,
  ChevronRight,
  Cpu,
  Brain,
  Database,
  Users,
  TrendingUp,
  Mail,
  ExternalLink,
  Bot,
  Utensils,
  BarChart3,
  ScanLine,
  Gauge,
  LayoutDashboard,
  CalendarDays,
  Wifi,
  Circle,
  Trophy,
  Award,
  MessageSquare,
  ShoppingCart,
  ScanBarcode,
  Watch,
  Dumbbell,
  Heart,
  Target,
  Sparkles,
  MessageCircle,
  Phone,
  Gift,
} from 'lucide-react'

const ACCESS_CODE = 'PROMETHEUS2026'
const SESSION_KEY = 'growth_access'

// ─── Access Gate ────────────────────────────────────────────────────────────────

function AccessGate({ onAccess }) {
  const [code, setCode] = useState('')
  const [error, setError] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (code.trim().toUpperCase() === ACCESS_CODE) {
      sessionStorage.setItem(SESSION_KEY, 'true')
      onAccess()
    } else {
      setError(true)
      setTimeout(() => setError(false), 600)
    }
  }

  return (
    <div
      className="min-h-screen flex items-center justify-center px-4 relative overflow-hidden"
      style={{
        backgroundImage: 'url(/images/gradient-bg-dark.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center max-w-sm w-full"
      >
        <img src="/images/flame.png" alt="Prometheus" className="w-16 h-16 mx-auto mb-6" />
        <h1 className="font-['Arimo'] text-2xl font-bold uppercase mb-1">Prometheus</h1>
        <p className="text-[#999] text-sm mb-10">Investor Deck</p>

        <form onSubmit={handleSubmit}>
          <div
            className={`relative transition-all duration-100 ${
              error ? 'animate-[shake_0.4s_ease-in-out]' : ''
            }`}
          >
            <Lock size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-[#666]" />
            <input
              type="password"
              value={code}
              onChange={(e) => setCode(e.target.value)}
              placeholder="Access Code"
              autoFocus
              className={`w-full pl-11 pr-4 py-3.5 bg-white/[0.05] backdrop-blur-xl border rounded-xl text-white text-sm placeholder:text-[#666] focus:outline-none focus:border-accent transition-colors ${
                error ? 'border-red-500' : 'border-white/[0.10]'
              }`}
            />
          </div>
          <button
            type="submit"
            className="w-full mt-4 py-3.5 bg-accent text-white font-bold rounded-xl text-sm transition-all duration-300 hover:shadow-[0px_2px_18px_0px_#E67E22] hover:-translate-y-0.5"
          >
            Enter
          </button>
        </form>
      </motion.div>
    </div>
  )
}

// ─── Simplified Nav ─────────────────────────────────────────────────────────────

function PitchNav() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/[0.03] backdrop-blur-2xl border-b border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <img src="/images/flame.png" alt="Prometheus" className="w-8 h-8" />
          <span className="font-['Arimo'] font-bold text-lg uppercase">Prometheus</span>
        </div>
        <Link
          to="/"
          className="flex items-center gap-2 text-sm text-[#999] hover:text-white transition-colors"
        >
          <ArrowLeft size={16} />
          Back
        </Link>
      </div>
    </nav>
  )
}

// ─── Phone & Laptop Mockups ─────────────────────────────────────────────────────

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
    <div className="bg-white/[0.04] backdrop-blur-xl border border-white/[0.08] rounded-2xl overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.4)] w-full mx-auto">
      <div className="flex items-center gap-1.5 px-4 py-2.5 bg-white/[0.03] border-b border-white/[0.06]">
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

// ─── Section Wrapper ────────────────────────────────────────────────────────────

function Section({ children, className = '', id }) {
  const [ref, isVisible] = useScrollAnimation(0.1)
  return (
    <section
      id={id}
      ref={ref}
      className={`py-24 lg:py-32 relative z-10 ${className}`}
    >
      <div
        className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 transition-all duration-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        {children}
      </div>
    </section>
  )
}

function SectionHeader({ label, title, titleAccent, subtitle }) {
  return (
    <div className="text-center mb-16">
      {label && (
        <span className="text-accent text-sm font-semibold uppercase tracking-widest">
          {label}
        </span>
      )}
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-['Arimo'] uppercase mt-3 mb-4">
        {title}{' '}
        {titleAccent && <span className="text-accent">{titleAccent}</span>}
      </h2>
      {subtitle && <p className="text-[#999] text-lg max-w-2xl mx-auto">{subtitle}</p>}
    </div>
  )
}

// ─── 1. Hero ────────────────────────────────────────────────────────────────────

function HeroSection() {
  const [ref, isVisible] = useScrollAnimation(0.05)
  const products = useCountUp(4, 1500, false, isVisible)
  const tam = useCountUp(6, 1500, false, isVisible)
  const sports = useCountUp(135, 2000, false, isVisible)
  const exercises = useCountUp(800, 2000, false, isVisible)

  return (
    <section ref={ref} className="relative min-h-[80vh] flex items-center justify-center overflow-hidden z-10">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 pt-24">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent/[0.08] backdrop-blur-xl border border-accent/20 rounded-full mb-8 shadow-[0_0_20px_rgba(230,126,34,0.1)]">
            <span className="text-accent text-xs font-semibold uppercase tracking-wider">Growth Pitch 2026</span>
          </div>

          <h1 className="font-['Arimo'] text-4xl sm:text-5xl lg:text-7xl font-extrabold uppercase mb-6 leading-tight">
            The Intelligent<br />
            <span className="text-accent">Fitness Ecosystem</span>
          </h1>

          <p className="text-[#999] text-lg sm:text-xl max-w-3xl mx-auto mb-16 leading-relaxed">
            The first platform that unifies AI Coaching, Velocity-Based Training, Nutrition, Community, and Wearables — from golfer to weightlifter, without any hardware.
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-5 gap-4 sm:gap-6 max-w-4xl mx-auto">
            {[
              { value: products, suffix: '', label: 'Products' },
              { value: tam, prefix: '$', suffix: 'B+', label: 'TAM' },
              { value: sports, suffix: '+', label: 'Sports' },
              { value: exercises, suffix: '+', label: 'Exercises' },
              { value: '$0', label: 'Hardware', raw: true },
            ].map((m, i) => (
              <div key={i} className="text-center">
                <div className="text-3xl sm:text-4xl font-extrabold text-accent font-['Arimo']">
                  {m.raw ? m.value : `${m.prefix || ''}${m.value}${m.suffix}`}
                </div>
                <div className="text-[#999] text-sm mt-1">{m.label}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

// ─── 2. The Problem ─────────────────────────────────────────────────────────────

function ProblemSection() {
  const problems = [
    {
      icon: Smartphone,
      title: 'Tracking Apps Don\'t Coach',
      desc: 'Strong, Hevy, and others let you log — but never tell you what to change. No periodization, no AI adaptation, no velocity data, no nutrition plans.',
      examples: 'Strong, Hevy',
    },
    {
      icon: Bot,
      title: 'Coaching Apps Don\'t Measure',
      desc: 'TrainHeroic provides programs but can\'t measure bar speed, form quality, or readiness. No community, no barcode nutrition, no wearable sync. Coaches fly blind.',
      examples: 'TrainHeroic',
    },
    {
      icon: Gauge,
      title: 'Measurement Needs Hardware',
      desc: 'GymAware costs $2,000+. RepCount $300+. Hardware creates friction, limits adoption, and kills scalability. Nobody solved this with pure software — until now.',
      examples: 'GymAware, RepCount',
    },
  ]

  return (
    <Section id="problem">
      <SectionHeader
        label="The Problem"
        title="A $6B Market."
        titleAccent="Still Fragmented."
      />

      <div className="grid md:grid-cols-3 gap-6">
        {problems.map((p, i) => (
          <div key={i} className="bg-white/[0.04] backdrop-blur-xl border border-white/[0.08] rounded-2xl p-6 sm:p-8 shadow-[0_8px_32px_rgba(0,0,0,0.2)] hover:bg-white/[0.06] hover:border-white/[0.12] transition-all duration-300">
            <div className="w-12 h-12 bg-red-500/10 backdrop-blur-sm rounded-xl flex items-center justify-center mb-5">
              <p.icon size={24} className="text-red-400" />
            </div>
            <h3 className="font-['Arimo'] text-lg font-bold uppercase mb-3">{p.title}</h3>
            <p className="text-[#999] text-sm leading-relaxed mb-4">{p.desc}</p>
            <span className="text-xs text-[#666] uppercase tracking-wider">{p.examples}</span>
          </div>
        ))}
      </div>

      <p className="text-center text-xl sm:text-2xl font-bold mt-12 font-['Arimo'] uppercase">
        No single platform connects all three. <span className="text-accent">Until now.</span>
      </p>
    </Section>
  )
}

// ─── 3. Solution — Ecosystem Overview ───────────────────────────────────────────

function EcosystemSection() {
  const products = [
    {
      icon: Smartphone,
      label: 'Athlete App',
      subtitle: 'AI Coaching & VBT on Mobile',
      desc: 'AI coaching, nutrition, VBT, community, wearables — everything an athlete needs in one app',
      mockup: 'phoneFan',
      screens: [
        '/images/screenshots/nutrition-framed.png',
        '/images/screenshots/coach-framed.png',
        '/images/screenshots/training-framed.png',
        '/images/screenshots/insights-framed.png',
        '/images/screenshots/community-feed-framed.png',
      ],
    },
    {
      icon: Monitor,
      label: 'Coach Software',
      subtitle: 'Professional Coaching Tools',
      desc: 'Professional tools to program, monitor, and analyze clients — free full-version mobile app for every coach included',
      mockup: 'laptopWithPhone',
      screenshot: '/images/screenshots/coach-dashboard.png',
      mobileScreenshot: '/images/screenshots/coach-mobile-framed.png',
    },
    {
      icon: Building2,
      label: 'Enterprise',
      subtitle: 'Studio & Clinic Management',
      desc: 'White-label studio & clinic management with full CRM, scheduling, and analytics',
      mockup: 'laptop',
      screenshot: '/images/screenshots/enterprise-dashboard.png',
    },
    {
      icon: Eye,
      label: 'VBT Engine',
      subtitle: '$0 Hardware, Science-Grade Accuracy',
      desc: 'Computer vision velocity tracking via phone camera — $0 hardware, science-grade accuracy',
      mockup: 'laptop',
      screenshot: '/images/screenshots/vbt-lab-dashboard.png',
    },
  ]

  return (
    <Section id="ecosystem" className="bg-white/[0.01]">
      <SectionHeader
        label="The Solution"
        title="One Ecosystem. Four Products."
        titleAccent="Total Integration."
      />

      {/* Athlete App — full-width fan card */}
      {(() => {
        const a = products[0]
        return (
          <div className="bg-white/[0.04] backdrop-blur-xl border border-white/[0.08] rounded-2xl overflow-hidden group hover:border-accent/25 transition-all duration-300 hover:shadow-[0_8px_40px_rgba(230,126,34,0.1)] shadow-[0_8px_32px_rgba(0,0,0,0.2)] mb-6">
            <div className="grid lg:grid-cols-[1fr_1.8fr] items-center">
              <div className="p-8 lg:p-10 order-2 lg:order-1">
                <div className="w-11 h-11 bg-accent/[0.08] backdrop-blur-sm border border-accent/20 rounded-xl flex items-center justify-center mb-4 shadow-[0_0_15px_rgba(230,126,34,0.08)]">
                  <a.icon size={20} className="text-accent" />
                </div>
                <h4 className="font-['Arimo'] font-bold text-xl uppercase mb-1">{a.label}</h4>
                <p className="text-accent text-sm font-medium mb-3">{a.subtitle}</p>
                <p className="text-[#999] text-sm leading-relaxed">{a.desc}</p>
              </div>
              <div className="relative flex justify-center items-center h-[340px] sm:h-[440px] overflow-hidden order-1 lg:order-2">
                {a.screens.map((src, si) => {
                  const mid = Math.floor(a.screens.length / 2)
                  const offset = si - mid
                  const rotate = offset * 7
                  const translateX = offset * 62
                  const translateY = Math.abs(offset) * 18
                  const z = a.screens.length - Math.abs(offset)
                  return (
                    <img
                      key={si}
                      src={src}
                      alt={`Screen ${si + 1}`}
                      className="absolute h-72 sm:h-[360px] w-auto rounded-[24px] shadow-[0_16px_40px_rgba(0,0,0,0.5)]"
                      style={{
                        transform: `translateX(${translateX}px) translateY(${translateY}px) rotate(${rotate}deg)`,
                        zIndex: z,
                      }}
                    />
                  )
                })}
              </div>
            </div>
          </div>
        )
      })()}

      {/* Remaining product cards — 3 columns */}
      <div className="grid sm:grid-cols-3 gap-6 mb-10">
        {products.slice(1).map((p, i) => (
          <div
            key={i}
            className="bg-white/[0.04] backdrop-blur-xl border border-white/[0.08] rounded-2xl overflow-hidden group hover:border-accent/25 transition-all duration-300 hover:shadow-[0_8px_40px_rgba(230,126,34,0.1)] shadow-[0_8px_32px_rgba(0,0,0,0.2)]"
          >
            <div className="relative bg-gradient-to-b from-white/[0.03] to-transparent overflow-hidden">
              <div className={`p-5 pt-6 ${p.mockup === 'laptopWithPhone' ? 'pb-2' : ''}`}>
                <div className="relative">
                  <div className="bg-white/[0.03] border border-white/[0.08] rounded-xl overflow-hidden shadow-[0_12px_40px_rgba(0,0,0,0.4)] group-hover:shadow-[0_16px_50px_rgba(0,0,0,0.5)] transition-shadow duration-500">
                    <div className="flex items-center gap-1.5 px-3 py-2 bg-white/[0.03] border-b border-white/[0.06]">
                      <div className="w-2 h-2 rounded-full bg-red-500/50" />
                      <div className="w-2 h-2 rounded-full bg-yellow-500/50" />
                      <div className="w-2 h-2 rounded-full bg-green-500/50" />
                      <div className="flex-1 mx-6">
                        <div className="h-4 bg-dark rounded-md" />
                      </div>
                    </div>
                    <img
                      src={p.screenshot}
                      alt={p.label}
                      className="w-full h-auto group-hover:scale-[1.01] transition-transform duration-500 origin-top"
                    />
                  </div>
                  {p.mockup === 'laptopWithPhone' && (
                    <img
                      src={p.mobileScreenshot}
                      alt={`${p.label} Mobile`}
                      className="absolute -bottom-4 -right-2 h-[65%] w-auto rounded-[16px] shadow-[0_12px_40px_rgba(0,0,0,0.6)] border-2 border-white/[0.08]"
                    />
                  )}
                </div>
              </div>
            </div>

            {/* Product info */}
            <div className="p-6 flex items-start gap-4">
              <div className="w-11 h-11 bg-accent/[0.08] backdrop-blur-sm border border-accent/20 rounded-xl flex items-center justify-center shrink-0 shadow-[0_0_15px_rgba(230,126,34,0.08)]">
                <p.icon size={20} className="text-accent" />
              </div>
              <div>
                <h4 className="font-['Arimo'] font-bold text-base uppercase mb-0.5">{p.label}</h4>
                <p className="text-accent text-xs font-medium mb-2">{p.subtitle}</p>
                <p className="text-[#999] text-xs leading-relaxed">{p.desc}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <p className="text-center text-[#999] text-sm">
        All four products share <span className="text-white font-medium">one unified data layer</span> — every rep, every meal, every velocity reading flows across the ecosystem in real time.
      </p>
    </Section>
  )
}

// ─── 4. Product Deep Dive ───────────────────────────────────────────────────────

const productTabs = [
  {
    id: 'athlete',
    label: 'Athlete App',
    icon: Smartphone,
    title: 'Prometheus Athlete App',
    description: 'The most complete training companion ever built. AI coaching creates individual workout plans for any sport — from golf to weightlifting. Nutrition planning with shopping lists. VBT tracking. Community challenges. Wearable sync. All in one app.',
    metrics: ['135+ Sports', '800+ Exercises', '4.5M+ Food DB', 'Wearables Integrated'],
    features: [
      { icon: Bot, text: 'AI Coach creates individual workout plans for any sport — from golfer to weightlifter — with periodization and progressive overload' },
      { icon: Utensils, text: 'AI-generated nutrition plans with shopping lists, macro tracking, and meal planning' },
      { icon: ScanBarcode, text: 'Barcode scanner, food label scanner, and community-powered custom food database with all major restaurant chains for quick adds' },
      { icon: Eye, text: 'Real-time VBT via phone camera — no hardware needed' },
      { icon: Trophy, text: 'Community challenges, badge & achievement system, social feed, and athlete profiles' },
      { icon: Watch, text: 'Wearable integration already live — sleep, heart rate, and recovery data synced in real time' },
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
    description: 'Professional-grade tools for coaches to program, monitor, and analyze their athletes. Every Coach Software subscriber gets a free full-version Prometheus mobile app — not a stripped-down lite version, the real deal.',
    metrics: ['$29–229/month', 'Free Mobile App Included', 'AI-Assisted Programming'],
    features: [
      { icon: Gift, text: 'Free full-version Prometheus Athlete App for every subscribing coach — complete access, no limits' },
      { icon: Users, text: 'Unlimited client management & program design' },
      { icon: BarChart3, text: 'Progress analytics, VBT reporting, and readiness monitoring' },
      { icon: Bot, text: 'AI-assisted programming suggestions tailored to each athlete' },
    ],
    mockup: 'laptop',
    screenshot: '/images/screenshots/coach-dashboard.png',
  },
  {
    id: 'enterprise',
    label: 'Enterprise',
    icon: Building2,
    title: 'Prometheus Enterprise',
    description: 'End-to-end studio and clinic management. White-label ready with full CRM, member management, scheduling, and AI-powered insights for gyms, physio clinics, and rehab centers.',
    metrics: ['$149–599/month', 'White-Label Ready', 'Full CRM'],
    features: [
      { icon: LayoutDashboard, text: 'Managed coaching software & member CRM' },
      { icon: Smartphone, text: 'Studio entry management via phone' },
      { icon: CalendarDays, text: 'Group course scheduling & organization' },
      { icon: Bot, text: 'Full CRM with analytics and AI assistants' },
    ],
    mockup: 'laptop',
    screenshot: '/images/screenshots/enterprise-dashboard.png',
  },
  {
    id: 'vbt',
    label: 'VBT Engine',
    icon: Eye,
    title: 'Prometheus VBT Engine',
    description: 'Science-grade velocity tracking powered by computer vision. No sensors, no linear encoders, no Bluetooth devices — just a phone camera. The world\'s first pure-software VBT solution.',
    metrics: ['0.99 Confidence', '7 FPS on Mobile', '$0 Hardware'],
    features: [
      { icon: ScanLine, text: 'Real-time computer vision barbell tracking' },
      { icon: Cpu, text: 'YOLO object detection + MediaPipe integration' },
      { icon: Gauge, text: '0.99 confidence rating, 7 FPS on mobile CPU-only' },
      { icon: Wifi, text: 'No external hardware needed — replaces $2,000+ devices' },
    ],
    mockup: 'laptop',
    screenshot: '/images/screenshots/vbt-lab-dashboard.png',
  },
]

function ProductDeepDive() {
  const [activeTab, setActiveTab] = useState('athlete')
  const active = productTabs.find((t) => t.id === activeTab)

  return (
    <Section id="products">
      <SectionHeader
        label="Products"
        title="Deep Dive:"
        titleAccent="The Product Suite"
      />

      {/* Tabs */}
      <div className="flex flex-wrap justify-center gap-2 mb-12">
        {productTabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`flex items-center gap-1.5 sm:gap-2 px-3 sm:px-5 py-2.5 sm:py-3 rounded-lg text-xs sm:text-sm font-medium transition-all duration-200 ${
              activeTab === tab.id
                ? 'bg-accent text-white shadow-[0px_2px_18px_0px_#E67E22]'
                : 'bg-white/[0.04] backdrop-blur-lg text-[#999] hover:text-white border border-white/[0.08] hover:border-accent/30 hover:bg-white/[0.06]'
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
            <p className="text-[#999] mb-6">{active.description}</p>

            {/* Key Metrics */}
            <div className="flex flex-wrap gap-3 mb-8">
              {active.metrics.map((m, i) => (
                <span key={i} className="px-3 py-1.5 bg-accent/[0.08] backdrop-blur-sm border border-accent/20 rounded-full text-xs font-semibold text-accent shadow-[0_0_12px_rgba(230,126,34,0.06)]">
                  {m}
                </span>
              ))}
            </div>

            <div className="space-y-4">
              {active.features.map((f, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div className="w-9 h-9 bg-accent/[0.08] backdrop-blur-sm border border-accent/15 rounded-lg flex items-center justify-center shrink-0 mt-0.5">
                    <f.icon size={18} className="text-accent" />
                  </div>
                  <span className="text-gray-300 text-sm leading-relaxed pt-1.5">{f.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Mockup */}
          <div className="flex justify-center">
            {active.mockup === 'phone' && <PhoneMockup screens={active.screens} />}
            {active.mockup === 'laptop' && <LaptopMockup title={active.title} screenshot={active.screenshot} />}
          </div>
        </motion.div>
      </AnimatePresence>
    </Section>
  )
}

// ─── 5. Community & Gamification ────────────────────────────────────────────────

function CommunitySection() {
  return (
    <Section id="community" className="bg-white/[0.01]">
      <SectionHeader
        label="Community & Gamification"
        title="Not Just an App."
        titleAccent="A Movement."
        subtitle="Built-in social features that drive engagement, retention, and organic growth — no external platforms needed."
      />

      <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
        {/* Left — Features */}
        <div>
          <div className="space-y-6">
            {[
              {
                icon: Trophy,
                title: 'Community Challenges',
                desc: 'Coaches and athletes create challenges — weekly volume targets, streak competitions, sport-specific leaderboards. Drives daily engagement and cross-user interaction.',
              },
              {
                icon: Award,
                title: 'Badge & Achievement System',
                desc: 'Earn badges for milestones: first VBT session, 30-day streak, PR lifts, nutrition consistency, community contributions. Gamification that keeps athletes coming back.',
              },
              {
                icon: MessageSquare,
                title: 'Social Feed & Profiles',
                desc: 'Athletes share workouts, PRs, and progress photos. Follow friends, comment, and compete. Every user becomes a content creator — organic virality built into the product.',
              },
              {
                icon: Database,
                title: 'Community Food Database',
                desc: 'Users contribute custom foods, barcodes, and restaurant meals. The database grows with every user — a self-reinforcing data moat that competitors can\'t replicate.',
              },
            ].map((f, i) => (
              <div key={i} className="flex items-start gap-4">
                <div className="w-11 h-11 bg-accent/[0.08] backdrop-blur-sm border border-accent/20 rounded-xl flex items-center justify-center shrink-0 shadow-[0_0_15px_rgba(230,126,34,0.06)]">
                  <f.icon size={20} className="text-accent" />
                </div>
                <div>
                  <h4 className="font-bold text-sm mb-1">{f.title}</h4>
                  <p className="text-[#999] text-xs leading-relaxed">{f.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right — Community Screenshots */}
        <div className="flex justify-center items-end">
          <div className="w-36 opacity-70 hidden sm:block -mr-2">
            <img
              src="/images/screenshots/community-profile-framed.png"
              alt="Community Profile"
              className="w-full h-auto rounded-[30px] shadow-[0_20px_50px_rgba(0,0,0,0.4)]"
            />
          </div>
          <div className="w-48 z-10">
            <img
              src="/images/screenshots/community-feed-framed.png"
              alt="Community Feed"
              className="w-full h-auto rounded-[30px] shadow-[0_20px_50px_rgba(0,0,0,0.4)]"
            />
          </div>
          <div className="w-36 opacity-70 hidden sm:block -ml-2">
            <img
              src="/images/screenshots/community-post-framed.png"
              alt="Community Post"
              className="w-full h-auto rounded-[30px] shadow-[0_20px_50px_rgba(0,0,0,0.4)]"
            />
          </div>
        </div>
      </div>

      {/* Retention Metrics */}
      <div className="grid sm:grid-cols-3 gap-6">
        {[
          { label: 'Engagement Driver', value: 'Challenges', desc: 'Weekly & monthly community challenges drive daily opens' },
          { label: 'Virality Engine', value: 'Social Feed', desc: 'Every PR shared becomes a free acquisition channel' },
          { label: 'Data Moat', value: 'Community DB', desc: 'User-contributed food data grows the platform for everyone' },
        ].map((m, i) => (
          <div key={i} className="bg-white/[0.04] backdrop-blur-xl border border-white/[0.08] rounded-2xl p-6 text-center shadow-[0_8px_32px_rgba(0,0,0,0.2)]">
            <div className="text-2xl font-extrabold text-accent font-['Arimo'] mb-1">{m.value}</div>
            <div className="text-white text-xs font-semibold uppercase tracking-wider mb-2">{m.label}</div>
            <div className="text-[#999] text-xs">{m.desc}</div>
          </div>
        ))}
      </div>
    </Section>
  )
}

// ─── 6. Nutrition Deep Dive ─────────────────────────────────────────────────────

function NutritionSection() {
  return (
    <Section id="nutrition">
      <SectionHeader
        label="Nutrition Engine"
        title="The Most Complete"
        titleAccent="Nutrition Tracker. Period."
        subtitle="Not just calorie counting — an intelligent nutrition system that plans, tracks, and shops for you."
      />

      <div className="grid lg:grid-cols-2 gap-12 items-center">
        {/* Left — Screenshots */}
        <div className="flex justify-center items-end">
          <div className="w-36 opacity-70 hidden sm:block -mr-2">
            <img
              src="/images/screenshots/nutrition-framed.png"
              alt="Nutrition Tracking"
              className="w-full h-auto rounded-[30px] shadow-[0_20px_50px_rgba(0,0,0,0.4)]"
            />
          </div>
          <div className="w-48 z-10">
            <img
              src="/images/screenshots/meal-plans-framed.png"
              alt="Meal Plans"
              className="w-full h-auto rounded-[30px] shadow-[0_20px_50px_rgba(0,0,0,0.4)]"
            />
          </div>
          <div className="w-36 opacity-70 hidden sm:block -ml-2">
            <img
              src="/images/screenshots/insights-framed.png"
              alt="Nutrition Insights"
              className="w-full h-auto rounded-[30px] shadow-[0_20px_50px_rgba(0,0,0,0.4)]"
            />
          </div>
        </div>

        {/* Right — Features */}
        <div>
          <div className="space-y-5">
            {[
              { icon: ScanBarcode, title: 'Barcode & Label Scanner', desc: 'Scan any product barcode or nutrition label with your camera. Instant macro tracking — no manual entry needed.' },
              { icon: Database, title: '4.5M+ Food Database', desc: 'The largest integrated food database in any training app. All major restaurant chains pre-loaded for quick adds — McDonald\'s, Subway, Starbucks, and hundreds more.' },
              { icon: Users, title: 'Community Food Database', desc: 'Users contribute custom foods, local products, and restaurant meals. Every new entry makes the platform better for everyone — a self-growing data moat.' },
              { icon: Bot, title: 'AI Nutrition Plans', desc: 'The AI coach creates individualized nutrition plans based on training goals, body composition targets, and dietary preferences — with full macro breakdowns.' },
              { icon: ShoppingCart, title: 'AI Shopping Lists', desc: 'Auto-generated shopping lists based on your meal plan. One tap to see exactly what to buy for the week.' },
              { icon: Target, title: 'Goal-Adaptive Tracking', desc: 'Cut, bulk, maintain, or sport-specific fuel. The system adapts calorie and macro targets based on training load, VBT data, and recovery metrics.' },
            ].map((f, i) => (
              <div key={i} className="flex items-start gap-4">
                <div className="w-10 h-10 bg-accent/[0.08] backdrop-blur-sm border border-accent/20 rounded-xl flex items-center justify-center shrink-0 shadow-[0_0_15px_rgba(230,126,34,0.06)]">
                  <f.icon size={18} className="text-accent" />
                </div>
                <div>
                  <h4 className="font-bold text-sm mb-0.5">{f.title}</h4>
                  <p className="text-[#999] text-xs leading-relaxed">{f.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  )
}

// ─── 7. AI Coach Deep Dive ──────────────────────────────────────────────────────

function AICoachSection() {
  return (
    <Section id="ai-coach" className="bg-white/[0.01]">
      <SectionHeader
        label="AI Coaching Engine"
        title="Your Personal Coach."
        titleAccent="For Every Sport."
        subtitle="From golf swing optimization to powerlifting periodization — the AI coach builds individual plans for 135+ sports and reviews your progress every week."
      />

      {/* Weekly Review Highlight */}
      <div className="bg-white/[0.04] backdrop-blur-xl border border-accent/20 rounded-2xl p-6 sm:p-8 mb-12 max-w-4xl mx-auto shadow-[0_8px_40px_rgba(230,126,34,0.06)]">
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 bg-accent/[0.08] backdrop-blur-sm border border-accent/20 rounded-xl flex items-center justify-center shrink-0 shadow-[0_0_20px_rgba(230,126,34,0.1)]">
            <BarChart3 size={24} className="text-accent" />
          </div>
          <div>
            <h3 className="font-['Arimo'] font-bold uppercase text-lg mb-2">Weekly AI Performance Review</h3>
            <p className="text-[#999] text-sm leading-relaxed mb-4">
              Every week, the AI coach delivers a personalized summary of your achievements, progress trends, and areas for improvement. It analyzes your training volume, velocity trends, nutrition adherence, recovery patterns, and goal progress — then tells you exactly what to focus on next week. Like having a world-class coach review your training journal every Sunday.
            </p>
            <div className="flex flex-wrap gap-3">
              {['Achievements Summary', 'Improvement Areas', 'Next Week Focus', 'Trend Analysis', 'Goal Progress'].map((tag, i) => (
                <span key={i} className="px-3 py-1 bg-accent/[0.08] backdrop-blur-sm border border-accent/20 rounded-full text-[11px] font-semibold text-accent">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
        {[
          { icon: Dumbbell, title: 'Individual Workout Plans', desc: 'AI-generated programs tailored to sport, experience, goals, equipment, and schedule. Not templates — truly individual plans that evolve weekly.' },
          { icon: Utensils, title: 'Individual Nutrition Plans', desc: 'Meal plans matched to training phase, caloric needs, and dietary preferences. Vegetarian, keto, high-protein — the AI adapts to any diet.' },
          { icon: ShoppingCart, title: 'Shopping Lists', desc: 'Weekly shopping lists auto-generated from your meal plan. Organized by store section. Tap and shop.' },
          { icon: Sparkles, title: '135+ Sports', desc: 'Golf, weightlifting, CrossFit, swimming, martial arts, climbing, running, cycling, yoga — and more.' },
        ].map((f, i) => (
          <div key={i} className="bg-white/[0.04] backdrop-blur-xl border border-white/[0.08] rounded-2xl p-6 hover:border-accent/20 hover:bg-white/[0.06] transition-all duration-300 shadow-[0_8px_32px_rgba(0,0,0,0.2)]">
            <div className="w-11 h-11 bg-accent/[0.08] backdrop-blur-sm border border-accent/20 rounded-xl flex items-center justify-center mb-4 shadow-[0_0_15px_rgba(230,126,34,0.06)]">
              <f.icon size={20} className="text-accent" />
            </div>
            <h3 className="font-bold text-sm mb-2">{f.title}</h3>
            <p className="text-[#999] text-xs leading-relaxed">{f.desc}</p>
          </div>
        ))}
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        {[
          { icon: TrendingUp, title: 'Adaptive Periodization', desc: 'Adjusts volume, intensity, and exercises based on real-time VBT velocity trends, performance data, and recovery signals.' },
          { icon: Heart, title: 'Recovery-Aware', desc: 'Integrates sleep, HRV, and readiness scores from wearables. Knows when to push hard and when to pull back.' },
          { icon: MessageCircle, title: 'Real-Time Streaming', desc: 'Chat with your AI coach anytime. Contextual advice streams live from 5 simultaneous data sources. Ask anything about your training.' },
          { icon: Target, title: 'Goal Tracking', desc: 'Set strength, body composition, or sport-specific goals. The AI tracks progress and adjusts the plan to keep you on target.' },
        ].map((f, i) => (
          <div key={i} className="bg-white/[0.04] backdrop-blur-xl border border-white/[0.08] rounded-2xl p-6 hover:border-accent/20 hover:bg-white/[0.06] transition-all duration-300 shadow-[0_8px_32px_rgba(0,0,0,0.2)]">
            <div className="w-11 h-11 bg-accent/[0.08] backdrop-blur-sm border border-accent/20 rounded-xl flex items-center justify-center mb-4 shadow-[0_0_15px_rgba(230,126,34,0.06)]">
              <f.icon size={20} className="text-accent" />
            </div>
            <h3 className="font-bold text-sm mb-2">{f.title}</h3>
            <p className="text-[#999] text-xs leading-relaxed">{f.desc}</p>
          </div>
        ))}
      </div>

      {/* Screenshots */}
      <div className="flex justify-center items-end">
        <div className="w-36 opacity-70 hidden sm:block -mr-2">
          <img
            src="/images/screenshots/workout-session-framed.png"
            alt="Workout Session"
            className="w-full h-auto rounded-[30px] shadow-[0_20px_50px_rgba(0,0,0,0.4)]"
          />
        </div>
        <div className="w-48 z-10">
          <img
            src="/images/screenshots/coach-framed.png"
            alt="AI Coach"
            className="w-full h-auto rounded-[30px] shadow-[0_20px_50px_rgba(0,0,0,0.4)]"
          />
        </div>
        <div className="w-36 opacity-70 hidden sm:block -ml-2">
          <img
            src="/images/screenshots/insights-framed.png"
            alt="Weekly Insights"
            className="w-full h-auto rounded-[30px] shadow-[0_20px_50px_rgba(0,0,0,0.4)]"
          />
        </div>
      </div>
    </Section>
  )
}

// ─── 8. Command Center ──────────────────────────────────────────────────────────

function CommandCenterSection() {
  const modules = [
    { icon: LayoutDashboard, title: 'Real-Time Dashboard', desc: 'Revenue MTD, MRR, active users, break-even progress, cost breakdown — all live. Auto-generated alerts for churn risk, payment anomalies, and growth milestones.' },
    { icon: BarChart3, title: 'Cost & Revenue Analytics', desc: 'Per-service cost tracking: AI Coach, Photo Analysis, VBT, Storage. Revenue sharing, Stripe integration, and break-even modeling with scenario planning.' },
    { icon: TrendingUp, title: 'Performance & Trends', desc: 'Retention curves, acquisition channels, churn risk scoring, creator performance rankings, and month-over-month growth charts.' },
    { icon: Target, title: 'Project & Goal Management', desc: 'Kanban-style project boards with task tracking, timelines, and goal progress. "Road to 50K" milestones across Coach, Enterprise, and Marketing workstreams.' },
    { icon: Gauge, title: 'Play Console & Reviews', desc: 'Google Play ratings, review management, and user sentiment tracking — all inside the admin tool. Respond to reviews without leaving the dashboard.' },
    { icon: Users, title: 'Creator & Collaborator CRM', desc: 'Employee management, revenue sharing models, collaborator onboarding, and creator performance tracking with referral attribution.' },
  ]

  return (
    <Section id="command-center">
      <SectionHeader
        label="Operational Control"
        title="The Prometheus"
        titleAccent="Command Center."
        subtitle="Our proprietary admin platform at admin.prometheus.coach — full real-time visibility into every metric that matters. Built on Supabase with live data streaming."
      />

      {/* Hero Statement */}
      <div className="bg-white/[0.04] backdrop-blur-xl border border-accent/20 rounded-2xl p-6 sm:p-8 mb-12 text-center max-w-3xl mx-auto shadow-[0_8px_40px_rgba(230,126,34,0.06)]">
        <div className="w-14 h-14 bg-accent/[0.08] backdrop-blur-sm border border-accent/20 rounded-xl flex items-center justify-center mx-auto mb-4 shadow-[0_0_20px_rgba(230,126,34,0.1)]">
          <LayoutDashboard size={28} className="text-accent" />
        </div>
        <h3 className="font-['Arimo'] font-bold uppercase text-xl mb-3">Full Visibility. Zero Guesswork.</h3>
        <p className="text-[#999] text-sm leading-relaxed">
          Revenue, costs, churn risk, creator performance, Play Store reviews, project milestones, and break-even progress — all in one dashboard, updating in real time. This isn't a mockup. It's live at <span className="text-white font-medium">admin.prometheus.coach</span> right now.
        </p>
      </div>

      {/* Unit Economics Highlight */}
      <div className="grid sm:grid-cols-4 gap-4 mb-12">
        {[
          { value: '$0.002', label: 'Per AI Message', desc: '68 messages = $0.13' },
          { value: '$0.004', label: 'Per Photo Scan', desc: '114 scans = $0.42' },
          { value: '$0.00', label: 'Per VBT Session', desc: 'On-device, zero cloud cost' },
          { value: '~$0.01', label: 'Variable Cost / User / Day', desc: 'Near-zero marginal cost' },
        ].map((m, i) => (
          <div key={i} className="bg-white/[0.04] backdrop-blur-xl border border-accent/20 rounded-2xl p-5 text-center shadow-[0_8px_32px_rgba(0,0,0,0.2)]">
            <div className="text-2xl font-extrabold text-accent font-['Arimo'] mb-1">{m.value}</div>
            <div className="text-white text-xs font-semibold uppercase tracking-wider mb-1">{m.label}</div>
            <div className="text-[#999] text-[11px]">{m.desc}</div>
          </div>
        ))}
      </div>

      {/* Module Grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
        {modules.map((m, i) => (
          <div key={i} className="bg-white/[0.04] backdrop-blur-xl border border-white/[0.08] rounded-2xl p-6 hover:border-accent/20 hover:bg-white/[0.06] transition-all duration-300 shadow-[0_8px_32px_rgba(0,0,0,0.2)]">
            <div className="w-11 h-11 bg-accent/[0.08] backdrop-blur-sm border border-accent/20 rounded-xl flex items-center justify-center mb-4 shadow-[0_0_15px_rgba(230,126,34,0.06)]">
              <m.icon size={20} className="text-accent" />
            </div>
            <h3 className="font-bold text-sm mb-2">{m.title}</h3>
            <p className="text-[#999] text-xs leading-relaxed">{m.desc}</p>
          </div>
        ))}
      </div>

      {/* Prometheus Lab */}
      <div className="bg-white/[0.04] backdrop-blur-xl border border-white/[0.08] rounded-2xl overflow-hidden mb-12 shadow-[0_8px_32px_rgba(0,0,0,0.2)]">
        <div className="h-1 bg-gradient-to-r from-green-400 to-emerald-500" />
        <div className="p-6 sm:p-8">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-11 h-11 bg-green-400/10 border border-green-400/20 rounded-xl flex items-center justify-center">
                  <Database size={20} className="text-green-400" />
                </div>
                <div>
                  <h3 className="font-['Arimo'] font-bold uppercase text-lg">Prometheus Lab</h3>
                  <p className="text-[#999] text-xs">Integrated into the Admin Tool</p>
                </div>
              </div>
              <p className="text-[#999] text-sm leading-relaxed mb-5">
                Every VBT data point collected across the platform feeds into our research lab. Load-Velocity Profiles, velocity trends over time, exercise-specific R² regression analysis, and session tracking — all filterable by athlete, exercise, and time period.
              </p>
              <div className="space-y-2">
                {[
                  'Load-Velocity Profile scatter plots per exercise',
                  'Velocity trend analysis across sessions',
                  'R² correlation values for scientific validation',
                  'Per-athlete e1RM estimation and MVT tracking',
                  'CSV export for external research collaboration',
                  'Tracking error monitoring for continuous improvement',
                ].map((p, j) => (
                  <div key={j} className="flex items-center gap-2 text-sm">
                    <Check size={14} className="text-green-400 shrink-0" />
                    <span className="text-gray-300">{p}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <LaptopMockup title="Prometheus Lab" screenshot="/images/screenshots/vbt-lab-dashboard.png" />
            </div>
          </div>
          <p className="text-center text-[#999] text-sm mt-8">
            This data doesn't just improve our product — it's a <span className="text-white font-medium">proprietary research dataset</span> that grows with every user. A moat no competitor can buy.
          </p>
        </div>
      </div>

      <p className="text-center text-[#999] text-sm">
        Built with <span className="text-white font-medium">Supabase</span> real-time subscriptions, <span className="text-white font-medium">Stripe</span> payment integration, and <span className="text-white font-medium">Recharts</span> analytics. Live at admin.prometheus.coach.
      </p>
    </Section>
  )
}

// ─── 9. Technology Moat ─────────────────────────────────────────────────────────

function MoatSection() {
  const moats = [
    {
      icon: Eye,
      gradient: 'from-accent to-orange-400',
      title: 'Phone Camera VBT',
      desc: 'YOLO-based object detection + OpenCV tracking runs entirely on-device. No linear encoders, no sensors, no Bluetooth. Just a phone camera delivering science-grade velocity data at 7 FPS with 0.99 confidence.',
      points: ['On-Device ML', 'YOLO + OpenCV', '$0 Hardware Cost'],
    },
    {
      icon: Brain,
      gradient: 'from-[#F39C12] to-[#E67E22]',
      title: 'AI Coaching Engine',
      desc: 'Claude-powered coaching that creates individual workout plans, nutrition plans, and shopping lists from 5 simultaneous data sources: training history, velocity trends, nutrition logs, sleep/recovery, and periodization phase.',
      points: ['Individual Plans for 135+ Sports', '5 Data Sources', 'Nutrition + Shopping Lists'],
    },
    {
      icon: Database,
      gradient: 'from-cyan-400 to-teal-500',
      title: 'Community Data Moat',
      desc: 'Community-powered food database with barcode scans, restaurant chains, and custom entries. Every new user makes the data better. Sleep, HR, velocity, nutrition, and RPE converge into a single Readiness Score.',
      points: ['Self-Growing Food DB', 'Unified Readiness Score', 'Network Effects on Data'],
    },
    {
      icon: Trophy,
      gradient: 'from-yellow-400 to-amber-500',
      title: 'Engagement & Retention',
      desc: 'Community challenges, badge system, social feed, and gamification create daily engagement loops. Athletes don\'t just track — they compete, share, and belong. Switching costs compound with every badge earned.',
      points: ['Challenges & Leaderboards', 'Badge & Achievement System', 'Social Feed & Profiles'],
    },
  ]

  return (
    <Section id="moat" className="bg-white/[0.01]">
      <SectionHeader
        label="The Moat"
        title="Technology That Can't Be"
        titleAccent="Copied Overnight."
      />

      <div className="grid sm:grid-cols-2 gap-6">
        {moats.map((m, i) => (
          <div key={i} className="bg-white/[0.04] backdrop-blur-xl border border-white/[0.08] rounded-2xl overflow-hidden shadow-[0_8px_32px_rgba(0,0,0,0.2)] hover:bg-white/[0.06] hover:border-white/[0.12] transition-all duration-300">
            {/* Gradient top accent */}
            <div className={`h-1 bg-gradient-to-r ${m.gradient}`} />
            <div className="p-6 sm:p-8">
              <div className={`w-12 h-12 bg-gradient-to-br ${m.gradient} rounded-xl flex items-center justify-center mb-5 shadow-[0_0_20px_rgba(230,126,34,0.12)]`}>
                <m.icon size={24} className="text-dark" />
              </div>
              <h3 className="font-['Arimo'] text-lg font-bold uppercase mb-3">{m.title}</h3>
              <p className="text-[#999] text-sm leading-relaxed mb-5">{m.desc}</p>
              <div className="space-y-2">
                {m.points.map((p, j) => (
                  <div key={j} className="flex items-center gap-2 text-sm">
                    <Check size={14} className="text-accent shrink-0" />
                    <span className="text-gray-300">{p}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </Section>
  )
}

// ─── 9. Market Opportunity ──────────────────────────────────────────────────────

function MarketSection() {
  const [ref, isVisible] = useScrollAnimation(0.1)

  const bars = [
    { label: 'TAM', value: '$6.3B+', desc: 'Fitness Apps + Coaching Software', width: '100%' },
    { label: 'SAM', value: '$1.8B', desc: 'EU + English-Speaking Markets', width: '29%' },
    { label: 'SOM', value: '$45M', desc: '3-Year Target', width: '7%' },
  ]

  const metrics = [
    { value: '40%+', label: 'VBT CAGR' },
    { value: '300K+', label: 'Sports Clubs in EU' },
    { value: '135', label: 'GTM Channels (Sports)' },
  ]

  return (
    <section id="market" ref={ref} className="py-24 lg:py-32 relative z-10">
      <div
        className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 transition-all duration-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        <SectionHeader
          label="Market"
          title="A Massive,"
          titleAccent="Growing Market."
        />

        {/* TAM/SAM/SOM bars */}
        <div className="max-w-4xl mx-auto mb-16 space-y-4">
          {bars.map((b, i) => (
            <div key={i}>
              <div className="flex items-baseline justify-between mb-2">
                <div className="flex items-baseline gap-3">
                  <span className="text-accent font-bold text-sm uppercase">{b.label}</span>
                  <span className="text-white font-extrabold text-xl font-['Arimo']">{b.value}</span>
                </div>
                <span className="text-[#999] text-xs hidden sm:block">{b.desc}</span>
              </div>
              <div className="w-full bg-white/[0.04] backdrop-blur-lg border border-white/[0.08] rounded-lg h-10 overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={isVisible ? { width: b.width } : {}}
                  transition={{ duration: 1.2, delay: i * 0.2, ease: 'easeOut' }}
                  className="h-full bg-gradient-to-r from-accent/60 to-accent rounded-lg"
                />
              </div>
            </div>
          ))}
        </div>

        {/* Metric Cards */}
        <div className="grid sm:grid-cols-3 gap-6">
          {metrics.map((m, i) => (
            <div key={i} className="bg-white/[0.04] backdrop-blur-xl border border-white/[0.08] rounded-2xl p-6 text-center shadow-[0_8px_32px_rgba(0,0,0,0.2)]">
              <div className="text-3xl font-extrabold text-accent font-['Arimo'] mb-2">{m.value}</div>
              <div className="text-[#999] text-sm">{m.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ─── 10. Competitive Landscape ──────────────────────────────────────────────────

function CompetitionSection() {
  const features = ['AI Coach', 'Individual Plans', 'VBT', 'No Hardware', 'Nutrition + Scanner', 'Shopping Lists', 'Community', 'Wearables', 'Coach Tools', 'Enterprise']
  const competitors = [
    { name: 'Prometheus', checks: [true, true, true, true, true, true, true, true, true, true], highlight: true },
    { name: 'Strong', checks: [false, false, false, true, false, false, false, false, false, false] },
    { name: 'Hevy', checks: [false, false, false, true, false, false, true, false, false, false] },
    { name: 'Fitbod', checks: [true, true, false, true, false, false, false, true, false, false] },
    { name: 'TrainHeroic', checks: [false, false, false, true, false, false, false, false, true, false] },
    { name: 'RepCount', checks: [false, false, true, false, false, false, false, false, false, false] },
    { name: 'MyFitnessPal', checks: [false, false, false, true, true, false, true, false, false, false] },
  ]

  return (
    <Section id="competition" className="bg-white/[0.01]">
      <SectionHeader
        label="Competition"
        title="The Only"
        titleAccent="Complete Platform."
        subtitle="No competitor covers even half of what Prometheus delivers. We don't compete in a single category — we own all of them."
      />

      <div className="overflow-x-auto -mx-4 sm:mx-0 bg-white/[0.03] backdrop-blur-xl rounded-2xl border border-white/[0.06] shadow-[0_8px_32px_rgba(0,0,0,0.2)]">
        <table className="w-full min-w-[800px] text-sm">
          <thead>
            <tr className="border-b border-white/[0.08]">
              <th className="text-left py-4 px-4 text-[#999] font-medium">Feature</th>
              {competitors.map((c, i) => (
                <th
                  key={i}
                  className={`py-4 px-3 text-center font-bold ${
                    c.highlight ? 'text-accent' : 'text-[#999] font-medium'
                  }`}
                >
                  {c.name}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {features.map((f, fi) => (
              <tr key={fi} className="border-b border-white/[0.05]">
                <td className="py-3.5 px-4 text-gray-300">{f}</td>
                {competitors.map((c, ci) => (
                  <td key={ci} className="py-3.5 px-3 text-center">
                    {c.checks[fi] ? (
                      <Check size={18} className={`mx-auto ${c.highlight ? 'text-accent' : 'text-green-400'}`} />
                    ) : (
                      <X size={18} className="mx-auto text-[#444]" />
                    )}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Punchline */}
      <p className="text-center text-lg sm:text-xl font-bold mt-10 font-['Arimo'] uppercase">
        10 out of 10 features. <span className="text-accent">Nobody else comes close.</span>
      </p>
    </Section>
  )
}

// ─── 11. Business Model ─────────────────────────────────────────────────────────

function BusinessModelSection() {
  const streams = [
    {
      icon: Smartphone,
      title: 'B2C — Athlete App',
      tiers: [
        { name: 'Free', price: '$0' },
        { name: 'Premium', price: '$59/yr' },
        { name: 'Elite', price: '$99/yr' },
        { name: 'Titan', price: '$199 lifetime' },
      ],
    },
    {
      icon: Monitor,
      title: 'B2B — Coach Software',
      note: 'Free full-version mobile app for every coach',
      tiers: [
        { name: 'Starter', price: '$29/mo' },
        { name: 'Pro', price: '$99/mo' },
        { name: 'Team', price: '$229/mo' },
      ],
    },
    {
      icon: Building2,
      title: 'B2B — Enterprise / Gym',
      tiers: [
        { name: 'Studio', price: '$149/mo' },
        { name: 'Club', price: '$349/mo' },
        { name: 'Enterprise', price: '$599/mo' },
      ],
    },
  ]

  return (
    <Section id="business-model">
      <SectionHeader
        label="Business Model"
        title="Multiple Revenue Streams."
        titleAccent="Clear Unit Economics."
      />

      <div className="grid md:grid-cols-3 gap-6 mb-12">
        {streams.map((s, i) => (
          <div key={i} className="bg-white/[0.04] backdrop-blur-xl border border-white/[0.08] rounded-2xl p-6 sm:p-8 shadow-[0_8px_32px_rgba(0,0,0,0.2)] hover:bg-white/[0.06] hover:border-white/[0.12] transition-all duration-300">
            <div className="w-10 h-10 bg-accent/[0.08] backdrop-blur-sm border border-accent/15 rounded-lg flex items-center justify-center mb-4">
              <s.icon size={20} className="text-accent" />
            </div>
            <h3 className="font-['Arimo'] text-lg font-bold uppercase mb-2">{s.title}</h3>
            {s.note && (
              <p className="text-accent text-xs font-semibold mb-4 flex items-center gap-1.5">
                <Gift size={12} />
                {s.note}
              </p>
            )}
            <div className="space-y-3">
              {s.tiers.map((t, j) => (
                <div key={j} className="flex justify-between items-center py-2 border-b border-white/[0.06] last:border-0">
                  <span className="text-[#999] text-sm">{t.name}</span>
                  <span className="text-white font-bold text-sm">{t.price}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Unit Economics */}
      <div className="grid sm:grid-cols-2 gap-6 max-w-2xl mx-auto">
        <div className="bg-white/[0.04] backdrop-blur-xl border border-accent/20 rounded-2xl p-6 text-center shadow-[0_8px_32px_rgba(0,0,0,0.2),0_0_20px_rgba(230,126,34,0.05)]">
          <div className="text-3xl font-extrabold text-accent font-['Arimo'] mb-2">&gt; 3:1</div>
          <div className="text-[#999] text-sm">LTV:CAC Ratio</div>
        </div>
        <div className="bg-white/[0.04] backdrop-blur-xl border border-accent/20 rounded-2xl p-6 text-center shadow-[0_8px_32px_rgba(0,0,0,0.2),0_0_20px_rgba(230,126,34,0.05)]">
          <div className="text-3xl font-extrabold text-accent font-['Arimo'] mb-2">&lt; 6 Mo</div>
          <div className="text-[#999] text-sm">CAC Payback Period</div>
        </div>
      </div>
    </Section>
  )
}

// ─── 12. Flywheel ───────────────────────────────────────────────────────────────

function FlywheelSection() {
  return (
    <Section id="flywheel" className="bg-white/[0.01]">
      <SectionHeader
        label="Network Effects"
        title="The Flywheel That"
        titleAccent="Compounds."
      />

      <div className="max-w-3xl mx-auto">
        {/* Outer loop */}
        <div className="mb-12">
          <h4 className="text-center text-sm font-semibold uppercase tracking-wider text-[#999] mb-6">Growth Loop</h4>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {[
              { icon: Users, label: 'Athletes Join' },
              { icon: Monitor, label: 'Coaches Adopt' },
              { icon: Building2, label: 'Gyms Integrate' },
              { icon: TrendingUp, label: 'More Athletes' },
            ].map((n, i) => (
              <div key={i} className="text-center">
                <div className="w-16 h-16 bg-white/[0.04] backdrop-blur-xl border border-white/[0.08] rounded-2xl flex items-center justify-center mx-auto mb-3 shadow-[0_4px_16px_rgba(0,0,0,0.15)]">
                  <n.icon size={24} className="text-accent" />
                </div>
                <span className="text-xs text-gray-300">{n.label}</span>
                {i < 3 && (
                  <ChevronRight size={16} className="text-accent/40 mx-auto mt-2 hidden sm:block" />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Inner loop */}
        <div className="mb-12">
          <h4 className="text-center text-sm font-semibold uppercase tracking-wider text-[#999] mb-6">Data Loop</h4>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {[
              { icon: Database, label: 'More Data' },
              { icon: Brain, label: 'Better AI' },
              { icon: Bot, label: 'Better Coaching' },
              { icon: TrendingUp, label: 'More Retention' },
            ].map((n, i) => (
              <div key={i} className="text-center">
                <div className="w-16 h-16 bg-white/[0.04] backdrop-blur-xl border border-accent/10 rounded-2xl flex items-center justify-center mx-auto mb-3 shadow-[0_4px_16px_rgba(0,0,0,0.15)]">
                  <n.icon size={24} className="text-accent" />
                </div>
                <span className="text-xs text-gray-300">{n.label}</span>
                {i < 3 && (
                  <ChevronRight size={16} className="text-accent/40 mx-auto mt-2 hidden sm:block" />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Community loop */}
        <div>
          <h4 className="text-center text-sm font-semibold uppercase tracking-wider text-[#999] mb-6">Community Loop</h4>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {[
              { icon: Trophy, label: 'Challenges' },
              { icon: Award, label: 'Badges Earned' },
              { icon: MessageSquare, label: 'Content Shared' },
              { icon: Users, label: 'Organic Growth' },
            ].map((n, i) => (
              <div key={i} className="text-center">
                <div className="w-16 h-16 bg-white/[0.04] backdrop-blur-xl border border-accent/10 rounded-2xl flex items-center justify-center mx-auto mb-3 shadow-[0_4px_16px_rgba(0,0,0,0.15)]">
                  <n.icon size={24} className="text-accent" />
                </div>
                <span className="text-xs text-gray-300">{n.label}</span>
                {i < 3 && (
                  <ChevronRight size={16} className="text-accent/40 mx-auto mt-2 hidden sm:block" />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  )
}

// ─── 13. Team ───────────────────────────────────────────────────────────────────

function TeamSection() {
  const team = [
    { initials: 'DP', name: 'Daniele Pauli', title: 'CEO & Founder', bio: 'IPF World Champion, 20+ years coaching, 14,000+ sessions. Co-developed a fitness CRM in 2010 and a VBT prototype in 2017 — the experience that led to Prometheus.', gradient: 'from-accent to-orange-400' },
    { initials: 'BA', name: 'Dr. Basil Achermann', title: 'Chief Science Officer', bio: 'Sport Science, University of Zurich. IT apprenticeship + deep research. Leads Prometheus Lab & R&D pipeline.', gradient: 'from-green-400 to-emerald-500' },
    { initials: 'SJ', name: 'Sjoerd Joosten', title: 'Chief Operating Officer', bio: 'Sport psychologist, hybrid athlete. B2B specialist driving gym & enterprise expansion across Europe.', gradient: 'from-accent to-orange-400' },
  ]

  const advisors = [
    { initials: 'ST', name: 'Sascha Tarone', title: 'Advisor & Early Investor', bio: '20 years in financial analytics. Strategic consultant shaping business model to exit.', gradient: 'from-cyan-400 to-teal-500' },
    { initials: 'KU', name: 'Dr. Kevin Uram', title: 'Early Investor & Technical Advisor', bio: 'Physical Chemistry (Univ. Pittsburgh), ex-IBM Sr. Staff, MD at Lumileds. Multiple US patents.', gradient: 'from-rose-400 to-pink-500' },
  ]

  return (
    <Section id="team">
      <SectionHeader
        label="Team"
        title="Built by Scientists."
        titleAccent="Driven by Athletes."
      />

      {/* Swiss Precision Banner */}
      <div className="bg-white/[0.04] backdrop-blur-xl border border-accent/20 rounded-2xl p-6 mb-10 text-center shadow-[0_8px_32px_rgba(0,0,0,0.2)]">
        <div className="flex items-center justify-center gap-3 mb-3">
          <span className="text-2xl">&#127464;&#127469;</span>
          <h3 className="font-['Arimo'] font-bold uppercase text-lg">Swiss Precision. Estonian Efficiency.</h3>
          <span className="text-2xl">&#127466;&#127466;</span>
        </div>
        <p className="text-[#999] text-sm max-w-2xl mx-auto leading-relaxed">
          Swiss-founded team with deep roots in engineering, sport science, and championship-level athletics.
          Headquartered in Estonia (EU) for its world-class digital infrastructure, transparent e-Residency program, and favorable corporate tax structure — profits are only taxed upon distribution. We think ahead.
        </p>
      </div>

      <div className="grid sm:grid-cols-3 gap-4 mb-4">
        {team.map((m, i) => (
          <div key={i} className="bg-white/[0.04] backdrop-blur-xl border border-white/[0.08] rounded-2xl p-6 relative group hover:border-accent/20 hover:bg-white/[0.06] transition-all duration-300 shadow-[0_8px_32px_rgba(0,0,0,0.2)]">
            <div className={`absolute top-0 left-6 right-6 h-0.5 bg-gradient-to-r ${m.gradient} rounded-b opacity-50 group-hover:opacity-100 transition-opacity`} />
            <div className={`w-14 h-14 bg-gradient-to-br ${m.gradient} rounded-full flex items-center justify-center mb-3 shadow-[0_0_20px_rgba(230,126,34,0.12)]`}>
              <span className="font-bold text-dark">{m.initials}</span>
            </div>
            <h4 className="font-bold">{m.name}</h4>
            <p className="text-accent text-xs font-medium mb-2">{m.title}</p>
            <p className="text-[#999] text-xs leading-relaxed">{m.bio}</p>
          </div>
        ))}
      </div>

      <div className="grid sm:grid-cols-2 gap-4 max-w-2xl mx-auto">
        {advisors.map((m, i) => (
          <div key={i} className="bg-white/[0.04] backdrop-blur-xl border border-white/[0.08] rounded-2xl p-6 relative group hover:border-accent/20 hover:bg-white/[0.06] transition-all duration-300 shadow-[0_8px_32px_rgba(0,0,0,0.2)]">
            <div className={`absolute top-0 left-6 right-6 h-0.5 bg-gradient-to-r ${m.gradient} rounded-b opacity-50 group-hover:opacity-100 transition-opacity`} />
            <div className="absolute top-4 right-4 px-2.5 py-1 bg-accent/[0.08] backdrop-blur-sm border border-accent/20 rounded-full">
              <span className="text-[10px] text-accent font-semibold uppercase tracking-wider">Advisor</span>
            </div>
            <div className={`w-14 h-14 bg-gradient-to-br ${m.gradient} rounded-full flex items-center justify-center mb-3`}>
              <span className="font-bold text-dark">{m.initials}</span>
            </div>
            <h4 className="font-bold">{m.name}</h4>
            <p className="text-accent text-xs font-medium mb-2">{m.title}</p>
            <p className="text-[#999] text-xs leading-relaxed">{m.bio}</p>
          </div>
        ))}
      </div>

      <p className="text-center mt-8">
        <Link to="/#team" className="text-accent text-sm hover:underline inline-flex items-center gap-1">
          Full bios on homepage <ExternalLink size={14} />
        </Link>
      </p>
    </Section>
  )
}

// ─── 14. Roadmap ────────────────────────────────────────────────────────────────

function RoadmapSection() {
  const [ref, isVisible] = useScrollAnimation(0.1)

  const milestones = [
    { year: '2010', title: 'Founder builds first fitness CRM — domain expertise begins', heritage: true, done: true },
    { year: '2017', title: 'Founder develops 9-axis VBT prototype — vision takes shape', heritage: true, done: true },
    { year: '2024–25', title: 'Prometheus Ecosystem founded — R&D & Development', done: true },
    { year: '2026', title: 'Public Launch — Athlete App & Coach Software', current: true },
    { year: '2026 H2', title: 'Enterprise Launch & Clinic/Gym Partnerships' },
    { year: '2027', title: 'International Expansion & API Platform' },
    { year: '2028', title: 'Clinical Validation Studies & Medical Partnerships' },
  ]

  return (
    <section id="roadmap" ref={ref} className="py-24 lg:py-32 bg-white/[0.01] relative z-10">
      <div
        className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 transition-all duration-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        <SectionHeader
          label="Roadmap"
          title="From First CRM to"
          titleAccent="Clinical Validation."
        />

        {/* Desktop horizontal timeline */}
        <div className="hidden lg:block">
          <div className="relative">
            <div className="absolute top-6 left-0 right-0 h-0.5 bg-white/[0.08]" />
            <div className="grid grid-cols-7 gap-2">
              {milestones.map((m, i) => (
                <div key={i} className="relative">
                  <div className="flex justify-center mb-4">
                    <div
                      className={`w-12 h-12 rounded-full flex items-center justify-center z-10 relative ${
                        m.current
                          ? 'bg-accent shadow-lg shadow-accent/30'
                          : m.done
                            ? 'bg-white/[0.06] backdrop-blur-xl border-2 border-accent/50'
                            : 'bg-white/[0.04] backdrop-blur-xl border border-white/[0.08]'
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
                  <div className="text-center px-1">
                    <span className={`text-xs font-semibold uppercase tracking-wider ${m.heritage || m.current ? 'text-accent' : 'text-gray-600'}`}>
                      {m.heritage && '★ '}{m.year}
                    </span>
                    <p className={`text-sm mt-1 leading-snug ${m.current ? 'text-white font-semibold' : 'text-[#999]'}`}>
                      {m.title}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile vertical timeline */}
        <div className="lg:hidden space-y-0">
          {milestones.map((m, i) => (
            <div
              key={i}
              className={`flex gap-4 transition-all duration-500 ${
                isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'
              }`}
              style={{ transitionDelay: isVisible ? `${i * 80}ms` : '0ms' }}
            >
              <div className="flex flex-col items-center">
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center shrink-0 ${
                    m.current
                      ? 'bg-accent shadow-lg shadow-accent/30'
                      : m.done
                        ? 'bg-white/[0.06] backdrop-blur-xl border-2 border-accent/50'
                        : 'bg-white/[0.04] backdrop-blur-xl border border-white/[0.08]'
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
                {i < milestones.length - 1 && <div className="w-0.5 h-12 bg-white/[0.08]" />}
              </div>
              <div className="pb-8 pt-1.5">
                <span className={`text-xs font-semibold uppercase tracking-wider ${m.heritage || m.current ? 'text-accent' : 'text-gray-600'}`}>
                  {m.heritage && '★ '}{m.year}
                </span>
                <p className={`text-sm mt-0.5 ${m.current ? 'text-white font-semibold' : 'text-[#999]'}`}>
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

// ─── 15. CTA ────────────────────────────────────────────────────────────────────

function CTASection() {
  return (
    <Section id="cta">
      <div className="text-center py-12">
        <h2 className="font-['Arimo'] text-4xl sm:text-5xl lg:text-6xl font-extrabold uppercase mb-10">
          <span className="text-accent">Let's Talk.</span>
        </h2>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6">
          <a
            href="mailto:management@prometheus.coach"
            className="inline-flex items-center gap-3 px-8 py-4 bg-accent text-white font-bold rounded-xl text-base transition-all duration-300 hover:-translate-y-1 hover:shadow-[0px_4px_30px_0px_#E67E22]"
          >
            <Mail size={20} />
            management@prometheus.coach
          </a>
          <a
            href="https://wa.me/66828133359"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 bg-white/[0.04] backdrop-blur-xl border border-accent/30 text-white font-bold rounded-xl text-base transition-all duration-300 hover:-translate-y-1 hover:border-accent hover:shadow-[0px_4px_30px_0px_rgba(230,126,34,0.3)]"
          >
            <MessageCircle size={20} className="text-green-400" />
            WhatsApp
          </a>
        </div>

        <div className="mt-12 space-y-2">
          <p className="text-[#999] text-sm font-medium">PeakForce OÜ — Tallinn, Estonia (EU)</p>
          <p className="text-[#666] text-xs">Swiss-Founded. Science-Driven. Globally Minded.</p>
        </div>
      </div>
    </Section>
  )
}

// ─── Main Page ──────────────────────────────────────────────────────────────────

export default function GrowthPitch() {
  const [authenticated, setAuthenticated] = useState(
    () => sessionStorage.getItem(SESSION_KEY) === 'true'
  )

  useEffect(() => {
    document.title = 'Prometheus — Growth Pitch'
    return () => { document.title = 'Prometheus' }
  }, [])

  return (
    <AnimatePresence mode="wait">
      {!authenticated ? (
        <motion.div key="gate" exit={{ opacity: 0 }} transition={{ duration: 0.4 }}>
          <AccessGate onAccess={() => setAuthenticated(true)} />
        </motion.div>
      ) : (
        <motion.div
          key="pitch"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="min-h-screen bg-[#141414] text-white relative"
        >
          {/* Background gradient image — matching coaching software */}
          <div
            className="fixed inset-0 z-0 pointer-events-none"
            style={{
              backgroundImage: 'url(/images/gradient-bg-dark.png)',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundAttachment: 'fixed',
            }}
          />
          <PitchNav />
          <HeroSection />
          <ProblemSection />
          <EcosystemSection />
          <ProductDeepDive />
          <CommunitySection />
          <NutritionSection />
          <AICoachSection />
          <CommandCenterSection />
          <MoatSection />
          <MarketSection />
          <CompetitionSection />
          <BusinessModelSection />
          <FlywheelSection />
          <TeamSection />
          <RoadmapSection />
          <CTASection />
        </motion.div>
      )}
    </AnimatePresence>
  )
}
