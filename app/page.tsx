'use client'

import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Approach from '@/components/Approach'
import Mission from '@/components/Mission'
import Services from '@/components/Services'
import FounderStory from '@/components/FounderStory'
import Values from '@/components/Values'
import Framework from '@/components/Framework'
import Book from '@/components/Book'
import CTA from '@/components/CTA'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="relative">
      <Navbar />
      <Hero />
      <Approach />
      <Mission />
      <Services />
      <FounderStory />
      <Framework />
      <Values />
      <Book />
      <CTA />
      <Footer />
    </main>
  )
}
