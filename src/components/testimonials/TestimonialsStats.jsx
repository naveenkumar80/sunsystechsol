'use client'

import { motion } from 'framer-motion'
import { TrendingUp, Users, Award, Target } from 'lucide-react'

const stats = [
  {
    icon: Users,
    value: '200+',
    label: 'Happy Clients',
    color: 'from-blue-500 to-blue-600'
  },
  {
    icon: Award,
    value: '98%',
    label: 'Client Satisfaction',
    color: 'from-green-500 to-green-600'
  },
  {
    icon: TrendingUp,
    value: '300+',
    label: 'Projects Delivered',
    color: 'from-purple-500 to-purple-600'
  },
  {
    icon: Target,
    value: '95%',
    label: 'Repeat Business',
    color: 'from-orange-500 to-orange-600'
  }
]

export default function TestimonialsStats() {
  return (
    <section className="section-padding bg-gray-100">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="bg-white rounded-xl p-6 shadow-md text-center"
            >
              <div className={`w-16 h-16 bg-gradient-to-br ${stat.color} rounded-full flex items-center justify-center mx-auto mb-4`}>
                <stat.icon className="w-8 h-8 text-white" />
              </div>
              <div className="text-4xl font-bold text-gray-900 mb-2">{stat.value}</div>
              <div className="text-gray-600 font-medium">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}