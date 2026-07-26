import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Building2, Network, Gauge, Monitor, Tablet, ClipboardSignature,
  Dumbbell, Smartphone, KeyRound,
} from 'lucide-react'
import { Section, SectionHeader } from './Section'

/* Every surface is a different door into the same backend. `frame` decides
   whether the screenshot renders in a browser chrome or a phone body. */
const SURFACES = [
  {
    key: 'hq',
    icon: Network,
    name: 'HQ',
    who: 'Inhaber & Zentrale',
    desc: 'Jeder Club nebeneinander, mit Mitgliedern, Umsatz und Besuchen — live, ohne Tabellenexport.',
    img: '/images/surfaces/dark-hq.webp',
    frame: 'browser',
    url: 'hq.prometheus.coach',
  },
  {
    key: 'management',
    icon: Building2,
    name: 'Studio-Management',
    who: 'Club-Leitung',
    desc: 'Das Tages-Cockpit: heutige Zahlen, ablaufende Mitgliedschaften, Sitzungen und offene Warnungen.',
    img: '/images/surfaces/dark-dashboard.webp',
    frame: 'browser',
    url: 'enterprise.prometheus.coach',
  },
  {
    key: 'ceo',
    icon: Gauge,
    name: 'CEO-Pulse',
    who: 'Geschäftsführung',
    desc: 'Die Kennzahlen der ganzen Gruppe in der Hosentasche, plus die Punkte, die einen zweiten Blick verdienen.',
    img: '/images/surfaces/dark-ceo.webp',
    frame: 'phone',
    url: 'gesichert per Einmalcode',
  },
  {
    key: 'desk',
    icon: Monitor,
    name: 'Empfangs-Terminal',
    who: 'Rezeption',
    desc: 'Die Woche auf einen Blick, mit schnellen Umschaltern für Personal, Coaches und Gruppenkurse.',
    img: '/images/surfaces/dark-desk.webp',
    frame: 'browser',
    url: 'desk.prometheus.coach',
  },
  {
    key: 'coach',
    icon: Dumbbell,
    name: 'Coach-Tagesansicht',
    who: 'Trainer',
    desc: 'Die eigenen Sitzungen und Beratungen der Woche, ein Griff zum Ergänzen.',
    img: '/images/surfaces/dark-coach.webp',
    frame: 'browser',
    url: 'enterprise.prometheus.coach',
  },
  {
    key: 'onboard',
    icon: ClipboardSignature,
    name: 'Onboarding-Tablet',
    who: 'Am Tresen',
    desc: 'Stammdaten, Anamnese, Foto, Vertrag und Unterschrift — ein Ablauf, kein Blatt Papier.',
    img: '/images/surfaces/dark-onboard.webp',
    frame: 'browser',
    url: 'Tablet am Empfang',
  },
  {
    key: 'welcome',
    icon: Tablet,
    name: 'Welcome-Tablet',
    who: 'Personal',
    desc: 'Schichtbeginn per QR oder PIN, mit Rollenkacheln von der Rezeption bis zur Reinigung.',
    img: '/images/surfaces/dark-welcome.webp',
    frame: 'browser',
    url: 'Tablet im Personalbereich',
  },
  {
    key: 'kiosk',
    icon: KeyRound,
    name: 'Kiosk & Kursanzeige',
    who: 'Mitglieder',
    desc: 'Rotierender QR für den Selbst-Check-in, die Kurse des Tages und was gerade läuft.',
    img: '/images/surfaces/dark-kiosk.webp',
    frame: 'browser',
    url: 'Bildschirm im Eingang',
  },
  {
    key: 'mobile',
    icon: Smartphone,
    name: 'Mitglieder-App',
    who: 'Mitglieder',
    desc: 'Training, Ernährung, KI-Coach, Kursbuchung und Check-in — iOS und Android.',
    img: '/images/screenshots/workout-session-framed.png',
    frame: 'phone',
    url: 'App Store & Google Play',
  },
]

function BrowserChrome({ url, children }) {
  return (
    <div className="rounded-2xl overflow-hidden glass-strong shadow-[0_30px_80px_rgba(0,0,0,0.6)]">
      <div className="flex items-center gap-1.5 px-4 py-3 border-b border-white/8">
        <div className="w-2.5 h-2.5 rounded-full bg-red-500/40" />
        <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/40" />
        <div className="w-2.5 h-2.5 rounded-full bg-green-500/40" />
        <div className="flex-1 mx-4 h-5 rounded bg-white/5 flex items-center px-2.5">
          <span className="text-[10px] text-white/35 truncate">{url}</span>
        </div>
      </div>
      {children}
    </div>
  )
}

export default function SurfacesSection() {
  const [active, setActive] = useState(SURFACES[0])

  return (
    <Section id="oberflaechen" className="border-t border-white/5">
      <SectionHeader
        eyebrow="Neun Eingänge, ein System"
        title="Vom Empfangstablet bis zur Geschäftsleitung —"
        accent="jeder sieht seinen Ausschnitt."
        subline="Dieselbe Software, eine andere Tür je nach Rolle. Ein Login trägt durch alle Oberflächen; wer was sieht, entscheidet die Datenbank."
      />

      <div className="mt-14 grid lg:grid-cols-[0.85fr_1.15fr] gap-8 lg:gap-10 items-start">
        {/* Surface picker */}
        <div className="space-y-2">
          {SURFACES.map((s) => {
            const on = active.key === s.key
            return (
              <button
                key={s.key}
                onClick={() => setActive(s)}
                className={`w-full text-left rounded-2xl px-4 py-3.5 flex items-center gap-3.5 transition-all ${
                  on
                    ? 'glass-strong border-accent/40 shadow-[0_0_24px_rgba(230,126,34,0.12)]'
                    : 'glass hover:border-white/20'
                }`}
              >
                <div
                  className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 transition-colors ${
                    on ? 'bg-accent text-white' : 'bg-white/[0.06] text-accent'
                  }`}
                >
                  <s.icon size={18} />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="font-display font-semibold text-sm leading-tight">{s.name}</p>
                  <p className="text-xs text-white/45 leading-tight mt-0.5">{s.who}</p>
                </div>
                {on && <div className="w-1.5 h-1.5 rounded-full bg-accent shrink-0" />}
              </button>
            )
          })}
        </div>

        {/* Selected surface */}
        <div className="lg:sticky lg:top-28">
          <AnimatePresence mode="wait">
            <motion.div
              key={active.key}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.35, ease: 'easeOut' }}
            >
              <div className="relative">
                <div className="absolute -inset-6 bg-accent/10 blur-[80px] rounded-full pointer-events-none" />

                {active.frame === 'phone' ? (
                  <div className="device-stage relative flex justify-center py-4">
                    <div className="device-float phone-shell w-[236px]">
                      <div className="device-shadow" />
                      <div className="phone-screen">
                        <div className="phone-island" />
                        <img src={active.img} alt={`${active.name} — ${active.who}`} />
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="relative">
                    <BrowserChrome url={active.url}>
                      <img
                        src={active.img}
                        alt={`${active.name} — ${active.who}`}
                        className="w-full h-auto block"
                      />
                    </BrowserChrome>
                  </div>
                )}
              </div>

              <div className="mt-6 flex items-start gap-3">
                <span className="shrink-0 mt-0.5 px-2.5 py-1 rounded-full bg-accent/15 text-accent text-[11px] font-semibold">
                  {active.who}
                </span>
                <p className="text-white/60 leading-relaxed">{active.desc}</p>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      <p className="mt-12 text-center text-sm text-white/40 max-w-2xl mx-auto leading-relaxed">
        Ein Coach, der zugleich Mitglied ist. Eine Leitung, die zugleich coacht. Eine Person,
        ein Login — und an jedem Ort die richtige Ansicht.
      </p>
    </Section>
  )
}
