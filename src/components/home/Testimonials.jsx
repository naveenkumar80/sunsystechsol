'use client'

import { motion } from 'framer-motion'
import { Star } from 'lucide-react'
import SectionHeader from '@/components/shared/SectionHeader'
import { testimonials } from '@/lib/data/testimonials'
import Button from '@/components/shared/Button'

export default function Testimonials() {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <SectionHeader
          badge="Testimonials"
          title="What Our Clients Say"
          subtitle="Don't just take our word for it - hear from businesses we've helped transform"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {testimonials.slice(0, 3).map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="card"
            >
              {/* Stars */}
              <div className="flex items-center space-x-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                ))}
              </div>

              {/* Quote */}
              <p className="text-gray-700 leading-relaxed mb-6">
                "{testimonial.text}"
              </p>

              {/* Author */}
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center text-white text-2xl">
                  {testimonial.avatar}
                </div>
                <div>
                  <div className="font-semibold text-gray-900">
                    {testimonial.name}
                  </div>
                  <div className="text-sm text-gray-600">
                    {testimonial.role}, {testimonial.company}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center">
          <Button href="/testimonials" variant="secondary">
            Read More Success Stories
          </Button>
        </div>
      </div>
    </section>
  )
}