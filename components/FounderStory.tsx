'use client'

import { useRef } from 'react'
import { motion, useInView, useScroll, useTransform } from 'framer-motion'
import ImagePlaceholder from './ImagePlaceholder'

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
        {/* Section Header */}
        <div className="grid-12 mb-16 lg:mb-24">
          <div className="col-span-12">
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
              <span className="label-md text-accent tracking-widest">Meet Molly</span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 60 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="headline-lg text-charcoal max-w-4xl"
            >
              Two decades leading.
              <br />
              <span className="font-script text-accent lowercase">Now guiding.</span>
            </motion.h2>
          </div>
        </div>

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
              
              <ImagePlaceholder
                variant="editorial"
                theme="sand"
                label="Molly — candid"
                className="relative"
              />
              
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
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="space-y-6"
            >
              <p className="body-text">
                After more than two decades leading a family-owned manufacturing business, Molly Varangkounh understands firsthand what it means to carry <strong className="text-charcoal">full responsibility for people, performance, and outcomes</strong>. She served as President, accountable for the P&L, total business performance, and the decisions that determined the company&apos;s future.
              </p>
              <p className="body-text">
                She led through growth pressure, operational complexity, succession dynamics, and emotionally charged decisions where business outcomes and personal relationships couldn't be separated.
              </p>
            </motion.div>

            {/* Key insight - emphasized */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="my-8 p-6 bg-accent/10 border-l-4 border-accent"
            >
              <p className="text-lg lg:text-xl font-semibold text-charcoal leading-relaxed">
                The most significant risks facing businesses were rarely just operational. They were human.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="space-y-6"
            >
              <p className="body-text">
                Avoided conversations, misread signals, and delayed decisions quietly eroded momentum long before problems showed up on paper. <strong className="text-charcoal">Molly understands the numbers and the people behind them.</strong>
              </p>
              <p className="body-text">
                As a former CPA with CFO-level experience, she helps leaders <strong className="text-charcoal">understand the story their business is telling them</strong>. She translates financial insight into clarity about leadership decisions, organizational capacity, and long-term sustainability.
              </p>
            </motion.div>
          </div>
        </div>

        {/* Expanded Story Section */}
        <div className="grid-12 mt-20 lg:mt-32">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="col-span-12 lg:col-span-10 lg:col-start-2"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
              {/* Leadership Experience */}
              <div className="space-y-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-[2px] bg-accent" />
                  <span className="label-sm text-accent">Leadership Experience</span>
                </div>
                <p className="body-text">
                  Molly has led and influenced <strong className="text-charcoal">high-stakes decision-making in male-dominated industries</strong> including agriculture and manufacturing. She brings calm authority into complex rooms, challenges assumptions with confidence, and guides leaders through difficult conversations.
                </p>
                <p className="body-text">
                  She led through uncertainty, resistance, and change. In those environments, clarity, credibility, and decisiveness were the only currency that worked.
                </p>
              </div>

              {/* Why Advisory Work */}
              <div className="space-y-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-[2px] bg-accent" />
                  <span className="label-sm text-accent">The Call to Guide</span>
                </div>
                <p className="body-text">
                  Today, Molly brings that lived leadership experience into her advisory work. She serves as a <strong className="text-charcoal">steady, trusted guide</strong> for leaders facing high-stakes decisions they cannot afford to get wrong.
                </p>
                <p className="body-text">
                  She helps leaders <strong className="text-charcoal">face reality honestly, ask the hard questions</strong>, and move forward with clarity, confidence, and steadiness.
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* The Outcome */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="mt-20 lg:mt-32 bg-charcoal text-white p-10 lg:p-16"
        >
          <div className="grid-12 items-center">
            <div className="col-span-12 lg:col-span-8">
              <span className="label-sm text-accent mb-4 block">The Outcome</span>
              <p className="text-xl lg:text-2xl font-light leading-relaxed">
                Leaders leave with the ability to <strong className="text-white">settle into their thinking</strong>, <strong className="text-white">carry the weight more honestly</strong>, and <strong className="text-white">move forward with confidence</strong> rather than hesitation. Grounded and clear-headed.
              </p>
            </div>
            <div className="col-span-12 lg:col-span-3 lg:col-start-10 mt-8 lg:mt-0">
              <div className="text-right">
                <span className="font-script text-accent text-3xl lg:text-4xl lowercase">clarity + courage</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Values preview */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mt-16 pt-8 border-t border-light-grey"
        >
          <div className="grid-12">
            <div className="col-span-12 lg:col-span-3">
              <span className="label-sm text-mid-grey mb-6 block">Grounded In</span>
            </div>
            <div className="col-span-12 lg:col-span-9">
              <div className="flex flex-wrap gap-3">
                {[
                  '20+ Years Leading',
                  'President & P&L Owner',
                  'Former CPA',
                  'CFO-Level Experience',
                  'Emotional Intelligence',
                  'Lived Experience',
                  'Family Business Navigation',
                  'Succession Planning'
                ].map((item) => (
                  <span 
                    key={item}
                    className="px-4 py-2 text-sm text-charcoal bg-off-white border border-light-grey"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
