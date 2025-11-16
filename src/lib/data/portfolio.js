export const portfolioCategories = [
  'All',
  'Web Development',
  'Mobile Apps',
  'E-commerce',
  'SaaS',
  'UI/UX Design',
  'Branding'
]

export const portfolioData = [
  {
    id: 1,
    slug: 'ecommerce-fashion-store',
    title: 'Fashion E-commerce Platform',
    category: 'E-commerce',
    tags: ['React', 'Node.js', 'MongoDB', 'Stripe'],
    shortDescription: 'Modern e-commerce platform with AI-powered recommendations',
    featured: true,
    image: '🛍️',
    client: 'StyleHub Fashion',
    duration: '4 months',
    year: '2024',
    overview: 'A comprehensive e-commerce solution built for a fashion retailer looking to expand their online presence. The platform features AI-powered product recommendations, real-time inventory management, and seamless checkout experience.',
    challenge: 'The client had an outdated website with poor mobile experience and high cart abandonment rates. They needed a modern solution that could handle high traffic during sales periods.',
    solution: 'We built a custom e-commerce platform using React and Node.js with microservices architecture. Implemented AI recommendations, optimized checkout flow, and integrated with their existing inventory system.',
    results: [
      { metric: '300%', label: 'Increase in mobile conversions' },
      { metric: '45%', label: 'Reduction in cart abandonment' },
      { metric: '$2M', label: 'Additional annual revenue' },
      { metric: '4.8/5', label: 'Customer satisfaction score' }
    ],
    features: [
      'AI-powered product recommendations',
      'Real-time inventory management',
      'Multi-currency support',
      'Advanced search & filtering',
      'Wishlist & save for later',
      'Guest checkout option'
    ],
    testimonial: {
      text: "SunsysTechsol transformed our online business. Sales have tripled since launch!",
      author: "Jessica Miller",
      role: "CEO, StyleHub Fashion"
    }
  },
  {
    id: 2,
    slug: 'healthcare-mobile-app',
    title: 'HealthConnect Telemedicine App',
    category: 'Mobile Apps',
    tags: ['React Native', 'Firebase', 'Video API', 'HIPAA'],
    shortDescription: 'HIPAA-compliant telemedicine platform connecting patients with doctors',
    featured: true,
    image: '🏥',
    client: 'HealthConnect Inc.',
    duration: '6 months',
    year: '2024',
    overview: 'A secure telemedicine platform enabling virtual consultations between patients and healthcare providers. Built with strict HIPAA compliance and real-time video capabilities.',
    challenge: 'Create a secure, user-friendly platform that meets HIPAA compliance while providing seamless video consultations and medical record management.',
    solution: 'Developed a cross-platform mobile app using React Native with end-to-end encryption, secure video conferencing, and integrated electronic health records system.',
    results: [
      { metric: '50K+', label: 'Active users' },
      { metric: '10K+', label: 'Monthly consultations' },
      { metric: '4.9/5', label: 'App store rating' },
      { metric: '98%', label: 'Uptime guarantee' }
    ],
    features: [
      'Secure video consultations',
      'Electronic health records',
      'Prescription management',
      'Appointment scheduling',
      'In-app payments',
      'Multi-language support'
    ],
    testimonial: {
      text: "The app has revolutionized how we deliver healthcare. Our patient satisfaction scores have never been higher.",
      author: "Dr. Robert Chen",
      role: "Medical Director, HealthConnect"
    }
  },
  {
    id: 3,
    slug: 'fintech-dashboard',
    title: 'FinanceFlow SaaS Dashboard',
    category: 'SaaS',
    tags: ['Vue.js', 'Python', 'PostgreSQL', 'AWS'],
    shortDescription: 'Enterprise financial management platform for SMBs',
    featured: true,
    image: '💰',
    client: 'FinanceFlow',
    duration: '8 months',
    year: '2023',
    overview: 'A comprehensive financial management SaaS platform designed for small and medium businesses to track expenses, manage invoices, and generate financial reports.',
    challenge: 'Small businesses struggled with complex financial software. They needed an intuitive solution that could handle accounting, invoicing, and reporting without requiring an accountant.',
    solution: 'Built a cloud-based SaaS platform with automated bookkeeping, smart categorization, and real-time financial insights with beautiful data visualizations.',
    results: [
      { metric: '5K+', label: 'Business customers' },
      { metric: '$500K', label: 'Monthly recurring revenue' },
      { metric: '40%', label: 'Time saved on bookkeeping' },
      { metric: '95%', label: 'Customer retention rate' }
    ],
    features: [
      'Automated bookkeeping',
      'Invoice generation & tracking',
      'Expense categorization',
      'Financial reporting',
      'Multi-currency support',
      'API integrations'
    ],
    testimonial: {
      text: "FinanceFlow has simplified our financial management completely. We've saved countless hours and improved our cash flow.",
      author: "David Thompson",
      role: "Founder, TechStartup Inc."
    }
  },
  {
    id: 4,
    slug: 'real-estate-platform',
    title: 'PropFinder Real Estate Platform',
    category: 'Web Development',
    tags: ['Next.js', 'Tailwind', 'Maps API', 'Search'],
    shortDescription: 'AI-powered property search and listing platform',
    featured: false,
    image: '🏠',
    client: 'PropFinder Real Estate',
    duration: '5 months',
    year: '2024',
    overview: 'An innovative real estate platform featuring AI-powered property recommendations, virtual tours, and advanced search capabilities.',
    challenge: 'Traditional property search was time-consuming and inefficient. Buyers struggled to find properties matching their specific criteria.',
    solution: 'Created a platform with AI-powered matching, interactive maps, virtual tours, and advanced filtering to help buyers find their perfect property.',
    results: [
      { metric: '200K+', label: 'Monthly active users' },
      { metric: '15K+', label: 'Properties listed' },
      { metric: '60%', label: 'Faster property matching' },
      { metric: '4.7/5', label: 'User satisfaction' }
    ],
    features: [
      'AI-powered property matching',
      'Virtual property tours',
      'Interactive map search',
      'Mortgage calculator',
      'Saved searches & alerts',
      'Agent messaging system'
    ],
    testimonial: {
      text: "PropFinder helped us sell properties 40% faster. The platform is intuitive and our agents love it.",
      author: "Maria Rodriguez",
      role: "Sales Director, PropFinder"
    }
  },
  {
    id: 5,
    slug: 'restaurant-ordering-app',
    title: 'FoodQuick Delivery App',
    category: 'Mobile Apps',
    tags: ['Flutter', 'Firebase', 'Maps', 'Payment'],
    shortDescription: 'Food delivery platform with real-time tracking',
    featured: false,
    image: '🍔',
    client: 'FoodQuick',
    duration: '4 months',
    year: '2023',
    overview: 'A complete food delivery ecosystem including customer app, restaurant partner app, and delivery driver app with real-time tracking.',
    challenge: 'Local restaurants needed a delivery platform that was affordable and easy to use, with real-time order tracking for customers.',
    solution: 'Built a comprehensive delivery platform with three interconnected apps, real-time GPS tracking, and integrated payment processing.',
    results: [
      { metric: '30K+', label: 'Active users' },
      { metric: '100+', label: 'Restaurant partners' },
      { metric: '25min', label: 'Average delivery time' },
      { metric: '4.6/5', label: 'Customer rating' }
    ],
    features: [
      'Real-time order tracking',
      'Multiple payment methods',
      'Restaurant reviews & ratings',
      'Schedule orders in advance',
      'Loyalty rewards program',
      'Push notifications'
    ],
    testimonial: {
      text: "FoodQuick has increased our delivery orders by 200%. The system is reliable and customers love the tracking feature.",
      author: "Tony Marino",
      role: "Owner, Marino's Italian Kitchen"
    }
  },
  {
    id: 6,
    slug: 'fitness-tracking-app',
    title: 'FitLife Fitness Tracker',
    category: 'Mobile Apps',
    tags: ['Swift', 'HealthKit', 'CoreML', 'Firebase'],
    shortDescription: 'AI-powered fitness and nutrition tracking app',
    featured: false,
    image: '💪',
    client: 'FitLife Wellness',
    duration: '5 months',
    year: '2023',
    overview: 'A comprehensive fitness app featuring workout tracking, meal planning, AI coaching, and integration with wearable devices.',
    challenge: 'Fitness enthusiasts needed an all-in-one solution for tracking workouts, nutrition, and progress with personalized recommendations.',
    solution: 'Developed an iOS app with AI-powered workout recommendations, nutrition tracking, and seamless integration with Apple Health and wearables.',
    results: [
      { metric: '100K+', label: 'Downloads' },
      { metric: '4.8/5', label: 'App Store rating' },
      { metric: '80%', label: 'User retention (30 days)' },
      { metric: 'Featured', label: 'By Apple as "App of the Day"' }
    ],
    features: [
      'AI workout recommendations',
      'Nutrition tracking & meal plans',
      'Progress photos & measurements',
      'Wearable device integration',
      'Social challenges',
      'Video exercise library'
    ],
    testimonial: {
      text: "FitLife has become an essential part of my daily routine. The AI coaching is incredibly accurate and motivating.",
      author: "Amanda Brooks",
      role: "Fitness Enthusiast"
    }
  },
  {
    id: 7,
    slug: 'education-learning-platform',
    title: 'EduLearn Online Learning',
    category: 'Web Development',
    tags: ['React', 'Node.js', 'MongoDB', 'Video'],
    shortDescription: 'Interactive online learning platform with live classes',
    featured: false,
    image: '📚',
    client: 'EduLearn Academy',
    duration: '6 months',
    year: '2024',
    overview: 'A comprehensive e-learning platform featuring live classes, recorded courses, interactive quizzes, and progress tracking.',
    challenge: 'Educational institutions needed a robust platform for remote learning that could handle thousands of concurrent users during live sessions.',
    solution: 'Built a scalable learning management system with live streaming, course management, student analytics, and interactive features.',
    results: [
      { metric: '50K+', label: 'Active students' },
      { metric: '500+', label: 'Courses available' },
      { metric: '95%', label: 'Course completion rate' },
      { metric: '4.9/5', label: 'Student satisfaction' }
    ],
    features: [
      'Live interactive classes',
      'Course marketplace',
      'Progress tracking & certificates',
      'Interactive quizzes',
      'Discussion forums',
      'Mobile app support'
    ],
    testimonial: {
      text: "EduLearn has transformed how we deliver education. Our student engagement has increased by 300%.",
      author: "Prof. James Wilson",
      role: "Dean, EduLearn Academy"
    }
  },
  {
    id: 8,
    slug: 'social-networking-app',
    title: 'ConnectHub Social Platform',
    category: 'SaaS',
    tags: ['React', 'GraphQL', 'PostgreSQL', 'Redis'],
    shortDescription: 'Professional networking platform for creatives',
    featured: false,
    image: '🌐',
    client: 'ConnectHub',
    duration: '7 months',
    year: '2023',
    overview: 'A niche social networking platform designed for creative professionals to showcase work, collaborate, and find opportunities.',
    challenge: 'Creative professionals lacked a dedicated platform to showcase portfolios, network with peers, and find freelance opportunities.',
    solution: 'Created a social platform with portfolio features, job board, collaboration tools, and AI-powered networking recommendations.',
    results: [
      { metric: '80K+', label: 'Active members' },
      { metric: '10K+', label: 'Projects shared' },
      { metric: '5K+', label: 'Jobs posted monthly' },
      { metric: '4.5/5', label: 'Platform rating' }
    ],
    features: [
      'Portfolio showcase',
      'Job board & freelance marketplace',
      'Collaboration tools',
      'Messaging & networking',
      'Event listings',
      'Skills endorsements'
    ],
    testimonial: {
      text: "ConnectHub helped me find my dream job and connect with amazing creatives. It's an essential tool for my career.",
      author: "Sophie Anderson",
      role: "Graphic Designer"
    }
  }
]

export function getPortfolioBySlug(slug) {
  return portfolioData.find(project => project.slug === slug)
}

export function getPortfolioByCategory(category) {
  if (category === 'All') return portfolioData
  return portfolioData.filter(project => project.category === category)
}

export function getFeaturedPortfolio() {
  return portfolioData.filter(project => project.featured)
}