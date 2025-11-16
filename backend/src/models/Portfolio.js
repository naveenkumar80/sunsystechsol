const mongoose = require('mongoose')

const portfolioSchema = new mongoose.Schema({
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
  tags: [String],
  shortDescription: {
    type: String,
    required: true
  },
  client: {
    type: String,
    required: true
  },
  duration: String,
  year: String,
  featured: {
    type: Boolean,
    default: false
  },
  image: String,
  gallery: [String],
  overview: String,
  challenge: String,
  solution: String,
  results: [{
    metric: String,
    label: String
  }],
  features: [String],
  technologies: [String],
  testimonial: {
    text: String,
    author: String,
    role: String
  },
  url: String,
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

module.exports = mongoose.model('Portfolio', portfolioSchema)