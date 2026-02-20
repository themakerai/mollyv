'use client'

import { useRef, useState } from 'react'
import { motion, useInView, useScroll, useTransform } from 'framer-motion'

export default function Book() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [email, setEmail] = useState('')
  
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start']
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle waitlist signup
    console.log('Waitlist signup:', email)
    setEmail('')
  }

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

      {/* Geometric accents */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={isInView ? { scaleX: 1 } : {}}
        transition={{ duration: 1.2, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
        className="absolute top-0 left-0 w-1/4 h-1 bg-accent origin-left"
      />
      <motion.div
        initial={{ scaleX: 0 }}
        animate={isInView ? { scaleX: 1 } : {}}
        transition={{ duration: 1.2, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
        className="absolute bottom-0 right-0 w-1/4 h-1 bg-accent origin-right"
      />

      <div className="container-custom relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          {/* Label */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="flex items-center justify-center gap-4 mb-8"
          >
            <span className="w-8 h-px bg-accent" />
            <span className="label-sm text-white/60">A Memoir · Coming Soon</span>
            <span className="w-8 h-px bg-accent" />
          </motion.div>

          {/* Title */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="mb-6"
          >
            <h2 className="font-script text-5xl lg:text-7xl text-white lowercase">
              me <span className="text-accent">&</span> Steve
            </h2>
          </motion.div>

          {/* Headline */}
          <motion.h3
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="text-2xl lg:text-3xl font-semibold text-white mb-8"
          >
            This is the book I didn't plan to write.
          </motion.h3>

          {/* Description */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="space-y-4 mb-12"
          >
            <p className="body-lg text-white/80">
              It's about succession that didn't go the way anyone expected. About identity that gets wrapped up in a business you've given twenty years to. About realizing the plan you had and the future you're actually building aren't pointing in the same direction, and what happens when you finally face that honestly.
            </p>
            <p className="body-text text-white/60">
              If you've led a family business through a transition that no one outside the room fully understood, this book is for you.
            </p>
          </motion.div>

          {/* Waitlist Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="flex-1 px-6 py-4 bg-white/5 border border-white/10 text-white placeholder:text-white/40 focus:outline-none focus:border-accent transition-colors"
                required
              />
              <button
                type="submit"
                className="px-8 py-4 bg-accent text-white font-semibold text-sm tracking-wider uppercase hover:bg-accent/90 transition-colors"
              >
                Join Waitlist
              </button>
            </form>
            <p className="mt-4 text-sm text-white/40">
              Be the first to know when it's available.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}



