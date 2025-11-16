const express = require('express')
const router = express.Router()
const { protect, adminOnly } = require('../middleware/auth')
const Blog = require('../models/Blog')

// @desc    Get all published blogs
// @route   GET /api/blog
// @access  Public
router.get('/', async (req, res) => {
  try {
    const { category, search, page = 1, limit = 10 } = req.query
    const query = { isPublished: true }

    if (category) query.category = category
    if (search) query.$text = { $search: search }

    const blogs = await Blog.find(query)
      .sort({ publishedAt: -1 })
      .limit(limit * 1)
      .skip((page - 1) * limit)

    const count = await Blog.countDocuments(query)

    res.json({
      success: true,
      data: blogs,
      pagination: {
        currentPage: page,
        totalPages: Math.ceil(count / limit),
        totalItems: count
      }
    })
  } catch (error) {
    res.status(500).json({ success: false, message: error.message })
  }
})

// @desc    Get single blog
// @route   GET /api/blog/:slug
// @access  Public
router.get('/:slug', async (req, res) => {
  try {
    const blog = await Blog.findOne({ 
      slug: req.params.slug, 
      isPublished: true 
    })

    if (!blog) {
      return res.status(404).json({
        success: false,
        message: 'Blog post not found'
      })
    }

    // Increment views
    blog.views += 1
    await blog.save()

    res.json({ success: true, data: blog })
  } catch (error) {
    res.status(500).json({ success: false, message: error.message })
  }
})

// Protected routes (Admin only)
router.use(protect, adminOnly)

// @desc    Create blog
// @route   POST /api/blog
// @access  Private (Admin)
router.post('/', async (req, res) => {
  try {
    const blog = await Blog.create(req.body)
    res.status(201).json({
      success: true,
      message: 'Blog created successfully',
      data: blog
    })
  } catch (error) {
    res.status(500).json({ success: false, message: error.message })
  }
})

// @desc    Update blog
// @route   PUT /api/blog/:id
// @access  Private (Admin)
router.put('/:id', async (req, res) => {
  try {
    const blog = await Blog.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    )

    if (!blog) {
      return res.status(404).json({
        success: false,
        message: 'Blog not found'
      })
    }

    res.json({
      success: true,
      message: 'Blog updated successfully',
      data: blog
    })
  } catch (error) {
    res.status(500).json({ success: false, message: error.message })
  }
})

// @desc    Delete blog
// @route   DELETE /api/blog/:id
// @access  Private (Admin)
router.delete('/:id', async (req, res) => {
  try {
    const blog = await Blog.findById(req.params.id)

    if (!blog) {
      return res.status(404).json({
        success: false,
        message: 'Blog not found'
      })
    }

    await blog.deleteOne()

    res.json({
      success: true,
      message: 'Blog deleted successfully'
    })
  } catch (error) {
    res.status(500).json({ success: false, message: error.message })
  }
})

module.exports = router