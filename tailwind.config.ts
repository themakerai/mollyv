import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        /* Brand Colors - Official Palette (Deep Cyan-Navy) */
        black: '#1E1E1E',
        blue: '#2D8FB5',
        navy: '#1E4880',
        sky: '#5FBDD8',
        sand: '#EAE5E1',
        white: '#F7F7F7',
        'pure-white': '#FFFFFF',
        /* Semantic aliases */
        charcoal: '#1E1E1E',
        accent: {
          DEFAULT: '#2D8FB5',
          dark: '#1E4880',
          light: '#5FBDD8',
        },
        warm: '#EAE5E1',
        'dark-grey': '#4A4A4A',
        'mid-grey': '#7A7A7A',
        'light-grey': '#E0E0E0',
        'off-white': '#F7F7F7',
      },
      fontFamily: {
        display: ['PP Frama', 'DM Sans', '-apple-system', 'sans-serif'],
        swiss: ['DM Sans', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
        script: ['TT Gentlemens', 'cursive'],
      },
      letterSpacing: {
        'tightest': '-0.05em',
        'tighter': '-0.03em',
        'tight': '-0.02em',
        'wide': '0.1em',
        'wider': '0.15em',
        'widest': '0.2em',
      },
      lineHeight: {
        'tightest': '0.85',
        'tighter': '0.9',
        'tight': '0.95',
        'relaxed': '1.65',
        'loose': '1.8',
      },
      transitionTimingFunction: {
        'premium': 'cubic-bezier(0.16, 1, 0.3, 1)',
        'out-expo': 'cubic-bezier(0.19, 1, 0.22, 1)',
      },
      animation: {
        'slide-up': 'slideUp 1s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'fade-in': 'fadeIn 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards',
      },
      keyframes: {
        slideUp: {
          '0%': { transform: 'translateY(100%)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}

export default config
