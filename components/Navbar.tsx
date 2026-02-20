'use client'

import { useState } from 'react'
import Link from 'next/link'
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from 'framer-motion'
import Logo from './Logo'

const navLinks = [
  { label: 'About', href: '/about' },
  { label: 'Work With Me', href: '/work-with-me' },
  { label: 'Writing', href: '/writing' },
]

export default function Navbar() {
  const [hidden, setHidden] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
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
        animate={{ y: hidden && !mobileOpen ? -100 : 0 }}
        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled || mobileOpen ? 'backdrop-blur-md bg-white/90' : 'bg-transparent'
        }`}
      >
        <div className="container-custom">
          <div className="flex items-center justify-between h-20 lg:h-24">
            <Link href="/" className="relative group">
              <motion.div
                whileHover={{ x: 2 }}
                transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              >
                <Logo variant="mark" size="md" color="dark" />
              </motion.div>
            </Link>

            {/* Desktop links */}
            <div className="hidden md:flex items-center gap-10">
              {navLinks.map((item) => (
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

            {/* Desktop CTA */}
            <Link
              href="/connect"
              className="hidden lg:flex items-center gap-3 px-5 py-2.5 bg-accent text-white text-[12px] tracking-widest uppercase font-medium hover:bg-charcoal transition-colors duration-300"
            >
              <span>Let's Connect</span>
              <span>→</span>
            </Link>

            {/* Mobile menu button */}
            <button
              className="md:hidden flex flex-col gap-1.5 p-2 relative w-10 h-10 items-center justify-center"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            >
              <motion.span
                animate={mobileOpen ? { rotate: 45, y: 5 } : { rotate: 0, y: 0 }}
                transition={{ duration: 0.3 }}
                className="w-6 h-[2px] bg-charcoal block"
              />
              <motion.span
                animate={mobileOpen ? { opacity: 0 } : { opacity: 1 }}
                transition={{ duration: 0.2 }}
                className="w-4 h-[2px] bg-charcoal block"
              />
              <motion.span
                animate={mobileOpen ? { rotate: -45, y: -5 } : { rotate: 0, y: 0 }}
                transition={{ duration: 0.3 }}
                className="w-6 h-[2px] bg-charcoal block"
              />
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="md:hidden overflow-hidden bg-white border-t border-light-grey"
            >
              <div className="container-custom py-6 flex flex-col gap-4">
                {navLinks.map((item) => (
                  <Link
                    key={item.label}
                    href={item.href}
                    onClick={() => setMobileOpen(false)}
                    className="text-lg font-display text-charcoal hover:text-accent transition-colors py-2"
                  >
                    {item.label}
                  </Link>
                ))}
                <div className="pt-4 mt-2 border-t border-light-grey">
                  <Link
                    href="/connect"
                    onClick={() => setMobileOpen(false)}
                    className="inline-flex items-center gap-3 px-6 py-3 bg-accent text-white text-sm font-semibold tracking-wider uppercase"
                  >
                    Let's Connect →
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
        
        {/* Blue accent line at bottom when scrolled */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: scrolled && !mobileOpen ? 1 : 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="h-[3px] bg-accent origin-left"
        />
      </motion.nav>
    </AnimatePresence>
  )
}
