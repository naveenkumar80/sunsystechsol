'use client'

import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  Plus, 
  Edit, 
  Trash2, 
  X,
  Save,
  Loader2,
  AlertCircle,
  Image as ImageIcon,
  Eye,
  Star
} from 'lucide-react'

// Mock ProtectedRoute component
const ProtectedRoute = ({ children }) => children

export default function AdminPortfolioPage() {
  const [portfolio, setPortfolio] = useState([])
  const [loading, setLoading] = useState(true)
  const [showModal, setShowModal] = useState(false)
  const [editingItem, setEditingItem] = useState(null)
  const [saving, setSaving] = useState(false)
  const [error, setError] = useState('')
  const [categoryFilter, setCategoryFilter] = useState('All')
  
  // Form state
  const [formData, setFormData] = useState({
    title: '',
    slug: '',
    category: '',
    tags: [],
    shortDescription: '',
    client: '',
    duration: '',
    year: '',
    featured: false,
    image: '🎨',
    overview: '',
    challenge: '',
    solution: '',
    results: [{ metric: '', label: '' }],
    features: [],
    technologies: [],
    testimonial: {
      text: '',
      author: '',
      role: ''
    },
    url: '',
    isActive: true,
    order: 0,
    gallery: []
  })

  const categories = ['All', 'Web Development', 'Mobile Apps', 'E-commerce', 'SaaS', 'UI/UX Design', 'Branding']
  const emojiOptions = ['🎨', '💻', '📱', '🛍️', '🚀', '💡', '🎯', '⚡', '🌐', '📊']

  useEffect(() => {
    fetchPortfolio()
  }, [])

  const fetchPortfolio = async () => {
    setLoading(true)
    setError('')
    
    // Simulated API call - replace with actual API
    setTimeout(() => {
      const mockData = [
        {
          _id: '1',
          title: 'Fashion E-commerce Platform',
          slug: 'ecommerce-fashion-store',
          category: 'E-commerce',
          tags: ['React', 'Node.js', 'MongoDB'],
          shortDescription: 'Modern e-commerce platform with AI-powered recommendations',
          client: 'StyleHub Fashion',
          duration: '4 months',
          year: '2024',
          featured: true,
          image: '🛍️',
          overview: 'A comprehensive e-commerce solution built for a fashion retailer.',
          challenge: 'The client had an outdated website with poor mobile experience.',
          solution: 'We built a custom e-commerce platform using React and Node.js.',
          results: [
            { metric: '300%', label: 'Increase in conversions' },
            { metric: '45%', label: 'Reduction in cart abandonment' }
          ],
          features: ['AI recommendations', 'Real-time inventory', 'Multi-currency'],
          technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
          testimonial: {
            text: 'SunsysTechsol transformed our business!',
            author: 'Jessica Miller',
            role: 'CEO, StyleHub Fashion'
          },
          url: 'https://example.com',
          isActive: true,
          order: 1
        },
        {
          _id: '2',
          title: 'HealthConnect Telemedicine App',
          slug: 'healthcare-mobile-app',
          category: 'Mobile Apps',
          tags: ['React Native', 'Firebase'],
          shortDescription: 'HIPAA-compliant telemedicine platform',
          client: 'HealthConnect Inc.',
          duration: '6 months',
          year: '2024',
          featured: true,
          image: '🏥',
          overview: 'A secure telemedicine platform enabling virtual consultations.',
          challenge: 'Create a secure platform that meets HIPAA compliance.',
          solution: 'Developed a cross-platform mobile app using React Native.',
          results: [
            { metric: '50K+', label: 'Active users' },
            { metric: '4.9/5', label: 'App store rating' }
          ],
          features: ['Video consultations', 'Electronic health records', 'Prescription management'],
          technologies: ['React Native', 'Firebase', 'Video API'],
          testimonial: {
            text: 'The app has revolutionized how we deliver healthcare.',
            author: 'Dr. Robert Chen',
            role: 'Medical Director'
          },
          url: '',
          isActive: true,
          order: 2
        }
      ]
      
      setPortfolio(mockData)
      setLoading(false)
    }, 1000)
  }

  const handleEdit = (item) => {
    setEditingItem(item)
    setFormData({
      title: item.title,
      slug: item.slug,
      category: item.category,
      tags: item.tags || [],
      shortDescription: item.shortDescription,
      client: item.client,
      duration: item.duration,
      year: item.year,
      featured: item.featured || false,
      image: item.image || '🎨',
      overview: item.overview || '',
      challenge: item.challenge || '',
      solution: item.solution || '',
      results: item.results || [{ metric: '', label: '' }],
      features: item.features || [],
      technologies: item.technologies || [],
      testimonial: item.testimonial || { text: '', author: '', role: '' },
      url: item.url || '',
      isActive: item.isActive !== undefined ? item.isActive : true,
      order: item.order || 0,
      gallery: item.gallery || []
    })
    setShowModal(true)
    setError('')
  }

  const handleCreate = () => {
    setEditingItem(null)
    setFormData({
      title: '',
      slug: '',
      category: 'Web Development',
      tags: [],
      shortDescription: '',
      client: '',
      duration: '',
      year: new Date().getFullYear().toString(),
      featured: false,
      image: '🎨',
      overview: '',
      challenge: '',
      solution: '',
      results: [{ metric: '', label: '' }],
      features: [],
      technologies: [],
      testimonial: { text: '', author: '', role: '' },
      url: '',
      isActive: true,
      order: portfolio.length + 1,
      gallery: []
    })
    setShowModal(true)
    setError('')
  }

  const handleDelete = async (itemId) => {
    if (confirm('Are you sure you want to delete this portfolio item?')) {
      // Simulated delete
      setPortfolio(portfolio.filter(item => item._id !== itemId))
      alert('Portfolio item deleted successfully')
    }
  }

  const validateForm = () => {
    if (!formData.title.trim()) {
      setError('Title is required')
      return false
    }
    if (!formData.slug.trim()) {
      setError('Slug is required')
      return false
    }
    if (!formData.category) {
      setError('Category is required')
      return false
    }
    if (!formData.shortDescription.trim()) {
      setError('Short description is required')
      return false
    }
    if (!formData.client.trim()) {
      setError('Client name is required')
      return false
    }
    return true
  }

  const handleSave = async (e) => {
    e.preventDefault()
    setError('')
    
    if (!validateForm()) {
      return
    }
    
    setSaving(true)

    // Simulate API call
    setTimeout(() => {
      if (editingItem) {
        // Update existing item
        setPortfolio(portfolio.map(item => 
          item._id === editingItem._id 
            ? { ...item, ...formData }
            : item
        ))
        alert('Portfolio item updated successfully')
      } else {
        // Create new item
        const newItem = {
          _id: Date.now().toString(),
          ...formData
        }
        setPortfolio([...portfolio, newItem])
        alert('Portfolio item created successfully')
      }
      
      setSaving(false)
      setShowModal(false)
      setEditingItem(null)
    }, 1000)
  }

  const generateSlug = (title) => {
    return title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/^-+|-+$/g, '')
  }

  const handleTitleChange = (title) => {
    setFormData({
      ...formData,
      title,
      slug: generateSlug(title)
    })
  }

  const addResult = () => {
    setFormData({
      ...formData,
      results: [...formData.results, { metric: '', label: '' }]
    })
  }

  const updateResult = (index, field, value) => {
    const newResults = [...formData.results]
    newResults[index][field] = value
    setFormData({ ...formData, results: newResults })
  }

  const removeResult = (index) => {
    setFormData({
      ...formData,
      results: formData.results.filter((_, i) => i !== index)
    })
  }

  const addToArray = (field, value) => {
    if (value && !formData[field].includes(value)) {
      setFormData({
        ...formData,
        [field]: [...formData[field], value]
      })
    }
  }

  const removeFromArray = (field, value) => {
    setFormData({
      ...formData,
      [field]: formData[field].filter(item => item !== value)
    })
  }

  const filteredPortfolio = categoryFilter === 'All' 
    ? portfolio 
    : portfolio.filter(item => item.category === categoryFilter)

  return (
    <ProtectedRoute>
      <div>
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Portfolio Management</h1>
            <p className="text-gray-600 mt-2">Manage your portfolio projects and case studies</p>
          </div>
          <button
            onClick={handleCreate}
            className="flex items-center space-x-2 bg-primary text-white px-6 py-3 rounded-lg hover:bg-primary/90 transition-colors"
          >
            <Plus className="w-5 h-5" />
            <span>Add Project</span>
          </button>
        </div>

        {/* Error Display */}
        {error && (
          <div className="mb-6 bg-red-50 border border-red-200 rounded-lg p-4 flex items-start space-x-3">
            <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
            <p className="text-red-700 text-sm">{error}</p>
          </div>
        )}

        {/* Category Filter */}
        <div className="bg-white rounded-xl shadow-md p-4 mb-6">
          <div className="flex flex-wrap gap-2">
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setCategoryFilter(category)}
                className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                  categoryFilter === category
                    ? 'bg-primary text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Portfolio Grid */}
        {loading ? (
          <div className="flex items-center justify-center h-64">
            <div className="text-center">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
              <p className="text-gray-600">Loading portfolio...</p>
            </div>
          </div>
        ) : filteredPortfolio.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredPortfolio.map((item) => (
              <motion.div
                key={item._id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow"
              >
                {/* Project Image/Icon */}
                <div className="h-48 bg-gradient-to-br from-primary to-accent flex items-center justify-center text-6xl relative">
                  {item.image}
                  {item.featured && (
                    <div className="absolute top-3 right-3 bg-yellow-400 text-yellow-900 px-3 py-1 rounded-full text-xs font-bold flex items-center space-x-1">
                      <Star className="w-3 h-3 fill-current" />
                      <span>Featured</span>
                    </div>
                  )}
                </div>

                <div className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex-1">
                      <span className="text-xs font-semibold text-primary">{item.category}</span>
                      <h3 className="text-lg font-bold text-gray-900 mb-1">{item.title}</h3>
                      <p className="text-sm text-gray-600">{item.client}</p>
                    </div>
                  </div>

                  <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                    {item.shortDescription}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {item.tags.slice(0, 3).map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Meta Info */}
                  <div className="flex items-center justify-between text-xs text-gray-500 mb-4">
                    <span>{item.duration}</span>
                    <span>{item.year}</span>
                  </div>

                  {/* Actions */}
                  <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                    <div className="flex items-center space-x-2">
                      <button
                        onClick={() => handleEdit(item)}
                        className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                        title="Edit"
                      >
                        <Edit className="w-4 h-4" />
                      </button>
                      <button
                        onClick={() => handleDelete(item._id)}
                        className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                        title="Delete"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                      {item.url && (
                        <a
                          href={item.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 text-green-600 hover:bg-green-50 rounded-lg transition-colors"
                          title="View Live"
                        >
                          <Eye className="w-4 h-4" />
                        </a>
                      )}
                    </div>
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                      item.isActive 
                        ? 'bg-green-100 text-green-800' 
                        : 'bg-gray-100 text-gray-800'
                    }`}>
                      {item.isActive ? 'Active' : 'Inactive'}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        ) : (
          <div className="bg-white rounded-xl shadow-md p-12 text-center">
            <ImageIcon className="w-16 h-16 text-gray-400 mx-auto mb-4" />
            <p className="text-gray-500 mb-4">
              {categoryFilter === 'All' ? 'No portfolio items found' : `No ${categoryFilter} projects found`}
            </p>
            <button
              onClick={handleCreate}
              className="text-primary hover:underline"
            >
              Create your first project
            </button>
          </div>
        )}

        {/* Edit/Create Modal */}
        <AnimatePresence>
          {showModal && (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4 overflow-y-auto">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                className="bg-white rounded-xl shadow-2xl max-w-4xl w-full my-8 max-h-[90vh] flex flex-col"
              >
                {/* Modal Header */}
                <div className="p-6 border-b border-gray-200 flex-shrink-0">
                  <div className="flex items-center justify-between">
                    <h2 className="text-2xl font-bold text-gray-900">
                      {editingItem ? 'Edit Portfolio Item' : 'Create New Portfolio Item'}
                    </h2>
                    <button
                      onClick={() => {
                        setShowModal(false)
                        setError('')
                      }}
                      className="text-gray-400 hover:text-gray-600"
                    >
                      <X className="w-6 h-6" />
                    </button>
                  </div>
                </div>

                {/* Error in Modal */}
                {error && (
                  <div className="mx-6 mt-6 bg-red-50 border border-red-200 rounded-lg p-4 flex items-start space-x-3">
                    <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                    <p className="text-red-700 text-sm">{error}</p>
                  </div>
                )}

                {/* Modal Body - Scrollable */}
                <form onSubmit={handleSave} className="flex-1 overflow-y-auto">
                  <div className="p-6 space-y-6">
                    {/* Basic Info */}
                    <div className="space-y-4">
                      <h3 className="text-lg font-semibold text-gray-900">Basic Information</h3>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-semibold text-gray-700 mb-2">
                            Project Title <span className="text-red-500">*</span>
                          </label>
                          <input
                            type="text"
                            value={formData.title}
                            onChange={(e) => handleTitleChange(e.target.value)}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                            required
                          />
                        </div>

                        <div>
                          <label className="block text-sm font-semibold text-gray-700 mb-2">
                            Slug <span className="text-red-500">*</span>
                          </label>
                          <input
                            type="text"
                            value={formData.slug}
                            onChange={(e) => setFormData({ ...formData, slug: e.target.value })}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-gray-50"
                            required
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div>
                          <label className="block text-sm font-semibold text-gray-700 mb-2">
                            Category <span className="text-red-500">*</span>
                          </label>
                          <select
                            value={formData.category}
                            onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                            required
                          >
                            {categories.filter(c => c !== 'All').map(cat => (
                              <option key={cat} value={cat}>{cat}</option>
                            ))}
                          </select>
                        </div>

                        <div>
                          <label className="block text-sm font-semibold text-gray-700 mb-2">
                            Icon/Emoji
                          </label>
                          <select
                            value={formData.image}
                            onChange={(e) => setFormData({ ...formData, image: e.target.value })}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                          >
                            {emojiOptions.map(emoji => (
                              <option key={emoji} value={emoji}>{emoji}</option>
                            ))}
                          </select>
                        </div>

                        <div>
                          <label className="block text-sm font-semibold text-gray-700 mb-2">
                            Display Order
                          </label>
                          <input
                            type="number"
                            value={formData.order}
                            onChange={(e) => setFormData({ ...formData, order: parseInt(e.target.value) })}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                            min="0"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                          Short Description <span className="text-red-500">*</span>
                        </label>
                        <textarea
                          value={formData.shortDescription}
                          onChange={(e) => setFormData({ ...formData, shortDescription: e.target.value })}
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                          rows="2"
                          maxLength="150"
                          required
                        />
                        <p className="text-xs text-gray-500 mt-1">
                          {formData.shortDescription.length}/150 characters
                        </p>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div>
                          <label className="block text-sm font-semibold text-gray-700 mb-2">
                            Client Name <span className="text-red-500">*</span>
                          </label>
                          <input
                            type="text"
                            value={formData.client}
                            onChange={(e) => setFormData({ ...formData, client: e.target.value })}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                            required
                          />
                        </div>

                        <div>
                          <label className="block text-sm font-semibold text-gray-700 mb-2">
                            Duration
                          </label>
                          <input
                            type="text"
                            value={formData.duration}
                            onChange={(e) => setFormData({ ...formData, duration: e.target.value })}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                            placeholder="e.g., 4 months"
                          />
                        </div>

                        <div>
                          <label className="block text-sm font-semibold text-gray-700 mb-2">
                            Year
                          </label>
                          <input
                            type="text"
                            value={formData.year}
                            onChange={(e) => setFormData({ ...formData, year: e.target.value })}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                            placeholder="2024"
                          />
                        </div>
                      </div>
                    </div>

                    {/* Project Details */}
                    <div className="space-y-4 pt-6 border-t border-gray-200">
                      <h3 className="text-lg font-semibold text-gray-900">Project Details</h3>

                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                          Overview
                        </label>
                        <textarea
                          value={formData.overview}
                          onChange={(e) => setFormData({ ...formData, overview: e.target.value })}
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                          rows="3"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                          Challenge
                        </label>
                        <textarea
                          value={formData.challenge}
                          onChange={(e) => setFormData({ ...formData, challenge: e.target.value })}
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                          rows="3"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                          Solution
                        </label>
                        <textarea
                          value={formData.solution}
                          onChange={(e) => setFormData({ ...formData, solution: e.target.value })}
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                          rows="3"
                        />
                      </div>
                    </div>

                    {/* Results */}
                    <div className="space-y-4 pt-6 border-t border-gray-200">
                      <div className="flex items-center justify-between">
                        <h3 className="text-lg font-semibold text-gray-900">Results</h3>
                        <button
                          type="button"
                          onClick={addResult}
                          className="text-sm text-primary hover:underline"
                        >
                          + Add Result
                        </button>
                      </div>
                      
                      <div className="space-y-3">
                        {formData.results.map((result, index) => (
                          <div key={index} className="flex gap-2">
                            <input
                              type="text"
                              value={result.metric}
                              onChange={(e) => updateResult(index, 'metric', e.target.value)}
                              placeholder="Metric (e.g., 300%)"
                              className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-sm"
                            />
                            <input
                              type="text"
                              value={result.label}
                              onChange={(e) => updateResult(index, 'label', e.target.value)}
                              placeholder="Label (e.g., Increase in sales)"
                              className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-sm"
                            />
                            <button
                              type="button"
                              onClick={() => removeResult(index)}
                              className="p-2 text-red-600 hover:bg-red-50 rounded-lg"
                            >
                              <X className="w-5 h-5" />
                            </button>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Tags & Technologies */}
                    <div className="space-y-4 pt-6 border-t border-gray-200">
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                          Tags
                        </label>
                        <div className="flex gap-2 mb-2">
                          <input
                            type="text"
                            id="tag-input"
                            placeholder="Type tag and press Enter"
                            className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-sm"
                            onKeyDown={(e) => {
                              if (e.key === 'Enter') {
                                e.preventDefault()
                                addToArray('tags', e.target.value)
                                e.target.value = ''
                              }
                            }}
                          />
                        </div>
                        <div className="flex flex-wrap gap-2">
                          {formData.tags.map((tag) => (
                            <span
                              key={tag}
                              className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm flex items-center space-x-2"
                            >
                              <span>{tag}</span>
                              <button
                                type="button"
                                onClick={() => removeFromArray('tags', tag)}
                                className="hover:text-red-600">
                                <X className="w-3 h-3" />
                              </button>
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Gallery Images */}
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Gallery Images (URLs)
                      </label>
                      <div className="flex gap-2 mb-2">
                        <input
                          type="text"
                          id="gallery-input"
                          placeholder="Paste image URL and press Enter"
                          className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-sm"
                          onKeyDown={(e) => {
                            if (e.key === 'Enter') {
                              e.preventDefault()
                              addToArray('gallery', e.target.value)
                              e.target.value = ''
                            }
                          }}
                        />
                      </div>
                      <div className="grid grid-cols-4 gap-2">
                        {formData.gallery.map((img, index) => (
                          <div key={index} className="relative group">
                            <img 
                              src={img} 
                              alt={`Gallery ${index + 1}`}
                              className="w-full h-24 object-cover rounded-lg"
                            />
                            <button
                              type="button"
                              onClick={() => removeFromArray('gallery', img)}
                              className="absolute top-1 right-1 p-1 bg-red-500 text-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                            >
                              <X className="w-3 h-3" />
                            </button>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Results */}
                    <div>
                      <div className="flex items-center justify-between mb-3">
                        <label className="text-sm font-semibold text-gray-700">
                          Results/Metrics
                        </label>
                        <button
                          type="button"
                          onClick={() => addResult()}
                          className="text-sm text-primary hover:underline"
                        >
                          + Add Result
                        </button>
                      </div>
                      <div className="space-y-3">
                        {formData.results.map((result, index) => (
                          <div key={index} className="flex gap-2">
                            <input
                              type="text"
                              value={result.metric}
                              onChange={(e) => updateResult(index, 'metric', e.target.value)}
                              placeholder="e.g., 300%"
                              className="w-1/3 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-sm"
                            />
                            <input
                              type="text"
                              value={result.label}
                              onChange={(e) => updateResult(index, 'label', e.target.value)}
                              placeholder="e.g., Increase in Sales"
                              className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-sm"
                            />
                            <button
                              type="button"
                              onClick={() => removeResult(index)}
                              className="p-2 text-red-600 hover:bg-red-50 rounded-lg"
                            >
                              <X className="w-5 h-5" />
                            </button>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Testimonial */}
                    <div className="space-y-3">
                      <label className="text-sm font-semibold text-gray-700">
                        Client Testimonial
                      </label>
                      <textarea
                        value={formData.testimonial.text}
                        onChange={(e) => setFormData({
                          ...formData,
                          testimonial: { ...formData.testimonial, text: e.target.value }
                        })}
                        placeholder="Client's feedback about the project"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-sm"
                        rows="3"
                      />
                      <div className="grid grid-cols-2 gap-3">
                        <input
                          type="text"
                          value={formData.testimonial.author}
                          onChange={(e) => setFormData({
                            ...formData,
                            testimonial: { ...formData.testimonial, author: e.target.value }
                          })}
                          placeholder="Client Name"
                          className="px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-sm"
                        />
                        <input
                          type="text"
                          value={formData.testimonial.role}
                          onChange={(e) => setFormData({
                            ...formData,
                            testimonial: { ...formData.testimonial, role: e.target.value }
                          })}
                          placeholder="Role & Company"
                          className="px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-sm"
                        />
                      </div>
                    </div>

                    {/* Featured & Active Status */}
                    <div className="flex items-center space-x-6 pt-4 border-t border-gray-200">
                      <div className="flex items-center space-x-3">
                        <input
                          type="checkbox"
                          id="featured"
                          checked={formData.featured}
                          onChange={(e) => setFormData({ ...formData, featured: e.target.checked })}
                          className="w-4 h-4 text-primary border-gray-300 rounded focus:ring-primary"
                        />
                        <label htmlFor="featured" className="text-sm font-semibold text-gray-700">
                          Featured Project
                        </label>
                      </div>
                      <div className="flex items-center space-x-3">
                        <input
                          type="checkbox"
                          id="isActive"
                          checked={formData.isActive}
                          onChange={(e) => setFormData({ ...formData, isActive: e.target.checked })}
                          className="w-4 h-4 text-primary border-gray-300 rounded focus:ring-primary"
                        />
                        <label htmlFor="isActive" className="text-sm font-semibold text-gray-700">
                          Active (visible on website)
                        </label>
                      </div>
                    </div>
                  </div>
                </form>
                
                  <div className="p-6 border-t border-gray-200 flex justify-end space-x-3">
                    <button
                      type="button"
                      onClick={() => {
                        setShowModal(false)
                        setError('')
                      }}
                      className="px-6 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
                    >
                      Cancel
                    </button>
                    <button
                       onClick={handleSave}
                       disabled={saving}
                       className="px-6 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors flex items-center space-x-2 disabled:opacity-50"
                     >
                    <button
                      type ="submit"
                      disabled={saving}
                      className="px-6 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors flex items-center space-x-2 disabled:opacity-50"
                    >
                      {saving ? (
                        <>
                          <Loader2 className="w-5 h-5 animate-spin" />
                          <span>Saving...</span>
                        </>
                      ) : (
                        <>
                          <Save className="w-5 h-5" />
                          <span>Save Portfolio Item</span>
                        </>
                      )}
                    </button>
                    </button>
                  </div>
                </motion.div>
              </div>
            )}
          </AnimatePresence>
        </div>
      </ProtectedRoute>
    )
  }