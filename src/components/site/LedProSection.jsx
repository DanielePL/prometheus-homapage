import { Lightbulb, Radio, Wifi, Cpu, KeyRound } from 'lucide-react'
import { Section, Reveal } from './Section'

/* LED Pro — second product of the same house, back on the page 2026-07-28
   (reverses the "vorerst raus" call of 2026-07-24, cleared with Daniele).

   Deliberately a compact strip, not the full section this file used to hold.
   The page was cut from fourteen sections precisely so a prospect still has a
   reason to book a demo; LED Pro earns a mention, not a chapter.

   What the old version got wrong and must not come back: a CSS console with
   invented zone levels (Freihantelbereich 82 %, Kursraum 45 % …). Those numbers
   existed nowhere in the product — a fake dashboard, which CLAUDE.md forbids
   twice over. Rather no visual than an invented one.

   Wording is fenced by how the integration actually works
   (Prometheus-Enterprise/docs/LED_PRO_PROVISIONING.md): LED Pro runs on its own
   Supabase project and is linked to an Enterprise gym through `gym_lighting_links`,
   unlocked by hand once the customer signs a separate LED Pro contract. So:
     · "Modul in Enterprise" and "ein Login" — true, the Lighting page ships.
     · "ein Backend" — FALSE for LED Pro. Never put it in the ecosystem diagram.
     · Chains — one gym maps to one LED studio; multi-studio is Phase 2. Don't
       sell it to Ketten. */
const RAILS = [
  { icon: Radio, label: 'DMX / Art-Net', sub: 'professionelle Lichttechnik' },
  { icon: Cpu, label: 'Zigbee', sub: 'über lokalen Hub' },
  { icon: Wifi, label: 'Shelly WLAN', sub: 'Schaltaktoren' },
]

export default function LedProSection() {
  return (
    <Section id="ledpro" className="border-t border-white/5">
      <Reveal>
        <div className="glass-strong rounded-3xl p-8 lg:p-12 relative overflow-hidden">
          <div className="absolute -top-24 -left-24 w-96 h-96 bg-accent/10 blur-[110px] rounded-full pointer-events-none" />

          <div className="relative max-w-3xl">
            <div className="flex items-center gap-2 mb-4">
              <Lightbulb size={16} className="text-accent" />
              <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-accent">
                Aus demselben Haus
              </span>
            </div>

            <h2 className="display text-3xl lg:text-4xl leading-tight">
              Wir steuern nicht nur den Betrieb.<br />
              <span className="text-accent">Wir steuern auch das Licht.</span>
            </h2>

            <p className="mt-5 text-lg text-white/60 leading-relaxed">
              LED Pro ist unser zweites Produkt: die Lichtsteuerung für Studios und
              Wellness-Anlagen. App, Serverseite und Netzwerkaufbau kommen aus derselben
              Werkstatt — von der professionellen Lichttechnik im Kursraum bis zum
              Schaltaktor hinter der Theke.
            </p>
          </div>

          <div className="relative mt-8 grid sm:grid-cols-3 gap-3 max-w-3xl">
            {RAILS.map((r) => (
              <div key={r.label} className="glass rounded-xl px-4 py-3.5">
                <r.icon size={17} className="text-accent mb-2" />
                <p className="text-sm font-semibold leading-tight">{r.label}</p>
                <p className="text-[11px] text-white/45 leading-tight mt-0.5">{r.sub}</p>
              </div>
            ))}
          </div>

          <div className="relative mt-6 flex items-start gap-3 rounded-xl bg-accent/8 border border-accent/20 px-4 py-3.5 max-w-3xl">
            <KeyRound size={17} className="text-accent shrink-0 mt-0.5" />
            <p className="text-sm text-white/75 leading-relaxed">
              Wer LED Pro einsetzt, bekommt die Lichtsteuerung als Modul in Prometheus
              Enterprise — ein Login statt zweier Systeme, die nichts voneinander wissen.
              Eigenes Produkt, eigener Vertrag.
            </p>
          </div>
        </div>
      </Reveal>
    </Section>
  )
}
