import { useState, useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { Check, ArrowRight, Users, Star, Zap, Loader2, Home, Dumbbell, UtensilsCrossed, Brain, User } from 'lucide-react'
import supabase from '../lib/supabase'

const panelVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.15, ease: 'easeOut' },
  }),
}

/* ——————————————— Phone Shell ——————————————— */
function PhoneFrame({ children, accentColor = '#E67E22', variant = 'ios' }) {
  return (
    <div className="relative mx-auto w-full max-w-[340px] flex flex-col">
      {/* Outer bezel */}
      <div className="bg-[#0a0a0a] rounded-[2.8rem] p-[5px] shadow-[0_20px_60px_rgba(0,0,0,0.6)] flex-1 flex flex-col">
        {/* Screen */}
        <div className="bg-dark rounded-[2.5rem] overflow-hidden relative flex-1 flex flex-col">
          {/* Dynamic Island / Notch */}
          {variant === 'ios' ? (
            <div className="flex justify-center pt-2.5 pb-1 relative z-20">
              <div className="w-[100px] h-[28px] bg-[#0a0a0a] rounded-full" />
            </div>
          ) : (
            <div className="flex items-center justify-between px-6 pt-3 pb-1.5 relative z-20">
              <span className="text-[10px] text-[#666] font-medium">12:49</span>
              <div className="w-[60px] h-[18px] bg-[#0a0a0a] rounded-full" />
              <div className="flex gap-1 items-center">
                <div className="w-3 h-3 rounded-sm border border-[#444]" style={{ borderColor: accentColor + '80' }}>
                  <div className="w-1.5 h-1.5 rounded-[1px] m-auto mt-[2px]" style={{ background: accentColor }} />
                </div>
              </div>
            </div>
          )}

          {/* App Header Bar */}
          <div className="flex items-center justify-between px-5 py-2 relative z-20">
            <div className="flex items-center gap-2">
              <img src="/images/logo-white.png" alt="" className="w-5 h-5 opacity-70" onError={(e) => { e.target.style.display = 'none' }} />
              <span className="text-[11px] font-semibold tracking-wider uppercase" style={{ color: accentColor }}>
                prometheus
              </span>
            </div>
            <div className="flex gap-2">
              <div className="w-1 h-1 rounded-full" style={{ background: accentColor, opacity: 0.5 }} />
              <div className="w-1 h-1 rounded-full" style={{ background: accentColor, opacity: 0.3 }} />
              <div className="w-1 h-1 rounded-full" style={{ background: accentColor, opacity: 0.15 }} />
            </div>
          </div>

          {/* Screen Content */}
          <div className="px-5 pb-3 relative z-10 flex-1 flex flex-col">
            {children}
          </div>

          {/* Bottom Navigation Bar */}
          <div className="flex items-center justify-around py-3 border-t border-white/5 relative z-20 bg-dark-card/50 backdrop-blur">
            {[
              { icon: Home, label: 'Home' },
              { icon: UtensilsCrossed, label: 'Nutrition' },
              { icon: Dumbbell, label: 'Training' },
              { icon: Brain, label: 'Coach' },
              { icon: User, label: 'Profile' },
            ].map((item, idx) => (
              <div key={item.label} className="flex flex-col items-center gap-0.5">
                <item.icon size={14} className={idx === 0 ? 'opacity-90' : 'opacity-30'} style={idx === 0 ? { color: accentColor } : {}} />
                <span className={`text-[9px] ${idx === 0 ? 'opacity-90' : 'opacity-30'}`} style={idx === 0 ? { color: accentColor } : {}}>
                  {item.label}
                </span>
              </div>
            ))}
          </div>

          {/* Home indicator */}
          <div className="flex justify-center pb-2">
            <div className="w-28 h-1 bg-white/15 rounded-full" />
          </div>
        </div>
      </div>
    </div>
  )
}

/* ——————————————— Main Hero ——————————————— */
export default function Hero() {
  const canvasRef = useRef(null)

  const [betaForm, setBetaForm] = useState({ name: '', email: '' })
  const [betaState, setBetaState] = useState('idle')
  const [betaError, setBetaError] = useState('')

  const [coachForm, setCoachForm] = useState({ name: '', email: '' })
  const [coachState, setCoachState] = useState('idle')
  const [coachError, setCoachError] = useState('')

  // Particle background
  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    let animationId
    let particles = []

    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    resize()
    window.addEventListener('resize', resize)

    for (let i = 0; i < 60; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        size: Math.random() * 2 + 0.5,
        opacity: Math.random() * 0.5 + 0.1,
      })
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      particles.forEach((p) => {
        p.x += p.vx
        p.y += p.vy
        if (p.x < 0 || p.x > canvas.width) p.vx *= -1
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(242, 114, 27, ${p.opacity})`
        ctx.fill()
      })
      particles.forEach((a, i) => {
        particles.slice(i + 1).forEach((b) => {
          const dist = Math.hypot(a.x - b.x, a.y - b.y)
          if (dist < 120) {
            ctx.beginPath()
            ctx.moveTo(a.x, a.y)
            ctx.lineTo(b.x, b.y)
            ctx.strokeStyle = `rgba(242, 114, 27, ${0.06 * (1 - dist / 120)})`
            ctx.stroke()
          }
        })
      })
      animationId = requestAnimationFrame(animate)
    }
    animate()

    return () => {
      cancelAnimationFrame(animationId)
      window.removeEventListener('resize', resize)
    }
  }, [])

  async function handleBetaSubmit(e) {
    e.preventDefault()
    setBetaState('loading')
    setBetaError('')
    try {
      const { error } = await supabase
        .from('ios_beta_testers')
        .insert({ name: betaForm.name, email: betaForm.email })
      if (error) {
        setBetaError(error.code === '23505' ? 'This email is already registered.' : 'Something went wrong. Please try again.')
        setBetaState('error')
      } else {
        setBetaState('success')
      }
    } catch {
      setBetaError('Something went wrong. Please try again.')
      setBetaState('error')
    }
  }

  async function handleCoachSubmit(e) {
    e.preventDefault()
    setCoachState('loading')
    setCoachError('')
    try {
      const { error } = await supabase
        .from('founding_coaches')
        .insert({ name: coachForm.name, email: coachForm.email })
      if (error) {
        setCoachError(error.code === '23505' ? 'This email is already registered.' : 'Something went wrong. Please try again.')
        setCoachState('error')
      } else {
        setCoachState('success')
      }
    } catch {
      setCoachError('Something went wrong. Please try again.')
      setCoachState('error')
    }
  }

  return (
    <section id="hero" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: 'url(/images/hero-bg-athlete.jpg)' }}
      />
      <div className="absolute inset-0 z-0" style={{ background: 'linear-gradient(180deg, rgba(0,0,0,0.4) 0%, rgba(0,0,0,0.6) 40%, rgba(0,0,0,0.92) 100%)' }} />

      {/* Particle Background */}
      <canvas ref={canvasRef} className="absolute inset-0 z-[1]" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-28 lg:py-32 w-full">

        {/* Section Headline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <p className="text-xs tracking-[0.3em] uppercase text-accent font-medium mb-3">Pre-Launch 2026</p>
          <h1 className="font-['Arimo'] text-3xl sm:text-4xl lg:text-5xl font-bold uppercase tracking-tight">
            Train{' '}
            <span className="text-accent">Smarter.</span>
          </h1>
        </motion.div>

        {/* 3 Phone Panels */}
        <div className="grid lg:grid-cols-3 gap-6 lg:gap-5 items-stretch">

          {/* ——— Phone 1: Android ——— */}
          <motion.div custom={0} variants={panelVariants} initial="hidden" animate="visible" className="flex">
            <PhoneFrame accentColor="#22c55e" variant="android">
              {/* App Screenshot Preview */}
              <div className="relative rounded-xl overflow-hidden mb-4 -mx-1">
                <img
                  src="/images/screenshots/nutrition-framed.png"
                  alt="Prometheus Android App"
                  className="w-[55%] mx-auto rounded-xl opacity-90"
                  style={{ filter: 'drop-shadow(0 8px 24px rgba(0,0,0,0.4))' }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/30 to-transparent" />
                <div className="absolute bottom-2 left-0 right-0 text-center">
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-green-500/15 border border-green-500/25 rounded-full">
                    <span className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse" />
                    <span className="text-green-400 text-[10px] font-semibold tracking-wide">LIVE ON GOOGLE PLAY</span>
                  </div>
                </div>
              </div>

              <h2 className="font-['Arimo'] text-xl font-bold leading-tight mb-2 uppercase text-center">
                ANDROID <span className="text-green-400">IS HERE.</span>
              </h2>

              <p className="text-[11px] text-[#888] leading-relaxed mb-3 text-center">
                VBT, Pose Overlay, AI Coaching and Nutrition Scanning — now on Android.
              </p>

              <div className="flex flex-wrap gap-1.5 justify-center mb-4">
                {['VBT', 'Skeleton Overlay', 'AI Coach', 'Nutrition Scanner'].map((tag) => (
                  <span key={tag} className="px-2.5 py-0.5 bg-green-500/10 border border-green-500/20 rounded-full text-green-400 text-[10px] font-medium">
                    {tag}
                  </span>
                ))}
              </div>

              <div className="mt-auto" />
              <a
                href="https://play.google.com/store/apps/details?id=prometheus.coach&pcampaignid=web_share"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 px-5 py-3 bg-green-500 hover:bg-green-400 text-dark font-bold rounded-xl text-xs transition-all duration-300 hover:shadow-[0_4px_20px_rgba(34,197,94,0.3)]"
              >
                Download on Google Play
                <ArrowRight size={14} />
              </a>
            </PhoneFrame>
          </motion.div>

          {/* ——— Phone 2: iOS Beta ——— */}
          <motion.div custom={1} variants={panelVariants} initial="hidden" animate="visible" className="flex">
            <PhoneFrame accentColor="#E67E22" variant="ios">
              <div className="mb-3 text-center">
                <div className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-accent/10 border border-accent/20 rounded-full mb-4">
                  <span className="text-accent text-[10px] font-semibold tracking-wide">FOR ATHLETES</span>
                </div>
                <h2 className="font-['Arimo'] text-xl font-bold leading-tight mb-2 uppercase">
                  iOS BETA TESTERS WANTED
                </h2>
                <p className="text-[11px] text-[#888] leading-relaxed">
                  Real athletes, real feedback. In return — <strong className="text-white">one full year free.</strong>
                </p>
              </div>

              {/* Savings Callout */}
              <div className="flex items-center gap-3 p-3 bg-dark-card rounded-xl border border-accent/15 mb-3">
                <div>
                  <span className="text-[#555] line-through text-xs">$99/year</span>
                  <div className="text-2xl font-extrabold text-accent leading-none">FREE</div>
                  <span className="text-[10px] text-[#888]">for 12 months</span>
                </div>
                <div className="border-l border-white/8 pl-3">
                  <p className="text-xs font-semibold text-white">Save $99</p>
                  <p className="text-[10px] text-[#666]">Full Elite plan — VBT, AI Coach, Nutrition, Pose Tracking</p>
                </div>
              </div>

              <div className="space-y-2 mb-4">
                {[
                  { icon: Check, text: 'Full access, all features — free for 12 months' },
                  { icon: Users, text: 'Direct line to the dev team — your feedback shapes the product' },
                  { icon: Star, text: '"Founding Athlete" badge — permanently on your profile' },
                  { icon: Zap, text: 'Priority access to every new feature before public release' },
                ].map((b) => (
                  <div key={b.text} className="flex items-start gap-2 p-2 rounded-lg bg-dark-card/60 border border-white/5">
                    <div className="w-5 h-5 rounded-md bg-accent/15 flex items-center justify-center shrink-0 mt-0.5">
                      <b.icon size={10} className="text-accent" />
                    </div>
                    <span className="text-[11px] text-[#bbb] leading-snug">{b.text}</span>
                  </div>
                ))}
              </div>

              <div className="mt-auto" />
              {betaState === 'success' ? (
                <div className="p-3 bg-accent/10 border border-accent/20 rounded-xl text-center">
                  <Check size={18} className="text-accent mx-auto mb-1" />
                  <p className="text-xs font-semibold text-accent">You're in! We'll be in touch.</p>
                </div>
              ) : (
                <form onSubmit={handleBetaSubmit} className="space-y-2">
                  <input
                    type="text"
                    placeholder="Your name"
                    required
                    value={betaForm.name}
                    onChange={(e) => setBetaForm({ ...betaForm, name: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-dark-card border border-white/8 rounded-xl text-xs text-white placeholder-[#555] focus:outline-none focus:border-accent/40 transition-colors"
                  />
                  <input
                    type="email"
                    placeholder="Your email"
                    required
                    value={betaForm.email}
                    onChange={(e) => setBetaForm({ ...betaForm, email: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-dark-card border border-white/8 rounded-xl text-xs text-white placeholder-[#555] focus:outline-none focus:border-accent/40 transition-colors"
                  />
                  {betaState === 'error' && (
                    <p className="text-[10px] text-red-400">{betaError}</p>
                  )}
                  <button
                    type="submit"
                    disabled={betaState === 'loading'}
                    className="w-full flex items-center justify-center gap-2 px-5 py-3 bg-accent hover:bg-accent-light text-white font-bold rounded-xl text-xs transition-all duration-300 hover:shadow-[0_4px_20px_0px_rgba(230,126,34,0.3)] disabled:opacity-60"
                  >
                    {betaState === 'loading' ? (
                      <Loader2 size={14} className="animate-spin" />
                    ) : (
                      <>
                        Join Beta
                        <ArrowRight size={14} />
                      </>
                    )}
                  </button>
                </form>
              )}
            </PhoneFrame>
          </motion.div>

          {/* ——— Phone 3: Founding Coaches ——— */}
          <motion.div custom={2} variants={panelVariants} initial="hidden" animate="visible" className="flex">
            <PhoneFrame accentColor="#eab308" variant="ios">
              <div className="mb-3 text-center">
                <div className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-yellow-500/10 border border-yellow-500/20 rounded-full mb-4">
                  <span className="text-yellow-400 text-[10px] font-semibold tracking-wide">LIMITED — 100 SPOTS ONLY</span>
                </div>
                <h2 className="font-['Arimo'] text-xl font-bold leading-tight mb-1 uppercase">
                  FOUNDING <span className="text-yellow-400">COACHES.</span>
                </h2>
              </div>

              {/* Pricing Card */}
              <div className="flex items-center gap-3 p-3 bg-dark-card rounded-xl border border-yellow-500/10 mb-3">
                <div>
                  <span className="text-[#555] line-through text-xs">$49/mo</span>
                  <div className="text-2xl font-extrabold text-yellow-400 leading-none">FREE</div>
                  <span className="text-[10px] text-[#888]">for 12 months</span>
                </div>
                <div className="border-l border-white/8 pl-3">
                  <p className="text-xs font-semibold text-white">Full Coach Pro Plan</p>
                  <p className="text-[10px] text-[#666]">AI programs, VBT tracking, unlimited athletes</p>
                </div>
              </div>

              <div className="space-y-1.5 mb-3">
                {[
                  'Manage unlimited athletes on your roster',
                  'VBT live tracking & pose overlay for every session',
                  'AI-generated programs per athlete — auto-adapted weekly',
                  '"Founding Coach" badge — recognized forever in the app',
                ].map((b) => (
                  <div key={b} className="flex items-start gap-2 py-1">
                    <Check size={12} className="text-yellow-400 shrink-0 mt-0.5" />
                    <span className="text-[11px] text-[#bbb] leading-snug">{b}</span>
                  </div>
                ))}
              </div>

              <div className="p-2.5 bg-yellow-500/5 border border-yellow-500/10 rounded-lg mb-3">
                <p className="text-[10px] text-[#888] leading-relaxed">
                  <strong className="text-yellow-400">How it works:</strong> Your Coach Pro plan is free for 12 months. Your athletes subscribe independently — keeping the platform fair and fraud-proof.
                </p>
              </div>

              <div className="mt-auto" />
              {coachState === 'success' ? (
                <div className="p-3 bg-yellow-500/10 border border-yellow-500/20 rounded-xl text-center">
                  <Check size={18} className="text-yellow-400 mx-auto mb-1" />
                  <p className="text-xs font-semibold text-yellow-400">You're in! We'll be in touch.</p>
                </div>
              ) : (
                <form onSubmit={handleCoachSubmit} className="space-y-2">
                  <input
                    type="text"
                    placeholder="Your name"
                    required
                    value={coachForm.name}
                    onChange={(e) => setCoachForm({ ...coachForm, name: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-dark-card border border-white/8 rounded-xl text-xs text-white placeholder-[#555] focus:outline-none focus:border-yellow-500/40 transition-colors"
                  />
                  <input
                    type="email"
                    placeholder="Your email"
                    required
                    value={coachForm.email}
                    onChange={(e) => setCoachForm({ ...coachForm, email: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-dark-card border border-white/8 rounded-xl text-xs text-white placeholder-[#555] focus:outline-none focus:border-yellow-500/40 transition-colors"
                  />
                  {coachState === 'error' && (
                    <p className="text-[10px] text-red-400">{coachError}</p>
                  )}
                  <button
                    type="submit"
                    disabled={coachState === 'loading'}
                    className="w-full flex items-center justify-center gap-2 px-5 py-3 bg-yellow-500 hover:bg-yellow-400 text-dark font-bold rounded-xl text-xs transition-all duration-300 hover:shadow-[0_4px_20px_rgba(234,179,8,0.3)] disabled:opacity-60"
                  >
                    {coachState === 'loading' ? (
                      <Loader2 size={14} className="animate-spin" />
                    ) : (
                      <>
                        Claim Your Spot
                        <ArrowRight size={14} />
                      </>
                    )}
                  </button>
                </form>
              )}
            </PhoneFrame>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
