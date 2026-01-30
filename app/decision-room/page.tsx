'use client'

import { useRef } from 'react'
import Link from 'next/link'
import { motion, useInView } from 'framer-motion'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const decisions = [
  {
    category: 'People',
    items: [
      'Letting go of a key leader',
      'Firing a family member',
      'Restructuring the team',
      'Having a conversation you\'ve been avoiding',
      'Promoting someone (or not)',
    ],
  },
  {
    category: 'Strategy',
    items: [
      'P&L decisions nobody wants to make',
      'Compensation changes that will hurt',
      'Budget cuts that affect people',
      'Pivotal investments',
      'Admitting something isn\'t working',
    ],
  },
  {
    category: 'Transitions',
    items: [
      'Selling the business',
      'Succession—passing it on or stepping back',
      'Stepping into a new role',
      'Stepping out of one',
      'Walking away entirely',
    ],
  },
]

export default function DecisionRoomPage() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <main className="relative bg-[#FAFAFA]">
      <Navbar />
      
      {/* Hero */}
      <section className="relative pt-32 pb-24 lg:pt-40 lg:pb-32 bg-charcoal text-white overflow-hidden">
        {/* Background element */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-accent/10" />
        
        <div className="container-custom relative z-10">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <span className="inline-flex items-center gap-3 mb-6">
                <span className="w-8 h-px bg-accent" />
                <span className="text-xs tracking-[0.25em] uppercase text-white/60">The First Step</span>
              </span>
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
              className="text-[clamp(2.5rem,6vw,5rem)] leading-[1.05] font-display mb-8"
            >
              The <span className="text-accent">Decision Room</span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="text-xl lg:text-2xl text-white/70 leading-relaxed max-w-2xl mb-4"
            >
              30 minutes. One decision. Someone who's been there.
            </motion.p>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-lg text-white/50 leading-relaxed max-w-xl"
            >
              A confidential conversation about the decision in front of you. 
              No pitch. No pressure. Just clarity.
            </motion.p>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-display text-charcoal">
              How it works
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
            {[
              {
                step: '01',
                title: 'Name the Decision',
                desc: 'Tell me what you\'re wrestling with. Hiring, firing, selling, staying—whatever\'s keeping you up at night.',
              },
              {
                step: '02',
                title: 'Talk It Through',
                desc: 'We dig into what\'s really at stake. The business impact. The personal cost. The thing you haven\'t said out loud.',
              },
              {
                step: '03',
                title: 'Leave with Clarity',
                desc: 'You walk out knowing exactly what to do—and at peace with the decision.',
              },
            ].map((item, i) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: i * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 mx-auto mb-6 bg-accent text-white flex items-center justify-center">
                  <span className="text-xl font-display">{item.step}</span>
                </div>
                <h3 className="text-xl font-display text-charcoal mb-4">{item.title}</h3>
                <p className="text-dark-grey leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* What Leaders Bring */}
      <section ref={ref} className="py-24 lg:py-32 bg-[#FAFAFA]">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <span className="inline-flex items-center gap-3 mb-6 justify-center">
              <span className="w-8 h-px bg-accent" />
              <span className="text-xs tracking-[0.25em] uppercase text-dark-grey">What Leaders Bring</span>
              <span className="w-8 h-px bg-accent" />
            </span>
            <h2 className="text-3xl lg:text-4xl font-display text-charcoal">
              The decisions you can't talk to anyone else about
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {decisions.map((group, i) => (
              <motion.div
                key={group.category}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.2 + i * 0.1 }}
                className="bg-white p-8 border border-light-grey"
              >
                <h3 className="text-xl font-display text-accent mb-6">{group.category}</h3>
                <ul className="space-y-4">
                  {group.items.map((item, j) => (
                    <li key={j} className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 bg-accent mt-2 flex-shrink-0" />
                      <span className="text-dark-grey">{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* The Promise */}
      <section className="py-24 lg:py-32 bg-charcoal text-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl lg:text-4xl font-display mb-8">
                You'll leave knowing exactly what to do—
                <br />
                <span className="text-accent">and at peace with the decision.</span>
              </h2>
              <p className="text-lg text-white/70 mb-12 max-w-xl mx-auto">
                Not theory. Not motivation. Real clarity on the decision in front of you, 
                from someone who's sat in your chair.
              </p>
              
              <div className="grid sm:grid-cols-3 gap-8 text-left max-w-2xl mx-auto">
                {[
                  { title: 'Clarity', desc: 'Know exactly what to do next' },
                  { title: 'Conviction', desc: 'Feel confident, even when it\'s hard' },
                  { title: 'Calm', desc: 'Peace with the choice' },
                ].map((item) => (
                  <div key={item.title} className="border-l border-accent pl-4">
                    <h3 className="font-display text-white mb-1">{item.title}</h3>
                    <p className="text-sm text-white/50">{item.desc}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="container-custom">
          <div className="max-w-2xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl lg:text-4xl font-display text-charcoal mb-6">
                Ready to enter The Decision Room?
              </h2>
              <p className="text-lg text-dark-grey mb-10">
                30 minutes. Completely confidential. No obligation.
              </p>
              <a 
                href="mailto:molly@mollyv.com?subject=Decision%20Room%20Request"
                className="inline-flex items-center gap-4 group"
              >
                <span className="px-10 py-5 bg-accent text-white text-lg font-semibold tracking-wider uppercase transition-all duration-500 group-hover:bg-charcoal">
                  Request Your Session
                </span>
              </a>
              <p className="mt-8 text-sm text-mid-grey">
                Or email directly: <a href="mailto:molly@mollyv.com" className="text-accent hover:underline">molly@mollyv.com</a>
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
