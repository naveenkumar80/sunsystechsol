const express = require('express')
const router = express.Router()
const { protect, adminOnly } = require('../middleware/auth')
const {
  getAllPortfolio,
  getPortfolioItem,
  createPortfolio,
  updatePortfolio,
  deletePortfolio
} = require('../controllers/portfolioController')

// Public routes
router.get('/', getAllPortfolio)
router.get('/:slug', getPortfolioItem)

// Protected routes (Admin only)
router.use(protect, adminOnly)
router.post('/', createPortfolio)
router.put('/:id', updatePortfolio)
router.delete('/:id', deletePortfolio)

module.exports = router