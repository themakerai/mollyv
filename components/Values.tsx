'use client'

import { useRef, useState } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'

const values = [
  {
    id: 'loving',
    title: 'Loving',
    short: 'Care & Connection',
    description: 'Leading with deep care for people, relationships, and the long-term impact of decisions. Deep respect for the human side of leadership and a commitment to protecting trust, dignity, and connection—even when conversations are difficult.',
    detail: 'Loving leadership does not avoid hard truths, but delivers them with compassion and intention.',
    icon: '♡'
  },
  {
    id: 'brave',
    title: 'Brave',
    short: 'Courage & Clarity',
    description: 'Courage is required to lead well, especially in moments of uncertainty or transition. Encouraging leaders to face reality honestly, name what others avoid, and make decisions that move the business forward.',
    detail: 'Bravery in this work means choosing clarity over comfort and action over prolonged hesitation.',
    icon: '◆'
  },
  {
    id: 'positive',
    title: 'Positive',
    short: 'Resilience & Forward',
    description: 'Approaching complex challenges with grounded optimism. Helping leaders see possibility without ignoring reality and focusing on forward movement rather than blame or fear.',
    detail: 'This value supports resilience, helping leaders stay steady, clear-headed, and solution-oriented during periods of change.',
    icon: '+'
  },
  {
    id: 'inspiring',
    title: 'Inspiring',
    short: 'Confidence & Growth',
    description: 'Work that inspires confidence, not dependency. Empowering leaders to trust themselves, strengthen their voice, and step fully into their role with conviction.',
    detail: 'Inspiration comes from helping clients see what is possible when alignment, clarity, and leadership courage come together.',
    icon: '★'
  },
  {
    id: 'authentic',
    title: 'Authentic',
    short: 'Truth & Trust',
    description: 'Valuing honesty, transparency, and real conversations over performative leadership. Bringing lived experience into the work and inviting clients to show up as they are, not who they think they should be.',
    detail: 'Authenticity creates trust and allows meaningful progress to happen without pretense or pressure.',
    icon: '○'
  }
]

export default function Values() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [activeValue, setActiveValue] = useState<string | null>(null)

  return (
    <section ref={ref} className="py-32 lg:py-48 bg-white relative overflow-hidden">
      {/* Swiss grid background */}
      <div 
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `
            linear-gradient(90deg, var(--charcoal) 1px, transparent 1px),
            linear-gradient(var(--charcoal) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px'
        }}
      />

      {/* Accent strip */}
      <motion.div
        initial={{ scaleY: 0 }}
        animate={isInView ? { scaleY: 1 } : {}}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        className="absolute left-0 top-1/4 w-3 h-1/2 bg-accent origin-top"
      />

      <div className="container-custom relative z-10">
        {/* Header */}
        <div className="grid-12 mb-16 lg:mb-24">
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="col-span-12 lg:col-span-2"
          >
            <div className="flex items-center gap-4">
              <span className="accent-dot" />
              <span className="label-sm text-dark-grey">05</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="col-span-12 lg:col-span-8 lg:col-start-4 mt-8 lg:mt-0"
          >
            <span className="label-md text-accent tracking-widest block mb-4">Values</span>
            <h2 className="headline-md text-charcoal mb-6">
              Principles that guide every{' '}
              <span className="text-accent font-semibold">conversation</span>
            </h2>
            <p className="body-text text-dark-grey max-w-2xl">
              These values aren't just words—they're the foundation of how I show up, 
              what I believe about leadership, and what guides every conversation and decision.
            </p>
          </motion.div>
        </div>

        {/* Values Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
          {values.map((value, i) => (
            <motion.div
              key={value.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.3 + i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              onClick={() => setActiveValue(activeValue === value.id ? null : value.id)}
              className={`cursor-pointer group relative overflow-hidden transition-all duration-500 ${
                activeValue === value.id 
                  ? 'bg-accent text-white lg:col-span-2' 
                  : 'bg-off-white hover:bg-accent/10'
              }`}
            >
              <div className="p-6 lg:p-8 h-full">
                {/* Icon */}
                <div className={`text-3xl mb-4 transition-colors duration-300 ${
                  activeValue === value.id ? 'text-white/80' : 'text-accent'
                }`}>
                  {value.icon}
                </div>

                {/* Title */}
                <h3 className={`headline-sm mb-2 transition-colors duration-300 ${
                  activeValue === value.id ? 'text-white' : 'text-charcoal'
                }`}>
                  {value.title}
                </h3>

                {/* Short description */}
                <p className={`text-sm mb-4 transition-colors duration-300 ${
                  activeValue === value.id ? 'text-white/70' : 'text-mid-grey'
                }`}>
                  {value.short}
                </p>

                {/* Expanded content */}
                <AnimatePresence>
                  {activeValue === value.id && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                    >
                      <p className="text-sm text-white/90 leading-relaxed mb-4">
                        {value.description}
                      </p>
                      <div className="pt-4 border-t border-white/20">
                        <p className="text-xs text-white/70 italic">
                          "{value.detail}"
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Click indicator */}
                {activeValue !== value.id && (
                  <div className="mt-4 flex items-center gap-2 text-xs text-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span>Learn more</span>
                    <span>→</span>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom quote */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="mt-16 lg:mt-24 text-center max-w-3xl mx-auto"
        >
          <p className="text-2xl lg:text-3xl text-charcoal font-medium italic mb-4">
            "You can lead with conviction while caring for people."
          </p>
          <p className="text-sm text-mid-grey">
            Clarity changes the quality of your decisions.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
