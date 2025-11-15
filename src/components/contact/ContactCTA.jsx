'use client'

import { motion } from 'framer-motion'
import { Calendar, MessageSquare, Zap } from 'lucide-react'
import Button from '@/components/shared/Button'

const features = [
  {
    icon: Calendar,
    title: 'Quick Response',
    description: '24-hour response guarantee'
  },
  {
    icon: MessageSquare,
    title: 'Free Consultation',
    description: 'No obligations, just great advice'
  },
  {
    icon: Zap,
    title: 'Fast Turnaround',
    description: 'We move at the speed of your business'
  }
]

export default function ContactCTA() {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <h2 className="mb-4">Why Contact Us?</h2>
          <p className="text-xl text-gray-600">
            We're not just another IT agency. We're your technology partner committed to your success.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-xl flex items-center justify-center mx-auto mb-4">
                <feature.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="text-center"
        >
          <Button href="/portfolio">
            View Our Portfolio
          </Button>
        </motion.div>
      </div>
    </section>
  )
}