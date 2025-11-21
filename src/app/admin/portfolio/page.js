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
  Image as ImageIcon
} from 'lucide-react'
import ProtectedRoute from '@/components/admin/ProtectedRoute'
import { portfolioAPI } from '@/lib/api/admin'

export default function AdminPortfolioPage() {
  const [portfolio, setPortfolio] = useState([])
  const [loading, setLoading] = useState(true)
  const [showModal, setShowModal] = useState(false)
  const [editingItem, setEditingItem] = useState(null)
  const [saving, setSaving] = useState(false)
  const [error, setError] = useState('')
  
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
    image: '',
    overview: '',
    challenge: '',
    solution: '',
    results: [],
    features: [],
    testimonial: {
      text: '',
      author: '',
      role: ''
    },
    isActive: true,
    order: 0
  })

  const categories = [
    'Web Development',
    'Mobile Apps',
    'E-commerce',
    'SaaS',
    'UI/UX Design',
    'Branding'
  ]

  useEffect(() => {
    fetchPortfolio()
  }, [])

  const fetchPortfolio = async () => {
    setLoading(true)
    setError('')
    try {
      const response = await portfolioAPI.getAll()
      
      if (response.success) {
        setPortfolio(response.data || [])
      } else {
        setError('Failed to load portfolio items')
        setPortfolio([])
      }
    } catch (error) {
      console.error('Error fetching portfolio:', error)
      setError(`Error: ${error.message}`)
      setPortfolio([])
    } finally {
      setLoading(false)
    }
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
      duration: item.duration || '',
      year: item.year || '',
      featured: item.featured || false,
      image: item.image || '',
      overview: item.overview || '',
      challenge: item.challenge || '',
      solution: item.solution || '',
      results: item.results || [],
      features: item.features || [],
      testimonial: item.testimonial || { text: '', author: '', role: '' },
      isActive: item.isActive !== undefined ? item.isActive : true,
      order: item.order || 0
    })
    setShowModal(true)
    setError('')
  }

  const handleCreate = () => {
    setEditingItem(null)
    setFormData({
      title: '',
      slug: '',
      category: categories[0],
      tags: [],
      shortDescription: '',
      client: '',
      duration: '',
      year: new Date().getFullYear().toString(),
      featured: false,
      image: '',
      overview: '',
      challenge: '',
      solution: '',
      results: [],
      features: [],
      testimonial: { text: '', author: '', role: '' },
      isActive: true,
      order: portfolio.length + 1
    })
    setShowModal(true)
    setError('')
  }

  const handleDelete = async (itemId) => {
    if (confirm('Are you sure you want to delete this portfolio item?')) {
      try {
        const response = await portfolioAPI.delete(itemId)
        
        if (response.success) {
          setPortfolio(portfolio.filter(p => p._id !== itemId))
          alert('Portfolio item deleted successfully')
        } else {
          alert(`Failed to delete: ${response.message}`)
        }
      } catch (error) {
        console.error('Error deleting portfolio item:', error)
        alert(`Error: ${error.message}`)
      }
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

    try {
      const dataToSend = {
        ...formData,
        order: parseInt(formData.order) || 0
      }

      let response
      if (editingItem) {
        response = await portfolioAPI.update(editingItem._id, dataToSend)
      } else {
        response = await portfolioAPI.create(dataToSend)
      }
      
      if (response.success) {
        if (editingItem) {
          setPortfolio(portfolio.map(p => 
            p._id === editingItem._id ? response.data : p
          ))
          alert('Portfolio item updated successfully')
        } else {
          setPortfolio([...portfolio, response.data])
          alert('Portfolio item created successfully')
        }
        setShowModal(false)
        setEditingItem(null)
      } else {
        setError(`Failed to save: ${response.message}`)
      }
    } catch (error) {
      console.error('Error saving portfolio item:', error)
      setError(`Error: ${error.message}`)
    } finally {
      setSaving(false)
    }
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

  const addTag = (tag) => {
    if (tag && !formData.tags.includes(tag)) {
      setFormData({
        ...formData,
        tags: [...formData.tags, tag]
      })
    }
  }

  const removeTag = (tag) => {
    setFormData({
      ...formData,
      tags: formData.tags.filter(t => t !== tag)
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

  const addFeature = () => {
    setFormData({
      ...formData,
      features: [...formData.features, '']
    })
  }

  const updateFeature = (index, value) => {
    const newFeatures = [...formData.features]
    newFeatures[index] = value
    setFormData({ ...formData, features: newFeatures })
  }

  const removeFeature = (index) => {
    setFormData({
      ...formData,
      features: formData.features.filter((_, i) => i !== index)
    })
  }

  return (
    <ProtectedRoute>
      <div>
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Portfolio Management</h1>
            <p className="text-gray-600 mt-2">Manage your portfolio projects</p>
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
            <div>
              <p className="text-red-800 font-semibold">Error</p>
              <p className="text-red-700 text-sm">{error}</p>
            </div>
          </div>
        )}

        {/* Portfolio Grid */}
        {loading ? (
          <div className="flex items-center justify-center h-64">
            <div className="text-center">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
              <p className="text-gray-600">Loading portfolio...</p>
            </div>
          </div>
        ) : portfolio.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {portfolio.map((item) => (
              <motion.div
                key={item._id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow"
              >
                {/* Project Image */}
                <div className="h-48 bg-gradient-to-br from-primary to-accent flex items-center justify-center text-6xl">
                  {item.image || '🚀'}
                </div>

                {/* Project Info */}
                <div className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex-1">
                      {item.featured && (
                        <span className="inline-block px-2 py-1 bg-accent text-white text-xs font-semibold rounded-full mb-2">
                          Featured
                        </span>
                      )}
                      <h3 className="text-xl font-bold text-gray-900 mb-1">{item.title}</h3>
                      <p className="text-sm text-gray-600">{item.client}</p>
                    </div>
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
                    </div>
                  </div>

                  <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                    {item.shortDescription}
                  </p>

                  {item.tags && item.tags.length > 0 && (
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
                  )}

                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-600">{item.category}</span>
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
            <ImageIcon className="w-16 h-16 text-gray-300 mx-auto mb-4" />
            <p className="text-gray-500 mb-4">No portfolio items found</p>
            <button
              onClick={handleCreate}
              className="text-primary hover:underline"
            >
              Create your first project
            </button>
          </div>
        )}

        {/* Create/Edit Modal */}
        <AnimatePresence>
          {showModal && (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4 overflow-y-auto">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                className="bg-white rounded-xl shadow-2xl max-w-4xl w-full my-8"
              >
                <div className="p-6 border-b border-gray-200">
                  <div className="flex items-center justify-between">
                    <h2 className="text-2xl font-bold text-gray-900">
                      {editingItem ? 'Edit Project' : 'Create New Project'}
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

                {error && (
                  <div className="mx-6 mt-6 bg-red-50 border border-red-200 rounded-lg p-4 flex items-start space-x-3">
                    <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                    <p className="text-red-700 text-sm">{error}</p>
                  </div>
                )}

                <form onSubmit={handleSave} className="p-6 space-y-6 max-h-[60vh] overflow-y-auto">
                  {/* Basic Info */}
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
                        placeholder="e.g., E-commerce Platform Redesign"
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
                        placeholder="ecommerce-platform-redesign"
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
                        {categories.map(cat => (
                          <option key={cat} value={cat}>{cat}</option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Client Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        value={formData.client}
                        onChange={(e) => setFormData({ ...formData, client: e.target.value })}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                        placeholder="e.g., TechCorp Inc."
                        required
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

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Duration
                      </label>
                      <input
                        type="text"
                        value={formData.duration}
                        onChange={(e) => setFormData({ ...formData, duration: e.target.value })}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                        placeholder="e.g., 6 months"/>
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Image/Icon
                      </label>
                      <input
                        type="text"
                        value={formData.image}
                        onChange={(e) => setFormData({ ...formData, image: e.target.value })}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                        placeholder="Emoji or image URL"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Short Description <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      value={formData.shortDescription}
                      onChange={(e) => setFormData({ ...formData, shortDescription: e.target.value })}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder="Brief description for project cards"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Overview
                    </label>
                    <textarea
                      value={formData.overview}
                      onChange={(e) => setFormData({ ...formData, overview: e.target.value })}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                      rows="3"
                      placeholder="Detailed project overview"
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Challenge
                      </label>
                      <textarea
                        value={formData.challenge}
                        onChange={(e) => setFormData({ ...formData, challenge: e.target.value })}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                        rows="3"
                        placeholder="What was the challenge?"
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
                        placeholder="How did you solve it?"
                      />
                    </div>
                  </div>

                  {/* Tags */}
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
                            addTag(e.target.value)
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
                            onClick={() => removeTag(tag)}
                            className="hover:text-red-600"
                          >
                            <X className="w-3 h-3" />
                          </button>
                        </span>
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

                  {/* Features */}
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <label className="text-sm font-semibold text-gray-700">
                        Key Features
                      </label>
                      <button
                        type="button"
                        onClick={addFeature}
                        className="text-sm text-primary hover:underline"
                      >
                        + Add Feature
                      </button>
                    </div>
                    <div className="space-y-3">
                      {formData.features.map((feature, index) => (
                        <div key={index} className="flex gap-2">
                          <input
                            type="text"
                            value={feature}
                            onChange={(e) => updateFeature(index, e.target.value)}
                            placeholder="e.g., Real-time analytics dashboard"
                            className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-sm"
                          />
                          <button
                            type="button"
                            onClick={() => removeFeature(index)}
                            className="p-2 text-red-600 hover:bg-red-50 rounded-lg"
                          >
                            <X className="w-5 h-5" />
                          </button>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Testimonial */}
                  <div className="space-y-3 pt-4 border-t border-gray-200">
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

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Display Order
                    </label>
                    <input
                      type="number"
                      value={formData.order}
                      onChange={(e) => setFormData({ ...formData, order: e.target.value })}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                      min="0"
                    />
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
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </div>
    </ProtectedRoute>
  )
}