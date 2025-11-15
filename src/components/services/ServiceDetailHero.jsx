'use client'

import { motion } from 'framer-motion'
import Button from '@/components/shared/Button'
import { ArrowRight } from 'lucide-react'

export default function ServiceDetailHero({ service }) {
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
          className="max-w-4xl mx-auto text-center"
        >
          <span className="inline-block px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-white text-sm font-semibold mb-6">
            {service.title}
          </span>
          
          <h1 className="text-white mb-6">
            {service.heroTitle}
          </h1>
          
          <p className="text-xl text-gray-200 mb-10 leading-relaxed">
            {service.heroSubtitle}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              href="/contact"
              className="btn-accent flex items-center space-x-2 group"
            >
              <span>Get Free Quote</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              href="#pricing"
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