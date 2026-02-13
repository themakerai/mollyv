'use client'

import { useState } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import ImagePlaceholder from '@/components/ImagePlaceholder'

export default function GuidePage() {
  const [email, setEmail] = useState('')
  const [firstName, setFirstName] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [error, setError] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')
    setIsSubmitting(true)

    try {
      const response = await fetch('/api/leads', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email,
          first_name: firstName,
          lead_source: 'decision-clarity-guide',
        }),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || 'Something went wrong')
      }

      setIsSubmitted(true)
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Something went wrong')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <main className="relative bg-[#FAFAFA]">
      <Navbar />
      
      {/* Hero */}
      <section className="relative pt-32 pb-16 lg:pt-40 lg:pb-24 bg-white overflow-hidden">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Content */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span className="inline-flex items-center gap-3 mb-6">
                <span className="w-8 h-px bg-accent" />
                <span className="text-xs tracking-[0.25em] uppercase text-dark-grey">Free Guide</span>
              </span>
              
              <h1 className="text-[clamp(2rem,4vw,3rem)] leading-[1.1] font-display text-charcoal mb-6">
                The Decision
                <br />
                <span className="text-accent">Clarity Guide</span>
              </h1>
              
              <p className="text-lg text-dark-grey leading-relaxed mb-6">
                5 questions to ask yourself before any high-stakes decision—and how to know 
                when you're avoiding one.
              </p>

              <div className="space-y-4 mb-8">
                {[
                  'Cut through the noise and name what you\'re really deciding',
                  'Understand what\'s actually holding you back',
                  'Recognize the signs you\'re avoiding a hard conversation',
                  'Know when you\'re ready to move forward',
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 bg-accent mt-2 flex-shrink-0" />
                    <span className="text-dark-grey">{item}</span>
                  </div>
                ))}
              </div>

              <p className="text-sm text-mid-grey">
                Based on 20+ years of helping leaders navigate decisions that keep them up at night.
              </p>
            </motion.div>

            {/* Form Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-charcoal text-white p-8 lg:p-12"
            >
              {!isSubmitted ? (
                <>
                  <h2 className="text-2xl font-display mb-2">Get the free guide</h2>
                  <p className="text-white/60 mb-8">
                    Enter your details and we'll send you the PDF instantly.
                  </p>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label htmlFor="firstName" className="block text-xs tracking-[0.15em] uppercase text-white/60 mb-2">
                        First Name
                      </label>
                      <input
                        type="text"
                        id="firstName"
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                        required
                        className="w-full px-4 py-3 bg-white/10 border border-white/20 text-white placeholder-white/40 focus:outline-none focus:border-accent transition-colors"
                        placeholder="Your first name"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-xs tracking-[0.15em] uppercase text-white/60 mb-2">
                        Email Address
                      </label>
                      <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        className="w-full px-4 py-3 bg-white/10 border border-white/20 text-white placeholder-white/40 focus:outline-none focus:border-accent transition-colors"
                        placeholder="you@company.com"
                      />
                    </div>

                    {error && (
                      <p className="text-red-400 text-sm">{error}</p>
                    )}

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-4 bg-accent text-white text-sm font-semibold tracking-wider uppercase transition-all duration-300 hover:bg-accent/90 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? 'Sending...' : 'Send Me the Guide'}
                    </button>

                    <p className="text-xs text-white/40 text-center">
                      We respect your privacy. Unsubscribe anytime.
                    </p>
                  </form>
                </>
              ) : (
                <div className="text-center py-8">
                  <div className="w-16 h-16 mx-auto mb-6 bg-accent/20 rounded-full flex items-center justify-center">
                    <span className="text-3xl">✓</span>
                  </div>
                  <h2 className="text-2xl font-display mb-4">Check your inbox!</h2>
                  <p className="text-white/70 mb-8">
                    We've sent The Decision Clarity Guide to {email}
                  </p>
                  <a
                    href="/decision-clarity-guide.html"
                    target="_blank"
                    className="inline-block px-8 py-4 bg-accent text-white text-sm font-semibold tracking-wider uppercase hover:bg-accent/90 transition-colors"
                  >
                    Download Now
                  </a>
                  <p className="mt-6 text-sm text-white/50">
                    Or check your email for the download link.
                  </p>
                </div>
              )}
            </motion.div>
          </div>
        </div>
      </section>

      {/* What's Inside */}
      <section className="py-24 lg:py-32 bg-[#FAFAFA]">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-display text-charcoal mb-4">
              What's inside the guide
            </h2>
            <p className="text-dark-grey max-w-2xl mx-auto">
              Practical tools you can use immediately, whether you're facing a people decision, 
              a strategic pivot, or a conversation you've been avoiding.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'The 5 Clarity Questions',
                desc: 'The exact questions I use with every leader I work with to cut through complexity and find clarity.',
              },
              {
                title: 'Warning Signs Checklist',
                desc: '6 patterns that indicate you\'re avoiding a decision—and what to do about each one.',
              },
              {
                title: 'The BOLD Framework',
                desc: 'A simple framework for moving from uncertainty to confident action.',
              },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: i * 0.1 }}
                className="bg-white p-8 border border-light-grey"
              >
                <div className="w-12 h-12 bg-accent text-white flex items-center justify-center text-xl font-display mb-6">
                  {String(i + 1).padStart(2, '0')}
                </div>
                <h3 className="text-xl font-display text-charcoal mb-3">{item.title}</h3>
                <p className="text-dark-grey text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Author */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-4 flex justify-center"
            >
              <ImagePlaceholder variant="portrait" theme="sand" label="Molly — author" className="max-w-xs w-full" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="lg:col-span-7 lg:col-start-6"
            >
              <span className="inline-flex items-center gap-3 mb-6">
                <span className="w-8 h-px bg-accent" />
                <span className="text-xs tracking-[0.25em] uppercase text-dark-grey">About the Author</span>
              </span>
              <h2 className="text-3xl font-display text-charcoal mb-6">
                Written from the inside, not the outside
              </h2>
              <p className="text-lg text-dark-grey leading-relaxed mb-6">
                Molly Varangkounh spent twenty years as president of a family business, 
                working through succession, letting people go, and making decisions that affected real lives. 
                A former CPA with CFO-level experience, she now helps leaders find clarity 
                on the decisions that keep them up at night.
              </p>
              <Link 
                href="/about"
                className="inline-flex items-center gap-2 text-accent font-medium hover:gap-3 transition-all"
              >
                <span>Learn more about Molly</span>
                <span>→</span>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 lg:py-32 bg-charcoal text-white">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl lg:text-4xl font-display mb-6">
              Need more than a guide?
            </h2>
            <p className="text-lg text-white/70 max-w-xl mx-auto mb-10">
              If you're facing a decision that needs more than questions on a page, 
              The Decision Room is where we talk it through.
            </p>
            <Link 
              href="/decision-room"
              className="inline-flex items-center gap-4 group"
            >
              <span className="px-8 py-4 bg-accent text-white text-sm font-medium tracking-wider uppercase transition-all duration-500 group-hover:bg-white group-hover:text-charcoal">
                Enter The Decision Room
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
