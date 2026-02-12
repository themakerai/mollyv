'use client'

import { useRef } from 'react'
import Image from 'next/image'
import { motion, useScroll, useTransform } from 'framer-motion'

const HERO_IMAGE_URL = 'https://cgcdiiksjmubatinthdr.supabase.co/storage/v1/object/public/site-images/molly-headshot-landscape.png'

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
      {/* Two-column layout */}
      <div className="min-h-screen flex flex-col lg:flex-row">
        {/* Left column - Content */}
        <motion.div 
          style={{ y, opacity }}
          className="relative z-10 flex items-center lg:w-1/2 order-2 lg:order-1"
        >
          <div className="container-custom py-16 lg:py-32 lg:pr-12">
            <div className="max-w-xl">
              {/* Headline */}
              <motion.h1
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.2, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
                className="text-[clamp(2.5rem,5.5vw,4rem)] leading-[1.08] font-display font-normal tracking-tight text-charcoal"
              >
                Some decisions are too personal to think through alone.
              </motion.h1>

              {/* Subheadline */}
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className="mt-8 text-lg lg:text-xl text-dark-grey leading-relaxed"
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

        {/* Right column - Image */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.2, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="relative lg:w-1/2 order-1 lg:order-2 h-[50vh] lg:h-auto"
        >
          <div className="relative h-full w-full">
            <Image
              src={HERO_IMAGE_URL}
              alt="Molly Varangkounh"
              fill
              className="object-cover object-top"
              sizes="(max-width: 1024px) 100vw, 50vw"
              priority
            />
            {/* Subtle gradient fade on left edge for desktop */}
            <div className="hidden lg:block absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[#FAFAFA] to-transparent" />
            {/* Bottom gradient for mobile */}
            <div className="lg:hidden absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#FAFAFA] to-transparent" />
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
