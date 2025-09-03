'use client'

import Link from 'next/link'
import { MapPin, ExternalLink } from 'lucide-react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const SitemapPage = () => {
  const mainPages = [
    { href: '/', label: 'Home', description: 'Welcome to Ikehap Multigold Limited' },
    { href: '/about', label: 'About Us', description: 'Learn about our company history and leadership' },
    { href: '/sectors', label: 'Our Sectors', description: 'Explore our diverse business portfolio' },
    { href: '/contact', label: 'Contact', description: 'Get in touch with our team' },
  ]

  const sectorPages = [
    { href: '/sectors#real-estate', label: 'Real Estate', description: 'Property development and management' },
    { href: '/sectors#fashion-retail', label: 'Fashion & Retail', description: 'Fashion and retail operations' },
    { href: '/sectors#oil-gas', label: 'Oil & Gas', description: 'Energy sector operations' },
    { href: '/sectors#automotive', label: 'Automotive', description: 'Automotive services and solutions' },
    { href: '/sectors#transportation', label: 'Transportation', description: 'Logistics and transportation services' },
    { href: '/sectors#construction', label: 'Construction', description: 'Construction and infrastructure projects' },
  ]

  const legalPages = [
    { href: '/privacy', label: 'Privacy Policy', description: 'Our privacy policy and data protection' },
    { href: '/terms', label: 'Terms of Service', description: 'Terms and conditions of service' },
    { href: '/sitemap', label: 'Sitemap', description: 'Complete site navigation map' },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-green to-emerald-700 text-white pt-32 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex items-center justify-center mb-6">
              <MapPin className="w-12 h-12 text-primary-gold" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Site Map
            </h1>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto">
              Navigate through all pages and sections of the Ikehap Multigold Limited website
            </p>
          </div>
        </div>
      </section>

      {/* Sitemap Content */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            
            {/* Main Pages */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-primary-green mb-6 flex items-center">
                <ExternalLink className="w-6 h-6 mr-3 text-primary-gold" />
                Main Pages
              </h2>
              <div className="space-y-4">
                {mainPages.map((page, index) => (
                  <div key={index} className="border-b border-gray-100 pb-4 last:border-b-0">
                    <Link 
                      href={page.href}
                      className="text-lg font-semibold text-primary-green hover:text-primary-gold transition-colors duration-300 block"
                    >
                      {page.label}
                    </Link>
                    <p className="text-gray-600 text-sm mt-1">{page.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Sector Pages */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-primary-green mb-6 flex items-center">
                <ExternalLink className="w-6 h-6 mr-3 text-primary-gold" />
                Business Sectors
              </h2>
              <div className="space-y-4">
                {sectorPages.map((sector, index) => (
                  <div key={index} className="border-b border-gray-100 pb-4 last:border-b-0">
                    <Link 
                      href={sector.href}
                      className="text-lg font-semibold text-primary-green hover:text-primary-gold transition-colors duration-300 block"
                    >
                      {sector.label}
                    </Link>
                    <p className="text-gray-600 text-sm mt-1">{sector.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Legal Pages */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-primary-green mb-6 flex items-center">
                <ExternalLink className="w-6 h-6 mr-3 text-primary-gold" />
                Legal & Info
              </h2>
              <div className="space-y-4">
                {legalPages.map((legal, index) => (
                  <div key={index} className="border-b border-gray-100 pb-4 last:border-b-0">
                    <Link 
                      href={legal.href}
                      className="text-lg font-semibold text-primary-green hover:text-primary-gold transition-colors duration-300 block"
                    >
                      {legal.label}
                    </Link>
                    <p className="text-gray-600 text-sm mt-1">{legal.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Additional Info */}
          <div className="mt-16 bg-gradient-to-r from-primary-green to-emerald-700 rounded-xl p-8 text-white text-center">
            <h3 className="text-2xl font-bold mb-4">Need Help Finding Something?</h3>
            <p className="text-gray-200 mb-6 max-w-2xl mx-auto">
              If you can't find what you're looking for, please don't hesitate to contact us. 
              Our team is here to help you navigate our services and find the information you need.
            </p>
            <Link 
              href="/contact"
              className="inline-flex items-center px-6 py-3 bg-primary-gold text-primary-green font-semibold rounded-lg hover:bg-yellow-500 transition-colors duration-300"
            >
              Contact Us
              <ExternalLink className="w-5 h-5 ml-2" />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default SitemapPage