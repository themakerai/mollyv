'use client'

import { useRef } from 'react'
import { motion, useInView, useScroll, useTransform } from 'framer-motion'

export default function Vision() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start']
  })

  const backgroundY = useTransform(scrollYProgress, [0, 1], [0, -100])
  const textX = useTransform(scrollYProgress, [0, 1], [0, -50])

  return (
    <section ref={ref} className="relative py-32 lg:py-48 bg-charcoal overflow-hidden">
      {/* Large background geometric shape */}
      <motion.div
        style={{ y: backgroundY }}
        className="absolute -right-32 top-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent/10 rotate-45"
      />

      {/* Swiss cross element */}
      <motion.div
        initial={{ scale: 0, rotate: -45 }}
        animate={isInView ? { scale: 1, rotate: 0 } : {}}
        transition={{ duration: 1.2, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
        className="absolute right-16 top-16 hidden lg:block"
      >
        <div className="relative w-24 h-24">
          <div className="absolute top-1/2 left-0 w-full h-3 bg-accent -translate-y-1/2" />
          <div className="absolute left-1/2 top-0 w-3 h-full bg-accent -translate-x-1/2" />
        </div>
      </motion.div>

      {/* Large scrolling background text */}
      <motion.div
        style={{ x: textX }}
        className="absolute bottom-20 left-0 pointer-events-none select-none"
      >
        <span className="font-swiss text-[20vw] font-black text-white/5 whitespace-nowrap uppercase">
          Vision
        </span>
      </motion.div>

      <div className="container-custom relative z-10">
        <div className="grid-12">
          {/* Section number */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="col-span-12 lg:col-span-2 mb-8 lg:mb-0"
          >
            <div className="flex items-center gap-4">
              <span className="w-2 h-2 bg-accent" />
              <span className="label-sm text-mid-grey">02</span>
            </div>
          </motion.div>

          {/* Content */}
          <div className="col-span-12 lg:col-span-9 lg:col-start-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="mb-6"
            >
              <span className="label-md text-accent tracking-widest">Vision</span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 60 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="headline-lg text-white leading-tight"
            >
              A world where leaders meet change with{' '}
              <span className="text-accent">clarity and confidence</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="text-xl lg:text-2xl text-mid-grey mt-8 lg:mt-12 max-w-2xl font-light"
            >
              They have the courage to hold open, proactive conversations and navigate complexity 
              without losing themselves or second-guessing their authority. Their leadership strengthens 
              both their businesses and their relationships through every season of change.
            </motion.p>

            {/* Geometric divider */}
            <motion.div
              initial={{ scaleX: 0 }}
              animate={isInView ? { scaleX: 1 } : {}}
              transition={{ duration: 1.2, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="flex items-center gap-4 mt-16 lg:mt-24 origin-left"
            >
              <div className="w-16 h-1 bg-accent" />
              <div className="flex-1 h-px bg-dark-grey" />
            </motion.div>

            {/* Quote - Swiss style */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="mt-12 lg:mt-16 flex items-start gap-6"
            >
              <span className="text-5xl lg:text-6xl font-script text-accent leading-none tracking-normal">"</span>
              <div>
                <p className="text-xl lg:text-2xl text-white leading-relaxed font-light">
                  Clarity changes the quality of your decisions.
                </p>
                <div className="flex items-center gap-4 mt-6">
                  <div className="w-8 h-px bg-accent" />
                  <p className="label-sm text-mid-grey">Molly Varangkounh</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Bottom accent bar */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={isInView ? { scaleX: 1 } : {}}
        transition={{ duration: 1.5, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
        className="absolute bottom-0 left-0 right-0 h-2 bg-accent origin-left"
      />
    </section>
  )
}
