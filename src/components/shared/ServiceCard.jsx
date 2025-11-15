'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

export default function ServiceCard({ icon: Icon, title, description, href }) {
  return (
    <motion.div
      whileHover={{ y: -8 }}
      className="card group cursor-pointer"
    >
      <div className="mb-6">
        <div className="w-16 h-16 bg-primary-light rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
          <Icon className="w-8 h-8 text-primary" />
        </div>
      </div>
      
      <h4 className="text-2xl font-semibold mb-4 group-hover:text-primary transition-colors">
        {title}
      </h4>
      
      <p className="text-gray-600 mb-6 leading-relaxed">
        {description}
      </p>
      
      <Link
        href={href}
        className="inline-flex items-center space-x-2 text-accent font-semibold group-hover:gap-3 transition-all"
      >
        <span>Learn More</span>
        <ArrowRight className="w-5 h-5" />
      </Link>
    </motion.div>
  )
}