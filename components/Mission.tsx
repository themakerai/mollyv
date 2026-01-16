'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

export default function Mission() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section ref={ref} className="py-32 lg:py-48 bg-off-white relative overflow-hidden">
      {/* Swiss geometric background */}
      <motion.div
        initial={{ x: -100, opacity: 0 }}
        animate={isInView ? { x: 0, opacity: 1 } : {}}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        className="absolute right-0 top-0 w-1/3 h-full bg-light-grey/50"
      />

      <div className="container-custom relative z-10">
        <div className="grid-12">
          {/* Section number - Swiss style */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="col-span-12 lg:col-span-2 mb-8 lg:mb-0"
          >
            <div className="flex items-center gap-4">
              <span className="accent-dot" />
              <span className="label-sm text-dark-grey">02</span>
            </div>
            <motion.span
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 0.1 } : {}}
              transition={{ duration: 1, delay: 0.3 }}
              className="hidden lg:block font-swiss text-[120px] font-black text-charcoal leading-none mt-4"
            >
              M
            </motion.span>
          </motion.div>

          {/* Content */}
          <div className="col-span-12 lg:col-span-9 lg:col-start-4">
            {/* Mission Label */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="mb-6"
            >
              <span className="label-md text-accent tracking-widest">Mission</span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 60 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="text-[clamp(1.75rem,4vw,3rem)] leading-tight font-semibold text-charcoal mb-12"
            >
              Helping leaders gain clarity and make{' '}
              <span className="text-accent font-bold">bold, grounded decisions</span>{' '}
              when the stakes are high and the path forward feels uncertain.
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 mb-16"
            >
              <p className="text-base lg:text-lg text-dark-grey leading-relaxed">
                A trusted guide providing perspective, structure, and support so you can move forward 
                with confidence rather than hesitation. Helping leaders address reality honestly and 
                take responsibility for the decisions that shape their future.
              </p>
              <p className="text-base lg:text-lg text-dark-grey leading-relaxed">
                Whether navigating succession, scaling through complexity, or facing a pivotal 
                leadership moment, the focus is always on clarity, accountability, and the courage 
                to act on what matters most.
              </p>
            </motion.div>

            {/* Vision */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="bg-white p-8 lg:p-10 border-l-4 border-accent"
            >
              <span className="label-sm text-mid-grey block mb-4">Vision</span>
              <p className="text-lg lg:text-xl text-charcoal leading-relaxed">
                A world where leaders hold open, proactive conversations and approach difficult decisions 
                with clarity and confidence—strengthening both their{' '}
                <strong className="text-accent">businesses</strong> and their{' '}
                <strong className="text-accent">relationships</strong> through change.
              </p>
            </motion.div>

            {/* Stats - Swiss geometric cards */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="mt-16 lg:mt-20"
            >
              <div className="grid grid-cols-3 gap-4 lg:gap-6">
                {[
                  { number: '20+', label: 'Years Inside Business' },
                  { number: '100+', label: 'Leaders Supported' },
                  { number: '∞', label: 'Honest Conversations' },
                ].map((stat, i) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8, delay: 0.7 + i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                    className={`p-6 lg:p-8 ${i === 0 ? 'bg-accent text-white' : 'bg-white border border-light-grey'}`}
                  >
                    <span className={`font-swiss text-4xl lg:text-6xl font-bold ${i === 0 ? 'text-white' : 'text-charcoal'}`}>
                      {stat.number}
                    </span>
                    <p className={`label-sm mt-3 ${i === 0 ? 'text-white/80' : 'text-dark-grey'}`}>
                      {stat.label}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
