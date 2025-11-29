'use client'

import { motion } from 'framer-motion'
import { Mail, Phone, MapPin } from 'lucide-react'

export default function ContactHero() {
  return (
    <section className="relative pt-32 pb-20 bg-gradient-to-br from-primary-dark via-primary to-primary-dark overflow-hidden">
      {/* Background Animation */}
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
            Get In Touch
          </span>
          
          <h1 className="text-white mb-6">
            Let's Build Something Amazing Together
          </h1>
          
          <p className="text-xl text-gray-200 mb-12 leading-relaxed">
            Have a project in mind? We'd love to hear about it. 
            Get a free consultation and let's discuss how we can help you achieve your goals.
          </p>

          {/* Quick Contact Info */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="bg-white/10 backdrop-blur-sm rounded-xl p-6"
            >
              <Phone className="w-8 h-8 text-accent mx-auto mb-3" />
              <p className="text-white font-semibold mb-1">Phone</p>
              <a href="tel:+919105837321" className="text-gray-200 hover:text-white transition-colors">
                +91 
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="bg-white/10 backdrop-blur-sm rounded-xl p-6"
            >
              <Mail className="w-8 h-8 text-accent mx-auto mb-3" />
              <p className="text-white font-semibold mb-1">Email</p>
              <a href="mailto:sunsystechsol@gmail.com" className="text-gray-200 hover:text-white transition-colors">
                sunsystechsol@gmail.com
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="bg-white/10 backdrop-blur-sm rounded-xl p-6"
            >
              <MapPin className="w-8 h-8 text-accent mx-auto mb-3" />
              <p className="text-white font-semibold mb-1">Location</p>
              <p className="text-gray-200">
                Shop No. 6, H.NO. 44, Vaijanti Resort, Kalal Khairiya
                Fatehabad Road, Agra, Uttar Pradesh – 282001
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}