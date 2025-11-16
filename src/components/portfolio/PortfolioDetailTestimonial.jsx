'use client'

import { motion } from 'framer-motion'
import { Quote } from 'lucide-react'

export default function PortfolioDetailTestimonial({ project }) {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <div className="bg-gradient-to-br from-primary to-accent rounded-3xl p-12 text-white relative overflow-hidden">
            <div className="absolute top-0 left-0 w-32 h-32 opacity-10">
              <Quote className="w-full h-full" />
            </div>

            <div className="relative z-10">
              <p className="text-2xl font-medium mb-8 leading-relaxed">
                "{project.testimonial.text}"
              </p>

              <div className="flex items-center space-x-4">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center text-3xl">
                  👤
                </div>
                <div>
                  <div className="font-bold text-lg">{project.testimonial.author}</div>
                  <div className="text-sm opacity-90">{project.testimonial.role}</div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}