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
  AlertCircle
} from 'lucide-react'
import ProtectedRoute from '@/components/admin/ProtectedRoute'

export default function AdminServicesPage() {
  const [services, setServices] = useState([])
  const [loading, setLoading] = useState(true)
  const [showModal, setShowModal] = useState(false)
  const [editingService, setEditingService] = useState(null)
  const [saving, setSaving] = useState(false)
  const [error, setError] = useState('')
  
  // Form state
  const [formData, setFormData] = useState({
    title: '',
    slug: '',
    category: '',
    shortDescription: '',
    fullDescription: '',
    icon: 'Code',
    features: [],
    technologies: [],
    isActive: true,
    order: 0
  })

  const iconOptions = [
    'Code', 'Smartphone', 'Megaphone', 'TrendingUp', 
    'Headphones', 'BarChart3', 'Lightbulb', 'Network'
  ]

  useEffect(() => {
    fetchServices()
  }, [])

  const fetchServices = async () => {
    setLoading(true)
    setError('')
    try {
      const response = await fetch('http://localhost:5000/api/services')
      const data = await response.json()
      
      if (data.success) {
        setServices(data.data || [])
      } else {
        setError('Failed to load services')
        setServices([])
      }
    } catch (error) {
      console.error('Error fetching services:', error)
      setError(`Error: ${error.message}. Is backend running on port 5000?`)
      setServices([])
    } finally {
      setLoading(false)
    }
  }

  const handleEdit = (service) => {
    setEditingService(service)
    setFormData({
      title: service.title,
      slug: service.slug,
      category: service.category || '',
      shortDescription: service.shortDescription,
      fullDescription: service.fullDescription,
      icon: service.icon || 'Code',
      features: service.features || [],
      technologies: service.technologies || [],
      isActive: service.isActive !== undefined ? service.isActive : true,
      order: service.order || 0
    })
    setShowModal(true)
    setError('')
  }

  const handleCreate = () => {
    setEditingService(null)
    setFormData({
      title: '',
      slug: '',
      category: '',
      shortDescription: '',
      fullDescription: '',
      icon: 'Code',
      features: [],
      technologies: [],
      isActive: true,
      order: services.length + 1
    })
    setShowModal(true)
    setError('')
  }

  const handleDelete = async (serviceId) => {
    if (confirm('Are you sure you want to delete this service?')) {
      try {
        const token = localStorage.getItem('adminToken')
        const response = await fetch(`http://localhost:5000/api/services/${serviceId}`, {
          method: 'DELETE',
          headers: {
            'Authorization': `Bearer ${token}`
          }
        })
        
        const data = await response.json()
        
        if (data.success) {
          setServices(services.filter(s => s._id !== serviceId))
          alert('Service deleted successfully')
        } else {
          alert(`Failed to delete service: ${data.message}`)
        }
      } catch (error) {
        console.error('Error deleting service:', error)
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
    if (formData.shortDescription.length > 200) {
      setError('Short description must be 200 characters or less')
      return false
    }
    if (!formData.fullDescription.trim()) {
      setError('Full description is required')
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
      const token = localStorage.getItem('adminToken')
      
      // Prepare data - ensure required fields are present
      const dataToSend = {
        title: formData.title.trim(),
        slug: formData.slug.trim(),
        category: formData.category.trim() || 'General',
        shortDescription: formData.shortDescription.trim(),
        fullDescription: formData.fullDescription.trim(),
        icon: formData.icon,
        features: formData.features.filter(f => f.title && f.description),
        technologies: formData.technologies,
        isActive: formData.isActive,
        order: parseInt(formData.order) || 0
      }

      console.log('Sending data:', dataToSend) // Debug
      
      if (editingService) {
        // Update existing service
        const response = await fetch(`http://localhost:5000/api/services/${editingService._id}`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
          },
          body: JSON.stringify(dataToSend)
        })
        
        const data = await response.json()
        console.log('Response:', data) // Debug
        
        if (data.success) {
          setServices(services.map(s => 
            s._id === editingService._id ? data.data : s
          ))
          alert('Service updated successfully')
          setShowModal(false)
          setEditingService(null)
        } else {
          setError(`Failed to update: ${data.message}`)
        }
      } else {
        // Create new service
        const response = await fetch('http://localhost:5000/api/services', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
          },
          body: JSON.stringify(dataToSend)
        })
        
        const data = await response.json()
        console.log('Response:', data) // Debug
        
        if (data.success) {
          setServices([...services, data.data])
          alert('Service created successfully')
          setShowModal(false)
          setEditingService(null)
        } else {
          setError(`Failed to create: ${data.message}`)
        }
      }
    } catch (error) {
      console.error('Error saving service:', error)
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

  const addFeature = () => {
    setFormData({
      ...formData,
      features: [...formData.features, { title: '', description: '' }]
    })
  }

  const updateFeature = (index, field, value) => {
    const newFeatures = [...formData.features]
    newFeatures[index][field] = value
    setFormData({ ...formData, features: newFeatures })
  }

  const removeFeature = (index) => {
    setFormData({
      ...formData,
      features: formData.features.filter((_, i) => i !== index)
    })
  }

  const addTechnology = (tech) => {
    if (tech && !formData.technologies.includes(tech)) {
      setFormData({
        ...formData,
        technologies: [...formData.technologies, tech]
      })
    }
  }

  const removeTechnology = (tech) => {
    setFormData({
      ...formData,
      technologies: formData.technologies.filter(t => t !== tech)
    })
  }

  return (
    <ProtectedRoute>
      <div>
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Services Management</h1>
            <p className="text-gray-600 mt-2">Manage your service offerings</p>
          </div>
          <button
            onClick={handleCreate}
            className="flex items-center space-x-2 bg-primary text-white px-6 py-3 rounded-lg hover:bg-primary/90 transition-colors"
          >
            <Plus className="w-5 h-5" />
            <span>Add Service</span>
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

        {/* Services Grid */}
        {loading ? (
          <div className="flex items-center justify-center h-64">
            <div className="text-center">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
              <p className="text-gray-600">Loading services...</p>
            </div>
          </div>
        ) : services.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <motion.div
                key={service._id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition-shadow"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <span className="text-2xl">
                      {service.icon === 'Code' ? '💻' : 
                       service.icon === 'Smartphone' ? '📱' :
                       service.icon === 'Megaphone' ? '📣' :
                       service.icon === 'TrendingUp' ? '📈' :
                       service.icon === 'Headphones' ? '🎧' :
                       service.icon === 'BarChart3' ? '📊' :
                       service.icon === 'Lightbulb' ? '💡' :
                       service.icon === 'Network' ? '🌐' : '💻'}
                    </span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <button
                      onClick={() => handleEdit(service)}
                      className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                      title="Edit"
                    >
                      <Edit className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() => handleDelete(service._id)}
                      className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                      title="Delete"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-2">{service.title}</h3>
                <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                  {service.shortDescription}
                </p>

                {service.technologies && service.technologies.length > 0 && (
                  <div className="flex flex-wrap gap-2 mb-4">
                    {service.technologies.slice(0, 3).map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                )}

                <div className="flex items-center justify-between text-sm">
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                    service.isActive 
                      ? 'bg-green-100 text-green-800' 
                      : 'bg-gray-100 text-gray-800'
                  }`}>
                    {service.isActive ? 'Active' : 'Inactive'}
                  </span>
                  <span className="text-gray-500">Order: {service.order}</span>
                </div>
              </motion.div>
            ))}
          </div>
        ) : (
          <div className="bg-white rounded-xl shadow-md p-12 text-center">
            <p className="text-gray-500 mb-4">No services found</p>
            <button
              onClick={handleCreate}
              className="text-primary hover:underline"
            >
              Create your first service
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
                className="bg-white rounded-xl shadow-2xl max-w-4xl w-full my-8"
              >
                <div className="p-6 border-b border-gray-200">
                  <div className="flex items-center justify-between">
                    <h2 className="text-2xl font-bold text-gray-900">
                      {editingService ? 'Edit Service' : 'Create New Service'}
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

                <form onSubmit={handleSave} className="p-6 space-y-6 max-h-[60vh] overflow-y-auto">
                  {/* Basic Info */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Service Title <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        value={formData.title}
                        onChange={(e) => handleTitleChange(e.target.value)}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                        placeholder="e.g., Website Development"
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
                        placeholder="website-development"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Category
                      </label>
                      <input
                        type="text"
                        value={formData.category}
                        onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                        placeholder="e.g., Development"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Icon
                      </label>
                      <select
                        value={formData.icon}
                        onChange={(e) => setFormData({ ...formData, icon: e.target.value })}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                      >
                        {iconOptions.map(icon => (
                          <option key={icon} value={icon}>{icon}</option>
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
                        onChange={(e) => setFormData({ ...formData, order: e.target.value })}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                        min="0"
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
                      maxLength="200"
                      placeholder="Brief description for service cards"
                      required
                    />
                    <p className="text-xs text-gray-500 mt-1">
                      {formData.shortDescription.length}/200 characters
                    </p>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Full Description <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      value={formData.fullDescription}
                      onChange={(e) => setFormData({ ...formData, fullDescription: e.target.value })}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                      rows="4"
                      placeholder="Detailed description of the service"
                      required
                    />
                  </div>

                  {/* Features */}
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <label className="text-sm font-semibold text-gray-700">
                        Features (Optional)
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
                            value={feature.title}
                            onChange={(e) => updateFeature(index, 'title', e.target.value)}
                            placeholder="Feature title"
                            className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-sm"
                          />
                          <input
                            type="text"
                            value={feature.description}
                            onChange={(e) => updateFeature(index, 'description', e.target.value)}
                            placeholder="Feature description"
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

                  {/* Technologies */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Technologies (Optional)
                    </label>
                    <div className="flex gap-2 mb-2">
                      <input
                        type="text"
                        id="tech-input"
                        placeholder="Type technology and press Enter"
                        className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-sm"
                        onKeyDown={(e) => {
                          if (e.key === 'Enter') {
                            e.preventDefault()
                            addTechnology(e.target.value)
                            e.target.value = ''
                          }
                        }}
                      />
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {formData.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm flex items-center space-x-2"
                        >
                          <span>{tech}</span>
                          <button
                            type="button"
                            onClick={() => removeTechnology(tech)}
                            className="hover:text-red-600"
                          >
                            <X className="w-3 h-3" />
                          </button>
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Status */}
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
                        <span>Save Service</span>
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