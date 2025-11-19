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
  Star,
  User
} from 'lucide-react'
import ProtectedRoute from '@/components/admin/ProtectedRoute'
import { testimonialsAPI } from '@/lib/api/admin'

export default function AdminTestimonialsPage() {
  const [testimonials, setTestimonials] = useState([])
  const [loading, setLoading] = useState(true)
  const [showModal, setShowModal] = useState(false)
  const [editingTestimonial, setEditingTestimonial] = useState(null)
  const [saving, setSaving] = useState(false)
  const [error, setError] = useState('')
  
  // Form state
  const [formData, setFormData] = useState({
    name: '',
    role: '',
    company: '',
    avatar: '👤',
    rating: 5,
    text: '',
    featured: false,
    isActive: true,
    order: 0
  })

  const avatarOptions = ['👤', '👨‍💼', '👩‍💼', '👨‍💻', '👩‍💻', '🧑‍💼', '👨‍🔧', '👩‍🔧', '👨‍⚕️', '👩‍⚕️', '👨‍🎨', '👩‍🎨']

  useEffect(() => {
    fetchTestimonials()
  }, [])

  const fetchTestimonials = async () => {
    setLoading(true)
    setError('')
    try {
      const response = await testimonialsAPI.getAll()
      
      if (response.success) {
        setTestimonials(response.data || [])
      } else {
        setError('Failed to load testimonials')
        setTestimonials([])
      }
    } catch (error) {
      console.error('Error fetching testimonials:', error)
      setError(`Error: ${error.message}`)
      setTestimonials([])
    } finally {
      setLoading(false)
    }
  }

  const handleEdit = (testimonial) => {
    setEditingTestimonial(testimonial)
    setFormData({
      name: testimonial.name,
      role: testimonial.role,
      company: testimonial.company,
      avatar: testimonial.avatar || '👤',
      rating: testimonial.rating || 5,
      text: testimonial.text,
      featured: testimonial.featured || false,
      isActive: testimonial.isActive !== undefined ? testimonial.isActive : true,
      order: testimonial.order || 0
    })
    setShowModal(true)
    setError('')
  }

  const handleCreate = () => {
    setEditingTestimonial(null)
    setFormData({
      name: '',
      role: '',
      company: '',
      avatar: '👤',
      rating: 5,
      text: '',
      featured: false,
      isActive: true,
      order: testimonials.length + 1
    })
    setShowModal(true)
    setError('')
  }

  const handleDelete = async (testimonialId) => {
    if (confirm('Are you sure you want to delete this testimonial?')) {
      try {
        const response = await testimonialsAPI.delete(testimonialId)
        
        if (response.success) {
          setTestimonials(testimonials.filter(t => t._id !== testimonialId))
          alert('Testimonial deleted successfully')
        } else {
          alert(`Failed to delete: ${response.message}`)
        }
      } catch (error) {
        console.error('Error deleting testimonial:', error)
        alert(`Error: ${error.message}`)
      }
    }
  }

  const validateForm = () => {
    if (!formData.name.trim()) {
      setError('Name is required')
      return false
    }
    if (!formData.role.trim()) {
      setError('Role is required')
      return false
    }
    if (!formData.company.trim()) {
      setError('Company is required')
      return false
    }
    if (!formData.text.trim()) {
      setError('Testimonial text is required')
      return false
    }
    if (formData.text.length < 20) {
      setError('Testimonial text must be at least 20 characters')
      return false
    }
    if (formData.rating < 1 || formData.rating > 5) {
      setError('Rating must be between 1 and 5')
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
        name: formData.name.trim(),
        role: formData.role.trim(),
        company: formData.company.trim(),
        avatar: formData.avatar,
        rating: parseInt(formData.rating),
        text: formData.text.trim(),
        featured: formData.featured,
        isActive: formData.isActive,
        order: parseInt(formData.order) || 0
      }

      if (editingTestimonial) {
        // Update existing
        const response = await testimonialsAPI.update(editingTestimonial._id, dataToSend)
        
        if (response.success) {
          setTestimonials(testimonials.map(t => 
            t._id === editingTestimonial._id ? response.data : t
          ))
          alert('Testimonial updated successfully')
          setShowModal(false)
          setEditingTestimonial(null)
        } else {
          setError(`Failed to update: ${response.message}`)
        }
      } else {
        // Create new
        const response = await testimonialsAPI.create(dataToSend)
        
        if (response.success) {
          setTestimonials([...testimonials, response.data])
          alert('Testimonial created successfully')
          setShowModal(false)
          setEditingTestimonial(null)
        } else {
          setError(`Failed to create: ${response.message}`)
        }
      }
    } catch (error) {
      console.error('Error saving testimonial:', error)
      setError(`Error: ${error.message}`)
    } finally {
      setSaving(false)
    }
  }

  const renderStars = (rating) => {
    return [...Array(5)].map((_, index) => (
      <Star
        key={index}
        className={`w-4 h-4 ${
          index < rating 
            ? 'fill-yellow-400 text-yellow-400' 
            : 'text-gray-300'
        }`}
      />
    ))
  }

  return (
    <ProtectedRoute>
      <div>
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Testimonials Management</h1>
            <p className="text-gray-600 mt-2">Manage customer testimonials and reviews</p>
          </div>
          <button
            onClick={handleCreate}
            className="flex items-center space-x-2 bg-primary text-white px-6 py-3 rounded-lg hover:bg-primary/90 transition-colors"
          >
            <Plus className="w-5 h-5" />
            <span>Add Testimonial</span>
          </button>
        </div>

        {/* Error Display */}
        {error && !showModal && (
          <div className="mb-6 bg-red-50 border border-red-200 rounded-lg p-4 flex items-start space-x-3">
            <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
            <div>
              <p className="text-red-800 font-semibold">Error</p>
              <p className="text-red-700 text-sm">{error}</p>
            </div>
          </div>
        )}

        {/* Testimonials Grid */}
        {loading ? (
          <div className="flex items-center justify-center h-64">
            <div className="text-center">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
              <p className="text-gray-600">Loading testimonials...</p>
            </div>
          </div>
        ) : testimonials.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((testimonial) => (
              <motion.div
                key={testimonial._id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition-shadow"
              >
                {/* Header with Actions */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center text-2xl">
                      {testimonial.avatar}
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900">{testimonial.name}</h3>
                      <p className="text-sm text-gray-600">{testimonial.role}</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <button
                      onClick={() => handleEdit(testimonial)}
                      className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                      title="Edit"
                    >
                      <Edit className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() => handleDelete(testimonial._id)}
                      className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                      title="Delete"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                {/* Rating */}
                <div className="flex items-center space-x-1 mb-3">
                  {renderStars(testimonial.rating)}
                </div>

                {/* Text */}
                <p className="text-gray-700 text-sm leading-relaxed mb-4 line-clamp-3">
                  "{testimonial.text}"
                </p>

                {/* Company */}
                <p className="text-sm font-semibold text-primary mb-4">
                  {testimonial.company}
                </p>

                {/* Badges */}
                <div className="flex items-center justify-between text-xs">
                  <div className="flex items-center space-x-2">
                    {testimonial.featured && (
                      <span className="px-2 py-1 bg-yellow-100 text-yellow-800 rounded-full font-semibold">
                        Featured
                      </span>
                    )}
                    <span className={`px-2 py-1 rounded-full font-semibold ${
                      testimonial.isActive 
                        ? 'bg-green-100 text-green-800' 
                        : 'bg-gray-100 text-gray-800'
                    }`}>
                      {testimonial.isActive ? 'Active' : 'Inactive'}
                    </span>
                  </div>
                  <span className="text-gray-500">Order: {testimonial.order}</span>
                </div>
              </motion.div>
            ))}
          </div>
        ) : (
          <div className="bg-white rounded-xl shadow-md p-12 text-center">
            <User className="w-16 h-16 text-gray-400 mx-auto mb-4" />
            <p className="text-gray-500 mb-4">No testimonials found</p>
            <button
              onClick={handleCreate}
              className="text-primary hover:underline"
            >
              Create your first testimonial
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
                className="bg-white rounded-xl shadow-2xl max-w-2xl w-full my-8"
              >
                <div className="p-6 border-b border-gray-200">
                  <div className="flex items-center justify-between">
                    <h2 className="text-2xl font-bold text-gray-900">
                      {editingTestimonial ? 'Edit Testimonial' : 'Create New Testimonial'}
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

                <form onSubmit={handleSave} className="p-6 space-y-6">
                  {/* Personal Info */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                        placeholder="John Doe"
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Role/Position <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        value={formData.role}
                        onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                        placeholder="CEO"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Company <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                        placeholder="Tech Corp"
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Avatar
                      </label>
                      <select
                        value={formData.avatar}
                        onChange={(e) => setFormData({ ...formData, avatar: e.target.value })}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                      >
                        {avatarOptions.map(avatar => (
                          <option key={avatar} value={avatar}>{avatar}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Rating */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Rating <span className="text-red-500">*</span>
                    </label>
                    <div className="flex items-center space-x-2">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <button
                          key={star}
                          type="button"
                          onClick={() => setFormData({ ...formData, rating: star })}
                          className="focus:outline-none"
                        >
                          <Star
                            className={`w-8 h-8 transition-colors ${
                              star <= formData.rating
                                ? 'fill-yellow-400 text-yellow-400'
                                : 'text-gray-300 hover:text-yellow-200'
                            }`}
                          />
                        </button>
                      ))}
                      <span className="ml-2 text-gray-600">
                        ({formData.rating} {formData.rating === 1 ? 'star' : 'stars'})
                      </span>
                    </div>
                  </div>

                  {/* Testimonial Text */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Testimonial <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      value={formData.text}
                      onChange={(e) => setFormData({ ...formData, text: e.target.value })}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                      rows="4"
                      placeholder="Write the testimonial text here..."
                      required
                    />
                    <p className="text-xs text-gray-500 mt-1">
                      {formData.text.length} characters (minimum 20)
                    </p>
                  </div>

                  {/* Options */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
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

                    <div className="flex items-center space-x-3 pt-8">
                      <input
                        type="checkbox"
                        id="featured"
                        checked={formData.featured}
                        onChange={(e) => setFormData({ ...formData, featured: e.target.checked })}
                        className="w-4 h-4 text-primary border-gray-300 rounded focus:ring-primary"
                      />
                      <label htmlFor="featured" className="text-sm font-semibold text-gray-700">
                        Featured
                      </label>
                    </div>

                    <div className="flex items-center space-x-3 pt-8">
                      <input
                        type="checkbox"
                        id="isActive"
                        checked={formData.isActive}
                        onChange={(e) => setFormData({ ...formData, isActive: e.target.checked })}
                        className="w-4 h-4 text-primary border-gray-300 rounded focus:ring-primary"
                      />
                      <label htmlFor="isActive" className="text-sm font-semibold text-gray-700">
                        Active
                      </label>
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
                    {saving ? (
                      <>
                        <Loader2 className="w-5 h-5 animate-spin" />
                        <span>Saving...</span>
                      </>
                    ) : (
                      <>
                        <Save className="w-5 h-5" />
                        <span>Save Testimonial</span>
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