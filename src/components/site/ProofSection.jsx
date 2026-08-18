import { FileX2, ScanLine, QrCode, Check } from 'lucide-react'
import { Section, SectionHeader, Reveal } from './Section'

/* ---------------------------------------------------------------------------
   Three proofs, deliberately not nine.

   This replaces BentoGrid on the homepage. That component still exists and is
   still complete — it's parked for /studios. (LedProSection used to be the
   other example here; it was deleted 2026-08-18 because LED Pro is a separate
   company and does not belong on the Prometheus coach page.)
   The reason for the cut: the page was showing twelve product screenshots and
   nine feature cards, which is the whole system. A prospect who has already
   seen everything has no reason left to book the demo, and the product team hit
   the same wall inside the app (first impression "enormously complex", which is
   why the default module set went from 13 to 6).

   The three that stayed are the ones a studio owner can price in hours saved —
   the front desk, the back office, the door. The architecture argument ("one
   truth on every screen") is already the hero's claim and isn't repeated here.
--------------------------------------------------------------------------- */

function Card({ children, className = '', delay = 0 }) {
  return (
    <Reveal
      delay={delay}
      y={24}
      className={`group relative h-full overflow-hidden rounded-3xl glass hover:border-accent/30 transition-colors duration-300 flex flex-col ${className}`}
    >
      {children}
    </Reveal>
  )
}

function Eyebrow({ icon: Icon, children }) {
  return (
    <div className="flex items-center gap-2 mb-3">
      <Icon size={15} className="text-accent shrink-0" />
      <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-accent">
        {children}
      </span>
    </div>
  )
}

/* Screenshot anchored to the card's bottom edge, faded into the page so the
   card doesn't end in a hard line.

   `focus` picks which band of the screenshot is visible. It matters: the
   accounting capture carries the AI vendor's name in its subtitle line, and its
   top band is mostly an empty upload dropzone, so that card shows the booking
   table further down instead. */
function BleedShot({ src, alt, focus = 'top' }) {
  return (
    <div className="relative mt-auto h-56 lg:h-64 shrink-0">
      <div className="absolute inset-x-7 top-0 bottom-0 rounded-t-xl overflow-hidden border border-white/10 border-b-0">
        <img
          src={src}
          alt={alt}
          loading="lazy"
          style={{ objectPosition: focus }}
          className="w-full h-full object-cover block transition-transform duration-700 group-hover:scale-[1.03] origin-top"
        />
      </div>
      <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-dark via-dark/70 to-transparent pointer-events-none" />
    </div>
  )
}

export default function ProofSection() {
  return (
    <Section id="plattform" className="border-t border-white/5">
      <SectionHeader
        align="left"
        eyebrow="Was sich im Alltag ändert"
        title="Drei Stellen, an denen der Tag"
        accent="kürzer wird."
        subline="Am Tresen, im Backoffice und an der Tür. Alles davon läuft auf demselben Backend — das Übrige zeigen wir in der Demo."
      />

      <div className="mt-14 grid lg:grid-cols-2 gap-4 lg:gap-5">
        {/* Front desk */}
        <Card>
          <div className="p-7 lg:p-9">
            <Eyebrow icon={FileX2}>Am Tresen</Eyebrow>
            <h3 className="display text-2xl lg:text-3xl leading-tight">
              Aufnahme in einem Ablauf. Ohne Papier.
            </h3>
            <p className="mt-4 text-white/60 leading-relaxed">
              Stammdaten, Anamnese, Foto, Vertrag, Unterschrift und Lastschriftmandat — ein
              einziger Durchgang am Tablet. Ab Sekunde null in der Cloud, nie im Ordner.
            </p>
          </div>
          <BleedShot
            src="/images/surfaces/dark-onboard.webp"
            alt="Onboarding-Tablet am Tresen: Aufnahme eines neuen Mitglieds in einem Ablauf"
          />
        </Card>

        {/* Back office */}
        <Card delay={0.06}>
          <div className="p-7 lg:p-9">
            <Eyebrow icon={ScanLine}>Im Backoffice</Eyebrow>
            <h3 className="display text-2xl lg:text-3xl leading-tight">
              Beleg fotografieren. Fertig.
            </h3>
            <p className="mt-4 text-white/60 leading-relaxed">
              Der Lieferantenbeleg wird ausgelesen, kontiert und verbucht. MWST-Abrechnung und
              Jahresabschluss leiten sich daraus ab, mit Prüfung vor dem Absenden.
            </p>
            <div className="mt-5 flex flex-wrap gap-2">
              {['Doppelte Buchführung', 'LSV+ · TWINT', 'Treuhänder-Login'].map((f) => (
                <span
                  key={f}
                  className="inline-flex items-center gap-1.5 rounded-lg bg-white/[0.05] px-2.5 py-1.5 text-xs text-white/70"
                >
                  <Check size={12} className="text-accent shrink-0" />
                  {f}
                </span>
              ))}
            </div>
          </div>
          <BleedShot
            src="/images/surfaces/dark-accounting.webp"
            alt="Kreditoren: Lieferantenbelege werden ausgelesen, kontiert und verbucht"
            focus="center bottom"
          />
        </Card>

        {/* The door — full width, no screenshot: three cards with three
            screenshots would just be the old grid at smaller scale. */}
        <Card className="lg:col-span-2" delay={0.12}>
          <div className="p-7 lg:p-9 lg:grid lg:grid-cols-[1fr_1fr] lg:gap-12 lg:items-center">
            <div>
              <Eyebrow icon={QrCode}>An der Tür</Eyebrow>
              <h3 className="display text-2xl lg:text-3xl leading-tight">
                Gastgeber statt Türsteher.
              </h3>
              <p className="mt-4 text-white/60 leading-relaxed">
                Das Mitglied scannt den QR-Code und ist eingecheckt. Der am Handy gebuchte Kurs
                erscheint von selbst auf der Anzeige im Raum. Niemand muss dafür hinter den
                Tresen.
              </p>
            </div>
            <div className="mt-6 lg:mt-0 space-y-2.5">
              {[
                { t: 'Check-in ohne Personal', s: 'QR am Kiosk, rotierend' },
                { t: 'Kursbuchung am Handy', s: 'Warteliste rückt selbst nach' },
                { t: 'Anzeige im Raum', s: 'zeigt, wer gebucht hat' },
              ].map((r) => (
                <div key={r.t} className="flex items-start gap-3 rounded-xl bg-white/[0.04] px-3.5 py-2.5">
                  <div className="w-1.5 h-1.5 rounded-full bg-accent shrink-0 mt-1.5" />
                  <div className="min-w-0">
                    <p className="text-sm font-medium text-white/85 leading-tight">{r.t}</p>
                    <p className="text-xs text-white/45 leading-tight mt-0.5">{r.s}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Card>
      </div>
    </Section>
  )
}
