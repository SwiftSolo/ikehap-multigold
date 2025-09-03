'use client'

import { useState, useEffect } from 'react'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Overview from '@/components/Overview'
import SectorsCarousel from '@/components/SectorsCarousel'
import Footer from '@/components/Footer'
import ScrollToTop from '@/components/ScrollToTop'
import { StaggerContainer, StaggerItem } from '@/components/PageTransition'

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(true)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  return (
    <div className="min-h-screen animate-fade-in">
      <Header />
      <main>
        <StaggerContainer>
          <StaggerItem>
            <Hero />
          </StaggerItem>
          <StaggerItem>
            <Overview />
          </StaggerItem>
          <StaggerItem>
            <SectorsCarousel />
          </StaggerItem>
        </StaggerContainer>
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  )
}