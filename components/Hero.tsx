'use client'

import { useRef } from 'react'
import Image from 'next/image'
import { motion, useScroll, useTransform } from 'framer-motion'

const SUPABASE_URL = 'https://cgcdiiksjmubatinthdr.supabase.co/storage/v1/object/public/site-images'

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start']
  })

  const y = useTransform(scrollYProgress, [0, 1], [0, 200])
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.95])
  const imageY = useTransform(scrollYProgress, [0, 1], [0, 100])

  const textVariants = {
    hidden: { y: 100, opacity: 0 },
    visible: (i: number) => ({
      y: 0,
      opacity: 1,
      transition: {
        duration: 1.2,
        delay: i * 0.1,
        ease: [0.16, 1, 0.3, 1]
      }
    })
  }

  return (
    <section ref={containerRef} className="relative min-h-[100vh] flex items-center overflow-hidden bg-white">
      {/* Subtle grid background */}
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

      {/* Hero image - right side */}
      <motion.div
        style={{ y: imageY }}
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.2, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
        className="absolute right-0 top-0 bottom-0 w-[45%] hidden lg:block"
      >
        <div className="relative h-full">
          <Image
            src={`${SUPABASE_URL}/molly-headshot-landscape.png`}
            alt="Molly Varangkounh"
            fill
            className="object-cover object-top"
            sizes="45vw"
            priority
          />
          {/* Gradient overlay for text readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-white via-white/50 to-transparent" />
          {/* Accent bar */}
          <div className="absolute bottom-0 left-0 w-1 h-1/3 bg-accent" />
        </div>
      </motion.div>

      {/* Blue accent block */}
      <motion.div
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 1 }}
        transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
        className="absolute left-0 top-1/3 w-3 lg:w-4 h-40 lg:h-56 bg-accent origin-top"
      />

      <motion.div 
        style={{ y, opacity, scale }}
        className="container-custom relative z-10 pt-28 lg:pt-36"
      >
        {/* Label */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="flex items-center gap-3 mb-6 lg:mb-10"
        >
          <span className="w-2 h-2 bg-accent" />
          <span className="text-xs tracking-[0.2em] uppercase text-dark-grey font-medium">Trusted Advisor for Leaders</span>
        </motion.div>

        {/* Main headline - speaks to pain point */}
        <div className="max-w-[1200px]">
          <div className="text-reveal">
            <motion.h1
              custom={0}
              initial="hidden"
              animate="visible"
              variants={textVariants}
              className="text-[clamp(2.5rem,8vw,6rem)] leading-[0.95] font-bold tracking-tight text-charcoal"
            >
              When the stakes are high
            </motion.h1>
          </div>
          <div className="text-reveal mt-2">
            <motion.h1
              custom={1}
              initial="hidden"
              animate="visible"
              variants={textVariants}
              className="text-[clamp(2.5rem,8vw,6rem)] leading-[0.95] font-bold tracking-tight text-charcoal"
            >
              and the path forward
            </motion.h1>
          </div>
          <div className="text-reveal flex items-baseline gap-3 lg:gap-6 mt-1 overflow-visible">
            <motion.span
              custom={2}
              initial="hidden"
              animate="visible"
              variants={textVariants}
              className="font-script text-[clamp(4rem,14vw,10rem)] text-accent leading-[1.3] py-2"
            >
              feels uncertain.
            </motion.span>
          </div>
        </div>

        {/* Subheadline - the promise */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mt-12 lg:mt-16 max-w-lg"
        >
          <p className="text-lg lg:text-xl text-dark-grey leading-relaxed">
            A trusted guide for leaders navigating complex, emotionally charged decisions—helping you 
            find <strong className="text-charcoal">clarity</strong>, take <strong className="text-charcoal">responsibility</strong>, and move forward with <strong className="text-charcoal">intention</strong>.
          </p>
        </motion.div>

        {/* Tagline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="mt-8"
        >
          <p className="text-sm tracking-[0.15em] uppercase font-semibold text-accent">
            Lead with clarity. Make bold moves.
          </p>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1, ease: [0.16, 1, 0.3, 1] }}
          className="mt-10 flex flex-wrap gap-4"
        >
          <a 
            href="#contact"
            className="inline-flex items-center gap-3 px-6 py-3 bg-charcoal text-white text-sm font-medium tracking-wide hover:bg-accent transition-colors duration-300"
          >
            Start a Conversation
            <span>→</span>
          </a>
          <a 
            href="#approach"
            className="inline-flex items-center gap-3 px-6 py-3 border border-charcoal text-charcoal text-sm font-medium tracking-wide hover:bg-charcoal hover:text-white transition-all duration-300"
          >
            How I Can Help
          </a>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="absolute bottom-12 left-6 lg:left-12"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            className="flex flex-col items-center gap-3"
          >
            <span className="text-[10px] tracking-[0.2em] uppercase text-mid-grey [writing-mode:vertical-lr]">Scroll</span>
            <div className="w-[1px] h-12 bg-light-grey relative overflow-hidden">
              <motion.div
                animate={{ y: [-48, 48] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: 'linear' }}
                className="absolute top-0 left-0 w-full h-6 bg-accent"
              />
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  )
}
