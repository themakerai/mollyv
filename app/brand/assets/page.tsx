'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import Logo from '@/components/Logo'

export default function BrandAssetsPage() {
  const [darkMode, setDarkMode] = useState(false)
  const [copiedSignature, setCopiedSignature] = useState(false)
  const [password, setPassword] = useState('')
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [error, setError] = useState('')
  
  const bgColor = darkMode ? '#1E1E1E' : '#F7F7F7'
  const textColor = darkMode ? '#F7F7F7' : '#1E1E1E'
  const mutedColor = darkMode ? '#7A7A7A' : '#4A4A4A'
  const accentColor = '#2D8FB5'
  const cardBg = darkMode ? '#262626' : '#FFFFFF'
  const borderColor = darkMode ? '#333' : '#E0E0E0'

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
            <h1 className="text-2xl font-bold tracking-tight mt-6 font-swiss">Brand Assets</h1>
            <p className="text-sm mt-2 text-[#4A4A4A]">Enter password to download assets</p>
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
              Access Downloads
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

  // Generate downloadable SVG
  const generateSVG = (variant: 'dark' | 'light', type: 'mark' | 'full' | 'horizontal' | 'badge') => {
    const fillColor = variant === 'dark' ? '#1E1E1E' : '#F7F7F7'
    const accentBlue = '#2D8FB5'
    
    const markPaths = `
      <path fill="${fillColor}" d="M222.367706,234.938370 C220.405823,227.060471 218.457321,219.526154 217.143509,211.882767 C207.824615,157.668030 198.636719,103.430763 189.403961,49.201199 C188.322113,42.846828 190.220596,40.511639 196.655640,40.464931 C202.986359,40.418980 209.322144,40.599537 215.647141,40.404003 C219.695663,40.278851 222.059082,41.815235 223.651093,45.620007 C244.699921,95.924660 265.850403,146.186783 286.990326,196.453293 C291.245209,206.570496 295.580414,216.653885 299.843781,226.767548 C302.441193,232.929153 300.406250,236.218506 293.900635,236.229828 C271.742004,236.268341 249.583206,236.264542 227.424683,236.199875 C225.840485,236.195236 224.258087,235.568802 222.367706,234.938370z"/>
      <path fill="${fillColor}" d="M351.540466,90.564682 C344.184326,108.983765 337.104462,127.100716 329.674561,145.072952 C328.767303,147.267471 325.989807,150.068359 324.063751,150.080109 C322.075500,150.092239 319.097382,147.436050 318.218506,145.270859 C308.343750,120.943436 298.795319,96.483604 289.148163,72.063690 C286.156464,64.490822 283.181793,56.910553 280.104370,49.372437 C277.947906,44.090336 279.779602,40.540268 285.332611,40.513504 C311.148468,40.389091 336.965485,40.398487 362.781494,40.508274 C368.126007,40.531002 370.075684,43.918831 368.080292,48.961662 C362.636566,62.719082 357.168671,76.466934 351.540466,90.564682z"/>
      <path fill="${fillColor}" d="M62.020603,46.058628 C62.500854,41.734257 64.992996,40.434837 68.633881,40.439350 C88.630119,40.464138 108.626564,40.407948 128.622589,40.477852 C134.379745,40.497974 136.577225,43.512955 134.611893,48.879398 C127.981255,66.984825 121.198761,85.034698 114.458076,103.099739 C111.029327,112.288803 107.747269,121.540695 103.969162,130.584671 C103.188316,132.453857 100.490883,134.666168 98.699219,134.646774 C96.917801,134.627518 94.254539,132.343918 93.535698,130.459137 C82.878853,102.517097 72.481400,74.476120 62.020603,46.058628z"/>
      <path fill="${accentBlue}" d="M395.345032,174.561111 C407.104126,182.444931 412.317657,193.349152 410.774384,206.861465 C409.299255,219.777115 402.083893,229.121811 389.901031,233.935974 C377.546295,238.818115 365.819305,236.892471 355.797302,228.239136 C345.111816,219.012924 341.462494,206.930679 345.462006,193.454483 C349.258209,180.663498 358.251251,172.626999 371.551056,169.997421 C379.902405,168.346237 387.757721,169.947525 395.345032,174.561111z"/>
      <path fill="${fillColor}" d="M123.752533,196.758636 C131.214005,178.743408 138.537903,161.087540 145.789886,143.402176 C147.005966,140.436508 148.711456,137.222061 152.054092,138.446106 C154.221069,139.239609 156.522797,142.461426 156.910034,144.890732 C161.278336,172.295151 165.296555,199.755447 169.386627,227.204056 C170.480118,234.542465 169.025436,236.241348 161.733749,236.246887 C147.077652,236.258011 132.421524,236.268829 117.765472,236.241104 C110.973801,236.228271 108.973885,233.375137 111.447182,227.177567 C115.453743,217.137909 119.538864,207.129639 123.752533,196.758636z"/>
      <path fill="${fillColor}" d="M68.676086,188.245529 C73.940529,201.753937 79.086349,214.892517 84.217888,228.036667 C86.044273,232.714859 84.031532,236.162430 79.103897,236.200500 C63.796017,236.318832 48.486538,236.271866 33.177887,236.223694 C28.491982,236.208954 27.209999,233.328705 27.805830,229.213928 C29.994091,214.102142 32.208584,198.994095 34.438068,183.888321 C36.158367,172.232513 37.915035,160.582077 39.657902,148.929611 C39.903881,147.285034 39.709988,145.356873 40.523106,144.066086 C41.733727,142.144272 43.535488,139.527283 45.316711,139.333893 C47.084282,139.142014 50.078938,141.151962 50.900631,142.945312 C54.215195,150.179367 56.921646,157.693680 59.807381,165.122101 C62.749866,172.696625 65.639214,180.291779 68.676086,188.245529z"/>
    `
    
    if (type === 'mark') {
      return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 430 276" fill="none">${markPaths}</svg>`
    }
    
    return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 430 276" fill="none">${markPaths}</svg>`
  }

  const downloadSVG = (variant: 'dark' | 'light', type: string) => {
    const svg = generateSVG(variant, type as 'mark' | 'full' | 'horizontal' | 'badge')
    const blob = new Blob([svg], { type: 'image/svg+xml' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = `mollyv-logo-${type}-${variant}.svg`
    a.click()
    URL.revokeObjectURL(url)
  }

  const emailSignatureHTML = `
<table cellpadding="0" cellspacing="0" border="0" style="font-family: 'DM Sans', Arial, sans-serif; line-height: 1.5;">
  <tr>
    <td style="padding-right: 20px; vertical-align: top; border-right: 3px solid #2D8FB5;">
      <table cellpadding="0" cellspacing="0" border="0">
        <tr>
          <td style="padding-bottom: 8px;">
            <span style="font-size: 20px; font-weight: 700; color: #1E1E1E; letter-spacing: -0.02em;">Molly Varangkounh</span>
          </td>
        </tr>
        <tr>
          <td style="padding-bottom: 12px;">
            <span style="font-size: 12px; color: #2D8FB5; text-transform: uppercase; letter-spacing: 0.15em;">Executive Coach & Consultant</span>
          </td>
        </tr>
        <tr>
          <td style="padding-bottom: 4px;">
            <span style="font-size: 13px; color: #4A4A4A;">molly@mollyv.com</span>
          </td>
        </tr>
        <tr>
          <td style="padding-bottom: 4px;">
            <span style="font-size: 13px; color: #4A4A4A;">(555) 123-4567</span>
          </td>
        </tr>
        <tr>
          <td>
            <span style="font-size: 13px; color: #4A4A4A;">mollyv.com</span>
          </td>
        </tr>
      </table>
    </td>
    <td style="padding-left: 20px; vertical-align: top;">
      <table cellpadding="0" cellspacing="0" border="0">
        <tr>
          <td style="padding-bottom: 12px;">
            <img src="https://mollyv.com/logo-mark.png" alt="MV." width="60" height="40" style="display: block;" />
          </td>
        </tr>
        <tr>
          <td>
            <span style="font-family: 'TT Gentlemens', cursive; font-size: 20px; color: #2D8FB5;">Make Bold Moves.</span>
          </td>
        </tr>
      </table>
    </td>
  </tr>
</table>
  `.trim()

  const copySignature = () => {
    navigator.clipboard.writeText(emailSignatureHTML)
    setCopiedSignature(true)
    setTimeout(() => setCopiedSignature(false), 2000)
  }

  const logoDownloads = [
    { name: 'Primary Mark', type: 'mark', description: 'Main MV. logo mark' },
    { name: 'Full Logo', type: 'full', description: 'Mark + wordmark + tagline' },
    { name: 'Horizontal', type: 'horizontal', description: 'Mark with MOLLY V. text' },
    { name: 'Badge', type: 'badge', description: 'Square badge format' },
  ]

  return (
    <div className="min-h-screen transition-colors duration-500" style={{ backgroundColor: bgColor, color: textColor }}>
      {/* Header */}
      <header className="py-8 px-6 lg:px-12 border-b" style={{ borderColor }}>
        <div className="max-w-[1400px] mx-auto flex justify-between items-center">
          <div className="flex items-center gap-6">
            <Logo variant="mark" size="sm" color={darkMode ? 'light' : 'dark'} />
            <div>
              <h1 className="text-2xl font-bold tracking-tight font-swiss">Brand Assets</h1>
              <p className="text-sm mt-1" style={{ color: mutedColor }}>Downloads & Templates</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <a href="/brand" className="text-sm hover:opacity-70 transition-opacity" style={{ color: accentColor }}>
              ← Brand Guidelines
            </a>
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="px-4 py-2 text-sm font-medium border transition-colors"
              style={{ borderColor, backgroundColor: cardBg }}
            >
              {darkMode ? '☀️ Light' : '🌙 Dark'}
            </button>
          </div>
        </div>
      </header>

      <main className="py-16 px-6 lg:px-12">
        <div className="max-w-[1400px] mx-auto space-y-24">

          {/* Logo Downloads */}
          <section>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-xs tracking-[0.2em] uppercase mb-8 font-swiss font-semibold" style={{ color: accentColor }}>
                Logo Downloads
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                {logoDownloads.map((logo, i) => (
                  <motion.div
                    key={logo.name}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                    className="border"
                    style={{ borderColor, backgroundColor: cardBg }}
                  >
                    <div className="grid grid-cols-2">
                      <div className="p-8 flex items-center justify-center min-h-[120px]" style={{ backgroundColor: '#F7F7F7' }}>
                        <Logo variant={logo.type === 'mark' ? 'mark' : logo.type === 'horizontal' ? 'mark-horizontal' : logo.type === 'badge' ? 'mark-badge' : 'full'} size="md" color="dark" />
                      </div>
                      <div className="p-8 flex items-center justify-center min-h-[120px]" style={{ backgroundColor: '#1E1E1E' }}>
                        <Logo variant={logo.type === 'mark' ? 'mark' : logo.type === 'horizontal' ? 'mark-horizontal' : logo.type === 'badge' ? 'mark-badge' : 'full'} size="md" color="light" />
                      </div>
                    </div>
                    <div className="p-6">
                      <h3 className="font-semibold text-lg mb-1 font-swiss">{logo.name}</h3>
                      <p className="text-sm mb-4" style={{ color: mutedColor }}>{logo.description}</p>
                      <div className="flex gap-3">
                        <button
                          onClick={() => downloadSVG('dark', logo.type)}
                          className="px-4 py-2 text-xs font-semibold uppercase tracking-wider border transition-all hover:bg-[#1E1E1E] hover:text-white"
                          style={{ borderColor: '#1E1E1E', color: darkMode ? '#F7F7F7' : '#1E1E1E' }}
                        >
                          SVG Dark
                        </button>
                        <button
                          onClick={() => downloadSVG('light', logo.type)}
                          className="px-4 py-2 text-xs font-semibold uppercase tracking-wider border transition-all hover:bg-[#1E1E1E] hover:text-white"
                          style={{ borderColor: '#1E1E1E', color: darkMode ? '#F7F7F7' : '#1E1E1E' }}
                        >
                          SVG Light
                        </button>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </section>

          {/* Email Signature */}
          <section>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-xs tracking-[0.2em] uppercase mb-8 font-swiss font-semibold" style={{ color: accentColor }}>
                Email Signature
              </h2>
              <div className="grid lg:grid-cols-2 gap-8">
                {/* Preview */}
                <div className="p-8 border" style={{ borderColor, backgroundColor: '#FFFFFF' }}>
                  <p className="text-xs tracking-[0.15em] uppercase mb-6 font-medium" style={{ color: mutedColor }}>Preview</p>
                  <div className="flex gap-5">
                    <div className="pr-5 border-r-[3px]" style={{ borderColor: accentColor }}>
                      <p className="text-xl font-bold tracking-tight text-[#1E1E1E] mb-1">Molly Varangkounh</p>
                      <p className="text-xs uppercase tracking-[0.15em] mb-3" style={{ color: accentColor }}>Executive Coach & Consultant</p>
                      <div className="space-y-1 text-[13px] text-[#4A4A4A]">
                        <p>molly@mollyv.com</p>
                        <p>(555) 123-4567</p>
                        <p>mollyv.com</p>
                      </div>
                    </div>
                    <div className="pl-2">
                      <div className="mb-3">
                        <Logo variant="mark" size="sm" color="dark" />
                      </div>
                      <p className="font-script text-lg" style={{ color: accentColor }}>Make bold moves.</p>
                    </div>
                  </div>
                </div>
                
                {/* Code */}
                <div className="p-6 border" style={{ borderColor, backgroundColor: cardBg }}>
                  <div className="flex justify-between items-center mb-4">
                    <p className="text-xs tracking-[0.15em] uppercase font-medium" style={{ color: mutedColor }}>HTML Code</p>
                    <button
                      onClick={copySignature}
                      className="px-4 py-2 text-xs font-semibold uppercase tracking-wider transition-all"
                      style={{ backgroundColor: accentColor, color: '#fff' }}
                    >
                      {copiedSignature ? '✓ Copied!' : 'Copy HTML'}
                    </button>
                  </div>
                  <pre 
                    className="text-[10px] overflow-x-auto p-4 font-mono leading-relaxed max-h-[200px] overflow-y-auto"
                    style={{ backgroundColor: darkMode ? '#1E1E1E' : '#F7F7F7' }}
                  >
                    {emailSignatureHTML}
                  </pre>
                </div>
              </div>
            </motion.div>
          </section>

          {/* Business Card */}
          <section>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-xs tracking-[0.2em] uppercase mb-8 font-swiss font-semibold" style={{ color: accentColor }}>
                Business Card
              </h2>
              <p className="text-sm mb-8" style={{ color: mutedColor }}>
                Standard US business card (3.5" × 2" / 88.9mm × 50.8mm) • Print at 300 DPI with 0.125" bleed
              </p>
              <div className="grid lg:grid-cols-2 gap-8">
                {/* Front */}
                <div>
                  <p className="text-xs tracking-[0.15em] uppercase mb-4 font-medium" style={{ color: mutedColor }}>Front</p>
                  <div 
                    className="relative w-full aspect-[3.5/2] shadow-2xl"
                    style={{ backgroundColor: '#F7F7F7' }}
                  >
                    {/* Blue accent strip */}
                    <div className="absolute left-0 top-0 bottom-0 w-3" style={{ backgroundColor: accentColor }} />
                    
                    {/* Content */}
                    <div className="absolute inset-0 flex flex-col justify-between p-8 pl-10">
                      <div className="flex justify-between items-start">
                        <Logo variant="mark" size="sm" color="dark" />
                      </div>
                      <div>
                        <h3 className="text-xl md:text-2xl font-bold tracking-tight text-[#1E1E1E] mb-1">
                          Molly Varangkounh
                        </h3>
                        <p className="text-xs uppercase tracking-[0.15em] mb-4" style={{ color: accentColor }}>
                          Executive Coach & Consultant
                        </p>
                        <div className="flex gap-8 text-xs text-[#4A4A4A]">
                          <span>molly@mollyv.com</span>
                          <span>(555) 123-4567</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Back */}
                <div>
                  <p className="text-xs tracking-[0.15em] uppercase mb-4 font-medium" style={{ color: mutedColor }}>Back</p>
                  <div 
                    className="relative w-full aspect-[3.5/2] shadow-2xl flex items-center justify-center"
                    style={{ backgroundColor: '#1E1E1E' }}
                  >
                    {/* Blue accent strip */}
                    <div className="absolute right-0 top-0 bottom-0 w-3" style={{ backgroundColor: accentColor }} />
                    
                    {/* Content */}
                    <div className="text-center">
                      <Logo variant="full" size="md" color="light" />
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </section>

          {/* Letterhead */}
          <section>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-xs tracking-[0.2em] uppercase mb-8 font-swiss font-semibold" style={{ color: accentColor }}>
                Letterhead
              </h2>
              <p className="text-sm mb-8" style={{ color: mutedColor }}>
                US Letter (8.5" × 11") • 1" margins • Print on premium uncoated stock
              </p>
              <div 
                className="relative w-full max-w-[700px] mx-auto aspect-[8.5/11] shadow-2xl"
                style={{ backgroundColor: '#FFFFFF' }}
              >
                {/* Blue accent strip */}
                <div className="absolute left-0 top-0 bottom-0 w-2" style={{ backgroundColor: accentColor }} />
                
                {/* Header */}
                <div className="absolute top-8 left-10 right-10 flex justify-between items-start">
                  <Logo variant="mark-horizontal" size="sm" color="dark" />
                  <div className="text-right text-[10px] text-[#7A7A7A] space-y-0.5">
                    <p>molly@mollyv.com</p>
                    <p>(555) 123-4567</p>
                    <p>mollyv.com</p>
                  </div>
                </div>

                {/* Content area */}
                <div className="absolute top-28 left-10 right-10 bottom-20">
                  <p className="text-[10px] text-[#7A7A7A] mb-6">January 16, 2026</p>
                  <p className="text-[10px] text-[#1E1E1E] mb-6">
                    Dear Client,
                  </p>
                  <div className="space-y-4 text-[10px] text-[#4A4A4A] leading-relaxed">
                    <p>
                      Thank you for your interest in working together. I'm excited about the opportunity to support you on your leadership journey.
                    </p>
                    <p>
                      Our conversation highlighted several areas where executive coaching could help you achieve breakthrough results. I believe in leading with clarity and making bold moves—and I see that same drive in you.
                    </p>
                    <p>
                      Enclosed you'll find the proposal we discussed. I'm confident this partnership will help you unlock your full potential as a leader.
                    </p>
                  </div>
                  <div className="mt-8">
                    <p className="text-[10px] text-[#1E1E1E] mb-1">Warmly,</p>
                    <p className="font-script text-xl" style={{ color: accentColor }}>Molly Varangkounh</p>
                    <p className="text-[10px] text-[#7A7A7A] mt-1">Executive Coach & Consultant</p>
                  </div>
                </div>

                {/* Footer */}
                <div className="absolute bottom-6 left-10 right-10 flex justify-between items-center border-t pt-4" style={{ borderColor: '#E0E0E0' }}>
                  <p className="font-script text-sm" style={{ color: accentColor }}>Make bold moves.</p>
                  <div className="flex items-center gap-4">
                    <div className="w-8 h-1" style={{ backgroundColor: accentColor }} />
                    <p className="text-[9px] text-[#7A7A7A] tracking-wide">MOLLY V.</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </section>

          {/* Social Announcement */}
          <section>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-xs tracking-[0.2em] uppercase mb-8 font-swiss font-semibold" style={{ color: accentColor }}>
                Social Announcement Templates
              </h2>
              <p className="text-sm mb-8" style={{ color: mutedColor }}>
                Launch announcement graphics for Instagram, LinkedIn, and Twitter/X
              </p>
              <div className="grid lg:grid-cols-3 gap-8">
                {/* Instagram Square */}
                <div>
                  <p className="text-xs tracking-[0.15em] uppercase mb-4 font-medium" style={{ color: mutedColor }}>
                    Instagram (1:1)
                  </p>
                  <div 
                    className="relative w-full aspect-square shadow-2xl overflow-hidden"
                    style={{ backgroundColor: '#1E1E1E' }}
                  >
                    {/* Background pattern */}
                    <div className="absolute inset-0 opacity-10">
                      <div className="absolute top-0 left-0 w-full h-full" 
                        style={{ 
                          backgroundImage: `repeating-linear-gradient(45deg, ${accentColor} 0, ${accentColor} 1px, transparent 0, transparent 50%)`,
                          backgroundSize: '20px 20px'
                        }} 
                      />
                    </div>
                    
                    {/* Blue accent circle */}
                    <div 
                      className="absolute -right-20 -top-20 w-64 h-64 rounded-full opacity-20"
                      style={{ backgroundColor: accentColor }}
                    />
                    
                    {/* Content */}
                    <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center">
                      <div className="mb-6">
                        <Logo variant="mark" size="lg" color="light" />
                      </div>
                      <h3 className="text-2xl md:text-3xl font-bold text-white tracking-tight mb-2">
                        Introducing
                      </h3>
                      <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4" style={{ color: accentColor }}>
                        MOLLY V.
                      </h2>
                      <p className="font-script text-2xl md:text-3xl text-white/90">
                        Make bold moves.
                      </p>
                      <div className="mt-6 w-16 h-1" style={{ backgroundColor: accentColor }} />
                      <p className="text-xs text-white/60 uppercase tracking-[0.2em] mt-4">
                        Executive Coaching
                      </p>
                    </div>
                  </div>
                </div>

                {/* LinkedIn/Twitter Landscape */}
                <div className="lg:col-span-2">
                  <p className="text-xs tracking-[0.15em] uppercase mb-4 font-medium" style={{ color: mutedColor }}>
                    LinkedIn / Twitter (1.91:1)
                  </p>
                  <div 
                    className="relative w-full aspect-[1.91/1] shadow-2xl overflow-hidden"
                    style={{ backgroundColor: '#F7F7F7' }}
                  >
                    {/* Blue accent strip */}
                    <div className="absolute left-0 top-0 bottom-0 w-4" style={{ backgroundColor: accentColor }} />
                    
                    {/* Dark panel */}
                    <div 
                      className="absolute right-0 top-0 bottom-0 w-2/5"
                      style={{ backgroundColor: '#1E1E1E' }}
                    >
                      <div className="absolute inset-0 flex items-center justify-center">
                        <Logo variant="mark" size="lg" color="light" />
                      </div>
                    </div>
                    
                    {/* Content */}
                    <div className="absolute left-8 top-0 bottom-0 w-1/2 flex flex-col justify-center">
                      <p className="text-xs uppercase tracking-[0.2em] mb-2" style={{ color: accentColor }}>
                        Announcement
                      </p>
                      <h2 className="text-2xl md:text-4xl font-bold text-[#1E1E1E] tracking-tight mb-2">
                        MOLLY V.
                      </h2>
                      <h3 className="text-lg md:text-xl font-medium text-[#4A4A4A] mb-4">
                        Executive Coaching & Consulting
                      </h3>
                      <p className="font-script text-xl md:text-2xl" style={{ color: accentColor }}>
                        Make bold moves.
                      </p>
                      <div className="flex gap-3 mt-6">
                        <div className="w-3 h-3" style={{ backgroundColor: accentColor }} />
                        <div className="w-3 h-3" style={{ backgroundColor: '#6BC1E0' }} />
                        <div className="w-3 h-3" style={{ backgroundColor: '#1E1E1E' }} />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Instagram Story */}
                <div>
                  <p className="text-xs tracking-[0.15em] uppercase mb-4 font-medium" style={{ color: mutedColor }}>
                    Instagram Story (9:16)
                  </p>
                  <div 
                    className="relative w-full max-w-[250px] aspect-[9/16] shadow-2xl overflow-hidden mx-auto"
                    style={{ backgroundColor: '#1E1E1E' }}
                  >
                    {/* Gradient overlay */}
                    <div 
                      className="absolute inset-0"
                      style={{ 
                        background: `linear-gradient(180deg, transparent 0%, ${accentColor}20 50%, transparent 100%)`
                      }}
                    />
                    
                    {/* Content */}
                    <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center">
                      <p className="text-[10px] uppercase tracking-[0.3em] text-white/60 mb-8">
                        Now Live
                      </p>
                      <div className="mb-6">
                        <Logo variant="mark" size="md" color="light" />
                      </div>
                      <h2 className="text-xl font-bold text-white tracking-tight mb-2">
                        MOLLY V.
                      </h2>
                      <p className="font-script text-lg" style={{ color: accentColor }}>
                        Make bold moves.
                      </p>
                      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
                        <div className="w-16 h-1" style={{ backgroundColor: accentColor }} />
                        <p className="text-[9px] text-white/50 mt-3 tracking-wider">
                          mollyv.com
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* LinkedIn Cover */}
                <div className="lg:col-span-2">
                  <p className="text-xs tracking-[0.15em] uppercase mb-4 font-medium" style={{ color: mutedColor }}>
                    LinkedIn Cover (4:1)
                  </p>
                  <div 
                    className="relative w-full aspect-[4/1] shadow-2xl overflow-hidden"
                    style={{ backgroundColor: '#1E1E1E' }}
                  >
                    {/* Blue gradient overlay */}
                    <div 
                      className="absolute inset-0"
                      style={{ 
                        background: `linear-gradient(90deg, ${accentColor}30 0%, transparent 50%, ${accentColor}10 100%)`
                      }}
                    />
                    
                    {/* Pattern */}
                    <div 
                      className="absolute right-0 top-0 bottom-0 w-1/3 opacity-20"
                      style={{ 
                        backgroundImage: `repeating-linear-gradient(135deg, ${accentColor} 0, ${accentColor} 1px, transparent 0, transparent 40px)`,
                      }}
                    />
                    
                    {/* Content */}
                    <div className="absolute inset-0 flex items-center justify-between px-12">
                      <div className="flex items-center gap-6">
                        <Logo variant="mark" size="md" color="light" />
                        <div>
                          <h2 className="text-2xl font-bold text-white tracking-tight">MOLLY V.</h2>
                          <p className="text-sm text-white/60">Executive Coaching & Consulting</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="font-script text-2xl" style={{ color: accentColor }}>
                          Make bold moves.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </section>

          {/* Back to main site */}
          <div className="mt-24 pt-8 border-t" style={{ borderColor }}>
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

