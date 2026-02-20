'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const focusOptions = [
  'Succession or exit planning',
  'Next gen leadership transition',
  'Leadership advisory or thinking partnership',
  'Speaking or workshop for my organization',
  'Molly\'s book and related resources',
  'Not sure yet. Just exploring.',
]

export default function ConnectPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    whatBringsYou: '',
    focus: '',
    whereAreYou: '',
    howDidYouHear: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [error, setError] = useState('')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')
    setIsSubmitting(true)

    try {
      const response = await fetch('/api/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email: formData.email,
          first_name: formData.name,
          lead_source: 'connect-intake',
          metadata: {
            what_brings_you: formData.whatBringsYou,
            focus: formData.focus,
            where_are_you: formData.whereAreYou,
            how_heard: formData.howDidYouHear,
          },
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
      <section className="relative pt-32 pb-12 lg:pt-40 lg:pb-16 bg-white">
        <div className="container-custom">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <span className="inline-flex items-center gap-3 mb-6">
                <span className="w-8 h-px bg-accent" />
                <span className="text-xs tracking-[0.25em] uppercase text-dark-grey">Let's Connect</span>
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
              className="text-[clamp(2rem,4.5vw,3.5rem)] leading-[1.1] font-display text-charcoal mb-8"
            >
              Before we talk, let's make sure our time together is actually useful to you.
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="space-y-4"
            >
              <p className="text-lg text-dark-grey leading-relaxed">
                Take two minutes to answer a few questions. It helps me show up prepared and helps you get clearer on what you're actually looking for.
              </p>
              <p className="text-lg text-dark-grey leading-relaxed">
                This is not a sales call. If I'm not the right fit, I'll tell you and point you somewhere better.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Intake Form */}
      <section className="py-16 lg:py-24 bg-[#FAFAFA]">
        <div className="container-custom">
          <div className="max-w-2xl">
            {!isSubmitted ? (
              <motion.form
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                onSubmit={handleSubmit}
                className="space-y-8"
              >
                {/* 1. Your Name */}
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-charcoal mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-5 py-4 bg-white border border-light-grey text-charcoal placeholder-mid-grey focus:outline-none focus:border-accent transition-colors"
                  />
                </div>

                {/* 2. Email */}
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-charcoal mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-5 py-4 bg-white border border-light-grey text-charcoal placeholder-mid-grey focus:outline-none focus:border-accent transition-colors"
                  />
                </div>

                {/* 3. What brings you here today? */}
                <div>
                  <label htmlFor="whatBringsYou" className="block text-sm font-medium text-charcoal mb-2">
                    What brings you here today?
                  </label>
                  <textarea
                    id="whatBringsYou"
                    name="whatBringsYou"
                    value={formData.whatBringsYou}
                    onChange={handleChange}
                    rows={4}
                    placeholder="No need to have it figured out. Just tell me what's on your mind."
                    className="w-full px-5 py-4 bg-white border border-light-grey text-charcoal placeholder-mid-grey focus:outline-none focus:border-accent transition-colors resize-none"
                  />
                </div>

                {/* 4. What are you most focused on right now? (radio) */}
                <div>
                  <p className="block text-sm font-medium text-charcoal mb-4">
                    What are you most focused on right now?
                  </p>
                  <div className="space-y-3">
                    {focusOptions.map((option) => (
                      <label key={option} className="flex items-start gap-3 cursor-pointer group">
                        <input
                          type="radio"
                          name="focus"
                          value={option}
                          checked={formData.focus === option}
                          onChange={handleChange}
                          className="mt-1 w-4 h-4 text-accent border-light-grey focus:ring-accent cursor-pointer"
                        />
                        <span className="text-dark-grey group-hover:text-charcoal transition-colors">{option}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* 5. How would you describe where you are right now? */}
                <div>
                  <label htmlFor="whereAreYou" className="block text-sm font-medium text-charcoal mb-2">
                    How would you describe where you are right now?
                  </label>
                  <textarea
                    id="whereAreYou"
                    name="whereAreYou"
                    value={formData.whereAreYou}
                    onChange={handleChange}
                    rows={4}
                    placeholder="Any context helps: size of business, stage of transition, what's making this feel urgent now."
                    className="w-full px-5 py-4 bg-white border border-light-grey text-charcoal placeholder-mid-grey focus:outline-none focus:border-accent transition-colors resize-none"
                  />
                </div>

                {/* 6. How did you hear about Molly? */}
                <div>
                  <label htmlFor="howDidYouHear" className="block text-sm font-medium text-charcoal mb-2">
                    How did you hear about Molly?
                  </label>
                  <input
                    type="text"
                    id="howDidYouHear"
                    name="howDidYouHear"
                    value={formData.howDidYouHear}
                    onChange={handleChange}
                    className="w-full px-5 py-4 bg-white border border-light-grey text-charcoal placeholder-mid-grey focus:outline-none focus:border-accent transition-colors"
                  />
                </div>

                {error && (
                  <p className="text-red-500 text-sm">{error}</p>
                )}

                {/* Submit */}
                <div>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="px-10 py-5 bg-charcoal text-white text-sm font-semibold tracking-wider uppercase transition-all duration-500 hover:bg-accent disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? 'Sending...' : 'Send My Intro'}
                  </button>
                  <p className="mt-4 text-sm text-mid-grey italic">
                    I read every message and respond personally.
                  </p>
                </div>
              </motion.form>
            ) : (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="bg-white p-10 lg:p-12 border border-light-grey text-center"
              >
                <div className="w-16 h-16 mx-auto mb-6 bg-accent/10 flex items-center justify-center">
                  <span className="text-3xl text-accent">✓</span>
                </div>
                <h2 className="text-2xl font-display text-charcoal mb-4">
                  Thank you, {formData.name.split(' ')[0]}.
                </h2>
                <p className="text-lg text-dark-grey leading-relaxed max-w-md mx-auto">
                  I've received your intro and will respond personally. Talk soon.
                </p>
              </motion.div>
            )}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
