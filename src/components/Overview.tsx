'use client'

import { useState, useEffect, useRef } from 'react'

const Overview = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [isMounted, setIsMounted] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  useEffect(() => {
    if (!isMounted) return
    
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.3 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [isMounted])



  return (
    <section ref={sectionRef} className="py-20 bg-gray-50">
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
            Corporate Overview
          </h2>
          <p className="text-xl text-text-light max-w-3xl mx-auto leading-relaxed">
            Ikehap Multigold Limited stands as a beacon of excellence in the Nigerian business landscape, 
            with a diversified portfolio spanning multiple industries and a commitment to sustainable growth.
          </p>
        </div>



        {/* Company Description */}
        <div
          className={`bg-white rounded-2xl p-8 md:p-12 shadow-lg transition-all duration-1000 transform ${
            isVisible
              ? 'translate-y-0 opacity-100'
              : 'translate-y-10 opacity-0'
          }`}
          style={{ transitionDelay: '400ms' }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold text-primary-green mb-6">
                Our Mission
              </h3>
              <p className="text-lg text-text-light leading-relaxed mb-6">
                To create sustainable value across diverse industries through strategic investments, 
                operational excellence, and innovative solutions that benefit our stakeholders and communities.
              </p>
              <div className="flex items-center space-x-4">
                <div className="w-12 h-1 bg-primary-gold"></div>
                <span className="text-primary-green font-semibold">Excellence • Innovation • Integrity</span>
              </div>
            </div>
            <div className="bg-gradient-to-br from-primary-green to-green-700 rounded-xl p-8 text-white">
              <h4 className="text-2xl font-bold mb-4">Our Vision</h4>
              <p className="text-lg leading-relaxed">
                To be the leading diversified conglomerate in Nigeria, recognized for our commitment to 
                excellence, innovation, and sustainable business practices across all sectors.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Overview