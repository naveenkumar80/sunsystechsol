const mongoose = require('mongoose')

const blogSchema = new mongoose.Schema({
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
  excerpt: {
    type: String,
    required: true,
    maxlength: 300
  },
  content: {
    type: String,
    required: true
  },
  featuredImage: {
    type: String,
    required: true
  },
  category: {
    type: String,
    required: true,
    enum: ['Web Development', 'Mobile Apps', 'SEO', 'Marketing', 'Technology', 'Business']
  },
  tags: [String],
  author: {
    name: String,
    avatar: String,
    bio: String
  },
  readTime: {
    type: Number,
    default: 5
  },
  views: {
    type: Number,
    default: 0
  },
  metaTitle: String,
  metaDescription: String,
  keywords: [String],
  isPublished: {
    type: Boolean,
    default: false
  },
  publishedAt: Date
}, {
  timestamps: true
})

// Index for searching
blogSchema.index({ title: 'text', content: 'text', tags: 'text' })

module.exports = mongoose.model('Blog', blogSchema)