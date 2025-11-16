'use client'

import { motion } from 'framer-motion'
import SectionHeader from '@/components/shared/SectionHeader'

export default function PortfolioDetailResults({ project }) {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <SectionHeader
          badge="Results"
          title="Measurable Impact"
          subtitle="The numbers speak for themselves"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
          {project.results.map((result, index) => (
            <motion.div
              key={result.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="text-center bg-gradient-to-br from-primary to-accent rounded-2xl p-8 text-white"
            >
              <div className="text-5xl font-bold mb-3">{result.metric}</div>
              <div className="text-sm opacity-90">{result.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}