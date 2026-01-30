'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

// Jobs to Be Done - The ACTUAL decisions leaders are wrestling with
const jobsToBeDone = [
  {
    id: 'people',
    job: 'I need to let someone go',
    examples: 'A key leader. A family member. Someone who helped build this.',
    struggle: 'You know it needs to happen, but the personal cost feels unbearable.',
    outcome: 'Know exactly how to have the conversation—and feel at peace with it.',
  },
  {
    id: 'money',
    job: 'The numbers aren\'t working',
    examples: 'P&L decisions. Compensation changes. Budget cuts that hurt.',
    struggle: 'You see what the financials are telling you, but acting on it means hard conversations.',
    outcome: 'See the path forward and have a plan to communicate it clearly.',
  },
  {
    id: 'future',
    job: 'I\'m thinking about an exit',
    examples: 'Selling. Succession. Stepping back. Walking away.',
    struggle: 'Your identity is tied to this. The decision isn\'t just business—it\'s personal.',
    outcome: 'Get clarity on what you actually want and the courage to pursue it.',
  },
]

// The 3-Step Plan - StoryBrand
const plan = [
  {
    step: '01',
    title: 'Request a Session',
    description: 'Enter The Decision Room. Tell me what you\'re navigating—succession, a personnel change, a strategic pivot, a conversation you\'ve been avoiding.',
  },
  {
    step: '02',
    title: 'Explore What\'s at Stake',
    description: 'We dig into the real complexity. The business implications. The personal weight. The thing you haven\'t said out loud.',
  },
  {
    step: '03',
    title: 'Leave with Clarity',
    description: 'You walk out with a decision you can stand behind—and the conviction to act on it.',
  },
]

export default function Approach() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="approach" ref={ref} className="relative overflow-hidden">
      {/* Section 1: The Specific Jobs */}
      <div className="py-24 lg:py-32 bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <span className="inline-flex items-center gap-3 mb-6">
              <span className="w-8 h-px bg-accent" />
              <span className="text-xs tracking-[0.2em] uppercase text-dark-grey">What Leaders Call About</span>
            </span>
            <h2 className="text-3xl lg:text-4xl font-display text-charcoal leading-tight mb-8">
              The decisions you can't 
              <br />
              <span className="text-accent">talk to anyone else about.</span>
            </h2>
            <p className="text-lg text-dark-grey leading-relaxed">
              These aren't strategy questions. They're the personal, high-stakes decisions 
              that affect real people—including you. The ones where business and emotions collide.
            </p>
          </motion.div>

          {/* Jobs to Be Done Cards */}
          <div className="mt-16 grid md:grid-cols-3 gap-6">
            {jobsToBeDone.map((item, i) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.2 + i * 0.1 }}
                className="p-8 bg-[#FAFAFA] border border-light-grey hover:border-accent transition-colors duration-300"
              >
                <h3 className="text-xl font-display text-charcoal mb-2">"{item.job}"</h3>
                <p className="text-xs text-accent font-medium mb-4 tracking-wide">{item.examples}</p>
                <p className="text-sm text-dark-grey leading-relaxed mb-6">{item.struggle}</p>
                <div className="pt-4 border-t border-light-grey">
                  <p className="text-sm text-charcoal font-medium">{item.outcome}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Section 2: Authority - I can help because... */}
      <div className="py-24 lg:py-32 bg-charcoal text-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 1, delay: 0.3 }}
            >
              <span className="inline-flex items-center gap-3 mb-6">
                <span className="w-8 h-px bg-accent" />
                <span className="text-xs tracking-[0.2em] uppercase text-white/60">Your Guide</span>
              </span>
              <h2 className="text-3xl lg:text-4xl font-display leading-tight mb-6">
                I've been where you are.
                <br />
                <span className="text-accent">That's why I can help.</span>
              </h2>
              <p className="text-lg text-white/70 leading-relaxed mb-8">
                20+ years as a leader in a family business. President with full P&L. 
                CPA who understands what numbers reveal about people. Navigated succession, 
                identity shifts, and hard conversations that didn't go as planned.
              </p>
              <p className="text-lg text-white leading-relaxed font-medium">
                I've sat in your chair. I know what keeps you up at night.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 1, delay: 0.4 }}
              className="grid grid-cols-2 gap-4"
            >
              {[
                { number: '20+', label: 'Years Leading' },
                { number: '100+', label: 'Leaders Guided' },
                { number: 'CPA', label: 'Financial Expertise' },
                { number: '∞', label: 'Hard Conversations' },
              ].map((stat, i) => (
                <div 
                  key={stat.label}
                  className={`p-6 ${i === 0 ? 'bg-accent' : 'border border-white/20'}`}
                >
                  <span className="text-3xl lg:text-4xl font-display text-white">{stat.number}</span>
                  <p className="text-sm text-white/70 mt-2">{stat.label}</p>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>

      {/* Section 3: The Plan - Simple 3 steps */}
      <div className="py-24 lg:py-32 bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-center mb-16"
          >
            <span className="inline-flex items-center gap-3 mb-6 justify-center">
              <span className="w-8 h-px bg-accent" />
              <span className="text-xs tracking-[0.2em] uppercase text-dark-grey">The Plan</span>
              <span className="w-8 h-px bg-accent" />
            </span>
            <h2 className="text-3xl lg:text-4xl font-display text-charcoal">
              Three steps to clarity
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {plan.map((item, i) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.6 + i * 0.1 }}
                className="relative"
              >
                {/* Connector line */}
                {i < plan.length - 1 && (
                  <div className="hidden md:block absolute top-8 left-full w-full h-px bg-light-grey -translate-x-1/2 z-0" />
                )}
                
                <div className="relative z-10 text-center">
                  <div className="w-16 h-16 mx-auto mb-6 bg-accent text-white flex items-center justify-center">
                    <span className="text-xl font-display">{item.step}</span>
                  </div>
                  <h3 className="text-xl font-display text-charcoal mb-4">{item.title}</h3>
                  <p className="text-sm text-dark-grey leading-relaxed">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="mt-16 text-center"
          >
            <a 
              href="#contact"
              className="inline-flex items-center gap-4 group"
            >
              <span className="px-8 py-4 bg-charcoal text-white text-sm font-semibold tracking-wider uppercase transition-all duration-500 group-hover:bg-accent">
                Enter The Decision Room
              </span>
              <span className="w-12 h-12 flex items-center justify-center border border-charcoal text-charcoal transition-all duration-500 group-hover:bg-charcoal group-hover:text-white">
                →
              </span>
            </a>
          </motion.div>
        </div>
      </div>

      {/* Section 4: Stakes - What's at risk */}
      <div className="py-16 lg:py-20 bg-[#FAFAFA] border-y border-light-grey">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              <h3 className="text-2xl font-display text-charcoal mb-4">
                The cost of waiting
              </h3>
              <p className="text-dark-grey leading-relaxed">
                Every week you delay that conversation, avoid that decision, or carry that weight alone—
                it compounds. Stress builds. Opportunities pass. Relationships strain. 
                You deserve better than leading on empty.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="lg:text-right"
            >
              <h3 className="text-2xl font-display text-accent mb-4">
                What's possible
              </h3>
              <p className="text-dark-grey leading-relaxed">
                Imagine walking into Monday morning with clarity. Knowing exactly what to say, 
                who to talk to, what to do. Feeling calm, confident, and ready to lead. 
                That's not a dream—it's one conversation away.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
