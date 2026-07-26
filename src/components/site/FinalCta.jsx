import { ArrowRight } from 'lucide-react'
import { Reveal } from './Section'
import { useDemoModal } from '../../context/DemoModalContext'

export default function FinalCta() {
  const { openDemo } = useDemoModal()
  return (
    <section className="relative py-32 lg:py-40 px-5 sm:px-8 overflow-hidden border-t border-white/5">
      {/* An empty box at the end: the room the software runs, waiting. Pushed
          well back so the CTA button stays the brightest thing on screen. */}
      <img
        src="/images/photos/box-empty.webp"
        alt=""
        aria-hidden="true"
        loading="lazy"
        className="absolute inset-0 w-full h-full object-cover opacity-25"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-dark via-dark/75 to-dark" />
      <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse 70% 80% at 50% 50%, rgba(230,126,34,0.14), transparent 70%)' }} />
      <Reveal y={26} className="relative max-w-3xl mx-auto text-center">
        <h2 className="display text-4xl sm:text-5xl lg:text-6xl leading-[1.08]">
          Null Papier. Eine Wahrheit.<br />
          <span className="display-italic opacity-75">Das Mitglied checkt sich selbst ein.</span>
        </h2>
        <p className="mt-6 text-lg text-white/60">
          Sehen Sie in 30 Minuten, wie Ihr Betrieb von der Rezeption bis zur Zentrale in einem System läuft.
        </p>
        <button
          onClick={openDemo}
          className="mt-9 inline-flex items-center gap-2.5 px-8 h-14 rounded-xl bg-accent text-white font-semibold text-lg hover:bg-accent-light transition-all hover:shadow-[0_0_40px_rgba(230,126,34,0.45)]"
        >
          Demo buchen <ArrowRight size={20} />
        </button>
      </Reveal>
    </section>
  )
}
