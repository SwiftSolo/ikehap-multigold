'use client'

import { useState, useEffect } from 'react'
import { ChevronDown } from 'lucide-react'

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100)
    return () => clearTimeout(timer)
  }, [])

  const scrollToSectors = () => {
    const sectorsElement = document.getElementById('sectors')
    if (sectorsElement) {
      sectorsElement.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-primary-green via-primary-green to-green-800 text-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent animate-pulse"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div
          className={`transition-all duration-1000 transform ${
            isVisible
              ? 'translate-y-0 opacity-100'
              : 'translate-y-10 opacity-0'
          }`}
        >
          {/* Main Heading */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            <span className="block">Ikehap</span>
            <span className="block text-primary-gold">Multigold Limited</span>
          </h1>

          {/* Tagline */}
          <p className="text-xl md:text-2xl lg:text-3xl font-light mb-4 text-gray-100">
            Excellence Across Industries, Innovation for Tomorrow
          </p>

          {/* Description */}
          <p className="text-lg md:text-xl max-w-4xl mx-auto mb-8 text-gray-200 leading-relaxed">
            A diversified conglomerate operating across 9 key sectors, driving growth and creating value through strategic investments and operational excellence.
          </p>

          {/* CTA Button */}
          <button
            onClick={scrollToSectors}
            className="inline-flex items-center px-8 py-4 bg-primary-gold hover:bg-yellow-500 text-primary-green font-semibold rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-xl group"
          >
            Explore Our Divisions
            <ChevronDown className="ml-2 w-5 h-5 group-hover:animate-bounce" />
          </button>
        </div>

        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-primary-gold/20 rounded-full animate-pulse hidden lg:block"></div>
        <div className="absolute bottom-20 right-10 w-16 h-16 bg-white/10 rounded-full animate-pulse hidden lg:block"></div>
        <div className="absolute top-1/2 right-20 w-12 h-12 bg-primary-gold/30 rounded-full animate-pulse hidden lg:block"></div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown className="w-8 h-8 text-white/70" />
      </div>
    </section>
  )
}

export default Hero