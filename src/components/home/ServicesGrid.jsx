'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import SectionHeader from '@/components/shared/SectionHeader'
import ServiceCard from '@/components/shared/ServiceCard'
import Button from '@/components/shared/Button'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 }
  }
}

// Icon mapping for dynamic services
const iconComponents = {
  Code: 'Code',
  Smartphone: 'Smartphone',
  Megaphone: 'Megaphone',
  TrendingUp: 'TrendingUp',
  Headphones: 'Headphones',
  BarChart3: 'BarChart3',
  Lightbulb: 'Lightbulb',
  Network: 'Network'
}

export default function ServicesGrid() {
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
        // Map services to include proper URLs
        const mappedServices = data.data.map(service => ({
          ...service,
          href: `/services/${service.slug}`,
          icon: service.icon || 'Code'
        }))
        setServices(mappedServices)
      }
    } catch (error) {
      console.error('Error fetching services:', error)
    } finally {
      setLoading(false)
    }
  }

  if (loading) {
    return (
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="flex items-center justify-center h-64">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <SectionHeader
          badge="What We Do"
          title="Comprehensive IT Services for Modern Businesses"
          subtitle="From concept to deployment, we deliver end-to-end solutions that scale with your business"
        />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12"
        >
          {services.map((service) => (
            <motion.div key={service._id} variants={itemVariants}>
              <ServiceCard
                icon={service.icon}
                title={service.title}
                description={service.shortDescription}
                href={service.href}
              />
            </motion.div>
          ))}
        </motion.div>

        <div className="text-center">
          <Button href="/services" variant="primary">
            View All Services
          </Button>
        </div>
      </div>
    </section>
  )
}