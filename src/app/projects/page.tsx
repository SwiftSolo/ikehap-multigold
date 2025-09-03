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
  Calendar,
  MapPin,
  DollarSign,
  Filter,
  Search
} from 'lucide-react'

const ProjectsPage = () => {
  const [fadeIn, setFadeIn] = useState(false)
  const [activeFilter, setActiveFilter] = useState('all')
  const [searchTerm, setSearchTerm] = useState('')

  useEffect(() => {
    setFadeIn(true)
  }, [])

  const projects = [
    {
      id: 1,
      title: 'Lagos Business District Tower',
      category: 'real-estate',
      sector: 'Real Estate',
      icon: Building2,
      status: 'completed',
      location: 'Lagos, Nigeria',
      value: '₦2.5B',
      duration: '24 months',
      year: '2023',
      description: 'A 20-story mixed-use development featuring premium office spaces, retail outlets, and luxury apartments in the heart of Lagos business district.',
      features: ['20 Floors', '150 Office Units', '50 Apartments', 'Retail Space'],
      image: '/images/project-1.jpg'
    },
    {
      id: 2,
      title: 'Fashion Hub Retail Chain',
      category: 'fashion-retail',
      sector: 'Fashion & Retail',
      icon: ShoppingBag,
      status: 'ongoing',
      location: 'Multiple Cities',
      value: '₦1.8B',
      duration: '18 months',
      year: '2024',
      description: 'Expansion of premium fashion retail outlets across major Nigerian cities, featuring modern store designs and integrated e-commerce platforms.',
      features: ['12 Store Locations', 'E-commerce Platform', 'Premium Brands', 'Modern Design'],
      image: '/images/project-2.jpg'
    },
    {
      id: 3,
      title: 'Delta Oil Field Development',
      category: 'oil-gas',
      sector: 'Oil & Gas',
      icon: Fuel,
      status: 'completed',
      location: 'Delta State, Nigeria',
      value: '₦4.2B',
      duration: '36 months',
      year: '2022',
      description: 'Strategic oil field development project including exploration, drilling, and production infrastructure in the Niger Delta region.',
      features: ['5 Production Wells', 'Processing Facility', 'Pipeline Network', 'Environmental Compliance'],
      image: '/images/project-3.jpg'
    },
    {
      id: 4,
      title: 'Auto Service Center Network',
      category: 'automotive',
      sector: 'Automotive',
      icon: Car,
      status: 'ongoing',
      location: 'Abuja & Lagos',
      value: '₦1.5B',
      duration: '12 months',
      year: '2024',
      description: 'Establishment of state-of-the-art automotive service centers providing comprehensive vehicle maintenance and repair services.',
      features: ['6 Service Centers', 'Modern Equipment', 'Certified Technicians', '24/7 Support'],
      image: '/images/project-4.jpg'
    },
    {
      id: 5,
      title: 'Interstate Logistics Hub',
      category: 'transportation',
      sector: 'Transportation',
      icon: Truck,
      status: 'planning',
      location: 'Kano, Nigeria',
      value: '₦2.8B',
      duration: '30 months',
      year: '2025',
      description: 'Development of a major logistics and transportation hub to facilitate interstate commerce and improve supply chain efficiency.',
      features: ['Warehouse Complex', 'Fleet Management', 'Loading Facilities', 'Technology Integration'],
      image: '/images/project-5.jpg'
    },
    {
      id: 6,
      title: 'Residential Estate Phase II',
      category: 'real-estate',
      sector: 'Real Estate',
      icon: Building2,
      status: 'ongoing',
      location: 'Port Harcourt, Nigeria',
      value: '₦3.5B',
      duration: '28 months',
      year: '2024',
      description: 'Second phase of luxury residential estate development featuring modern homes with smart technology and sustainable design.',
      features: ['100 Housing Units', 'Smart Home Technology', 'Recreation Center', 'Green Spaces'],
      image: '/images/project-6.jpg'
    }
  ]

  const categories = [
    { id: 'all', label: 'All Projects', count: projects.length },
    { id: 'real-estate', label: 'Real Estate', count: projects.filter(p => p.category === 'real-estate').length },
    { id: 'fashion-retail', label: 'Fashion & Retail', count: projects.filter(p => p.category === 'fashion-retail').length },
    { id: 'oil-gas', label: 'Oil & Gas', count: projects.filter(p => p.category === 'oil-gas').length },
    { id: 'automotive', label: 'Automotive', count: projects.filter(p => p.category === 'automotive').length },
    { id: 'transportation', label: 'Transportation', count: projects.filter(p => p.category === 'transportation').length }
  ]

  const statusColors = {
    completed: 'bg-green-100 text-green-800',
    ongoing: 'bg-blue-100 text-blue-800',
    planning: 'bg-yellow-100 text-yellow-800'
  }

  const filteredProjects = projects.filter(project => {
    const matchesFilter = activeFilter === 'all' || project.category === activeFilter
    const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.sector.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.location.toLowerCase().includes(searchTerm.toLowerCase())
    return matchesFilter && matchesSearch
  })

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary-green to-primary-green/90 text-white py-24">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`text-center transition-all duration-1000 ${fadeIn ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Our <span className="text-primary-gold">Projects</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto">
              Showcasing Excellence Across Our Diversified Portfolio
            </p>
          </div>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-8 bg-gray-50 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
            {/* Search Bar */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search projects..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-full focus:ring-2 focus:ring-primary-gold focus:border-transparent outline-none transition-all duration-300"
              />
            </div>

            {/* Filter Tabs */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveFilter(category.id)}
                  className={`px-4 py-2 rounded-full font-medium transition-all duration-300 flex items-center gap-2 ${
                    activeFilter === category.id
                      ? 'bg-primary-gold text-white shadow-lg'
                      : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-200'
                  }`}
                >
                  {category.label}
                  <span className={`text-xs px-2 py-1 rounded-full ${
                    activeFilter === category.id ? 'bg-white/20' : 'bg-gray-200'
                  }`}>
                    {category.count}
                  </span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredProjects.length === 0 ? (
            <div className="text-center py-16">
              <Filter className="w-16 h-16 text-gray-300 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-600 mb-2">No projects found</h3>
              <p className="text-gray-500">Try adjusting your search or filter criteria</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((project) => {
                const Icon = project.icon
                return (
                  <div
                    key={project.id}
                    className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
                  >
                    {/* Project Image Placeholder */}
                    <div className="h-48 bg-gradient-to-br from-primary-green to-primary-green/80 flex items-center justify-center relative">
                      <Icon className="w-16 h-16 text-white/50" />
                      <div className="absolute top-4 right-4">
                        <span className={`px-3 py-1 rounded-full text-xs font-medium capitalize ${statusColors[project.status as keyof typeof statusColors]}`}>
                          {project.status}
                        </span>
                      </div>
                    </div>

                    {/* Project Content */}
                    <div className="p-6">
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-sm font-medium text-primary-gold">{project.sector}</span>
                        <span className="text-sm text-gray-500">{project.year}</span>
                      </div>
                      
                      <h3 className="text-xl font-bold text-text-dark mb-3">{project.title}</h3>
                      <p className="text-gray-600 text-sm mb-4 leading-relaxed">{project.description}</p>

                      {/* Project Details */}
                      <div className="space-y-2 mb-4">
                        <div className="flex items-center text-sm text-gray-600">
                          <MapPin className="w-4 h-4 mr-2 text-primary-gold" />
                          {project.location}
                        </div>
                        <div className="flex items-center text-sm text-gray-600">
                          <DollarSign className="w-4 h-4 mr-2 text-primary-gold" />
                          {project.value}
                        </div>
                        <div className="flex items-center text-sm text-gray-600">
                          <Calendar className="w-4 h-4 mr-2 text-primary-gold" />
                          {project.duration}
                        </div>
                      </div>

                      {/* Features */}
                      <div className="border-t pt-4">
                        <h4 className="text-sm font-semibold text-text-dark mb-2">Key Features</h4>
                        <div className="grid grid-cols-2 gap-2">
                          {project.features.map((feature, idx) => (
                            <div key={idx} className="flex items-center text-xs text-gray-600">
                              <div className="w-1.5 h-1.5 bg-primary-gold rounded-full mr-2"></div>
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
          )}
        </div>
      </section>



      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-br from-primary-green to-primary-green/90 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Have a <span className="text-primary-gold">Project</span> in Mind?
          </h2>
          <p className="text-xl text-gray-200 mb-8 max-w-3xl mx-auto">
            Let&apos;s discuss how we can bring your vision to life with our expertise and proven track record.
          </p>
          <a
            href="/contact"
            className="bg-primary-gold hover:bg-yellow-500 text-primary-green px-8 py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg inline-block"
          >
            Start a Conversation
          </a>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default ProjectsPage