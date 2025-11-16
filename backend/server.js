require('dotenv').config()
const express = require('express')
const cors = require('cors')
const helmet = require('helmet')
const compression = require('compression')
const cookieParser = require('cookie-parser')
const rateLimit = require('express-rate-limit')
const connectDB = require('./src/config/database')
const errorHandler = require('./src/middleware/errorHandler')

// Connect to database
connectDB()

// Initialize app
const app = express()

// Security middleware
app.use(helmet())

// CORS
app.use(cors({
  origin: process.env.CORS_ORIGIN || 'http://localhost:3000',
  credentials: true
}))

// Body parser
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// Cookie parser
app.use(cookieParser())

// Compression
app.use(compression())

// Rate limiting
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // limit each IP to 100 requests per windowMs
  message: 'Too many requests from this IP, please try again later.'
})

app.use('/api/', limiter)

// Health check route
app.get('/health', (req, res) => {
  res.json({ 
    status: 'OK', 
    message: 'Server is running',
    timestamp: new Date().toISOString()
  })
})

// API Routes
app.use('/api/auth', require('./src/routes/auth'))
app.use('/api/leads', require('./src/routes/leads'))
app.use('/api/services', require('./src/routes/services'))
app.use('/api/portfolio', require('./src/routes/portfolio'))
app.use('/api/blog', require('./src/routes/blog'))
app.use('/api/testimonials', require('./src/routes/testimonials'))

// 404 handler
app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: 'Route not found'
  })
})

// Error handler
app.use(errorHandler)

// Start server
const PORT = process.env.PORT || 5000
const server = app.listen(PORT, () => {
  console.log(`
    ╔════════════════════════════════════════╗
    ║                                        ║
    ║   🚀 NexaTech Backend Server          ║
    ║                                        ║
    ║   Environment: ${process.env.NODE_ENV || 'development'}                ║
    ║   Port: ${PORT}                            ║
    ║   Database: Connected                  ║
    ║                                        ║
    ║   API: http://localhost:${PORT}/api      ║
    ║   Health: http://localhost:${PORT}/health ║
    ║                                        ║
    ╚════════════════════════════════════════╝
  `)
})

// Handle unhandled promise rejections
process.on('unhandledRejection', (err) => {
  console.error(`❌ Unhandled Rejection: ${err.message}`)
  server.close(() => process.exit(1))
})