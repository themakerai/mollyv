'use client'

import { motion } from 'framer-motion'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import ImagePlaceholder from '@/components/ImagePlaceholder'

export default function ContactPage() {
  return (
    <main className="relative bg-[#FAFAFA]">
      <Navbar />
      
      {/* Hero */}
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
                <span className="text-xs tracking-[0.25em] uppercase text-dark-grey">Contact</span>
              </span>
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
              className="text-[clamp(2.5rem,5vw,4rem)] leading-[1.1] font-display text-charcoal mb-8"
            >
              Let's talk about
              <br />
              <span className="text-accent">what's ahead.</span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="text-lg lg:text-xl text-dark-grey leading-relaxed max-w-2xl"
            >
              Whether you're ready for a conversation or just have a question, 
              I'd love to hear from you.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Contact Options */}
      <section className="py-24 lg:py-32 bg-[#FAFAFA]">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-24">
            {/* Let's Connect */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-charcoal text-white p-10 lg:p-12"
            >
              <span className="text-xs tracking-[0.2em] uppercase text-accent">The First Step</span>
              <h2 className="text-3xl font-display mt-4 mb-6">Let's Connect</h2>
              <p className="text-white/70 leading-relaxed mb-8">
                A confidential conversation about what's in front of you. 
                No pitch, no pressure. Just clarity.
              </p>
              <div className="space-y-4 mb-10">
                {[
                  'Completely confidential',
                  'No obligation',
                  'Leave with clarity',
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <span className="w-1.5 h-1.5 bg-accent" />
                    <span className="text-white/80">{item}</span>
                  </div>
                ))}
              </div>
              <a 
                href="/connect"
                className="inline-flex items-center gap-4 group"
              >
                <span className="px-8 py-4 bg-accent text-white text-sm font-semibold tracking-wider uppercase transition-all duration-500 group-hover:bg-white group-hover:text-charcoal">
                  Fill Out the Intro Form
                </span>
              </a>
            </motion.div>

            {/* Direct Contact */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="bg-white p-10 lg:p-12 border border-light-grey"
            >
              <span className="text-xs tracking-[0.2em] uppercase text-dark-grey">Direct Contact</span>
              <h2 className="text-3xl font-display text-charcoal mt-4 mb-6">Reach out directly</h2>
              <p className="text-dark-grey leading-relaxed mb-8">
                Have a question? Want to discuss ongoing advisory or speaking? 
                Write me directly.
              </p>
              
              <div className="space-y-6">
                <div>
                  <span className="text-xs tracking-[0.2em] uppercase text-mid-grey block mb-2">Email</span>
                  <a 
                    href="mailto:molly@mollyvarangkounh.com"
                    className="text-2xl font-display text-accent hover:text-charcoal transition-colors duration-300"
                  >
                    molly@mollyvarangkounh.com
                  </a>
                </div>
                
                <div>
                  <span className="text-xs tracking-[0.2em] uppercase text-mid-grey block mb-2">LinkedIn</span>
                  <a 
                    href="https://linkedin.com/in/mollyvarangkounh"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-lg text-accent hover:text-charcoal transition-colors duration-300 flex items-center gap-2"
                  >
                    Connect on LinkedIn
                    <span>→</span>
                  </a>
                </div>
              </div>

              <div className="mt-10 pt-8 border-t border-light-grey">
                <p className="text-sm text-mid-grey">
                  Based in the Midwest. Working with leaders everywhere.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* What to Expect */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-7"
            >
              <h2 className="text-3xl lg:text-4xl font-display text-charcoal mb-8">
                What to expect
              </h2>
              <p className="text-lg text-dark-grey leading-relaxed mb-12">
                When you reach out, I'll respond personally. If a conversation makes sense, 
                we'll set one up. If you need something else, 
                we'll figure that out together.
              </p>
              
              <div className="p-8 bg-[#FAFAFA] border-l-4 border-accent text-left">
                <p className="text-xl font-display text-charcoal leading-relaxed">
                  "Strong leadership changes the trajectory of a family, a company, and a community."
                </p>
                <div className="flex items-center gap-4 mt-4">
                  <span className="w-8 h-px bg-accent" />
                  <span className="text-sm text-dark-grey">Molly Varangkounh</span>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="lg:col-span-4 lg:col-start-9 flex justify-center"
            >
              <ImagePlaceholder variant="circle" theme="outline" label="" initials="MV" className="w-48 h-48 lg:w-64 lg:h-64" />
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
