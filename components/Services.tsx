'use client'

import { useRef, useState } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'

const services = [
  {
    id: 'coaching',
    number: '01',
    title: 'Leadership Advisory',
    subtitle: 'Your Trusted Thinking Partner',
    description: 'For leaders carrying significant responsibility without a confidential place to think or speak openly. A thinking partnership that provides clarity, perspective, and accountability.',
    painPoints: [
      'Carrying the weight of leadership alone',
      'Decisions feel too complex to process internally',
      'Need clarity on what really matters',
      'Need someone to help you get your team moving in the same direction'
    ],
    details: [
      'Weekly or bi-weekly sessions',
      'Confidential thinking space',
      'Decision-making support',
      'Accountability partnership'
    ],
    audience: 'Senior leaders and executives in complex, people-driven organizations',
    outcome: 'Move forward with clarity and conviction'
  },
  {
    id: 'succession',
    number: '02',
    title: 'Succession & Transition',
    subtitle: 'Working Through What\'s Next',
    description: 'The emotional and business realities of leadership transition are tangled together. Passing to family, developing next-gen leaders, preparing for your own next chapter. It all has to be worked through honestly.',
    painPoints: [
      'Succession feels overwhelming or unclear',
      'Family dynamics complicate decisions',
      'Hard conversations keep getting delayed',
      'Worried about the cost of getting it wrong'
    ],
    details: [
      'Clarity on transition options',
      'Family alignment facilitation',
      'Next-gen leadership development',
      'Timeline and milestone planning'
    ],
    audience: 'Business owners and leaders preparing for ownership or leadership transition',
    outcome: 'A clear path forward that protects relationships and legacy'
  },
  {
    id: 'financial',
    number: '03',
    title: 'Understanding Your Financial Story',
    subtitle: 'Clarity Beyond the Numbers',
    description: 'Your financials tell a story about where you\'ve been, what you\'ve built, and what\'s possible. Learn to read that story with confidence and use it to make better decisions.',
    painPoints: [
      'Financial reports feel overwhelming or confusing',
      'Disconnected from the numbers that drive your business',
      'Decisions feel like guesswork without financial clarity',
      'Want to understand, not just delegate, your finances'
    ],
    details: [
      'Financial literacy coaching',
      'Reading your P&L, balance sheet, and cash flow',
      'Connecting numbers to business decisions',
      'Building financial confidence'
    ],
    audience: 'Leaders and business owners who want to understand their numbers, not just receive reports',
    outcome: 'Confidence in financial conversations and decisions'
  },
  {
    id: 'speaking',
    number: '04',
    title: 'Speaking & Workshops',
    subtitle: 'Keynotes That Move Leaders',
    description: 'Engaging presentations on leadership clarity, succession planning, and making bold decisions when stakes are high. Everything I bring to a room is grounded in experience. That\'s what makes it land differently.',
    painPoints: [
      'Need a speaker who understands real leadership challenges',
      'Want content that resonates with experienced leaders',
      'Looking for practical insights, not motivation alone'
    ],
    details: [
      '"Lead with Clarity" keynote',
      '"The Cost of Delay" workshop',
      'Family business succession talks',
      'Custom leadership sessions'
    ],
    audience: 'Business conferences, leadership events, family business associations',
    outcome: 'Inspired action and real conversations'
  }
]

export default function Services() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [activeService, setActiveService] = useState<string | null>(null)

  return (
    <section id="services" ref={ref} className="py-32 lg:py-48 bg-off-white relative overflow-hidden">
      {/* Large background number */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 0.03 } : {}}
        transition={{ duration: 1.5, delay: 0.5 }}
        className="absolute right-0 top-0 pointer-events-none select-none"
      >
        <span className="font-swiss text-[50vw] font-black text-charcoal leading-none">
          04
        </span>
      </motion.div>

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
              <span className="label-sm text-dark-grey">04</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="col-span-12 lg:col-span-8 lg:col-start-4 mt-6 lg:mt-0"
          >
            <span className="label-md text-accent tracking-widest mb-4 block">Services</span>
            <h2 className="headline-md text-charcoal mb-6">
              How we work{' '}
              <span className="text-accent font-semibold">together</span>
            </h2>
            <p className="body-text text-dark-grey max-w-2xl">
              Every engagement begins with understanding where you are, what you're facing, 
              and what clarity would make possible. We build the support around what you actually need.
            </p>
          </motion.div>
        </div>

        {/* Services Accordion */}
        <div className="space-y-0 border-t-2 border-charcoal">
          {services.map((service, i) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.3 + i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="border-b border-charcoal/20"
            >
              <button
                onClick={() => setActiveService(activeService === service.id ? null : service.id)}
                className="w-full py-8 lg:py-10 flex items-start lg:items-center justify-between group text-left"
              >
                <div className="flex items-start lg:items-center gap-6 lg:gap-12 flex-1">
                  <span className="label-sm text-mid-grey font-mono">{service.number}</span>
                  <div className="flex-1">
                    <motion.h3
                      className={`headline-sm transition-colors duration-300 ${
                        activeService === service.id ? 'text-accent' : 'text-charcoal group-hover:text-accent'
                      }`}
                      whileHover={{ x: 8 }}
                      transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                    >
                      {service.title}
                    </motion.h3>
                    <p className="text-dark-grey mt-2 text-sm lg:text-base">{service.subtitle}</p>
                  </div>
                </div>
                <motion.div
                  animate={{ rotate: activeService === service.id ? 45 : 0 }}
                  transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                  className="w-10 h-10 flex items-center justify-center border border-charcoal/20 group-hover:border-accent group-hover:bg-accent transition-all duration-300"
                >
                  <span className={`text-2xl transition-colors duration-300 ${
                    activeService === service.id ? 'text-accent' : 'text-charcoal group-hover:text-white'
                  }`}>+</span>
                </motion.div>
              </button>

              <AnimatePresence>
                {activeService === service.id && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                    className="overflow-hidden"
                  >
                    <div className="pb-10 pl-14 lg:pl-28 pr-8 lg:pr-16">
                      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
                        {/* Description & Pain Points */}
                        <div className="lg:col-span-6">
                          <p className="body-text text-dark-grey mb-6">
                            {service.description}
                          </p>
                          
                          <div className="mb-6">
                            <span className="label-sm text-mid-grey mb-3 block">If you're experiencing</span>
                            <div className="space-y-2">
                              {service.painPoints.map((point, idx) => (
                                <div key={idx} className="flex items-start gap-3">
                                  <span className="w-1.5 h-1.5 bg-accent mt-2 flex-shrink-0" />
                                  <span className="text-sm text-charcoal">{point}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>

                        {/* Details & CTA */}
                        <div className="lg:col-span-5 lg:col-start-8 space-y-6">
                          <div className="p-6 bg-white border border-light-grey">
                            <span className="label-sm text-mid-grey block mb-3">What's Included</span>
                            <div className="space-y-2">
                              {service.details.map((detail, idx) => (
                                <div key={idx} className="flex items-center gap-3">
                                  <span className="w-4 h-[2px] bg-accent" />
                                  <span className="text-sm text-charcoal">{detail}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                          
                          <div className="p-6 bg-accent/10">
                            <span className="label-sm text-accent block mb-2">Outcome</span>
                            <p className="text-sm text-charcoal font-medium">{service.outcome}</p>
                          </div>

                          <div className="text-xs text-mid-grey">
                            Ideal for: {service.audience}
                          </div>
                          
                          <motion.a
                            href="#contact"
                            className="inline-flex items-center gap-3 text-accent font-medium group/link"
                            whileHover={{ x: 4 }}
                            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                          >
                            <span>Let's Connect</span>
                            <span className="group-hover/link:translate-x-1 transition-transform duration-300">→</span>
                          </motion.a>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
