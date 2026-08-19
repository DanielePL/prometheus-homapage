import { Head } from 'vite-react-ssg'
import {
  ArrowRight, ScanLine, CalendarDays, CreditCard,
  ShoppingBag, Users, Receipt, Check,
} from 'lucide-react'
import { Section, SectionHeader, Reveal } from '../components/site/Section'
import PhotoBreak from '../components/site/PhotoBreak'
import { HomeNav, HomeFooter } from '../components/home/HomeChrome'
import { SIGNUP_STUDIO, CONTACT } from '../lib/links'

/* /studios/ — with the trailing slash, and that matters.
 *
 * The host answers /studios (no slash) with the SPA catch-all, i.e. the
 * homepage, and only resolves /studios/ to this page's file. A visitor never
 * notices — React Router renders the right page either way once the bundle
 * loads — but the first response is all a crawler reads. So the canonical tag,
 * the sitemap entry and every internal link use the slashed form, which is the
 * one the server actually serves.
 *
 * /studios — the depth behind the "small studio" door on the homepage.
 *
 * Why this is a page and not another homepage section: the homepage has to rank
 * for coaching vocabulary (`coaching software`, `trainerize alternative`). A
 * full studio block drags in a second vocabulary — check-in, memberships, point
 * of sale, shifts — and a page that says two things half ranks for neither.
 * Split, each page owns one intent, and the homepage keeps a three-line door
 * that links here.
 *
 * In English, unlike the rest of the site, because the market is: 156'100
 * monthly searches against 250 in German (GROWTH_PLAN §3). The homepage follows.
 *
 * The line this page must not cross: Studio Light is a switch inside the Coach
 * product, not a gym-management suite. Enterprise — chains, head office,
 * regional rollup — is parked and only appears here as one honest sentence
 * inviting pilot studios. Blurring the two is exactly what the current German
 * homepage does ("Ich führe ein Studio oder eine Kette"), and why it is being
 * rewritten.
 */

/* Six surfaces, in the order a studio owner meets them on an ordinary day:
   the door, the schedule, the money coming in, the counter, the staff, the
   books. Not ordered by how impressive they are to build. */
const surfaces = [
  {
    icon: ScanLine,
    title: 'Check-in at the door',
    body: 'A tablet by the entrance. Members check themselves in while you are still coaching the set you are in. Nobody waits at a desk for someone to look them up.',
  },
  {
    icon: CalendarDays,
    title: 'Classes and WODs',
    body: 'Schedule, bookings, waitlists. Members book in the app they already have, and a cancellation moves the next person up without you noticing it happened.',
  },
  {
    icon: CreditCard,
    title: 'Memberships',
    body: 'Recurring billing, renewals, and an honest answer to who is active, who lapsed and who is about to. The list is the same one your coaching side uses.',
  },
  {
    icon: ShoppingBag,
    title: 'Point of sale',
    body: 'Drinks, supplements, drop-ins. Sold against the member account, so the shake and the membership land in the same place instead of two.',
  },
  {
    icon: Users,
    title: 'Shifts',
    body: 'Who works when. Planned hours become payroll hours — the plan you already made is the timesheet, rather than something you retype at month end.',
  },
  {
    icon: Receipt,
    title: 'Invoices and books',
    body: 'Invoices go out, receipts are captured, and the bookkeeping is done as the month runs instead of in one bad evening after it.',
  },
]

export default function StudiosPage() {
  return (
    <>
      <Head>
        <html lang="en" />
        <title>Studio software for a single location · Prometheus Studio Light</title>
        <meta
          name="description"
          content="Check-in, class booking, memberships, point of sale, shifts and invoices — one switch in the Prometheus account you already coach from. $79 a month, 14-day trial, no card."
        />
        <link rel="canonical" href="https://prometheus.coach/studios/" />
        <meta property="og:title" content="Prometheus Studio Light — run the studio from the account you coach in" />
        <meta
          property="og:description"
          content="One studio, one account: check-in, classes, memberships, point of sale, shifts and books — alongside your programming, nutrition and video review."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://prometheus.coach/studios/" />
        {/* jpg rather than one of the .webp photos: X still renders webp
            previews inconsistently, and a link with no picture is a link
            nobody clicks. */}
        <meta property="og:image" content="https://prometheus.coach/images/hero-bg.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>

      <div className="min-h-screen bg-dark text-white relative overflow-hidden font-body">
        <div className="fixed inset-0 pointer-events-none z-0">
          <div className="absolute top-[10%] left-[-15%] w-[50%] h-[600px] bg-accent/[0.04] rounded-full blur-[200px]" />
          <div className="absolute top-[55%] right-[-15%] w-[50%] h-[700px] bg-accent/[0.03] rounded-full blur-[200px]" />
        </div>

        <div className="relative z-10">
          <HomeNav />

          {/* ── Hero ─────────────────────────────────────────────────────── */}
          <Section className="pt-32 lg:pt-44 pb-16 lg:pb-20" width="narrow">
            <Reveal>
              <p className="eyebrow text-accent mb-5">Studio Light</p>
              <h1 className="display text-4xl sm:text-6xl lg:text-7xl leading-[1.05]">
                Coach on the floor.{' '}
                <span className="display-italic opacity-70">Run the studio from the same account.</span>
              </h1>
              <p className="mt-7 text-lg text-white/60 leading-relaxed max-w-2xl">
                Check-in, class booking, memberships, point of sale, shifts and invoices —
                one switch in the Prometheus account you already coach from. Not a second
                system, not a second login, not a second member list.
              </p>

              <div className="mt-9 flex flex-col sm:flex-row gap-3.5">
                <a
                  href={SIGNUP_STUDIO}
                  className="inline-flex items-center justify-center gap-2 px-7 h-14 rounded-xl bg-accent text-white font-semibold hover:bg-accent-light transition-all hover:shadow-[0_0_36px_rgba(230,126,34,0.45)]"
                >
                  Start free — 14 days, no card <ArrowRight size={18} />
                </a>
                <a
                  href="#included"
                  className="inline-flex items-center justify-center px-7 h-14 rounded-xl glass hover:border-accent/40 font-semibold transition-all"
                >
                  What&rsquo;s included
                </a>
              </div>
            </Reveal>
          </Section>

          {/* ── The problem ──────────────────────────────────────────────── */}
          <Section tone="raised" className="border-t border-white/5" width="narrow">
            <SectionHeader
              align="left"
              eyebrow="Why this exists"
              title="Two systems, one member,"
              accent="twice the typing."
            />
            <Reveal delay={0.06} className="mt-7 max-w-2xl space-y-5 text-white/60 leading-relaxed text-lg">
              <p>
                Studio software assumes an administrator behind a desk. Coaching software
                assumes a coach with a client list. A small studio is both — usually the
                same person, often on the same afternoon.
              </p>
              <p>
                So the member gets entered twice, the two lists drift apart, and you find
                out at the worst possible moment: at the door, with the member standing
                in front of you, in a system that says their membership ended.
              </p>
            </Reveal>
          </Section>

          {/* ── What's included ──────────────────────────────────────────── */}
          <Section id="included">
            <SectionHeader
              align="left"
              eyebrow="Included"
              title="The studio side,"
              accent="in the order your day happens."
              subline="Turned on with one switch. Everything below is part of Studio Light — none of it is an add-on."
            />

            <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-3 gap-5">
              {surfaces.map((s, i) => (
                <Reveal key={s.title} delay={i * 0.06} y={24} className="glass rounded-3xl p-7 flex flex-col">
                  <div className="w-12 h-12 rounded-xl bg-accent/12 border border-accent/25 text-accent flex items-center justify-center mb-5">
                    <s.icon size={22} />
                  </div>
                  <h3 className="display text-2xl leading-tight">{s.title}</h3>
                  <p className="mt-3.5 text-white/60 leading-relaxed">{s.body}</p>
                </Reveal>
              ))}
            </div>

            {/* The coaching side is the reason a coach is on this page at all —
                stating it here prevents the page from reading as "gym admin
                software that also does training". */}
            <Reveal delay={0.1} y={24} className="mt-6 glass-strong rounded-3xl p-8 lg:p-10">
              <h3 className="display text-2xl lg:text-3xl leading-tight">
                And everything you coach with stays.
              </h3>
              <p className="mt-4 text-white/60 leading-relaxed max-w-2xl">
                Studio Light is added to the coaching product, not carved out of it. Nothing
                below is a separate plan.
              </p>
              <div className="mt-7 grid sm:grid-cols-2 gap-x-8 gap-y-3">
                {[
                  'Programming, periodisation and your exercise library',
                  'Nutrition plans, macros and your own food library',
                  'Video review with annotations and check-ins',
                  'Video calls, built in — not a link to somewhere else',
                  'The client app on iPhone and Android, free for every member',
                  'Invoices, subscriptions and recurring billing',
                ].map((f) => (
                  <div key={f} className="flex items-start gap-2.5">
                    <Check size={16} className="text-accent shrink-0 mt-1" />
                    <span className="text-white/70 leading-snug">{f}</span>
                  </div>
                ))}
              </div>
            </Reveal>
          </Section>

          <PhotoBreak
            src="/images/photos/box-empty.webp"
            focus="center 45%"
            statement="The work happens on the floor."
            accent="The software belongs there too — not in a back office."
          />

          {/* ── It's a switch ────────────────────────────────────────────── */}
          <Section tone="raised" className="border-t border-white/5" width="narrow">
            <SectionHeader
              align="left"
              eyebrow="How it turns on"
              title="It is a switch,"
              accent="not a migration."
            />
            <Reveal delay={0.06} className="mt-7 max-w-2xl space-y-5 text-white/60 leading-relaxed text-lg">
              <p>
                Studio Light is part of your Prometheus account rather than a product you
                buy next to it. Turn it on and the studio surfaces appear. Your clients,
                programmes and history stay exactly where they are.
              </p>
              <p>
                Nothing to import, nothing to reconcile, and no week spent typing your
                member list into a second place. Turn it off again and the studio side
                disappears — the coaching side never noticed.
              </p>
            </Reveal>
          </Section>

          {/* ── Honest about size ────────────────────────────────────────── */}
          <Section width="narrow">
            <SectionHeader
              align="left"
              eyebrow="Who it fits"
              title="Built for one location,"
              accent="and honest about it."
            />
            <Reveal delay={0.06} className="mt-7 max-w-2xl space-y-5 text-white/60 leading-relaxed text-lg">
              <p>
                One studio, a handful of trainers, a few hundred members — that is what
                Studio Light is for. A box, a boutique, a personal-training studio with a
                door that needs opening.
              </p>
              <p>
                Several sites, a head office and regional reporting is a different product:
                Prometheus Enterprise. It has been in stress testing with pilot studios for
                eight months. If you run a chain and would rather shape it than wait for it,{' '}
                <a
                  href={`${CONTACT}?subject=Enterprise%20pilot`}
                  className="text-accent hover:text-accent-light underline underline-offset-4"
                >
                  write to us
                </a>{' '}
                — we are taking a small number of pilots.
              </p>
            </Reveal>
          </Section>

          {/* ── Price ────────────────────────────────────────────────────── */}
          <Section tone="raised" className="border-t border-white/5" width="narrow">
            <Reveal className="glass-strong rounded-3xl p-9 lg:p-12 text-center">
              <p className="eyebrow text-accent mb-5">Price</p>
              <p className="display text-5xl lg:text-6xl">$79<span className="text-2xl text-white/50"> / month</span></p>
              <p className="mt-3 text-white/50">or $790 a year — two months free</p>
              <p className="mt-7 text-white/60 leading-relaxed max-w-xl mx-auto">
                One price for the studio. Every coaching feature is included, and your
                members never pay to use the app you coach them in.
              </p>
              <a
                href={SIGNUP_STUDIO}
                className="mt-9 inline-flex items-center justify-center gap-2 px-7 h-14 rounded-xl bg-accent text-white font-semibold hover:bg-accent-light transition-all hover:shadow-[0_0_36px_rgba(230,126,34,0.45)]"
              >
                Start free — 14 days, no card <ArrowRight size={18} />
              </a>
            </Reveal>
          </Section>

          {/* ── Final CTA ────────────────────────────────────────────────── */}
          <Section width="narrow" className="text-center">
            <Reveal>
              <h2 className="display text-4xl sm:text-5xl lg:text-6xl leading-tight">
                Try it on next week&rsquo;s schedule.
              </h2>
              <p className="mt-6 text-lg text-white/60 leading-relaxed max-w-xl mx-auto">
                Put one week of classes in and see whether the door starts running itself.
                That takes an evening and costs nothing.
              </p>
              <a
                href={SIGNUP_STUDIO}
                className="mt-9 inline-flex items-center justify-center gap-2 px-7 h-14 rounded-xl bg-accent text-white font-semibold hover:bg-accent-light transition-all hover:shadow-[0_0_36px_rgba(230,126,34,0.45)]"
              >
                Start free — 14 days, no card <ArrowRight size={18} />
              </a>
            </Reveal>
          </Section>

          <HomeFooter />
        </div>
      </div>
    </>
  )
}
