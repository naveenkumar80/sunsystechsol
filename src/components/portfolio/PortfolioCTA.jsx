'use client'

import { motion } from 'framer-motion'
import Button from '@/components/shared/Button'
import { Rocket } from 'lucide-react'

export default function PortfolioCTA() {
  return (
    <section className="section-padding bg-gray-100">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-br from-primary to-accent rounded-3xl p-12 text-center text-white relative overflow-hidden"
        >
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
          </div>

          <div className="relative z-10 max-w-2xl mx-auto">
            <Rocket className="w-16 h-16 mx-auto mb-6" />
            <h2 className="text-white mb-4">
              Ready to Start Your Project?
            </h2>
            <p className="text-xl text-gray-100 mb-8">
              Let's create something amazing together. Get in touch to discuss your project.
            </p>
            <Button
              href="/contact"
              className="bg-white text-primary hover:bg-gray-100 shadow-xl px-8 py-3.5 rounded-lg font-semibold transition-all duration-300"
            >
              Start Your Project
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}