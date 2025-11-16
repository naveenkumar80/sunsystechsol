const express = require('express')
const router = express.Router()
const { body } = require('express-validator')
const { validate } = require('../middleware/validator')
const { protect, adminOnly } = require('../middleware/auth')
const {
  createLead,
  getAllLeads,
  getLead,
  updateLead,
  deleteLead,
  getLeadStats
} = require('../controllers/leadController')

// Validation rules
const leadValidation = [
  body('name').trim().notEmpty().withMessage('Name is required'),
  body('email').isEmail().withMessage('Please provide a valid email'),
  body('message').trim().notEmpty().withMessage('Message is required')
]

// Public routes
router.post('/', leadValidation, validate, createLead)

// Protected routes (Admin only)
router.use(protect, adminOnly)
router.get('/', getAllLeads)
router.get('/stats', getLeadStats)
router.get('/:id', getLead)
router.put('/:id', updateLead)
router.delete('/:id', deleteLead)

module.exports = router