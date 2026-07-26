import { motion } from 'framer-motion'
import { Lightbulb, Radio, Wifi, Cpu, KeyRound } from 'lucide-react'
import { Section } from './Section'

const zones = [
  { name: 'Freihantelbereich', level: 82, scene: 'Peak Hour' },
  { name: 'Kursraum 1', level: 45, scene: 'Yoga · warm' },
  { name: 'Cardio-Fläche', level: 70, scene: 'Tageslicht' },
  { name: 'Empfang', level: 60, scene: 'Willkommen' },
]

const rails = [
  { icon: Radio, label: 'DMX / Art-Net', sub: 'professionelle Lichttechnik' },
  { icon: Cpu, label: 'Zigbee', sub: 'über lokalen Hub' },
  { icon: Wifi, label: 'Shelly WLAN', sub: 'Schaltaktoren' },
]

export default function LedProSection() {
  return (
    <Section id="ledpro" className="border-t border-white/5">
      <div className="glass-strong rounded-3xl p-8 lg:p-12 relative overflow-hidden">
        <div className="absolute -top-20 -left-20 w-96 h-96 bg-accent/10 blur-[110px] rounded-full pointer-events-none" />

        <div className="relative grid lg:grid-cols-[1.05fr_0.95fr] gap-10 lg:gap-14 items-center">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Lightbulb size={16} className="text-accent" />
              <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-accent">
                Aus demselben Haus
              </span>
            </div>

            <h2 className="font-display text-3xl lg:text-4xl font-bold tracking-tight leading-tight">
              Wir steuern nicht nur den Betrieb.<br />
              <span className="text-accent">Wir steuern auch das Licht.</span>
            </h2>

            <p className="mt-5 text-lg text-white/60 leading-relaxed">
              LED Pro ist unser zweites Produkt: die Lichtsteuerung für Studios und
              Wellness-Anlagen. App, Serverseite und Netzwerkaufbau haben wir komplett selbst
              gebaut — von der professionellen Lichttechnik im Kursraum bis zum Schaltaktor
              hinter der Theke.
            </p>

            <p className="mt-4 text-white/55 leading-relaxed">
              Beides läuft in derselben Werkstatt, deshalb lässt sich LED Pro direkt in
              Prometheus Enterprise einbinden: Licht und Betriebsführung unter einem Login,
              statt zweier Systeme, die nichts voneinander wissen.
            </p>

            <div className="mt-7 grid sm:grid-cols-3 gap-3">
              {rails.map((r) => (
                <div key={r.label} className="glass rounded-xl px-4 py-3.5">
                  <r.icon size={17} className="text-accent mb-2" />
                  <p className="text-sm font-semibold leading-tight">{r.label}</p>
                  <p className="text-[11px] text-white/45 leading-tight mt-0.5">{r.sub}</p>
                </div>
              ))}
            </div>

            <div className="mt-6 flex items-start gap-3 rounded-xl bg-accent/8 border border-accent/20 px-4 py-3.5">
              <KeyRound size={17} className="text-accent shrink-0 mt-0.5" />
              <p className="text-sm text-white/75 leading-relaxed">
                In Enterprise integrierbar — ein Login für Lichtsteuerung und Management.
              </p>
            </div>
          </div>

          {/* Lighting console — abstract, no invented metrics */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="relative"
          >
            <div className="rounded-2xl glass p-5 lg:p-6 shadow-[0_30px_70px_rgba(0,0,0,0.5)]">
              <div className="flex items-center justify-between mb-5">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-accent/15 border border-accent/25 flex items-center justify-center">
                    <Lightbulb size={15} className="text-accent" />
                  </div>
                  <span className="font-display font-semibold text-sm">Zonen</span>
                </div>
                <span className="text-[10px] uppercase tracking-wider text-white/35">
                  LED Pro Studio
                </span>
              </div>

              <div className="space-y-3.5">
                {zones.map((z, i) => (
                  <motion.div
                    key={z.name}
                    initial={{ opacity: 0, x: 16 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.45, delay: 0.15 + i * 0.1 }}
                  >
                    <div className="flex items-baseline justify-between mb-1.5">
                      <span className="text-sm text-white/80">{z.name}</span>
                      <span className="text-[11px] text-white/40">{z.scene}</span>
                    </div>
                    <div className="h-2 rounded-full bg-white/[0.07] overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${z.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.9, delay: 0.25 + i * 0.1, ease: 'easeOut' }}
                        className="h-full rounded-full bg-gradient-to-r from-accent-dark via-accent to-accent-light shadow-[0_0_12px_rgba(230,126,34,0.5)]"
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            <p className="mt-3 text-center text-xs text-white/40">
              Lichtszenen pro Zone — vom Tablet im Studio oder aus dem Web.
            </p>
          </motion.div>
        </div>
      </div>
    </Section>
  )
}
