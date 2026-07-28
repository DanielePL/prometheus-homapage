import { Dumbbell, Store, Building2, Check, ArrowRight, Database } from 'lucide-react'
import { Section, SectionHeader, Reveal } from './Section'
import { useDemoModal } from '../../context/DemoModalContext'

const entries = [
  {
    key: 'coach',
    icon: Dumbbell,
    name: 'Coach',
    who: 'Personal Trainer & Online-Coaches',
    pitch: 'Der eigene Arbeitsplatz — allein oder an ein Studio angebunden.',
    points: [
      'Eigene Klienten, Programme, Periodisierung',
      'Ernährung, Videoanalyse, Messaging',
      'Rechnungen und eigene Buchhaltung',
      'Web plus native Apps für iOS und Android',
    ],
    foot: 'Ein angestellter Coach wechselt mit demselben Login aus dem Studio in seinen Arbeitsplatz.',
  },
  {
    key: 'light',
    icon: Store,
    name: 'Studio Light',
    who: 'Einzelstudios, Boutiquen, CrossFit-Boxen',
    pitch: 'Der schlanke Betrieb für alle, die kein Ketten-Cockpit brauchen.',
    popular: true,
    points: [
      'WOD- und Kursplanung, Buchung, Wartelisten',
      'Kiosk-Check-in und Mitgliederverwaltung',
      'Kasse für Getränke, Supplements, Drop-ins',
      'Wiederkehrende Mitgliedschaften und Rechnungen',
    ],
    foot: 'Genau die Form, in der der internationale CrossFit-Kanal einsteigt.',
  },
  {
    key: 'enterprise',
    icon: Building2,
    name: 'Enterprise',
    who: 'Studios, Ketten und Gruppen',
    pitch: 'Der volle Stack — vom Tresen bis in die Konzernzentrale.',
    points: [
      'Club-Cockpit, Regionalebene, HQ-Rollup',
      'CEO-Pulse mit Kennzahlen der ganzen Gruppe',
      'Buchhaltung, Lohn, Schichten, Personal',
      'Kontrollgänge und Facility-Score je Standort',
    ],
    foot: 'Rechte werden in der Datenbank erzwungen, nicht in der Oberfläche.',
  },
]

export default function EntryPoints() {
  const { openDemo } = useDemoModal()

  return (
    <Section id="einstieg" tone="raised" className="border-t border-white/5">
      <SectionHeader
        align="left"
        eyebrow="Drei Einstiegspunkte"
        title="Steigen Sie dort ein, wo Sie stehen."
        accent="Wachsen Sie ohne Umzug."
        subline="Dasselbe Backend, dieselbe Identität, drei Größen. Wer klein anfängt und groß wird, wechselt die Stufe — nicht das System."
      />

      <div className="mt-14 grid lg:grid-cols-3 gap-5">
        {entries.map((e, i) => (
          <Reveal
            key={e.key}
            delay={i * 0.07}
            y={26}
            className={`relative rounded-3xl p-7 lg:p-8 flex flex-col ${
              e.popular
                ? 'glass-strong border-accent/40 shadow-[0_0_50px_rgba(230,126,34,0.12)]'
                : 'glass'
            }`}
          >
            {e.popular && (
              <span className="absolute -top-3 left-8 px-3 py-1 rounded-full bg-accent text-white text-[11px] font-bold uppercase tracking-wider">
                CrossFit-Einstieg
              </span>
            )}

            <div
              className={`w-12 h-12 rounded-xl flex items-center justify-center mb-5 ${
                e.popular
                  ? 'bg-accent text-white shadow-[0_0_24px_rgba(230,126,34,0.35)]'
                  : 'bg-accent/12 border border-accent/25 text-accent'
              }`}
            >
              <e.icon size={22} />
            </div>

            <h3 className="display text-2xl">{e.name}</h3>
            <p className="text-sm text-accent/90 font-medium mt-1">{e.who}</p>
            <p className="mt-4 text-white/60 leading-relaxed">{e.pitch}</p>

            <div className="mt-6 space-y-2.5">
              {e.points.map((p) => (
                <div key={p} className="flex items-start gap-2.5">
                  <Check size={16} className="text-accent shrink-0 mt-0.5" />
                  <span className="text-sm text-white/70 leading-snug">{p}</span>
                </div>
              ))}
            </div>

            <p className="mt-6 pt-5 border-t border-white/8 text-xs text-white/45 leading-relaxed">
              {e.foot}
            </p>

            <button
              onClick={openDemo}
              className={`mt-6 w-full h-12 rounded-xl font-semibold text-sm inline-flex items-center justify-center gap-2 transition-all ${
                e.popular
                  ? 'bg-accent text-white hover:bg-accent-light hover:shadow-[0_0_28px_rgba(230,126,34,0.4)]'
                  : 'glass hover:border-accent/40 text-white'
              }`}
            >
              Demo buchen <ArrowRight size={16} />
            </button>
          </Reveal>
        ))}
      </div>

      {/* The ladder — the land-and-expand argument, made visual */}
      <Reveal delay={0.08} y={24} className="mt-6 glass-strong rounded-3xl p-8 lg:p-10 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[70%] h-56 bg-accent/8 blur-[100px] rounded-full pointer-events-none" />

        <div className="relative grid lg:grid-cols-[0.95fr_1.05fr] gap-8 lg:gap-12 items-center">
          <div>
            <h3 className="display text-2xl lg:text-3xl leading-tight">
              Die zweite Filiale kostet Sie kein Projekt.
            </h3>
            <p className="mt-4 text-white/60 leading-relaxed">
              Wer mit Studio Light anfängt und einen zweiten und dritten Standort eröffnet,
              steigt auf den vollen Enterprise-Stack um — auf demselben Backend, mit denselben
              Daten und derselben Identität. Keine Migration, keine Neuimplementierung, keine
              verlorene Historie. Das Produkt wächst mit dem Betrieb, statt von ihm
              herausgewachsen und ersetzt zu werden.
            </p>
          </div>

          {/* Ladder rungs converging on one core */}
          <div className="relative">
            <div className="space-y-3">
              {[
                { label: 'Coach', sub: 'ein Trainer, eigene Klienten', w: 'w-[62%]' },
                { label: 'Studio Light', sub: 'ein Standort', w: 'w-[80%]' },
                { label: 'Enterprise', sub: 'Kette, Region, Zentrale', w: 'w-full' },
              ].map((r, i) => (
                <Reveal
                  key={r.label}
                  delay={i * 0.08}
                  y={14}
                  className={`${r.w} ml-auto rounded-2xl glass px-5 py-4 flex items-center justify-between gap-4 border-accent/20`}
                >
                  <div className="min-w-0">
                    <p className="font-semibold leading-tight">{r.label}</p>
                    <p className="text-xs text-white/45 leading-tight mt-0.5">{r.sub}</p>
                  </div>
                  {i < 2 && (
                    <ArrowRight size={16} className="text-accent shrink-0 rotate-90" />
                  )}
                </Reveal>
              ))}
            </div>

            <div className="mt-5 flex items-center justify-center gap-3 rounded-2xl bg-accent/10 border border-accent/25 px-5 py-3.5">
              <Database size={18} className="text-accent shrink-0" />
              <span className="text-sm font-medium text-white/85">
                Ein Backend. Eine Identität. Kein Datenumzug.
              </span>
            </div>
          </div>
        </div>
      </Reveal>
    </Section>
  )
}
