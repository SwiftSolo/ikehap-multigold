'use client'

import { useState, useEffect } from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { 
  Building2, 
  ShoppingBag, 
  Fuel, 
  Car, 
  Truck,
  Hammer
} from 'lucide-react'

const SectorsPage = () => {
  const [fadeIn, setFadeIn] = useState(false)
  const [activeFilter, setActiveFilter] = useState('all')

  useEffect(() => {
    setFadeIn(true)
  }, [])

  const sectors = [
    {
      id: 'real-estate',
      title: 'Real Estate Development',
      icon: Building2,
      category: 'infrastructure',
      description: 'Comprehensive real estate solutions including residential, commercial, and mixed-use developments that transform communities and create lasting value.',
      features: ['Residential Complexes', 'Commercial Buildings', 'Mixed-Use Developments', 'Property Management'],
      color: 'from-blue-500 to-blue-600'
    },
    {
      id: 'fashion-retail',
      title: 'Fashion & Retail',
      icon: ShoppingBag,
      category: 'consumer',
      description: 'Trendsetting fashion retail operations offering premium clothing, accessories, and lifestyle products through modern retail experiences.',
      features: ['Premium Fashion Lines', 'Retail Outlets', 'Online Marketplace', 'Brand Partnerships'],
      color: 'from-pink-500 to-purple-600'
    },
    {
      id: 'oil-gas',
      title: 'Oil & Gas',
      icon: Fuel,
      category: 'energy',
      description: 'Strategic investments in oil and gas exploration, production, and distribution, contributing to energy security and economic growth.',
      features: ['Exploration Services', 'Production Operations', 'Distribution Networks', 'Energy Trading'],
      color: 'from-orange-500 to-red-600'
    },
    {
      id: 'automotive',
      title: 'Automotive',
      icon: Car,
      category: 'mobility',
      description: 'Comprehensive automotive services including vehicle sales, maintenance, parts distribution, and innovative mobility solutions.',
      features: ['Vehicle Sales', 'Service Centers', 'Parts Distribution', 'Fleet Management'],
      color: 'from-green-500 to-teal-600'
    },
    {
      id: 'transportation',
      title: 'Transportation & Logistics',
      icon: Truck,
      category: 'logistics',
      description: 'Efficient transportation and logistics solutions connecting businesses and communities through reliable freight and passenger services.',
      features: ['Freight Services', 'Passenger Transport', 'Logistics Solutions', 'Fleet Operations'],
      color: 'from-indigo-500 to-blue-600'
    },
    {
      id: 'construction',
      title: 'Construction',
      icon: Hammer,
      category: 'infrastructure',
      description: 'Professional construction services delivering high-quality residential, commercial, and infrastructure projects with modern techniques and sustainable practices.',
      features: ['Residential Construction', 'Commercial Buildings', 'Infrastructure Projects', 'Project Management'],
      color: 'from-yellow-500 to-orange-600'
    }
  ]

  const categories = [
    { id: 'all', label: 'All Sectors' },
    { id: 'infrastructure', label: 'Infrastructure' },
    { id: 'consumer', label: 'Consumer' },
    { id: 'energy', label: 'Energy' },
    { id: 'mobility', label: 'Mobility' },
    { id: 'logistics', label: 'Logistics' }
  ]

  const filteredSectors = activeFilter === 'all' 
    ? sectors 
    : sectors.filter(sector => sector.category === activeFilter)

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary-green to-primary-green/90 text-white py-24">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`text-center transition-all duration-1000 ${fadeIn ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Our <span className="text-primary-gold">Business Sectors</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto">
              Diversified Excellence Across Five Strategic Industries
            </p>
          </div>
        </div>
      </section>



      {/* Filter Tabs */}
      <section className="py-8 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveFilter(category.id)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  activeFilter === category.id
                    ? 'bg-primary-gold text-white shadow-lg'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Sectors Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {filteredSectors.map((sector) => {
              const Icon = sector.icon
              return (
                <div
                  key={sector.id}
                  className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
                >
                  {/* Header */}
                  <div className={`bg-gradient-to-r ${sector.color} p-8 text-white`}>
                    <div className="flex items-center mb-4">
                      <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mr-4">
                        <Icon className="w-8 h-8" />
                      </div>
                      <h3 className="text-2xl font-bold">{sector.title}</h3>
                    </div>
                    <p className="text-white/90 leading-relaxed">{sector.description}</p>
                  </div>

                  {/* Content */}
                  <div className="p-8">
                    {/* Features */}
                    <div className="mb-6">
                      <h4 className="text-lg font-semibold text-text-dark mb-4">Key Services</h4>
                      <div className="grid grid-cols-2 gap-3">
                        {sector.features.map((feature, idx) => (
                          <div key={idx} className="flex items-center text-sm text-gray-600">
                            <div className="w-2 h-2 bg-primary-gold rounded-full mr-2"></div>
                            {feature}
                          </div>
                        ))}
                      </div>
                    </div>


                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-br from-primary-green to-primary-green/90 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to <span className="text-primary-gold">Partner</span> with Us?
          </h2>
          <p className="text-xl text-gray-200 mb-8 max-w-3xl mx-auto">
            Explore opportunities across our diverse business sectors and discover how we can create value together.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="bg-primary-gold hover:bg-yellow-500 text-primary-green px-8 py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Contact Us
            </a>
            <a
              href="/projects"
              className="border-2 border-white text-white hover:bg-white hover:text-primary-green px-8 py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105"
            >
              View Projects
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default SectorsPage