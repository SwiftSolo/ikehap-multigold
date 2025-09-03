'use client'

import { useState, useEffect } from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { Users, Target, Eye, Award, Calendar, MapPin } from 'lucide-react'
import LazyImage from '@/components/LazyImage'

const AboutPage = () => {
  const [fadeIn, setFadeIn] = useState(false)

  useEffect(() => {
    setFadeIn(true)
  }, [])

  const leadership = [
    {
      name: 'Eze Ikechuckwu Sunday',
      position: 'Founder, Managing Director & Chief Executive Officer',
      description: 'The visionary founder and driving force behind Ikehap Multigold Limited. Eze Ikechuckwu Sunday established the company with a bold vision to create a diversified business empire that contributes to economic development. As a dynamic entrepreneur and strategic leader, he brings innovative thinking and unwavering commitment to excellence across all business ventures.',
      image: '/images/eze-ikechuckwu-sunday.jpg'
    },
    {
      name: 'Eze Happiness',
      position: 'Director',
      description: 'A strategic leader and key member of our executive team, Eze Happiness brings valuable expertise in business operations and strategic planning. Her leadership contributes significantly to our company\'s growth and operational excellence across all business sectors.',
      image: '/images/eze-happiness.jpg'
    },
    {
      name: 'Bello Oladele Taiwo',
      position: 'Consultant',
      description: 'An experienced business consultant who provides strategic advisory services to our leadership team. Bello Oladele Taiwo brings extensive industry knowledge and expertise that helps guide our business decisions and expansion strategies.',
      image: '/images/bello-oladele-taiwo.jpg'
    }
  ]

  const milestones = [
    { year: '2020', event: 'Company Founded', description: 'Eze Ikechuckwu Sunday established Ikehap Multigold Limited with a bold vision to create a diversified business conglomerate that drives economic growth.' },
    { year: '2021', event: 'Strategic Foundation', description: 'Built core business infrastructure and established key partnerships to support our multi-sector expansion strategy.' },
    { year: '2022', event: 'Multi-Sector Launch', description: 'Successfully launched operations in real estate, fashion retail, automotive, and transportation sectors under our founder\'s strategic leadership.' },
    { year: '2023', event: 'Oil & Gas Entry', description: 'Completed our diversified portfolio with strategic entry into the oil and gas sector, achieving our founder\'s vision of comprehensive industry coverage.' },
    { year: '2024', event: 'Growth & Innovation', description: 'Continuing rapid expansion and innovation across all sectors while maintaining our commitment to excellence and sustainable development.' }
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
              About <span className="text-primary-gold">Ikehap Multigold</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto">
              Building Excellence Across Industries Since 2020
            </p>
          </div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-text-dark mb-6">
                Our <span className="text-primary-gold">Story</span>
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Ikehap Multigold Limited is a dynamic new business founded by visionary entrepreneur Eze Ikechuckwu Sunday. 
                Established with the ambitious goal of creating sustainable value across multiple industries, we are rapidly 
                building a respected presence in the Nigerian business landscape through integrity, innovation, and excellence.
              </p>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                As a new and growing company, our journey represents the bold vision of our founder: to build a diversified 
                business empire that generates profit while contributing meaningfully to economic development and societal progress. 
                We are actively expanding across five major sectors, each carefully selected to maximize our collective impact and success.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <Calendar className="w-8 h-8 text-primary-gold mx-auto mb-2" />
                  <h3 className="font-semibold text-text-dark">Founded</h3>
                  <p className="text-gray-600">2020</p>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <MapPin className="w-8 h-8 text-primary-gold mx-auto mb-2" />
                  <h3 className="font-semibold text-text-dark">Headquarters</h3>
                  <p className="text-gray-600">Omu-Aran, Kwara State</p>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-primary-green to-primary-green/80 rounded-2xl p-8 text-white">
                <Award className="w-12 h-12 text-primary-gold mb-4" />
                <h3 className="text-2xl font-bold mb-4">Our Commitment</h3>
                <p className="text-gray-200 leading-relaxed">
                  We are committed to maintaining the highest standards of corporate governance, 
                  environmental responsibility, and social impact across all our business operations.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <Target className="w-12 h-12 text-primary-gold mb-6" />
              <h3 className="text-2xl font-bold text-text-dark mb-4">Our Mission</h3>
              <p className="text-gray-600 leading-relaxed">
                To create sustainable value through strategic diversification, operational excellence, 
                and innovative solutions that benefit our stakeholders, communities, and the environment 
                while maintaining the highest standards of integrity and corporate responsibility.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <Eye className="w-12 h-12 text-primary-gold mb-6" />
              <h3 className="text-2xl font-bold text-text-dark mb-4">Our Vision</h3>
              <p className="text-gray-600 leading-relaxed">
                To be the leading diversified conglomerate in Africa, recognized for our commitment to 
                excellence, innovation, and sustainable development across all sectors of our operation, 
                while contributing to economic growth and societal advancement.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-text-dark mb-4">
              Our <span className="text-primary-gold">Leadership</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Meet the visionary leaders driving our success across all business sectors
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {leadership.map((leader, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="h-64 relative">
                  <LazyImage
                    src={leader.image}
                    alt={`${leader.name} - ${leader.position}`}
                    className={`w-full h-full ${
                      leader.name === 'Bello Oladele Taiwo' 
                        ? '[&>img]:object-[center_20%]' 
                        : ''
                    }`}
                    priority={index === 0} // Prioritize loading the CEO image
                    onError={() => {
                      // Fallback to placeholder if image fails to load
                      console.log(`Failed to load image for ${leader.name}`);
                    }}
                  />
                  {/* Fallback placeholder overlay for missing images */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary-green to-primary-green/80 flex items-center justify-center opacity-0 hover:opacity-20 transition-opacity duration-300">
                    <Users className="w-24 h-24 text-white/50" />
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-text-dark dark:text-white mb-2">{leader.name}</h3>
                  <p className="text-primary-gold font-medium mb-4">{leader.position}</p>
                  <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">{leader.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Company Timeline */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-text-dark mb-4">
              Our <span className="text-primary-gold">Journey</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Key milestones in our growth and development
            </p>
          </div>
          
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-primary-gold"></div>
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div key={index} className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                    <div className="bg-white rounded-lg p-6 shadow-lg">
                      <h3 className="text-2xl font-bold text-primary-gold mb-2">{milestone.year}</h3>
                      <h4 className="text-lg font-semibold text-text-dark mb-2">{milestone.event}</h4>
                      <p className="text-gray-600">{milestone.description}</p>
                    </div>
                  </div>
                  <div className="relative z-10">
                    <div className="w-4 h-4 bg-primary-gold rounded-full border-4 border-white shadow-lg"></div>
                  </div>
                  <div className="w-1/2"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default AboutPage