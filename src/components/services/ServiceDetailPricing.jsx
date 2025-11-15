'use client'

import { motion } from 'framer-motion'
import { Check } from 'lucide-react'
import SectionHeader from '@/components/shared/SectionHeader'
import Button from '@/components/shared/Button'

export default function ServiceDetailPricing({ service }) {
  return (
    <section id="pricing" className="section-padding bg-white">
      <div className="container-custom">
        <SectionHeader
          badge="Pricing"
          title="Choose Your Perfect Package"
          subtitle="Transparent pricing with no hidden fees. All packages include our quality guarantee."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {service.packages.map((pkg, index) => (
            <motion.div
              key={pkg.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className={`relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all ${
                pkg.popular ? 'border-2 border-primary' : 'border border-gray-200'
              }`}
            >
              {pkg.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-primary to-accent text-white px-4 py-1 rounded-full text-sm font-semibold">
                  Most Popular
                </div>
              )}

              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold mb-2">{pkg.name}</h3>
                <div className="mb-3">
                  <span className="text-4xl font-bold text-primary">{pkg.price}</span>
                  {pkg.duration && (
                    <span className="text-gray-600 text-lg">{pkg.duration}</span>
                  )}
                </div>
                <p className="text-gray-600">{pkg.description}</p>
              </div>

              <ul className="space-y-4 mb-8">
                {pkg.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start space-x-3">
                    <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button
                href="/contact"
                variant={pkg.popular ? 'primary' : 'secondary'}
                className="w-full text-center"
              >
                Get Started
              </Button>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="text-center mt-12"
        >
          <p className="text-gray-600 mb-4">
            Need a custom package? We can create a solution tailored to your specific needs.
          </p>
          <Button href="/contact" variant="secondary">
            Request Custom Quote
          </Button>
        </motion.div>
      </div>
    </section>
  )
}