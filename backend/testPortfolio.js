require('dotenv').config()
const mongoose = require('mongoose')
const Portfolio = require('./src/models/Portfolio')

async function testPortfolio() {
  try {
    // Connect to database
    await mongoose.connect(process.env.MONGODB_URI)
    console.log('✅ Connected to MongoDB')

    // Count documents
    const count = await Portfolio.countDocuments()
    console.log(`📊 Total portfolio items: ${count}`)

    // Get all portfolio items
    const items = await Portfolio.find()
    console.log('📦 Portfolio items:')
    items.forEach(item => {
      console.log(`  - ${item.title} (${item.slug}) - Active: ${item.isActive}`)
    })

    // Get only active items
    const activeItems = await Portfolio.find({ isActive: true })
    console.log(`\n✅ Active items: ${activeItems.length}`)

    process.exit(0)
  } catch (error) {
    console.error('❌ Error:', error)
    process.exit(1)
  }
}

testPortfolio()