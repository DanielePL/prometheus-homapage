import { Check, ArrowRight, Dumbbell, Store, Smartphone, Rocket, ShieldCheck, ArrowRightLeft } from 'lucide-react'
import { Section, SectionHeader, Reveal } from './Section'
import { useDemoModal } from '../../context/DemoModalContext'

/* Enterprise tiers — verified against Prometheus-Enterprise/src/config/plans.ts
   (Stripe-wired). EUR for DE/AT, CHF for CH — same number. */
const plans = [
  {
    name: 'Starter',
    price: '149',
    for: 'kleine Studios',
    members: 'bis 250 aktive Mitglieder',
    multi: false,
    popular: false,
  },
  {
    name: 'Studio',
    price: '249',
    for: 'etablierte Studios',
    members: 'bis 1’000 aktive Mitglieder',
    multi: false,
    popular: true,
  },
  {
    name: 'Pro',
    price: '399',
    for: 'Ketten & Multi-Standort',
    members: 'unbegrenzt aktive Mitglieder',
    multi: true,
    popular: false,
  },
]

const included = [
  'Mitglieder, Verträge, Abrechnung',
  'Kasse, Buchhaltung, Lohn',
  'Kurse, Buchung, Check-in',
  'Analytics & Churn-Prognose',
  'KI-Assistent',
  'White-Label & Priority-Support',
]

const others = [
  {
    icon: Dumbbell,
    name: 'Coach',
    price: 'ab $29',
    unit: '/ Monat',
    note: 'Gestaffelt nach Klientenzahl. Pro-Tarif mit KI-Coaching. 14 Tage kostenlos testen.',
  },
  {
    icon: Store,
    name: 'Studio Light',
    price: 'auf Anfrage',
    unit: '',
    note: 'Ein Standort, bis zehn Mitarbeitende. Der Einstieg für Boxen und Boutiquen.',
  },
  {
    icon: Smartphone,
    name: 'Mitglieder-App',
    price: 'kostenlos starten',
    unit: '',
    note: 'Zahlt das Mitglied selbst, nicht der Betrieb. Premium ab $5.90 im Monat.',
  },
]

export default function PricingSection() {
  const { openDemo } = useDemoModal()

  return (
    <Section id="preise" tone="light">
      <SectionHeader
        eyebrow="Preise"
        title="Ein Preis pro Größe."
        accent="Jede Funktion in jedem Plan."
        subline="Wir staffeln nicht nach Funktion, nur nach Größe. Analytics, Marketing, KI und Buchhaltung sind in jedem Plan enthalten. 30 Tage kostenlos testen, voller Funktionsumfang."
      />

      <p className="mt-10 text-center text-sm font-semibold uppercase tracking-[0.18em] text-accent">
        Enterprise
      </p>

      <div className="mt-6 grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {plans.map((p, i) => (
          <Reveal key={p.name} delay={i * 0.1}>
            <div
              className={`relative h-full rounded-2xl p-7 flex flex-col ${
                p.popular
                  ? 'glass-strong border-accent/45 shadow-[0_0_40px_rgba(230,126,34,0.15)]'
                  : 'glass'
              }`}
            >
              {p.popular && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-accent text-white text-xs font-semibold uppercase tracking-wide">
                  Beliebt
                </span>
              )}
              <h3 className="display text-xl">{p.name}</h3>
              <p className="text-sm text-white/50 mb-5">für {p.for}</p>

              <div className="flex items-end gap-1.5 mb-1">
                <span className="display text-4xl">{p.price}</span>
                <span className="text-sm text-white/50 mb-1.5">€ / CHF pro Monat</span>
              </div>
              <p className="text-sm text-white/60 mb-6">{p.members}</p>

              <div className="space-y-2.5 mb-6">
                {included.map((f) => (
                  <div key={f} className="flex items-start gap-2.5">
                    <Check size={16} className="text-accent shrink-0 mt-0.5" />
                    <span className="text-sm text-white/70 leading-snug">{f}</span>
                  </div>
                ))}
                <div className="flex items-start gap-2.5">
                  <Check
                    size={16}
                    className={`shrink-0 mt-0.5 ${p.multi ? 'text-accent' : 'text-white/20'}`}
                  />
                  <span className={`text-sm leading-snug ${p.multi ? 'text-white/70' : 'text-white/30'}`}>
                    {p.multi ? 'Multi-Standort — pro Standort abgerechnet' : 'Multi-Standort –'}
                  </span>
                </div>
              </div>

              <button
                onClick={openDemo}
                className={`mt-auto w-full h-12 rounded-xl font-semibold text-sm inline-flex items-center justify-center gap-2 transition-all ${
                  p.popular
                    ? 'bg-accent text-white hover:bg-accent-light hover:shadow-[0_0_28px_rgba(230,126,34,0.4)]'
                    : 'glass hover:border-accent/40 text-white'
                }`}
              >
                Demo buchen <ArrowRight size={16} />
              </button>
            </div>
          </Reveal>
        ))}
      </div>

      {/* The other two entry points + the member app */}
      <Reveal delay={0.15}>
        <div className="mt-6 grid md:grid-cols-3 gap-5 max-w-5xl mx-auto">
          {others.map((o) => (
            <div key={o.name} className="glass rounded-2xl p-6 flex flex-col">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-accent/12 border border-accent/20 flex items-center justify-center shrink-0">
                  <o.icon size={18} className="text-accent" />
                </div>
                <h4 className="font-bold">{o.name}</h4>
              </div>
              <div className="flex items-baseline gap-1.5 mb-3">
                <span className="display text-xl text-white/90">{o.price}</span>
                {o.unit && <span className="text-sm text-white/45">{o.unit}</span>}
              </div>
              <p className="text-sm text-white/55 leading-relaxed">{o.note}</p>
            </div>
          ))}
        </div>
      </Reveal>

      <p className="mt-8 text-center text-sm text-white/40 max-w-2xl mx-auto leading-relaxed">
        Enterprise wird in Euro abgerechnet, in der Schweiz in Franken zum gleichen Betrag.
        Coach und die Mitglieder-App rechnen in US-Dollar ab.
      </p>

      {/* The three points that used to be their own "Vertrauen" section. They
          belong next to the price, where the objections actually come up. */}
      <Reveal delay={0.2}>
        <div className="mt-14 pt-10 border-t border-white/8 grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {[
            {
              icon: Rocket,
              title: 'In 4 Tagen produktiv',
              desc: 'Ab Zusage, inklusive Lastschriftverfahren und Einrichtung Ihrer Standorte.',
            },
            {
              icon: ShieldCheck,
              title: 'DSGVO und revDSG',
              desc: 'Auf Datenbankebene erzwungen — nicht in App-Logik, die man umgehen kann.',
            },
            {
              icon: ArrowRightLeft,
              title: 'Migrationscenter',
              desc: 'Daten aus Ihrem alten System werden übernommen, ohne CSV-Export-Bastelei.',
            },
          ].map((p) => (
            <div key={p.title} className="flex gap-3.5">
              <div className="w-10 h-10 shrink-0 rounded-xl bg-accent/12 border border-accent/20 flex items-center justify-center">
                <p.icon size={18} className="text-accent" />
              </div>
              <div className="min-w-0">
                <h4 className="font-semibold text-sm leading-snug">{p.title}</h4>
                <p className="mt-1 text-sm text-white/55 leading-relaxed">{p.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </Reveal>
    </Section>
  )
}
