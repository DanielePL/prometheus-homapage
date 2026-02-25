import { useState } from 'react'
import { useScrollAnimation } from '../hooks/useScrollAnimation'
import { motion, AnimatePresence } from 'framer-motion'
import { Dna, ChevronDown } from 'lucide-react'

const dimensions = [
  { label: 'Concentric', color: '#F2721B' },
  { label: 'Eccentric', color: '#E74C3C' },
  { label: 'Isometric', color: '#3498DB' },
  { label: 'Plyometric', color: '#2ECC71' },
  { label: 'Ballistic', color: '#F1C40F' },
  { label: 'Neurological', color: '#9B59B6' },
]

const sports = [
  { name: 'Alpine Skiing', values: [15, 45, 15, 10, 5, 10] },
  { name: 'Sprinting', values: [25, 10, 5, 35, 15, 10] },
  { name: 'BJJ / Grappling', values: [20, 10, 35, 5, 5, 25] },
  { name: 'Golf', values: [10, 5, 10, 10, 40, 25] },
  { name: 'Powerlifting', values: [45, 20, 15, 5, 5, 10] },
  { name: 'Boxing', values: [15, 5, 10, 15, 35, 20] },
  { name: 'Swimming', values: [35, 15, 10, 10, 15, 15] },
  { name: 'Basketball', values: [20, 10, 10, 30, 15, 15] },
]

function DNABar({ values, animate }) {
  let offset = 0
  return (
    <div className="w-full h-3 rounded-full overflow-hidden bg-white/5 flex">
      {values.map((val, i) => {
        const left = offset
        offset += val
        return (
          <motion.div
            key={i}
            initial={{ width: 0 }}
            animate={animate ? { width: `${val}%` } : { width: 0 }}
            transition={{ duration: 0.8, delay: i * 0.08, ease: 'easeOut' }}
            className="h-full"
            style={{ backgroundColor: dimensions[i].color }}
            title={`${dimensions[i].label}: ${val}%`}
          />
        )
      })}
    </div>
  )
}

export default function BiomechanicalDNA() {
  const [ref, isVisible] = useScrollAnimation(0.1)
  const [expanded, setExpanded] = useState(false)
  const visibleSports = expanded ? sports : sports.slice(0, 4)

  return (
    <section id="science" ref={ref} className="py-24 lg:py-32 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div
          className={`text-center mb-16 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <span className="text-accent text-sm font-semibold uppercase tracking-widest">
            Industry First
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-['Arimo'] uppercase mt-3 mb-4">
            Biomechanical{' '}
            <span className="text-accent">DNA</span>
          </h2>
          <p className="text-[#999] text-lg max-w-3xl mx-auto leading-relaxed">
            Every sport has a unique neuromuscular signature. Prometheus maps 92 sports across six contraction dimensions — so your training matches what your body actually needs.
          </p>
        </div>

        {/* Two-column layout */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left — Explanation */}
          <div
            className={`transition-all duration-700 delay-200 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-accent/10 border border-accent/20 rounded-xl flex items-center justify-center">
                <Dna size={24} className="text-accent" />
              </div>
              <div>
                <h3 className="font-['Arimo'] text-xl font-bold uppercase">What makes it unique</h3>
                <p className="text-[#999] text-sm">No platform in the world does this.</p>
              </div>
            </div>

            <div className="space-y-5">
              <p className="text-gray-300 leading-relaxed">
                Most training apps optimize volume and intensity. Nobody optimizes <span className="text-white font-semibold">neuromuscular specificity</span> — the single most important variable in athletic adaptation.
              </p>
              <p className="text-gray-300 leading-relaxed">
                Alpine Skiing is 45% eccentric. Sprinting is 35% plyometric. BJJ is 35% isometric. Prometheus maps your workouts against your sport's biomechanical profile in real time — giving you a live gap analysis between what you train and what your sport demands.
              </p>
              <p className="text-gray-300 leading-relaxed">
                For coaches, this means data where there was only intuition. Spot imbalances before they become injuries. Justify programming with numbers, not gut feeling.
              </p>
            </div>

            {/* Dimension Legend */}
            <div className="mt-8 flex flex-wrap gap-3">
              {dimensions.map((d) => (
                <div key={d.label} className="flex items-center gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: d.color }} />
                  <span className="text-xs text-[#999]">{d.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right — DNA Bars Visualization */}
          <div
            className={`transition-all duration-700 delay-400 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <div className="bg-dark-card border border-dark-border rounded-2xl p-6 sm:p-8">
              <div className="flex items-center justify-between mb-6">
                <h4 className="text-sm font-semibold text-white uppercase tracking-wider">Sport Profiles</h4>
                <span className="text-xs text-accent bg-accent/10 px-2 py-1 rounded-full">92 sports mapped</span>
              </div>

              <div className="space-y-5">
                <AnimatePresence mode="sync">
                  {visibleSports.map((sport, i) => (
                    <motion.div
                      key={sport.name}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.3, delay: i * 0.05 }}
                    >
                      <div className="flex items-center justify-between mb-1.5">
                        <span className="text-sm text-white font-medium">{sport.name}</span>
                        <span className="text-xs text-[#999]">
                          {dimensions[sport.values.indexOf(Math.max(...sport.values))].label} dominant
                        </span>
                      </div>
                      <DNABar values={sport.values} animate={isVisible} />
                    </motion.div>
                  ))}
                </AnimatePresence>
              </div>

              {/* Show more toggle */}
              <button
                onClick={() => setExpanded(!expanded)}
                className="flex items-center gap-1 mx-auto mt-6 text-sm text-accent hover:text-accent-light transition-colors"
              >
                {expanded ? 'Show less' : 'Show more sports'}
                <ChevronDown
                  size={16}
                  className={`transition-transform duration-300 ${expanded ? 'rotate-180' : ''}`}
                />
              </button>
            </div>
          </div>
        </div>

        {/* Bottom quote */}
        <div
          className={`text-center mt-16 transition-all duration-700 delay-600 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <blockquote className="text-lg sm:text-xl text-[#999] italic max-w-3xl mx-auto">
            "Garmin tracks load. Whoop tracks recovery. Prometheus tracks <span className="text-white font-semibold not-italic">specificity</span> — the variable the industry has entirely ignored."
          </blockquote>
        </div>
      </div>
    </section>
  )
}
