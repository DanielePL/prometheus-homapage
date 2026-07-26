import { useReveal } from './Section'

/* A full-bleed photograph with a single line of display type over it.

   This exists for rhythm, not information: it interrupts a long run of
   card-grid sections so the eye stops predicting what comes next. It carries
   no data and no numbers on purpose — the claim is a claim, the picture is a
   room, and neither pretends to be evidence.

   `focus` moves the crop (object-position) because the interesting part of a
   gym photo is rarely dead centre. */
export default function PhotoBreak({
  src, statement, accent, focus = 'center', height = 'h-[62vh] min-h-[420px] lg:h-[72vh]',
}) {
  const ref = useReveal()

  return (
    <section className={`relative ${height} flex items-center justify-center overflow-hidden`}>
      <img
        src={src}
        alt=""
        aria-hidden="true"
        loading="lazy"
        className="absolute inset-0 w-full h-full object-cover"
        style={{ objectPosition: focus }}
      />
      {/* Two stacked scrims: one flat, one vertical, so the type holds up over
          a bright patch and the section still fuses with the dark page above
          and below it. */}
      <div className="absolute inset-0 bg-dark/65" />
      <div className="absolute inset-0 bg-gradient-to-b from-dark via-transparent to-dark" />

      <div ref={ref} className="reveal relative z-10 max-w-4xl mx-auto px-6 text-center">
        <p className="display text-3xl sm:text-4xl lg:text-5xl leading-[1.12] text-white">
          {statement}{' '}
          {accent && <span className="display-italic opacity-75">{accent}</span>}
        </p>
      </div>
    </section>
  )
}
