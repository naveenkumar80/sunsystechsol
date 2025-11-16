const Portfolio = require('../models/Portfolio')

// @desc    Get all portfolio items
// @route   GET /api/portfolio
// @access  Public
exports.getAllPortfolio = async (req, res) => {
  try {
    const { category, featured } = req.query
    const query = { isActive: true }

    if (category && category !== 'All') {
      query.category = category
    }
    if (featured === 'true') {
      query.featured = true
    }

    const portfolio = await Portfolio.find(query).sort({ order: 1, createdAt: -1 })

    res.json({
      success: true,
      count: portfolio.length,
      data: portfolio
    })
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    })
  }
}

// @desc    Get single portfolio item
// @route   GET /api/portfolio/:slug
// @access  Public
exports.getPortfolioItem = async (req, res) => {
  try {
    const portfolio = await Portfolio.findOne({ 
      slug: req.params.slug, 
      isActive: true 
    })

    if (!portfolio) {
      return res.status(404).json({
        success: false,
        message: 'Portfolio item not found'
      })
    }

    res.json({
      success: true,
      data: portfolio
    })
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    })
  }
}

// @desc    Create portfolio item
// @route   POST /api/portfolio
// @access  Private (Admin)
exports.createPortfolio = async (req, res) => {
  try {
    const portfolio = await Portfolio.create(req.body)

    res.status(201).json({
      success: true,
      message: 'Portfolio item created successfully',
      data: portfolio
    })
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    })
  }
}

// @desc    Update portfolio item
// @route   PUT /api/portfolio/:id
// @access  Private (Admin)
exports.updatePortfolio = async (req, res) => {
  try {
    const portfolio = await Portfolio.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    )

    if (!portfolio) {
      return res.status(404).json({
        success: false,
        message: 'Portfolio item not found'
      })
    }

    res.json({
      success: true,
      message: 'Portfolio item updated successfully',
      data: portfolio
    })
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    })
  }
}

// @desc    Delete portfolio item
// @route   DELETE /api/portfolio/:id
// @access  Private (Admin)
exports.deletePortfolio = async (req, res) => {
  try {
    const portfolio = await Portfolio.findById(req.params.id)

    if (!portfolio) {
      return res.status(404).json({
        success: false,
        message: 'Portfolio item not found'
      })
    }

    await portfolio.deleteOne()

    res.json({
      success: true,
      message: 'Portfolio item deleted successfully'
    })
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    })
  }
}