const Lead = require('../models/Lead')
const sendEmail = require('../utils/sendEmail')

// @desc    Create new lead (from contact form)
// @route   POST /api/leads
// @access  Public
exports.createLead = async (req, res) => {
  try {
    const { name, email, phone, service, budget, message, source } = req.body

    // Create lead
    const lead = await Lead.create({
      name,
      email,
      phone,
      service,
      budget,
      message,
      source: source || 'Contact Form'
    })

    // Send notification email to admin
    try {
      await sendEmail({
        to: process.env.ADMIN_EMAIL,
        subject: '🔔 New Lead Received - SunsysTechsol',
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <h2 style="color: #0066FF;">New Lead Received</h2>
            <div style="background: #f5f5f5; padding: 20px; border-radius: 8px; margin: 20px 0;">
              <p><strong>Name:</strong> ${name}</p>
              <p><strong>Email:</strong> ${email}</p>
              <p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
              <p><strong>Service:</strong> ${service || 'Not specified'}</p>
              <p><strong>Budget:</strong> ${budget || 'Not specified'}</p>
              <p><strong>Message:</strong></p>
              <p style="background: white; padding: 15px; border-radius: 5px;">${message}</p>
            </div>
            <p style="color: #666; font-size: 14px;">
              <a href="${process.env.FRONTEND_URL}/admin/leads/${lead._id}" style="background: #0066FF; color: white; padding: 10px 20px; text-decoration: none; border-radius: 5px; display: inline-block;">
                View in Dashboard
              </a>
            </p>
          </div>
        `
      })
    } catch (emailError) {
      console.error('Email notification failed:', emailError)
    }

    // Send confirmation email to customer
    try {
      await sendEmail({
        to: email,
        subject: 'Thank you for contacting SunsysTechsol Solutions',
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <h2 style="color: #0066FF;">Thank You, ${name}!</h2>
            <p>We've received your message and will get back to you within 24 hours.</p>
            <div style="background: #f5f5f5; padding: 20px; border-radius: 8px; margin: 20px 0;">
              <p><strong>Your Message:</strong></p>
              <p style="background: white; padding: 15px; border-radius: 5px;">${message}</p>
            </div>
            <p>In the meantime, feel free to:</p>
            <ul>
              <li><a href="${process.env.FRONTEND_URL}/services" style="color: #0066FF;">Explore our services</a></li>
              <li><a href="${process.env.FRONTEND_URL}/portfolio" style="color: #0066FF;">Check out our portfolio</a></li>
              <li><a href="${process.env.FRONTEND_URL}/pricing" style="color: #0066FF;">View pricing</a></li>
            </ul>
            <p style="margin-top: 30px;">
              Best regards,<br>
              <strong>The SunsysTechsol Team</strong>
            </p>
          </div>
        `
      })
    } catch (emailError) {
      console.error('Customer confirmation email failed:', emailError)
    }

    res.status(201).json({
      success: true,
      message: 'Thank you! We will contact you soon.',
      data: lead
    })
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error submitting form. Please try again.',
      error: error.message
    })
  }
}

// @desc    Get all leads
// @route   GET /api/leads
// @access  Private (Admin)
exports.getAllLeads = async (req, res) => {
  try {
    const { status, priority, search, page = 1, limit = 20 } = req.query

    // Build query
    const query = {}
    if (status) query.status = status
    if (priority) query.priority = priority
    if (search) {
      query.$text = { $search: search }
    }

    // Execute query with pagination
    const leads = await Lead.find(query)
      .populate('assignedTo', 'name email')
      .sort({ createdAt: -1 })
      .limit(limit * 1)
      .skip((page - 1) * limit)

    const count = await Lead.countDocuments(query)

    res.json({
      success: true,
      data: leads,
      pagination: {
        currentPage: page,
        totalPages: Math.ceil(count / limit),
        totalItems: count
      }
    })
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    })
  }
}

// @desc    Get single lead
// @route   GET /api/leads/:id
// @access  Private (Admin)
exports.getLead = async (req, res) => {
  try {
    const lead = await Lead.findById(req.params.id)
      .populate('assignedTo', 'name email')
      .populate('notes.addedBy', 'name')

    if (!lead) {
      return res.status(404).json({
        success: false,
        message: 'Lead not found'
      })
    }

    res.json({
      success: true,
      data: lead
    })
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    })
  }
}

// @desc    Update lead
// @route   PUT /api/leads/:id
// @access  Private (Admin)
exports.updateLead = async (req, res) => {
  try {
    const { status, priority, assignedTo, notes } = req.body

    const lead = await Lead.findById(req.params.id)
    if (!lead) {
      return res.status(404).json({
        success: false,
        message: 'Lead not found'
      })
    }

    // Update fields
    if (status) lead.status = status
    if (priority) lead.priority = priority
    if (assignedTo) lead.assignedTo = assignedTo

    // Add note if provided
    if (notes) {
      lead.notes.push({
        text: notes,
        addedBy: req.user.id
      })
    }

    await lead.save()

    res.json({
      success: true,
      message: 'Lead updated successfully',
      data: lead
    })
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    })
  }
}

// @desc    Delete lead
// @route   DELETE /api/leads/:id
// @access  Private (Admin)
exports.deleteLead = async (req, res) => {
  try {
    const lead = await Lead.findById(req.params.id)
    if (!lead) {
      return res.status(404).json({
        success: false,
        message: 'Lead not found'
      })
    }

    await lead.deleteOne()

    res.json({
      success: true,
      message: 'Lead deleted successfully'
    })
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    })
  }
}

// @desc    Get lead statistics
// @route   GET /api/leads/stats
// @access  Private (Admin)
exports.getLeadStats = async (req, res) => {
  try {
    const totalLeads = await Lead.countDocuments()
    const newLeads = await Lead.countDocuments({ status: 'New' })
    const qualifiedLeads = await Lead.countDocuments({ status: 'Qualified' })
    const convertedLeads = await Lead.countDocuments({ status: 'Converted' })

    // Leads by source
    const leadsBySource = await Lead.aggregate([
      {
        $group: {
          _id: '$source',
          count: { $sum: 1 }
        }
      }
    ])

    // Leads by service
    const leadsByService = await Lead.aggregate([
      {
        $group: {
          _id: '$service',
          count: { $sum: 1 }
        }
      }
    ])

    // Recent leads (last 7 days)
    const sevenDaysAgo = new Date()
    sevenDaysAgo.setDate(sevenDaysAgo.getDate() - 7)
    const recentLeads = await Lead.countDocuments({
      createdAt: { $gte: sevenDaysAgo }
    })

    res.json({
      success: true,
      stats: {
        totalLeads,
        newLeads,
        qualifiedLeads,
        convertedLeads,
        recentLeads,
        leadsBySource,
        leadsByService,
        conversionRate: totalLeads > 0 ? ((convertedLeads / totalLeads) * 100).toFixed(2) : 0
      }
    })
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    })
  }
}