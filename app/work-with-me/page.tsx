'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import ImagePlaceholder from '@/components/ImagePlaceholder'

const signatureTopics = [
  {
    title: 'Lead with Clarity',
    description: 'What it actually takes to lead when the stakes are personal, the pressure is real, and the right answer depends on who you ask.',
  },
  {
    title: 'The Cost of Delay',
    description: 'Why the conversations leaders avoid are the ones that cost the most. And how to have them before it is too late.',
  },
  {
    title: 'BOLD Leadership',
    description: 'A practical framework for leading with clarity, owning the hard things, listening to understand, and moving forward with confidence.',
  },
  {
    title: 'Family Business Succession',
    description: 'The human side of transition. What happens when the business has your family\'s name on it and the next chapter hasn\'t been written yet.',
  },
]

const advisoryFit = [
  'You\'re preparing to exit or transition out of the business.',
  'You\'re stepping into leadership and need a guide who won\'t soften the real picture.',
  'You\'re working through family dynamics and business challenges at the same time.',
  'You need a confidential place to think through something you can\'t discuss internally.',
]

export default function WorkWithMePage() {
  return (
    <main className="relative bg-[#FAFAFA]">
      <Navbar />

      {/* Hero */}
      <section className="relative pt-32 pb-24 lg:pt-40 lg:pb-32 bg-white overflow-hidden">
        <div className="container-custom">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <span className="inline-flex items-center gap-3 mb-6">
                  <span className="w-8 h-px bg-accent" />
                  <span className="text-xs tracking-[0.25em] uppercase text-dark-grey">Work With Me</span>
                </span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.3 }}
                className="text-[clamp(2.5rem,5vw,4rem)] leading-[1.1] font-display text-charcoal mb-8"
              >
                Work With <span className="text-accent">Me</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="text-lg lg:text-xl text-dark-grey leading-relaxed max-w-2xl"
              >
                Every engagement begins with understanding where you are, what you're facing, and what clarity would make possible. We build the support around what you actually need.
              </motion.p>
            </div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.4 }}
              className="lg:col-span-4 lg:col-start-9 hidden lg:block"
            >
              <ImagePlaceholder variant="square" theme="sand" label="Molly — speaking" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Section 1: Speaking & Workshops */}
      <section className="py-24 lg:py-32 bg-[#FAFAFA]">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center gap-3 mb-4">
              <span className="w-8 h-[2px] bg-accent" />
              <span className="text-xs tracking-[0.25em] uppercase text-accent font-medium">01</span>
            </div>
            <h2 className="text-3xl lg:text-4xl font-display text-charcoal mb-8">
              Speaking & Workshops
            </h2>
          </motion.div>

          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="lg:col-span-7 space-y-6"
            >
              <p className="text-lg text-dark-grey leading-relaxed">
                Talks and workshops built around what family business leaders are actually dealing with: succession tension, generational transition, leading through change, having the conversations that keep getting avoided.
              </p>
              <p className="text-lg text-dark-grey leading-relaxed">
                I don't speak from theory. Everything I bring to a room is grounded in experience. That's what makes it land differently.
              </p>

              <div className="pt-6 space-y-4">
                <div>
                  <span className="text-xs tracking-[0.2em] uppercase text-mid-grey">For</span>
                  <p className="text-dark-grey mt-2 leading-relaxed">
                    Leadership conferences, family business associations, company leadership retreats, next gen leadership programs.
                  </p>
                </div>
                <div>
                  <span className="text-xs tracking-[0.2em] uppercase text-mid-grey">Formats</span>
                  <p className="text-dark-grey mt-2 leading-relaxed">
                    Keynotes (45–90 min) · Half-day workshops · Full-day facilitation
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="lg:col-span-4 lg:col-start-9"
            >
              <ImagePlaceholder variant="portrait" theme="blue" label="Molly — on stage" />
            </motion.div>
          </div>

          {/* Signature Topics */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-16"
          >
            <h3 className="text-2xl font-display text-charcoal mb-8">Signature Topics</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {signatureTopics.map((topic, i) => (
                <motion.div
                  key={topic.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.1 + i * 0.1 }}
                  className="bg-white p-6 lg:p-8 border border-light-grey hover:border-accent transition-colors duration-300"
                >
                  <div className="w-10 h-10 bg-accent text-white flex items-center justify-center text-sm font-display mb-4">
                    {String(i + 1).padStart(2, '0')}
                  </div>
                  <h4 className="text-lg font-display text-charcoal mb-3">{topic.title}</h4>
                  <p className="text-sm text-dark-grey leading-relaxed">{topic.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Speaking CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-12"
          >
            <Link
              href="/connect"
              className="inline-flex items-center gap-4 group"
            >
              <span className="px-8 py-4 bg-charcoal text-white text-sm font-medium tracking-wider uppercase transition-all duration-500 group-hover:bg-accent">
                Request Molly to Speak
              </span>
              <span className="w-12 h-12 flex items-center justify-center border border-charcoal text-charcoal transition-all duration-500 group-hover:bg-charcoal group-hover:text-white">
                →
              </span>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Section 2: Leadership Advisory */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center gap-3 mb-4">
              <span className="w-8 h-[2px] bg-accent" />
              <span className="text-xs tracking-[0.25em] uppercase text-accent font-medium">02</span>
            </div>
            <h2 className="text-3xl lg:text-4xl font-display text-charcoal mb-8">
              Leadership Advisory <span className="text-dark-grey font-normal text-2xl lg:text-3xl">(1:1)</span>
            </h2>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="space-y-6"
            >
              <p className="text-lg text-dark-grey leading-relaxed">
                One-on-one advisory for owners and leaders working through high-stakes moments, difficult relationships, or major transition. Confidential. Direct. Built around what you're actually facing.
              </p>
              <p className="text-lg text-dark-grey leading-relaxed">
                This is a thinking partnership with someone who has held P&L responsibility in a family business, run a leadership team, and knows what these moments actually cost.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-[#FAFAFA] p-8 lg:p-10 border border-light-grey"
            >
              <span className="text-xs tracking-[0.2em] uppercase text-accent font-medium block mb-6">A good fit if</span>
              <div className="space-y-4">
                {advisoryFit.map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 bg-accent mt-2 flex-shrink-0" />
                    <span className="text-charcoal leading-relaxed">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Advisory CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-12"
          >
            <Link
              href="/connect"
              className="inline-flex items-center gap-4 group"
            >
              <span className="px-8 py-4 bg-charcoal text-white text-sm font-medium tracking-wider uppercase transition-all duration-500 group-hover:bg-accent">
                Let's Connect
              </span>
              <span className="w-12 h-12 flex items-center justify-center border border-charcoal text-charcoal transition-all duration-500 group-hover:bg-charcoal group-hover:text-white">
                →
              </span>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Section 3: Succession & Exit Planning */}
      <section className="py-24 lg:py-32 bg-[#FAFAFA]">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center gap-3 mb-4">
              <span className="w-8 h-[2px] bg-accent" />
              <span className="text-xs tracking-[0.25em] uppercase text-accent font-medium">03</span>
            </div>
            <h2 className="text-3xl lg:text-4xl font-display text-charcoal mb-8">
              Succession & Exit Planning
            </h2>
          </motion.div>

          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="lg:col-span-7 space-y-6"
            >
              <p className="text-lg text-dark-grey leading-relaxed">
                Succession is a human process with a financial framework around it. Most of the complexity lives in the conversations that haven't happened yet.
              </p>
              <p className="text-lg text-dark-grey leading-relaxed">
                I help owners and next gen leaders get clear on what they actually want, get honest about what's realistic, and have the conversations that make a real transition possible.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="lg:col-span-4 lg:col-start-9"
            >
              <div className="bg-white p-8 lg:p-10 border border-light-grey">
                <span className="text-xs tracking-[0.2em] uppercase text-accent font-medium block mb-6">For</span>
                <div className="space-y-4">
                  {[
                    'Owners without a succession plan.',
                    'Incoming generation working through the handoff.',
                    'Family businesses where the relationship is as complicated as the strategy.',
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 bg-accent mt-2 flex-shrink-0" />
                      <span className="text-charcoal leading-relaxed">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>

          {/* Succession CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-12"
          >
            <Link
              href="/connect"
              className="inline-flex items-center gap-4 group"
            >
              <span className="px-8 py-4 bg-charcoal text-white text-sm font-medium tracking-wider uppercase transition-all duration-500 group-hover:bg-accent">
                Let's Connect
              </span>
              <span className="w-12 h-12 flex items-center justify-center border border-charcoal text-charcoal transition-all duration-500 group-hover:bg-charcoal group-hover:text-white">
                →
              </span>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 lg:py-32 bg-charcoal text-white">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl lg:text-4xl font-display mb-6">
              Ready to talk it through?
            </h2>
            <p className="text-lg text-white/70 max-w-xl mx-auto mb-10">
              The first step is a conversation. No pitch, no pressure. Just clarity.
            </p>
            <Link
              href="/connect"
              className="inline-flex items-center gap-4 group"
            >
              <span className="px-8 py-4 bg-accent text-white text-sm font-medium tracking-wider uppercase transition-all duration-500 group-hover:bg-white group-hover:text-charcoal">
                Let's Grab a Virtual Coffee
              </span>
              <span className="w-12 h-12 flex items-center justify-center border border-white/30 text-white transition-all duration-500 group-hover:bg-white group-hover:text-charcoal">
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
