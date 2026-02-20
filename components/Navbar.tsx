'use client'

import { useState } from 'react'
import Link from 'next/link'
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from 'framer-motion'
import Logo from './Logo'

export default function Navbar() {
  const [hidden, setHidden] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { scrollY } = useScroll()

  useMotionValueEvent(scrollY, 'change', (latest) => {
    const previous = scrollY.getPrevious() ?? 0
    if (latest > previous && latest > 150) {
      setHidden(true)
    } else {
      setHidden(false)
    }
    setScrolled(latest > 50)
  })

  return (
    <AnimatePresence>
      <motion.nav
        initial={{ y: 0 }}
        animate={{ y: hidden ? -100 : 0 }}
        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled ? 'backdrop-blur-md bg-white/90' : 'bg-transparent'
        }`}
      >
        <div className="container-custom">
          <div className="flex items-center justify-between h-20 lg:h-24">
            {/* Logo - Official MV. mark */}
            <Link href="/" className="relative group">
              <motion.div
                whileHover={{ x: 2 }}
                transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              >
                <Logo variant="mark" size="md" color="dark" />
              </motion.div>
            </Link>

            {/* Navigation Links - Swiss style */}
            <div className="hidden md:flex items-center gap-10">
              {[
                { label: 'About', href: '/about' },
                { label: 'Work With Me', href: '/work-with-me' },
                { label: 'Writing', href: '/writing' },
                { label: 'Contact', href: '/contact' },
              ].map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="text-[13px] tracking-wider uppercase text-dark-grey hover:text-charcoal transition-colors duration-300"
                >
                  <motion.span
                    whileHover={{ y: -2 }}
                    transition={{ duration: 0.2 }}
                    className="inline-block"
                  >
                    {item.label}
                  </motion.span>
                </Link>
              ))}
            </div>

            {/* CTA Button - Let's Connect */}
            <Link
              href="/contact"
              className="hidden lg:flex items-center gap-3 px-5 py-2.5 bg-accent text-white text-[12px] tracking-widest uppercase font-medium hover:bg-charcoal transition-colors duration-300"
            >
              <span>Let's Connect</span>
              <span>→</span>
            </Link>

            {/* Mobile Menu Button - Clean lines */}
            <button className="md:hidden flex flex-col gap-2 p-2">
              <span className="w-6 h-[2px] bg-charcoal" />
              <span className="w-4 h-[2px] bg-charcoal" />
            </button>
          </div>
        </div>
        
        {/* Blue accent line at bottom when scrolled */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: scrolled ? 1 : 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="h-[3px] bg-accent origin-left"
        />
      </motion.nav>
    </AnimatePresence>
  )
}
