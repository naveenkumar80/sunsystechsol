'use client'

import { motion } from 'framer-motion'
import { Calendar, Clock, User } from 'lucide-react'

export default function PortfolioDetailHero({ project }) {
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
          className="max-w-4xl mx-auto"
        >
          <span className="inline-block px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-white text-sm font-semibold mb-6">
            {project.category}
          </span>
          
          <h1 className="text-white mb-6">
            {project.title}
          </h1>
          
          <p className="text-xl text-gray-200 mb-10 leading-relaxed">
            {project.shortDescription}
          </p>

          {/* Project Meta */}
          <div className="flex flex-wrap gap-6">
            <div className="flex items-center space-x-2 text-white">
              <User className="w-5 h-5 text-accent" />
              <span className="text-sm">Client: {project.client}</span>
            </div>
            <div className="flex items-center space-x-2 text-white">
              <Clock className="w-5 h-5 text-accent" />
              <span className="text-sm">Duration: {project.duration}</span>
            </div>
            <div className="flex items-center space-x-2 text-white">
              <Calendar className="w-5 h-5 text-accent" />
              <span className="text-sm">Year: {project.year}</span>
            </div>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mt-8">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 bg-white/10 backdrop-blur-sm text-white text-sm rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}