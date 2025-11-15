'use client'

import { motion } from 'framer-motion'
import SectionHeader from '@/components/shared/SectionHeader'
import ServiceCard from '@/components/shared/ServiceCard'
import { services } from '@/lib/data/services'
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

export default function ServicesGrid() {
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
            <motion.div key={service.id} variants={itemVariants}>
              <ServiceCard
                icon={service.icon}
                title={service.title}
                description={service.description}
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