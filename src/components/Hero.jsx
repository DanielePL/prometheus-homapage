import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'

export default function Hero() {
  const canvasRef = useRef(null)

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

  const scrollTo = (id) => {
    document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="hero" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: 'url(/images/hero-bg-athlete.jpg)' }}
      />
      <div className="absolute inset-0 z-0" style={{ background: 'linear-gradient(180deg, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0.5) 40%, rgba(0,0,0,0.85) 100%)' }} />

      {/* Particle Background */}
      <canvas ref={canvasRef} className="absolute inset-0 z-[1]" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 lg:py-0 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-accent/10 border border-accent/20 rounded-full text-accent text-xs font-medium mb-6">
              <span className="w-1.5 h-1.5 bg-accent rounded-full animate-pulse" />
              Prometheus Ecosystem — Now in Beta
            </div>

            <h1 className="font-['Arimo'] text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-[1.1] tracking-tight mb-6 uppercase">
              The Future of{' '}
              <span className="text-accent">
                Intelligent Training
              </span>
            </h1>

            <p className="text-lg sm:text-xl text-[#999] leading-relaxed mb-8 max-w-xl">
              Prometheus combines AI coaching, velocity-based training, and sports science into one
              powerful ecosystem — built by scientists and world-class athletes.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="https://play.google.com/store/apps/details?id=prometheus.coach&pcampaignid=web_share"
                target="_blank"
                rel="noopener noreferrer"
                className="px-10 py-4 bg-accent text-white font-bold rounded-lg text-base transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0px_2px_18px_0px_#F2721B] text-center"
              >
                Start Free Trial
              </a>
              <button
                onClick={() => scrollTo('#product')}
                className="px-8 py-4 border border-white/20 hover:border-accent text-white font-semibold rounded-lg text-base transition-all duration-300 hover:bg-accent/5"
              >
                Watch Demo
              </button>
            </div>
          </motion.div>

          {/* Right — Phone Mockup */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
            className="hidden lg:flex justify-center"
          >
            <div className="relative">
              <div className="w-[280px]">
                <img
                  src="/images/screenshots/training-framed.png"
                  alt="Prometheus App"
                  className="w-full h-auto rounded-[30px] shadow-[0_30px_60px_rgba(0,0,0,0.5)]"
                />
              </div>
              {/* Floating badges */}
              <div className="absolute -left-16 xl:-left-20 top-20 px-3 py-2 bg-dark-card/90 backdrop-blur border border-dark-border rounded-xl text-xs animate-[float_3s_ease-in-out_infinite] hidden lg:block">
                <span className="text-accent font-semibold">AI Coach</span>
                <span className="text-[#999] ml-1">Active</span>
              </div>
              <div className="absolute -right-12 xl:-right-16 top-40 px-3 py-2 bg-dark-card/90 backdrop-blur border border-dark-border rounded-xl text-xs animate-[float_3s_ease-in-out_infinite_1s] hidden lg:block">
                <span className="text-accent font-semibold">VBT</span>
                <span className="text-[#999] ml-1">0.85 m/s</span>
              </div>
              <div className="absolute -left-8 xl:-left-12 bottom-32 px-3 py-2 bg-dark-card/90 backdrop-blur border border-dark-border rounded-xl text-xs animate-[float_3s_ease-in-out_infinite_0.5s] hidden lg:block">
                <span className="text-green-400 font-semibold">+12%</span>
                <span className="text-[#999] ml-1">Progress</span>
              </div>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  )
}
