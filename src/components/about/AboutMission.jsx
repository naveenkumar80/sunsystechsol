'use client'

import { motion } from 'framer-motion'
import { Target, Eye } from 'lucide-react'

export default function AboutMission() {
  return (
    <section className="section-padding bg-gray-100">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-2xl p-8 shadow-lg"
          >
            <div className="w-16 h-16 bg-primary-light rounded-xl flex items-center justify-center mb-6">
              <Target className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-3xl font-bold mb-4">Our Mission</h3>
            <p className="text-gray-600 leading-relaxed text-lg">
              To empower businesses with innovative technology solutions that drive growth, 
              efficiency, and competitive advantage. We believe technology should be accessible, 
              reliable, and transformative for businesses of all sizes.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="bg-white rounded-2xl p-8 shadow-lg"
          >
            <div className="w-16 h-16 bg-accent/10 rounded-xl flex items-center justify-center mb-6">
              <Eye className="w-8 h-8 text-accent" />
            </div>
            <h3 className="text-3xl font-bold mb-4">Our Vision</h3>
            <p className="text-gray-600 leading-relaxed text-lg">
              To be the most trusted IT partner for businesses worldwide, known for excellence, 
              innovation, and measurable results. We envision a world where every business, 
              regardless of size, has access to world-class technology solutions.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}