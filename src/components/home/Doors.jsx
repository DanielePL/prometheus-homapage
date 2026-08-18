import { Link } from 'react-router-dom'
import { User, Globe2, Store, ArrowRight } from 'lucide-react'
import { Section, SectionHeader, Reveal } from '../site/Section'
import { SIGNUP } from '../../lib/links'

/* Three doors, replacing the old chooser ("I run a studio or a chain / I coach
 * / I am a member"). The chain is gone — Enterprise is parked — and a member is
 * not who this page is for.
 *
 * The studio door is deliberately three lines with a link out. Its detail lives
 * on /studios, because a full studio block here would drag a second vocabulary
 * (check-in, memberships, point of sale) onto a page that has to rank for
 * coaching. One page, one intent.
 */

const doors = [
  {
    icon: User,
    name: 'One to one',
    who: 'Personal trainers on the floor',
    body: 'Your clients, your programmes, your invoices — on your phone between sessions, not at a desk afterwards.',
  },
  {
    icon: Globe2,
    name: 'Online coaching',
    who: 'Remote and hybrid coaches',
    body: 'Asynchronous check-ins, video review and clients anywhere. Six payment providers — Stripe, Wise, Revolut, dLocal, Razorpay, Xendit — so a client in Brazil, India or Indonesia can actually pay you.',
    highlight: true,
  },
  {
    icon: Store,
    name: 'Small studio or box',
    who: 'One location, a few trainers',
    body: 'Turn on Studio Light and the door, the class schedule, memberships and the till appear in the same account.',
    to: '/studios',
    linkLabel: 'See Studio Light',
  },
]

export default function Doors() {
  return (
    <Section id="doors">
      <SectionHeader
        align="left"
        eyebrow="Where you start"
        title="Whichever kind of coach"
        accent="you are."
        subline="Same account, same client list. What changes is how much of it you switch on."
      />

      <div className="mt-14 grid lg:grid-cols-3 gap-5">
        {doors.map((d, i) => (
          <Reveal
            key={d.name}
            delay={i * 0.07}
            y={26}
            className={`rounded-3xl p-7 lg:p-8 flex flex-col ${
              d.highlight ? 'glass-strong border-accent/40 shadow-[0_0_50px_rgba(230,126,34,0.12)]' : 'glass'
            }`}
          >
            <div
              className={`w-12 h-12 rounded-xl flex items-center justify-center mb-5 ${
                d.highlight
                  ? 'bg-accent text-white shadow-[0_0_24px_rgba(230,126,34,0.35)]'
                  : 'bg-accent/12 border border-accent/25 text-accent'
              }`}
            >
              <d.icon size={22} />
            </div>

            <h3 className="display text-2xl">{d.name}</h3>
            <p className="text-sm text-accent/90 font-medium mt-1">{d.who}</p>
            <p className="mt-4 text-white/60 leading-relaxed flex-1">{d.body}</p>

            {d.to ? (
              <Link
                to={d.to}
                className="mt-7 h-12 rounded-xl glass hover:border-accent/40 font-semibold text-sm inline-flex items-center justify-center gap-2 transition-all"
              >
                {d.linkLabel} <ArrowRight size={16} />
              </Link>
            ) : (
              <a
                href={SIGNUP}
                className={`mt-7 h-12 rounded-xl font-semibold text-sm inline-flex items-center justify-center gap-2 transition-all ${
                  d.highlight
                    ? 'bg-accent text-white hover:bg-accent-light hover:shadow-[0_0_28px_rgba(230,126,34,0.4)]'
                    : 'glass hover:border-accent/40 text-white'
                }`}
              >
                Start free <ArrowRight size={16} />
              </a>
            )}
          </Reveal>
        ))}
      </div>
    </Section>
  )
}
