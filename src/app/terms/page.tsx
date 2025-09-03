'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Scale, Shield, FileText, AlertCircle } from 'lucide-react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const TermsPage = () => {
  const [fadeIn, setFadeIn] = useState(false)

  useEffect(() => {
    setFadeIn(true)
  }, [])

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-green to-emerald-700 text-white pt-32 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`text-center transition-all duration-1000 ${fadeIn ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="flex items-center justify-center mb-6">
              <Scale className="w-12 h-12 text-primary-gold" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Terms of Service
            </h1>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto">
              Please read these terms and conditions carefully before using our services
            </p>
            <p className="text-sm text-gray-300 mt-4">
              Last updated: January 2024
            </p>
          </div>
        </div>
      </section>

      {/* Terms Content */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`transition-all duration-1000 delay-300 ${fadeIn ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            
            {/* Introduction */}
            <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
              <div className="flex items-center mb-6">
                <FileText className="w-8 h-8 text-primary-gold mr-4" />
                <h2 className="text-2xl font-bold text-primary-green">Introduction</h2>
              </div>
              <p className="text-gray-700 leading-relaxed mb-4">
                Welcome to Ikehap Multigold Limited. These Terms of Service ("Terms") govern your use of our website, 
                services, and any related applications or platforms operated by Ikehap Multigold Limited ("Company", "we", "us", or "our").
              </p>
              <p className="text-gray-700 leading-relaxed">
                By accessing or using our services, you agree to be bound by these Terms. If you disagree with any part 
                of these terms, then you may not access our services.
              </p>
            </div>

            {/* Acceptance of Terms */}
            <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
              <h3 className="text-xl font-bold text-primary-green mb-4">1. Acceptance of Terms</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                By accessing and using this website and our services, you accept and agree to be bound by the terms 
                and provision of this agreement.
              </p>
              <p className="text-gray-700 leading-relaxed">
                If you do not agree to abide by the above, please do not use this service.
              </p>
            </div>

            {/* Use License */}
            <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
              <h3 className="text-xl font-bold text-primary-green mb-4">2. Use License</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Permission is granted to temporarily download one copy of the materials on Ikehap Multigold Limited's 
                website for personal, non-commercial transitory viewing only.
              </p>
              <div className="bg-gray-50 p-4 rounded-lg mb-4">
                <p className="text-gray-700 font-semibold mb-2">This license shall automatically terminate if you violate any of these restrictions and may be terminated by us at any time. Upon terminating your viewing of these materials or upon the termination of this license, you must destroy any downloaded materials in your possession whether in electronic or printed format.</p>
              </div>
              <p className="text-gray-700 leading-relaxed">Under this license you may not:</p>
              <ul className="list-disc list-inside text-gray-700 mt-2 space-y-1">
                <li>Modify or copy the materials</li>
                <li>Use the materials for any commercial purpose or for any public display</li>
                <li>Attempt to reverse engineer any software contained on the website</li>
                <li>Remove any copyright or other proprietary notations from the materials</li>
              </ul>
            </div>

            {/* Services */}
            <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
              <h3 className="text-xl font-bold text-primary-green mb-4">3. Our Services</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Ikehap Multigold Limited operates across multiple business sectors including:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Real Estate Development and Management</li>
                <li>Fashion and Retail Operations</li>
                <li>Oil and Gas Exploration and Production</li>
                <li>Automotive Services and Solutions</li>
                <li>Transportation and Logistics</li>
                <li>Construction and Infrastructure</li>
              </ul>
              <p className="text-gray-700 leading-relaxed mt-4">
                We reserve the right to modify, suspend, or discontinue any aspect of our services at any time without notice.
              </p>
            </div>

            {/* User Responsibilities */}
            <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
              <h3 className="text-xl font-bold text-primary-green mb-4">4. User Responsibilities</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                When using our services, you agree to:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Provide accurate and complete information</li>
                <li>Maintain the confidentiality of your account information</li>
                <li>Use our services in compliance with all applicable laws and regulations</li>
                <li>Not engage in any activity that could harm our systems or other users</li>
                <li>Respect intellectual property rights</li>
              </ul>
            </div>

            {/* Privacy and Data Protection */}
            <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
              <h3 className="text-xl font-bold text-primary-green mb-4">5. Privacy and Data Protection</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Your privacy is important to us. Our collection and use of personal information is governed by our 
                <Link href="/privacy" className="text-primary-gold hover:underline mx-1">Privacy Policy</Link>, 
                which is incorporated into these Terms by reference.
              </p>
              <p className="text-gray-700 leading-relaxed">
                By using our services, you consent to the collection, use, and disclosure of your information as 
                described in our Privacy Policy.
              </p>
            </div>

            {/* Limitation of Liability */}
            <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
              <h3 className="text-xl font-bold text-primary-green mb-4">6. Limitation of Liability</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                In no event shall Ikehap Multigold Limited or its suppliers be liable for any damages (including, 
                without limitation, damages for loss of data or profit, or due to business interruption) arising out 
                of the use or inability to use the materials on our website.
              </p>
              <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded">
                <div className="flex items-center">
                  <AlertCircle className="w-5 h-5 text-yellow-600 mr-2" />
                  <p className="text-yellow-800 font-semibold">Important Notice</p>
                </div>
                <p className="text-yellow-700 mt-2">
                  This limitation applies even if Ikehap Multigold Limited or its authorized representative has 
                  been notified orally or in writing of the possibility of such damage.
                </p>
              </div>
            </div>

            {/* Governing Law */}
            <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
              <h3 className="text-xl font-bold text-primary-green mb-4">7. Governing Law</h3>
              <p className="text-gray-700 leading-relaxed">
                These Terms and Conditions are governed by and construed in accordance with the laws of Nigeria, 
                and you irrevocably submit to the exclusive jurisdiction of the courts in that state or location.
              </p>
            </div>

            {/* Modifications */}
            <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
              <h3 className="text-xl font-bold text-primary-green mb-4">8. Modifications to Terms</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Ikehap Multigold Limited may revise these Terms of Service at any time without notice. By using 
                this website, you are agreeing to be bound by the then current version of these Terms of Service.
              </p>
              <p className="text-gray-700 leading-relaxed">
                We will notify users of any material changes to these terms through our website or other 
                appropriate communication channels.
              </p>
            </div>

            {/* Contact Information */}
            <div className="bg-gradient-to-r from-primary-green to-emerald-700 rounded-xl p-8 text-white">
              <div className="flex items-center mb-4">
                <Shield className="w-8 h-8 text-primary-gold mr-4" />
                <h3 className="text-xl font-bold">Questions About These Terms?</h3>
              </div>
              <p className="text-gray-200 mb-6">
                If you have any questions about these Terms of Service, please contact us:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <p className="font-semibold text-primary-gold mb-2">Email:</p>
                  <p className="text-gray-200">info@ikehapmultigold.com</p>
                </div>
                <div>
                  <p className="font-semibold text-primary-gold mb-2">Phone:</p>
                  <p className="text-gray-200">+234 806 650 9529</p>
                </div>
                <div className="md:col-span-2">
                  <p className="font-semibold text-primary-gold mb-2">Address:</p>
                  <p className="text-gray-200">
                    1 Oro-Ago Road, Opposite Post Office<br />
                    Omu-Aran, Kwara State, Nigeria
                  </p>
                </div>
              </div>
              <div className="mt-6">
                <Link 
                  href="/contact"
                  className="inline-flex items-center px-6 py-3 bg-primary-gold text-primary-green font-semibold rounded-lg hover:bg-yellow-500 transition-colors duration-300"
                >
                  Contact Us
                  <FileText className="w-5 h-5 ml-2" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default TermsPage