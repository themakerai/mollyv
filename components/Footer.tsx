'use client'

import { motion } from 'framer-motion'
import Logo from './Logo'

export default function Footer() {
  return (
    <footer className="py-16 lg:py-24 bg-charcoal">
      <div className="container-custom">
        <div className="grid-12 items-end">
          {/* Logo and tagline - Swiss typography */}
          <div className="col-span-12 lg:col-span-5 mb-12 lg:mb-0">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="flex items-start gap-6"
            >
              {/* Badge logo */}
              <Logo variant="mark-badge" size="lg" color="dark" />
              <div>
                <p className="font-swiss text-lg text-white font-medium tracking-tight">
                  Molly Varangkounh
                </p>
                <p className="font-tagline text-xl text-accent mt-1">
                  Make bold moves.
                </p>
              </div>
            </motion.div>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="text-mid-grey text-sm mt-6 max-w-sm leading-relaxed"
            >
              Executive advisory for leaders facing hard decisions. 
              Hiring, firing, exits, succession—when it matters most.
            </motion.p>
          </div>

          {/* Links - Swiss grid */}
          <div className="col-span-6 lg:col-span-2 lg:col-start-8">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            >
              <p className="label-sm text-accent mb-6">Navigate</p>
              <nav className="flex flex-col gap-3">
                <a href="/about" className="text-mid-grey hover:text-white text-sm font-medium tracking-wide transition-colors duration-300">About</a>
                <a href="/services" className="text-mid-grey hover:text-white text-sm font-medium tracking-wide transition-colors duration-300">Services</a>
                <a href="/decision-room" className="text-mid-grey hover:text-white text-sm font-medium tracking-wide transition-colors duration-300">Decision Room</a>
                <a href="/contact" className="text-mid-grey hover:text-white text-sm font-medium tracking-wide transition-colors duration-300">Contact</a>
              </nav>
            </motion.div>
          </div>

          {/* Connect - Swiss style */}
          <div className="col-span-6 lg:col-span-2">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            >
              <p className="label-sm text-accent mb-6">Connect</p>
              <nav className="flex flex-col gap-3">
                <a 
                  href="https://linkedin.com/in/mollyvarangkounh"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-mid-grey hover:text-white text-sm font-medium tracking-wide transition-colors duration-300 flex items-center gap-2 group"
                >
                  LinkedIn
                  <span className="text-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300">→</span>
                </a>
                <a 
                  href="mailto:molly@mollyv.com"
                  className="text-mid-grey hover:text-white text-sm font-medium tracking-wide transition-colors duration-300 flex items-center gap-2 group"
                >
                  Email
                  <span className="text-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300">→</span>
                </a>
              </nav>
            </motion.div>
          </div>
        </div>

        {/* Swiss geometric divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="mt-16 lg:mt-24 flex items-center gap-4 origin-left"
        >
          <div className="w-16 h-1 bg-accent" />
          <div className="flex-1 h-px bg-dark-grey" />
        </motion.div>

        {/* Bottom bar - Swiss minimal */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="mt-8 flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4"
        >
          <p className="text-dark-grey text-xs tracking-wide">
            © {new Date().getFullYear()} Molly Varangkounh. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <p className="font-tagline text-mid-grey text-xs">
              Lead with clarity. Make bold moves.
            </p>
            <div className="flex items-center gap-2">
              <span className="text-dark-grey text-xs">Built by</span>
              <a 
                href="https://themakerai.app" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-accent text-xs font-medium hover:text-white transition-colors duration-300"
              >
                The Maker
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}
