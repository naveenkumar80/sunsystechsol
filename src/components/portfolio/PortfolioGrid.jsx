'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { portfolioCategories } from '@/lib/data/portfolio'

export default function PortfolioGrid({ portfolioData = [] }) {
  const [activeCategory, setActiveCategory] = useState('All')

  const filteredProjects = activeCategory === 'All'
    ? portfolioData
    : portfolioData.filter(project => project.category === activeCategory)

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        {/* Category Filter */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
          {portfolioCategories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2 rounded-full font-medium transition-all ${
                activeCategory === category
                  ? 'bg-primary text-white shadow-lg'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredProjects.length > 0 ? (
            filteredProjects.map((project, index) => (
              <motion.div
                key={project._id || project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className="group"
              >
                <Link href={`/portfolio/${project.slug}`}>
                  <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300">
                    {/* Project Image/Icon */}
                    <div className="h-64 bg-gradient-to-br from-primary to-accent flex items-center justify-center text-8xl group-hover:scale-105 transition-transform duration-300">
                      {project.image || '🚀'}
                    </div>

                    {/* Project Info */}
                    <div className="p-6">
                      {project.featured && (
                        <span className="inline-block px-3 py-1 bg-accent text-white text-xs font-semibold rounded-full mb-3">
                          Featured
                        </span>
                      )}
                      
                      <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                        {project.title}
                      </h3>
                      
                      <p className="text-gray-600 mb-4 line-clamp-2">
                        {project.shortDescription}
                      </p>

                      {/* Tags */}
                      {project.tags && project.tags.length > 0 && (
                        <div className="flex flex-wrap gap-2 mb-4">
                          {project.tags.slice(0, 3).map((tag) => (
                            <span
                              key={tag}
                              className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      )}

                      {/* View Project Link */}
                      <div className="flex items-center text-primary font-semibold group-hover:gap-2 transition-all">
                        <span>View Case Study</span>
                        <ArrowRight className="w-5 h-5" />
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))
          ) : (
            <div className="col-span-full text-center py-12">
              <p className="text-gray-600 text-lg">
                {activeCategory === 'All' 
                  ? 'No portfolio items found. Add some in the admin panel!' 
                  : `No projects found in ${activeCategory} category.`}
              </p>
            </div>
          )}
        </motion.div>
      </div>
    </section>
  )
}