import { motion } from 'framer-motion'

/* Generous, airy section wrapper used across the homepage. */
export function Section({ id, className = '', children }) {
  return (
    <section id={id} className={`relative py-24 lg:py-32 px-5 sm:px-8 ${className}`}>
      <div className="max-w-7xl mx-auto">{children}</div>
    </section>
  )
}

/* Eyebrow + big display headline + optional subline. */
export function SectionHeader({ eyebrow, title, accent, subline, align = 'center', className = '' }) {
  const alignment = align === 'center' ? 'text-center mx-auto' : 'text-left'
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`max-w-3xl ${alignment} ${className}`}
    >
      {eyebrow && (
        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-accent mb-4">{eyebrow}</p>
      )}
      <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight leading-[1.08]">
        {title} {accent && <span className="text-accent">{accent}</span>}
      </h2>
      {subline && (
        <p className="mt-6 text-lg text-white/60 leading-relaxed">{subline}</p>
      )}
    </motion.div>
  )
}

/* A reveal-on-scroll wrapper. */
export function Reveal({ children, delay = 0, className = '', y = 28 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.6, delay, ease: 'easeOut' }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
