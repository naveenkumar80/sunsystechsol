'use client'

import { motion } from 'framer-motion'
import Button from '@/components/shared/Button'
import { Briefcase, Users } from 'lucide-react'

export default function AboutCTA() {
  return (
    <section className="section-padding bg-gradient-to-br from-primary via-primary to-accent relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
      </div>

      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto"
        >
          <h2 className="text-white mb-6">
            Want to Be Part of Our Success Story?
          </h2>
          <p className="text-xl text-gray-100 mb-10 leading-relaxed">
            Whether you're looking for a technology partner or want to join our team, 
            we'd love to hear from you.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              href="/contact"
              className="bg-white text-primary hover:bg-gray-100 shadow-xl px-8 py-3.5 rounded-lg font-semibold transition-all duration-300 flex items-center space-x-2"
            >
              <Briefcase className="w-5 h-5" />
              <span>Start a Project</span>
            </Button>
            <Button
              href="/careers"
              className="border-2 border-white text-white px-8 py-3.5 rounded-lg font-semibold hover:bg-white hover:text-primary transition-all duration-300 flex items-center space-x-2"
            >
              <Users className="w-5 h-5" />
              <span>Join Our Team</span>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}