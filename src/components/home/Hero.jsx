'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight, Play } from 'lucide-react'

const trustedLogos = [
  'CheloSaathi', 'InternSaathi', 'Company3', 'Company4', 'Company5'
]

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-primary-dark via-primary to-primary-dark">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: 'linear',
          }}
          className="absolute top-1/4 -left-1/4 w-96 h-96 bg-accent/30 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [360, 180, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: 'linear',
          }}
          className="absolute bottom-1/4 -right-1/4 w-96 h-96 bg-primary-light/30 rounded-full blur-3xl"
        />
      </div>

      {/* Content */}
      <div className="container-custom relative z-10 px-4 pt-32 pb-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-4xl mx-auto"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-white text-sm mb-8"
          >
            <span className="w-2 h-2 bg-accent rounded-full animate-pulse"></span>
            <span>ISO 9001:2015 certified</span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-white mb-6"
          >
            Transform Your Business with{' '}
            <span className="bg-gradient-to-r from-accent to-yellow-400 bg-clip-text text-transparent">
              Cutting-Edge IT Solutions
            </span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-xl text-gray-200 mb-10 max-w-2xl mx-auto leading-relaxed"
          >
            We build scalable websites, powerful mobile apps, and digital strategies 
            that drive real results. Partner with experts who turn your vision into reality.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
          >
            <Link
              href="/contact"
              className="btn-accent flex items-center space-x-2 group"
            >
              <span>Get Free Consultation</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/portfolio"
              className="border-2 border-white text-white px-8 py-3.5 rounded-lg font-semibold hover:bg-white hover:text-primary transition-all duration-300 flex items-center space-x-2"
            >
              <Play className="w-5 h-5" />
              <span>View Our Work</span>
            </Link>
          </motion.div>

          {/* Trusted By */}
          {/*<motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="text-center"
          >
            <p className="text-gray-300 text-sm mb-6">Trusted by leading brands</p>
            <div className="flex flex-wrap items-center justify-center gap-8 opacity-60">
              {trustedLogos.map((logo, index) => (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-sm px-6 py-3 rounded-lg text-white font-semibold"
                >
                  {logo}
                </div>
              ))}
            </div>
          </motion.div>*/}
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex items-start justify-center p-2">
          <div className="w-1.5 h-2 bg-white rounded-full"></div>
        </div>
      </motion.div>
    </section>
  )
}