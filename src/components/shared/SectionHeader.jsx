'use client'

import { motion } from 'framer-motion'

export default function SectionHeader({ 
  badge, 
  title, 
  subtitle, 
  centered = true 
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className={`mb-16 ${centered ? 'text-center' : ''}`}
    >
      {badge && (
        <span className="inline-block px-4 py-2 bg-primary-light text-primary rounded-full text-sm font-semibold mb-4">
          {badge}
        </span>
      )}
      
      {title && (
        <h2 className="mb-4">{title}</h2>
      )}
      
      {subtitle && (
        <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
          {subtitle}
        </p>
      )}
    </motion.div>
  )
}