require('dotenv').config()
const mongoose = require('mongoose')
const Service = require('./src/models/Service')
const connectDB = require('./src/config/database')

const services = [
  {
    title: 'Website Development',
    slug: 'website-development',
    category: 'Development',
    shortDescription: 'Custom, responsive websites built with cutting-edge technologies. Fast, secure, and optimized for conversions.',
    fullDescription: 'Your website is often the first interaction customers have with your brand. We create stunning, high-performance websites that not only look beautiful but are optimized for conversions, SEO, and user experience.',
    icon: 'Code',
    features: [
      { title: 'Responsive Design', description: 'Works perfectly on all devices' },
      { title: 'Lightning Fast', description: 'Optimized for speed and performance' },
      { title: 'SEO Optimized', description: 'Built with SEO best practices' },
      { title: 'Secure & Reliable', description: 'SSL encryption and security measures' }
    ],
    technologies: ['React', 'Next.js', 'Tailwind CSS', 'Node.js'],
    isActive: true,
    order: 1
  },
  {
    title: 'Mobile App Development',
    slug: 'mobile-app-development',
    category: 'Development',
    shortDescription: 'Native and cross-platform mobile apps that deliver exceptional user experiences on iOS and Android.',
    fullDescription: 'In a mobile-first world, having a powerful app is essential for business growth. We design and develop custom mobile applications that combine beautiful UI with seamless functionality.',
    icon: 'Smartphone',
    features: [
      { title: 'Native Performance', description: 'Blazing-fast apps with platform-specific tech' },
      { title: 'Beautiful UI/UX', description: 'Intuitive designs users love' },
      { title: 'Push Notifications', description: 'Engage users with timely notifications' },
      { title: 'Offline Functionality', description: 'Core features work without internet' }
    ],
    technologies: ['React Native', 'Flutter', 'Firebase', 'Swift', 'Kotlin'],
    isActive: true,
    order: 2
  },
  {
    title: 'Social Media Marketing',
    slug: 'social-media-marketing',
    category: 'Marketing',
    shortDescription: 'Data-driven social strategies that build brand awareness and drive engagement across all platforms.',
    fullDescription: 'Social media is where your customers are. We create compelling content, manage your social presence, and run targeted campaigns that turn followers into customers.',
    icon: 'Megaphone',
    features: [
      { title: 'Content Creation', description: 'Professional graphics, videos, and copy' },
      { title: 'Social Management', description: 'Daily posting and engagement' },
      { title: 'Paid Advertising', description: 'Targeted campaigns that maximize ROI' },
      { title: 'Analytics & Reporting', description: 'Detailed insights on performance' }
    ],
    technologies: ['Facebook Ads', 'Instagram', 'LinkedIn', 'Twitter', 'TikTok'],
    isActive: true,
    order: 3
  },
  {
    title: 'SEO Optimization',
    slug: 'seo-optimization',
    category: 'Marketing',
    shortDescription: 'Rank higher on Google, attract more customers, and dominate your industry with proven SEO strategies.',
    fullDescription: 'Search engine optimization isn\'t just about rankings—it\'s about attracting the right customers at the right time. Our data-driven SEO strategies help businesses increase organic visibility.',
    icon: 'TrendingUp',
    features: [
      { title: 'Technical SEO', description: 'Site speed and Core Web Vitals optimization' },
      { title: 'On-Page SEO', description: 'Content optimization and meta tags' },
      { title: 'Link Building', description: 'High-quality backlinks from authorities' },
      { title: 'Local SEO', description: 'Google Business Profile optimization' }
    ],
    technologies: ['Google Analytics', 'SEMrush', 'Ahrefs', 'Google Search Console'],
    isActive: true,
    order: 4
  },
  {
    title: 'IT Support',
    slug: 'it-support',
    category: 'Support',
    shortDescription: '24/7 technical support to keep your systems running smoothly. Fast response, reliable solutions.',
    fullDescription: 'Technology problems shouldn\'t slow down your business. Our expert IT support team provides fast, reliable solutions to keep your systems running smoothly.',
    icon: 'Headphones',
    features: [
      { title: '24/7 Availability', description: 'Round-the-clock support when you need it' },
      { title: 'Proactive Monitoring', description: 'Fix issues before they impact business' },
      { title: 'Fast Response', description: 'Average 15-minute response time' },
      { title: 'Security Management', description: 'Protect against cyber threats' }
    ],
    technologies: ['Windows Server', 'Linux', 'Microsoft 365', 'Google Workspace'],
    isActive: true,
    order: 5
  },
  {
    title: 'Business Development',
    slug: 'business-development',
    category: 'Consulting',
    shortDescription: 'Strategic consulting to identify growth opportunities and streamline your business operations.',
    fullDescription: 'We help businesses identify growth opportunities, optimize operations, and scale effectively. Our experienced consultants bring deep industry knowledge.',
    icon: 'BarChart3',
    features: [
      { title: 'Market Analysis', description: 'Comprehensive research and intelligence' },
      { title: 'Growth Strategy', description: 'Custom roadmaps for sustainable growth' },
      { title: 'Partnership Development', description: 'Build strategic partnerships' },
      { title: 'Sales Optimization', description: 'Streamline processes and increase conversions' }
    ],
    technologies: ['CRM Systems', 'Analytics Tools', 'Project Management'],
    isActive: true,
    order: 6
  },
  {
    title: 'IT Consulting',
    slug: 'consulting',
    category: 'Consulting',
    shortDescription: 'Expert guidance on technology adoption, digital transformation, and IT infrastructure planning.',
    fullDescription: 'Navigate the complex world of technology with expert guidance. Our IT consultants bring decades of experience to help you make informed decisions.',
    icon: 'Lightbulb',
    features: [
      { title: 'Technology Assessment', description: 'Comprehensive evaluation of IT infrastructure' },
      { title: 'Digital Strategy', description: 'Roadmaps for digital transformation' },
      { title: 'Vendor Selection', description: 'Expert guidance on technology partners' },
      { title: 'Cloud Migration', description: 'Strategic planning for cloud adoption' }
    ],
    technologies: ['AWS', 'Azure', 'Google Cloud', 'Enterprise Software'],
    isActive: true,
    order: 7
  },
  {
    title: 'Network Solutions',
    slug: 'network-solutions',
    category: 'Infrastructure',
    shortDescription: 'Secure, scalable network infrastructure designed for performance and reliability.',
    fullDescription: 'Your network is the backbone of your business. We design, implement, and manage secure, high-performance network infrastructure.',
    icon: 'Network',
    features: [
      { title: 'Network Design', description: 'Custom network architecture' },
      { title: 'Wireless Networks', description: 'Enterprise-grade WiFi with seamless coverage' },
      { title: 'Network Security', description: 'Firewalls, VPNs, and intrusion detection' },
      { title: 'Network Monitoring', description: '24/7 monitoring and proactive resolution' }
    ],
    technologies: ['Cisco', 'Ubiquiti', 'Fortinet', 'Palo Alto'],
    isActive: true,
    order: 8
  }
]

const seedServices = async () => {
  try {
    await connectDB()

    // Clear existing services
    await Service.deleteMany({})
    console.log('✅ Cleared existing services')

    // Insert new services
    await Service.insertMany(services)
    console.log('✅ Services seeded successfully')
    console.log(`📊 Total services: ${services.length}`)

    process.exit(0)
  } catch (error) {
    console.error('❌ Error seeding services:', error)
    process.exit(1)
  }
}

seedServices()