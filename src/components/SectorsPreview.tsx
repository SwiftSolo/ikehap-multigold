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
  ArrowRight
} from 'lucide-react'

const SectorsPreview = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [hoveredSector, setHoveredSector] = useState<number | null>(null)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
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
  }, [])

  const sectors = [
    {
      icon: Building,
      title: 'Real Estate',
      description: 'Premium property development and investment solutions',
      color: 'from-blue-500 to-blue-600',
    },
    {
      icon: ShoppingBag,
      title: 'Fashion & Retail',
      description: 'Trendsetting fashion and comprehensive retail solutions',
      color: 'from-pink-500 to-pink-600',
    },
    {
      icon: Fuel,
      title: 'Oil & Gas',
      description: 'Energy sector operations and petroleum services',
      color: 'from-orange-500 to-orange-600',
    },
    {
      icon: Car,
      title: 'Automotive',
      description: 'Vehicle sales, maintenance, and automotive services',
      color: 'from-red-500 to-red-600',
    },
    {
      icon: Truck,
      title: 'Transportation & Logistics',
      description: 'Efficient logistics and transportation solutions',
      color: 'from-green-500 to-green-600',
    },
    {
      icon: Megaphone,
      title: 'Marketing & Distribution',
      description: 'Strategic marketing and distribution networks',
      color: 'from-purple-500 to-purple-600',
    },
    {
      icon: Factory,
      title: 'Manufacturing & Trading',
      description: 'Industrial manufacturing and trading operations',
      color: 'from-gray-500 to-gray-600',
    },
    {
      icon: Briefcase,
      title: 'Contracting & Merchant Services',
      description: 'Professional contracting and merchant solutions',
      color: 'from-indigo-500 to-indigo-600',
    },
    {
      icon: DollarSign,
      title: 'Finance',
      description: 'Financial services and investment management',
      color: 'from-yellow-500 to-yellow-600',
    },
  ]

  return (
    <section id="sectors" ref={sectionRef} className="py-20 bg-white">
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
            Discover our diverse portfolio of business divisions, each contributing to our mission of 
            excellence and innovation across multiple industries.
          </p>
        </div>

        {/* Sectors Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {sectors.map((sector, index) => {
            const Icon = sector.icon
            return (
              <div
                key={index}
                className={`group relative bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 transform cursor-pointer ${
                  isVisible
                    ? 'translate-y-0 opacity-100'
                    : 'translate-y-10 opacity-0'
                } hover:scale-105`}
                style={{ transitionDelay: `${index * 100}ms` }}
                onMouseEnter={() => setHoveredSector(index)}
                onMouseLeave={() => setHoveredSector(null)}
              >
                {/* Background Gradient */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${sector.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300 rounded-xl`}
                ></div>

                <div className="relative p-8">
                  {/* Icon */}
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-green/10 rounded-full mb-6 group-hover:bg-primary-green group-hover:text-white transition-all duration-300">
                    <Icon className="w-8 h-8 text-primary-green group-hover:text-white transition-colors duration-300" />
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-bold text-text-dark mb-4 group-hover:text-primary-green transition-colors duration-300">
                    {sector.title}
                  </h3>
                  <p className="text-text-light leading-relaxed mb-6">
                    {sector.description}
                  </p>

                  {/* Removed non-functional Learn More link */}
                </div>

                {/* Hover Effect Border */}
                <div className="absolute inset-0 border-2 border-transparent group-hover:border-primary-gold rounded-xl transition-colors duration-300"></div>
              </div>
            )
          })}
        </div>

        {/* CTA Section */}
        <div
          className={`text-center transition-all duration-1000 transform ${
            isVisible
              ? 'translate-y-0 opacity-100'
              : 'translate-y-10 opacity-0'
          }`}
          style={{ transitionDelay: '900ms' }}
        >
          <div className="bg-gradient-to-r from-primary-green to-green-700 rounded-2xl p-8 md:p-12 text-white">
            <h3 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Explore Our Divisions?
            </h3>
            <p className="text-xl mb-8 text-green-100">
              Discover how we're driving innovation across industries.
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

export default SectorsPreview