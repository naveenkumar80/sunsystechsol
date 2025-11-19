// src/app/blog/page.js
'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { 
  Calendar, 
  Clock, 
  User, 
  Search,
  Tag,
  TrendingUp,
  Loader2,
  AlertCircle,
  ChevronRight
} from 'lucide-react'

export default function BlogPage() {
  const [posts, setPosts] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('all')

  const categories = [
    'All',
    'Web Development',
    'Mobile Apps',
    'SEO',
    'Marketing',
    'Technology',
    'Business'
  ]

  useEffect(() => {
    fetchPosts()
  }, [selectedCategory])

  const fetchPosts = async () => {
    setLoading(true)
    setError('')
    try {
      const params = new URLSearchParams()
      if (selectedCategory !== 'all') {
        params.append('category', selectedCategory)
      }

      const response = await fetch(`http://localhost:5000/api/blog?${params}`)
      const data = await response.json()
      
      if (data.success) {
        setPosts(data.data || [])
      } else {
        setError('Failed to load blog posts')
      }
    } catch (error) {
      console.error('Error fetching blog posts:', error)
      setError('Error loading blog posts')
    } finally {
      setLoading(false)
    }
  }

  const filteredPosts = posts.filter(post =>
    post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    post.excerpt.toLowerCase().includes(searchTerm.toLowerCase())
  )

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    })
  }

  const featuredPost = filteredPosts[0]
  const regularPosts = filteredPosts.slice(1)

  return (
    <>
      {/* Hero Section */}
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
              Our Blog
            </span>
            
            <h1 className="text-white mb-6">
              Insights, Tips & Industry News
            </h1>
            
            <p className="text-xl text-gray-200 mb-12 leading-relaxed">
              Stay updated with the latest trends, tips, and best practices in technology and digital marketing.
            </p>

            {/* Search Bar */}
            <div className="max-w-2xl mx-auto">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  placeholder="Search articles..."
                  className="w-full pl-12 pr-4 py-4 rounded-xl border-none focus:outline-none focus:ring-2 focus:ring-accent text-gray-900"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Categories */}
      <section className="bg-white border-b border-gray-200 sticky top-20 z-10">
        <div className="container-custom px-4">
          <div className="flex items-center justify-start gap-3 py-4 overflow-x-auto">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category === 'All' ? 'all' : category)}
                className={`px-6 py-2 rounded-full font-medium whitespace-nowrap transition-all ${
                  (category === 'All' && selectedCategory === 'all') || 
                  (category === selectedCategory)
                    ? 'bg-primary text-white shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Content */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          {/* Error State */}
          {error && (
            <div className="bg-red-50 border border-red-200 rounded-lg p-4 flex items-start space-x-3 mb-8">
              <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
              <p className="text-red-700">{error}</p>
            </div>
          )}

          {/* Loading State */}
          {loading ? (
            <div className="flex items-center justify-center h-64">
              <div className="text-center">
                <Loader2 className="w-12 h-12 text-primary animate-spin mx-auto mb-4" />
                <p className="text-gray-600">Loading articles...</p>
              </div>
            </div>
          ) : filteredPosts.length > 0 ? (
            <>
              {/* Featured Post */}
              {featuredPost && (
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mb-12"
                >
                  <Link href={`/blog/${featuredPost.slug}`}>
                    <div className="bg-white rounded-2xl shadow-xl overflow-hidden group cursor-pointer">
                      <div className="grid grid-cols-1 lg:grid-cols-2">
                        {/* Image */}
                        <div className="h-64 lg:h-auto bg-gradient-to-br from-primary to-accent flex items-center justify-center text-8xl group-hover:scale-105 transition-transform duration-300">
                          📰
                        </div>

                        {/* Content */}
                        <div className="p-8 lg:p-12 flex flex-col justify-center">
                          <div className="flex items-center space-x-3 mb-4">
                            <span className="inline-block px-3 py-1 bg-accent text-white text-xs font-semibold rounded-full">
                              Featured
                            </span>
                            <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-xs font-semibold rounded-full">
                              {featuredPost.category}
                            </span>
                          </div>

                          <h2 className="text-3xl font-bold text-gray-900 mb-4 group-hover:text-primary transition-colors">
                            {featuredPost.title}
                          </h2>

                          <p className="text-gray-600 mb-6 leading-relaxed line-clamp-3">
                            {featuredPost.excerpt}
                          </p>

                          <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500">
                            <div className="flex items-center space-x-2">
                              <User className="w-4 h-4" />
                              <span>{featuredPost.author?.name || 'Admin'}</span>
                            </div>
                            <div className="flex items-center space-x-2">
                              <Calendar className="w-4 h-4" />
                              <span>{formatDate(featuredPost.publishedAt || featuredPost.createdAt)}</span>
                            </div>
                            <div className="flex items-center space-x-2">
                              <Clock className="w-4 h-4" />
                              <span>{featuredPost.readTime || 5} min read</span>
                            </div>
                          </div>

                          <div className="mt-6 flex items-center text-primary font-semibold group-hover:gap-2 transition-all">
                            <span>Read Article</span>
                            <ChevronRight className="w-5 h-5" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              )}

              {/* Regular Posts Grid */}
              {regularPosts.length > 0 && (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {regularPosts.map((post, index) => (
                    <motion.div
                      key={post._id}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1, duration: 0.5 }}
                    >
                      <Link href={`/blog/${post.slug}`}>
                        <div className="bg-white rounded-2xl shadow-lg overflow-hidden group cursor-pointer hover:shadow-xl transition-all">
                          {/* Image */}
                          <div className="h-48 bg-gradient-to-br from-primary to-accent flex items-center justify-center text-6xl group-hover:scale-105 transition-transform duration-300">
                            {post.category === 'Web Development' ? '💻' :
                             post.category === 'Mobile Apps' ? '📱' :
                             post.category === 'SEO' ? '🔍' :
                             post.category === 'Marketing' ? '📈' :
                             post.category === 'Technology' ? '⚡' :
                             post.category === 'Business' ? '💼' : '📰'}
                          </div>

                          {/* Content */}
                          <div className="p-6">
                            <div className="flex items-center space-x-2 mb-3">
                              <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-xs font-semibold rounded-full">
                                {post.category}
                              </span>
                            </div>

                            <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary transition-colors line-clamp-2">
                              {post.title}
                            </h3>

                            <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                              {post.excerpt}
                            </p>

                            <div className="flex flex-wrap items-center gap-3 text-xs text-gray-500 mb-4">
                              <div className="flex items-center space-x-1">
                                <Calendar className="w-3 h-3" />
                                <span>{formatDate(post.publishedAt || post.createdAt)}</span>
                              </div>
                              <div className="flex items-center space-x-1">
                                <Clock className="w-3 h-3" />
                                <span>{post.readTime || 5} min</span>
                              </div>
                            </div>

                            {post.tags && post.tags.length > 0 && (
                              <div className="flex flex-wrap gap-2 mb-4">
                                {post.tags.slice(0, 3).map((tag) => (
                                  <span
                                    key={tag}
                                    className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded"
                                  >
                                    #{tag}
                                  </span>
                                ))}
                              </div>
                            )}

                            <div className="flex items-center text-primary font-semibold text-sm group-hover:gap-2 transition-all">
                              <span>Read More</span>
                              <ChevronRight className="w-4 h-4" />
                            </div>
                          </div>
                        </div>
                      </Link>
                    </motion.div>
                  ))}
                </div>
              )}
            </>
          ) : (
            /* Empty State */
            <div className="text-center py-12">
              <Search className="w-16 h-16 text-gray-400 mx-auto mb-4" />
              <p className="text-gray-500 text-lg mb-2">
                {searchTerm ? `No articles found for "${searchTerm}"` : 'No blog posts available yet.'}
              </p>
              {searchTerm && (
                <button
                  onClick={() => setSearchTerm('')}
                  className="text-primary hover:underline"
                >
                  Clear search
                </button>
              )}
            </div>
          )}
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="section-padding bg-gradient-to-br from-primary via-primary to-accent relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        </div>

        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <TrendingUp className="w-16 h-16 text-white mx-auto mb-6" />
            <h2 className="text-white mb-6">
              Stay Updated with Our Latest Insights
            </h2>
            <p className="text-xl text-gray-100 mb-8 leading-relaxed">
              Subscribe to our newsletter and get the latest tech tips, industry insights, and exclusive content delivered to your inbox.
            </p>
            <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-6 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent text-gray-900"
                required
              />
              <button
                type="submit"
                className="bg-accent text-white px-8 py-3 rounded-lg font-semibold hover:bg-accent/90 transition-colors whitespace-nowrap"
              >
                Subscribe
              </button>
            </form>
            <p className="text-xs text-gray-300 mt-4">
              No spam, unsubscribe anytime. We respect your privacy.
            </p>
          </motion.div>
        </div>
      </section>
    </>
  )
}

// Metadata is handled in layout.js or needs to be in a separate Server Component
// For client components, we use document.title instead