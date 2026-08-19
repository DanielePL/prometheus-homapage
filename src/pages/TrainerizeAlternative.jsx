import { Head } from 'vite-react-ssg'
import { Link } from 'react-router-dom'
import { ArrowRight, Check, X } from 'lucide-react'
import { Section, SectionHeader, Reveal } from '../components/site/Section'
import { HomeNav, HomeFooter } from '../components/home/HomeChrome'
import { SIGNUP, PRICING } from '../lib/links'

/* The page that answers "trainerize alternative" — 6'600 searches a month, and
 * the query with the clearest buying intent in the whole category: nobody types
 * it who is not already looking to switch.
 *
 * It is also how we get quoted. The AI answers that now sit above the results
 * (DuckDuckGo's Search Assist, Google's AI Overview, ChatGPT) reproduce a table
 * of free tier / monthly cost / notable features. They can only do that from
 * pages that state those three things in plain, extractable prose. So this page
 * says them outright, in that order, and repeats them as JSON-LD.
 *
 * What this page deliberately does not do: describe Trainerize, or the field in
 * general. Under EU comparative-advertising rules a comparison counts as one
 * even when the competitor is identified only by implication — and on a page
 * with this title, "software that charges extra for nutrition" identifies
 * somebody. So every claim here is about us: what we include, what we charge,
 * and what we do not have. The reader is asked to add up his own bill and
 * compare, which is both the stronger argument and the one that cannot age
 * into a false statement.
 *
 * Naming the product in the title is nominative use and is fine. In an ad text
 * the name stays forbidden — that is a trademark problem, not a copy choice.
 */

const facts = [
  ['Free tier', 'No. 14-day trial, no card required.'],
  ['Monthly cost', '$19 to $89, by how many clients you coach. $79 for a studio.'],
  ['Nutrition', 'Included — plans, macros, your own food library.'],
  ['Video review', 'Included — with annotations.'],
  ['Video calls', 'Included, built in.'],
  ['Payments', 'Included — invoices, subscriptions, recurring billing.'],
  ['Client app', 'iPhone and Android, free for every client you coach.'],
  ['Sales assistant', 'Included — follows up on enquiries and flags clients who are drifting.'],
]

const faq = [
  {
    q: 'How much does Prometheus cost?',
    a: 'From $19 a month for up to 5 clients, rising to $89 a month for up to 70. A single studio is $79 a month. Paying yearly gives you two months free. Every feature is in every plan — you pay for how many clients you coach, not for which parts of the product you may open.',
  },
  {
    q: 'Is there a free plan?',
    a: 'No. There is a 14-day trial and it does not ask for a card. We would rather charge properly and support the people who pay than run a free tier nobody is accountable for.',
  },
  {
    q: 'Do my clients have to pay for the app?',
    a: 'No. The client app is free on iPhone and Android for every client you coach, for as long as you coach them.',
  },
  {
    q: 'Is nutrition an add-on?',
    a: 'No. Nutrition planning, macro tracking and your own food library are in every plan, as are video review with annotations, built-in video calls and invoicing. There is no tier that unlocks them.',
  },
  {
    q: 'Can I run a gym or studio on it?',
    a: 'A single location, yes — Studio Light adds check-in at the door, class scheduling and bookings, memberships, point of sale, shifts and bookkeeping to the same account, for $79 a month. Multi-site chains with a head office are a separate product that is still in testing.',
  },
  {
    q: 'Can I move my clients over?',
    a: 'Yes. Client records and programmes can be imported, so you are not retyping a roster to switch.',
  },
]

export default function TrainerizeAlternative() {
  /* Repeated as structured data because that is what gets read by machines —
     the same numbers as above, never a second set. */
  const ld = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'SoftwareApplication',
        name: 'Prometheus Coach',
        applicationCategory: 'BusinessApplication',
        operatingSystem: 'Web, iOS, Android',
        url: 'https://prometheus.coach/',
        description:
          'Coaching software with programming, nutrition, video review, built-in video calls, payments and a sales assistant in one account. The client app is free for every client.',
        offers: {
          '@type': 'AggregateOffer',
          priceCurrency: 'USD',
          lowPrice: '19',
          highPrice: '89',
          offerCount: '10',
          url: 'https://prometheus.coach/#pricing',
        },
      },
      {
        '@type': 'FAQPage',
        mainEntity: faq.map((f) => ({
          '@type': 'Question',
          name: f.q,
          acceptedAnswer: { '@type': 'Answer', text: f.a },
        })),
      },
    ],
  }

  return (
    <>
      <Head>
        <html lang="en" />
        <title>Prometheus — a Trainerize alternative with everything included</title>
        <meta
          name="description"
          content="Programming, nutrition, video review, video calls, payments and a sales assistant in one plan. $19–$89 a month by client count, no add-on fees, free client app. 14-day trial, no card."
        />
        <link rel="canonical" href="https://prometheus.coach/trainerize-alternative/" />
        <meta property="og:title" content="Prometheus — a Trainerize alternative with everything included" />
        <meta
          property="og:description"
          content="Everything in one plan: programming, nutrition, video review, calls, payments. $19–$89 a month by client count."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://prometheus.coach/trainerize-alternative/" />
        <meta property="og:image" content="https://prometheus.coach/images/hero-bg.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <script type="application/ld+json">{JSON.stringify(ld)}</script>
      </Head>

      <div className="min-h-screen bg-dark text-white relative overflow-hidden font-body">
        <div className="fixed inset-0 pointer-events-none z-0">
          <div className="absolute top-[12%] left-[-15%] w-[50%] h-[600px] bg-accent/[0.04] rounded-full blur-[200px]" />
          <div className="absolute top-[60%] right-[-15%] w-[50%] h-[700px] bg-accent/[0.03] rounded-full blur-[200px]" />
        </div>

        <div className="relative z-10">
          <HomeNav />

          <Section className="pt-32 lg:pt-44 pb-14" width="narrow">
            <Reveal>
              <p className="eyebrow text-accent mb-5">Switching</p>
              <h1 className="display text-4xl sm:text-6xl lg:text-7xl leading-[1.05]">
                Looking for a Trainerize alternative?{' '}
                <span className="display-italic opacity-70">Here is ours, in plain numbers.</span>
              </h1>
              <p className="mt-7 text-lg text-white/60 leading-relaxed max-w-2xl">
                Most coaches who go looking are not unhappy with the training features.
                They are tired of running four subscriptions to coach one client. Here is
                what ours costs and what is in it — no sign-up needed to read it.
              </p>
              <div className="mt-9 flex flex-col sm:flex-row gap-3.5">
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
            </Reveal>
          </Section>

          {/* The three columns an AI answer reproduces, stated once, plainly. */}
          <Section tone="raised" className="border-t border-white/5" width="narrow">
            <SectionHeader
              align="left"
              eyebrow="The short version"
              title="What Prometheus costs"
              accent="and what is in it."
            />
            <Reveal delay={0.06} className="mt-10 glass rounded-3xl overflow-hidden">
              <dl>
                {facts.map(([k, v], i) => (
                  <div
                    key={k}
                    className={`grid sm:grid-cols-[13rem_1fr] gap-1 sm:gap-6 px-6 sm:px-8 py-5 ${
                      i ? 'border-t border-white/8' : ''
                    }`}
                  >
                    <dt className="text-sm font-semibold text-accent/90">{k}</dt>
                    <dd className="text-white/70 leading-relaxed">{v}</dd>
                  </div>
                ))}
              </dl>
            </Reveal>
          </Section>

          <Section width="narrow">
            <SectionHeader
              align="left"
              eyebrow="The actual difference"
              title="One number,"
              accent="and it is the one you pay."
            />
            <Reveal delay={0.06} className="mt-7 space-y-5 text-lg text-white/60 leading-relaxed">
              <p>
                Everything in the list above is in every plan. There is no tier that unlocks
                nutrition, no upgrade for video review, no percentage on what your clients
                pay you, and no separate line for the app they use.
              </p>
              <p>
                Whether that works out cheaper for you, we cannot tell you — it depends on
                what you use. Add up what you pay today across every tool and subscription,
                then compare that figure with ours. That is the only comparison worth making,
                and it is one you can do yourself in ten minutes.
              </p>
            </Reveal>

            <Reveal delay={0.12} className="mt-10 grid sm:grid-cols-2 gap-5">
              <div className="glass rounded-3xl p-7">
                <h3 className="display text-2xl mb-4">Worth switching for</h3>
                {[
                  'You pay for nutrition or video separately today',
                  'You want calls, feedback and programming in one thread',
                  'Enquiries go cold because follow-up is manual',
                  'You coach internationally and payments are a mess',
                  'You also run a studio floor',
                ].map((l) => (
                  <div key={l} className="flex items-start gap-2.5 mt-3">
                    <Check size={17} className="text-accent shrink-0 mt-1" />
                    <span className="text-white/70 leading-snug">{l}</span>
                  </div>
                ))}
              </div>

              {/* Naming who it is not for is the fastest way to be believed by
                  someone who has read four vendor pages already. */}
              <div className="glass rounded-3xl p-7">
                <h3 className="display text-2xl mb-4">Not worth switching for</h3>
                {[
                  'You need a permanently free plan — we do not have one',
                  'You want your own white-labelled app in the stores',
                  'You coach two clients and a spreadsheet still works',
                  'You run a multi-site chain — that product is still in testing',
                ].map((l) => (
                  <div key={l} className="flex items-start gap-2.5 mt-3">
                    <X size={17} className="text-white/30 shrink-0 mt-1" />
                    <span className="text-white/50 leading-snug">{l}</span>
                  </div>
                ))}
              </div>
            </Reveal>
          </Section>

          <Section tone="raised" className="border-t border-white/5" width="narrow">
            <SectionHeader align="left" eyebrow="Questions" title="Asked before" accent="switching." />
            <div className="mt-10 space-y-4">
              {faq.map((f, i) => (
                <Reveal key={f.q} delay={i * 0.05} className="glass rounded-2xl p-6">
                  <h3 className="font-semibold text-lg">{f.q}</h3>
                  <p className="mt-2.5 text-white/60 leading-relaxed">{f.a}</p>
                </Reveal>
              ))}
            </div>
          </Section>

          <Section width="narrow" className="text-center">
            <Reveal>
              <h2 className="display text-4xl sm:text-5xl lg:text-6xl leading-tight">
                Move one client over.
              </h2>
              <p className="mt-6 text-lg text-white/60 leading-relaxed max-w-xl mx-auto">
                Not the whole roster — one. If the week runs better, move the rest. Fourteen
                days, no card.
              </p>
              <a
                href={SIGNUP}
                className="mt-9 inline-flex items-center justify-center gap-2 px-7 h-14 rounded-xl bg-accent text-white font-semibold hover:bg-accent-light transition-all hover:shadow-[0_0_36px_rgba(230,126,34,0.45)]"
              >
                Start free — 14 days, no card <ArrowRight size={18} />
              </a>
              <p className="mt-8 text-sm text-white/40">
                Running a studio as well?{' '}
                <Link to="/studios/" className="text-accent hover:text-accent-light underline underline-offset-4">
                  See Studio Light
                </Link>
                .
              </p>
            </Reveal>
          </Section>

          <HomeFooter />
        </div>
      </div>
    </>
  )
}
