'use client'

import { motion } from 'framer-motion'
import Button from '@/components/shared/Button'
import { CheckCircle } from 'lucide-react'

const benefits = [
  'Free consultation',
  'No obligations',
  'Custom strategy roadmap',
  '24-hour response time'
]

export default function FinalCTA() {
  return (
    <section className="section-padding bg-gradient-to-br from-primary via-primary to-accent relative overflow-hidden">
      {/* Background decoration */}
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
          className="text-center max-w-4xl mx-auto"
        >
          <h2 className="text-white mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-gray-100 mb-8 leading-relaxed">
            Let's discuss how we can help you achieve your digital goals. 
            Get a free consultation and custom strategy roadmap today.
          </p>

          {/* Benefits */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="flex items-center justify-center space-x-2 bg-white/10 backdrop-blur-sm rounded-lg py-3 px-4"
              >
                <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                <span className="text-white text-sm font-medium">
                  {benefit}
                </span>
              </motion.div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              href="/contact"
              className="bg-white text-primary hover:bg-gray-100 shadow-xl px-8 py-3.5 rounded-lg font-semibold transition-all duration-300"
            >
              Schedule Free Consultation
            </Button>
            <Button
              href="/pricing"
              className="border-2 border-white text-white px-8 py-3.5 rounded-lg font-semibold hover:bg-white hover:text-primary transition-all duration-300"
            >
              View Pricing
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}