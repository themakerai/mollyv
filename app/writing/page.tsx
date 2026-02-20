'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const placeholderArticles = [
  {
    date: 'Coming Soon',
    title: 'The conversation you keep putting off',
    excerpt: 'Why the thing you\'re avoiding is usually the thing that matters most. And what happens when you finally say it out loud.',
  },
  {
    date: 'Coming Soon',
    title: 'What twenty years taught me about leadership',
    excerpt: 'It had nothing to do with strategy and everything to do with the willingness to sit in hard rooms and tell the truth.',
  },
  {
    date: 'Coming Soon',
    title: 'Succession is personal',
    excerpt: 'The handoff isn\'t a transaction. It\'s a conversation about identity, legacy, and what the next chapter actually looks like.',
  },
]

export default function WritingPage() {
  const [firstName, setFirstName] = useState('')
  const [email, setEmail] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [error, setError] = useState('')

  const handleWaitlistSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')
    setIsSubmitting(true)

    try {
      const response = await fetch('/api/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email,
          first_name: firstName,
          lead_source: 'book-waitlist',
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

      {/* Page Header */}
      <section className="relative pt-32 pb-16 lg:pt-40 lg:pb-20 bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="inline-flex items-center gap-3 mb-6">
              <span className="w-8 h-px bg-accent" />
              <span className="text-xs tracking-[0.25em] uppercase text-dark-grey">Writing</span>
            </span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="text-[clamp(2.5rem,5vw,4rem)] leading-[1.1] font-display text-charcoal"
          >
            Writing
          </motion.h1>
        </div>
      </section>

      {/* Book Section */}
      <section className="py-24 lg:py-32 bg-charcoal text-white relative overflow-hidden">
        {/* Large background text */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none select-none">
          <span className="font-swiss text-[15vw] text-white/[0.03] whitespace-nowrap font-black uppercase tracking-tight">
            Me & Steve
          </span>
        </div>

        {/* Geometric accents */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="absolute top-0 left-0 w-1/4 h-1 bg-accent origin-left"
        />
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="absolute bottom-0 right-0 w-1/4 h-1 bg-accent origin-right"
        />

        <div className="container-custom relative z-10">
          <div className="max-w-3xl mx-auto">
            {/* Label */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="flex items-center gap-4 mb-8"
            >
              <span className="w-8 h-px bg-accent" />
              <span className="label-sm text-white/60">A Memoir · Coming Soon</span>
            </motion.div>

            {/* Title */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.2 }}
              className="mb-6"
            >
              <h2 className="font-script text-5xl lg:text-7xl text-white lowercase">
                me <span className="text-accent">&</span> Steve
              </h2>
            </motion.div>

            {/* Sub-headline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-lg text-white/60 mb-10"
            >
              A memoir. Coming soon.
            </motion.p>

            {/* Body */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.4 }}
              className="space-y-6 mb-16"
            >
              <p className="text-2xl lg:text-3xl font-semibold text-white leading-relaxed">
                This is the book I didn't plan to write.
              </p>
              <p className="text-lg text-white/80 leading-relaxed">
                It's about succession that didn't go the way anyone expected. About identity that gets wrapped up in a business you've given twenty years to. About realizing the plan you had and the future you're actually building aren't pointing in the same direction, and what happens when you finally face that honestly.
              </p>
              <p className="text-lg text-white/80 leading-relaxed">
                It's also about what I found on the other side. The clarity that comes after hard choices. The freedom in finally saying what was true.
              </p>
              <p className="text-lg text-white/60 leading-relaxed">
                If you've led a family business through a transition that no one outside the room fully understood, this book is for you.
              </p>
            </motion.div>

            {/* Waitlist Form */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.6 }}
            >
              {!isSubmitted ? (
                <div className="bg-white/5 border border-white/10 p-8 lg:p-10">
                  <h3 className="text-xl font-display text-white mb-2">Join the Waitlist</h3>
                  <p className="text-sm text-white/50 mb-6">
                    Be the first to know when the book is available.
                  </p>

                  <form onSubmit={handleWaitlistSubmit} className="space-y-4">
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="firstName" className="block text-xs tracking-[0.15em] uppercase text-white/50 mb-2">
                          First Name
                        </label>
                        <input
                          type="text"
                          id="firstName"
                          value={firstName}
                          onChange={(e) => setFirstName(e.target.value)}
                          required
                          className="w-full px-4 py-3 bg-white/5 border border-white/15 text-white placeholder-white/30 focus:outline-none focus:border-accent transition-colors"
                          placeholder="Your first name"
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-xs tracking-[0.15em] uppercase text-white/50 mb-2">
                          Email
                        </label>
                        <input
                          type="email"
                          id="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          required
                          className="w-full px-4 py-3 bg-white/5 border border-white/15 text-white placeholder-white/30 focus:outline-none focus:border-accent transition-colors"
                          placeholder="you@example.com"
                        />
                      </div>
                    </div>

                    {error && (
                      <p className="text-red-400 text-sm">{error}</p>
                    )}

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="px-8 py-4 bg-accent text-white font-semibold text-sm tracking-wider uppercase hover:bg-accent/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? 'Joining...' : 'Join the Waitlist'}
                    </button>
                  </form>
                </div>
              ) : (
                <div className="bg-white/5 border border-white/10 p-8 lg:p-10 text-center">
                  <div className="w-14 h-14 mx-auto mb-4 bg-accent/20 flex items-center justify-center">
                    <span className="text-2xl text-accent">✓</span>
                  </div>
                  <h3 className="text-xl font-display text-white mb-2">You're on the list.</h3>
                  <p className="text-sm text-white/60">
                    I'll let you know as soon as the book is ready. Thank you, {firstName}.
                  </p>
                </div>
              )}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Articles Section */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-12"
          >
            <span className="inline-flex items-center gap-3 mb-6">
              <span className="w-8 h-px bg-accent" />
              <span className="text-xs tracking-[0.25em] uppercase text-dark-grey">From Molly's Desk</span>
            </span>
            <h2 className="text-3xl lg:text-4xl font-display text-charcoal">
              Articles
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {placeholderArticles.map((article, i) => (
              <motion.article
                key={article.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: i * 0.1 }}
                className="bg-[#FAFAFA] border border-light-grey hover:border-accent transition-colors duration-300 group"
              >
                <div className="aspect-[16/9] bg-sand/50 flex items-center justify-center">
                  <span className="text-sm text-charcoal/30 tracking-widest uppercase select-none">Article Image</span>
                </div>
                <div className="p-6 lg:p-8">
                  <span className="text-xs tracking-[0.15em] uppercase text-accent font-medium">{article.date}</span>
                  <h3 className="text-xl font-display text-charcoal mt-3 mb-3 group-hover:text-accent transition-colors duration-300">
                    {article.title}
                  </h3>
                  <p className="text-sm text-dark-grey leading-relaxed mb-4">
                    {article.excerpt}
                  </p>
                  <span className="text-sm text-accent font-medium inline-flex items-center gap-2 group-hover:gap-3 transition-all duration-300">
                    Read more <span>→</span>
                  </span>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
