'use client'

import { useEffect, useState } from 'react'
import ServicesHero from '@/components/services/ServicesHero'
import SectionHeader from '@/components/shared/SectionHeader'
import ServiceCard from '@/components/shared/ServiceCard'
import ServicesProcess from '@/components/services/ServicesProcess'
import ServicesCTA from '@/components/services/ServicesCTA'
import { motion } from 'framer-motion'

export default function ServicesPage() {
  const [services, setServices] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchServices()
  }, [])

  const fetchServices = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/services')
      const data = await response.json()
      
      if (data.success) {
        const mappedServices = data.data.map(service => ({
          ...service,
          href: `/services/${service.slug}`
        }))
        setServices(mappedServices)
      }
    } catch (error) {
      console.error('Error fetching services:', error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <>
      <ServicesHero />
      
      <section className="section-padding bg-white">
        <div className="container-custom">
          <SectionHeader
            badge="Our Services"
            title="Complete IT Solutions"
            subtitle="Everything you need to succeed in the digital world"
          />

          {loading ? (
            <div className="flex items-center justify-center h-64">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {services.map((service, index) => (
                <motion.div
                  key={service._id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <ServiceCard
                    icon={service.icon}
                    title={service.title}
                    description={service.shortDescription}
                    href={service.href}
                  />
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>

      <ServicesProcess />
      <ServicesCTA />
    </>
  )
}