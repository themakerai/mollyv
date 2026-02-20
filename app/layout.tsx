import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Molly Varangkounh | Leadership Clarity & Strategic Advisory',
  description: 'Molly Varangkounh is a leadership advisor, speaker, and guide for leaders carrying more than most people know. You don\'t have to do hard things alone.',
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



