'use client'

import { motion } from 'framer-motion'

type PlaceholderVariant = 'portrait' | 'landscape' | 'square' | 'circle' | 'editorial'
type PlaceholderTheme = 'blue' | 'sand' | 'dark' | 'sky' | 'outline'

interface ImagePlaceholderProps {
  variant?: PlaceholderVariant
  theme?: PlaceholderTheme
  label?: string
  initials?: string
  className?: string
}

const themeStyles: Record<PlaceholderTheme, { bg: string; border: string; text: string; accent: string; sub: string }> = {
  blue: {
    bg: 'bg-gradient-to-br from-accent/15 to-accent/5',
    border: 'border-accent/25',
    text: 'text-accent/40',
    accent: 'bg-accent/20',
    sub: 'text-accent/50',
  },
  sand: {
    bg: 'bg-gradient-to-br from-sand to-sand/60',
    border: 'border-warm',
    text: 'text-charcoal/25',
    accent: 'bg-charcoal/10',
    sub: 'text-charcoal/30',
  },
  dark: {
    bg: 'bg-gradient-to-br from-charcoal to-charcoal/90',
    border: 'border-white/10',
    text: 'text-white/20',
    accent: 'bg-accent/30',
    sub: 'text-white/30',
  },
  sky: {
    bg: 'bg-gradient-to-br from-sky/20 to-accent/10',
    border: 'border-sky/30',
    text: 'text-sky/50',
    accent: 'bg-sky/20',
    sub: 'text-accent/40',
  },
  outline: {
    bg: 'bg-transparent',
    border: 'border-accent/30 border-dashed',
    text: 'text-accent/30',
    accent: 'bg-accent/10',
    sub: 'text-accent/40',
  },
}

const variantStyles: Record<PlaceholderVariant, string> = {
  portrait: 'aspect-[3/4]',
  landscape: 'aspect-[16/9]',
  square: 'aspect-square',
  circle: 'aspect-square rounded-full',
  editorial: 'aspect-[4/5]',
}

export default function ImagePlaceholder({
  variant = 'portrait',
  theme = 'blue',
  label = 'Photo placeholder',
  initials = 'MV',
  className = '',
}: ImagePlaceholderProps) {
  const t = themeStyles[theme]
  const shape = variantStyles[variant]
  const isCircle = variant === 'circle'

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className={`relative ${shape} ${t.bg} border ${t.border} overflow-hidden flex flex-col items-center justify-center ${className}`}
    >
      {/* Decorative elements — different per variant */}
      {variant === 'portrait' && (
        <>
          <div className={`absolute top-6 left-6 w-12 h-[2px] ${t.accent}`} />
          <div className={`absolute top-6 left-6 w-[2px] h-12 ${t.accent}`} />
          <div className={`absolute bottom-6 right-6 w-12 h-[2px] ${t.accent}`} />
          <div className={`absolute bottom-6 right-6 w-[2px] h-12 ${t.accent}`} />
        </>
      )}

      {variant === 'landscape' && (
        <>
          <div className={`absolute top-0 left-0 right-0 h-[3px] ${t.accent}`} />
          <div className={`absolute bottom-0 left-0 right-0 h-[3px] ${t.accent}`} />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className={`w-[60%] h-[1px] ${t.accent}`} />
          </div>
        </>
      )}

      {variant === 'square' && (
        <div className={`absolute inset-4 border ${t.border} rounded-sm`} />
      )}

      {variant === 'editorial' && (
        <>
          <div className={`absolute top-0 left-0 w-1/3 h-full ${t.accent} opacity-40`} />
          <div className={`absolute bottom-0 left-0 right-0 h-1/4 bg-gradient-to-t from-black/10 to-transparent`} />
        </>
      )}

      {variant === 'circle' && (
        <div className={`absolute inset-3 border ${t.border} rounded-full`} />
      )}

      {/* Initials */}
      <span className={`relative z-10 font-display select-none ${t.text} ${
        isCircle ? 'text-3xl lg:text-4xl' : 'text-4xl lg:text-6xl'
      }`}>
        {initials}
      </span>

      {/* Label */}
      {!isCircle && (
        <span className={`relative z-10 mt-2 text-[10px] tracking-[0.2em] uppercase select-none ${t.sub}`}>
          {label}
        </span>
      )}

      {/* Cross-hair center mark for editorial and landscape */}
      {(variant === 'editorial' || variant === 'landscape') && (
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className={`w-6 h-[1px] ${t.accent} absolute`} />
          <div className={`w-[1px] h-6 ${t.accent} absolute`} />
        </div>
      )}
    </motion.div>
  )
}
