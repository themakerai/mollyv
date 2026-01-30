'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const framework = [
  {
    letter: 'B',
    title: 'Be Clear Before You Act',
    description: 'Bold leadership starts with clarity. Clear direction, clear priorities, clear expectations. Define where you\'re going before asking people to follow.',
    detail: 'Clarity reduces friction and speeds decisions.'
  },
  {
    letter: 'O',
    title: 'Own the Hard Things',
    description: 'Bold leaders step into difficult conversations, accountability issues, and unpopular decisions when the business needs it. Ownership replaces blame and excuses.',
    detail: 'Leadership is taking responsibility, even when uncomfortable.'
  },
  {
    letter: 'L',
    title: 'Listen to Understand',
    description: 'Bold leadership doesn\'t mean being loud. It means creating space for dissent, perspective, and truth. Leaders who listen well make better decisions and earn trust.',
    detail: 'You don\'t have to agree to be aligned, but you do have to listen.'
  },
  {
    letter: 'D',
    title: 'Decide and Move Forward',
    description: 'Bold leaders decide. They recognize that indecision is still a decision—often the most expensive one. Gather input, weigh risk, then move forward.',
    detail: 'Decisions made with clarity and courage build momentum.'
  }
]

export default function Framework() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section ref={ref} className="py-32 lg:py-48 bg-off-white relative overflow-hidden">
      {/* Swiss geometric elements */}
      <motion.div
        initial={{ scaleY: 0 }}
        animate={isInView ? { scaleY: 1 } : {}}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        className="absolute left-8 lg:left-16 top-0 bottom-0 w-[2px] bg-light-grey origin-top"
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
              <span className="label-sm text-dark-grey">04</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="col-span-12 lg:col-span-8 lg:col-start-4 mt-6 lg:mt-0"
          >
            <span className="label-md text-accent tracking-widest mb-4 block">The Framework</span>
            <h2 className="headline-md text-charcoal">
              The <span className="text-accent font-bold">BOLD</span> Leadership Framework
            </h2>
            <p className="body-text text-dark-grey mt-6 max-w-2xl">
              A framework for leading with clarity, courage, and conviction. Because bold leadership 
              requires both peace in yourself and strength to act decisively.
            </p>
          </motion.div>
        </div>

        {/* Framework cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-5">
          {framework.map((item, i) => (
            <motion.div
              key={item.letter}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.3 + i * 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="group"
            >
              <div className="bg-white p-8 lg:p-10 h-full border border-light-grey hover:border-accent transition-colors duration-500 relative overflow-hidden">
                {/* Large letter background */}
                <motion.span
                  initial={{ opacity: 0.05 }}
                  whileHover={{ opacity: 0.1 }}
                  className="absolute -right-4 -bottom-8 font-swiss text-[200px] font-black text-charcoal leading-none pointer-events-none select-none"
                >
                  {item.letter}
                </motion.span>

                <div className="relative z-10">
                  {/* Letter badge */}
                  <div className="w-14 h-14 bg-accent flex items-center justify-center mb-6">
                    <span className="font-swiss text-2xl font-bold text-white">{item.letter}</span>
                  </div>

                  <h3 className="headline-sm text-charcoal mb-4">{item.title}</h3>
                  <p className="body-text text-dark-grey mb-6">{item.description}</p>
                  
                  {/* Question prompt */}
                  <div className="pt-6 border-t border-light-grey">
                    <span className="label-sm text-mid-grey block mb-2">Key Question</span>
                    <p className="text-sm text-charcoal italic">"{item.detail}"</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mt-16 lg:mt-24 text-center"
        >
          <p className="body-lg text-dark-grey mb-8 max-w-2xl mx-auto">
            Have a decision you're wrestling with?
          </p>
          <motion.a
            href="#contact"
            className="inline-flex items-center gap-4 px-8 py-4 bg-charcoal text-white group hover:bg-accent transition-colors duration-300"
            whileHover={{ x: 4 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="font-medium">Enter The Decision Room</span>
            <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}



