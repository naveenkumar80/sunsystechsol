'use client'

import { motion } from 'framer-motion'
import Button from '@/components/shared/Button'
import { MessageCircle, Calendar, FileText } from 'lucide-react'

const ctaOptions = [
  {
    icon: MessageCircle,
    title: 'Not Sure Which Plan?',
    description: 'Chat with our team to find the perfect solution',
    cta: 'Start Chat',
    href: '/contact'
  },
  {
    icon: Calendar,
    title: 'Schedule Consultation',
    description: 'Book a free 30-minute strategy call',
    cta: 'Book Now',
    href: '/contact'
  },
  {
    icon: FileText,
    title: 'Custom Quote',
    description: 'Get a detailed proposal for your project',
    cta: 'Request Quote',
    href: '/contact'
  }
]

export default function PricingCTA() {
  return (
    <section className="section-padding bg-gradient-to-br from-primary via-primary to-accent relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
      </div>

      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <h2 className="text-white mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-gray-100 leading-relaxed">
            Choose your plan or let us help you find the perfect solution for your business.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {ctaOptions.map((option, index) => (
            <motion.div
              key={option.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="bg-white/10 backdrop-blur-sm rounded-xl p-8 text-center hover:bg-white/20 transition-all"
            >
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4">
                <option.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">{option.title}</h3>
              <p className="text-gray-200 mb-4">{option.description}</p>
              <Button
                href={option.href}
                className="bg-white text-primary hover:bg-gray-100 w-full text-center"
              >
                {option.cta}
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}