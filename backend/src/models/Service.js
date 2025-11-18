const mongoose = require('mongoose')

const serviceSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Service title is required'],
    trim: true
  },
  slug: {
    type: String,
    required: [true, 'Service slug is required'],
    unique: true,
    lowercase: true
  },
  category: {
    type: String,
    required: false,
    trim: true
  },
  shortDescription: {
    type: String,
    required: [true, 'Short description is required'],
    maxlength: [200, 'Short description cannot exceed 200 characters']
  },
  fullDescription: {
    type: String,
    required: [true, 'Full description is required']
  },
  icon: {
    type: String,
    default: 'Code'
  },
  features: [{
    title: {
      type: String,
      required: false
    },
    description: {
      type: String,
      required: false
    }
  }],
  pricing: {
    starter: {
      price: String,
      features: [String]
    },
    professional: {
      price: String,
      features: [String]
    },
    enterprise: {
      price: String,
      features: [String]
    }
  },
  technologies: {
    type: [String],
    default: []
  },
  metaTitle: {
    type: String,
    required: false
  },
  metaDescription: {
    type: String,
    required: false
  },
  keywords: {
    type: [String],
    default: []
  },
  isActive: {
    type: Boolean,
    default: true
  },
  order: {
    type: Number,
    default: 0
  }
}, {
  timestamps: true
})

module.exports = mongoose.model('Service', serviceSchema)