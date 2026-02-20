'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

export default function Approach() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="approach" ref={ref} className="relative overflow-hidden">
      {/* Section 1: Who This Is For */}
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
              <span className="text-xs tracking-[0.2em] uppercase text-dark-grey">Who This Is For</span>
            </span>
            <div className="space-y-6">
              <p className="text-lg text-dark-grey leading-relaxed">
                You've built something, or you're inheriting something, or both. The business has history. It has family. It has your name on it in ways that don't show up in the org chart.
              </p>
              <p className="text-lg text-dark-grey leading-relaxed">
                You're probably not short on information. You're short on a trusted place to think out loud. The people inside the business can't hold this the way you need them to. The people outside it don't fully understand. You've been carrying the weight of what comes next and managing how it lands on everyone around you at the same time.
              </p>
              <p className="text-lg text-charcoal leading-relaxed font-medium">
                That's what I know. And that's exactly what this work is for.
              </p>
            </div>
          </motion.div>
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
                Twenty years as a leader in a family business. President with full P&L. 
                I understand what numbers reveal about people. I've been through succession, 
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
                { number: 'P&L', label: 'Full Ownership' },
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

      {/* Section 3: The conversations that don't happen */}
      <div className="py-16 lg:py-20 bg-[#FAFAFA] border-y border-light-grey">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="max-w-3xl"
          >
            <h3 className="text-2xl lg:text-3xl font-display text-charcoal mb-6">
              The conversations that don't happen are the ones that cost the most.
            </h3>
            <div className="space-y-4">
              <p className="text-dark-grey leading-relaxed">
                Most family business transitions don't fail because the strategy was wrong. They fail because the crucial conversations got avoided until it was too late. The ownership question no one wanted to raise. The next gen leader who wasn't told the truth about what was expected. The exit that happened without anyone actually agreeing on what they wanted.
              </p>
              <p className="text-charcoal leading-relaxed font-medium">
                I've seen this from the inside. The goal is to help you have the real conversations before they become the expensive ones.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
