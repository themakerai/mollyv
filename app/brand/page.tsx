'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import Logo from '@/components/Logo'

export default function BrandPage() {
  const [darkMode, setDarkMode] = useState(false)
  const [password, setPassword] = useState('')
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [error, setError] = useState('')
  
  const bgColor = darkMode ? '#1E1E1E' : '#F7F7F7'
  const textColor = darkMode ? '#F7F7F7' : '#1E1E1E'
  const mutedColor = darkMode ? '#7A7A7A' : '#4A4A4A'
  const accentColor = '#2D8FB5'

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault()
    if (password === 'themaker') {
      setIsAuthenticated(true)
      setError('')
    } else {
      setError('Incorrect password')
    }
  }

  // Password protection screen
  if (!isAuthenticated) {
    return (
      <div className="min-h-screen flex items-center justify-center" style={{ backgroundColor: '#F7F7F7' }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="w-full max-w-md p-8"
        >
          <div className="text-center mb-8">
            <Logo variant="mark" size="lg" color="dark" />
            <h1 className="text-2xl font-bold tracking-tight mt-6 font-swiss">Brand Guidelines</h1>
            <p className="text-sm mt-2 text-[#4A4A4A]">Enter password to access brand assets</p>
          </div>
          
          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter password"
                className="w-full px-4 py-3 border border-[#E0E0E0] text-center text-lg tracking-wider focus:outline-none focus:border-[#2D8FB5] transition-colors"
                style={{ backgroundColor: '#fff' }}
              />
            </div>
            {error && (
              <p className="text-red-500 text-sm text-center">{error}</p>
            )}
            <button
              type="submit"
              className="w-full py-3 text-sm font-semibold uppercase tracking-wider transition-all hover:opacity-90"
              style={{ backgroundColor: accentColor, color: '#fff' }}
            >
              Access Brand Portal
            </button>
          </form>
          
          <div className="mt-8 text-center">
            <a 
              href="/"
              className="text-sm hover:opacity-70 transition-opacity"
              style={{ color: accentColor }}
            >
              ← Back to main site
            </a>
          </div>
        </motion.div>
      </div>
    )
  }
  
  // Brand Colors from the official palette (Deep Cyan-Navy)
  const brandColors = [
    { name: 'Black', hex: '#1E1E1E', cmyk: 'C72 M66 Y65 K75', rgb: 'R30 G30 B30' },
    { name: 'Cyan Blue', hex: '#2D8FB5', cmyk: 'C75 M28 Y12 K0', rgb: 'R45 G143 B181' },
    { name: 'Navy', hex: '#1E4880', cmyk: 'C95 M70 Y20 K5', rgb: 'R30 G72 B128' },
    { name: 'Sky', hex: '#6BC1E0', cmyk: 'C52 M8 Y4 K0', rgb: 'R107 G193 B224' },
    { name: 'Sand', hex: '#EAE5E1', cmyk: 'C7 M7 Y9 K0', rgb: 'R234 G229 B225' },
    { name: 'White', hex: '#F7F7F7', cmyk: 'C2 M1 Y1 K0', rgb: 'R247 G247 B247' },
  ]

  const logoVariants = [
    {
      name: 'Mark (Primary)',
      variant: 'mark' as const,
      description: 'The official MV. logo mark - use this as the primary identifier',
      usage: 'Website header, business cards, social media profile'
    },
    {
      name: 'Mark Outline',
      variant: 'mark-outline' as const,
      description: 'Outlined version for special applications',
      usage: 'Watermarks, embossing, special print treatments'
    },
    {
      name: 'Mark Horizontal',
      variant: 'mark-horizontal' as const,
      description: 'Mark with MOLLY V. text side by side',
      usage: 'Email signatures, website navigation, letterhead'
    },
    {
      name: 'Mark Stacked',
      variant: 'mark-stacked' as const,
      description: 'Mark with MOLLY V. text below',
      usage: 'Square social media posts, presentations'
    },
    {
      name: 'Mark Badge',
      variant: 'mark-badge' as const,
      description: 'Square badge with mark inside - high contrast',
      usage: 'Favicon, app icon, footer, merchandise'
    },
    {
      name: 'Wordmark',
      variant: 'wordmark' as const,
      description: 'MOLLY V. text only',
      usage: 'When the mark is already present elsewhere'
    },
    {
      name: 'Full Logo',
      variant: 'full' as const,
      description: 'Complete logo with mark, name, and tagline',
      usage: 'Hero sections, presentations, print materials'
    },
    {
      name: 'Tagline',
      variant: 'tagline' as const,
      description: 'Make bold moves. - the brand tagline',
      usage: 'Supporting element, callouts, social media'
    },
  ]

  return (
    <div className="min-h-screen transition-colors duration-500" style={{ backgroundColor: bgColor, color: textColor }}>
      {/* Header */}
      <header className="py-8 px-6 lg:px-12 border-b" style={{ borderColor: darkMode ? '#333' : '#E0E0E0' }}>
        <div className="max-w-[1400px] mx-auto flex justify-between items-center">
          <div className="flex items-center gap-6">
            <Logo variant="mark" size="sm" color={darkMode ? 'light' : 'dark'} />
            <div>
              <h1 className="text-2xl font-bold tracking-tight font-swiss">Brand Guidelines</h1>
              <p className="text-sm mt-1" style={{ color: mutedColor }}>Molly Varangkounh Visual Identity</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <a 
              href="/brand/assets"
              className="px-6 py-3 text-sm font-bold uppercase tracking-wider transition-all hover:scale-105 shadow-lg"
              style={{ 
                backgroundColor: accentColor,
                color: '#fff'
              }}
            >
              ↓ Download Assets
            </a>
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="px-4 py-2 text-sm font-medium border transition-colors"
              style={{ 
                borderColor: darkMode ? '#444' : '#E0E0E0',
                backgroundColor: darkMode ? '#333' : '#fff'
              }}
            >
              {darkMode ? '☀️ Light' : '🌙 Dark'}
            </button>
          </div>
        </div>
      </header>

      <main className="py-16 px-6 lg:px-12">
        <div className="max-w-[1400px] mx-auto">
          
          {/* Download Assets Banner */}
          <motion.section 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-16"
          >
            <a 
              href="/brand/assets"
              className="block p-8 border-2 transition-all hover:shadow-xl group"
              style={{ 
                borderColor: accentColor,
                backgroundColor: darkMode ? '#262626' : '#fff'
              }}
            >
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-2xl font-bold tracking-tight font-swiss mb-2" style={{ color: accentColor }}>
                    Download Brand Assets
                  </h2>
                  <p className="text-sm" style={{ color: mutedColor }}>
                    Logo files (SVG), email signature, business card template, letterhead, and social media graphics
                  </p>
                </div>
                <div 
                  className="px-8 py-4 text-lg font-bold uppercase tracking-wider transition-transform group-hover:translate-x-2"
                  style={{ 
                    backgroundColor: accentColor,
                    color: '#fff'
                  }}
                >
                  ↓ Download
                </div>
              </div>
            </a>
          </motion.section>

          {/* Primary Logo Display */}
          <section className="mb-24">
            <h2 className="text-xs tracking-[0.2em] uppercase mb-8 font-swiss font-semibold" style={{ color: accentColor }}>Primary Logo</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="p-16 bg-white flex items-center justify-center">
                <Logo variant="full" size="xl" color="dark" />
              </div>
              <div className="p-16 flex items-center justify-center" style={{ backgroundColor: '#1E1E1E' }}>
                <Logo variant="full" size="xl" color="light" />
              </div>
            </div>
            <p className="mt-6 text-sm" style={{ color: mutedColor }}>
              The full logo combines the MV. mark with "MOLLY V." and the tagline "Make bold moves." 
              Use this version when introducing the brand or in hero sections.
            </p>
          </section>

          {/* Color Palette */}
          <section className="mb-24">
            <h2 className="text-xs tracking-[0.2em] uppercase mb-8 font-swiss font-semibold" style={{ color: accentColor }}>Color Palette</h2>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
              {brandColors.map((color) => (
                <div key={color.name} className="space-y-3">
                  <div 
                    className="h-32 border" 
                    style={{ 
                      backgroundColor: color.hex,
                      borderColor: color.hex === '#F7F7F7' ? '#E0E0E0' : 'transparent'
                    }} 
                  />
                  <div className="p-3 border" style={{ borderColor: darkMode ? '#333' : '#E0E0E0' }}>
                    <p className="font-medium text-sm font-swiss">{color.name}</p>
                    <p className="text-xs font-mono mt-1" style={{ color: accentColor }}>{color.hex}</p>
                    <p className="text-[10px] mt-2" style={{ color: mutedColor }}>{color.cmyk}</p>
                    <p className="text-[10px]" style={{ color: mutedColor }}>{color.rgb}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Typography */}
          <section className="mb-24">
            <h2 className="text-xs tracking-[0.2em] uppercase mb-8 font-swiss font-semibold" style={{ color: accentColor }}>Typography</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="p-8 border" style={{ borderColor: darkMode ? '#333' : '#E0E0E0' }}>
                <p className="text-xs tracking-[0.15em] uppercase mb-4 font-swiss" style={{ color: mutedColor }}>Display — PP Frama</p>
                <p className="text-5xl tracking-tight mb-4 font-display">MOLLY V.</p>
                <p className="text-2xl tracking-tight mb-4 font-display">Lead with clarity.</p>
                <p className="text-sm font-swiss" style={{ color: mutedColor }}>Headlines, titles, hero text. Premium geometric sans-serif with a distinctive, sophisticated character.</p>
              </div>
              <div className="p-8 border" style={{ borderColor: darkMode ? '#333' : '#E0E0E0' }}>
                <p className="text-xs tracking-[0.15em] uppercase mb-4 font-swiss" style={{ color: mutedColor }}>Body — DM Sans</p>
                <p className="text-2xl font-bold tracking-tight mb-4 font-swiss">Body Text & UI</p>
                <p className="text-base mb-4 font-swiss" style={{ color: mutedColor }}>This is body text used for paragraphs, descriptions, and general content throughout the site.</p>
                <p className="text-sm font-swiss" style={{ color: mutedColor }}>Clean, modern, highly readable. Used for body copy, navigation, buttons, and labels.</p>
              </div>
              <div className="p-8 border" style={{ borderColor: darkMode ? '#333' : '#E0E0E0' }}>
                <p className="text-xs tracking-[0.15em] uppercase mb-4 font-swiss" style={{ color: mutedColor }}>Accent — PP Lettra Mono</p>
                <p className="font-script text-5xl mb-4 lowercase" style={{ color: accentColor }}>feels uncertain.</p>
                <p className="text-sm font-swiss mb-4" style={{ color: mutedColor }}>Heavier weight, close spacing. Used sparingly for emotional accent (e.g. “feels uncertain.”, “now guiding.”).</p>
                <p className="text-xs font-swiss mt-4" style={{ color: mutedColor }}>Taglines (“Make bold moves.”) use Frama above.</p>
              </div>
            </div>
            
            {/* Font Files */}
            <div className="mt-8 p-6 border" style={{ borderColor: darkMode ? '#333' : '#E0E0E0', backgroundColor: darkMode ? '#262626' : '#fff' }}>
              <p className="text-xs tracking-[0.15em] uppercase mb-4 font-swiss font-medium" style={{ color: accentColor }}>Font Files</p>
              <div className="grid md:grid-cols-3 gap-6 text-sm">
                <div>
                  <p className="font-medium font-swiss mb-1">PP Frama Regular</p>
                  <p style={{ color: mutedColor }}>PPFrama-Regular.woff</p>
                  <p className="text-xs mt-1" style={{ color: mutedColor }}>Display headlines, hero text</p>
                </div>
                <div>
                  <p className="font-medium font-swiss mb-1">DM Sans</p>
                  <p style={{ color: mutedColor }}>Google Fonts (Variable)</p>
                  <p className="text-xs mt-1" style={{ color: mutedColor }}>Body text, UI elements</p>
                </div>
                <div>
                  <p className="font-medium font-swiss mb-1">PP Lettra Mono</p>
                  <p style={{ color: mutedColor }}>lettra/ (Medium, Ultrabold)</p>
                  <p className="text-xs mt-1" style={{ color: mutedColor }}>Accent only — close spacing</p>
                </div>
              </div>
            </div>
          </section>

          {/* Logo Variations */}
          <section className="mb-24">
            <h2 className="text-xs tracking-[0.2em] uppercase mb-8 font-swiss font-semibold" style={{ color: accentColor }}>Logo Variations</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {logoVariants.map((logo, i) => (
                <motion.div
                  key={logo.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="border"
                  style={{ borderColor: darkMode ? '#333' : '#E0E0E0' }}
                >
                  {/* Light and dark preview */}
                  <div className="grid grid-cols-2">
                    <div className="p-8 flex items-center justify-center min-h-[140px]" style={{ backgroundColor: '#F7F7F7' }}>
                      <Logo variant={logo.variant} size="md" color="dark" />
                    </div>
                    <div className="p-8 flex items-center justify-center min-h-[140px]" style={{ backgroundColor: '#1E1E1E' }}>
                      <Logo variant={logo.variant} size="md" color="light" />
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="font-semibold text-lg mb-1 font-swiss">{logo.name}</h3>
                    <p className="text-sm mb-3" style={{ color: mutedColor }}>{logo.description}</p>
                    <p className="text-xs font-swiss" style={{ color: accentColor }}>Usage: {logo.usage}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </section>

          {/* Size Scale */}
          <section className="mb-24">
            <h2 className="text-xs tracking-[0.2em] uppercase mb-8 font-swiss font-semibold" style={{ color: accentColor }}>Size Scale</h2>
            <div className="p-8 border" style={{ borderColor: darkMode ? '#333' : '#E0E0E0', backgroundColor: darkMode ? '#262626' : '#fff' }}>
              <div className="flex items-end gap-12 flex-wrap">
                {(['sm', 'md', 'lg', 'xl'] as const).map((size) => (
                  <div key={size} className="text-center">
                    <Logo variant="mark" size={size} color={darkMode ? 'light' : 'dark'} />
                    <p className="text-xs uppercase tracking-wider mt-4 font-swiss" style={{ color: mutedColor }}>{size}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* SVG Code */}
          <section className="mb-24">
            <h2 className="text-xs tracking-[0.2em] uppercase mb-8 font-swiss font-semibold" style={{ color: accentColor }}>SVG Code</h2>
            <div className="p-8 border" style={{ borderColor: darkMode ? '#333' : '#E0E0E0', backgroundColor: darkMode ? '#262626' : '#fff' }}>
              <p className="text-sm mb-6" style={{ color: mutedColor }}>
                The official MV. mark SVG code. Use this for all implementations.
              </p>
              
              <div>
                <p className="text-xs tracking-[0.15em] uppercase mb-3 font-medium font-swiss">Primary Mark (Dark on Light)</p>
                <pre className="p-4 text-xs overflow-x-auto font-mono" style={{ backgroundColor: darkMode ? '#1E1E1E' : '#F7F7F7', border: `1px solid ${darkMode ? '#333' : '#E0E0E0'}` }}>
{`<svg viewBox="0 0 430 276" fill="none">
  <path fill="#1E1E1E" d="M222.37,234.94c-1.96-7.88-3.91-15.41-5.22-23.06..."/>
  <path fill="#1E1E1E" d="M351.54,90.56c-7.36,18.42-14.44,36.54-21.87,54.51..."/>
  <path fill="#1E1E1E" d="M62.02,46.06c0.48-4.32,2.97-5.62,6.61-5.62..."/>
  <path fill="#2E7D8C" d="M395.35,174.56c11.76,7.88,16.97,18.79,15.43,32.3..."/>
  <path fill="#1E1E1E" d="M123.75,196.76c7.46-18.02,14.79-35.67,22.04-53.36..."/>
  <path fill="#1E1E1E" d="M68.68,188.25c5.26,13.51,10.41,26.65,15.54,39.79..."/>
</svg>`}
                </pre>
              </div>
            </div>
          </section>

          {/* Usage Guidelines */}
          <section className="mb-24">
            <h2 className="text-xs tracking-[0.2em] uppercase mb-8 font-swiss font-semibold" style={{ color: accentColor }}>Usage Guidelines</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="p-6 border" style={{ borderColor: darkMode ? '#333' : '#E0E0E0' }}>
                <h3 className="font-semibold mb-3 font-swiss">✓ Do</h3>
                <ul className="space-y-2 text-sm" style={{ color: mutedColor }}>
                  <li>• Use on clean, uncluttered backgrounds</li>
                  <li>• Maintain minimum clear space around logo</li>
                  <li>• Use approved color combinations</li>
                  <li>• Scale proportionally</li>
                </ul>
              </div>
              <div className="p-6 border" style={{ borderColor: darkMode ? '#333' : '#E0E0E0' }}>
                <h3 className="font-semibold mb-3 font-swiss">✗ Don't</h3>
                <ul className="space-y-2 text-sm" style={{ color: mutedColor }}>
                  <li>• Stretch or distort the logo</li>
                  <li>• Add effects like shadows or gradients</li>
                  <li>• Place on busy backgrounds</li>
                  <li>• Change the blue accent color</li>
                </ul>
              </div>
              <div className="p-6 border" style={{ borderColor: darkMode ? '#333' : '#E0E0E0' }}>
                <h3 className="font-semibold mb-3 font-swiss">Minimum Sizes</h3>
                <ul className="space-y-2 text-sm" style={{ color: mutedColor }}>
                  <li>• Print: 1 inch width minimum</li>
                  <li>• Digital: 80px width minimum</li>
                  <li>• Badge: 32px minimum</li>
                  <li>• Favicon: 16px</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Brand Values */}
          <section className="mb-24">
            <h2 className="text-xs tracking-[0.2em] uppercase mb-8 font-swiss font-semibold" style={{ color: accentColor }}>Brand Values</h2>
            <div className="grid md:grid-cols-5 gap-4">
              {['Loving', 'Brave', 'Positive', 'Inspiring', 'Authentic'].map((value) => (
                <div 
                  key={value}
                  className="p-6 text-center border"
                  style={{ borderColor: darkMode ? '#333' : '#E0E0E0' }}
                >
                  <p className="font-swiss font-bold text-lg">{value}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Tagline */}
          <section className="mb-24">
            <h2 className="text-xs tracking-[0.2em] uppercase mb-8 font-swiss font-semibold" style={{ color: accentColor }}>Tagline</h2>
            <div className="p-12 text-center" style={{ backgroundColor: darkMode ? '#262626' : '#fff' }}>
              <p className="font-tagline text-3xl mb-4" style={{ color: textColor }}>Lead with clarity.</p>
              <p className="font-tagline text-3xl" style={{ color: accentColor }}>Make bold moves.</p>
            </div>
          </section>
          
          {/* Back to main site */}
          <div className="mt-24 pt-8 border-t" style={{ borderColor: darkMode ? '#333' : '#E0E0E0' }}>
            <a 
              href="/"
              className="inline-flex items-center gap-2 text-sm font-medium hover:opacity-70 transition-opacity font-swiss"
              style={{ color: accentColor }}
            >
              ← Back to main site
            </a>
          </div>
        </div>
      </main>
    </div>
  )
}
