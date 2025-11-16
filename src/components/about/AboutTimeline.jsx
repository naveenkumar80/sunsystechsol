'use client'

import { motion } from 'framer-motion'
import SectionHeader from '@/components/shared/SectionHeader'

const milestones = [
  {
    year: '2015',
    title: 'Company Founded',
    description: 'NexaTech Solutions was born with a team of 3 passionate developers'
  },
  {
    year: '2017',
    title: '50th Project Milestone',
    description: 'Reached our first major milestone and expanded to 10 team members'
  },
  {
    year: '2019',
    title: 'International Expansion',
    description: 'Opened offices in 3 countries and started serving global clients'
  },
  {
    year: '2021',
    title: '200 Projects Completed',
    description: 'Celebrated 200 successful projects with 98% client satisfaction'
  },
  {
    year: '2023',
    title: 'Industry Recognition',
    description: 'Awarded "Best IT Agency" and expanded team to 50+ members'
  },
  {
    year: '2025',
    title: 'Present Day',
    description: 'Serving 500+ clients globally with cutting-edge solutions'
  }
]

export default function AboutTimeline() {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <SectionHeader
          badge="Our Journey"
          title="A Decade of Growth and Innovation"
          subtitle="Key milestones that shaped who we are today"
        />

        <div className="max-w-4xl mx-auto">
          {milestones.map((milestone, index) => (
            <motion.div
              key={milestone.year}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative pl-8 pb-12 border-l-2 border-primary last:pb-0"
            >
              {/* Timeline dot */}
              <div className="absolute -left-3 top-0 w-6 h-6 bg-primary rounded-full border-4 border-white shadow-lg"></div>

              {/* Content */}
              <div className="bg-gray-50 rounded-xl p-6 ml-6 hover:shadow-lg transition-shadow">
                <div className="text-primary font-bold text-2xl mb-2">
                  {milestone.year}
                </div>
                <h3 className="text-xl font-bold mb-2">{milestone.title}</h3>
                <p className="text-gray-600">{milestone.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}