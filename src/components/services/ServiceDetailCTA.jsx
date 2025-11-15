'use client'

import { motion } from 'framer-motion'
import Button from '@/components/shared/Button'
import { MessageCircle, Calendar, FileText } from 'lucide-react'

const actions = [
  {
    icon: MessageCircle,
    title: 'Chat With Us',
    description: 'Quick questions? Start a conversation',
    action: 'Start Chat'
  },
  {
    icon: Calendar,
    title: 'Book a Call',
    description: 'Schedule a free consultation',
    action: 'Book Now'
  },
  {
    icon: FileText,
    title: 'Get a Quote',
    description: 'Receive a detailed proposal',
    action: 'Request Quote'
  }
]

export default function ServiceDetailCTA({ service }) {
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
        Ready to Get Started with {service.title}?
      </h2>
      <p className="text-xl text-gray-100 leading-relaxed">
        Let's discuss your project and how we can help you achieve your goals. 
        Choose the best way to connect with us.
      </p>
    </motion.div>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
      {actions.map((action, index) => (
        <motion.div
          key={action.title}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.1, duration: 0.5 }}
          className="bg-white/10 backdrop-blur-sm rounded-xl p-8 text-center hover:bg-white/20 transition-all"
        >
          <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4">
            <action.icon className="w-8 h-8 text-primary" />
          </div>
          <h3 className="text-xl font-bold text-white mb-2">{action.title}</h3>
          <p className="text-gray-200 mb-4">{action.description}</p>
          <button className="text-white font-semibold hover:underline">
            {action.action} →
          </button>
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
      <Button
        href="/contact"
        className="bg-white text-primary hover:bg-gray-100 shadow-xl px-8 py-3.5 rounded-lg font-semibold transition-all duration-300"
      >
        Contact Us Now
      </Button>
    </motion.div>
  </div>
</section>
)
}