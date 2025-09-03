'use client'

// useState and useEffect imports removed as they were unused
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Overview from '@/components/Overview'
import SectorsCarousel from '@/components/sectorscarousel'
import Footer from '@/components/Footer'
import ScrollToTop from '@/components/ScrollToTop'
import { StaggerContainer, StaggerItem } from '@/components/PageTransition'

export default function Home() {

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