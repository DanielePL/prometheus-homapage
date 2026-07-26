import { useEffect, useRef } from 'react'
import { Building2, Dumbbell, Smartphone, ArrowRight } from 'lucide-react'
import { useDemoModal } from '../../context/DemoModalContext'

/* Ambient particle field — subtle, premium. */
function ParticleField() {
  const ref = useRef(null)
  useEffect(() => {
    const canvas = ref.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    let raf
    let particles = []
    const resize = () => {
      canvas.width = canvas.offsetWidth
      canvas.height = canvas.offsetHeight
    }
    resize()
    window.addEventListener('resize', resize)
    for (let i = 0; i < 45; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.25,
        vy: (Math.random() - 0.5) * 0.25,
        size: Math.random() * 1.8 + 0.4,
        opacity: Math.random() * 0.4 + 0.1,
      })
    }
    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      particles.forEach((p) => {
        p.x += p.vx; p.y += p.vy
        if (p.x < 0 || p.x > canvas.width) p.vx *= -1
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1
        ctx.beginPath(); ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(230,126,34,${p.opacity})`; ctx.fill()
      })
      particles.forEach((a, i) => {
        particles.slice(i + 1).forEach((b) => {
          const d = Math.hypot(a.x - b.x, a.y - b.y)
          if (d < 130) {
            ctx.beginPath(); ctx.moveTo(a.x, a.y); ctx.lineTo(b.x, b.y)
            ctx.strokeStyle = `rgba(230,126,34,${0.05 * (1 - d / 130)})`; ctx.stroke()
          }
        })
      })
      raf = requestAnimationFrame(draw)
    }
    draw()
    return () => { cancelAnimationFrame(raf); window.removeEventListener('resize', resize) }
  }, [])
  return <canvas ref={ref} className="absolute inset-0 w-full h-full" />
}

const doors = [
  {
    key: 'operator',
    primary: true,
    icon: Building2,
    label: 'Ich führe ein Studio oder eine Kette',
    sub: 'Der ganze Betrieb in einem System.',
    cta: 'Demo buchen',
  },
  {
    key: 'coach',
    icon: Dumbbell,
    label: 'Ich bin Coach / Personal Trainer',
    sub: 'Eigene Klienten, Programme, Abrechnung.',
    cta: 'Coach entdecken',
  },
  {
    key: 'member',
    icon: Smartphone,
    label: 'Ich trainiere (Mitglied oder allein)',
    sub: 'Training & Ernährung tracken, kostenlos starten.',
    cta: 'App holen',
  },
]

export default function HeroOperator() {
  const { openDemo } = useDemoModal()

  const onDoor = (key) => {
    if (key === 'operator') openDemo()
    else if (key === 'coach') document.querySelector('#oekosystem')?.scrollIntoView({ behavior: 'smooth' })
    else document.querySelector('#mitglied')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="hero" className="relative flex items-center overflow-hidden pt-24 pb-14 lg:min-h-[88vh]">
      {/* Background layers. The photograph carries the room — this sells to an
          industry made of bodies and noise, and a page of grey cards doesn't
          look like one. It sits far enough back that the dashboard in front of
          it stays the subject: heavy darkening, plus a left-to-right gradient
          so the headline always lands on near-solid ground. */}
      <div className="absolute inset-0 bg-dark" />
      <img
        src="/images/photos/gym-hero.webp"
        alt=""
        aria-hidden="true"
        fetchPriority="high"
        className="absolute inset-0 w-full h-full object-cover object-[65%_center] opacity-[0.5] lg:hidden"
      />
      {/* Below lg the right-hand column is hidden, so this backdrop is the only
          photograph on a phone — it carries the room there and steps aside on
          desktop, where the foreground panel does the job properly. */}
      <div className="absolute inset-0 bg-gradient-to-r from-dark via-dark/80 to-dark/40 lg:hidden" />
      <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/30 to-dark/60 lg:hidden" />
      <div className="absolute inset-0 opacity-60" style={{ background: 'radial-gradient(ellipse 80% 50% at 70% 0%, rgba(230,126,34,0.10), transparent 60%)' }} />
      <ParticleField />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-5 sm:px-8">
        <div className="grid lg:grid-cols-[1.05fr_0.95fr] gap-10 items-center">
          {/* left: message */}
          <div>
            <div className="hero-rise">
              <p className="text-xs sm:text-sm font-semibold uppercase tracking-[0.22em] text-accent mb-4">
                Eine Software. Vom Mitglied bis zur Zentrale.
              </p>
              <h1 className="display text-[2rem] sm:text-4xl lg:text-5xl leading-[1.06]">
                Das Betriebssystem für <span className="text-accent">moderne Fitness-Unternehmen.</span>
              </h1>
              <p className="mt-4 text-base lg:text-lg text-white/65 leading-relaxed max-w-lg">
                Vom Handy des Mitglieds bis zur Konzernzentrale: eine Software, eine Wahrheit, null Papier.
              </p>
            </div>

            {/* 3-door router */}
            <div className="mt-6 space-y-2.5">
              {doors.map((d, i) => (
                <button
                  key={d.key}
                  onClick={() => onDoor(d.key)}
                  style={{ animationDelay: `${0.12 + i * 0.09}s` }}
                  className={`hero-rise group w-full text-left rounded-xl p-3.5 flex items-center gap-3.5 transition-all ${
                    d.primary
                      ? 'glass-strong border-accent/40 hover:border-accent/70 shadow-[0_0_30px_rgba(230,126,34,0.12)] hover:shadow-[0_0_40px_rgba(230,126,34,0.25)]'
                      : 'glass hover:border-white/20'
                  }`}
                >
                  <div className={`w-10 h-10 shrink-0 rounded-lg flex items-center justify-center ${d.primary ? 'bg-accent text-white' : 'bg-white/8 text-accent'}`}>
                    <d.icon size={19} />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className={`font-semibold ${d.primary ? 'text-base' : 'text-sm'} leading-snug`}>{d.label}</p>
                    <p className="text-xs text-white/55 leading-snug mt-0.5">{d.sub}</p>
                  </div>
                  <span className={`shrink-0 inline-flex items-center gap-1.5 text-sm font-semibold ${d.primary ? 'text-accent' : 'text-white/60 group-hover:text-white'}`}>
                    <span className="hidden sm:inline">{d.cta}</span>
                    <ArrowRight size={16} className="group-hover:translate-x-0.5 transition-transform" />
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* Right: the room, with the product in front of it.

              The photograph is a foreground element here rather than a
              backdrop. Behind the dashboard it had to be dimmed so far to keep
              the UI readable that it stopped registering as a photograph at
              all — the point of having one was lost. Overlapping the two keeps
              both legible and puts the software where it belongs: on the floor
              of a real gym. */}
          <div
            style={{ animationDelay: '0.2s' }}
            className="hero-rise relative hidden lg:block"
          >
            <div className="absolute -inset-6 bg-accent/10 blur-[80px] rounded-full" />

            <div className="relative rounded-2xl overflow-hidden h-52 xl:h-60 shadow-[0_20px_60px_rgba(0,0,0,0.55)] ml-10">
              <img
                src="/images/photos/gym-hero.webp"
                alt=""
                aria-hidden="true"
                fetchPriority="high"
                className="w-full h-full object-cover object-[center_62%]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/20 to-transparent" />
            </div>

            <div className="relative -mt-20 xl:-mt-24 mr-6 glass-strong rounded-2xl overflow-hidden shadow-[0_30px_80px_rgba(0,0,0,0.7)]">
              <div className="flex items-center gap-1.5 px-4 py-2.5 border-b border-white/8">
                <div className="w-2.5 h-2.5 rounded-full bg-red-500/50" />
                <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/50" />
                <div className="w-2.5 h-2.5 rounded-full bg-green-500/50" />
                <div className="flex-1 mx-4">
                  <div className="h-5 rounded-md bg-white/5 flex items-center px-3">
                    <span className="text-[11px] text-white/40">hq.prometheus.coach</span>
                  </div>
                </div>
              </div>
              <img
                src="/images/surfaces/dark-hq.webp"
                alt="Konzernübersicht: das ganze Netzwerk in einer Ansicht"
                width="1600"
                height="954"
                fetchPriority="high"
                className="w-full h-auto block"
              />
            </div>
            <p className="mt-4 text-center text-xs text-white/45">
              Das ganze Netzwerk in einer Ansicht
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
