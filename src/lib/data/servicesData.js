export const servicesData = {
  'website-development': {
    title: 'Website Development',
    slug: 'website-development',
    description: 'Custom, responsive websites built with cutting-edge technologies. Fast, secure, and optimized for conversions.',
    icon: 'Code',
    heroTitle: 'Custom Website Development That Converts',
    heroSubtitle: 'Build powerful, responsive websites that engage your audience and drive business growth.',
    keywords: ['website development', 'web design', 'responsive websites', 'custom websites', 'e-commerce development'],
    
    overview: {
      title: 'Professional Website Development Services',
      content: 'Your website is often the first interaction customers have with your brand. We create stunning, high-performance websites that not only look beautiful but are optimized for conversions, SEO, and user experience. Whether you need a simple business website, complex e-commerce platform, or custom web application, our team brings expertise in the latest web technologies and design principles to deliver solutions that exceed expectations.',
      stats: [
        { value: '150+', label: 'Websites Delivered' },
        { value: '99.9%', label: 'Uptime Guaranteed' },
        { value: '3sec', label: 'Average Load Time' },
        { value: '100%', label: 'Mobile Responsive' }
      ]
    },

    features: [
      {
        title: 'Responsive Design',
        description: 'Your website looks and works perfectly on all devices - desktop, tablet, and mobile',
        icon: 'Smartphone'
      },
      {
        title: 'Lightning-Fast Performance',
        description: 'Optimized for speed with average load times under 3 seconds',
        icon: 'Zap'
      },
      {
        title: 'SEO-Optimized',
        description: 'Built with SEO best practices to rank higher in search engines',
        icon: 'TrendingUp'
      },
      {
        title: 'Secure & Reliable',
        description: 'SSL encryption, regular backups, and robust security measures',
        icon: 'Shield'
      },
      {
        title: 'Scalable Architecture',
        description: 'Built to grow with your business without performance issues',
        icon: 'Layers'
      },
      {
        title: 'Easy Content Management',
        description: 'User-friendly admin panel to update content without technical knowledge',
        icon: 'Edit'
      }
    ],

    packages: [
      {
        name: 'Starter',
        price: '$2,999',
        duration: 'one-time',
        description: 'Perfect for small businesses and startups',
        features: [
          'Up to 5 pages',
          'Responsive design',
          'Basic SEO setup',
          'Contact form',
          '1 month support',
          'Google Analytics integration'
        ],
        popular: false
      },
      {
        name: 'Professional',
        price: '$6,999',
        duration: 'one-time',
        description: 'Ideal for growing businesses',
        features: [
          'Up to 15 pages',
          'Custom design',
          'Advanced SEO',
          'CMS integration',
          'Blog functionality',
          '3 months support',
          'Social media integration',
          'Newsletter setup'
        ],
        popular: true
      },
      {
        name: 'Enterprise',
        price: '$15,999+',
        duration: 'one-time',
        description: 'For large businesses with complex needs',
        features: [
          'Unlimited pages',
          'Complex functionality',
          'E-commerce features',
          'Custom integrations',
          'Performance optimization',
          '6 months support',
          'Priority support',
          'Dedicated account manager'
        ],
        popular: false
      }
    ],

    faqs: [
      {
        question: 'How long does it take to build a website?',
        answer: 'Timeline varies based on complexity. A basic website takes 4-6 weeks, while complex web applications can take 3-6 months. We provide detailed timelines during the planning phase.'
      },
      {
        question: 'Do you provide website maintenance after launch?',
        answer: 'Yes! We offer ongoing maintenance packages that include updates, security monitoring, backups, and technical support.'
      },
      {
        question: 'Will my website be mobile-friendly?',
        answer: 'Absolutely. All our websites are built with a mobile-first approach and are fully responsive across all devices.'
      },
      {
        question: 'Can I update the website content myself?',
        answer: 'Yes. We build websites with user-friendly content management systems (CMS) and provide training so you can make updates easily.'
      },
      {
        question: 'What if I need changes after the website is launched?',
        answer: 'We offer post-launch support packages. Minor changes are often included in your initial support period, and we can provide quotes for larger modifications.'
      }
    ]
  },

  'mobile-app-development': {
    title: 'Mobile App Development',
    slug: 'mobile-app-development',
    description: 'Native and cross-platform mobile apps that deliver exceptional user experiences on iOS and Android.',
    icon: 'Smartphone',
    heroTitle: 'Build Mobile Apps Users Love',
    heroSubtitle: 'Create powerful mobile applications that engage users and drive business growth on iOS and Android.',
    keywords: ['mobile app development', 'iOS apps', 'Android apps', 'React Native', 'Flutter development'],
    
    overview: {
      title: 'Professional Mobile App Development',
      content: 'In a mobile-first world, having a powerful app is essential for business growth. We design and develop custom mobile applications that combine beautiful UI with seamless functionality. Our experienced team has delivered 100+ mobile apps across various industries, from startups to enterprise clients.',
      stats: [
        { value: '100+', label: 'Apps Launched' },
        { value: '5M+', label: 'Combined Downloads' },
        { value: '4.7+', label: 'Average App Rating' },
        { value: '100%', label: 'Client Satisfaction' }
      ]
    },

    features: [
      {
        title: 'Native Performance',
        description: 'Blazing-fast apps built with platform-specific technologies',
        icon: 'Zap'
      },
      {
        title: 'Beautiful UI/UX',
        description: 'Intuitive designs that users love and understand instantly',
        icon: 'Palette'
      },
      {
        title: 'Push Notifications',
        description: 'Engage users with timely, personalized notifications',
        icon: 'Bell'
      },
      {
        title: 'Offline Functionality',
        description: 'Core features work even without internet connection',
        icon: 'Wifi'
      },
      {
        title: 'Secure Authentication',
        description: 'Biometric login, OAuth, and secure user management',
        icon: 'Lock'
      },
      {
        title: 'Analytics Integration',
        description: 'Understand user behavior with built-in analytics',
        icon: 'BarChart'
      }
    ],

    packages: [
      {
        name: 'Starter App',
        price: '$15,000',
        duration: 'one-time',
        description: 'Perfect for MVPs and simple apps',
        features: [
          'Single platform (iOS or Android)',
          'Up to 10 screens',
          'Basic features',
          'User authentication',
          '3 months support',
          'App store submission'
        ],
        popular: false
      },
      {
        name: 'Professional App',
        price: '$35,000',
        duration: 'one-time',
        description: 'Ideal for established businesses',
        features: [
          'Both iOS & Android (cross-platform)',
          'Up to 25 screens',
          'Advanced features',
          'Backend development',
          'Push notifications',
          '6 months support',
          'App store optimization'
        ],
        popular: true
      },
      {
        name: 'Enterprise App',
        price: '$75,000+',
        duration: 'one-time',
        description: 'For complex enterprise applications',
        features: [
          'Native iOS & Android',
          'Unlimited screens',
          'Complex functionality',
          'Custom backend',
          'Third-party integrations',
          '12 months support',
          'Dedicated team',
          'Priority support'
        ],
        popular: false
      }
    ],

    faqs: [
      {
        question: 'Should I build for iOS, Android, or both?',
        answer: 'It depends on your target audience. If budget allows, we recommend both platforms. Otherwise, research where your users are and start there. Cross-platform development can be a cost-effective way to launch on both simultaneously.'
      },
      {
        question: 'How long does app development take?',
        answer: 'Simple apps: 2-3 months. Medium complexity: 4-6 months. Complex apps: 6-12+ months. Timeline depends on features, platforms, and design complexity.'
      },
      {
        question: 'What\'s the difference between native and cross-platform?',
        answer: 'Native apps (Swift/Kotlin) offer best performance and full access to device features but require separate codebases. Cross-platform (React Native/Flutter) uses one codebase for both platforms, reducing cost and time but with minor performance trade-offs.'
      },
      {
        question: 'Can you help with App Store submission?',
        answer: 'Absolutely. We handle the entire submission process for both Apple App Store and Google Play Store, including creating store listings and graphics.'
      },
      {
        question: 'Do you provide app maintenance?',
        answer: 'Yes! We offer maintenance packages that include bug fixes, OS updates, security patches, and minor improvements.'
      }
    ]
  },

  'seo-optimization': {
    title: 'SEO Optimization',
    slug: 'seo-optimization',
    description: 'Rank higher on Google, attract more customers, and dominate your industry with proven SEO strategies.',
    icon: 'TrendingUp',
    heroTitle: 'SEO Services That Drive Organic Growth',
    heroSubtitle: 'Dominate search rankings and attract qualified customers with data-driven SEO strategies.',
    keywords: ['SEO services', 'search engine optimization', 'local SEO', 'SEO agency', 'organic traffic'],
    
    overview: {
      title: 'Professional SEO Optimization Services',
      content: 'Search engine optimization isn\'t just about rankings—it\'s about attracting the right customers at the right time. Our data-driven SEO strategies help businesses increase organic visibility, drive qualified traffic, and boost conversions. We\'ve helped 150+ businesses achieve first-page rankings for competitive keywords.',
      stats: [
        { value: '150+', label: 'Businesses Ranked' },
        { value: '400%', label: 'Avg Traffic Increase' },
        { value: '500+', label: '#1 Rankings Achieved' },
        { value: '95%', label: 'Client Retention' }
      ]
    },

    features: [
      {
        title: 'Technical SEO',
        description: 'Site speed optimization, mobile-first indexing, and Core Web Vitals',
        icon: 'Code'
      },
      {
        title: 'On-Page SEO',
        description: 'Content optimization, meta tags, and internal linking',
        icon: 'FileText'
      },
      {
        title: 'Link Building',
        description: 'High-quality backlinks from authoritative websites',
        icon: 'Link'
      },
      {
        title: 'Local SEO',
        description: 'Google Business Profile optimization and local citations',
        icon: 'MapPin'
      },
      {
        title: 'Content Strategy',
        description: 'Keyword research and content creation that ranks',
        icon: 'Edit'
      },
      {
        title: 'Analytics & Reporting',
        description: 'Detailed monthly reports with actionable insights',
        icon: 'BarChart'
      }
    ],

    packages: [
      {
        name: 'Local SEO',
        price: '$1,000',
        duration: '/month',
        description: 'Perfect for local businesses',
        features: [
          'Up to 20 keywords',
          'Local optimization',
          'Google Business Profile',
          'Citation building',
          'Monthly reporting',
          '3-month minimum'
        ],
        popular: false
      },
      {
        name: 'National SEO',
        price: '$2,500',
        duration: '/month',
        description: 'Ideal for growing businesses',
        features: [
          'Up to 50 keywords',
          'Technical optimization',
          '4 blog posts/month',
          'Link building',
          'Competitor analysis',
          'Bi-weekly reporting',
          '6-month minimum'
        ],
        popular: true
      },
      {
        name: 'Enterprise SEO',
        price: '$5,000+',
        duration: '/month',
        description: 'For large enterprises',
        features: [
          'Unlimited keywords',
          'Full technical SEO',
          '8+ blog posts/month',
          'Aggressive link building',
          'Dedicated SEO manager',
          'Weekly reporting',
          'Custom contract'
        ],
        popular: false
      }
    ],

    faqs: [
      {
        question: 'How long does SEO take to show results?',
        answer: 'Typically 3-6 months for noticeable improvements, 6-12 months for significant results. SEO is a long-term strategy that builds momentum over time.'
      },
      {
        question: 'Can you guarantee #1 rankings?',
        answer: 'No reputable SEO agency can guarantee specific rankings—Google\'s algorithm has 200+ factors. We guarantee effort, transparency, and our best strategies to achieve top rankings.'
      },
      {
        question: 'What\'s the difference between SEO and SEM?',
        answer: 'SEO is organic (unpaid) optimization to rank in search results. SEM includes paid search advertising (Google Ads). SEO provides long-term value; SEM delivers immediate results.'
      },
      {
        question: 'Do you use black-hat techniques?',
        answer: 'Never. We use only white-hat, Google-approved techniques for sustainable, penalty-free results.'
      },
      {
        question: 'What happens if I stop SEO services?',
        answer: 'Your rankings will likely maintain for a while but gradually decline as competitors continue optimizing and Google\'s algorithm evolves.'
      }
    ]
  },

  'social-media-marketing': {
    title: 'Social Media Marketing',
    slug: 'social-media-marketing',
    description: 'Data-driven social strategies that build brand awareness and drive engagement across all platforms.',
    icon: 'Megaphone',
    heroTitle: 'Social Media Marketing That Drives Results',
    heroSubtitle: 'Build your brand, engage your audience, and drive conversions with strategic social media marketing.',
    keywords: ['social media marketing', 'social media management', 'Facebook ads', 'Instagram marketing', 'content creation'],
    
    overview: {
      title: 'Strategic Social Media Marketing Services',
      content: 'Social media is where your customers are. We create compelling content, manage your social presence, and run targeted campaigns that turn followers into customers. Our data-driven approach ensures every post, ad, and strategy delivers measurable ROI.',
      stats: [
        { value: '200+', label: 'Brands Managed' },
        { value: '50M+', label: 'Combined Reach' },
        { value: '300%', label: 'Avg Engagement Increase' },
        { value: '$5M+', label: 'Ad Spend Managed' }
      ]
    },

    features: [
      {
        title: 'Content Creation',
        description: 'Professional graphics, videos, and copy that stops the scroll',
        icon: 'Image'
      },
      {
        title: 'Social Management',
        description: 'Daily posting, monitoring, and community engagement',
        icon: 'MessageSquare'
      },
      {
        title: 'Paid Advertising',
        description: 'Targeted campaigns that maximize ROI across all platforms',
        icon: 'Target'
      },
      {
        title: 'Influencer Marketing',
        description: 'Connect with relevant influencers to amplify your reach',
        icon: 'Users'
      },
      {
        title: 'Analytics & Reporting',
        description: 'Detailed insights on performance and audience behavior',
        icon: 'BarChart'
      },
      {
        title: 'Strategy Development',
        description: 'Custom strategies aligned with your business goals',
        icon: 'Lightbulb'
      }
    ],

    packages: [
      {
        name: 'Starter',
        price: '$1,500',
        duration: '/month',
        description: 'Great for small businesses',
        features: [
          '2 platforms',
          '12 posts per month',
          'Basic graphics',
          'Community management',
          'Monthly reporting'
        ],
        popular: false
      },
      {
        name: 'Growth',
        price: '$3,500',
        duration: '/month',
        description: 'Perfect for growing brands',
        features: [
          '4 platforms',
          '20 posts per month',
          'Custom graphics & videos',
          'Advanced community management',
          '$500 ad spend management',
          'Bi-weekly reporting',
          'Influencer outreach'
        ],
        popular: true
      },
      {
        name: 'Enterprise',
        price: '$7,500',
        duration: '/month',
        description: 'For established brands',
        features: [
          'All major platforms',
          '40+ posts per month',
          'Full content production',
          'Dedicated account manager',
          '$2,000+ ad spend management',
          'Weekly reporting',
          'Influencer campaigns',
          'Crisis management'
        ],
        popular: false
      }
    ],

    faqs: [
      {
        question: 'How many posts should we publish per week?',
        answer: 'It varies by platform and goals. Generally: Instagram 4-7x/week, Facebook 3-5x/week, LinkedIn 2-3x/week, Twitter 1-2x/day. We\'ll create a custom plan based on your needs.'
      },
      {
        question: 'How long before we see results?',
        answer: 'Organic growth typically shows results in 3-6 months. Paid advertising can show results within weeks. Social media is a long-term strategy that builds momentum over time.'
      },
      {
        question: 'Do we need to be on every platform?',
        answer: 'No. We recommend focusing on platforms where your target audience is most active. Quality over quantity is key.'
      },
      {
        question: 'Can we approve content before it\'s posted?',
        answer: 'Absolutely. We provide content calendars for your review and approval before scheduling.'
      },
      {
        question: 'What if we get negative comments?',
        answer: 'We monitor your accounts and respond professionally to all feedback. We have crisis management protocols in place for any issues.'
      }
    ]
  },

  'it-support': {
    title: 'IT Support',
    slug: 'it-support',
    description: '24/7 technical support to keep your systems running smoothly. Fast response, reliable solutions.',
    icon: 'Headphones',
    heroTitle: 'Reliable IT Support That Keeps Your Business Running',
    heroSubtitle: '24/7 technical support, proactive monitoring, and rapid problem resolution for peace of mind.',
    keywords: ['IT support', 'technical support', 'help desk', 'network support', 'IT services'],
    overview: {
    title: 'Professional IT Support Services',
    content: 'Technology problems shouldn\'t slow down your business. Our expert IT support team provides fast, reliable solutions to keep your systems running smoothly. From help desk support to infrastructure management, we\'re your complete IT department with 99.9% uptime guarantees and average 15-minute response times.',
    stats: [
        { value: '99.9%', label: 'Uptime Maintained' },
        { value: '<15min', label: 'Avg Response Time' },
        { value: '24/7/365', label: 'Support Available' },
        { value: '97%', label: 'First-Call Resolution' }
    ]
    },

    features: [
    {
        title: '24/7 Availability',
        description: 'Round-the-clock support when you need it most',
        icon: 'Clock'
    },
    {
        title: 'Proactive Monitoring',
        description: 'We identify and fix issues before they impact your business',
        icon: 'Eye'
    },
    {
        title: 'Fast Response',
        description: 'Average 15-minute response for critical issues',
        icon: 'Zap'
    },
    {
        title: 'Security Management',
        description: 'Protect against cyber threats and data breaches',
        icon: 'Shield'
    },
    {
        title: 'Cloud Services',
        description: 'Microsoft 365, Google Workspace, and cloud backup management',
        icon: 'Cloud'
    },
    {
        title: 'Strategic Guidance',
        description: 'IT recommendations aligned with business goals',
        icon: 'Lightbulb'
    }
    ],

    packages: [
    {
        name: 'Basic Support',
        price: '$500',
        duration: '/month',
        description: 'Up to 10 users',
        features: [
        '8x5 support (business hours)',
        'Email & phone support',
        'Remote assistance',
        'Basic monitoring',
        'Monthly system health report'
        ],
        popular: false
    },
    {
        name: 'Standard Support',
        price: '$1,200',
        duration: '/month',
        description: 'Up to 25 users',
        features: [
        '24/7 support',
        'Priority response',
        'Proactive monitoring',
        'Quarterly IT strategy review',
        'Unlimited remote support',
        'On-site support (2 visits/month)'
        ],
        popular: true
    },
    {
        name: 'Premium Support',
        price: '$2,500',
        duration: '/month',
        description: 'Up to 50 users',
        features: [
        '24/7 priority support',
        'Dedicated account manager',
        'Advanced monitoring & alerts',
        'Monthly IT strategy meetings',
        'Unlimited remote & on-site support',
        'Cybersecurity management',
        'Backup & disaster recovery'
        ],
        popular: false
    }
    ],

    faqs: [
    {
        question: 'What\'s included in your response time guarantee?',
        answer: 'For Premium clients, we guarantee initial response within 15 minutes for critical issues. Standard clients receive response within 1 hour during business hours.'
    },
    {
        question: 'Do you provide on-site support?',
        answer: 'Yes! All Standard and above plans include on-site support visits. Additional visits can be purchased as needed.'
    },
    {
        question: 'Can you support our specialized industry software?',
        answer: 'We support most business applications. For highly specialized software, we partner with your software vendor to ensure proper support.'
    },
    {
        question: 'How quickly can you onboard our company?',
        answer: 'Typical onboarding takes 1-2 weeks depending on complexity. We can expedite for urgent needs.'
    },
    {
        question: 'Do you provide cybersecurity services?',
        answer: 'Yes! All plans include basic security. Premium plans include advanced threat monitoring and security management.'
    }
    ]
    },
    'business-development': {
    title: 'Business Development',
    slug: 'business-development',
    description: 'Strategic consulting to identify growth opportunities and streamline your business operations.',
    icon: 'BarChart3',
    heroTitle: 'Accelerate Growth with Strategic Business Development',
    heroSubtitle: 'Expert guidance to identify opportunities, optimize operations, and drive sustainable growth.',
    keywords: ['business development', 'business consulting', 'growth strategy', 'market expansion', 'business strategy'],
    overview: {
    title: 'Professional Business Development Services',
    content: 'We help businesses identify growth opportunities, optimize operations, and scale effectively. Our experienced consultants bring deep industry knowledge and proven methodologies to accelerate your business growth and improve profitability.',
    stats: [
        { value: '100+', label: 'Businesses Helped' },
        { value: '250%', label: 'Avg Revenue Growth' },
        { value: '40%', label: 'Cost Reduction' },
        { value: '95%', label: 'Success Rate' }
    ]
    },

    features: [
    {
        title: 'Market Analysis',
        description: 'Comprehensive research and competitive intelligence',
        icon: 'Search'
    },
    {
        title: 'Growth Strategy',
        description: 'Custom roadmaps for sustainable business growth',
        icon: 'TrendingUp'
    },
    {
        title: 'Partnership Development',
        description: 'Build strategic partnerships that drive growth',
        icon: 'Handshake'
    },
    {
        title: 'Sales Optimization',
        description: 'Streamline processes and increase conversion rates',
        icon: 'Target'
    },
    {
        title: 'Market Expansion',
        description: 'Enter new markets with confidence',
        icon: 'Globe'
    },
    {
        title: 'Performance Metrics',
        description: 'Track KPIs and optimize for success',
        icon: 'BarChart'
    }
    ],

    packages: [
    {
        name: 'Consultation',
        price: '$3,000',
        duration: '/month',
        description: 'Strategic guidance',
        features: [
        '4 hours consultation/month',
        'Market analysis',
        'Growth strategy document',
        'Quarterly review meetings',
        'Email support'
        ],
        popular: false
    },
    {
        name: 'Growth Package',
        price: '$7,500',
        duration: '/month',
        description: 'Active development',
        features: [
        '15 hours consultation/month',
        'Comprehensive market analysis',
        'Custom growth strategy',
        'Partnership development',
        'Monthly strategy sessions',
        'Implementation support'
        ],
        popular: true
    },
    {
        name: 'Enterprise',
        price: '$15,000+',
        duration: '/month',
        description: 'Full-service support',
        features: [
        'Unlimited consultation hours',
        'Dedicated business strategist',
        'Full market expansion support',
        'Weekly strategy meetings',
        'Implementation team',
        'Performance tracking dashboard',
        'Priority support'
        ],
        popular: false
    }
    ],

    faqs: [
    {
        question: 'How do you help businesses grow?',
        answer: 'We conduct thorough analysis of your business, market, and competition to identify growth opportunities. Then we develop and implement strategies tailored to your specific goals and resources.'
    },
    {
        question: 'What industries do you work with?',
        answer: 'We have experience across technology, healthcare, retail, finance, and professional services. Our methodologies adapt to any industry.'
    },
    {
        question: 'How long until we see results?',
        answer: 'Initial improvements typically appear within 3-6 months. Significant transformation usually takes 12-18 months depending on your starting point and goals.'
    },
    {
        question: 'Do you help with implementation?',
        answer: 'Yes! We don\'t just create strategies—we help implement them. Our Growth and Enterprise packages include hands-on implementation support.'
    },
    {
        question: 'Can you help us enter new markets?',
        answer: 'Absolutely. Market expansion is one of our core services. We conduct market research, develop entry strategies, and support the execution.'
    }
    ]
    },
    'consulting': {
        title: 'IT Consulting',
        slug: 'consulting',
        description: 'Expert guidance on technology adoption, digital transformation, and IT infrastructure planning.',
        icon: 'Lightbulb',
        heroTitle: 'Expert IT Consulting for Digital Transformation',
        heroSubtitle: 'Strategic technology guidance to optimize operations and drive innovation.',
        keywords: ['IT consulting', 'technology consulting', 'digital transformation', 'IT strategy', 'technology advisor'],
        overview: {
        title: 'Professional IT Consulting Services',
        content: 'Navigate the complex world of technology with expert guidance. Our IT consultants bring decades of experience to help you make informed decisions about technology investments, digital transformation initiatives, and IT infrastructure planning.',
        stats: [
            { value: '75+', label: 'Companies Advised' },
            { value: '30%', label: 'Cost Savings' },
            { value: '200%', label: 'ROI on IT Investment' },
            { value: '100%', label: 'Project Success' }
        ]
    },

    features: [
    {
        title: 'Technology Assessment',
        description: 'Comprehensive evaluation of your current IT infrastructure',
        icon: 'Search'
    },
    {
        title: 'Digital Strategy',
        description: 'Roadmaps for digital transformation and innovation',
        icon: 'Map'
    },
    {
        title: 'Vendor Selection',
        description: 'Expert guidance on choosing the right technology partners',
        icon: 'Users'
    },
    {
        title: 'Cloud Migration',
        description: 'Strategic planning for cloud adoption and migration',
        icon: 'Cloud'
    },
    {
        title: 'Security Consulting',
        description: 'Comprehensive security assessments and recommendations',
        icon: 'Shield'
    },
    {
        title: 'Cost Optimization',
        description: 'Identify opportunities to reduce IT costs',
        icon: 'DollarSign'
    }
    ],

    packages: [
    {
        name: 'Hourly',
        price: '$250',
        duration: '/hour',
        description: 'Flexible consulting',
        features: [
        'Pay as you go',
        'No minimum commitment',
        'Expert advice',
        'Email follow-up',
        'Documentation provided'
        ],
        popular: false
    },
    {
        name: 'Monthly Retainer',
        price: '$5,000',
        duration: '/month',
        description: 'Ongoing support',
        features: [
        '20 hours consultation/month',
        'Priority scheduling',
        'Strategic planning sessions',
        'Technology roadmap',
        'Monthly reports',
        'Implementation oversight'
        ],
        popular: true
    },
    {
        name: 'Project-Based',
        price: '$15,000+',
        duration: 'one-time',
        description: 'Complete projects',
        features: [
        'Full project scope',
        'Dedicated consultant team',
        'Comprehensive analysis',
        'Detailed recommendations',
        'Implementation plan',
        'Executive presentation',
        '90-day support'
        ],
        popular: false
    }
    ],

    faqs: [
    {
        question: 'What types of businesses do you consult for?',
        answer: 'We work with businesses of all sizes, from startups to enterprises, across various industries. Our expertise scales to your needs.'
    },
    {
        question: 'How is consulting different from managed services?',
        answer: 'Consulting focuses on strategic advice and planning, while managed services involve ongoing management of IT infrastructure. Many clients use both.'
    },
    {
        question: 'Can you help us plan a digital transformation?',
        answer: 'Yes! Digital transformation planning is one of our core services. We help you assess current state, define goals, and create actionable roadmaps.'
    },
    {
        question: 'Do you implement the recommendations?',
        answer: 'We can! While consulting focuses on strategy, we also offer implementation services or can oversee your team\'s implementation.'
    },
    {
        question: 'How do you charge for project-based work?',
        answer: 'After understanding your needs, we provide a fixed-price proposal with clear deliverables and timeline.'
    }
    ]
    }
    /*'network-solutions': {
        title: 'Network Solutions',
        slug: 'network-solutions',
        description: 'Secure, scalable network infrastructure designed for performance and reliability.',
        icon: 'Network',
        heroTitle: 'Enterprise Network Solutions Built for Performance',
        heroSubtitle: 'Design, implement, and manage secure network infrastructure that scales with your business.',
        keywords: ['network solutions', 'network infrastructure', 'network security', 'network design', 'IT networking'],
        overview: {
        title: 'Professional Network Solutions',
        content: 'Your network is the backbone of your business. We design, implement, and manage secure, high-performance network infrastructure that supports your business operations and growth. From small offices to enterprise deployments, our network experts deliver reliable solutions.',
        stats: [
            { value: '500+', label: 'Networks Deployed' },
            { value: '99.99%', label: 'Network Uptime' },
            { value: '50%', label: 'Performance Improvement' },
            { value: '100%', label: 'Security Compliance' }
        ]
    },

    features: [
    {
        title: 'Network Design',
        description: 'Custom network architecture for optimal performance',
        icon: 'Layout'
    },
    {
        title: 'Wireless Networks',
        description: 'Enterprise-grade WiFi with seamless coverage',
        icon: 'Wifi'
    },
    {
        title: 'Network Security',
        description: 'Firewalls, VPNs, and intrusion detection systems',
        icon: 'Shield'
    },
    {
        title: 'Network Monitoring',
        description: '24/7 monitoring and proactive issue resolution',
        icon: 'Eye'
    },
    {
        title: 'Cloud Networking',
        description: 'Hybrid cloud and multi-cloud network solutions',
        icon: 'Cloud'
    },
    {
        title: 'Performance Optimization',
        description: 'Maximize network speed and reliability',
        icon: 'Zap'
    }
    ],

    packages: [
    {
        name: 'Small Office',
        price: '$5,000',
        duration: 'one-time',
        description: 'Up to 25 users',
        features: [
        'Network design',
        'Router & switch installation',
        'WiFi access points (2-3)',
        'Basic firewall',
        'Network documentation',
        '1-month support'
        ],
        popular: false
    },
    {
        name: 'Medium Business',
        price: '$15,000',
        duration: 'one-time',
        description: 'Up to 100 users',
        features: [
        'Advanced network design',
        'Enterprise equipment',
        'WiFi access points (5-10)',
        'Advanced firewall & VPN',
        'Network monitoring',
        'Redundancy & backup',
        '3-months support'
        ],
        popular: true
    },
    {
        name: 'Enterprise',
        price: '$50,000+',
        duration: 'one-time',
        description: '100+ users',
        features: [
        'Complex network architecture',
        'Data center networking',
        'Unlimited access points',
        'Advanced security suite',
        '24/7 monitoring',
        'Load balancing',
        'Disaster recovery',
        '12-months support'
        ],
        popular: false
    }
    ],

    faqs: [
    {
        question: 'How long does network installation take?',
        answer: 'Small office: 1-2 weeks. Medium business: 2-4 weeks. Enterprise: 1-3 months. Timeline depends on complexity and existing infrastructure.'
    },
    {
        question: 'Do you provide ongoing network management?',
        answer: 'Yes! We offer managed network services that include monitoring, maintenance, updates, and support.'
    },
    {
        question: 'Can you upgrade our existing network?',
        answer: 'Absolutely. We assess your current infrastructure and provide recommendations for upgrades that improve performance and security.'
    },
    {
        question: 'What about network security?',
        answer: 'Security is built into every network we design. We implement firewalls, VPNs, intrusion detection, and follow security best practices.'
    },
    {
        question: 'Do you work with our existing equipment?',
        answer: 'Yes, when possible. We assess your current equipment and integrate it into the new design where it makes sense.'
    }
    ]
    },
   */ 
}