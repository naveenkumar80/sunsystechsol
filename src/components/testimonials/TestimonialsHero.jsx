'use client'

import { motion } from 'framer-motion'
import { Star, Users, Award } from 'lucide-react'

export default function TestimonialsHero() {
  return (
    <section className="relative pt-32 pb-20 bg-gradient-to-br from-primary-dark via-primary to-primary-dark overflow-hidden">
      <div className="absolute inset-0">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: 'linear',
          }}
          className="absolute top-0 right-0 w-96 h-96 bg-accent/20 rounded-full blur-3xl"
        />
      </div>

      <div className="container-custom relative z-10 px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto"
        >
          <span className="inline-block px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-white text-sm font-semibold mb-6">
            Client Testimonials
          </span>
          
          <h1 className="text-white mb-6">
            What Our Clients Say About Us
          </h1>
          
          <p className="text-xl text-gray-200 mb-12 leading-relaxed">
            Don't just take our word for it. Hear from businesses we've helped transform 
            through technology and innovation.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="bg-white/10 backdrop-blur-sm rounded-xl p-6"
            >
              <Star className="w-8 h-8 text-yellow-400 mx-auto mb-3 fill-yellow-400" />
              <div className="text-3xl font-bold text-white mb-1">4.9/5</div>
              <p className="text-gray-200 text-sm">Average Rating</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="bg-white/10 backdrop-blur-sm rounded-xl p-6"
            >
              <Users className="w-8 h-8 text-accent mx-auto mb-3" />
              <div className="text-3xl font-bold text-white mb-1">200+</div>
              <p className="text-gray-200 text-sm">Happy Clients</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="bg-white/10 backdrop-blur-sm rounded-xl p-6"
            >
              <Award className="w-8 h-8 text-accent mx-auto mb-3" />
              <div className="text-3xl font-bold text-white mb-1">98%</div>
              <p className="text-gray-200 text-sm">Satisfaction Rate</p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
