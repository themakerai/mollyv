'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const painPoints = [
  {
    id: 'isolation',
    title: 'Carrying the Weight Alone',
    description: 'Leading with significant responsibility but without a trusted space to think or speak openly. Decisions feel too complex or sensitive to process internally.',
    solution: 'A safe, confidential space for honest conversation where you can process complexity without judgment.'
  },
  {
    id: 'systems',
    title: 'Outgrown Systems',
    description: 'Navigating growth pressure, outdated systems, and people challenges while knowing the business requires change—but infrastructure isn\'t aligned to move forward.',
    solution: 'Clarity on what needs to change and practical support to move your organization forward.'
  },
  {
    id: 'identity',
    title: 'Identity Shifts',
    description: 'Experiencing uncertainty tied to leadership expectations, generational dynamics, and personal transitions. Questioning whether your current path still aligns with your values.',
    solution: 'Space to explore alignment between who you are and where you\'re going as a leader.'
  },
  {
    id: 'alignment',
    title: 'Alignment Without Consensus',
    description: 'Expected to move people forward while knowing consensus isn\'t always possible. Unspoken tension slows momentum; decisive action feels risky.',
    solution: 'Support to build alignment, navigate difficult conversations, and lead with conviction while caring for people.'
  },
  {
    id: 'delay',
    title: 'The Cost of Delay',
    description: 'Feeling the weight of postponed decisions—the risk of burnout, regret, and unintended consequences that come from avoiding what needs to happen.',
    solution: 'Accountability and structure to move forward with confidence rather than hesitation.'
  }
]

export default function Approach() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="approach" ref={ref} className="py-32 lg:py-48 bg-white relative overflow-hidden">
      {/* Swiss grid background */}
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
              <span className="label-sm text-dark-grey">01</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="col-span-12 lg:col-span-9 lg:col-start-4 mt-6 lg:mt-0"
          >
            <span className="label-md text-accent tracking-widest mb-4 block">Who This Is For</span>
            <h2 className="headline-md text-charcoal mb-6">
              You don't have to lead{' '}
              <span className="text-accent font-semibold">in isolation.</span>
            </h2>
            <p className="body-lg text-dark-grey max-w-2xl">
              If you're a leader navigating high-stakes decisions while carrying weight that's hard to share, 
              you're not alone. These challenges are more common than they appear—and more solvable than they feel.
            </p>
          </motion.div>
        </div>

        {/* Pain Points Grid */}
        <div className="space-y-6">
          {painPoints.map((point, i) => (
            <motion.div
              key={point.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.3 + i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="border border-light-grey hover:border-accent transition-colors duration-500 group"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12">
                {/* Problem */}
                <div className="lg:col-span-7 p-6 lg:p-8 border-b lg:border-b-0 lg:border-r border-light-grey">
                  <div className="flex items-start gap-4">
                    <span className="label-sm text-mid-grey font-mono mt-1">0{i + 1}</span>
                    <div>
                      <h3 className="headline-sm text-charcoal mb-3 group-hover:text-accent transition-colors duration-300">
                        {point.title}
                      </h3>
                      <p className="body-text text-dark-grey">
                        {point.description}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Solution */}
                <div className="lg:col-span-5 p-6 lg:p-8 bg-off-white/50 flex items-center">
                  <div className="flex items-start gap-4">
                    <div className="w-2 h-2 bg-accent mt-2 flex-shrink-0" />
                    <p className="text-sm text-charcoal font-medium leading-relaxed">
                      {point.solution}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Positioning Statement */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mt-20 lg:mt-28 bg-charcoal p-8 lg:p-12 relative overflow-hidden"
        >
          {/* Background pattern */}
          <div 
            className="absolute inset-0 opacity-5"
            style={{
              backgroundImage: `repeating-linear-gradient(45deg, white 0, white 1px, transparent 0, transparent 50%)`,
              backgroundSize: '20px 20px'
            }}
          />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
            <div className="lg:col-span-7">
              <span className="label-sm text-accent mb-4 block">The Approach</span>
              <h3 className="text-2xl lg:text-3xl font-semibold text-white leading-tight mb-6">
                Clarity, courage, and proactive leadership in moments that{' '}
                <span className="text-accent-light font-bold">matter most.</span>
              </h3>
              <p className="body-text text-white/70">
                Rather than offering prescriptive answers or surface-level motivation, I help leaders 
                address reality honestly. The focus is on <strong className="text-white">alignment over consensus</strong>, 
                honest conversation over avoidance, and thoughtful action over delay.
              </p>
            </div>

            <div className="lg:col-span-5 lg:col-start-8 flex flex-col justify-center">
              <div className="space-y-4">
                {[
                  { label: 'Lived Experience', desc: '20+ years inside family business' },
                  { label: 'Emotional Intelligence', desc: 'Addressing the human side of leadership' },
                  { label: 'Business Acumen', desc: 'Practical understanding of what works' }
                ].map((item, i) => (
                  <div key={item.label} className="flex items-start gap-4">
                    <div className="w-6 h-[2px] bg-accent mt-3" />
                    <div>
                      <span className="text-sm font-semibold text-white block">{item.label}</span>
                      <span className="text-xs text-white/50">{item.desc}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
