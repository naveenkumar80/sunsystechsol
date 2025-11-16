const mongoose = require('mongoose')

const serviceSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true
  },
  slug: {
    type: String,
    required: true,
    unique: true,
    lowercase: true
  },
  category: {
    type: String,
    required: true
  },
  shortDescription: {
    type: String,
    required: true,
    maxlength: 200
  },
  fullDescription: {
    type: String,
    required: true
  },
  icon: {
    type: String
  },
  features: [{
    title: String,
    description: String
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
  technologies: [String],
  metaTitle: String,
  metaDescription: String,
  keywords: [String],
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