'use client'

import { useRef } from 'react'
import Image from 'next/image'
import { motion, useInView } from 'framer-motion'

export default function CTA() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="contact" ref={ref} className="relative overflow-hidden">
      {/* Main CTA Section - Confidential Counsel */}
      <div className="py-24 lg:py-32 bg-charcoal text-white relative">
        {/* Background elements */}
        <motion.div
          initial={{ scale: 0 }}
          animate={isInView ? { scale: 1 } : {}}
          transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
          className="absolute -right-32 -top-32 w-96 h-96 border-[40px] border-white/5 rounded-full"
        />
        
        <div className="container-custom relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            {/* The Direct CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="mb-8"
            >
              <span className="inline-flex items-center gap-3 justify-center">
                <span className="w-8 h-px bg-accent" />
                <span className="text-xs tracking-[0.2em] uppercase text-white/60">The First Step</span>
                <span className="w-8 h-px bg-accent" />
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1, delay: 0.2 }}
              className="text-4xl lg:text-6xl font-display text-white mb-6"
            >
              Let's <span className="text-accent">Connect</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-xl lg:text-2xl text-white/70 mb-4 max-w-2xl mx-auto"
            >
              A confidential conversation about the decision in front of you.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-lg text-white/50 mb-12 max-w-xl mx-auto"
            >
              Letting someone go. Working through succession. Having a conversation you've been avoiding.
              Someone who's been in your chair, ready to think it through with you.
            </motion.p>

            {/* Primary CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="mb-16"
            >
              <a 
                href="/contact"
                className="inline-flex flex-col sm:flex-row items-center gap-4 group"
              >
                <span className="px-10 py-5 bg-accent text-white text-lg font-semibold tracking-wider uppercase transition-all duration-500 group-hover:bg-white group-hover:text-charcoal">
                  Let's Grab a Virtual Coffee
                </span>
                <span className="hidden sm:flex w-14 h-14 items-center justify-center bg-white text-charcoal transition-all duration-500 group-hover:bg-accent group-hover:text-white">
                  <span className="text-2xl">→</span>
                </span>
              </a>
            </motion.div>

            {/* What decisions */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="grid sm:grid-cols-3 gap-8 text-left max-w-3xl mx-auto"
            >
              {[
                { title: 'People', desc: 'Leadership changes, difficult conversations, family dynamics' },
                { title: 'Strategy', desc: 'P&L decisions, restructuring, pivotal investments' },
                { title: 'Transitions', desc: 'Succession, exits, stepping into or out of roles' },
              ].map((item, i) => (
                <div key={item.title} className="text-center sm:text-left border-l border-white/20 pl-6">
                  <h3 className="text-white font-display mb-2">{item.title}</h3>
                  <p className="text-sm text-white/50">{item.desc}</p>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>

      {/* Alternative CTA - For those not ready */}
      <div className="py-16 lg:py-20 bg-[#FAFAFA]">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-display text-charcoal mb-4">
                Not ready to talk yet?
              </h3>
              <p className="text-dark-grey leading-relaxed mb-6">
                That's fine. Start with the Decision Clarity Guide. Five questions to help you 
                cut through the noise and find clarity on the decision in front of you.
              </p>
              <a 
                href="/guide"
                className="inline-flex items-center gap-4 group mb-6"
              >
                <span className="px-6 py-3 bg-charcoal text-white text-sm font-medium tracking-wider uppercase transition-all duration-500 group-hover:bg-accent">
                  Get the Free Guide
                </span>
                <span className="text-sm text-dark-grey">PDF download</span>
              </a>
              <div className="flex flex-wrap gap-4 pt-4 border-t border-light-grey">
                <a 
                  href="/about"
                  className="text-accent font-medium hover:underline text-sm"
                >
                  Learn more about Molly →
                </a>
                <a 
                  href="/services"
                  className="text-accent font-medium hover:underline text-sm"
                >
                  Explore services →
                </a>
              </div>
            </div>

            {/* Direct contact */}
            <div className="bg-white p-8 border border-light-grey">
              <h4 className="font-display text-charcoal mb-2">Prefer email?</h4>
              <p className="text-sm text-dark-grey mb-4">
                Write me directly. Tell me what's on your mind.
              </p>
              <a 
                href="mailto:molly@mollyvarangkounh.com" 
                className="text-xl font-display text-accent hover:text-charcoal transition-colors duration-300"
              >
                molly@mollyvarangkounh.com
              </a>
              <div className="mt-6 pt-6 border-t border-light-grey">
                <p className="font-tagline text-sm text-mid-grey">
                  Lead with clarity. Make bold moves.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Final Quote Section */}
      <div className="py-16 lg:py-24 bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Image */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="relative aspect-[4/5] max-w-md mx-auto lg:mx-0"
            >
              <div className="absolute -left-4 -top-4 w-full h-full border border-accent" />
              <Image
                src="/molly-v.png"
                alt="Molly Varangkounh"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </motion.div>

            {/* Final statement */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.9 }}
              className="text-center lg:text-left"
            >
              <p className="text-2xl lg:text-3xl font-display text-charcoal leading-relaxed">
                "Strong leadership changes the trajectory of a family, a company, and a community.
                <span className="text-accent"> That's why I show up.</span>"
              </p>
              <div className="flex items-center justify-center lg:justify-start gap-4 mt-6">
                <span className="w-12 h-px bg-accent" />
                <span className="text-sm text-dark-grey">Molly Varangkounh</span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
