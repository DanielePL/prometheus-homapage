import { FileStack, HeartPulse, Users } from 'lucide-react'
import { Section, SectionHeader, Reveal } from './Section'

const pains = [
  { icon: FileStack, title: 'Papierkram', desc: 'Verträge im Ordner, Quittungen in der Schublade, Unterschriften auf Zetteln.' },
  { icon: HeartPulse, title: 'Info fehlt im entscheidenden Moment', desc: 'Die Anamnese liegt im Hängeregister, wenn es zählt findet sie keiner.' },
  { icon: Users, title: 'Engpass an der Rezeption', desc: 'Jeder Check-in, jede Buchung, jede Frage läuft über einen Tresen.' },
]

export default function PainSection() {
  return (
    <Section id="loesung" className="border-t border-white/5">
      <SectionHeader
        eyebrow="Warum Prometheus"
        title="Die anderen verwalten Ihr Studio."
        accent="Prometheus führt es mit Ihnen."
        subline="Klassische Studio-Software ist für den Sachbearbeiter im Backoffice gebaut, nicht für die Menschen, die das Studio wirklich betreiben. Das Ergebnis kennen Sie."
      />
      <div className="mt-14 grid md:grid-cols-3 gap-5">
        {pains.map((p, i) => (
          <Reveal key={p.title} delay={i * 0.1}>
            <div className="glass rounded-2xl p-7 h-full">
              <div className="w-12 h-12 rounded-xl bg-red-500/10 border border-red-500/20 flex items-center justify-center mb-5">
                <p.icon size={22} className="text-red-400" />
              </div>
              <h3 className="font-display text-xl font-bold mb-2">{p.title}</h3>
              <p className="text-white/55 leading-relaxed">{p.desc}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  )
}
