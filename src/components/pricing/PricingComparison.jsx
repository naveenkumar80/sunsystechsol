'use client'
import React from 'react'
import { motion } from 'framer-motion'
import { Check, X } from 'lucide-react'
import SectionHeader from '@/components/shared/SectionHeader'
import { comparisonFeatures } from '@/lib/data/pricing'

const renderValue = (value) => {
  if (value === true) {
    return (
      <div className="flex justify-center">
        <Check className="w-6 h-6 text-green-500" />
      </div>
    )
  }
  if (value === false) {
    return (
      <div className="flex justify-center">
        <X className="w-6 h-6 text-gray-300" />
      </div>
    )
  }
  return (
    <div className="flex justify-center">
      <span className="text-sm font-medium text-gray-700">{value}</span>
    </div>
  )
}

export default function PricingComparison() {
  return (
    <section className="section-padding bg-gray-100">
      <div className="container-custom">
        <SectionHeader
          badge="Compare Plans"
          title="Detailed Feature Comparison"
          subtitle="See what's included in each plan"
        />

        <div className="max-w-6xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full table-fixed">
              <thead>
                <tr className="bg-gradient-to-r from-primary to-accent text-white">
                  <th className="w-2/5 text-left py-6 px-6 font-bold text-lg">Features</th>
                  <th className="w-1/5 text-center py-6 px-6 font-bold text-lg">Starter</th>
                  <th className="w-1/5 text-center py-6 px-6 font-bold text-lg">Professional</th>
                  <th className="w-1/5 text-center py-6 px-6 font-bold text-lg">Enterprise</th>
                </tr>
              </thead>
                              <tbody>
                {comparisonFeatures.map((category, catIndex) => (
                  <React.Fragment key={category.category}>
                    <tr className="bg-primary-light">
                      <td colSpan="4" className="py-4 px-6 font-bold text-primary text-lg">
                        {category.category}
                      </td>
                    </tr>
                    {category.features.map((feature, featureIndex) => (
                      <motion.tr
                        key={featureIndex}
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: (catIndex * 0.1) + (featureIndex * 0.05) }}
                        className="border-b border-gray-100 hover:bg-gray-50 transition-colors"
                      >
                        <td className="py-5 px-6 text-gray-700 font-medium">
                          {feature.name}
                        </td>
                        <td className="py-5 px-6 text-center align-middle">
                          {renderValue(feature.starter)}
                        </td>
                        <td className="py-5 px-6 text-center align-middle">
                          {renderValue(feature.professional)}
                        </td>
                        <td className="py-5 px-6 text-center align-middle">
                          {renderValue(feature.enterprise)}
                        </td>
                      </motion.tr>
                    ))}
                  </React.Fragment>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  )
}