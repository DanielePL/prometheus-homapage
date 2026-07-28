import { useState } from 'react'
import { Smartphone, Monitor, Building2, Dumbbell, Database } from 'lucide-react'
import { Section, SectionHeader } from './Section'

/* Four products around the shared core. Six binaries — Enterprise Web, Coach
   Web, Coach iOS, Coach Android, Member iOS, Member Android — but the two
   mobile pairs ship as one product each.

   Studio Light is NOT a fifth node: it is a role inside the Coach Web app
   (`prometheus_coach` carries both the PT workspace and the Studio Light
   backoffice, see CLAUDE.md). Drawing it separately implied a product that can
   be bought without Coach Web, and forced every filter into a contradiction —
   "Kette + Backoffice" lit up Studio Light ("Backoffice Einzelstandort")
   alongside Enterprise, which already contains that backoffice.

   Layout is a diamond and it carries meaning: the operator on top, the trainer
   surfaces on the flanks, the member underneath. */
const NODES = {
  enterprise: { x: 50, y: 11, icon: Building2, label: 'Enterprise', sub: 'Studio-Cockpit & Konzern' },
  coachWeb: { x: 15, y: 52, icon: Monitor, label: 'Coach Web', sub: 'PT-Arbeitsplatz & Studio-Backoffice' },
  coachApp: { x: 85, y: 52, icon: Dumbbell, label: 'Coach App', sub: 'iOS & Android' },
  member: { x: 50, y: 89, icon: Smartphone, label: 'Mitglieder-App', sub: 'iOS & Android · Freemium' },
}

/* Filters run along who works with the system, not along company size. Size
   only picks the Enterprise tier (Starter up to 250 members, Pro multi-site,
   per plans.ts) — it does not change which apps are in play, so a "single
   studio" and a "chain" would light up an identical set. */
const SETUPS = [
  { key: 'all', label: 'Alles', active: Object.keys(NODES) },
  { key: 'coach', label: 'Nur Coaching', active: ['coachWeb', 'coachApp', 'member'] },
  { key: 'studio', label: 'Studio', active: ['enterprise', 'member'] },
  { key: 'studioPt', label: 'Studio + PT-Team', active: ['enterprise', 'coachWeb', 'coachApp', 'member'] },
]

const VB = { w: 400, h: 300 }
const core = { cx: VB.w / 2, cy: VB.h / 2 }
const toPx = (n) => ({ cx: (n.x / 100) * VB.w, cy: (n.y / 100) * VB.h })

/* Stop each line at the rim of the core orb instead of running it to the exact
   centre. The orb is only semi-transparent, so lines drawn underneath it show
   through as streaks across the label. CORE_R is the orb radius expressed in
   viewBox units (~128px rendered at a 768px container against a 400-unit box). */
const CORE_R = 36
const shrinkToCore = (p) => {
  const dx = core.cx - p.cx
  const dy = core.cy - p.cy
  const len = Math.hypot(dx, dy) || 1
  return { cx: core.cx - (dx / len) * CORE_R, cy: core.cy - (dy / len) * CORE_R }
}

export default function EcosystemDiagram() {
  const [setup, setSetup] = useState(SETUPS[0])
  const isActive = (k) => setup.active.includes(k)

  return (
    <Section id="oekosystem" className="border-t border-white/5">
      <SectionHeader
        eyebrow="Das Ökosystem"
        title="Vier Apps. Ein Backend."
        accent="Eine Identität."
        subline="Nicht vier Werkzeuge, die mit Schnittstellen zusammengeklebt sind, sondern ein System, das alle teilen. Ein Login funktioniert überall — vom Trainer bis zur Zentrale."
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
          {/* Connection lines. Solid, not dashed: a marching-ants dash on every
              line at once reads as nervous flicker, and the animation is the
              first thing the eye locks onto — it out-shouts the nodes it is
              supposed to connect. A static line carries the same information.
              No gradient stroke either: a horizontal objectBoundingBox gradient
              collapses on the vertical Enterprise line (zero-width box), which
              is why that one connection used to render invisible. */}
          <svg viewBox={`0 0 ${VB.w} ${VB.h}`} className="absolute inset-0 w-full h-full">
            {Object.entries(NODES).map(([key, n]) => {
              const p = toPx(n)
              const on = isActive(key)
              const end = shrinkToCore(p)
              return (
                <line
                  key={key}
                  x1={p.cx}
                  y1={p.cy}
                  x2={end.cx}
                  y2={end.cy}
                  stroke={on ? 'rgba(230,126,34,0.45)' : 'rgba(255,255,255,0.06)'}
                  strokeWidth={on ? 1.5 : 1}
                  className="transition-[stroke] duration-500"
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
              /* Plain div + CSS transition, no framer-motion: rAF-driven
                 animation stalls in a throttled tab and can strand a node at
                 the opacity it was mid-flight on. Centring and scale share one
                 transform so Tailwind's translate utilities can't clash with
                 an animated scale. */
              <div
                key={key}
                className="absolute z-10 transition-[opacity,transform] duration-500 ease-out"
                style={{
                  left: `${n.x}%`,
                  top: `${n.y}%`,
                  transform: `translate(-50%, -50%) scale(${on ? 1 : 0.92})`,
                  opacity: on ? 1 : 0.32,
                }}
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
              </div>
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
