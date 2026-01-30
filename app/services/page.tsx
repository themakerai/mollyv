'use client'

import { useRef, useState } from 'react'
import Link from 'next/link'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const services = [
  {
    id: 'decision-room',
    number: '01',
    title: 'The Decision Room',
    subtitle: '30-Minute Confidential Session',
    description: 'A single, focused conversation about the decision in front of you. Come with the thing that\'s keeping you up at night. Leave with clarity.',
    features: [
      'One decision, one session',
      'Completely confidential',
      'No pitch, no pressure',
      'Leave knowing exactly what to do',
    ],
    ideal: 'Leaders facing a specific hard decision—hiring, firing, an exit, a difficult conversation—who need clarity now.',
    cta: 'Request a Session',
  },
  {
    id: 'advisory',
    number: '02',
    title: 'Ongoing Advisory',
    subtitle: 'Your Trusted Thinking Partner',
    description: 'For leaders who want an ongoing relationship with someone who can help them navigate multiple decisions over time. A confidential sounding board on retainer.',
    features: [
      'Regular sessions (weekly or bi-weekly)',
      'On-demand access between sessions',
      'Strategic clarity and accountability',
      'Support through transitions and pivotal moments',
    ],
    ideal: 'CEOs, business owners, and senior executives who want a trusted partner for the long haul.',
    cta: 'Explore Advisory',
  },
  {
    id: 'succession',
    number: '03',
    title: 'Succession & Transition',
    subtitle: 'Navigate What\'s Next',
    description: 'Guidance through the emotional and strategic complexity of leadership transitions. Whether you\'re passing the torch, taking it, or watching from the sidelines.',
    features: [
      'Succession planning that addresses family and business',
      'Transition support for incoming and outgoing leaders',
      'Facilitated conversations that move relationships forward',
      'Identity work when your role is changing',
    ],
    ideal: 'Family businesses, founders planning exits, leaders stepping into or out of roles.',
    cta: 'Discuss Transition',
  },
  {
    id: 'speaking',
    number: '04',
    title: 'Speaking & Workshops',
    subtitle: 'Leadership That Moves People',
    description: 'Keynotes and workshops rooted in lived experience, not theory. For organizations that want their leaders to leave inspired and equipped to act.',
    features: [
      '"The Decision Room" keynote',
      'BOLD Leadership Framework workshop',
      'Executive team offsites',
      'Custom content for your organization',
    ],
    ideal: 'Conferences, leadership events, executive teams seeking real talk and practical tools.',
    cta: 'Book Speaking',
  },
]

export default function ServicesPage() {
  const [activeService, setActiveService] = useState<string | null>('decision-room')
  const frameworkRef = useRef<HTMLDivElement>(null)
  const isFrameworkInView = useInView(frameworkRef, { once: true, margin: '-100px' })

  return (
    <main className="relative bg-[#FAFAFA]">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-24 lg:pt-40 lg:pb-32 bg-white">
        <div className="container-custom">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <span className="inline-flex items-center gap-3 mb-6">
                <span className="w-8 h-px bg-accent" />
                <span className="text-xs tracking-[0.25em] uppercase text-dark-grey">Services</span>
              </span>
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
              className="text-[clamp(2.5rem,5vw,4rem)] leading-[1.1] font-display text-charcoal mb-8"
            >
              One decision.
              <br />
              <span className="text-accent">Total clarity.</span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="text-lg lg:text-xl text-dark-grey leading-relaxed max-w-2xl"
            >
              Whether you need help with a single hard decision or ongoing support, 
              every engagement starts the same way: understanding the story your business 
              is telling you—and what that story demands next.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Services List */}
      <section className="py-24 lg:py-32 bg-[#FAFAFA]">
        <div className="container-custom">
          <div className="space-y-1">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className={`border-b border-light-grey ${index === 0 ? 'border-t' : ''}`}
              >
                <button
                  onClick={() => setActiveService(activeService === service.id ? null : service.id)}
                  className="w-full py-8 lg:py-10 flex items-center justify-between text-left group"
                >
                  <div className="flex items-center gap-6 lg:gap-10">
                    <span className="text-sm text-accent font-medium">{service.number}</span>
                    <div>
                      <h2 className={`text-2xl lg:text-3xl font-display transition-colors duration-300 ${
                        service.id === 'decision-room' ? 'text-accent' : 'text-charcoal group-hover:text-accent'
                      }`}>
                        {service.title}
                      </h2>
                      <p className="text-dark-grey mt-1">{service.subtitle}</p>
                    </div>
                  </div>
                  <span className={`text-2xl text-accent transition-transform duration-300 ${activeService === service.id ? 'rotate-45' : ''}`}>
                    +
                  </span>
                </button>
                
                <AnimatePresence>
                  {activeService === service.id && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="pb-10 lg:pb-12 pl-0 lg:pl-[calc(14px+2.5rem)]">
                        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16">
                          <div>
                            <p className="text-lg text-dark-grey leading-relaxed mb-8">
                              {service.description}
                            </p>
                            <div className="space-y-3">
                              {service.features.map((feature, i) => (
                                <div key={i} className="flex items-start gap-3">
                                  <span className="w-1.5 h-1.5 bg-accent mt-2 flex-shrink-0" />
                                  <span className="text-charcoal">{feature}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                          <div className="bg-white p-8 lg:p-10 border border-light-grey">
                            <span className="text-xs tracking-[0.2em] uppercase text-accent">Ideal For</span>
                            <p className="mt-4 text-dark-grey leading-relaxed">
                              {service.ideal}
                            </p>
                            <Link 
                              href="/#contact"
                              className="mt-8 inline-flex items-center gap-3 text-accent font-medium hover:gap-4 transition-all duration-300"
                            >
                              <span>{service.cta}</span>
                              <span>→</span>
                            </Link>
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

      {/* The Promise */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <span className="inline-flex items-center gap-3 mb-6 justify-center">
                <span className="w-8 h-px bg-accent" />
                <span className="text-xs tracking-[0.25em] uppercase text-dark-grey">The Promise</span>
                <span className="w-8 h-px bg-accent" />
              </span>
              <h2 className="text-3xl lg:text-4xl font-display text-charcoal mb-8">
                Settle the noise.
                <br />
                <span className="text-accent">Take the next step.</span>
              </h2>
              <div className="grid md:grid-cols-3 gap-8 text-left mt-12">
                {[
                  { title: 'Clarity', desc: 'Settle into your thinking. Know what to do.' },
                  { title: 'Conviction', desc: 'Self-trust restored. Grounded confidence.' },
                  { title: 'Steadiness', desc: 'Internal steadiness to move forward.' },
                ].map((item) => (
                  <div key={item.title} className="border-l-2 border-accent pl-6">
                    <h3 className="text-xl font-display text-charcoal mb-2">{item.title}</h3>
                    <p className="text-sm text-dark-grey">{item.desc}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* BOLD Framework */}
      <section ref={frameworkRef} className="py-24 lg:py-32 bg-charcoal text-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isFrameworkInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <span className="inline-flex items-center gap-3 mb-6">
              <span className="w-8 h-px bg-accent" />
              <span className="text-xs tracking-[0.25em] uppercase text-white/60">The Framework</span>
              <span className="w-8 h-px bg-accent" />
            </span>
            <h2 className="text-3xl lg:text-4xl font-display mb-6">
              The <span className="text-accent">BOLD</span> Leadership Framework
            </h2>
            <p className="text-lg text-white/70 max-w-2xl mx-auto">
              The approach behind every conversation in The Decision Room.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              { letter: 'B', title: 'Be Clear', desc: 'Clarity first. Know where you\'re going before asking people to follow.' },
              { letter: 'O', title: 'Own It', desc: 'Step into hard things. Ownership replaces blame and excuses.' },
              { letter: 'L', title: 'Listen', desc: 'Create space for truth. You don\'t have to agree to be aligned.' },
              { letter: 'D', title: 'Decide', desc: 'Move forward. Indecision is still a decision—often the most expensive one.' },
            ].map((item, i) => (
              <motion.div
                key={item.letter}
                initial={{ opacity: 0, y: 30 }}
                animate={isFrameworkInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.2 + i * 0.1 }}
                className="p-8 border border-white/10 hover:border-accent transition-colors duration-300 text-center"
              >
                <span className="text-5xl font-display text-accent">{item.letter}</span>
                <h3 className="text-xl font-display mt-6 mb-4">{item.title}</h3>
                <p className="text-sm text-white/70 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 lg:py-32 bg-[#FAFAFA]">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl lg:text-4xl font-display text-charcoal mb-6">
              Have a decision you're wrestling with?
            </h2>
            <p className="text-lg text-dark-grey max-w-xl mx-auto mb-10">
              The first step is a conversation. No pitch, no pressure—just clarity.
            </p>
            <Link 
              href="/#contact"
              className="inline-flex items-center gap-4 group"
            >
              <span className="px-8 py-4 bg-charcoal text-white text-sm font-medium tracking-wider uppercase transition-all duration-500 group-hover:bg-accent">
                Enter The Decision Room
              </span>
              <span className="w-12 h-12 flex items-center justify-center border border-charcoal text-charcoal transition-all duration-500 group-hover:bg-charcoal group-hover:text-white">
                →
              </span>
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
