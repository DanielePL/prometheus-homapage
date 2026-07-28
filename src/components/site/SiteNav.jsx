import { useState, useEffect } from 'react'
import { Menu, X, ArrowRight } from 'lucide-react'
import { useDemoModal } from '../../context/DemoModalContext'

/* Three links, not five. #oekosystem and #branchen pointed at sections that
   are parked for subpages — they were dead anchors that scrolled nowhere. */
const links = [
  { label: 'Plattform', href: '#plattform' },
  { label: 'Einstieg', href: '#einstieg' },
  { label: 'Preise', href: '#preise' },
]

export default function SiteNav() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const { openDemo } = useDemoModal()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollTo = (e, href) => {
    e.preventDefault()
    setMobileOpen(false)
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <nav
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled ? 'nav-solid border-b border-white/10' : 'bg-transparent border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          <a href="#" className="flex items-center" onClick={(e) => scrollTo(e, '#hero')}>
            <img src="/images/logo-white.png" alt="Prometheus" className="h-8" />
          </a>

          <div className="hidden lg:flex items-center gap-9">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={(e) => scrollTo(e, l.href)}
                className="text-sm font-medium text-white/65 hover:text-white transition-colors"
              >
                {l.label}
              </a>
            ))}
          </div>

          <div className="hidden lg:flex items-center gap-5">
            <a
              href="https://enterprise.prometheus.coach"
              className="text-sm font-medium text-white/65 hover:text-white transition-colors"
            >
              Login
            </a>
            <button
              onClick={openDemo}
              className="inline-flex items-center gap-2 px-5 h-11 rounded-xl bg-accent text-white font-semibold text-sm hover:bg-accent-light transition-all hover:shadow-[0_0_28px_rgba(230,126,34,0.4)]"
            >
              Demo buchen <ArrowRight size={16} />
            </button>
          </div>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? 'Menü schliessen' : 'Menü öffnen'}
            aria-expanded={mobileOpen}
            aria-controls="mobile-nav"
            className="lg:hidden p-2 text-white/70 hover:text-white"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* max-h-96 clipped the panel: it needs 396px for five links, Login and
          the CTA, so the button was cut off by 12px. Bound it to the viewport
          instead and let the panel scroll if it ever outgrows that. */}
      <div
        id="mobile-nav"
        className={`lg:hidden overflow-hidden transition-all duration-300 ${
          mobileOpen ? 'max-h-[calc(100dvh_-_4rem)]' : 'max-h-0'
        }`}
      >
        <div className="nav-panel border-t border-white/10 px-5 py-4 space-y-1 max-h-[calc(100dvh_-_4rem)] overflow-y-auto">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={(e) => scrollTo(e, l.href)}
              className="block px-4 py-3 text-base text-white/70 hover:text-white hover:bg-white/5 rounded-lg transition-colors"
            >
              {l.label}
            </a>
          ))}
          <a href="https://enterprise.prometheus.coach" className="block px-4 py-3 text-base text-white/70 hover:text-white hover:bg-white/5 rounded-lg">
            Login
          </a>
          <button
            onClick={() => { setMobileOpen(false); openDemo() }}
            className="w-full mt-2 px-5 h-12 rounded-xl bg-accent text-white font-semibold text-base flex items-center justify-center gap-2"
          >
            Demo buchen <ArrowRight size={16} />
          </button>
        </div>
      </div>
    </nav>
  )
}
