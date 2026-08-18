import { useState, useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { Check, ArrowRight, Users, Star, Zap, Loader2, Home, Dumbbell, UtensilsCrossed, Brain, User } from 'lucide-react'
import { getSupabase } from '../lib/supabase'

const panelVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.15, ease: 'easeOut' },
  }),
}

/* ——— Reusable Phone Shell (iPhone 17 ratio) ——— */
function PhoneShell({ children, className = '' }) {
  return (
    <div className="relative mx-auto w-full max-w-[300px]">
      <div className="bg-[#0a0a0a] rounded-[2.8rem] p-[5px] shadow-[0_20px_60px_rgba(0,0,0,0.6)] aspect-[1/2.1]">
        <div className={`bg-dark rounded-[2.5rem] overflow-hidden relative h-full flex flex-col ${className}`}>
          {children}
        </div>
      </div>
    </div>
  )
}

/* ——— App chrome (header + bottom nav) for info-card phones ——— */
function AppHeader({ accentColor }) {
  return (
    <>
      <div className="flex justify-center pt-2 pb-0.5 shrink-0">
        <div className="w-[90px] h-[26px] bg-[#0a0a0a] rounded-full" />
      </div>
      <div className="flex items-center justify-between px-4 py-1.5 shrink-0">
        <div className="flex items-center gap-1.5">
          <img src="/images/logo-white.png" alt="" className="w-4 h-4 opacity-70" onError={(e) => { e.target.style.display = 'none' }} />
          <span className="text-[9px] font-semibold tracking-wider uppercase" style={{ color: accentColor }}>prometheus</span>
        </div>
        <div className="flex gap-1.5">
          <div className="w-1 h-1 rounded-full" style={{ background: accentColor, opacity: 0.5 }} />
          <div className="w-1 h-1 rounded-full" style={{ background: accentColor, opacity: 0.3 }} />
          <div className="w-1 h-1 rounded-full" style={{ background: accentColor, opacity: 0.15 }} />
        </div>
      </div>
    </>
  )
}

function AppBottomNav({ accentColor }) {
  return (
    <>
      <div className="flex items-center justify-around py-2 border-t border-white/5 shrink-0 bg-dark-card/50 backdrop-blur">
        {[
          { icon: Home, label: 'Home' },
          { icon: UtensilsCrossed, label: 'Nutrition' },
          { icon: Dumbbell, label: 'Training' },
          { icon: Brain, label: 'Coach' },
          { icon: User, label: 'Profile' },
        ].map((item, idx) => (
          <div key={item.label} className="flex flex-col items-center gap-0.5">
            <item.icon size={12} className={idx === 0 ? 'opacity-90' : 'opacity-30'} style={idx === 0 ? { color: accentColor } : {}} />
            <span className={`text-[8px] ${idx === 0 ? 'opacity-90' : 'opacity-30'}`} style={idx === 0 ? { color: accentColor } : {}}>
              {item.label}
            </span>
          </div>
        ))}
      </div>
      <div className="flex justify-center py-1.5 shrink-0">
        <div className="w-24 h-1 bg-white/15 rounded-full" />
      </div>
    </>
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

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    let animationId
    let particles = []

    const resize = () => { canvas.width = window.innerWidth; canvas.height = window.innerHeight }
    resize()
    window.addEventListener('resize', resize)

    for (let i = 0; i < 60; i++) {
      particles.push({
        x: Math.random() * canvas.width, y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.3, vy: (Math.random() - 0.5) * 0.3,
        size: Math.random() * 2 + 0.5, opacity: Math.random() * 0.5 + 0.1,
      })
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      particles.forEach((p) => {
        p.x += p.vx; p.y += p.vy
        if (p.x < 0 || p.x > canvas.width) p.vx *= -1
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1
        ctx.beginPath(); ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(242, 114, 27, ${p.opacity})`; ctx.fill()
      })
      particles.forEach((a, i) => {
        particles.slice(i + 1).forEach((b) => {
          const dist = Math.hypot(a.x - b.x, a.y - b.y)
          if (dist < 120) {
            ctx.beginPath(); ctx.moveTo(a.x, a.y); ctx.lineTo(b.x, b.y)
            ctx.strokeStyle = `rgba(242, 114, 27, ${0.06 * (1 - dist / 120)})`; ctx.stroke()
          }
        })
      })
      animationId = requestAnimationFrame(animate)
    }
    animate()
    return () => { cancelAnimationFrame(animationId); window.removeEventListener('resize', resize) }
  }, [])

  async function handleBetaSubmit(e) {
    e.preventDefault()
    setBetaState('loading'); setBetaError('')
    try {
      const { error } = await getSupabase().from('ios_beta_testers').insert({ name: betaForm.name, email: betaForm.email })
      if (error) { setBetaError(error.code === '23505' ? 'This email is already registered.' : 'Something went wrong. Please try again.'); setBetaState('error') }
      else setBetaState('success')
    } catch { setBetaError('Something went wrong. Please try again.'); setBetaState('error') }
  }

  async function handleCoachSubmit(e) {
    e.preventDefault()
    setCoachState('loading'); setCoachError('')
    try {
      const { error } = await getSupabase().from('founding_coaches').insert({ name: coachForm.name, email: coachForm.email })
      if (error) { setCoachError(error.code === '23505' ? 'This email is already registered.' : 'Something went wrong. Please try again.'); setCoachState('error') }
      else setCoachState('success')
    } catch { setCoachError('Something went wrong. Please try again.'); setCoachState('error') }
  }

  return (
    <section id="hero" className="relative min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: 'url(/images/hero-bg-athlete.jpg)' }} />
      <div className="absolute inset-0 z-0" style={{ background: 'linear-gradient(180deg, rgba(0,0,0,0.4) 0%, rgba(0,0,0,0.6) 40%, rgba(0,0,0,0.92) 100%)' }} />
      <canvas ref={canvasRef} className="absolute inset-0 z-[1]" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-28 lg:py-32 w-full">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="text-center mb-10">
          <p className="text-xs tracking-[0.3em] uppercase text-accent font-medium mb-3">Pre-Launch 2026</p>
          <h1 className="font-['Arimo'] text-3xl sm:text-4xl lg:text-5xl font-bold uppercase tracking-tight">
            Train <span className="text-accent">Smarter.</span>
          </h1>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-6 lg:gap-5 items-start">

          {/* ——— Phone 1: Android (Video) ——— */}
          <motion.div custom={0} variants={panelVariants} initial="hidden" animate="visible">
            <PhoneShell>
              <video autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover z-0">
                <source src="/videos/android-demo.mov" type="video/mp4" />
              </video>
              <div className="mt-auto relative z-10">
                <div className="bg-gradient-to-t from-black via-black/90 to-transparent pt-16 pb-2 px-4">
                  <div className="flex justify-center mb-2">
                    <div className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-green-500/20 border border-green-500/30 rounded-full">
                      <span className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse" />
                      <span className="text-green-400 text-[9px] font-semibold tracking-wide">LIVE ON GOOGLE PLAY</span>
                    </div>
                  </div>
                  <h2 className="font-['Arimo'] text-lg font-bold leading-tight uppercase text-center text-white mb-2">
                    ANDROID <span className="text-green-400">IS HERE.</span>
                  </h2>
                  <a
                    href="https://play.google.com/store/apps/details?id=prometheus.coach&pcampaignid=web_share"
                    target="_blank" rel="noopener noreferrer"
                    className="w-full flex items-center justify-center gap-2 px-4 py-2.5 bg-green-500 hover:bg-green-400 text-dark font-bold rounded-xl text-xs transition-all duration-300 hover:shadow-[0_4px_20px_rgba(34,197,94,0.3)]"
                  >
                    Download on Google Play <ArrowRight size={14} />
                  </a>
                </div>
                <div className="flex justify-center py-1.5 bg-black">
                  <div className="w-24 h-1 bg-white/15 rounded-full" />
                </div>
              </div>
            </PhoneShell>
          </motion.div>

          {/* ——— Phone 2: iOS Beta (Info Cards) ——— */}
          <motion.div custom={1} variants={panelVariants} initial="hidden" animate="visible">
            <PhoneShell>
              <AppHeader accentColor="#E67E22" />

              <div className="px-4 pb-2 flex-1 flex flex-col overflow-hidden">
                <div className="text-center mb-2">
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-accent/10 border border-accent/20 rounded-full mb-3">
                    <span className="text-accent text-[9px] font-semibold tracking-wide">FOR ATHLETES</span>
                  </div>
                  <h2 className="font-['Arimo'] text-lg font-bold leading-tight mb-1.5 uppercase">
                    iOS BETA TESTERS WANTED
                  </h2>
                  <p className="text-[10px] text-[#888] leading-relaxed">
                    Real athletes, real feedback. In return — <strong className="text-white">one full year free.</strong>
                  </p>
                </div>

                <div className="flex items-center gap-3 p-2.5 bg-dark-card rounded-xl border border-accent/15 mb-2.5">
                  <div>
                    <span className="text-[#555] line-through text-[10px]">$99/year</span>
                    <div className="text-xl font-extrabold text-accent leading-none">FREE</div>
                  </div>
                  <div className="border-l border-white/8 pl-3">
                    <p className="text-[11px] font-semibold text-white">Save $99</p>
                    <p className="text-[9px] text-[#666]">Full Elite plan — VBT, AI, Nutrition, Pose</p>
                  </div>
                </div>

                <div className="space-y-1.5 mb-2.5">
                  {[
                    { icon: Check, text: 'All features free for 12 months' },
                    { icon: Users, text: 'Your feedback shapes the product' },
                    { icon: Star, text: '"Founding Athlete" badge on your profile' },
                    { icon: Zap, text: 'Priority access to new features' },
                  ].map((b) => (
                    <div key={b.text} className="flex items-center gap-2 p-1.5 rounded-lg bg-dark-card/60 border border-white/5">
                      <div className="w-4 h-4 rounded-md bg-accent/15 flex items-center justify-center shrink-0">
                        <b.icon size={9} className="text-accent" />
                      </div>
                      <span className="text-[10px] text-[#bbb] leading-snug">{b.text}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-auto" />
                {betaState === 'success' ? (
                  <div className="p-2.5 bg-accent/10 border border-accent/20 rounded-xl text-center">
                    <Check size={16} className="text-accent mx-auto mb-0.5" />
                    <p className="text-[10px] font-semibold text-accent">You're in! We'll be in touch.</p>
                  </div>
                ) : (
                  <form onSubmit={handleBetaSubmit} className="space-y-1.5">
                    <input type="text" placeholder="Your name" required value={betaForm.name} onChange={(e) => setBetaForm({ ...betaForm, name: e.target.value })}
                      className="w-full px-3 py-2 bg-dark-card border border-white/8 rounded-xl text-[11px] text-white placeholder-[#555] focus:outline-none focus:border-accent/40 transition-colors" />
                    <input type="email" placeholder="Your email" required value={betaForm.email} onChange={(e) => setBetaForm({ ...betaForm, email: e.target.value })}
                      className="w-full px-3 py-2 bg-dark-card border border-white/8 rounded-xl text-[11px] text-white placeholder-[#555] focus:outline-none focus:border-accent/40 transition-colors" />
                    {betaState === 'error' && <p className="text-[9px] text-red-400">{betaError}</p>}
                    <button type="submit" disabled={betaState === 'loading'}
                      className="w-full flex items-center justify-center gap-2 px-4 py-2.5 bg-accent hover:bg-accent-light text-white font-bold rounded-xl text-[11px] transition-all duration-300 hover:shadow-[0_4px_20px_0px_rgba(230,126,34,0.3)] disabled:opacity-60">
                      {betaState === 'loading' ? <Loader2 size={13} className="animate-spin" /> : <>Join Beta <ArrowRight size={13} /></>}
                    </button>
                  </form>
                )}
              </div>

              <AppBottomNav accentColor="#E67E22" />
            </PhoneShell>
          </motion.div>

          {/* ——— Phone 3: Founding Coaches (Info Cards) ——— */}
          <motion.div custom={2} variants={panelVariants} initial="hidden" animate="visible">
            <PhoneShell>
              <AppHeader accentColor="#eab308" />

              <div className="px-4 pb-2 flex-1 flex flex-col overflow-hidden">
                <div className="text-center mb-2">
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-yellow-500/10 border border-yellow-500/20 rounded-full mb-3">
                    <span className="text-yellow-400 text-[9px] font-semibold tracking-wide">LIMITED — 100 SPOTS</span>
                  </div>
                  <h2 className="font-['Arimo'] text-lg font-bold leading-tight mb-1 uppercase">
                    FOUNDING <span className="text-yellow-400">COACHES.</span>
                  </h2>
                </div>

                <div className="flex items-center gap-3 p-2.5 bg-dark-card rounded-xl border border-yellow-500/10 mb-2.5">
                  <div>
                    <span className="text-[#555] line-through text-[10px]">$49/mo</span>
                    <div className="text-xl font-extrabold text-yellow-400 leading-none">FREE</div>
                    <span className="text-[9px] text-[#888]">for 12 months</span>
                  </div>
                  <div className="border-l border-white/8 pl-3">
                    <p className="text-[11px] font-semibold text-white">Coach Pro Plan</p>
                    <p className="text-[9px] text-[#666]">AI programs, VBT, unlimited athletes</p>
                  </div>
                </div>

                <div className="space-y-1 mb-2">
                  {[
                    'Unlimited athletes on your roster',
                    'VBT tracking & pose overlay',
                    'AI programs — auto-adapted weekly',
                    '"Founding Coach" badge forever',
                  ].map((b) => (
                    <div key={b} className="flex items-center gap-2 py-0.5">
                      <Check size={11} className="text-yellow-400 shrink-0" />
                      <span className="text-[10px] text-[#bbb] leading-snug">{b}</span>
                    </div>
                  ))}
                </div>

                <div className="p-2 bg-yellow-500/5 border border-yellow-500/10 rounded-lg mb-2.5">
                  <p className="text-[9px] text-[#888] leading-relaxed">
                    <strong className="text-yellow-400">How it works:</strong> Free for 12 months. Athletes subscribe independently.
                  </p>
                </div>

                <div className="mt-auto" />
                {coachState === 'success' ? (
                  <div className="p-2.5 bg-yellow-500/10 border border-yellow-500/20 rounded-xl text-center">
                    <Check size={16} className="text-yellow-400 mx-auto mb-0.5" />
                    <p className="text-[10px] font-semibold text-yellow-400">You're in! We'll be in touch.</p>
                  </div>
                ) : (
                  <form onSubmit={handleCoachSubmit} className="space-y-1.5">
                    <input type="text" placeholder="Your name" required value={coachForm.name} onChange={(e) => setCoachForm({ ...coachForm, name: e.target.value })}
                      className="w-full px-3 py-2 bg-dark-card border border-white/8 rounded-xl text-[11px] text-white placeholder-[#555] focus:outline-none focus:border-yellow-500/40 transition-colors" />
                    <input type="email" placeholder="Your email" required value={coachForm.email} onChange={(e) => setCoachForm({ ...coachForm, email: e.target.value })}
                      className="w-full px-3 py-2 bg-dark-card border border-white/8 rounded-xl text-[11px] text-white placeholder-[#555] focus:outline-none focus:border-yellow-500/40 transition-colors" />
                    {coachState === 'error' && <p className="text-[9px] text-red-400">{coachError}</p>}
                    <button type="submit" disabled={coachState === 'loading'}
                      className="w-full flex items-center justify-center gap-2 px-4 py-2.5 bg-yellow-500 hover:bg-yellow-400 text-dark font-bold rounded-xl text-[11px] transition-all duration-300 hover:shadow-[0_4px_20px_rgba(234,179,8,0.3)] disabled:opacity-60">
                      {coachState === 'loading' ? <Loader2 size={13} className="animate-spin" /> : <>Claim Your Spot <ArrowRight size={13} /></>}
                    </button>
                  </form>
                )}
              </div>

              <AppBottomNav accentColor="#eab308" />
            </PhoneShell>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
