'use client'

import { motion } from 'framer-motion'
import { Users, Trophy, Rocket, Shield } from 'lucide-react'
import SectionHeader from '@/components/shared/SectionHeader'

const features = [
  {
    icon: Users,
    title: 'Expert Team',
    subtitle: 'Industry Veterans',
    description: 'Our team brings 50+ years of combined experience across all major technologies and industries.'
  },
  {
    icon: Trophy,
    title: 'Proven Results',
    subtitle: 'Track Record of Success',
    description: 'We\'ve delivered 300+ projects with a 98% client satisfaction rate and measurable ROI.'
  },
  {
    icon: Rocket,
    title: 'Agile Process',
    subtitle: 'Fast & Flexible',
    description: 'We use agile methodologies to deliver quality solutions quickly while adapting to your changing needs.'
  },
  {
    icon: Shield,
    title: 'Ongoing Support',
    subtitle: 'We\'ve Got Your Back',
    description: 'Post-launch support, maintenance, and continuous optimization to ensure long-term success.'
  }
]

export default function WhyChooseUs() {
  return (
    <section className="section-padding bg-gray-100">
      <div className="container-custom">
        <SectionHeader
          badge="Why Choose Us"
          title="Why Leading Brands Choose NexaTech"
          subtitle="We combine technical expertise with business acumen to deliver solutions that drive real results"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="text-center"
            >
              <div className="w-20 h-20 bg-gradient-to-br from-primary to-accent rounded-2xl flex items-center justify-center mx-auto mb-6">
                <feature.icon className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-primary font-semibold mb-3">
                {feature.subtitle}
              </p>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20 pt-12 border-t border-gray-300"
        >
          <div className="text-center">
            <div className="text-5xl font-bold text-primary mb-2">300+</div>
            <div className="text-gray-600 font-medium">Projects Completed</div>
          </div>
          <div className="text-center">
            <div className="text-5xl font-bold text-primary mb-2">98%</div>
            <div className="text-gray-600 font-medium">Client Satisfaction</div>
          </div>
          <div className="text-center">
            <div className="text-5xl font-bold text-primary mb-2">50+</div>
            <div className="text-gray-600 font-medium">Expert Team Members</div>
          </div>
          <div className="text-center">
            <div className="text-5xl font-bold text-primary mb-2">24/7</div>
            <div className="text-gray-600 font-medium">Support Available</div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}