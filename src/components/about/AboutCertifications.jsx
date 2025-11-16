'use client'

import { motion } from 'framer-motion'
import { Award, Shield, Star, CheckCircle } from 'lucide-react'
import SectionHeader from '@/components/shared/SectionHeader'

const certifications = [
  'AWS Certified Solutions Architect',
  'Google Partner Certification',
  'Microsoft Certified Partner',
  'Certified Scrum Master',
  'ISO 9001:2015 Certified',
  'Certified Ethical Hacker'
]

const awards = [
  {
    icon: Award,
    title: 'Best IT Agency 2024',
    issuer: 'Tech Excellence Awards'
  },
  {
    icon: Star,
    title: 'Top Web Development Company',
    issuer: 'Industry Leaders Magazine'
  },
  {
    icon: Shield,
    title: 'Excellence in Customer Service',
    issuer: 'Customer Choice Awards'
  },
  {
    icon: Award,
    title: 'Innovation Award 2023',
    issuer: 'Digital Innovation Summit'
  }
]

export default function AboutCertifications() {
  return (
    <section className="section-padding bg-gray-100">
      <div className="container-custom">
        <SectionHeader
          badge="Recognition"
          title="Certifications & Awards"
          subtitle="Recognized excellence in technology and service delivery"
        />

        {/* Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h3 className="text-2xl font-bold text-center mb-8">Our Certifications</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {certifications.map((cert, index) => (
              <motion.div
                key={cert}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="bg-white rounded-lg p-4 text-center shadow-md hover:shadow-lg transition-shadow"
              >
                <CheckCircle className="w-8 h-8 text-green-500 mx-auto mb-2" />
                <p className="text-sm font-medium text-gray-700">{cert}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Awards */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          <h3 className="text-2xl font-bold text-center mb-8">Awards & Recognition</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {awards.map((award, index) => (
              <motion.div
                key={award.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="bg-white rounded-xl p-6 text-center shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-accent to-yellow-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <award.icon className="w-8 h-8 text-white" />
                </div>
                <h4 className="font-bold mb-2">{award.title}</h4>
                <p className="text-sm text-gray-600">{award.issuer}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}