'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import { 
  Building, 
  ShoppingBag, 
  Fuel, 
  Car, 
  Truck, 
  Megaphone, 
  Factory, 
  Briefcase, 
  DollarSign,
  ChevronLeft,
  ChevronRight,
  Play,
  Pause,
  ArrowRight
} from 'lucide-react'

const SectorsCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)
  const [isVisible, setIsVisible] = useState(false)
  const [isMounted, setIsMounted] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)
  const autoPlayRef = useRef<NodeJS.Timeout | null>(null)

  const sectors = [
    {
      icon: Building,
      title: 'Real Estate',
      description: 'Premium property development and investment solutions for modern living and business environments',
      color: 'from-blue-500 to-blue-600',
      features: ['Residential Development', 'Commercial Properties', 'Property Management', 'Real Estate Investment']
    },
    {
      icon: ShoppingBag,
      title: 'Fashion & Retail',
      description: 'Trendsetting fashion and comprehensive retail solutions that combine style with accessibility',
      color: 'from-pink-500 to-pink-600',
      features: ['Fashion Design', 'Retail Operations', 'E-commerce', 'Brand Development']
    },
    {
      icon: Fuel,
      title: 'Oil & Gas',
      description: 'Energy sector operations and petroleum services contributing to Nigeria&apos;s energy security',
      color: 'from-orange-500 to-orange-600',
      features: ['Upstream Operations', 'Downstream Services', 'Distribution', 'Infrastructure']
    },
    {
      icon: Car,
      title: 'Automotive',
      description: 'Vehicle sales, maintenance, and automotive services representing leading global brands',
      color: 'from-red-500 to-red-600',
      features: ['Vehicle Sales', 'After-Sales Service', 'Spare Parts', 'Fleet Management']
    },
    {
      icon: Truck,
      title: 'Transportation',
      description: 'Efficient logistics and transportation solutions across Nigeria and West Africa',
      color: 'from-green-500 to-green-600',
      features: ['Freight Transport', 'Warehousing', 'Supply Chain', 'Last-Mile Delivery']
    },
    {
      icon: Factory,
      title: 'Construction',
      description: 'Construction and infrastructure projects delivering quality and sustainable development',
      color: 'from-gray-500 to-gray-600',
      features: ['Construction Projects', 'Infrastructure', 'Project Management', 'Quality Assurance']
    },
    {
      icon: Megaphone,
      title: 'Marketing & Media',
      description: 'Strategic marketing solutions and media services to amplify brand presence and engagement',
      color: 'from-purple-500 to-purple-600',
      features: ['Digital Marketing', 'Brand Strategy', 'Media Production', 'Public Relations']
    },
    {
      icon: Briefcase,
      title: 'Professional Services',
      description: 'Comprehensive business consulting and professional services for organizational excellence',
      color: 'from-indigo-500 to-indigo-600',
      features: ['Business Consulting', 'Legal Services', 'HR Solutions', 'Strategic Planning']
    },
    {
      icon: DollarSign,
      title: 'Financial Services',
      description: 'Investment and financial solutions supporting business growth and wealth management',
      color: 'from-emerald-500 to-emerald-600',
      features: ['Investment Banking', 'Wealth Management', 'Financial Planning', 'Corporate Finance']
    }
  ]

  const itemsPerSlide = {
    mobile: 1,
    tablet: 1,
    desktop: 1
  }

  const [currentItemsPerSlide, setCurrentItemsPerSlide] = useState(itemsPerSlide.desktop)
  const totalSlides = Math.ceil(sectors.length / currentItemsPerSlide)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  useEffect(() => {
    if (!isMounted) return
    
    const handleResize = () => {
      setCurrentItemsPerSlide(1)
    }

    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [isMounted])

  useEffect(() => {
    if (!isMounted) return
    
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.2 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [isMounted])

  useEffect(() => {
    if (isAutoPlaying) {
      autoPlayRef.current = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % totalSlides)
      }, 5000)
    } else {
      if (autoPlayRef.current) {
        clearInterval(autoPlayRef.current)
      }
    }

    return () => {
      if (autoPlayRef.current) {
        clearInterval(autoPlayRef.current)
      }
    }
  }, [isAutoPlaying, totalSlides])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides)
  }

  const goToSlide = (index: number) => {
    setCurrentSlide(index)
  }

  const toggleAutoPlay = () => {
    setIsAutoPlaying(!isAutoPlaying)
  }



  return (
    <section id="sectors-carousel" ref={sectionRef} className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div
          className={`text-center mb-16 transition-all duration-1000 transform ${
            isVisible
              ? 'translate-y-0 opacity-100'
              : 'translate-y-10 opacity-0'
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-primary-green mb-6">
            Our Business Sectors
          </h2>
          <p className="text-xl text-text-light max-w-3xl mx-auto leading-relaxed">
            Explore our diverse portfolio of business divisions through our interactive carousel
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative">
          {/* Carousel Controls */}
          <div className="flex justify-between items-center mb-8">
            <div className="flex items-center space-x-4">
              <button
                onClick={toggleAutoPlay}
                className="flex items-center space-x-2 px-4 py-2 bg-primary-green text-white rounded-full hover:bg-green-700 transition-colors duration-300"
              >
                {isAutoPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
                <span className="text-sm font-medium">
                  {isAutoPlaying ? 'Pause' : 'Play'}
                </span>
              </button>
              <span className="text-sm text-text-light">
                {currentSlide + 1} of {totalSlides}
              </span>
            </div>

            <div className="flex items-center space-x-2">
              <button
                onClick={prevSlide}
                className="p-2 rounded-full bg-white shadow-lg hover:shadow-xl transition-all duration-300 hover:bg-primary-green hover:text-white group"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button
                onClick={nextSlide}
                className="p-2 rounded-full bg-white shadow-lg hover:shadow-xl transition-all duration-300 hover:bg-primary-green hover:text-white group"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>
          </div>

          {/* Carousel Content */}
          <div className="overflow-hidden rounded-2xl">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {Array.from({ length: totalSlides }).map((_, slideIndex) => {
                const slideItems = sectors.slice(
                  slideIndex * currentItemsPerSlide,
                  (slideIndex + 1) * currentItemsPerSlide
                )

                return (
                  <div
                    key={slideIndex}
                    className="w-full flex-shrink-0"
                  >
                    <div className={`grid gap-6 ${
                      currentItemsPerSlide === 1 ? 'grid-cols-1' :
                      currentItemsPerSlide === 2 ? 'grid-cols-2' :
                      'grid-cols-3'
                    }`}>
                      {slideItems.map((sector, itemIndex) => {
                        const Icon = sector.icon
                        const globalIndex = slideIndex * currentItemsPerSlide + itemIndex
                        
                        return (
                          <div
                            key={globalIndex}
                            className="group relative bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105 cursor-pointer max-w-md mx-auto"
                          >
                            {/* Background Gradient */}
                            <div
                              className={`absolute inset-0 bg-gradient-to-br ${sector.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300 rounded-xl`}
                            ></div>

                            <div className="relative p-6">
                              {/* Icon */}
                              <div className="inline-flex items-center justify-center w-12 h-12 bg-primary-green/10 rounded-full mb-4 group-hover:bg-primary-green group-hover:text-white transition-all duration-300">
                                <Icon className="w-6 h-6 text-primary-green group-hover:text-white transition-colors duration-300" />
                              </div>

                              {/* Content */}
                              <h3 className="text-lg font-bold text-text-dark mb-3 group-hover:text-primary-green transition-colors duration-300">
                                {sector.title}
                              </h3>
                              <p className="text-text-light leading-relaxed mb-4 text-sm">
                                {sector.description}
                              </p>

                              {/* Features */}
                              <ul className="space-y-1.5 mb-4">
                                {sector.features.map((feature, featureIndex) => (
                                  <li key={featureIndex} className="flex items-center text-xs text-text-light">
                                    <div className="w-1 h-1 bg-primary-gold rounded-full mr-2 flex-shrink-0"></div>
                                    {feature}
                                  </li>
                                ))}
                              </ul>


                            </div>

                            {/* Hover Effect Border */}
                            <div className="absolute inset-0 border-2 border-transparent group-hover:border-primary-gold rounded-xl transition-colors duration-300"></div>
                          </div>
                        )
                      })}
                    </div>
                  </div>
                )
              })}
            </div>
          </div>

          {/* Dots Navigation */}
          <div className="flex justify-center mt-8 space-x-2">
            {Array.from({ length: totalSlides }).map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide
                    ? 'bg-primary-green scale-125'
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
              />
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div
          className={`text-center mt-16 transition-all duration-1000 transform ${
            isVisible
              ? 'translate-y-0 opacity-100'
              : 'translate-y-10 opacity-0'
          }`}
          style={{ transitionDelay: '500ms' }}
        >
          <div className="bg-gradient-to-r from-primary-green to-green-700 rounded-2xl p-8 md:p-12 text-white">
            <h3 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Explore Our Divisions?
            </h3>
            <p className="text-xl mb-8 text-green-100">
              Discover detailed information about each of our business sectors
            </p>
            <Link
              href="/sectors"
              className="inline-flex items-center px-8 py-4 bg-primary-gold hover:bg-yellow-500 text-primary-green font-semibold rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-xl group"
            >
              View All Sectors
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SectorsCarousel