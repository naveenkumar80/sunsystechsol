const express = require('express')
const router = express.Router()
const { protect, adminOnly } = require('../middleware/auth')
const {
  getAllServices,
  getService,
  createService,
  updateService,
  deleteService
} = require('../controllers/serviceController')

// Public routes
router.get('/', getAllServices)
router.get('/:slug', getService)

// Protected routes (Admin only)
router.use(protect, adminOnly)
router.post('/', createService)
router.put('/:id', updateService)
router.delete('/:id', deleteService)

module.exports = router