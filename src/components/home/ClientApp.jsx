import { Section, SectionHeader, Reveal } from '../site/Section'

/* What the client sees. A coach is buying two things at once — his workspace
 * and the thing his clients hold — and the second one is what makes him look
 * professional to them.
 *
 * VBT sits in the last line, small, on the owner's instruction: it is the most
 * technically impressive thing we have and the least relevant to why a coach
 * buys. Leading with it would make this look like a lab tool.
 */
export default function ClientApp() {
  return (
    <Section tone="raised" className="border-t border-white/5">
      <div className="grid lg:grid-cols-[0.95fr_1.05fr] gap-12 lg:gap-16 items-center">
        <div>
          <SectionHeader
            align="left"
            eyebrow="For your clients"
            title="Your clients get an app,"
            accent="not a PDF."
          />
          <Reveal delay={0.06} className="mt-7 space-y-5 text-lg text-white/60 leading-relaxed">
            <p>
              They log every set, scan meals, send progress photos and read your feedback
              in one place. You see the session while it happens, not next week.
            </p>
            <p className="text-white/70">
              Free for every client you coach. iPhone and Android.
            </p>
            <p className="text-sm text-white/40 leading-relaxed">
              Phone-camera bar speed tracking is in there too, if that is your thing.
            </p>
          </Reveal>
        </div>

        <Reveal delay={0.1} y={26} className="flex justify-center gap-4 sm:gap-6">
          {[
            ['/images/coach/app-mobile-training.webp', "This week's training, as the client sees it", 'mt-0'],
            ['/images/coach/app-mobile-workout.webp', 'Logging a set during the session', 'mt-10'],
          ].map(([src, alt, offset]) => (
            <div
              key={src}
              className={`${offset} w-[46%] max-w-[240px] rounded-[2rem] overflow-hidden border border-white/12 shadow-[0_30px_80px_-20px_rgba(0,0,0,0.9)]`}
            >
              <img src={src} alt={alt} width="640" height="1385" loading="lazy" className="w-full" />
            </div>
          ))}
        </Reveal>
      </div>
    </Section>
  )
}
