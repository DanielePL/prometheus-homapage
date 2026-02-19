import { useScrollAnimation } from '../hooks/useScrollAnimation'
import { Check } from 'lucide-react'

const PLAY_STORE_URL = 'https://play.google.com/store/apps/details?id=prometheus.coach&pcampaignid=web_share'

const plans = [
  {
    name: 'Free',
    price: '$0',
    period: '',
    desc: 'Core tracking',
    features: [
      'Training logging',
      'Basic nutrition tracking',
      'Community access',
      'No credit card required',
    ],
  },
  {
    name: 'Premium',
    price: '$5.90',
    period: '/month',
    yearlyPrice: '$59/year',
    desc: 'For serious athletes',
    highlight: true,
    features: [
      'Everything in Free',
      'AI coaching engine',
      'Nutrition OR Barbell tracking (computer vision)',
      'AI meal plans & shopping lists',
      'Priority support',
    ],
  },
  {
    name: 'Elite',
    price: '$9.90',
    period: '/month',
    yearlyPrice: '$99/year',
    desc: 'For competitive athletes',
    features: [
      'Everything in Premium',
      'Advanced VBT analytics',
      'Coach dashboard',
      'Training history export',
      'Wearable integrations',
    ],
  },
  {
    name: 'Titan',
    price: '$199',
    period: 'lifetime',
    desc: 'Limited to 500 users',
    accent: true,
    features: [
      'Everything in Elite — forever',
      'All future features included',
      'Founding member status',
      'No recurring payments',
    ],
  },
]

export default function FreeTrial() {
  const [ref, isVisible] = useScrollAnimation(0.1)

  return (
    <section id="trial" ref={ref} className="py-24 lg:py-32 relative">
      {/* Subtle gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent/[0.02] to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div
          className={`text-center mb-16 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-['Arimo'] uppercase mb-4">
            Experience Prometheus —{' '}
            <span className="text-accent">
              No Strings Attached
            </span>
          </h2>
          <p className="text-[#999] text-lg">
            Full access to every Prometheus application for 14 days
          </p>
        </div>

        {/* Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto mb-16">
          {plans.map((plan, i) => (
            <div
              key={plan.name}
              className={`relative rounded-2xl p-6 transition-all duration-500 ${
                plan.highlight
                  ? 'bg-gradient-to-b from-accent/10 to-dark-card border-2 border-accent/30 shadow-lg shadow-accent/10 sm:scale-105 z-10'
                  : plan.accent
                    ? 'bg-gradient-to-b from-accent/5 to-dark-card border border-accent/20 hover:border-accent/40'
                    : 'bg-dark-card border border-dark-border hover:border-dark-border/80'
              } ${
                isVisible
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: isVisible ? `${i * 100}ms` : '0ms' }}
            >
              {plan.highlight && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-accent text-white text-xs font-semibold rounded-full">
                  Most Popular
                </div>
              )}

              {plan.accent && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-accent/20 border border-accent/30 text-accent text-xs font-semibold rounded-full whitespace-nowrap">
                  Limited Edition
                </div>
              )}

              <div className="mb-6">
                <h3 className="text-lg font-bold mb-1">{plan.name}</h3>
                <p className="text-sm text-[#999]">{plan.desc}</p>
              </div>

              <div className="mb-1">
                <span className="text-4xl font-extrabold">{plan.price}</span>
                <span className="text-[#999] text-sm ml-1">{plan.period}</span>
              </div>
              {plan.yearlyPrice && (
                <p className="text-xs text-accent mb-5">{plan.yearlyPrice}</p>
              )}
              {!plan.yearlyPrice && <div className="mb-5" />}

              <ul className="space-y-3 mb-8">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm text-gray-300">
                    <Check size={16} className="text-accent shrink-0 mt-0.5" />
                    {f}
                  </li>
                ))}
              </ul>

              <a
                href={PLAY_STORE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className={`block w-full py-3 rounded-lg font-semibold text-sm text-center transition-all ${
                  plan.highlight || plan.accent
                    ? 'bg-accent text-white hover:shadow-[0px_2px_18px_0px_#F2721B]'
                    : 'bg-dark-light border border-dark-border text-white hover:border-accent/30 hover:bg-accent/5'
                }`}
              >
                {plan.price === '$0' ? 'Get Started' : 'Start Free Trial'}
              </a>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div
          className={`max-w-lg mx-auto text-center transition-all duration-700 delay-300 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <a
            href={PLAY_STORE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-10 py-4 bg-accent text-white font-bold rounded-lg text-base transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0px_2px_18px_0px_#F2721B]"
          >
            Download on Google Play
          </a>
          <p className="text-xs text-gray-600 mt-3">
            No credit card required. Cancel anytime.
          </p>
        </div>
      </div>
    </section>
  )
}
