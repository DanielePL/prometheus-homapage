import { useState } from 'react'
import {
  Activity, FileX2, ScanLine, QrCode, CalendarClock, Palette, ClipboardCheck,
  Megaphone, ShieldCheck, Check, Eye, RotateCcw, Sparkles,
} from 'lucide-react'
import { Section, SectionHeader, Reveal } from './Section'

/* ---------------------------------------------------------------------------
   Bento card shell. Every card is glass, one accent, hover lifts it slightly.
   `span` carries the lg: grid placement so the layout stays readable below.
--------------------------------------------------------------------------- */
function Card({ span = '', children, className = '', delay = 0 }) {
  return (
    <Reveal
      delay={delay}
      y={24}
      className={`group relative h-full overflow-hidden rounded-3xl glass hover:border-accent/30 transition-colors duration-300 ${span} ${className}`}
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

/* A screenshot anchored to the card's bottom edge. The window has a fixed
   height so sibling cards in the same grid row can't tear open a gap; the
   image is cropped from the top and faded into the page background. */
function BleedShot({ src, alt, h = 'h-52 lg:h-60' }) {
  return (
    <div className={`relative mt-auto ${h} shrink-0`}>
      <div className="absolute inset-x-7 top-0 bottom-0 rounded-t-xl overflow-hidden border border-white/10 border-b-0">
        <img
          src={src}
          alt={alt}
          loading="lazy"
          className="w-full h-full object-cover object-top block transition-transform duration-700 group-hover:scale-[1.03] origin-top"
        />
      </div>
      <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-dark via-dark/70 to-transparent pointer-events-none" />
    </div>
  )
}

/* ---------------------------------------------------------------------------
   White-label card. Clicking a swatch re-dresses the mini UI skeleton.
   Deliberately an abstract skeleton, not a fake dashboard: it demonstrates the
   theming without inventing numbers.
--------------------------------------------------------------------------- */
const BRANDS = [
  { name: 'Prometheus', hex: '#E67E22' },
  { name: 'Deep Blue', hex: '#2D6CDF' },
  { name: 'Forest', hex: '#1E9E6A' },
  { name: 'Crimson', hex: '#D2334B' },
  { name: 'Violet', hex: '#7C5CD6' },
]

function WhiteLabelCard() {
  const [brand, setBrand] = useState(BRANDS[0])

  return (
    <Card span="lg:col-span-4" className="p-7 lg:p-8 flex flex-col justify-center" delay={0.1}>
      <div
        className="absolute -top-24 -right-16 w-96 h-96 rounded-full blur-[110px] opacity-25 transition-colors duration-700 pointer-events-none"
        style={{ background: brand.hex }}
      />
      <div className="relative grid sm:grid-cols-[1fr_1fr] gap-7 items-center">
        <div>
          <Eyebrow icon={Palette}>White-Label</Eyebrow>
          <h3 className="display text-xl lg:text-2xl leading-tight">
            Ihr System trägt{' '}
            <span className="transition-colors duration-500" style={{ color: brand.hex }}>
              Ihre Farben.
            </span>
          </h3>
          <p className="mt-3 text-sm text-white/60 leading-relaxed">
            Jeder Betrieb wählt seine Markenfarbe — aus einer kuratierten Palette oder frei.
            Das ganze System zieht sich an: vom Empfangstablet bis zum Telefon der
            Geschäftsleitung.
          </p>

          <div className="mt-5 flex items-center gap-2">
            {BRANDS.map((b) => (
              <button
                key={b.name}
                onClick={() => setBrand(b)}
                aria-label={`Markenfarbe ${b.name}`}
                aria-pressed={brand.name === b.name}
                className={`w-8 h-8 rounded-lg transition-all duration-200 ${
                  brand.name === b.name
                    ? 'scale-110 ring-2 ring-white/70 ring-offset-2 ring-offset-transparent'
                    : 'opacity-55 hover:opacity-100 hover:scale-105'
                }`}
                style={{ background: b.hex }}
              />
            ))}
          </div>
        </div>

        {/* Abstract UI skeleton that re-dresses itself */}
        <div className="rounded-2xl glass-strong p-3.5 shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
          <div className="flex gap-2.5">
            <div className="w-9 shrink-0 space-y-1.5">
              <div
                className="w-full h-7 rounded-md transition-colors duration-500"
                style={{ background: brand.hex }}
              />
              {[0, 1, 2, 3].map((i) => (
                <div key={i} className="w-full h-5 rounded-md bg-white/[0.07]" />
              ))}
            </div>
            <div className="flex-1 min-w-0 space-y-2.5">
              <div className="flex items-center justify-between gap-2">
                <div className="h-3 w-20 rounded bg-white/15" />
                <div
                  className="h-6 w-16 rounded-md transition-colors duration-500"
                  style={{ background: brand.hex }}
                />
              </div>
              <div className="grid grid-cols-3 gap-2">
                {[0, 1, 2].map((i) => (
                  <div key={i} className="rounded-lg bg-white/[0.05] p-2 space-y-1.5">
                    <div className="h-1.5 w-7 rounded bg-white/15" />
                    <div
                      className="h-3 w-10 rounded transition-colors duration-500"
                      style={{ background: `${brand.hex}cc` }}
                    />
                  </div>
                ))}
              </div>
              <div className="rounded-lg bg-white/[0.05] p-2.5 space-y-2">
                {[100, 74, 88].map((w, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <div
                      className="w-1.5 h-1.5 rounded-full shrink-0 transition-colors duration-500"
                      style={{ background: brand.hex }}
                    />
                    <div className="h-1.5 rounded bg-white/12" style={{ width: `${w}%` }} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Card>
  )
}

/* ------------------------------------------------------------------------ */

export default function BentoGrid() {
  return (
    <Section id="plattform" width="wide" className="border-t border-white/5">
      <SectionHeader
        align="left"
        eyebrow="Die Plattform"
        title="Alles, was ein Betrieb braucht —"
        accent="in einem System."
        subline="Kein Modulbaukasten, keine zugekauften Fremdsysteme. Jede Fläche unten läuft auf demselben Backend und derselben Identität."
      />

      <div className="mt-14 grid lg:grid-cols-6 gap-4 lg:gap-5">

        {/* 1 — One truth (large) */}
        <Card span="lg:col-span-4" className="flex flex-col">
          <div className="p-7 lg:p-9">
            <Eyebrow icon={Activity}>Live-Betrieb</Eyebrow>
            <h3 className="display text-2xl lg:text-3xl leading-tight">
              Eine Wahrheit. Auf jedem Bildschirm.
            </h3>
            <p className="mt-4 text-white/60 leading-relaxed max-w-xl">
              Rezeption, Club-Leitung, Regionalleitung, Zentrale — alle sehen denselben Vertrag
              und dieselben Zahlen in dem Moment, in dem ein Mitglied unterschreibt. Keine
              Kopien, kein Export, kein nächtlicher Sync-Job. Wer was sieht, erzwingt die
              Datenbank — nicht App-Logik, die man umgehen kann.
            </p>
          </div>
          <BleedShot
            src="/images/surfaces/dark-hq.webp"
            alt="Zentrale: jeder Club nebeneinander mit Mitgliedern, Umsatz und Besuchen"
          />
        </Card>

        {/* 2 — Zero paper */}
        <Card span="lg:col-span-2" className="flex flex-col" delay={0.05}>
          <div className="p-7">
            <Eyebrow icon={FileX2}>Null Papier</Eyebrow>
            <h3 className="display text-xl lg:text-2xl leading-tight">
              Papierlos. Für immer.
            </h3>
            <p className="mt-3 text-sm text-white/60 leading-relaxed">
              Stammdaten, Anamnese, Foto, Vertrag, Unterschrift und Lastschriftmandat — ein
              einziger Ablauf am Tablet. Ab Sekunde null in der Cloud, nie im Ordner.
            </p>
          </div>
          <BleedShot
            src="/images/surfaces/dark-onboard.webp"
            alt="Onboarding-Tablet am Tresen: Aufnahme eines neuen Mitglieds in einem Ablauf"
          />
        </Card>

        {/* 3 — Self-closing back office */}
        <Card span="lg:col-span-3" className="flex flex-col" delay={0.05}>
          <div className="p-7">
            <Eyebrow icon={ScanLine}>Buchhaltung</Eyebrow>
            <h3 className="display text-xl lg:text-2xl leading-tight">
              Beleg fotografieren. Fertig.
            </h3>
            <p className="mt-3 text-sm text-white/60 leading-relaxed">
              Die KI liest den Lieferantenbeleg aus, kontiert ihn und bucht ihn in ein
              revisionssicheres, hash-verkettetes Journal. MWST-Abrechnung und Jahresabschluss
              leiten sich daraus ab, mit Plausibilitätsprüfung vor dem Absenden.
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
          />
        </Card>

        {/* 4 — Zero-touch social media */}
        <Card span="lg:col-span-3" className="p-7 flex flex-col" delay={0.1}>
          <Eyebrow icon={Megaphone}>Marketing</Eyebrow>
          <h3 className="display text-xl lg:text-2xl leading-tight">
            Foto knipsen. Der Rest schreibt sich selbst.
          </h3>
          <p className="mt-3 text-sm text-white/60 leading-relaxed">
            Wer nie dazu kommt, auf Instagram zu posten, hat hier das größte Problem — und
            die größte Chance. Das Team fotografiert in der App, die KI schreibt den Text,
            wählt Hashtags, schlägt Verlinkungen vor und veröffentlicht auf den Kanälen des
            Studios. Auf Wunsch erst nach einem Klick zur Freigabe.
          </p>

          <div className="mt-6 space-y-2.5">
            {[
              { t: 'Text & Hashtags', s: 'schreibt die KI zum Foto' },
              { t: 'Verlinkungen', s: 'werden automatisch vorgeschlagen' },
              { t: 'Freigabe per Klick', s: 'optional vor dem Veröffentlichen' },
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
        </Card>

        {/* 5 — Zero-touch access */}
        <Card span="lg:col-span-2" className="flex flex-col" delay={0.05}>
          <div className="p-7">
            <Eyebrow icon={QrCode}>Zero-Touch</Eyebrow>
            <h3 className="display text-xl lg:text-2xl leading-tight">
              Gastgeber statt Türsteher.
            </h3>
            <p className="mt-3 text-sm text-white/60 leading-relaxed">
              Das Mitglied scannt den QR am Kiosk und ist eingecheckt. Kurs am Handy gebucht,
              erscheint von selbst auf der Anzeige im Raum.
            </p>
          </div>
          <BleedShot
            src="/images/surfaces/dark-kiosk.webp"
            alt="Kiosk am Eingang mit rotierendem QR-Code und den Kursen des Tages"
          />
        </Card>

        {/* 6 — Facility accountability */}
        <Card span="lg:col-span-2" className="p-7 flex flex-col" delay={0.1}>
          <Eyebrow icon={ClipboardCheck}>Verbindlichkeit</Eyebrow>
          <h3 className="display text-xl lg:text-2xl leading-tight">
            Kontrollgänge, die niemand abhaken kann.
          </h3>
          <p className="mt-3 text-sm text-white/60 leading-relaxed">
            Rundgänge je Zone mit Checkliste und Foto, Mängelmeldungen der Mitglieder per QR,
            und ein Hinweis, wenn ein Rundgang verdächtig schnell abgehakt wurde. Alles läuft
            zu einem Wert pro Club und pro Kette zusammen.
          </p>

          <div className="mt-6 space-y-2.5">
            {[
              { t: 'Rundgang je Zone', s: 'mit Checkliste und Foto' },
              { t: 'Mängelmeldung per QR', s: 'direkt vom Mitglied' },
              { t: 'Ein Wert je Club & Kette', s: 'alles läuft zusammen' },
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
        </Card>

        {/* 7 — CrossFit / WOD booking */}
        <Card span="lg:col-span-2" className="p-7 flex flex-col" delay={0.1}>
          <Eyebrow icon={CalendarClock}>CrossFit & Boutique</Eyebrow>
          <h3 className="display text-xl lg:text-2xl leading-tight">
            Gebaut für WODs, nicht nur für Kurspläne.
          </h3>
          <p className="mt-3 text-sm text-white/60 leading-relaxed">
            Eine Buchungslogik, die beide Welten kennt: das klassische Kursmodell des
            Fitnessstudios und das Box-Modell mit WODs, Sessions und Cross-Box-Zugang.
          </p>

          <div className="mt-6 space-y-2.5">
            {[
              { t: 'WOD aus dem Kalender', s: 'in zwei Klicks geplant' },
              { t: 'Warteliste rückt nach', s: 'automatisch, ohne Anruf' },
              { t: 'Cross-Box-Zugang', s: 'für Mitglieder unterwegs' },
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

          <p className="mt-auto pt-5 text-xs text-white/45 leading-relaxed">
            Genau die Buchungslogik, auf der der internationale CrossFit-Kanal einsteigt.
          </p>
        </Card>

        {/* 8 — Governed AI */}
        <Card span="lg:col-span-2" className="p-7 flex flex-col" delay={0.15}>
          <Eyebrow icon={Sparkles}>Der Assistent</Eyebrow>
          <h3 className="display text-xl lg:text-2xl leading-tight">
            Eine KI, die sich an die Regeln hält.
          </h3>
          <p className="mt-3 text-sm text-white/60 leading-relaxed">
            Ein Assistent durch das ganze System, zugeschnitten auf den, der fragt: die
            Rezeption sieht den Tresen, die Leitung den Club, die Geschäftsführung die Kette.
          </p>

          <div className="mt-6 space-y-3">
            {[
              { icon: Eye, t: 'Zeigt vorher, was er tun wird' },
              { icon: ShieldCheck, t: 'Schreibt ins Prüfprotokoll' },
              { icon: RotateCcw, t: 'Meist umkehrbar' },
            ].map((r) => (
              <div key={r.t} className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-accent/12 border border-accent/20 flex items-center justify-center shrink-0">
                  <r.icon size={14} className="text-accent" />
                </div>
                <p className="text-sm text-white/80 leading-snug">{r.t}</p>
              </div>
            ))}
          </div>

          <p className="mt-auto pt-5 text-xs text-white/45 leading-relaxed">
            Er liest und schreibt unter denselben Datenbankregeln wie jeder Mensch. Über eine
            Grenze, die ihm nicht gehört, kommt er nicht.
          </p>
        </Card>

        {/* 9 — White-label */}
        <WhiteLabelCard />
      </div>
    </Section>
  )
}
