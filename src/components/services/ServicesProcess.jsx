'use client'

import { motion } from 'framer-motion'
import { Search, Lightbulb, Code, Rocket, TestTube, Headphones } from 'lucide-react'
import SectionHeader from '@/components/shared/SectionHeader'

const steps = [
  {
    icon: Search,
    title: 'Discovery',
    description: 'We analyze your business, goals, and target audience to create a strategic roadmap.'
  },
  {
    icon: Lightbulb,
    title: 'Strategy',
    description: 'Detailed planning with timelines, milestones, and resource allocation.'
  },
  {
    icon: Code,
    title: 'Development',
    description: 'Agile development sprints with continuous testing and quality assurance.'
  },
  {
    icon: TestTube,
    title: 'Testing',
    description: 'Rigorous testing across all devices and browsers for flawless performance.'
  },
  {
    icon: Rocket,
    title: 'Launch',
    description: 'Seamless deployment with zero downtime and comprehensive launch support.'
  },
  {
    icon: Headphones,
    title: 'Support',
    description: 'Ongoing monitoring, maintenance, and optimization for peak performance.'
  }
]

export default function ServicesProcess() {
  return (
    <section className="section-padding bg-gray-100">
      <div className="container-custom">
        <SectionHeader
          badge="Our Process"
          title="How We Work"
          subtitle="A proven methodology that delivers results every time"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="relative bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow"
            >
              {/* Step Number */}
              <div className="absolute -top-4 -left-4 w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg">
                {index + 1}
              </div>

              {/* Icon */}
              <div className="w-16 h-16 bg-primary-light rounded-xl flex items-center justify-center mb-4 mt-2">
                <step.icon className="w-8 h-8 text-primary" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold mb-3">{step.title}</h3>
              <p className="text-gray-600 leading-relaxed">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}