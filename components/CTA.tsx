'use client'

import { useRef } from 'react'
import Image from 'next/image'
import { motion, useInView } from 'framer-motion'

const SUPABASE_URL = 'https://cgcdiiksjmubatinthdr.supabase.co/storage/v1/object/public/site-images'

const links = [
  { text: 'Schedule a Clarity Conversation', href: '#contact', desc: 'Confidential 30-minute call' },
  { text: 'Explore Leadership Advisory', href: '#services', desc: 'Ongoing partnership' },
  { text: 'Discuss Succession Planning', href: '#services', desc: 'Navigate transition with clarity' },
]

const microscripts = [
  "Find alignment over consensus.",
  "Difficult conversations lead to better outcomes.",
  "Be a confident leader in uncertain moments.",
  "Your strong decisions help shape resilient businesses."
]

export default function CTA() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="contact" ref={ref} className="py-32 lg:py-48 bg-accent relative overflow-hidden">
      {/* Swiss geometric elements */}
      <motion.div
        initial={{ scale: 0 }}
        animate={isInView ? { scale: 1 } : {}}
        transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
        className="absolute -right-32 -top-32 w-96 h-96 border-[40px] border-white/10 rounded-full"
      />
      <motion.div
        initial={{ scale: 0 }}
        animate={isInView ? { scale: 1 } : {}}
        transition={{ duration: 1.5, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        className="absolute -left-16 -bottom-16 w-64 h-64 bg-white/5"
      />

      {/* Large background text */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 0.05 } : {}}
        transition={{ duration: 1.5, delay: 0.3 }}
        className="absolute left-0 bottom-0 pointer-events-none select-none"
      >
        <span className="font-swiss text-[30vw] font-black text-white leading-none">
          GO
        </span>
      </motion.div>

      <div className="container-custom relative z-10">
        <div className="grid-12">
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="col-span-12 lg:col-span-2 mb-8 lg:mb-0"
          >
            <div className="flex items-center gap-4">
              <span className="w-2 h-2 bg-white" />
              <span className="label-sm text-white/70">06</span>
            </div>
          </motion.div>

          <div className="col-span-12 lg:col-span-9 lg:col-start-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="mb-6"
            >
              <span className="label-md text-white/80 tracking-widest">Begin</span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 60 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="headline-lg text-white mb-4"
            >
              Ready to lead with{' '}
              <span className="font-semibold">clarity?</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="body-lg text-white/80 mb-8 max-w-xl"
            >
              The first step is an honest conversation. Let's explore what clarity 
              could look like for you and how we might work together.
            </motion.p>

            {/* Microscripts */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="mb-16 lg:mb-20"
            >
              <div className="flex flex-wrap gap-3">
                {microscripts.map((script, i) => (
                  <span 
                    key={i}
                    className="px-4 py-2 text-sm text-white/90 bg-white/10 border border-white/20"
                  >
                    "{script}"
                  </span>
                ))}
              </div>
            </motion.div>

            {/* Large interactive links - Swiss style */}
            <div className="space-y-0 border-t-2 border-white/30">
              {links.map((link, i) => (
                <motion.a
                  key={link.text}
                  href={link.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.8, delay: 0.4 + i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                  className="group flex items-center justify-between py-6 lg:py-8 border-b border-white/20 hover:border-white transition-colors duration-300"
                >
                  <div className="flex items-center gap-6">
                    <span className="font-swiss text-sm font-bold text-white/50 group-hover:text-white transition-colors duration-300">
                      0{i + 1}
                    </span>
                    <div>
                      <motion.span 
                        className="text-xl lg:text-3xl font-swiss font-medium text-white block"
                        whileHover={{ x: 12 }}
                        transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                      >
                        {link.text}
                      </motion.span>
                      <span className="text-sm text-white/60 mt-1 block">{link.desc}</span>
                    </div>
                  </div>
                  <motion.div
                    className="w-12 h-12 flex items-center justify-center border border-white/30 group-hover:bg-white group-hover:border-white transition-all duration-300"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.2 }}
                  >
                    <span className="text-xl text-white group-hover:text-accent transition-colors duration-300">→</span>
                  </motion.div>
                </motion.a>
              ))}
            </div>

            {/* Image strip */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="mt-16 lg:mt-20 grid grid-cols-3 gap-2"
            >
              {['molly-laughing.png', 'molly-talking.png', 'molly-outside.png'].map((img, i) => (
                <motion.div
                  key={img}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.6, delay: 0.8 + i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                  className="relative aspect-square overflow-hidden"
                >
                  <Image
                    src={`${SUPABASE_URL}/${img}`}
                    alt="Molly Varangkounh"
                    fill
                    className="object-cover grayscale hover:grayscale-0 transition-all duration-500"
                    sizes="(max-width: 768px) 33vw, 20vw"
                  />
                  <div className="absolute inset-0 bg-accent/20 hover:bg-transparent transition-colors duration-500" />
                </motion.div>
              ))}
            </motion.div>

            {/* Email - Swiss style */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1, delay: 1, ease: [0.16, 1, 0.3, 1] }}
              className="mt-8 p-8 bg-white"
            >
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                <div>
                  <span className="label-sm text-dark-grey block mb-2">Direct Contact</span>
                  <a 
                    href="mailto:molly@mollyv.com" 
                    className="text-xl lg:text-2xl font-swiss font-medium text-charcoal hover:text-accent transition-colors duration-300"
                  >
                    molly@mollyv.com
                  </a>
                </div>
                <div className="flex items-center gap-4">
                  <p className="text-sm tracking-wide uppercase font-semibold text-accent">Make bold moves.</p>
                  <div className="w-12 h-12 bg-accent flex items-center justify-center">
                    <span className="text-white text-xl">@</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
