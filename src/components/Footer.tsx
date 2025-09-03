'use client'

import Link from 'next/link'
import Image from 'next/image'
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock,
  Facebook,
  Twitter,
  Instagram,
  ArrowUp
} from 'lucide-react'
import { useState, useEffect } from 'react'

const Footer = () => {
  const [showBackToTop, setShowBackToTop] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 300)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const quickLinks = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About Us' },
    { href: '/sectors', label: 'Our Sectors' },
    { href: '/contact', label: 'Contact' },
  ]

  const sectors = [
    { href: '/sectors#real-estate', label: 'Real Estate' },
    { href: '/sectors#fashion-retail', label: 'Fashion & Retail' },
    { href: '/sectors#oil-gas', label: 'Oil & Gas' },
    { href: '/sectors#automotive', label: 'Automotive' },
    { href: '/sectors#transportation', label: 'Transportation' },
    { href: '/sectors#construction', label: 'Construction' },
  ]

  const socialLinks = [
    { icon: Facebook, href: 'https://facebook.com/Ikehapmultigold', label: 'Facebook' },
    { icon: Twitter, href: 'https://twitter.com/ikehapmultigoldlimited', label: 'X' },
    { icon: Instagram, href: 'https://instagram.com/ikehapmultigoldlimited', label: 'Instagram' },
    { icon: Twitter, href: 'https://tiktok.com/@ikehapmultigoldlimited', label: 'TikTok' },
  ]

  return (
    <footer className="bg-primary-green text-white relative">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="mb-6">
              <div className="flex items-center space-x-3 mb-4">
                <Image
                  src="/images/ikehap-logo.svg"
                  alt="Ikehap Multigold Limited Logo"
                  width={280}
                  height={100}
                  className="h-20 w-auto filter brightness-0 invert font-bold"
                  style={{ filter: 'brightness(0) invert(1) contrast(1.95) saturate(1.8)' }}
                />
              </div>
              <p className="text-primary-gold font-bold text-lg">RC: 8308710</p>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              A diversified conglomerate committed to excellence across multiple industries, 
              driving innovation and creating sustainable value for all stakeholders.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => {
                const Icon = social.icon
                return (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-primary-gold hover:text-primary-green transition-all duration-300 transform hover:scale-110"
                    aria-label={social.label}
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                )
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-primary-gold">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-primary-gold transition-colors duration-300 flex items-center group"
                  >
                    <span className="w-0 group-hover:w-2 h-0.5 bg-primary-gold transition-all duration-300 mr-0 group-hover:mr-2"></span>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Our Sectors */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-primary-gold">Our Sectors</h4>
            <ul className="space-y-3">
              {sectors.map((sector, index) => (
                <li key={index}>
                  <Link
                    href={sector.href}
                    className="text-gray-300 hover:text-primary-gold transition-colors duration-300 flex items-center group"
                  >
                    <span className="w-0 group-hover:w-2 h-0.5 bg-primary-gold transition-all duration-300 mr-0 group-hover:mr-2"></span>
                    {sector.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-primary-gold">Contact Info</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-primary-gold mt-1 flex-shrink-0" />
                <div>
                  <p className="text-gray-300 leading-relaxed">
                    1 Oro-Ago Road Opposite Post Office,<br />
                    Omu-Aran, Kwara State, Nigeria
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-primary-gold flex-shrink-0" />
                <p className="text-gray-300">+234 806 650 9529</p>
              </div>
              <div className="flex items-start space-x-3">
                <Mail className="w-5 h-5 text-primary-gold mt-1 flex-shrink-0" />
                <div className="space-y-1">
                  <p className="text-gray-300">info@ikehapmultigold.com</p>
                  <p className="text-gray-300">ikehapmultigold@gmail.com</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Clock className="w-5 h-5 text-primary-gold mt-1 flex-shrink-0" />
                <div>
                  <p className="text-gray-300">
                    Mon - Fri: 8:00 AM - 6:00 PM<br />
                    Sat: 9:00 AM - 4:00 PM
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} Ikehap Multigold Limited. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              <Link href="/privacy" className="text-gray-400 hover:text-primary-gold transition-colors duration-300">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-gray-400 hover:text-primary-gold transition-colors duration-300">
                Terms of Service
              </Link>
              <Link href="/sitemap" className="text-gray-400 hover:text-primary-gold transition-colors duration-300">
                Sitemap
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Back to Top Button */}
      {showBackToTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 w-12 h-12 bg-primary-gold hover:bg-yellow-500 text-primary-green rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 z-50 flex items-center justify-center"
          aria-label="Back to top"
        >
          <ArrowUp className="w-6 h-6" />
        </button>
      )}
    </footer>
  )
}

export default Footer