'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'

// Font option configurations
const fontOptions = [
  {
    id: 'gentlemans',
    name: 'Option A: Classic Elegance',
    subtitle: "Gentleman's + Frama",
    description: 'A traditional, refined approach with script accents that feel timeless and warm.',
    primary: 'PP Frama',
    accent: "TT Gentleman's",
    accentStyle: {
      fontFamily: "'TT Gentlemans', Georgia, serif",
      fontWeight: 400,
      fontStyle: 'normal',
      letterSpacing: '0.02em',
    },
    vibe: ['Traditional', 'Warm', 'Personal', 'Refined'],
    pros: ['Timeless elegance', 'Personal warmth', 'Approachable sophistication'],
    cons: ['May feel dated to some', 'Less distinctive', 'Common in luxury space'],
  },
  {
    id: 'lettra',
    name: 'Option B: Modern Technical',
    subtitle: 'Lettra Mono + Frama',
    description: 'A contemporary, distinctive approach with monospace accents that feel precise and intentional.',
    primary: 'PP Frama',
    accent: 'PP Lettra Mono',
    accentStyle: {
      fontFamily: "'PP Lettra Mono', monospace",
      fontWeight: 500,
      fontStyle: 'normal',
      letterSpacing: '-0.03em',
    },
    vibe: ['Modern', 'Technical', 'Distinctive', 'Bold'],
    pros: ['Highly distinctive', 'Modern and fresh', 'Stands out from competitors'],
    cons: ['Less traditional warmth', 'May feel cold to some', 'Unconventional choice'],
  },
  {
    id: 'editorial',
    name: 'Option C: Editorial Refinement',
    subtitle: 'Cormorant Garamond + Frama',
    description: 'A sophisticated, editorial approach with elegant serif accents that feel cultured and authoritative.',
    primary: 'PP Frama',
    accent: 'Cormorant Garamond',
    accentStyle: {
      fontFamily: "'Cormorant Garamond', Georgia, serif",
      fontWeight: 500,
      fontStyle: 'italic',
      letterSpacing: '0.01em',
    },
    vibe: ['Editorial', 'Cultured', 'Authoritative', 'Elegant'],
    pros: ['Sophisticated feel', 'Editorial authority', 'Highly readable'],
    cons: ['Less unique', 'Requires good pairing', 'Common in publishing'],
  },
]

export default function BrandOptionsPage() {
  const [selectedOption, setSelectedOption] = useState<string | null>(null)
  const [darkMode, setDarkMode] = useState(false)

  const bgColor = darkMode ? '#1E1E1E' : '#FAFAFA'
  const textColor = darkMode ? '#F7F7F7' : '#1E1E1E'
  const mutedColor = darkMode ? '#7A7A7A' : '#4A4A4A'
  const cardBg = darkMode ? '#262626' : '#FFFFFF'
  const borderColor = darkMode ? '#333' : '#E0E0E0'
  const accentColor = '#2D8FB5'

  return (
    <>
      {/* Load Google Fonts for Option C */}
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;1,400;1,500;1,600&display=swap');
        
        @font-face {
          font-family: 'TT Gentlemans';
          src: url('/TT_Gentlemens_Trial_Regular.ttf') format('truetype');
          font-weight: 400;
          font-style: normal;
          font-display: swap;
        }
      `}</style>

      <div className="min-h-screen transition-colors duration-500" style={{ backgroundColor: bgColor, color: textColor }}>
        {/* Header */}
        <header className="py-6 px-6 lg:px-12 border-b sticky top-0 z-50" style={{ borderColor, backgroundColor: bgColor }}>
          <div className="max-w-[1400px] mx-auto flex justify-between items-center">
            <div>
              <h1 className="text-xl font-bold tracking-tight" style={{ fontFamily: "'PP Frama', sans-serif" }}>Brand Typography Options</h1>
              <p className="text-xs mt-0.5" style={{ color: mutedColor }}>Compare font pairings for Molly V.</p>
            </div>
            <div className="flex items-center gap-4">
              <Link href="/brand" className="text-sm hover:opacity-70 transition-opacity" style={{ color: accentColor }}>
                ← Guidelines
              </Link>
              <button
                onClick={() => setDarkMode(!darkMode)}
                className="px-3 py-1.5 text-xs font-medium border transition-colors"
                style={{ borderColor, backgroundColor: cardBg }}
              >
                {darkMode ? '☀️' : '🌙'}
              </button>
            </div>
          </div>
        </header>

        <main className="py-12 px-6 lg:px-12">
          <div className="max-w-[1400px] mx-auto">
            
            {/* Intro */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl lg:text-4xl font-bold mb-4" style={{ fontFamily: "'PP Frama', sans-serif" }}>
                Three Directions for <span style={{ color: accentColor }}>Typography</span>
              </h2>
              <p className="text-lg max-w-2xl mx-auto" style={{ color: mutedColor }}>
                Each option pairs PP Frama as the primary typeface with a different accent font. 
                Compare how each direction feels for the Molly V. brand.
              </p>
            </motion.div>

            {/* Options Grid */}
            <div className="grid lg:grid-cols-3 gap-8 mb-16">
              {fontOptions.map((option, i) => (
                <motion.div
                  key={option.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className={`border transition-all cursor-pointer ${selectedOption === option.id ? 'ring-2 ring-offset-2' : ''}`}
                  style={{ 
                    borderColor: selectedOption === option.id ? accentColor : borderColor, 
                    backgroundColor: cardBg,
                    ringColor: accentColor,
                  }}
                  onClick={() => setSelectedOption(selectedOption === option.id ? null : option.id)}
                >
                  {/* Preview Header */}
                  <div className="p-6 border-b" style={{ borderColor }}>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs font-medium uppercase tracking-wider" style={{ color: accentColor }}>{option.subtitle}</span>
                      {selectedOption === option.id && (
                        <span className="text-xs px-2 py-1" style={{ backgroundColor: accentColor, color: '#fff' }}>Selected</span>
                      )}
                    </div>
                    <h3 className="text-xl font-bold" style={{ fontFamily: "'PP Frama', sans-serif" }}>{option.name}</h3>
                    <p className="text-sm mt-2" style={{ color: mutedColor }}>{option.description}</p>
                  </div>

                  {/* Sample Preview */}
                  <div className="p-6">
                    {/* Headline Sample */}
                    <div className="mb-6">
                      <span className="text-[10px] uppercase tracking-wider mb-2 block" style={{ color: mutedColor }}>Headline</span>
                      <h4 className="text-2xl leading-tight" style={{ fontFamily: "'PP Frama', sans-serif" }}>
                        Lead with clarity.
                      </h4>
                      <p className="text-2xl leading-tight mt-1" style={option.accentStyle}>
                        Make bold moves.
                      </p>
                    </div>

                    {/* Tagline Sample */}
                    <div className="mb-6">
                      <span className="text-[10px] uppercase tracking-wider mb-2 block" style={{ color: mutedColor }}>Tagline</span>
                      <p className="text-lg" style={option.accentStyle}>
                        Make bold moves.
                      </p>
                    </div>

                    {/* Body + Accent Sample */}
                    <div className="mb-6">
                      <span className="text-[10px] uppercase tracking-wider mb-2 block" style={{ color: mutedColor }}>Body with Accent</span>
                      <p className="text-sm leading-relaxed" style={{ fontFamily: "'PP Frama', sans-serif" }}>
                        For leaders navigating high-stakes decisions—
                        <span style={option.accentStyle}>
                          succession, exits, difficult conversations
                        </span>
                        —with someone who's sat in the chair.
                      </p>
                    </div>

                    {/* Vibe Tags */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {option.vibe.map((v) => (
                        <span 
                          key={v} 
                          className="text-[10px] px-2 py-1 border"
                          style={{ borderColor, color: mutedColor }}
                        >
                          {v}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Expand Details */}
                  {selectedOption === option.id && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="px-6 pb-6 border-t"
                      style={{ borderColor }}
                    >
                      <div className="pt-6 grid grid-cols-2 gap-4">
                        <div>
                          <span className="text-[10px] uppercase tracking-wider mb-2 block" style={{ color: accentColor }}>Pros</span>
                          <ul className="space-y-1">
                            {option.pros.map((pro) => (
                              <li key={pro} className="text-xs flex items-start gap-2">
                                <span style={{ color: accentColor }}>+</span>
                                <span style={{ color: mutedColor }}>{pro}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <span className="text-[10px] uppercase tracking-wider mb-2 block" style={{ color: '#e74c3c' }}>Considerations</span>
                          <ul className="space-y-1">
                            {option.cons.map((con) => (
                              <li key={con} className="text-xs flex items-start gap-2">
                                <span style={{ color: '#e74c3c' }}>−</span>
                                <span style={{ color: mutedColor }}>{con}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </motion.div>
              ))}
            </div>

            {/* Side-by-Side Full Mockups */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="mb-16"
            >
              <h3 className="text-xl font-bold mb-8 text-center" style={{ fontFamily: "'PP Frama', sans-serif" }}>
                Full Hero Mockups
              </h3>

              <div className="grid lg:grid-cols-3 gap-6">
                {fontOptions.map((option) => (
                  <div 
                    key={option.id} 
                    className="relative overflow-hidden border"
                    style={{ borderColor, backgroundColor: '#FAFAFA' }}
                  >
                    {/* Label */}
                    <div className="absolute top-4 left-4 z-10 px-2 py-1 text-[10px] font-medium uppercase tracking-wider" style={{ backgroundColor: accentColor, color: '#fff' }}>
                      {option.id === 'gentlemans' ? 'A' : option.id === 'lettra' ? 'B' : 'C'}
                    </div>

                    {/* Image Section */}
                    <div className="relative aspect-[4/3]">
                      <Image
                        src="/molly-v.png"
                        alt="Molly Varangkounh"
                        fill
                        className="object-cover object-top"
                      />
                      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#FAFAFA] to-transparent" />
                    </div>

                    {/* Content Section */}
                    <div className="p-6 -mt-8 relative z-10">
                      <span className="text-[10px] uppercase tracking-widest mb-3 block" style={{ color: accentColor }}>{option.subtitle}</span>
                      <h4 className="text-xl text-charcoal leading-tight mb-1" style={{ fontFamily: "'PP Frama', sans-serif" }}>
                        Lead with clarity.
                      </h4>
                      <p className="text-xl mb-4" style={{ ...option.accentStyle, color: accentColor }}>
                        Decide with conviction.
                      </p>
                      <p className="text-xs max-w-[220px]" style={{ color: mutedColor, fontFamily: "'PP Frama', sans-serif" }}>
                        For leaders navigating high-stakes decisions—with someone who's sat in the chair.
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Business Card Mockups */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="mb-16"
            >
              <h3 className="text-xl font-bold mb-8 text-center" style={{ fontFamily: "'PP Frama', sans-serif" }}>
                Business Card Mockups
              </h3>

              <div className="grid lg:grid-cols-3 gap-6">
                {fontOptions.map((option) => (
                  <div 
                    key={option.id}
                    className="aspect-[3.5/2] p-6 flex flex-col justify-between shadow-xl"
                    style={{ backgroundColor: '#F7F7F7' }}
                  >
                    {/* Accent bar */}
                    <div className="absolute left-0 top-0 bottom-0 w-2" style={{ backgroundColor: accentColor }} />
                    
                    <div>
                      <span className="text-[10px] uppercase tracking-widest mb-4 block" style={{ color: mutedColor }}>{option.subtitle}</span>
                    </div>
                    
                    <div>
                      <h4 className="text-lg font-bold text-[#1E1E1E] mb-1" style={{ fontFamily: "'PP Frama', sans-serif" }}>
                        Molly Varangkounh
                      </h4>
                      <p className="text-xs uppercase tracking-wider mb-3" style={{ color: accentColor }}>
                        Executive Advisory
                      </p>
                      <p className="text-sm" style={{ ...option.accentStyle, color: '#1E1E1E' }}>
                        Make bold moves.
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Typography Specimens */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="mb-16"
            >
              <h3 className="text-xl font-bold mb-8 text-center" style={{ fontFamily: "'PP Frama', sans-serif" }}>
                Accent Font Specimens
              </h3>

              <div className="grid lg:grid-cols-3 gap-6">
                {fontOptions.map((option) => (
                  <div 
                    key={option.id}
                    className="p-8 border"
                    style={{ borderColor, backgroundColor: cardBg }}
                  >
                    <span className="text-[10px] uppercase tracking-widest mb-6 block" style={{ color: accentColor }}>{option.accent}</span>
                    
                    {/* Alphabet */}
                    <div className="mb-6">
                      <p className="text-3xl leading-relaxed" style={option.accentStyle}>
                        {option.id === 'lettra' ? 'Abcdefghijklm' : 'ABCDEFGHIJKLM'}
                      </p>
                      <p className="text-3xl leading-relaxed" style={option.accentStyle}>
                        {option.id === 'lettra' ? 'Nopqrstuvwxyz' : 'NOPQRSTUVWXYZ'}
                      </p>
                    </div>

                    {/* Numbers */}
                    <div className="mb-6">
                      <p className="text-2xl" style={option.accentStyle}>
                        1234567890
                      </p>
                    </div>

                    {/* Sample Phrases */}
                    <div className="space-y-2">
                      <p className="text-lg" style={option.accentStyle}>
                        Clarity changes everything
                      </p>
                      <p className="text-lg" style={option.accentStyle}>
                        Lead with conviction
                      </p>
                      <p className="text-lg" style={option.accentStyle}>
                        Make bold moves
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Recommendation */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="p-8 border text-center"
              style={{ borderColor: accentColor, backgroundColor: cardBg }}
            >
              <h3 className="text-xl font-bold mb-4" style={{ fontFamily: "'PP Frama', sans-serif" }}>
                Our Recommendation
              </h3>
              <p className="text-sm max-w-2xl mx-auto mb-6" style={{ color: mutedColor }}>
                <strong style={{ color: textColor }}>Option B (Lettra Mono + Frama)</strong> offers the most distinctive brand identity 
                for Molly V. The monospace accent creates a modern, precise feel that aligns with clarity-focused messaging 
                while standing out from traditional coaching brands. However, if warmth is prioritized, Option A or C may feel more approachable.
              </p>
              <div className="flex justify-center gap-4">
                <Link
                  href="/brand"
                  className="px-6 py-3 text-sm font-medium uppercase tracking-wider transition-all hover:opacity-80"
                  style={{ backgroundColor: accentColor, color: '#fff' }}
                >
                  View Current Guidelines
                </Link>
                <Link
                  href="/brand/assets"
                  className="px-6 py-3 text-sm font-medium uppercase tracking-wider border transition-all hover:opacity-80"
                  style={{ borderColor: textColor, color: textColor }}
                >
                  Download Assets
                </Link>
              </div>
            </motion.div>

            {/* Footer */}
            <div className="mt-16 pt-8 border-t text-center" style={{ borderColor }}>
              <Link href="/" className="text-sm hover:opacity-70 transition-opacity" style={{ color: accentColor }}>
                ← Back to main site
              </Link>
            </div>
          </div>
        </main>
      </div>
    </>
  )
}
