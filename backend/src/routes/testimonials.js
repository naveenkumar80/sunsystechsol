const express = require('express')
const router = express.Router()
const { protect, adminOnly } = require('../middleware/auth')
const Testimonial = require('../models/Testimonial')

// @desc    Get all active testimonials
// @route   GET /api/testimonials
// @access  Public
router.get('/', async (req, res) => {
  try {
    const { featured } = req.query
    const query = { isActive: true }

    if (featured === 'true') {
      query.featured = true
    }

    const testimonials = await Testimonial.find(query).sort({ order: 1 })

    res.json({
      success: true,
      count: testimonials.length,
      data: testimonials
    })
  } catch (error) {
    res.status(500).json({ success: false, message: error.message })
  }
})

// Protected routes (Admin only)
router.use(protect, adminOnly)

// @desc    Create testimonial
// @route   POST /api/testimonials
// @access  Private (Admin)
router.post('/', async (req, res) => {
  try {
    const testimonial = await Testimonial.create(req.body)
    res.status(201).json({
      success: true,
      message: 'Testimonial created successfully',
      data: testimonial
    })
  } catch (error) {
    res.status(500).json({ success: false, message: error.message })
  }
})

// @desc    Update testimonial
// @route   PUT /api/testimonials/:id
// @access  Private (Admin)
router.put('/:id', async (req, res) => {
  try {
    const testimonial = await Testimonial.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    )

    if (!testimonial) {
      return res.status(404).json({
        success: false,
        message: 'Testimonial not found'
      })
    }

    res.json({
      success: true,
      message: 'Testimonial updated successfully',
      data: testimonial
    })
  } catch (error) {
    res.status(500).json({ success: false, message: error.message })
  }
})

// @desc    Delete testimonial
// @route   DELETE /api/testimonials/:id
// @access  Private (Admin)
router.delete('/:id', async (req, res) => {
  try {
    const testimonial = await Testimonial.findById(req.params.id)

    if (!testimonial) {
      return res.status(404).json({
        success: false,
        message: 'Testimonial not found'
      })
    }

    await testimonial.deleteOne()

    res.json({
      success: true,
      message: 'Testimonial deleted successfully'
    })
  } catch (error) {
    res.status(500).json({ success: false, message: error.message })
  }
})

module.exports = router