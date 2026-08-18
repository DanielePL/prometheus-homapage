import { ArrowRight } from 'lucide-react'
import { Reveal } from '../site/Section'
import { SIGNUP } from '../../lib/links'

/* The one line a coach has to recognise as his own within two seconds.
 *
 * Not "we are the operating system for fitness businesses" — that is what the
 * old German hero said, and it describes us rather than him. The pain is not
 * "I have no software", it is "I have five, and none of them talk to each
 * other". Everything else on the page argues from that sentence.
 *
 * The screenshot is the proof section. There is no adoption number to show
 * (seven coach accounts, zero coach-client links on 2026-08-18), and a small
 * number answers "does anyone use this?" with no. Showing the working product
 * answers the question a coach actually asks first: is this real, or a landing
 * page for something half-built.
 */
export default function Hero() {
  return (
    <section id="hero" className="relative pt-32 lg:pt-44 pb-16 lg:pb-24 px-5 sm:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="max-w-3xl">
          <Reveal>
            <p className="eyebrow text-accent mb-5">Coaching software</p>
            <h1 className="display text-4xl sm:text-6xl lg:text-7xl leading-[1.04]">
              Five tools, one client.{' '}
              <span className="display-italic opacity-70">That was never the plan.</span>
            </h1>
            <p className="mt-7 text-lg text-white/60 leading-relaxed max-w-2xl">
              Programming, nutrition, check-ins, video calls and payments in one place —
              so the work you sell is the work you actually do, not the admin around it.
            </p>

            <div className="mt-9 flex flex-col sm:flex-row gap-3.5">
              <a
                href={SIGNUP}
                className="inline-flex items-center justify-center gap-2 px-7 h-14 rounded-xl bg-accent text-white font-semibold hover:bg-accent-light transition-all hover:shadow-[0_0_36px_rgba(230,126,34,0.45)]"
              >
                Start free — 14 days, no card <ArrowRight size={18} />
              </a>
              <a
                href="#included"
                className="inline-flex items-center justify-center px-7 h-14 rounded-xl glass hover:border-accent/40 font-semibold transition-all"
              >
                See what&rsquo;s included
              </a>
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.12} y={30} className="mt-14 lg:mt-20 relative">
          {/* Glow behind the frame so the screenshot sits in the page instead of
              on top of it. */}
          <div className="absolute inset-x-[8%] top-10 bottom-10 bg-accent/10 blur-[120px] rounded-full pointer-events-none" />
          <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-[0_40px_120px_-30px_rgba(0,0,0,0.9)]">
            <img
              src="/images/coach/app-dashboard.webp"
              alt="The Prometheus coach dashboard: today's sessions, client activity and outstanding check-ins"
              width="2048"
              height="1282"
              className="w-full"
            />
          </div>
        </Reveal>
      </div>
    </section>
  )
}
