import { motion } from 'framer-motion'
import {
  Apple, Play, Dumbbell, UtensilsCrossed, Brain, QrCode, Gauge, Users, Check, Flame,
} from 'lucide-react'
import { Section } from './Section'

const features = [
  { icon: Dumbbell, label: 'Training tracken' },
  { icon: UtensilsCrossed, label: 'Ernährung & Makros' },
  { icon: Brain, label: 'KI-Coach' },
  { icon: Gauge, label: 'Bewegungsanalyse' },
  { icon: Users, label: 'Community' },
  { icon: QrCode, label: 'Gym-Login & Check-in' },
]

/* Tiers verified against AndroidStudioProjects/Prometheus/PRICING.md.
   The member pays these, never the operator. */
const tiers = [
  { name: 'Free', price: '$0', note: 'Übungsbibliothek, Tracking, Community' },
  { name: 'Premium', price: '$5.90', unit: '/ Mt.', note: 'Bewegungsanalyse oder Ernährung' },
  { name: 'Elite', price: '$9.90', unit: '/ Mt.', note: 'Beides plus KI-Coach', popular: true },
]

/* Three real app screens, fanned out like a hand of cards. */
const shots = [
  { src: '/images/screenshots/nutrition-daily-log-framed.png', alt: 'Ernährungstagebuch in der Mitglieder-App' },
  { src: '/images/screenshots/workout-session-framed.png', alt: 'Laufende Trainingseinheit in der Mitglieder-App' },
  { src: '/images/screenshots/coach-ai-framed.png', alt: 'KI-Coach in der Mitglieder-App' },
]

export default function MemberSection() {
  return (
    <Section id="mitglied" className="border-t border-white/5">
      <div className="glass-strong rounded-3xl p-8 lg:p-12 relative overflow-hidden">
        <div className="absolute -top-10 -right-10 w-80 h-80 bg-accent/10 blur-[90px] rounded-full pointer-events-none" />

        <div className="relative grid lg:grid-cols-[1.05fr_0.95fr] gap-10 lg:gap-14 items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-accent mb-4">
              Für Mitglieder & alle, die trainieren
            </p>
            <h2 className="font-display text-3xl lg:text-4xl font-bold tracking-tight leading-tight">
              Hier hat alles angefangen.
            </h2>
            <p className="mt-5 text-lg text-white/60 leading-relaxed max-w-xl">
              Die etablierten Anbieter haben den Aktenschrank digitalisiert. Wir haben bei der
              App in der Hand des Mitglieds angefangen und das Studio rückwärts von dort gebaut.
              Deshalb ist die Mitgliedererfahrung zero-touch — weil sie der Ausgangspunkt war.
            </p>
            <p className="mt-4 text-white/55 leading-relaxed max-w-xl">
              Die App funktioniert eigenständig, ganz ohne Studio. Und für Mitglieder eines
              Prometheus-Betriebs ist sie zugleich Gym-Login, QR-Check-in und Buchungs-App.
            </p>

            <div className="mt-7 grid grid-cols-2 sm:grid-cols-3 gap-2.5 max-w-lg">
              {features.map((f) => (
                <div key={f.label} className="glass rounded-xl p-3 flex items-center gap-2.5">
                  <f.icon size={16} className="text-accent shrink-0" />
                  <span className="text-xs text-white/70 leading-tight">{f.label}</span>
                </div>
              ))}
            </div>

            {/* Freemium ladder — the member pays, not the gym */}
            <div className="mt-8">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/40 mb-3">
                Kostenlos starten
              </p>
              <div className="grid sm:grid-cols-3 gap-2.5 max-w-lg">
                {tiers.map((t) => (
                  <div
                    key={t.name}
                    className={`rounded-xl px-3.5 py-3 ${
                      t.popular ? 'glass border-accent/40' : 'glass'
                    }`}
                  >
                    <p className="font-display font-semibold text-sm">{t.name}</p>
                    <p className="mt-1 flex items-baseline gap-1">
                      <span className="font-display text-lg font-bold text-white/90">{t.price}</span>
                      {t.unit && <span className="text-[11px] text-white/40">{t.unit}</span>}
                    </p>
                    <p className="mt-1.5 text-[11px] text-white/45 leading-tight">{t.note}</p>
                  </div>
                ))}
              </div>

              <div className="mt-3 flex items-start gap-2.5 rounded-xl bg-accent/8 border border-accent/20 px-3.5 py-3 max-w-lg">
                <Flame size={15} className="text-accent shrink-0 mt-0.5" />
                <p className="text-xs text-white/70 leading-relaxed">
                  <span className="font-semibold text-white/90">Titan · $199 einmalig.</span>{' '}
                  Lebenslang, auf 500 Plätze begrenzt — für die, die von Anfang an dabei sind.
                </p>
              </div>

              <p className="mt-3 flex items-center gap-2 text-xs text-white/40">
                <Check size={13} className="text-accent shrink-0" />
                Zahlt das Mitglied selbst. Für den Betrieb entstehen keine Kosten.
              </p>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="https://play.google.com/store/apps/details?id=prometheus.coach&pcampaignid=web_share"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-5 h-14 rounded-xl bg-white text-black font-semibold hover:bg-white/90 transition-colors"
              >
                <Play size={22} className="fill-black" />
                <span className="text-left leading-tight">
                  <span className="block text-[10px] font-normal text-black/60">Jetzt bei</span>
                  Google Play
                </span>
              </a>
              <div className="inline-flex items-center gap-3 px-5 h-14 rounded-xl glass text-white/60">
                <Apple size={22} />
                <span className="text-left leading-tight">
                  <span className="block text-[10px] font-normal text-white/40">App Store</span>
                  In Kürze
                </span>
              </div>
            </div>
          </div>

          {/* Fanned phones as 3D device mockups — the reference-clip look.
              Each phone is tilted in perspective, floats over a contact shadow,
              and the whole fan scales down instead of overflowing on mobile. */}
          <div className="device-stage relative flex justify-center items-center min-h-[360px] sm:min-h-[430px] lg:min-h-[470px] scale-[0.7] sm:scale-90 lg:scale-100 origin-center">
            <div className="absolute inset-0 bg-accent/12 blur-[80px] rounded-full pointer-events-none" />
            {shots.map((s, i) => {
              const offset = i - 1
              const isCentre = offset === 0
              return (
                <motion.div
                  key={s.src}
                  initial={{ opacity: 0, y: 34 }}
                  whileInView={{ opacity: 1, y: isCentre ? 0 : 30 }}
                  viewport={{ once: true, margin: '-60px' }}
                  transition={{ duration: 0.6, delay: 0.1 + i * 0.1, ease: 'easeOut' }}
                  style={{
                    zIndex: isCentre ? 3 : 1,
                    marginLeft: offset * 150,
                    transform: `rotateY(${offset * -22}deg) rotateZ(${offset * 3}deg)`,
                  }}
                  className="absolute device-float"
                >
                  <div className={`phone-shell ${isCentre ? 'w-[192px]' : 'w-[164px] opacity-90'}`}>
                    <div className="device-shadow" />
                    <div className="phone-screen">
                      <div className="phone-island" />
                      <img src={s.src} alt={s.alt} loading="lazy" />
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </Section>
  )
}
