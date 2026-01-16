'use client'

import { useRef } from 'react'
import Image from 'next/image'
import { motion, useInView, useScroll, useTransform } from 'framer-motion'

const SUPABASE_URL = 'https://cgcdiiksjmubatinthdr.supabase.co/storage/v1/object/public/site-images'

export default function FounderStory() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start']
  })

  const imageY = useTransform(scrollYProgress, [0, 1], [60, -60])

  return (
    <section ref={ref} className="py-32 lg:py-48 bg-white relative overflow-hidden">
      {/* Swiss grid overlay */}
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

      <div className="container-custom relative z-10">
        <div className="grid-12 items-start">
          {/* Image section with Swiss treatment */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="col-span-12 lg:col-span-5 mb-12 lg:mb-0"
          >
            <motion.div style={{ y: imageY }} className="relative">
              {/* Blue accent block behind image */}
              <div className="absolute -left-4 -top-4 w-full h-full bg-accent" />
              
              <div className="relative aspect-[4/5] bg-light-grey overflow-hidden">
                <Image
                  src={`${SUPABASE_URL}/molly-headshot-navy.png`}
                  alt="Molly Varangkounh - Leadership Advisor"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 40vw"
                />
                
                {/* Subtle overlay for depth */}
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/20 via-transparent to-transparent" />
              </div>
              
              {/* Caption - Swiss style */}
              <div className="mt-6 flex items-center justify-between">
                <span className="label-sm text-dark-grey">Founder & Advisor</span>
                <div className="flex items-center gap-2">
                  <div className="w-4 h-[2px] bg-accent" />
                  <span className="label-sm text-accent">Est. 2020</span>
                </div>
              </div>
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
              <span className="accent-dot" />
              <span className="label-sm text-dark-grey">04</span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="mb-8"
            >
              <span className="label-md text-accent tracking-widest">The Story</span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 60 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="headline-md text-charcoal mb-10"
            >
              Two decades inside.{' '}
              <span className="font-script italic text-accent">Now alongside.</span>
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="space-y-6"
            >
              <p className="body-text">
                After more than two decades inside a family-owned manufacturing business, 
                where leadership decisions carried both business and personal weight, 
                Molly Varangkounh saw firsthand how often <strong className="text-charcoal">difficult conversations were 
                delayed</strong> and <strong className="text-charcoal">clarity was avoided</strong>.
              </p>
              <p className="body-text">
                Navigating succession, shifting authority, and identity change from the 
                inside revealed a consistent pattern:{' '}
              </p>
            </motion.div>

            {/* Key insight - emphasized */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="my-8 p-6 bg-accent/10 border-l-4 border-accent"
            >
              <p className="text-lg lg:text-xl font-semibold text-charcoal leading-relaxed">
                The greatest risks were rarely operational—they were emotional.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="space-y-6"
            >
              <p className="body-text">
                Recognizing that leaders lacked a <strong className="text-charcoal">trusted space</strong> to address these realities 
                honestly, Molly stepped into advisory work to fill that gap.
              </p>
              <p className="body-text">
                Today, she works as a steady, experienced guide for leaders facing 
                high-stakes decisions they cannot afford to get wrong—grounded in lived experience, 
                open communication, and the belief that <strong className="text-charcoal">proactive conversations</strong> lead to 
                stronger businesses, healthier leadership, and fewer regrets over time.
              </p>
            </motion.div>

            {/* Values preview */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="mt-12 pt-8 border-t border-light-grey"
            >
              <span className="label-sm text-mid-grey mb-4 block">Grounded In</span>
              <div className="flex flex-wrap gap-3">
                {['Lived Experience', 'Open Communication', 'Proactive Conversations', 'Long-term Thinking'].map((item) => (
                  <span 
                    key={item}
                    className="px-4 py-2 text-sm text-charcoal bg-off-white border border-light-grey"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
