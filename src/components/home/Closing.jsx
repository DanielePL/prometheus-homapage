import { Link } from 'react-router-dom'
import { ArrowRight, Check } from 'lucide-react'
import { Section, SectionHeader, Reveal } from '../site/Section'
import { SIGNUP, PRICING } from '../../lib/links'

/* The last three blocks: who built it, what it costs, and the ask.
 *
 * They live in one file because none of them is more than a screenful and they
 * only ever appear together, in this order, at the bottom of the homepage.
 */

/* Verified against prometheus_coach/src/integrations/stripe/config.ts on
   2026-08-18. Four rungs of a ten-rung ladder — the full ladder belongs on the
   pricing page, and printing ten near-identical numbers here reads as
   complication rather than choice. */
const tiers = [
  { clients: 5, price: 19 },
  { clients: 15, price: 35, popular: true },
  { clients: 30, price: 49 },
  { clients: 70, price: 89 },
]

export function Makers() {
  return (
    <Section width="narrow">
      <SectionHeader
        align="left"
        eyebrow="Who builds this"
        title="Built by coaches,"
        accent="not by a software company."
      />
      <Reveal delay={0.06} className="mt-7 max-w-2xl space-y-5 text-lg text-white/60 leading-relaxed">
        <p>
          We are coaches, sport scientists, developers and athletes. The training logic
          comes from people who have run the sessions, and the software from people who
          have shipped before.
        </p>
        <p>
          {/* No "founded by a world champion". The owner cut it himself: it makes the
              company depend on one person, and the first question a buyer asks is what
              happens when that person stops. */}
          That is also why nothing here is named after one person. You are buying
          software for your business, and it has to outlast any of us.
        </p>
      </Reveal>
    </Section>
  )
}

export function Pricing() {
  return (
    <Section id="pricing" tone="raised" className="border-t border-white/5">
      <SectionHeader
        eyebrow="Pricing"
        title="From $19 a month."
        accent="Every feature, every plan."
        subline="You pay for how many clients you coach — not for which parts of the product you are allowed to open."
      />

      <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {tiers.map((t, i) => (
          <Reveal
            key={t.clients}
            delay={i * 0.06}
            y={24}
            className={`rounded-3xl p-7 text-center ${
              t.popular ? 'glass-strong border-accent/40 shadow-[0_0_50px_rgba(230,126,34,0.12)]' : 'glass'
            }`}
          >
            <p className="text-sm text-white/50">up to {t.clients} clients</p>
            <p className="display text-5xl mt-2">
              ${t.price}
              <span className="text-base text-white/45 font-body"> /mo</span>
            </p>
          </Reveal>
        ))}
      </div>

      <Reveal delay={0.1} y={24} className="mt-6 glass-strong rounded-3xl p-8 lg:p-10">
        <div className="grid md:grid-cols-2 gap-x-10 gap-y-3">
          {[
            'Ten sizes between 5 and 70 clients — move up or down as you go',
            'Two months free when you pay yearly',
            'The client app is free for every client, on both platforms',
            'Running a studio? Studio Light is $79 a month, all in',
          ].map((l) => (
            <div key={l} className="flex items-start gap-2.5">
              <Check size={17} className="text-accent shrink-0 mt-1" />
              <span className="text-white/70 leading-snug">{l}</span>
            </div>
          ))}
        </div>

        <div className="mt-8 flex flex-col sm:flex-row gap-3.5">
          <a
            href={SIGNUP}
            className="inline-flex items-center justify-center gap-2 px-7 h-14 rounded-xl bg-accent text-white font-semibold hover:bg-accent-light transition-all hover:shadow-[0_0_36px_rgba(230,126,34,0.45)]"
          >
            Start free — 14 days, no card <ArrowRight size={18} />
          </a>
          <a
            href={PRICING}
            className="inline-flex items-center justify-center px-7 h-14 rounded-xl glass hover:border-accent/40 font-semibold transition-all"
          >
            See every plan
          </a>
        </div>

        <p className="mt-6 text-sm text-white/40 leading-relaxed">
          Prices in US dollars, the same everywhere. Studio owners:{' '}
          <Link to="/studios/" className="text-accent hover:text-accent-light underline underline-offset-4">
            what Studio Light adds
          </Link>
          .
        </p>
      </Reveal>
    </Section>
  )
}

export function FinalCta() {
  return (
    <Section width="narrow" className="text-center">
      <Reveal>
        <h2 className="display text-4xl sm:text-5xl lg:text-6xl leading-tight">
          Try it with one client.
        </h2>
        <p className="mt-6 text-lg text-white/60 leading-relaxed max-w-xl mx-auto">
          Set up a single client and see whether it saves you an evening. That takes a few
          minutes and costs nothing.
        </p>
        <a
          href={SIGNUP}
          className="mt-9 inline-flex items-center justify-center gap-2 px-7 h-14 rounded-xl bg-accent text-white font-semibold hover:bg-accent-light transition-all hover:shadow-[0_0_36px_rgba(230,126,34,0.45)]"
        >
          Start free — 14 days, no card <ArrowRight size={18} />
        </a>
      </Reveal>
    </Section>
  )
}
