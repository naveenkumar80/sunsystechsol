'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Check, Star } from 'lucide-react'
import Button from '@/components/shared/Button'
import { pricingPlans } from '@/lib/data/pricing'

const categories = [
  { id: 'website-development', name: 'Website Development' },
  { id: 'mobile-app', name: 'Mobile Apps' },
  { id: 'digital-marketing', name: 'Digital Marketing' },
  { id: 'it-support', name: 'IT Support' }
]

export default function PricingTables() {
  const [activeCategory, setActiveCategory] = useState('website-development')

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        {/* Category Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-3 rounded-lg font-semibold transition-all ${
                activeCategory === category.id
                  ? 'bg-primary text-white shadow-lg'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {pricingPlans[activeCategory].map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className={`relative rounded-2xl p-8 ${
                plan.highlighted
                  ? 'bg-gradient-to-br from-primary to-accent text-white shadow-2xl scale-105 border-4 border-accent'
                  : 'bg-white text-gray-900 shadow-lg border-2 border-gray-200'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-accent text-white px-4 py-1 rounded-full text-sm font-bold flex items-center space-x-1">
                  <Star className="w-4 h-4 fill-current" />
                  <span>Most Popular</span>
                </div>
              )}

              <div className="text-center mb-8">
                <h3 className={`text-2xl font-bold mb-2 ${plan.highlighted ? 'text-white' : 'text-gray-900'}`}>
                  {plan.name}
                </h3>
                <div className="mb-3">
                  <span className={`text-5xl font-bold ${plan.highlighted ? 'text-white' : 'text-primary'}`}>
                    {plan.price}
                  </span>
                  {plan.duration && (
                    <span className={`text-lg ${plan.highlighted ? 'text-white/80' : 'text-gray-600'}`}>
                      {plan.duration}
                    </span>
                  )}
                </div>
                <p className={plan.highlighted ? 'text-white/90' : 'text-gray-600'}>
                  {plan.description}
                </p>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start space-x-3">
                    <Check className={`w-5 h-5 flex-shrink-0 mt-0.5 ${
                      plan.highlighted ? 'text-white' : 'text-green-500'
                    }`} />
                    <span className={plan.highlighted ? 'text-white' : 'text-gray-700'}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <Button
                href="/contact"
                className={`w-full text-center ${
                  plan.highlighted
                    ? 'bg-white text-primary hover:bg-gray-100'
                    : 'bg-primary text-white hover:bg-primary/90'
                }`}
              >
                {plan.cta}
              </Button>
            </motion.div>
          ))}
        </div>

        {/* Custom Quote CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="text-center mt-12"
        >
          <p className="text-gray-600 mb-4 text-lg">
            Need a custom package tailored to your specific requirements?
          </p>
          <Button href="/contact" variant="secondary">
            Request Custom Quote
          </Button>
        </motion.div>
      </div>
    </section>
  )
}