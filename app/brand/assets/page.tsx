'use client'

import { motion } from 'framer-motion'
import { useState, useRef } from 'react'
import html2canvas from 'html2canvas'
import Logo from '@/components/Logo'

export default function BrandAssetsPage() {
  const [darkMode, setDarkMode] = useState(false)
  const [copiedSignature, setCopiedSignature] = useState<string | null>(null)
  const [password, setPassword] = useState('')
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [error, setError] = useState('')
  const [downloading, setDownloading] = useState<string | null>(null)
  const [activeSection, setActiveSection] = useState<string | null>(null)
  
  // Refs for downloadable elements
  const logoRefs = useRef<{ [key: string]: HTMLDivElement | null }>({})
  const businessCardFrontRef = useRef<HTMLDivElement>(null)
  const businessCardBackRef = useRef<HTMLDivElement>(null)
  const businessCardAltFrontRef = useRef<HTMLDivElement>(null)
  const businessCardAltBackRef = useRef<HTMLDivElement>(null)
  const letterheadRef = useRef<HTMLDivElement>(null)
  const letterheadAltRef = useRef<HTMLDivElement>(null)
  const instagramSquareRef = useRef<HTMLDivElement>(null)
  const linkedinTwitterRef = useRef<HTMLDivElement>(null)
  const instagramStoryRef = useRef<HTMLDivElement>(null)
  const linkedinCoverRef = useRef<HTMLDivElement>(null)
  const decisionRoomPostRef = useRef<HTMLDivElement>(null)
  const guidePromoRef = useRef<HTMLDivElement>(null)
  const quoteCardRef = useRef<HTMLDivElement>(null)
  const announcementPostRef = useRef<HTMLDivElement>(null)
  
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

  const downloadPNG = async (element: HTMLElement | null, filename: string, scale: number = 2) => {
    if (!element) return
    setDownloading(filename)
    try {
      const canvas = await html2canvas(element, {
        scale: scale,
        useCORS: true,
        backgroundColor: null,
        logging: false,
      })
      const link = document.createElement('a')
      link.download = `${filename}.png`
      link.href = canvas.toDataURL('image/png')
      link.click()
    } catch (err) {
      console.error('Error generating PNG:', err)
    } finally {
      setDownloading(null)
    }
  }

  const copyToClipboard = (text: string, id: string) => {
    navigator.clipboard.writeText(text)
    setCopiedSignature(id)
    setTimeout(() => setCopiedSignature(null), 2000)
  }

  // Email Signatures HTML
  const emailSignatureFullHTML = `<table cellpadding="0" cellspacing="0" border="0" style="font-family: 'DM Sans', Arial, sans-serif; line-height: 1.5;">
  <tr>
    <td style="padding-right: 20px; vertical-align: top; border-right: 3px solid #2D8FB5;">
      <table cellpadding="0" cellspacing="0" border="0">
        <tr><td style="padding-bottom: 8px;"><span style="font-size: 20px; font-weight: 700; color: #1E1E1E; letter-spacing: -0.02em;">Molly Varangkounh</span></td></tr>
        <tr><td style="padding-bottom: 12px;"><span style="font-size: 12px; color: #2D8FB5; text-transform: uppercase; letter-spacing: 0.15em;">Executive Advisory</span></td></tr>
        <tr><td style="padding-bottom: 4px;"><span style="font-size: 13px; color: #4A4A4A;">molly@mollyv.com</span></td></tr>
        <tr><td style="padding-bottom: 4px;"><span style="font-size: 13px; color: #4A4A4A;">mollyv.com</span></td></tr>
        <tr><td style="padding-top: 8px;"><a href="https://mollyv.com/decision-room" style="font-size: 11px; color: #2D8FB5; text-decoration: none; text-transform: uppercase; letter-spacing: 0.1em;">→ The Decision Room</a></td></tr>
      </table>
    </td>
    <td style="padding-left: 20px; vertical-align: top;">
      <table cellpadding="0" cellspacing="0" border="0">
        <tr><td style="padding-bottom: 12px;"><img src="https://mollyv.com/logo-mark.png" alt="MV." width="60" height="40" style="display: block;" /></td></tr>
        <tr><td><span style="font-size: 14px; font-weight: 500; color: #1E1E1E;">Lead with clarity.</span><br/><span style="font-size: 14px; font-weight: 500; color: #2D8FB5;">Make bold moves.</span></td></tr>
      </table>
    </td>
  </tr>
</table>`

  const emailSignatureMinimalHTML = `<table cellpadding="0" cellspacing="0" border="0" style="font-family: Arial, sans-serif;">
  <tr>
    <td style="vertical-align: top;">
      <p style="margin: 0 0 4px 0; font-size: 16px; font-weight: 700; color: #1E1E1E;">Molly Varangkounh</p>
      <p style="margin: 0 0 8px 0; font-size: 12px; color: #2D8FB5; text-transform: uppercase; letter-spacing: 0.1em;">Executive Advisory</p>
      <p style="margin: 0; font-size: 13px; color: #4A4A4A;">molly@mollyv.com · mollyv.com</p>
    </td>
  </tr>
</table>`

  const logoDownloads = [
    { name: 'Primary Mark', type: 'mark', description: 'Main MV. logo mark' },
    { name: 'Full Logo', type: 'full', description: 'Mark + wordmark + tagline' },
    { name: 'Horizontal', type: 'horizontal', description: 'Mark with MOLLY V. text' },
    { name: 'Badge', type: 'badge', description: 'Square badge format' },
  ]

  const sections = [
    { id: 'quick-links', label: 'Quick Links', icon: '🔗' },
    { id: 'brand-overview', label: 'Brand Overview', icon: '📖' },
    { id: 'logos', label: 'Logos', icon: '◇' },
    { id: 'print', label: 'Print Assets', icon: '🖨' },
    { id: 'email', label: 'Email', icon: '✉' },
    { id: 'social', label: 'Social Media', icon: '📱' },
    { id: 'lead-gen', label: 'Lead Generation', icon: '📊' },
  ]

  return (
    <div className="min-h-screen transition-colors duration-500" style={{ backgroundColor: bgColor, color: textColor }}>
      {/* Header */}
      <header className="py-6 px-6 lg:px-12 border-b sticky top-0 z-50" style={{ borderColor, backgroundColor: bgColor }}>
        <div className="max-w-[1400px] mx-auto flex justify-between items-center">
          <div className="flex items-center gap-6">
            <Logo variant="mark" size="sm" color={darkMode ? 'light' : 'dark'} />
            <div>
              <h1 className="text-xl font-bold tracking-tight font-swiss">Brand Assets</h1>
              <p className="text-xs mt-0.5" style={{ color: mutedColor }}>Downloads & Templates</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <a href="/brand" className="text-sm hover:opacity-70 transition-opacity" style={{ color: accentColor }}>
              ← Guidelines
            </a>
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

      {/* Navigation */}
      <nav className="py-4 px-6 lg:px-12 border-b overflow-x-auto" style={{ borderColor, backgroundColor: cardBg }}>
        <div className="max-w-[1400px] mx-auto flex gap-2">
          {sections.map((section) => (
            <a
              key={section.id}
              href={`#${section.id}`}
              className="px-4 py-2 text-xs font-medium whitespace-nowrap transition-all hover:opacity-80"
              style={{ 
                backgroundColor: activeSection === section.id ? accentColor : 'transparent',
                color: activeSection === section.id ? '#fff' : mutedColor,
                border: `1px solid ${borderColor}`
              }}
              onClick={() => setActiveSection(section.id)}
            >
              <span className="mr-2">{section.icon}</span>
              {section.label}
            </a>
          ))}
        </div>
      </nav>

      <main className="py-12 px-6 lg:px-12">
        <div className="max-w-[1400px] mx-auto space-y-20">

          {/* ==================== QUICK LINKS ==================== */}
          <section id="quick-links" className="mb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="flex items-center gap-3 mb-6">
                <span className="text-2xl">🔗</span>
                <h2 className="text-lg font-bold tracking-tight font-swiss">Quick Links</h2>
              </div>
              <p className="text-sm mb-6" style={{ color: mutedColor }}>
                Navigate to all brand resources and website pages
              </p>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                {/* Brand Resources */}
                <div className="p-5 border" style={{ borderColor, backgroundColor: cardBg }}>
                  <h3 className="text-xs font-semibold uppercase tracking-wider mb-4" style={{ color: accentColor }}>Brand Resources</h3>
                  <ul className="space-y-2 text-sm">
                    <li><a href="/brand" className="hover:opacity-70 transition-opacity">→ Brand Guidelines</a></li>
                    <li><a href="/brand/options" className="hover:opacity-70 transition-opacity">→ Typography Options</a></li>
                    <li><a href="/Molly_V_Maker_Manual_Update.pdf" download className="hover:opacity-70 transition-opacity">→ Maker Manual (PDF)</a></li>
                    <li><a href="/maker-manual.html" target="_blank" className="hover:opacity-70 transition-opacity">→ Digital Maker Manual</a></li>
                  </ul>
                </div>

                {/* Main Website */}
                <div className="p-5 border" style={{ borderColor, backgroundColor: cardBg }}>
                  <h3 className="text-xs font-semibold uppercase tracking-wider mb-4" style={{ color: accentColor }}>Main Website</h3>
                  <ul className="space-y-2 text-sm">
                    <li><a href="/" className="hover:opacity-70 transition-opacity">→ Home</a></li>
                    <li><a href="/about" className="hover:opacity-70 transition-opacity">→ About Molly</a></li>
                    <li><a href="/services" className="hover:opacity-70 transition-opacity">→ Services</a></li>
                    <li><a href="/contact" className="hover:opacity-70 transition-opacity">→ Contact</a></li>
                  </ul>
                </div>

                {/* Lead Gen & Sales */}
                <div className="p-5 border" style={{ borderColor, backgroundColor: cardBg }}>
                  <h3 className="text-xs font-semibold uppercase tracking-wider mb-4" style={{ color: accentColor }}>Lead Gen & Sales</h3>
                  <ul className="space-y-2 text-sm">
                    <li><a href="/decision-room" className="hover:opacity-70 transition-opacity">→ The Decision Room</a></li>
                    <li><a href="/guide" className="hover:opacity-70 transition-opacity">→ Guide Download Page</a></li>
                    <li><a href="/decision-clarity-guide.html" target="_blank" className="hover:opacity-70 transition-opacity">→ Clarity Guide (PDF)</a></li>
                  </ul>
                </div>

                {/* Media Assets */}
                <div className="p-5 border" style={{ borderColor, backgroundColor: cardBg }}>
                  <h3 className="text-xs font-semibold uppercase tracking-wider mb-4" style={{ color: accentColor }}>Media Assets</h3>
                  <ul className="space-y-2 text-sm">
                    <li><a href="/molly-v.png" download className="hover:opacity-70 transition-opacity">→ Headshot (molly-v.png)</a></li>
                    <li><a href="/leona.png" download className="hover:opacity-70 transition-opacity">→ Leona Persona Image</a></li>
                    <li><a href="#logos" className="hover:opacity-70 transition-opacity">→ Logo Downloads</a></li>
                    <li><a href="#social" className="hover:opacity-70 transition-opacity">→ Social Templates</a></li>
                  </ul>
                </div>
              </div>
            </motion.div>
          </section>

          {/* ==================== SECTION 1: BRAND OVERVIEW ==================== */}
          <section id="brand-overview">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="flex items-center gap-3 mb-6">
                <span className="text-2xl">📖</span>
                <h2 className="text-lg font-bold tracking-tight font-swiss">Brand Overview</h2>
              </div>
              <p className="text-sm mb-8" style={{ color: mutedColor }}>
                Complete brand presentations and documentation
              </p>
              
              {/* Maker Manual */}
              <div className="p-8 border mb-6" style={{ borderColor, backgroundColor: cardBg }}>
                <div className="flex flex-col lg:flex-row items-start gap-8">
                  <div className="w-full lg:w-48 h-60 flex-shrink-0 flex items-center justify-center relative overflow-hidden" style={{ backgroundColor: '#1E1E1E' }}>
                    <div className="absolute left-0 top-0 bottom-0 w-1.5" style={{ backgroundColor: accentColor }} />
                    <div className="text-center z-10 p-6">
                      <div className="text-[10px] text-white/50 uppercase tracking-widest mb-3">Complete Brand</div>
                      <div className="text-3xl font-bold text-white mb-1">Maker</div>
                      <div className="text-3xl font-bold" style={{ color: accentColor }}>Manual</div>
                      <div className="mt-4 w-12 h-0.5 mx-auto" style={{ backgroundColor: accentColor }} />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-2xl mb-3 font-swiss">The Maker Manual</h3>
                    <p className="text-sm mb-6 leading-relaxed" style={{ color: mutedColor }}>
                      The complete brand presentation including vision, mission, frameworks (B.U.I.L.D & BOLD), 
                      brand guidelines, color palette, typography, logo usage, and marketing strategy. 
                      Perfect for investor presentations, partner meetings, or internal alignment.
                    </p>
                    <div className="flex flex-wrap gap-3 mb-6">
                      <a
                        href="/Molly_V_Maker_Manual_Update.pdf"
                        download="Molly_V_Maker_Manual.pdf"
                        className="px-6 py-3 text-sm font-semibold uppercase tracking-wider transition-all hover:opacity-80"
                        style={{ backgroundColor: accentColor, color: '#fff' }}
                      >
                        ↓ Download PDF
                      </a>
                      <a
                        href="/maker-manual.html"
                        target="_blank"
                        className="px-6 py-3 text-sm font-semibold uppercase tracking-wider border transition-all hover:opacity-80"
                        style={{ borderColor: textColor, color: textColor }}
                      >
                        View Digital Version
                      </a>
                    </div>
                    <div className="flex flex-wrap gap-3">
                      {['Brand Story & Vision', 'B.U.I.L.D Framework', 'BOLD Framework', 'Typography & Colors', 'Marketing Strategy'].map((tag) => (
                        <span key={tag} className="px-3 py-1 text-xs border" style={{ borderColor, color: mutedColor }}>{tag}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Brand Guidelines & Typography */}
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                {/* Brand Guidelines */}
                <a href="/brand" className="p-6 border transition-all hover:shadow-lg group" style={{ borderColor, backgroundColor: cardBg }}>
                  <div className="flex items-start gap-4">
                    <div className="w-16 h-16 flex-shrink-0 flex items-center justify-center" style={{ backgroundColor: '#1E1E1E' }}>
                      <Logo variant="mark" size="sm" color="light" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-lg mb-2 font-swiss group-hover:opacity-80 transition-opacity">Brand Guidelines</h3>
                      <p className="text-xs mb-3" style={{ color: mutedColor }}>Logo usage, color palette, typography rules, and brand values</p>
                      <span className="text-xs font-semibold uppercase tracking-wider" style={{ color: accentColor }}>View Guidelines →</span>
                    </div>
                  </div>
                </a>

                {/* Typography Options */}
                <a href="/brand/options" className="p-6 border transition-all hover:shadow-lg group" style={{ borderColor, backgroundColor: cardBg }}>
                  <div className="flex items-start gap-4">
                    <div className="w-16 h-16 flex-shrink-0 flex items-center justify-center" style={{ backgroundColor: accentColor }}>
                      <span className="text-white font-bold text-lg font-swiss">Aa</span>
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-lg mb-2 font-swiss group-hover:opacity-80 transition-opacity">Typography Options</h3>
                      <p className="text-xs mb-3" style={{ color: mutedColor }}>Compare font pairings: Lettra Mono, Gentleman's, Cormorant</p>
                      <span className="text-xs font-semibold uppercase tracking-wider" style={{ color: accentColor }}>View Options →</span>
                    </div>
                  </div>
                </a>
              </div>

              {/* Headshots & Images */}
              <div className="p-6 border" style={{ borderColor, backgroundColor: cardBg }}>
                <h3 className="font-bold text-lg mb-4 font-swiss">Headshots & Images</h3>
                <p className="text-sm mb-6" style={{ color: mutedColor }}>High-resolution images for press, marketing, and social media use</p>
                <div className="grid md:grid-cols-3 gap-6">
                  {/* Molly Headshot */}
                  <div className="text-center">
                    <div className="aspect-square relative overflow-hidden mb-3" style={{ backgroundColor: '#F7F7F7' }}>
                      <img src="/molly-v.png" alt="Molly Varangkounh" className="w-full h-full object-cover" />
                    </div>
                    <p className="text-xs font-medium mb-2">Molly V. Headshot</p>
                    <a
                      href="/molly-v.png"
                      download="molly-varangkounh-headshot.png"
                      className="inline-block px-4 py-2 text-[10px] font-semibold uppercase tracking-wider transition-all hover:opacity-80"
                      style={{ backgroundColor: accentColor, color: '#fff' }}
                    >
                      ↓ Download PNG
                    </a>
                  </div>
                  {/* Molly Laughing (Supabase) */}
                  <div className="text-center">
                    <div className="aspect-square relative overflow-hidden mb-3" style={{ backgroundColor: '#F7F7F7' }}>
                      <img src="https://cgcdiiksjmubatinthdr.supabase.co/storage/v1/object/public/site-images/molly-laughing.png" alt="Molly Varangkounh Laughing" className="w-full h-full object-cover" />
                    </div>
                    <p className="text-xs font-medium mb-2">Molly V. Candid</p>
                    <a
                      href="https://cgcdiiksjmubatinthdr.supabase.co/storage/v1/object/public/site-images/molly-laughing.png"
                      download="molly-varangkounh-candid.png"
                      className="inline-block px-4 py-2 text-[10px] font-semibold uppercase tracking-wider transition-all hover:opacity-80"
                      style={{ backgroundColor: accentColor, color: '#fff' }}
                    >
                      ↓ Download PNG
                    </a>
                  </div>
                  {/* Leona Persona */}
                  <div className="text-center">
                    <div className="aspect-square relative overflow-hidden mb-3" style={{ backgroundColor: '#F7F7F7' }}>
                      <img src="/leona.png" alt="Leona - Target Persona" className="w-full h-full object-cover" />
                    </div>
                    <p className="text-xs font-medium mb-2">Leona (Target Persona)</p>
                    <a
                      href="/leona.png"
                      download="leona-target-persona.png"
                      className="inline-block px-4 py-2 text-[10px] font-semibold uppercase tracking-wider transition-all hover:opacity-80"
                      style={{ backgroundColor: accentColor, color: '#fff' }}
                    >
                      ↓ Download PNG
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </section>

          {/* ==================== SECTION 2: LOGOS ==================== */}
          <section id="logos">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="flex items-center gap-3 mb-6">
                <span className="text-2xl">◇</span>
                <h2 className="text-lg font-bold tracking-tight font-swiss">Logos</h2>
              </div>
              <p className="text-sm mb-8" style={{ color: mutedColor }}>
                Download logos in SVG and PNG formats
              </p>
              
              <div className="grid md:grid-cols-2 gap-6">
                {logoDownloads.map((logo, i) => (
                  <motion.div
                    key={logo.name}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                    className="border"
                    style={{ borderColor, backgroundColor: cardBg }}
                  >
                    <div className="grid grid-cols-2">
                      <div 
                        ref={(el) => { logoRefs.current[`${logo.type}-dark`] = el }}
                        className="p-8 flex items-center justify-center min-h-[120px]" 
                        style={{ backgroundColor: '#F7F7F7' }}
                      >
                        <Logo variant={logo.type === 'mark' ? 'mark' : logo.type === 'horizontal' ? 'mark-horizontal' : logo.type === 'badge' ? 'mark-badge' : 'full'} size="md" color="dark" />
                      </div>
                      <div 
                        ref={(el) => { logoRefs.current[`${logo.type}-light`] = el }}
                        className="p-8 flex items-center justify-center min-h-[120px]" 
                        style={{ backgroundColor: '#1E1E1E' }}
                      >
                        <Logo variant={logo.type === 'mark' ? 'mark' : logo.type === 'horizontal' ? 'mark-horizontal' : logo.type === 'badge' ? 'mark-badge' : 'full'} size="md" color="light" />
                      </div>
                    </div>
                    <div className="p-5">
                      <h3 className="font-semibold text-base mb-1 font-swiss">{logo.name}</h3>
                      <p className="text-xs mb-4" style={{ color: mutedColor }}>{logo.description}</p>
                      <div className="flex flex-wrap gap-2">
                        <button onClick={() => downloadSVG('dark', logo.type)} className="px-3 py-1.5 text-[10px] font-semibold uppercase tracking-wider border transition-all hover:bg-[#1E1E1E] hover:text-white" style={{ borderColor: '#1E1E1E', color: darkMode ? '#F7F7F7' : '#1E1E1E' }}>SVG Dark</button>
                        <button onClick={() => downloadSVG('light', logo.type)} className="px-3 py-1.5 text-[10px] font-semibold uppercase tracking-wider border transition-all hover:bg-[#1E1E1E] hover:text-white" style={{ borderColor: '#1E1E1E', color: darkMode ? '#F7F7F7' : '#1E1E1E' }}>SVG Light</button>
                        <button onClick={() => downloadPNG(logoRefs.current[`${logo.type}-dark`], `mollyv-${logo.type}-dark`)} disabled={downloading === `mollyv-${logo.type}-dark`} className="px-3 py-1.5 text-[10px] font-semibold uppercase tracking-wider transition-all hover:opacity-80 disabled:opacity-50" style={{ backgroundColor: accentColor, color: '#fff' }}>{downloading === `mollyv-${logo.type}-dark` ? '...' : 'PNG Dark'}</button>
                        <button onClick={() => downloadPNG(logoRefs.current[`${logo.type}-light`], `mollyv-${logo.type}-light`)} disabled={downloading === `mollyv-${logo.type}-light`} className="px-3 py-1.5 text-[10px] font-semibold uppercase tracking-wider transition-all hover:opacity-80 disabled:opacity-50" style={{ backgroundColor: accentColor, color: '#fff' }}>{downloading === `mollyv-${logo.type}-light` ? '...' : 'PNG Light'}</button>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </section>

          {/* ==================== SECTION 3: PRINT ASSETS ==================== */}
          <section id="print">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="flex items-center gap-3 mb-6">
                <span className="text-2xl">🖨</span>
                <h2 className="text-lg font-bold tracking-tight font-swiss">Print Assets</h2>
              </div>
              <p className="text-sm mb-8" style={{ color: mutedColor }}>
                Business cards and letterhead templates
              </p>

              {/* Business Cards */}
              <div className="mb-12">
                <h3 className="text-sm font-semibold mb-4 uppercase tracking-wider" style={{ color: accentColor }}>Business Cards</h3>
                <p className="text-xs mb-6" style={{ color: mutedColor }}>Standard US size (3.5" × 2") · Print at 300 DPI with 0.125" bleed</p>
                
                <div className="grid lg:grid-cols-2 gap-8 mb-8">
                  {/* Classic Front */}
                  <div>
                    <div className="flex justify-between items-center mb-3">
                      <p className="text-xs font-medium" style={{ color: mutedColor }}>Classic · Front</p>
                      <button onClick={() => downloadPNG(businessCardFrontRef.current, 'business-card-front', 3)} disabled={downloading === 'business-card-front'} className="px-3 py-1 text-[10px] font-semibold uppercase tracking-wider transition-all hover:opacity-80 disabled:opacity-50" style={{ backgroundColor: accentColor, color: '#fff' }}>{downloading === 'business-card-front' ? '...' : '↓ PNG'}</button>
                    </div>
                    <div ref={businessCardFrontRef} className="relative w-full aspect-[3.5/2] shadow-xl" style={{ backgroundColor: '#F7F7F7' }}>
                      <div className="absolute left-0 top-0 bottom-0 w-3" style={{ backgroundColor: accentColor }} />
                      <div className="absolute inset-0 flex flex-col justify-between p-6 pl-8">
                        <Logo variant="mark" size="sm" color="dark" />
                        <div>
                          <h3 className="text-lg font-bold tracking-tight text-[#1E1E1E] mb-1">Molly Varangkounh</h3>
                          <p className="text-[10px] uppercase tracking-[0.15em] mb-3" style={{ color: accentColor }}>Executive Advisory</p>
                          <div className="flex gap-6 text-[10px] text-[#4A4A4A]">
                            <span>molly@mollyv.com</span>
                            <span>mollyv.com</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Classic Back */}
                  <div>
                    <div className="flex justify-between items-center mb-3">
                      <p className="text-xs font-medium" style={{ color: mutedColor }}>Classic · Back</p>
                      <button onClick={() => downloadPNG(businessCardBackRef.current, 'business-card-back', 3)} disabled={downloading === 'business-card-back'} className="px-3 py-1 text-[10px] font-semibold uppercase tracking-wider transition-all hover:opacity-80 disabled:opacity-50" style={{ backgroundColor: accentColor, color: '#fff' }}>{downloading === 'business-card-back' ? '...' : '↓ PNG'}</button>
                    </div>
                    <div ref={businessCardBackRef} className="relative w-full aspect-[3.5/2] shadow-xl flex items-center justify-center" style={{ backgroundColor: '#1E1E1E' }}>
                      <div className="absolute right-0 top-0 bottom-0 w-3" style={{ backgroundColor: accentColor }} />
                      <Logo variant="full" size="md" color="light" />
                    </div>
                  </div>
                  {/* Decision Room Front */}
                  <div>
                    <div className="flex justify-between items-center mb-3">
                      <p className="text-xs font-medium" style={{ color: mutedColor }}>Decision Room · Front</p>
                      <button onClick={() => downloadPNG(businessCardAltFrontRef.current, 'business-card-dr-front', 3)} disabled={downloading === 'business-card-dr-front'} className="px-3 py-1 text-[10px] font-semibold uppercase tracking-wider transition-all hover:opacity-80 disabled:opacity-50" style={{ backgroundColor: accentColor, color: '#fff' }}>{downloading === 'business-card-dr-front' ? '...' : '↓ PNG'}</button>
                    </div>
                    <div ref={businessCardAltFrontRef} className="relative w-full aspect-[3.5/2] shadow-xl" style={{ backgroundColor: '#1E1E1E' }}>
                      <div className="absolute right-0 top-0 w-16 h-16" style={{ backgroundColor: accentColor }} />
                      <div className="absolute inset-0 flex flex-col justify-between p-6">
                        <Logo variant="mark" size="sm" color="light" />
                        <div>
                          <h3 className="text-lg font-bold tracking-tight text-white mb-1">Molly Varangkounh</h3>
                          <p className="text-[10px] uppercase tracking-[0.15em] text-white/60 mb-3">Executive Advisory</p>
                          <div className="text-[10px] text-white/70 space-y-0.5">
                            <p>molly@mollyv.com</p>
                            <p>mollyv.com/decision-room</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Decision Room Back */}
                  <div>
                    <div className="flex justify-between items-center mb-3">
                      <p className="text-xs font-medium" style={{ color: mutedColor }}>Decision Room · Back</p>
                      <button onClick={() => downloadPNG(businessCardAltBackRef.current, 'business-card-dr-back', 3)} disabled={downloading === 'business-card-dr-back'} className="px-3 py-1 text-[10px] font-semibold uppercase tracking-wider transition-all hover:opacity-80 disabled:opacity-50" style={{ backgroundColor: accentColor, color: '#fff' }}>{downloading === 'business-card-dr-back' ? '...' : '↓ PNG'}</button>
                    </div>
                    <div ref={businessCardAltBackRef} className="relative w-full aspect-[3.5/2] shadow-xl flex items-center justify-center" style={{ backgroundColor: accentColor }}>
                      <div className="text-center text-white">
                        <p className="text-[10px] uppercase tracking-[0.2em] text-white/70 mb-2">Enter</p>
                        <h3 className="text-xl font-bold tracking-tight">The Decision Room</h3>
                        <p className="text-[10px] text-white/70 mt-3 max-w-[140px] mx-auto leading-relaxed">For leaders navigating high-stakes decisions</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Letterheads */}
              <div>
                <h3 className="text-sm font-semibold mb-4 uppercase tracking-wider" style={{ color: accentColor }}>Letterhead</h3>
                <p className="text-xs mb-6" style={{ color: mutedColor }}>US Letter (8.5" × 11") · 1" margins · Print on premium uncoated stock</p>
                
                <div className="grid lg:grid-cols-2 gap-8">
                  {/* Standard Letterhead */}
                  <div>
                    <div className="flex justify-between items-center mb-3">
                      <p className="text-xs font-medium" style={{ color: mutedColor }}>Standard</p>
                      <button onClick={() => downloadPNG(letterheadRef.current, 'letterhead', 2)} disabled={downloading === 'letterhead'} className="px-3 py-1 text-[10px] font-semibold uppercase tracking-wider transition-all hover:opacity-80 disabled:opacity-50" style={{ backgroundColor: accentColor, color: '#fff' }}>{downloading === 'letterhead' ? '...' : '↓ PNG'}</button>
                    </div>
                    <div ref={letterheadRef} className="relative w-full aspect-[8.5/11] shadow-xl" style={{ backgroundColor: '#FFFFFF' }}>
                      <div className="absolute left-0 top-0 bottom-0 w-1.5" style={{ backgroundColor: accentColor }} />
                      <div className="absolute top-6 left-8 right-8 flex justify-between items-start">
                        <Logo variant="mark-horizontal" size="sm" color="dark" />
                        <div className="text-right text-[8px] text-[#7A7A7A] space-y-0.5">
                          <p>molly@mollyv.com</p>
                          <p>mollyv.com</p>
                        </div>
                      </div>
                      <div className="absolute top-20 left-8 right-8 bottom-16">
                        <p className="text-[8px] text-[#7A7A7A] mb-4">January 30, 2026</p>
                        <p className="text-[8px] text-[#1E1E1E] mb-4">Dear Client,</p>
                        <div className="text-[8px] text-[#4A4A4A] leading-relaxed space-y-2">
                          <p>Thank you for your interest in working together...</p>
                        </div>
                      </div>
                      <div className="absolute bottom-4 left-8 right-8 flex justify-between items-center border-t pt-3" style={{ borderColor: '#E0E0E0' }}>
                        <p className="text-[8px]" style={{ color: accentColor }}>Make bold moves.</p>
                        <p className="text-[8px] text-[#7A7A7A]">MOLLY V.</p>
                      </div>
                    </div>
                  </div>
                  {/* Minimal Letterhead */}
                  <div>
                    <div className="flex justify-between items-center mb-3">
                      <p className="text-xs font-medium" style={{ color: mutedColor }}>Minimal</p>
                      <button onClick={() => downloadPNG(letterheadAltRef.current, 'letterhead-minimal', 2)} disabled={downloading === 'letterhead-minimal'} className="px-3 py-1 text-[10px] font-semibold uppercase tracking-wider transition-all hover:opacity-80 disabled:opacity-50" style={{ backgroundColor: accentColor, color: '#fff' }}>{downloading === 'letterhead-minimal' ? '...' : '↓ PNG'}</button>
                    </div>
                    <div ref={letterheadAltRef} className="relative w-full aspect-[8.5/11] shadow-xl" style={{ backgroundColor: '#FFFFFF' }}>
                      <div className="absolute top-8 left-0 right-0 flex flex-col items-center">
                        <Logo variant="mark" size="sm" color="dark" />
                        <p className="text-[8px] text-[#7A7A7A] mt-2 uppercase tracking-[0.2em]">Executive Advisory</p>
                      </div>
                      <div className="absolute top-24 left-10 right-10 bottom-16">
                        <p className="text-[8px] text-[#7A7A7A] mb-6">January 30, 2026</p>
                        <p className="text-[8px] text-[#4A4A4A]">Dear [Name],</p>
                      </div>
                      <div className="absolute bottom-6 left-10 right-10 flex justify-between text-[8px] text-[#7A7A7A]">
                        <span>molly@mollyv.com</span>
                        <span>mollyv.com</span>
                      </div>
                      <div className="absolute bottom-0 left-0 right-0 h-1" style={{ backgroundColor: accentColor }} />
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </section>

          {/* ==================== SECTION 4: EMAIL ==================== */}
          <section id="email">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="flex items-center gap-3 mb-6">
                <span className="text-2xl">✉</span>
                <h2 className="text-lg font-bold tracking-tight font-swiss">Email</h2>
              </div>
              <p className="text-sm mb-8" style={{ color: mutedColor }}>
                Copy-paste HTML email signatures
              </p>

              <div className="grid lg:grid-cols-2 gap-8">
                {/* Full Signature */}
                <div className="border" style={{ borderColor, backgroundColor: cardBg }}>
                  <div className="p-6 border-b" style={{ borderColor }}>
                    <h3 className="font-semibold mb-1 font-swiss">Full Signature</h3>
                    <p className="text-xs" style={{ color: mutedColor }}>With Decision Room link</p>
                  </div>
                  <div className="p-6" style={{ backgroundColor: '#FFFFFF' }}>
                    <div className="flex gap-5">
                      <div className="pr-5 border-r-[3px]" style={{ borderColor: accentColor }}>
                        <p className="text-lg font-bold tracking-tight text-[#1E1E1E] mb-1">Molly Varangkounh</p>
                        <p className="text-[10px] uppercase tracking-[0.15em] mb-2" style={{ color: accentColor }}>Executive Advisory</p>
                        <div className="space-y-0.5 text-[11px] text-[#4A4A4A]">
                          <p>molly@mollyv.com</p>
                          <p>mollyv.com</p>
                          <p className="pt-1"><span style={{ color: accentColor }}>→ The Decision Room</span></p>
                        </div>
                      </div>
                      <div>
                        <div className="mb-2"><Logo variant="mark" size="sm" color="dark" /></div>
                        <p className="text-xs font-medium text-[#1E1E1E]">Lead with clarity.</p>
                        <p className="text-xs font-medium" style={{ color: accentColor }}>Make bold moves.</p>
                      </div>
                    </div>
                  </div>
                  <div className="p-4 border-t" style={{ borderColor }}>
                    <button onClick={() => copyToClipboard(emailSignatureFullHTML, 'full')} className="w-full py-2 text-xs font-semibold uppercase tracking-wider transition-all" style={{ backgroundColor: accentColor, color: '#fff' }}>
                      {copiedSignature === 'full' ? '✓ Copied!' : 'Copy HTML'}
                    </button>
                  </div>
                </div>

                {/* Minimal Signature */}
                <div className="border" style={{ borderColor, backgroundColor: cardBg }}>
                  <div className="p-6 border-b" style={{ borderColor }}>
                    <h3 className="font-semibold mb-1 font-swiss">Minimal Signature</h3>
                    <p className="text-xs" style={{ color: mutedColor }}>Clean and simple</p>
                  </div>
                  <div className="p-6" style={{ backgroundColor: '#FFFFFF' }}>
                    <p className="text-base font-bold text-[#1E1E1E] mb-1">Molly Varangkounh</p>
                    <p className="text-[10px] uppercase tracking-[0.1em] mb-2" style={{ color: accentColor }}>Executive Advisory</p>
                    <p className="text-[11px] text-[#4A4A4A]">molly@mollyv.com · mollyv.com</p>
                  </div>
                  <div className="p-4 border-t" style={{ borderColor }}>
                    <button onClick={() => copyToClipboard(emailSignatureMinimalHTML, 'minimal')} className="w-full py-2 text-xs font-semibold uppercase tracking-wider transition-all" style={{ backgroundColor: accentColor, color: '#fff' }}>
                      {copiedSignature === 'minimal' ? '✓ Copied!' : 'Copy HTML'}
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </section>

          {/* ==================== SECTION 5: SOCIAL MEDIA ==================== */}
          <section id="social">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="flex items-center gap-3 mb-6">
                <span className="text-2xl">📱</span>
                <h2 className="text-lg font-bold tracking-tight font-swiss">Social Media</h2>
              </div>
              <p className="text-sm mb-8" style={{ color: mutedColor }}>
                Post templates and cover images for all platforms
              </p>

              <div className="grid lg:grid-cols-3 gap-6">
                {/* Instagram Square */}
                <div>
                  <div className="flex justify-between items-center mb-3">
                    <p className="text-xs font-medium" style={{ color: mutedColor }}>Instagram Post (1:1)</p>
                    <button onClick={() => downloadPNG(instagramSquareRef.current, 'instagram-square', 2)} className="px-2 py-1 text-[10px] font-semibold uppercase tracking-wider" style={{ backgroundColor: accentColor, color: '#fff' }}>↓</button>
                  </div>
                  <div ref={instagramSquareRef} className="relative w-full aspect-square shadow-lg overflow-hidden" style={{ backgroundColor: '#1E1E1E' }}>
                    <div className="absolute -right-20 -top-20 w-64 h-64 rounded-full opacity-20" style={{ backgroundColor: accentColor }} />
                    <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center">
                      <div className="mb-4"><Logo variant="mark" size="md" color="light" /></div>
                      <h3 className="text-xl font-bold text-white tracking-tight mb-1">Introducing</h3>
                      <h2 className="text-2xl font-bold tracking-tight mb-3" style={{ color: accentColor }}>MOLLY V.</h2>
                      <p className="text-lg text-white/90">Make bold moves.</p>
                    </div>
                  </div>
                </div>

                {/* Instagram Story */}
                <div>
                  <div className="flex justify-between items-center mb-3">
                    <p className="text-xs font-medium" style={{ color: mutedColor }}>Instagram Story (9:16)</p>
                    <button onClick={() => downloadPNG(instagramStoryRef.current, 'instagram-story', 2)} className="px-2 py-1 text-[10px] font-semibold uppercase tracking-wider" style={{ backgroundColor: accentColor, color: '#fff' }}>↓</button>
                  </div>
                  <div ref={instagramStoryRef} className="relative w-full max-w-[180px] aspect-[9/16] shadow-lg overflow-hidden mx-auto" style={{ backgroundColor: '#1E1E1E' }}>
                    <div className="absolute inset-0" style={{ background: `linear-gradient(180deg, transparent 0%, ${accentColor}20 50%, transparent 100%)` }} />
                    <div className="absolute inset-0 flex flex-col items-center justify-center p-4 text-center">
                      <p className="text-[8px] uppercase tracking-[0.3em] text-white/60 mb-4">Now Live</p>
                      <div className="mb-4"><Logo variant="mark" size="sm" color="light" /></div>
                      <h2 className="text-base font-bold text-white mb-1">MOLLY V.</h2>
                      <p className="text-sm" style={{ color: accentColor }}>Make bold moves.</p>
                    </div>
                  </div>
                </div>

                {/* Quote Card */}
                <div>
                  <div className="flex justify-between items-center mb-3">
                    <p className="text-xs font-medium" style={{ color: mutedColor }}>Quote Card (1:1)</p>
                    <button onClick={() => downloadPNG(quoteCardRef.current, 'quote-card', 2)} className="px-2 py-1 text-[10px] font-semibold uppercase tracking-wider" style={{ backgroundColor: accentColor, color: '#fff' }}>↓</button>
                  </div>
                  <div ref={quoteCardRef} className="relative w-full aspect-square shadow-lg overflow-hidden" style={{ backgroundColor: '#F7F7F7' }}>
                    <div className="absolute top-4 left-4 text-6xl font-serif opacity-10" style={{ color: accentColor }}>"</div>
                    <div className="absolute inset-0 flex flex-col justify-center p-6">
                      <p className="text-base text-[#1E1E1E] leading-relaxed mb-6 font-medium">You'll leave knowing exactly what to do—and <span style={{ color: accentColor }}>at peace</span> with the decision.</p>
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full flex items-center justify-center" style={{ backgroundColor: '#1E1E1E' }}><span className="text-white text-[10px] font-bold">MV</span></div>
                        <div>
                          <p className="text-xs font-semibold text-[#1E1E1E]">Molly Varangkounh</p>
                          <p className="text-[10px]" style={{ color: accentColor }}>Executive Advisory</p>
                        </div>
                      </div>
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 h-1" style={{ backgroundColor: accentColor }} />
                  </div>
                </div>

                {/* Decision Room Post */}
                <div>
                  <div className="flex justify-between items-center mb-3">
                    <p className="text-xs font-medium" style={{ color: mutedColor }}>Decision Room (1:1)</p>
                    <button onClick={() => downloadPNG(decisionRoomPostRef.current, 'decision-room-post', 2)} className="px-2 py-1 text-[10px] font-semibold uppercase tracking-wider" style={{ backgroundColor: accentColor, color: '#fff' }}>↓</button>
                  </div>
                  <div ref={decisionRoomPostRef} className="relative w-full aspect-square shadow-lg overflow-hidden" style={{ backgroundColor: '#1E1E1E' }}>
                    <div className="absolute left-0 top-0 bottom-0 w-1.5" style={{ background: `linear-gradient(180deg, ${accentColor} 0%, #1E4880 100%)` }} />
                    <div className="absolute inset-0 flex flex-col justify-between p-6">
                      <div><p className="text-[8px] uppercase tracking-[0.3em] text-white/50">Executive Advisory</p></div>
                      <div className="text-center">
                        <p className="text-[10px] uppercase tracking-[0.2em] text-white/60 mb-2">Introducing</p>
                        <h2 className="text-2xl font-bold text-white tracking-tight mb-1">The Decision</h2>
                        <h2 className="text-2xl font-bold tracking-tight mb-4" style={{ color: accentColor }}>Room</h2>
                        <p className="text-xs text-white/70 leading-relaxed max-w-[160px] mx-auto">A 30-minute confidential conversation about the decision in front of you.</p>
                      </div>
                      <div className="text-center"><p className="text-[8px] text-white/40 uppercase tracking-wider">mollyv.com/decision-room</p></div>
                    </div>
                  </div>
                </div>

                {/* Guide Promo */}
                <div>
                  <div className="flex justify-between items-center mb-3">
                    <p className="text-xs font-medium" style={{ color: mutedColor }}>Guide Promo (1:1)</p>
                    <button onClick={() => downloadPNG(guidePromoRef.current, 'guide-promo', 2)} className="px-2 py-1 text-[10px] font-semibold uppercase tracking-wider" style={{ backgroundColor: accentColor, color: '#fff' }}>↓</button>
                  </div>
                  <div ref={guidePromoRef} className="relative w-full aspect-square shadow-lg overflow-hidden" style={{ backgroundColor: accentColor }}>
                    <div className="absolute inset-0 flex flex-col justify-center items-center p-6 text-center">
                      <p className="text-[10px] uppercase tracking-[0.3em] text-white/70 mb-3">Free Download</p>
                      <h2 className="text-xl font-bold text-white tracking-tight mb-1">The Decision</h2>
                      <h2 className="text-xl font-bold text-white tracking-tight mb-4">Clarity Guide</h2>
                      <p className="text-xs text-white/80 leading-relaxed max-w-[160px] mb-4">5 questions to ask before any high-stakes decision</p>
                      <div className="px-4 py-2 bg-white text-xs font-semibold uppercase tracking-wider" style={{ color: accentColor }}>Get It Free</div>
                    </div>
                  </div>
                </div>

                {/* LinkedIn/Twitter */}
                <div className="lg:col-span-2">
                  <div className="flex justify-between items-center mb-3">
                    <p className="text-xs font-medium" style={{ color: mutedColor }}>LinkedIn / Twitter (1.91:1)</p>
                    <button onClick={() => downloadPNG(linkedinTwitterRef.current, 'linkedin-twitter', 2)} className="px-2 py-1 text-[10px] font-semibold uppercase tracking-wider" style={{ backgroundColor: accentColor, color: '#fff' }}>↓</button>
                  </div>
                  <div ref={linkedinTwitterRef} className="relative w-full aspect-[1.91/1] shadow-lg overflow-hidden" style={{ backgroundColor: '#F7F7F7' }}>
                    <div className="absolute left-0 top-0 bottom-0 w-3" style={{ backgroundColor: accentColor }} />
                    <div className="absolute right-0 top-0 bottom-0 w-2/5" style={{ backgroundColor: '#1E1E1E' }}>
                      <div className="absolute inset-0 flex items-center justify-center"><Logo variant="mark" size="md" color="light" /></div>
                    </div>
                    <div className="absolute left-6 top-0 bottom-0 w-1/2 flex flex-col justify-center">
                      <p className="text-[10px] uppercase tracking-[0.2em] mb-1" style={{ color: accentColor }}>Announcement</p>
                      <h2 className="text-2xl font-bold text-[#1E1E1E] tracking-tight mb-1">MOLLY V.</h2>
                      <h3 className="text-sm font-medium text-[#4A4A4A] mb-3">Executive Coaching & Consulting</h3>
                      <p className="text-lg" style={{ color: accentColor }}>Make bold moves.</p>
                    </div>
                  </div>
                </div>

                {/* LinkedIn Cover */}
                <div className="lg:col-span-3">
                  <div className="flex justify-between items-center mb-3">
                    <p className="text-xs font-medium" style={{ color: mutedColor }}>LinkedIn Cover (4:1)</p>
                    <button onClick={() => downloadPNG(linkedinCoverRef.current, 'linkedin-cover', 2)} className="px-2 py-1 text-[10px] font-semibold uppercase tracking-wider" style={{ backgroundColor: accentColor, color: '#fff' }}>↓</button>
                  </div>
                  <div ref={linkedinCoverRef} className="relative w-full aspect-[4/1] shadow-lg overflow-hidden" style={{ backgroundColor: '#1E1E1E' }}>
                    <div className="absolute inset-0" style={{ background: `linear-gradient(90deg, ${accentColor}30 0%, transparent 50%, ${accentColor}10 100%)` }} />
                    <div className="absolute inset-0 flex items-center justify-between px-8">
                      <div className="flex items-center gap-4">
                        <Logo variant="mark" size="sm" color="light" />
                        <div>
                          <h2 className="text-lg font-bold text-white tracking-tight">MOLLY V.</h2>
                          <p className="text-xs text-white/60">Executive Coaching & Consulting</p>
                        </div>
                      </div>
                      <p className="text-lg" style={{ color: accentColor }}>Make bold moves.</p>
                    </div>
                  </div>
                </div>

                {/* Announcement Banner */}
                <div className="lg:col-span-3">
                  <div className="flex justify-between items-center mb-3">
                    <p className="text-xs font-medium" style={{ color: mutedColor }}>Announcement Banner (2:1)</p>
                    <button onClick={() => downloadPNG(announcementPostRef.current, 'announcement-banner', 2)} className="px-2 py-1 text-[10px] font-semibold uppercase tracking-wider" style={{ backgroundColor: accentColor, color: '#fff' }}>↓</button>
                  </div>
                  <div ref={announcementPostRef} className="relative w-full aspect-[2/1] shadow-lg overflow-hidden" style={{ backgroundColor: '#1E1E1E' }}>
                    <div className="absolute left-0 top-0 bottom-0 w-1.5" style={{ backgroundColor: accentColor }} />
                    <div className="absolute inset-0 flex items-center px-8">
                      <div className="flex-1">
                        <p className="text-[10px] uppercase tracking-[0.3em] text-white/50 mb-2">Coming Soon</p>
                        <h2 className="text-3xl font-bold text-white tracking-tight mb-2">The Decision Room</h2>
                        <p className="text-sm text-white/60 mb-4 max-w-sm">For leaders navigating high-stakes decisions—with someone who's sat in the chair.</p>
                        <div className="inline-block px-4 py-2 text-xs font-semibold uppercase tracking-wider" style={{ backgroundColor: accentColor, color: '#fff' }}>Learn More</div>
                      </div>
                      <div className="hidden lg:block"><Logo variant="mark" size="md" color="light" /></div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </section>

          {/* ==================== SECTION 6: LEAD GENERATION ==================== */}
          <section id="lead-gen">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="flex items-center gap-3 mb-6">
                <span className="text-2xl">📊</span>
                <h2 className="text-lg font-bold tracking-tight font-swiss">Lead Generation</h2>
              </div>
              <p className="text-sm mb-8" style={{ color: mutedColor }}>
                Downloadable guides and lead capture tools
              </p>

              <div className="grid lg:grid-cols-2 gap-8">
                {/* Decision Clarity Guide */}
                <div className="p-6 border" style={{ borderColor, backgroundColor: cardBg }}>
                  <div className="flex items-start gap-5">
                    <div className="w-20 h-28 flex-shrink-0 flex items-center justify-center relative overflow-hidden" style={{ backgroundColor: '#1E1E1E' }}>
                      <div className="absolute left-0 top-0 bottom-0 w-1" style={{ backgroundColor: accentColor }} />
                      <div className="text-center">
                        <div className="text-[8px] text-white/50 uppercase tracking-widest mb-1">Lead Magnet</div>
                        <div className="text-xs font-bold" style={{ color: accentColor }}>Clarity</div>
                        <div className="text-xs font-bold text-white">Guide</div>
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-base mb-2 font-swiss">The Decision Clarity Guide</h3>
                      <p className="text-xs mb-4" style={{ color: mutedColor }}>5 questions to ask before any high-stakes decision. Premium PDF format.</p>
                      <div className="flex flex-wrap gap-2">
                        <a href="/decision-clarity-guide.html" target="_blank" className="px-3 py-1.5 text-[10px] font-semibold uppercase tracking-wider transition-all hover:opacity-80" style={{ backgroundColor: accentColor, color: '#fff' }}>View Guide</a>
                        <a href="/decision-clarity-guide.html" target="_blank" onClick={(e) => { e.preventDefault(); window.open('/decision-clarity-guide.html', '_blank'); alert('To save as PDF: Print (Cmd+P) → Save as PDF') }} className="px-3 py-1.5 text-[10px] font-semibold uppercase tracking-wider border transition-all hover:opacity-80" style={{ borderColor: textColor, color: textColor }}>Save PDF</a>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Lead Capture Page */}
                <div className="p-6 border" style={{ borderColor, backgroundColor: cardBg }}>
                  <div className="flex items-start gap-5">
                    <div className="w-20 h-28 flex-shrink-0 flex items-center justify-center" style={{ backgroundColor: accentColor }}>
                      <div className="text-center">
                        <div className="text-[8px] text-white/70 uppercase tracking-widest mb-1">Capture</div>
                        <div className="text-xs font-bold text-white">Lead</div>
                        <div className="text-xs font-bold text-white/80">Form</div>
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-base mb-2 font-swiss">Lead Capture Page</h3>
                      <p className="text-xs mb-4" style={{ color: mutedColor }}>Landing page with email capture. Connects to Supabase for lead storage.</p>
                      <div className="flex flex-wrap gap-2">
                        <a href="/guide" target="_blank" className="px-3 py-1.5 text-[10px] font-semibold uppercase tracking-wider transition-all hover:opacity-80" style={{ backgroundColor: accentColor, color: '#fff' }}>View Page</a>
                        <span className="px-3 py-1.5 text-[10px] uppercase tracking-wider" style={{ color: mutedColor }}>/guide</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </section>

          {/* Footer */}
          <div className="pt-8 border-t" style={{ borderColor }}>
            <a href="/" className="inline-flex items-center gap-2 text-sm font-medium hover:opacity-70 transition-opacity font-swiss" style={{ color: accentColor }}>← Back to main site</a>
          </div>
        </div>
      </main>
    </div>
  )
}
