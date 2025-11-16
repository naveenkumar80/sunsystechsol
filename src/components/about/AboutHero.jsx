'use client'

import { motion } from 'framer-motion'
import { Users, Target, Award } from 'lucide-react'

const highlights = [
  { icon: Users, text: '50+ Team Members' },
  { icon: Target, text: '10+ Years Experience' },
  { icon: Award, text: 'Award-Winning Agency' }
]

export default function AboutHero() {
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
            About SunsysTechsol
          </span>
          
          <h1 className="text-white mb-6">
            Building Tomorrow's Technology, Today
          </h1>
          
          <p className="text-xl text-gray-200 mb-12 leading-relaxed">
            We're a team of passionate technologists, designers, and strategists committed 
            to delivering solutions that drive real business results.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-6">
            {highlights.map((item, index) => (
              <motion.div
                key={item.text}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + index * 0.1, duration: 0.6 }}
                className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-lg px-4 py-3"
              >
                <item.icon className="w-5 h-5 text-accent" />
                <span className="text-white font-medium text-sm">{item.text}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}