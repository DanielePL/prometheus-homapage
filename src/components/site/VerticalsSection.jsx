import {
  Dumbbell, Activity, GraduationCap, CircleDot, Target, Flag, Swords, Music,
  HandHeart, Stethoscope, Flower2, Waves, Mountain, Trophy, Zap, Flame, HeartPulse, Sparkles,
} from 'lucide-react'
import { Section, SectionHeader, Reveal } from './Section'

const verticals = [
  { icon: Dumbbell, label: 'Fitnessstudio' },
  { icon: Activity, label: 'Gym / Kraftraum' },
  { icon: GraduationCap, label: 'Sportakademie' },
  { icon: CircleDot, label: 'Tennis' },
  { icon: Target, label: 'Padel' },
  { icon: Flag, label: 'Golf' },
  { icon: Swords, label: 'Kampfsport' },
  { icon: Music, label: 'Tanzstudio' },
  { icon: HandHeart, label: 'Therapie' },
  { icon: Stethoscope, label: 'Reha' },
  { icon: Flower2, label: 'Yoga' },
  { icon: Waves, label: 'Schwimmschule' },
  { icon: Mountain, label: 'Kletterhalle' },
  { icon: Trophy, label: 'Reitstall' },
  { icon: Zap, label: 'EMS' },
  { icon: Flame, label: 'CrossFit / Hyrox' },
  { icon: HeartPulse, label: 'Recovery-Center' },
  { icon: Sparkles, label: 'Pilates' },
]

export default function VerticalsSection() {
  return (
    <Section id="branchen" tone="light" width="narrow">
      <SectionHeader
        eyebrow="Reichweite"
        title="Nicht nur Fitnessstudios."
        accent="18 Branchen, ein System."
        subline="Jede Branche bringt ihr eigenes Vokabular mit (Mitglied → Reiter, Termin → Lektion) und ihre eigenen Module. Beim Onboarding schreiben Sie frei, was Sie sind, und eine KI ordnet Sie der richtigen Vorlage zu."
      />
      <div className="mt-14 grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-6 gap-3 sm:gap-4">
        {verticals.map((v, i) => (
          <Reveal
            key={v.label}
            delay={(i % 6) * 0.04}
            y={14}
            className="glass rounded-2xl p-4 sm:p-5 flex flex-col items-center justify-center text-center gap-2.5 hover:border-accent/30 hover:bg-white/[0.06] transition-all aspect-square"
          >
            <div className="w-11 h-11 rounded-xl bg-accent/12 border border-accent/20 flex items-center justify-center">
              <v.icon size={20} className="text-accent" />
            </div>
            <span className="text-xs sm:text-sm font-medium text-white/75 leading-tight">{v.label}</span>
          </Reveal>
        ))}
      </div>
      <p className="mt-12 text-center display display-italic text-2xl lg:text-3xl text-white/70 max-w-3xl mx-auto">
        Ob CrossFit-Box, Tennisclub oder Reitstall — dasselbe System, nur Sprache und Module passen sich an.
      </p>
    </Section>
  )
}
