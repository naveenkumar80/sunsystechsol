const Portfolio = require('../models/Portfolio')

// @desc    Get all portfolio items
// @route   GET /api/portfolio
// @access  Public
exports.getAllPortfolio = async (req, res) => {
  try {
    console.log('📡 GET /api/portfolio - Request received')
    
    const { category, featured } = req.query
    const query = { isActive: true }

    if (category && category !== 'All') {
      query.category = category
    }
    if (featured === 'true') {
      query.featured = true
    }

    console.log('🔍 Query:', query)

    const portfolio = await Portfolio.find(query)
      .sort({ order: 1, createdAt: -1 })

    console.log(`✅ Found ${portfolio.length} portfolio items`)

    res.json({
      success: true,
      count: portfolio.length,
      data: portfolio
    })
  } catch (error) {
    console.error('❌ Error in getAllPortfolio:', error)
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
    console.log('📡 GET /api/portfolio/:slug - Request for:', req.params.slug)
    
    const portfolio = await Portfolio.findOne({ 
      slug: req.params.slug, 
      isActive: true 
    })

    if (!portfolio) {
      console.log('❌ Portfolio item not found')
      return res.status(404).json({
        success: false,
        message: 'Portfolio item not found'
      })
    }

    console.log('✅ Found portfolio item:', portfolio.title)

    res.json({
      success: true,
      data: portfolio
    })
  } catch (error) {
    console.error('❌ Error in getPortfolioItem:', error)
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
    console.log('📡 POST /api/portfolio - Creating new item')
    console.log('📦 Data:', req.body)
    
    const portfolio = await Portfolio.create(req.body)
    
    console.log('✅ Created portfolio item:', portfolio._id)

    res.status(201).json({
      success: true,
      message: 'Portfolio item created successfully',
      data: portfolio
    })
  } catch (error) {
    console.error('❌ Error creating portfolio:', error)
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
    console.log('📡 PUT /api/portfolio/:id - Updating:', req.params.id)
    
    const portfolio = await Portfolio.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    )

    if (!portfolio) {
      console.log('❌ Portfolio item not found')
      return res.status(404).json({
        success: false,
        message: 'Portfolio item not found'
      })
    }

    console.log('✅ Updated portfolio item:', portfolio.title)

    res.json({
      success: true,
      message: 'Portfolio item updated successfully',
      data: portfolio
    })
  } catch (error) {
    console.error('❌ Error updating portfolio:', error)
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
    console.log('📡 DELETE /api/portfolio/:id - Deleting:', req.params.id)
    
    const portfolio = await Portfolio.findById(req.params.id)

    if (!portfolio) {
      console.log('❌ Portfolio item not found')
      return res.status(404).json({
        success: false,
        message: 'Portfolio item not found'
      })
    }

    await portfolio.deleteOne()
    console.log('✅ Deleted portfolio item')

    res.json({
      success: true,
      message: 'Portfolio item deleted successfully'
    })
  } catch (error) {
    console.error('❌ Error deleting portfolio:', error)
    res.status(500).json({
      success: false,
      message: error.message
    })
  }
}