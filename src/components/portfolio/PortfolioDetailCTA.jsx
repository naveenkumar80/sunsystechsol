'use client'

import { motion } from 'framer-motion'
import Button from '@/components/shared/Button'
import { ArrowRight, FileText } from 'lucide-react'
import Link from 'next/link'

export default function PortfolioDetailCTA({ project }) {
  return (
    <section className="section-padding bg-gray-100">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Start Similar Project */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-br from-primary to-accent rounded-2xl p-8 text-white"
          >
            <h3 className="text-2xl font-bold mb-4">
              Need a Similar Solution?
            </h3>
            <p className="mb-6 opacity-90">
              Let's discuss how we can create a custom solution tailored to your business needs.
            </p>
            <Button
              href="/contact"
              className="bg-white text-primary hover:bg-gray-100 shadow-xl px-6 py-3 rounded-lg font-semibold transition-all duration-300 flex items-center space-x-2 w-fit"
            >
              <span>Start Your Project</span>
              <ArrowRight className="w-5 h-5" />
            </Button>
          </motion.div>

          {/* View More Projects */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-2xl p-8 shadow-lg"
          >
            <h3 className="text-2xl font-bold mb-4">
              Explore More Work
            </h3>
            <p className="text-gray-600 mb-6">
              Check out our other successful projects and see how we've helped businesses across various industries.
            </p>
            <Link
              href="/portfolio"
              className="inline-flex items-center space-x-2 text-primary font-semibold hover:gap-3 transition-all"
            >
              <FileText className="w-5 h-5" />
              <span>View All Projects</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  )
}