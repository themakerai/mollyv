import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Molly Varangkounh | Leadership Clarity & Strategic Advisory',
  description: 'Molly Varangkounh helps leaders gain clarity and make bold, grounded decisions when the stakes are high and the path forward feels uncertain.',
  icons: {
    icon: '/icon.svg',
    apple: '/apple-icon.png',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}



