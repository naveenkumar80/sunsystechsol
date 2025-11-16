'use client'

import { motion } from 'framer-motion'
import { Award, Lightbulb, Heart, Users, Target, TrendingUp } from 'lucide-react'
import SectionHeader from '@/components/shared/SectionHeader'

const values = [
  {
    icon: Award,
    title: 'Excellence',
    description: 'We never settle for "good enough." Every project receives our best effort and expertise.',
    color: 'from-blue-500 to-blue-600'
  },
  {
    icon: Lightbulb,
    title: 'Innovation',
    description: 'We stay ahead of technology trends to deliver cutting-edge solutions.',
    color: 'from-yellow-500 to-orange-500'
  },
  {
    icon: Heart,
    title: 'Integrity',
    description: 'Transparent communication, honest advice, and ethical business practices guide everything we do.',
    color: 'from-red-500 to-pink-500'
  },
  {
    icon: Users,
    title: 'Collaboration',
    description: 'We view our clients as partners and work together to achieve shared success.',
    color: 'from-green-500 to-emerald-500'
  },
  {
    icon: Target,
    title: 'Accountability',
    description: 'We take ownership of our commitments and deliver on our promises.',
    color: 'from-purple-500 to-indigo-500'
  },
  {
    icon: TrendingUp,
    title: 'Continuous Learning',
    description: 'We invest in our team\'s growth to bring the latest skills and knowledge to your projects.',
    color: 'from-cyan-500 to-teal-500'
  }
]

export default function AboutValues() {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <SectionHeader
          badge="Our Values"
          title="What Drives Us"
          subtitle="The principles that guide our work and relationships"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="group relative bg-white rounded-xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100"
            >
              <div className={`w-16 h-16 bg-gradient-to-br ${value.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                <value.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3">{value.title}</h3>
              <p className="text-gray-600 leading-relaxed">
                {value.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}