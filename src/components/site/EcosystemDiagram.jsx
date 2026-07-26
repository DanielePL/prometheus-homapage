import { useState } from 'react'
import { motion } from 'framer-motion'
import { Smartphone, Monitor, Building2, Store, Dumbbell, Database } from 'lucide-react'
import { Section, SectionHeader } from './Section'

/* App nodes positioned radially around the shared core. Six real apps —
   Enterprise Web, Coach Web (also carries Studio Light), Coach iOS, Coach
   Android, Member iOS, Member Android — grouped into five nodes because the
   two mobile pairs ship as one product each. */
const NODES = {
  enterprise: { x: 50, y: 9, icon: Building2, label: 'Enterprise', sub: 'Studio-Cockpit & Konzern' },
  coachWeb: { x: 15, y: 33, icon: Monitor, label: 'Coach Web', sub: 'PT-Arbeitsplatz' },
  coachStudio: { x: 85, y: 33, icon: Store, label: 'Studio Light', sub: 'Backoffice Einzelstandort' },
  coachApp: { x: 22, y: 85, icon: Dumbbell, label: 'Coach App', sub: 'iOS & Android' },
  member: { x: 78, y: 85, icon: Smartphone, label: 'Mitglieder-App', sub: 'iOS & Android · Freemium' },
}

const SETUPS = [
  { key: 'all', label: 'Alles', active: Object.keys(NODES) },
  { key: 's1', label: 'Nur Coach', active: ['coachWeb', 'coachApp', 'member'] },
  { key: 's2', label: 'Einzelstudio', active: ['coachStudio', 'member'] },
  { key: 's3', label: 'Kette + PT', active: ['coachWeb', 'coachApp', 'enterprise', 'member'] },
  { key: 's4', label: 'Kette + Backoffice', active: ['coachStudio', 'enterprise', 'member'] },
]

const VB = { w: 400, h: 300 }
const core = { cx: VB.w / 2, cy: VB.h / 2 }
const toPx = (n) => ({ cx: (n.x / 100) * VB.w, cy: (n.y / 100) * VB.h })

export default function EcosystemDiagram() {
  const [setup, setSetup] = useState(SETUPS[0])
  const isActive = (k) => setup.active.includes(k)

  return (
    <Section id="oekosystem" className="border-t border-white/5">
      <SectionHeader
        eyebrow="Das Ökosystem"
        title="Fünf Apps. Ein Backend."
        accent="Eine Identität."
        subline="Nicht fünf Werkzeuge, die mit Schnittstellen zusammengeklebt sind, sondern ein System, das alle teilen. Ein Login funktioniert überall — vom Trainer bis zur Zentrale."
      />

      {/* Setup selector */}
      <div className="mt-12 flex flex-wrap justify-center gap-2">
        {SETUPS.map((s) => (
          <button
            key={s.key}
            onClick={() => setSetup(s)}
            className={`px-4 h-10 rounded-full text-sm font-medium transition-all ${
              setup.key === s.key
                ? 'bg-accent text-white shadow-[0_0_24px_rgba(230,126,34,0.35)]'
                : 'glass text-white/60 hover:text-white'
            }`}
          >
            {s.label}
          </button>
        ))}
      </div>

      {/* Diagram */}
      <div className="mt-10 relative max-w-3xl mx-auto">
        <div className="relative aspect-[4/3]">
          {/* connection lines */}
          <svg viewBox={`0 0 ${VB.w} ${VB.h}`} className="absolute inset-0 w-full h-full">
            <defs>
              <linearGradient id="flow" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#E67E22" stopOpacity="0.1" />
                <stop offset="50%" stopColor="#E67E22" stopOpacity="0.9" />
                <stop offset="100%" stopColor="#E67E22" stopOpacity="0.1" />
              </linearGradient>
            </defs>
            {Object.entries(NODES).map(([key, n]) => {
              const p = toPx(n)
              const on = isActive(key)
              return (
                <line
                  key={key}
                  x1={p.cx}
                  y1={p.cy}
                  x2={core.cx}
                  y2={core.cy}
                  stroke={on ? 'url(#flow)' : 'rgba(255,255,255,0.06)'}
                  strokeWidth={on ? 1.6 : 1}
                  strokeDasharray={on ? '6 5' : '0'}
                  style={on ? { animation: 'flowDash 14s linear infinite' } : undefined}
                />
              )
            })}
          </svg>

          {/* core */}
          <div
            className="absolute -translate-x-1/2 -translate-y-1/2 z-20"
            style={{ left: '50%', top: '50%' }}
          >
            <div className="relative">
              <div className="absolute -inset-5 bg-accent/25 blur-2xl rounded-full" style={{ animation: 'orbPulse 4s ease-in-out infinite' }} />
              <div className="relative w-28 h-28 sm:w-32 sm:h-32 rounded-full glass-strong border-accent/40 flex flex-col items-center justify-center text-center shadow-[0_0_40px_rgba(230,126,34,0.25)]">
                <Database size={22} className="text-accent mb-1" />
                <span className="text-xs font-bold leading-tight px-2">Eine<br />Datenbank</span>
              </div>
            </div>
          </div>

          {/* app nodes */}
          {Object.entries(NODES).map(([key, n]) => {
            const on = isActive(key)
            return (
              <motion.div
                key={key}
                animate={{ opacity: on ? 1 : 0.32, scale: on ? 1 : 0.92 }}
                transition={{ duration: 0.4 }}
                className="absolute -translate-x-1/2 -translate-y-1/2 z-10"
                style={{ left: `${n.x}%`, top: `${n.y}%` }}
              >
                <div
                  className={`w-[96px] sm:w-[128px] lg:w-[136px] rounded-2xl p-2.5 sm:p-3 text-center transition-all ${
                    on ? 'glass-strong border-accent/35 shadow-[0_0_24px_rgba(230,126,34,0.15)]' : 'glass'
                  }`}
                >
                  <div className={`w-9 h-9 mx-auto rounded-lg flex items-center justify-center mb-1.5 ${on ? 'bg-accent/20 text-accent' : 'bg-white/8 text-white/50'}`}>
                    <n.icon size={18} />
                  </div>
                  <p className="text-sm font-semibold leading-tight">{n.label}</p>
                  <p className="text-[11px] text-white/45 leading-tight mt-0.5">{n.sub}</p>
                </div>
              </motion.div>
            )
          })}
        </div>

        <p className="text-center text-sm text-white/45 mt-4">
          Die Mitglieder-App hängt an jeder Kombination aus Web-Apps gleichzeitig. Die Multi-Tenant-Logik
          löst auf, zu welchem Betrieb eine Aktion gehört.
        </p>
      </div>

      {/* Stated as our own claim, not set in quotation marks: a quote without an
          attributable speaker reads like a testimonial and undermines itself. */}
      <p className="max-w-3xl mx-auto mt-14 text-center display text-xl lg:text-2xl text-white/85 leading-snug">
        Die Alternative verkauft Ihnen ein Werkzeug und ein Dutzend Schnittstellen, die Sie selbst
        zusammenbauen. Wir verkaufen Ihnen <span className="text-accent">ein</span> System, in dem von
        Geburt an alles miteinander spricht.
      </p>
    </Section>
  )
}
