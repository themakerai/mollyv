'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

export default function Mission() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section ref={ref} className="py-24 lg:py-32 bg-white relative overflow-hidden">
      <div className="container-custom relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            <span className="inline-flex items-center gap-3 justify-center">
              <span className="w-8 h-px bg-accent" />
              <span className="text-xs tracking-[0.2em] uppercase text-dark-grey">The Promise</span>
              <span className="w-8 h-px bg-accent" />
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: 0.1 }}
            className="text-3xl lg:text-4xl font-display text-charcoal leading-tight mb-8"
          >
            You'll leave knowing exactly what to do,
            <br />
            <span className="text-accent">and at peace with the decision.</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg text-dark-grey leading-relaxed max-w-2xl mx-auto mb-12"
          >
            No more spinning. No more sleepless nights. Just clarity on the decision in front of you 
            and the conviction to act. That's what this work delivers.
          </motion.p>

          {/* Three outcomes */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="grid md:grid-cols-3 gap-8 text-left"
          >
            {[
              {
                title: 'Clarity',
                desc: 'Know exactly what to do next. No ambiguity, no waffling.',
              },
              {
                title: 'Conviction',
                desc: 'Feel confident in your decision, even when it\'s hard.',
              },
              {
                title: 'Calm',
                desc: 'Find peace with the choice, regardless of outcome.',
              },
            ].map((item, i) => (
              <div key={item.title} className="p-6 border-l-2 border-accent">
                <h3 className="text-xl font-display text-charcoal mb-2">{item.title}</h3>
                <p className="text-sm text-dark-grey">{item.desc}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
