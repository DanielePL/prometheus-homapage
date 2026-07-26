import { Rocket, ShieldCheck, ArrowRightLeft } from 'lucide-react'
import { Section, SectionHeader, Reveal } from './Section'

const points = [
  {
    icon: Rocket,
    title: 'In 4 Tagen produktiv',
    desc: 'Ab Zusage, inklusive Lastschriftverfahren und kompletter Einrichtung Ihrer Standorte.',
  },
  {
    icon: ShieldCheck,
    title: 'Datenschutz by Design',
    desc: 'DSGVO und revDSG, auf Datenbankebene erzwungen — nicht in App-Logik, die man umgehen kann.',
  },
  {
    icon: ArrowRightLeft,
    title: 'Migrationscenter',
    desc: 'Daten aus Ihrem alten System werden übernommen, ohne auf einen restriktiven CSV-Export angewiesen zu sein.',
  },
]

export default function TrustSection() {
  return (
    <Section width="narrow" className="border-t border-white/5">
      <SectionHeader align="left" eyebrow="Vertrauen" title="Bereit für die Schweiz und die EU." />

      <div className="mt-14 grid md:grid-cols-3 gap-5">
        {points.map((p, i) => (
          <Reveal key={p.title} delay={i * 0.1}>
            <div className="glass rounded-2xl p-7 h-full">
              <div className="w-12 h-12 rounded-xl bg-accent/12 border border-accent/20 flex items-center justify-center mb-5">
                <p.icon size={22} className="text-accent" />
              </div>
              <h3 className="text-lg font-bold mb-2">{p.title}</h3>
              <p className="text-white/55 leading-relaxed text-sm">{p.desc}</p>
            </div>
          </Reveal>
        ))}
      </div>

    </Section>
  )
}
