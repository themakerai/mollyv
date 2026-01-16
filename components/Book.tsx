'use client'

import { useRef } from 'react'
import Image from 'next/image'
import { motion, useInView, useScroll, useTransform } from 'framer-motion'

const SUPABASE_URL = 'https://cgcdiiksjmubatinthdr.supabase.co/storage/v1/object/public/site-images'

export default function Book() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start']
  })

  const imageY = useTransform(scrollYProgress, [0, 1], [50, -50])

  return (
    <section ref={ref} className="py-32 lg:py-48 bg-charcoal relative overflow-hidden">
      {/* Large background text */}
      <motion.div
        style={{ y: useTransform(scrollYProgress, [0, 1], [0, -100]) }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none select-none"
      >
        <span className="font-swiss text-[15vw] text-white/[0.03] whitespace-nowrap font-black uppercase tracking-tight">
          Me & Steve
        </span>
      </motion.div>

      {/* Geometric accent */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={isInView ? { scaleX: 1 } : {}}
        transition={{ duration: 1.2, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
        className="absolute top-0 right-0 w-1/3 h-2 bg-accent origin-right"
      />

      <div className="container-custom relative z-10">
        <div className="grid-12 items-center">
          {/* Book preview with author image */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="col-span-12 lg:col-span-5 mb-12 lg:mb-0"
          >
            <motion.div style={{ y: imageY }} className="relative">
              {/* Author image */}
              <div className="aspect-[3/4] relative overflow-hidden">
                <Image
                  src={`${SUPABASE_URL}/molly-inside.png`}
                  alt="Molly Varangkounh - Author"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 40vw"
                />
                
                {/* Overlay with book title */}
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/60 to-transparent" />
                
                {/* Book cover content overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <span className="text-[10px] tracking-[0.2em] uppercase text-accent block mb-4">A Memoir • Coming Soon</span>
                  <h3 className="font-script text-5xl lg:text-7xl text-white mb-2">
                    Me
                  </h3>
                  <div className="flex items-center gap-3">
                    <span className="text-4xl lg:text-5xl text-accent font-script">&</span>
                    <span className="text-3xl lg:text-4xl text-white font-bold uppercase tracking-tight">
                      Steve
                    </span>
                  </div>
                </div>
                
                {/* Accent bar */}
                <div className="absolute top-0 left-0 w-1 h-full bg-accent" />
              </div>

              {/* Coming soon badge */}
              <motion.div
                initial={{ scale: 0, rotate: -12 }}
                animate={isInView ? { scale: 1, rotate: -12 } : {}}
                transition={{ duration: 0.6, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="absolute -top-4 -right-4 bg-accent px-4 py-2"
              >
                <span className="label-sm text-white">Coming 2025</span>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Content */}
          <div className="col-span-12 lg:col-span-6 lg:col-start-7">
            <motion.div
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="flex items-center gap-4 mb-6"
            >
              <span className="w-2 h-2 bg-accent" />
              <span className="label-sm text-white/60">03 — The Book</span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 60 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="text-[clamp(2rem,5vw,4rem)] leading-tight font-semibold text-white mb-8"
            >
              Two decades inside.{' '}
              <span className="font-script text-[clamp(3rem,8vw,7rem)] text-accent">Now alongside.</span>
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="space-y-6"
            >
              <p className="body-lg text-white/80">
                A personal story of navigating succession, shifting authority, and identity change 
                from the inside of a family-owned manufacturing business.
              </p>
              <p className="body-text text-white/60">
                The greatest risks were rarely operational—they were emotional. This book is for 
                anyone leading within a family business, struggling to lead authentically, or 
                facing decisions about their own future journey.
              </p>
            </motion.div>

            {/* Book themes */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="mt-12 grid grid-cols-2 gap-4"
            >
              {['Family Businesses', 'Authentic Leadership', 'Finding Your Voice', 'Living Your Truth'].map((theme, i) => (
                <div key={theme} className="p-4 border border-white/10 hover:border-accent/50 transition-colors duration-300">
                  <span className="text-sm text-white/80">{theme}</span>
                </div>
              ))}
            </motion.div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="mt-12"
            >
              <motion.a
                href="#contact"
                className="inline-flex items-center gap-4 group"
                whileHover={{ x: 8 }}
                transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              >
                <span className="text-lg text-white font-medium">Get notified on launch</span>
                <span className="w-12 h-12 border border-white/20 flex items-center justify-center group-hover:border-accent group-hover:bg-accent transition-all duration-300">
                  <span className="text-white text-xl">→</span>
                </span>
              </motion.a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}



