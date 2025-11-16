require('dotenv').config()
const mongoose = require('mongoose')
const User = require('../models/User')
const connectDB = require('../config/database')

const seedAdmin = async () => {
  try {
    await connectDB()

    // Check if admin already exists
    const existingAdmin = await User.findOne({ email: 'admin@nexatech.com' })
    
    if (existingAdmin) {
      console.log('⚠️  Admin user already exists')
      process.exit(0)
    }

    // Create admin user
    const admin = await User.create({
      name: 'Admin',
      email: 'admin@nexatech.com',
      password: 'admin123456',
      role: 'admin'
    })

    console.log('✅ Admin user created successfully')
    console.log('📧 Email: admin@nexatech.com')
    console.log('🔑 Password: admin123456')
    console.log('⚠️  IMPORTANT: Change this password after first login!')

    process.exit(0)
  } catch (error) {
    console.error('❌ Error seeding database:', error)
    process.exit(1)
  }
}

seedAdmin()