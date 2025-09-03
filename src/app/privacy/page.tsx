'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Shield, Eye, Lock, Database, UserCheck, AlertTriangle } from 'lucide-react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const PrivacyPage = () => {
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
              <Shield className="w-12 h-12 text-primary-gold" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Privacy Policy
            </h1>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto">
              Your privacy is important to us. Learn how we collect, use, and protect your personal information.
            </p>
            <p className="text-sm text-gray-300 mt-4">
              Last updated: January 2024
            </p>
          </div>
        </div>
      </section>

      {/* Privacy Content */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`transition-all duration-1000 delay-300 ${fadeIn ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            
            {/* Introduction */}
            <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
              <div className="flex items-center mb-6">
                <Eye className="w-8 h-8 text-primary-gold mr-4" />
                <h2 className="text-2xl font-bold text-primary-green">Introduction</h2>
              </div>
              <p className="text-gray-700 leading-relaxed mb-4">
                At Ikehap Multigold Limited, we are committed to protecting your privacy and ensuring the security 
                of your personal information. This Privacy Policy explains how we collect, use, disclose, and 
                safeguard your information when you visit our website or use our services.
              </p>
              <p className="text-gray-700 leading-relaxed">
                By using our website and services, you consent to the data practices described in this policy.
              </p>
            </div>

            {/* Information We Collect */}
            <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
              <div className="flex items-center mb-6">
                <Database className="w-8 h-8 text-primary-gold mr-4" />
                <h3 className="text-xl font-bold text-primary-green">1. Information We Collect</h3>
              </div>
              
              <div className="space-y-6">
                <div>
                  <h4 className="text-lg font-semibold text-gray-800 mb-3">Personal Information</h4>
                  <p className="text-gray-700 leading-relaxed mb-3">
                    We may collect personal information that you voluntarily provide to us when you:
                  </p>
                  <ul className="list-disc list-inside text-gray-700 space-y-1">
                    <li>Contact us through our website or email</li>
                    <li>Request information about our services</li>
                    <li>Subscribe to our newsletters or updates</li>
                    <li>Engage with our business services</li>
                    <li>Apply for employment opportunities</li>
                  </ul>
                  <p className="text-gray-700 leading-relaxed mt-3">
                    This information may include your name, email address, phone number, company name, 
                    job title, and any other information you choose to provide.
                  </p>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-gray-800 mb-3">Automatically Collected Information</h4>
                  <p className="text-gray-700 leading-relaxed mb-3">
                    When you visit our website, we may automatically collect certain information about your 
                    device and usage patterns, including:
                  </p>
                  <ul className="list-disc list-inside text-gray-700 space-y-1">
                    <li>IP address and location data</li>
                    <li>Browser type and version</li>
                    <li>Operating system</li>
                    <li>Pages visited and time spent on our site</li>
                    <li>Referring website addresses</li>
                    <li>Device identifiers and characteristics</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* How We Use Information */}
            <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
              <h3 className="text-xl font-bold text-primary-green mb-4">2. How We Use Your Information</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                We use the information we collect for various purposes, including:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-800 mb-2">Service Delivery</h4>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• Provide and maintain our services</li>
                    <li>• Process your requests and inquiries</li>
                    <li>• Send service-related communications</li>
                  </ul>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-800 mb-2">Communication</h4>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• Respond to your questions and comments</li>
                    <li>• Send newsletters and updates</li>
                    <li>• Provide customer support</li>
                  </ul>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-800 mb-2">Improvement</h4>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• Analyze website usage and performance</li>
                    <li>• Improve our services and user experience</li>
                    <li>• Develop new features and offerings</li>
                  </ul>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-800 mb-2">Legal Compliance</h4>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• Comply with legal obligations</li>
                    <li>• Protect our rights and interests</li>
                    <li>• Prevent fraud and abuse</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Information Sharing */}
            <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
              <h3 className="text-xl font-bold text-primary-green mb-4">3. Information Sharing and Disclosure</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                We do not sell, trade, or otherwise transfer your personal information to third parties without 
                your consent, except in the following circumstances:
              </p>
              <div className="space-y-4">
                <div className="border-l-4 border-primary-gold pl-4">
                  <h4 className="font-semibold text-gray-800 mb-2">Service Providers</h4>
                  <p className="text-gray-700 text-sm">
                    We may share information with trusted third-party service providers who assist us in 
                    operating our website and conducting our business, provided they agree to keep this 
                    information confidential.
                  </p>
                </div>
                <div className="border-l-4 border-primary-gold pl-4">
                  <h4 className="font-semibold text-gray-800 mb-2">Legal Requirements</h4>
                  <p className="text-gray-700 text-sm">
                    We may disclose your information when required by law or in response to valid requests 
                    by public authorities, such as a court or government agency.
                  </p>
                </div>
                <div className="border-l-4 border-primary-gold pl-4">
                  <h4 className="font-semibold text-gray-800 mb-2">Business Transfers</h4>
                  <p className="text-gray-700 text-sm">
                    In the event of a merger, acquisition, or sale of assets, your information may be 
                    transferred as part of the transaction.
                  </p>
                </div>
              </div>
            </div>

            {/* Data Security */}
            <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
              <div className="flex items-center mb-6">
                <Lock className="w-8 h-8 text-primary-gold mr-4" />
                <h3 className="text-xl font-bold text-primary-green">4. Data Security</h3>
              </div>
              <p className="text-gray-700 leading-relaxed mb-4">
                We implement appropriate technical and organizational security measures to protect your 
                personal information against unauthorized access, alteration, disclosure, or destruction.
              </p>
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                <div className="flex items-center mb-2">
                  <AlertTriangle className="w-5 h-5 text-blue-600 mr-2" />
                  <h4 className="font-semibold text-blue-800">Security Measures Include:</h4>
                </div>
                <ul className="text-blue-700 text-sm space-y-1">
                  <li>• Encryption of data in transit and at rest</li>
                  <li>• Regular security assessments and updates</li>
                  <li>• Access controls and authentication procedures</li>
                  <li>• Employee training on data protection</li>
                  <li>• Incident response and breach notification procedures</li>
                </ul>
              </div>
              <p className="text-gray-700 leading-relaxed mt-4">
                However, no method of transmission over the internet or electronic storage is 100% secure. 
                While we strive to use commercially acceptable means to protect your information, we cannot 
                guarantee its absolute security.
              </p>
            </div>

            {/* Your Rights */}
            <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
              <div className="flex items-center mb-6">
                <UserCheck className="w-8 h-8 text-primary-gold mr-4" />
                <h3 className="text-xl font-bold text-primary-green">5. Your Rights and Choices</h3>
              </div>
              <p className="text-gray-700 leading-relaxed mb-4">
                You have certain rights regarding your personal information:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                  <h4 className="font-semibold text-green-800 mb-2">Access and Portability</h4>
                  <p className="text-green-700 text-sm">
                    Request access to your personal information and receive a copy in a structured format.
                  </p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200">
                  <h4 className="font-semibold text-yellow-800 mb-2">Correction</h4>
                  <p className="text-yellow-700 text-sm">
                    Request correction of inaccurate or incomplete personal information.
                  </p>
                </div>
                <div className="bg-red-50 p-4 rounded-lg border border-red-200">
                  <h4 className="font-semibold text-red-800 mb-2">Deletion</h4>
                  <p className="text-red-700 text-sm">
                    Request deletion of your personal information, subject to legal requirements.
                  </p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg border border-purple-200">
                  <h4 className="font-semibold text-purple-800 mb-2">Opt-out</h4>
                  <p className="text-purple-700 text-sm">
                    Unsubscribe from marketing communications at any time.
                  </p>
                </div>
              </div>
            </div>

            {/* Cookies and Tracking */}
            <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
              <h3 className="text-xl font-bold text-primary-green mb-4">6. Cookies and Tracking Technologies</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Our website may use cookies and similar tracking technologies to enhance your browsing 
                experience and analyze website traffic.
              </p>
              <div className="bg-gray-50 p-4 rounded-lg mb-4">
                <h4 className="font-semibold text-gray-800 mb-2">Types of Cookies We Use:</h4>
                <ul className="text-gray-700 text-sm space-y-1">
                  <li>• <strong>Essential Cookies:</strong> Necessary for website functionality</li>
                  <li>• <strong>Analytics Cookies:</strong> Help us understand how visitors use our site</li>
                  <li>• <strong>Preference Cookies:</strong> Remember your settings and preferences</li>
                </ul>
              </div>
              <p className="text-gray-700 leading-relaxed">
                You can control cookie settings through your browser preferences. However, disabling 
                certain cookies may affect website functionality.
              </p>
            </div>

            {/* Data Retention */}
            <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
              <h3 className="text-xl font-bold text-primary-green mb-4">7. Data Retention</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                We retain your personal information only for as long as necessary to fulfill the purposes 
                outlined in this Privacy Policy, unless a longer retention period is required or permitted by law.
              </p>
              <p className="text-gray-700 leading-relaxed">
                When we no longer need your personal information, we will securely delete or anonymize it 
                in accordance with our data retention policies.
              </p>
            </div>

            {/* International Transfers */}
            <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
              <h3 className="text-xl font-bold text-primary-green mb-4">8. International Data Transfers</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Your information may be transferred to and processed in countries other than your country 
                of residence. We ensure that such transfers are conducted in accordance with applicable 
                data protection laws and with appropriate safeguards in place.
              </p>
            </div>

            {/* Children's Privacy */}
            <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
              <h3 className="text-xl font-bold text-primary-green mb-4">9. Children's Privacy</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Our services are not intended for children under the age of 13. We do not knowingly 
                collect personal information from children under 13. If we become aware that we have 
                collected personal information from a child under 13, we will take steps to delete such information.
              </p>
            </div>

            {/* Changes to Privacy Policy */}
            <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
              <h3 className="text-xl font-bold text-primary-green mb-4">10. Changes to This Privacy Policy</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                We may update this Privacy Policy from time to time to reflect changes in our practices 
                or for other operational, legal, or regulatory reasons.
              </p>
              <p className="text-gray-700 leading-relaxed">
                We will notify you of any material changes by posting the new Privacy Policy on this page 
                and updating the "Last updated" date. We encourage you to review this Privacy Policy 
                periodically to stay informed about how we protect your information.
              </p>
            </div>

            {/* Contact Information */}
            <div className="bg-gradient-to-r from-primary-green to-emerald-700 rounded-xl p-8 text-white">
              <div className="flex items-center mb-4">
                <Shield className="w-8 h-8 text-primary-gold mr-4" />
                <h3 className="text-xl font-bold">Contact Us About Privacy</h3>
              </div>
              <p className="text-gray-200 mb-6">
                If you have any questions, concerns, or requests regarding this Privacy Policy or our 
                data practices, please contact us:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <p className="font-semibold text-primary-gold mb-2">Email:</p>
                  <p className="text-gray-200">privacy@ikehapmultigold.com</p>
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
              <div className="mt-6 flex flex-col sm:flex-row gap-4">
                <Link 
                  href="/contact"
                  className="inline-flex items-center px-6 py-3 bg-primary-gold text-primary-green font-semibold rounded-lg hover:bg-yellow-500 transition-colors duration-300"
                >
                  Contact Us
                  <Shield className="w-5 h-5 ml-2" />
                </Link>
                <Link 
                  href="/terms"
                  className="inline-flex items-center px-6 py-3 border-2 border-white text-white hover:bg-white hover:text-primary-green font-semibold rounded-lg transition-colors duration-300"
                >
                  View Terms of Service
                  <Eye className="w-5 h-5 ml-2" />
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

export default PrivacyPage