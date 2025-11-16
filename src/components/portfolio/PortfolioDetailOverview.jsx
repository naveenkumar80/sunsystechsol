'use client'

import { motion } from 'framer-motion'

export default function PortfolioDetailOverview({ project }) {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="mb-8">Project Overview</h2>
            <div className="text-lg text-gray-600 leading-relaxed space-y-4">
              <p>{project.overview}</p>
            </div>
          </motion.div>

          {/* Project Image/Visual */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="mt-12 rounded-2xl overflow-hidden shadow-2xl"
          >
            <div className="h-96 bg-gradient-to-br from-primary to-accent flex items-center justify-center text-9xl">
              {project.image}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}