'use client'

import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import ImagePlaceholder from './ImagePlaceholder'

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start']
  })

  const y = useTransform(scrollYProgress, [0, 1], [0, 150])
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])

  return (
    <section ref={containerRef} className="relative min-h-screen overflow-hidden bg-[#FAFAFA]">
      {/* Two-column layout: Image left, Content right */}
      <div className="min-h-screen flex flex-col lg:flex-row">
        {/* Left column - Image placeholder */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="relative lg:w-[45%] order-1 lg:order-1 h-[50vh] lg:h-auto flex items-end justify-center lg:justify-end"
        >
          <div className="relative h-full w-full flex items-center justify-center p-8 lg:p-12">
            <ImagePlaceholder
              variant="editorial"
              theme="sand"
              label="Molly — hero cutout"
              className="w-full max-w-md h-full max-h-[600px]"
            />
          </div>
        </motion.div>

        {/* Right column - Content */}
        <motion.div
          style={{ y, opacity }}
          className="relative z-10 flex items-center lg:w-[55%] order-2 lg:order-2"
        >
          <div className="container-custom py-16 lg:py-32 lg:pl-16 lg:pr-12">
            <div className="max-w-xl">
              {/* Headline */}
              <motion.h1
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.2, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
                className="text-[clamp(2.5rem,5.5vw,4rem)] leading-[1.08] font-display font-normal tracking-tight text-charcoal"
              >
                You don't have to figure it out alone.
              </motion.h1>

              {/* Subheadline */}
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className="mt-8 text-lg lg:text-xl text-dark-grey leading-relaxed"
              >
                I work with family business owners and leaders stepping into, through, or out of transition. The things that are too complicated, too personal, or too high-stakes to process internally. That's exactly why I'm here.
              </motion.p>

              {/* CTAs */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="mt-10"
              >
                <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                  <a
                    href="/contact"
                    className="group inline-flex"
                  >
                    <span className="px-8 py-4 bg-charcoal text-white text-sm font-semibold tracking-wider uppercase transition-all duration-500 group-hover:bg-accent">
                      Let's Grab a Virtual Coffee
                    </span>
                  </a>
                  <a
                    href="#services"
                    className="text-sm font-medium text-accent hover:text-charcoal transition-colors duration-300"
                  >
                    See How We Work Together →
                  </a>
                </div>
                <p className="mt-4 text-sm text-mid-grey">
                  Start with a few questions. No pitch. No pressure.
                </p>
              </motion.div>

              {/* Tagline */}
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 1, ease: [0.16, 1, 0.3, 1] }}
                className="mt-16 font-tagline text-sm text-mid-grey"
              >
                Lead with clarity. Make bold moves.
              </motion.p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          className="flex flex-col items-center gap-2"
        >
          <div className="w-px h-12 bg-gradient-to-b from-transparent via-accent to-transparent" />
        </motion.div>
      </motion.div>
    </section>
  )
}
