'use client'

import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start']
  })

  const y = useTransform(scrollYProgress, [0, 1], [0, 150])
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])

  return (
    <section ref={containerRef} className="relative min-h-screen overflow-hidden bg-charcoal">
      {/* Subtle geometric accent — top-left corner */}
      <div className="absolute top-0 left-0 w-[40%] h-[1px] bg-gradient-to-r from-accent/40 to-transparent" />
      <div className="absolute top-0 left-0 w-[1px] h-[30%] bg-gradient-to-b from-accent/40 to-transparent" />

      {/* Two-column layout: Image left, Content right */}
      <div className="min-h-screen flex flex-col lg:flex-row">
        {/* Left column - Cutout Image */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="relative lg:w-[45%] order-1 lg:order-1 h-[55vh] lg:h-auto flex items-end justify-center lg:justify-end pt-20 lg:pt-24"
        >
          <div className="relative h-full w-full max-w-lg lg:max-w-none">
            {/* Placeholder — drop cutout PNG at /public/molly-hero-cutout.png to replace */}
            <div className="relative h-full w-full flex items-end justify-center">
              <div className="relative w-full h-full">
                {/* Placeholder silhouette */}
                <div className="absolute inset-0 flex flex-col items-center justify-end">
                  <div className="relative w-[80%] max-w-sm h-[85%] rounded-t-full bg-gradient-to-b from-accent/20 to-accent/5 border border-accent/20 flex flex-col items-center justify-center">
                    <span className="text-6xl lg:text-8xl font-display text-accent/30 select-none">MV</span>
                    <span className="mt-2 text-xs tracking-widest uppercase text-accent/40 select-none">Photo placeholder</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Blue accent line at bottom of image */}
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 1, delay: 1, ease: [0.16, 1, 0.3, 1] }}
              className="absolute bottom-0 left-0 right-0 h-[3px] bg-accent origin-left z-10"
            />
          </div>
        </motion.div>

        {/* Right column - Content */}
        <motion.div
          style={{ y, opacity }}
          className="relative z-10 flex items-center lg:w-[55%] order-2 lg:order-2"
        >
          <div className="container-custom pt-24 pb-12 lg:pt-32 lg:pb-32 lg:pl-16 lg:pr-12">
            <div className="max-w-xl">
              {/* Headline */}
              <motion.h1
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.2, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
                className="text-[clamp(2.5rem,5.5vw,4rem)] leading-[1.08] font-display font-normal tracking-tight text-white"
              >
                Some decisions are too personal to think through{' '}
                <span className="text-accent">alone.</span>
              </motion.h1>

              {/* Subheadline */}
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className="mt-8 text-lg lg:text-xl text-white/70 leading-relaxed"
              >
                I work with family business owners and the leaders stepping into, through, or out of transition. The decisions that are too complicated, too personal, or too high-stakes to process internally. That's exactly why I'm here.
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
                    <span className="px-8 py-4 bg-accent text-white text-sm font-semibold tracking-wider uppercase transition-all duration-500 group-hover:bg-accent-light">
                      Let's Grab a Virtual Coffee
                    </span>
                  </a>
                  <a
                    href="#services"
                    className="text-sm font-medium text-accent-light hover:text-white transition-colors duration-300"
                  >
                    See How We Work Together →
                  </a>
                </div>
                <p className="mt-4 text-sm text-white/40">
                  Start with a few questions. No pitch. No pressure.
                </p>
              </motion.div>

              {/* Tagline */}
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 1, ease: [0.16, 1, 0.3, 1] }}
                className="mt-16 font-tagline text-sm text-sand/60"
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
