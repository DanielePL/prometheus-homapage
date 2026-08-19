import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Menu, X, ArrowRight } from 'lucide-react'
import { APP, SIGNUP } from '../../lib/links'

/* Navigation and footer for the English pages — the homepage and /studios.
 *
 * SiteNav/SiteFooter still exist and are still German. They belong to the old
 * enterprise-first page: their links are its scroll anchors (#plattform,
 * #einstieg) and their CTA opens the demo modal. This site sells a product a
 * coach can buy without talking to anyone, so the primary action is the trial,
 * not a booked call.
 */

const LINKS = [
  { label: 'What you get', href: '/#included' },
  { label: 'Pricing', href: '/#pricing' },
  { label: 'For studios', href: '/studios/' },
]

export function HomeNav() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  /* Plain <a> for the hash links rather than react-router's <Link>: they have to
     work both as an in-page jump on the homepage and as a cross-page jump from
     /studios, and a full navigation does both without a scroll-restoration
     dance. */
  const item = (l, cls) =>
    l.href.startsWith('/#') ? (
      <a key={l.href} href={l.href} className={cls} onClick={() => setOpen(false)}>{l.label}</a>
    ) : (
      <Link key={l.href} to={l.href} className={cls} onClick={() => setOpen(false)}>{l.label}</Link>
    )

  return (
    <nav
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled ? 'nav-solid border-b border-white/10' : 'bg-transparent border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          <Link to="/" className="flex items-center">
            <img src="/images/logo-white.png" alt="Prometheus" className="h-8" />
          </Link>

          <div className="hidden lg:flex items-center gap-9">
            {LINKS.map((l) =>
              item(l, 'text-sm font-medium text-white/65 hover:text-white transition-colors'),
            )}
          </div>

          <div className="hidden lg:flex items-center gap-5">
            <a href={APP} className="text-sm font-medium text-white/65 hover:text-white transition-colors">
              Log in
            </a>
            <a
              href={SIGNUP}
              className="inline-flex items-center gap-2 px-5 h-11 rounded-xl bg-accent text-white font-semibold text-sm hover:bg-accent-light transition-all hover:shadow-[0_0_28px_rgba(230,126,34,0.4)]"
            >
              Start free <ArrowRight size={16} />
            </a>
          </div>

          <button
            onClick={() => setOpen(!open)}
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            aria-controls="home-mobile-nav"
            className="lg:hidden p-2 text-white/70 hover:text-white"
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      <div
        id="home-mobile-nav"
        className={`lg:hidden overflow-hidden transition-all duration-300 ${
          open ? 'max-h-[calc(100dvh_-_4rem)]' : 'max-h-0'
        }`}
      >
        <div className="nav-panel border-t border-white/10 px-5 py-4 space-y-1">
          {LINKS.map((l) =>
            item(l, 'block px-4 py-3 text-base text-white/70 hover:text-white hover:bg-white/5 rounded-lg transition-colors'),
          )}
          <a href={APP} className="block px-4 py-3 text-base text-white/70 hover:text-white hover:bg-white/5 rounded-lg">
            Log in
          </a>
          <a
            href={SIGNUP}
            className="w-full mt-2 px-5 h-12 rounded-xl bg-accent text-white font-semibold text-base flex items-center justify-center gap-2"
          >
            Start free <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </nav>
  )
}

export function HomeFooter() {
  return (
    <footer className="border-t border-white/8 px-5 sm:px-8 py-14">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-[1.5fr_1fr_1fr] gap-10">
          <div>
            <img src="/images/logo-white.png" alt="Prometheus" className="h-8 mb-4" />
            <p className="text-sm text-white/45 max-w-xs leading-relaxed">
              Coaching software that covers the whole job — programming, nutrition,
              feedback, calls and payments in one account.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-sm mb-4">Product</h4>
            <ul className="space-y-2.5 text-sm">
              <li><a href="/#included" className="text-white/45 hover:text-white transition-colors">What you get</a></li>
              <li><a href="/#pricing" className="text-white/45 hover:text-white transition-colors">Pricing</a></li>
              <li><Link to="/studios/" className="text-white/45 hover:text-white transition-colors">For studios</Link></li>
              <li><a href={APP} className="text-white/45 hover:text-white transition-colors">Log in</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-sm mb-4">Legal</h4>
            <ul className="space-y-2.5 text-sm">
              <li><Link to="/impressum/" className="text-white/45 hover:text-white transition-colors">Imprint</Link></li>
              <li><Link to="/privacy/" className="text-white/45 hover:text-white transition-colors">Privacy</Link></li>
              <li><Link to="/terms/" className="text-white/45 hover:text-white transition-colors">Terms</Link></li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-7 border-t border-white/8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/35">© {new Date().getFullYear()} PeakForce OÜ · Prometheus</p>
          <p className="text-xs text-white/35">Built by Peakforce Solutions</p>
        </div>
      </div>
    </footer>
  )
}
