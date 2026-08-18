import { Dumbbell, Apple, MessageSquareText, Video, Receipt, Smartphone } from 'lucide-react'
import { Section, SectionHeader, Reveal } from '../site/Section'

/* The problem, then the answer — deliberately adjacent.
 *
 * The problem is stated in three sentences and no bullet list: a coach reading
 * a bulleted list of his own frustrations skims it. A paragraph he recognises
 * he finishes.
 *
 * The included grid is the counterpunch to add-on pricing, which is how the
 * competition prices nutrition, video and payments. It names no competitor:
 * comparative advertising is legal but only with current, provable prices, and
 * theirs change. Describing the pattern lands harder than a name anyway.
 */

const included = [
  {
    icon: Dumbbell,
    title: 'Training',
    body: 'Programmes, periodisation, your exercise library, reusable routines.',
  },
  {
    icon: Apple,
    title: 'Nutrition',
    body: 'Plans, macros and your own food library — not a separate subscription.',
  },
  {
    icon: MessageSquareText,
    title: 'Feedback',
    body: 'Video review with annotations, check-ins and messaging in one thread.',
  },
  {
    icon: Video,
    title: 'Video calls',
    body: 'Built in. Not a link to somewhere else that you paste by hand.',
  },
  {
    icon: Receipt,
    title: 'Payments',
    body: 'Invoices, subscriptions, recurring billing and the bookkeeping behind them.',
  },
  {
    icon: Smartphone,
    title: 'Your clients’ app',
    body: 'iPhone and Android, free for every client you coach.',
  },
]

export default function Included() {
  return (
    <>
      <Section tone="raised" className="border-t border-white/5" width="narrow">
        <SectionHeader
          align="left"
          eyebrow="The problem"
          title="You did not become a coach"
          accent="to copy numbers between apps."
        />
        <Reveal delay={0.06} className="mt-7 max-w-2xl space-y-5 text-lg text-white/60 leading-relaxed">
          <p>
            Programmes in one app, macros in another, feedback in a chat thread, calls on
            a link you paste by hand, invoices in a document you rewrite every month.
          </p>
          <p>
            Every handover is a place where something gets lost — and every one of them is
            time you cannot bill.
          </p>
        </Reveal>
      </Section>

      <Section id="included">
        <SectionHeader
          align="left"
          eyebrow="What you get"
          title="Everything included."
          accent="Not “available as an add-on”."
          subline="One price covers the list below. Nutrition is not an upgrade, video is not an upgrade, and your clients never pay to use the app you coach them in."
        />

        <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {included.map((f, i) => (
            <Reveal key={f.title} delay={i * 0.06} y={24} className="glass rounded-3xl p-7">
              <div className="w-12 h-12 rounded-xl bg-accent/12 border border-accent/25 text-accent flex items-center justify-center mb-5">
                <f.icon size={22} />
              </div>
              <h3 className="display text-2xl leading-tight">{f.title}</h3>
              <p className="mt-3.5 text-white/60 leading-relaxed">{f.body}</p>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.1} y={24} className="mt-6 grid lg:grid-cols-2 gap-5">
          <div className="rounded-3xl overflow-hidden border border-white/10">
            <img
              src="/images/coach/app-library.webp"
              alt="Building a programme from the exercise library"
              width="1400" height="876" loading="lazy" className="w-full"
            />
          </div>
          <div className="rounded-3xl overflow-hidden border border-white/10">
            <img
              src="/images/coach/app-invoices.webp"
              alt="Invoices and recurring billing inside the coaching app"
              width="1400" height="876" loading="lazy" className="w-full"
            />
          </div>
        </Reveal>
      </Section>
    </>
  )
}
