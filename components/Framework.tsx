'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const framework = [
  {
    letter: 'A',
    title: 'Accountability',
    description: 'Taking responsibility for the decisions that shape your future. No more avoiding the hard conversations or delaying the inevitable.',
    detail: 'Who owns the decision? Who needs to be at the table?'
  },
  {
    letter: 'C',
    title: 'Clarity',
    description: 'Understanding what you truly want and why. Cutting through the noise of family dynamics, emotions, and assumptions to see reality clearly.',
    detail: 'What does success actually look like? What are you really trying to accomplish?'
  },
  {
    letter: 'T',
    title: 'Trade-offs',
    description: 'Every decision has consequences. Understanding what you gain and what you give up empowers you to make choices you can stand behind.',
    detail: 'What are you willing to accept? What is non-negotiable?'
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
              The <span className="text-accent font-bold">ACT</span> Framework
            </h2>
            <p className="body-text text-dark-grey mt-6 max-w-2xl">
              A simple yet powerful approach to navigating complex decisions. Because clarity 
              changes the quality of your decisions.
            </p>
          </motion.div>
        </div>

        {/* Framework cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
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
            Ready to apply the ACT Framework to your situation?
          </p>
          <motion.a
            href="#contact"
            className="inline-flex items-center gap-4 px-8 py-4 bg-charcoal text-white group hover:bg-accent transition-colors duration-300"
            whileHover={{ x: 4 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="font-medium">Start with a conversation</span>
            <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}



