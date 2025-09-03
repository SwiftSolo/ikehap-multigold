'use client'

import { useState, useEffect } from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock,
  Send,
  User,
  MessageSquare,
  Building2,
  CheckCircle
} from 'lucide-react'

const ContactPage = () => {
  const [fadeIn, setFadeIn] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    subject: '',
    message: '',
    sector: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  useEffect(() => {
    setFadeIn(true)
  }, [])

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    setIsSubmitting(false)
    setIsSubmitted(true)
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false)
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        subject: '',
        message: '',
        sector: ''
      })
    }, 3000)
  }

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Our Location',
      details: ['1 Oro-Ago Road', 'Opposite Post Office', 'Omu-Aran, Kwara State, Nigeria'],
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: Phone,
      title: 'Phone Numbers',
      details: ['+234 806 650 9529', '+234 (0) 987 654 3210', 'Toll-free: 0800-IKEHAP'],
      color: 'from-green-500 to-green-600'
    },
    {
      icon: Mail,
      title: 'Email Addresses',
      details: ['info@ikehapmultigold.com', 'business@ikehapmultigold.com', 'support@ikehapmultigold.com', 'ikehapmultigold@gmail.com'],
      color: 'from-purple-500 to-purple-600'
    },
    {
      icon: Clock,
      title: 'Business Hours',
      details: ['Monday - Friday: 8:00 AM - 6:00 PM', 'Saturday: 9:00 AM - 4:00 PM', 'Sunday: Closed'],
      color: 'from-orange-500 to-orange-600'
    }
  ]

  const sectors = [
    { value: '', label: 'Select a sector...' },
    { value: 'real-estate', label: 'Real Estate Development' },
    { value: 'fashion-retail', label: 'Fashion & Retail' },
    { value: 'oil-gas', label: 'Oil & Gas' },
    { value: 'automotive', label: 'Automotive' },
    { value: 'transportation', label: 'Transportation & Logistics' },
    { value: 'general', label: 'General Inquiry' }
  ]

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary-green to-primary-green/90 text-white py-24">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`text-center transition-all duration-1000 ${fadeIn ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Get in <span className="text-primary-gold">Touch</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto">
              Ready to Start Your Next Project? Let&apos;s Connect and Explore Opportunities
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information Cards */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactInfo.map((info, index) => {
              const Icon = info.icon
              return (
                <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                  <div className={`bg-gradient-to-r ${info.color} p-6 text-white`}>
                    <Icon className="w-8 h-8 mb-4" />
                    <h3 className="text-lg font-semibold">{info.title}</h3>
                  </div>
                  <div className="p-6">
                    {info.details.map((detail, idx) => (
                      <p key={idx} className="text-gray-600 text-sm mb-2 last:mb-0">{detail}</p>
                    ))}
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Contact Form and Map */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <div className="mb-8">
                <h2 className="text-3xl font-bold text-text-dark mb-4">
                  Send us a <span className="text-primary-gold">Message</span>
                </h2>
                <p className="text-gray-600">
                  Fill out the form below and we&apos;ll get back to you within 24 hours.
                </p>
              </div>

              {isSubmitted ? (
                <div className="text-center py-12">
                  <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-text-dark mb-2">Message Sent!</h3>
                  <p className="text-gray-600">Thank you for contacting us. We&apos;ll respond within 24 hours.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                        Full Name *
                      </label>
                      <div className="relative">
                        <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          required
                          className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-gold focus:border-transparent outline-none transition-all duration-300"
                          placeholder="Your full name"
                        />
                      </div>
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                        Email Address *
                      </label>
                      <div className="relative">
                        <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                          className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-gold focus:border-transparent outline-none transition-all duration-300"
                          placeholder="your.email@example.com"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                        Phone Number
                      </label>
                      <div className="relative">
                        <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-gold focus:border-transparent outline-none transition-all duration-300"
                          placeholder="+234 (0) 123 456 7890"
                        />
                      </div>
                    </div>
                    <div>
                      <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                        Company/Organization
                      </label>
                      <div className="relative">
                        <Building2 className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                        <input
                          type="text"
                          id="company"
                          name="company"
                          value={formData.company}
                          onChange={handleInputChange}
                          className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-gold focus:border-transparent outline-none transition-all duration-300"
                          placeholder="Your company name"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="sector" className="block text-sm font-medium text-gray-700 mb-2">
                        Sector of Interest
                      </label>
                      <select
                        id="sector"
                        name="sector"
                        value={formData.sector}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-gold focus:border-transparent outline-none transition-all duration-300"
                      >
                        {sectors.map((sector) => (
                          <option key={sector.value} value={sector.value}>
                            {sector.label}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                        Subject *
                      </label>
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-gold focus:border-transparent outline-none transition-all duration-300"
                        placeholder="Brief subject of your inquiry"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      Message *
                    </label>
                    <div className="relative">
                      <MessageSquare className="absolute left-3 top-3 text-gray-400 w-5 h-5" />
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                        rows={6}
                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-gold focus:border-transparent outline-none transition-all duration-300 resize-none"
                        placeholder="Please provide details about your inquiry, project requirements, or any questions you may have..."
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-primary-gold hover:bg-yellow-500 disabled:bg-gray-400 text-white font-semibold py-4 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 disabled:transform-none disabled:cursor-not-allowed flex items-center justify-center gap-2"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        Send Message
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>

            {/* Map and Additional Info */}
            <div className="space-y-8">
              {/* Interactive Map */}
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
                <div className="h-64 relative">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3940.6!2d5.1013!3d8.1386!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zOMKwMDgnMTkuMCJOIDXCsDA2JzA1LjAiRQ!5e0!3m2!1sen!2sng!4v1234567890123!5m2!1sen!2sng"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Ikehap Multigold Limited Location"
                  ></iframe>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-text-dark mb-2">Visit Our Office</h3>
                  <p className="text-gray-600 text-sm mb-4">
                    Located in Omu-Aran, Kwara State, our office is conveniently situated opposite the Post Office on Oro-Ago Road for easy accessibility.
                  </p>
                  <div className="flex items-center text-sm text-gray-600">
                    <MapPin className="w-4 h-4 mr-2 text-primary-gold" />
                    1 Oro-Ago Road, Opposite Post Office, Omu-Aran, Kwara State, Nigeria
                  </div>
                </div>
              </div>

              {/* Quick Contact */}
              <div className="bg-gradient-to-br from-primary-green to-primary-green/90 rounded-2xl p-8 text-white">
                <h3 className="text-2xl font-bold mb-4">Need Immediate Assistance?</h3>
                <p className="text-gray-200 mb-6">
                  For urgent matters or immediate assistance, don&apos;t hesitate to call us directly.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center">
                    <Phone className="w-5 h-5 mr-3 text-primary-gold" />
                    <span className="font-medium">+234 806 650 9529</span>
                  </div>
                  <div className="flex items-center">
                    <Mail className="w-5 h-5 mr-3 text-primary-gold" />
                    <span className="font-medium">info@ikehapmultigold.com</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default ContactPage