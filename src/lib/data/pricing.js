export const pricingPlans = {
  'website-development': [
    {
      name: 'Starter Website',
      price: '$2,999',
      duration: 'one-time',
      description: 'Perfect for small businesses and startups',
      features: [
        'Up to 5 pages',
        'Responsive design',
        'Basic SEO setup',
        'Contact form',
        'Social media integration',
        'Google Analytics',
        '1 month support',
        '2 rounds of revisions'
      ],
      highlighted: false,
      cta: 'Get Started',
      popular: false
    },
    {
      name: 'Professional Website',
      price: '$6,999',
      duration: 'one-time',
      description: 'Ideal for growing businesses',
      features: [
        'Up to 15 pages',
        'Custom design',
        'Advanced SEO',
        'CMS integration',
        'Blog functionality',
        'Newsletter integration',
        '3 months support',
        'E-commerce ready',
        'Payment gateway setup',
        'Unlimited revisions'
      ],
      highlighted: true,
      cta: 'Most Popular',
      popular: true
    },
    {
      name: 'Enterprise Website',
      price: '$15,999+',
      duration: 'one-time',
      description: 'For large businesses with complex needs',
      features: [
        'Unlimited pages',
        'Custom functionality',
        'Full e-commerce',
        'Multi-language support',
        'Advanced integrations',
        'Custom CMS',
        '6 months support',
        'Dedicated project manager',
        'Priority support',
        'Performance optimization',
        'Security hardening'
      ],
      highlighted: false,
      cta: 'Contact Us',
      popular: false
    }
  ],
  'mobile-app': [
    {
      name: 'MVP App',
      price: '$15,000',
      duration: 'one-time',
      description: 'Launch your idea quickly',
      features: [
        'Single platform (iOS or Android)',
        'Up to 10 screens',
        'Basic features',
        'User authentication',
        'Push notifications',
        'Analytics integration',
        '3 months support'
      ],
      highlighted: false,
      cta: 'Get Started',
      popular: false
    },
    {
      name: 'Professional App',
      price: '$35,000',
      duration: 'one-time',
      description: 'Full-featured mobile solution',
      features: [
        'iOS & Android (Cross-platform)',
        'Up to 25 screens',
        'Advanced features',
        'Backend development',
        'API integrations',
        'In-app purchases',
        'Admin dashboard',
        '6 months support'
      ],
      highlighted: true,
      cta: 'Most Popular',
      popular: true
    },
    {
      name: 'Enterprise App',
      price: '$75,000+',
      duration: 'one-time',
      description: 'Complex enterprise applications',
      features: [
        'Native iOS & Android',
        'Unlimited screens',
        'Custom backend',
        'Advanced security',
        'Offline functionality',
        'Real-time features',
        'Scalable architecture',
        '12 months support',
        'Dedicated team'
      ],
      highlighted: false,
      cta: 'Contact Us',
      popular: false
    }
  ],
  'digital-marketing': [
    {
      name: 'Starter',
      price: '$1,500',
      duration: '/month',
      description: 'Get started with digital marketing',
      features: [
        '2 social platforms',
        '12 posts per month',
        'Basic graphics',
        'Community management',
        'Monthly reporting',
        'Email support'
      ],
      highlighted: false,
      cta: 'Get Started',
      popular: false
    },
    {
      name: 'Growth',
      price: '$3,500',
      duration: '/month',
      description: 'Scale your online presence',
      features: [
        '4 social platforms',
        '20 posts per month',
        'Custom graphics & videos',
        'Paid ad management ($500)',
        'SEO optimization',
        'Bi-weekly reporting',
        'Dedicated account manager'
      ],
      highlighted: true,
      cta: 'Most Popular',
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$7,500',
      duration: '/month',
      description: 'Comprehensive marketing solution',
      features: [
        'All major platforms',
        '40+ posts per month',
        'Full content production',
        'Paid ad management ($2000+)',
        'Influencer campaigns',
        'Weekly reporting',
        'Strategy consultation',
        'Priority support'
      ],
      highlighted: false,
      cta: 'Contact Us',
      popular: false
    }
  ],
  'it-support': [
    {
      name: 'Basic',
      price: '$500',
      duration: '/month',
      description: 'Essential IT support',
      features: [
        'Up to 10 users',
        '8x5 support (business hours)',
        'Email & phone support',
        'Remote assistance',
        'Basic monitoring',
        'Monthly reports'
      ],
      highlighted: false,
      cta: 'Get Started',
      popular: false
    },
    {
      name: 'Standard',
      price: '$1,200',
      duration: '/month',
      description: 'Comprehensive IT management',
      features: [
        'Up to 25 users',
        '24/7 support',
        'Priority response',
        'Proactive monitoring',
        'On-site visits (2/month)',
        'Security management',
        'Backup & recovery'
      ],
      highlighted: true,
      cta: 'Most Popular',
      popular: true
    },
    {
      name: 'Premium',
      price: '$2,500',
      duration: '/month',
      description: 'Enterprise-level support',
      features: [
        'Up to 50 users',
        '24/7 priority support',
        'Dedicated account manager',
        'Unlimited support',
        'Advanced security',
        'Disaster recovery',
        'Strategic IT consulting'
      ],
      highlighted: false,
      cta: 'Contact Us',
      popular: false
    }
  ]
}

export const comparisonFeatures = [
  {
    category: 'Core Features',
    features: [
      { name: 'Project Planning & Strategy', starter: true, professional: true, enterprise: true },
      { name: 'Custom Design', starter: 'Basic', professional: true, enterprise: true },
      { name: 'Responsive Development', starter: true, professional: true, enterprise: true },
      { name: 'SEO Optimization', starter: 'Basic', professional: 'Advanced', enterprise: 'Full' },
      { name: 'Content Management System', starter: false, professional: true, enterprise: 'Custom' }
    ]
  },
  {
    category: 'Support & Maintenance',
    features: [
      { name: 'Technical Support Period', starter: '1 month', professional: '3 months', enterprise: '6 months' },
      { name: 'Priority Support', starter: false, professional: true, enterprise: true },
      { name: 'Dedicated Account Manager', starter: false, professional: false, enterprise: true },
      { name: 'Monthly Check-ins', starter: false, professional: true, enterprise: true },
      { name: 'Emergency Support (24/7)', starter: false, professional: false, enterprise: true }
    ]
  },
  {
    category: 'Advanced Features',
    features: [
      { name: 'E-commerce Functionality', starter: false, professional: 'Basic', enterprise: 'Full' },
      { name: 'API Integrations', starter: '1', professional: '3', enterprise: 'Unlimited' },
      { name: 'Multi-language Support', starter: false, professional: false, enterprise: true },
      { name: 'Advanced Analytics', starter: false, professional: true, enterprise: true },
      { name: 'Performance Optimization', starter: 'Basic', professional: 'Advanced', enterprise: 'Full' }
    ]
  }
]