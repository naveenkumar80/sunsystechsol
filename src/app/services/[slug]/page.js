'use client'

import { useEffect, useState } from 'react'
import { notFound } from 'next/navigation'
import ServiceDetailHero from '@/components/services/ServiceDetailHero'
import ServiceDetailContent from '@/components/services/ServiceDetailContent'
import ServiceDetailFeatures from '@/components/services/ServiceDetailFeatures'
import ServiceDetailPricing from '@/components/services/ServiceDetailPricing'
import ServiceDetailFAQ from '@/components/services/ServiceDetailFAQ'
import ServiceDetailCTA from '@/components/services/ServiceDetailCTA'

export default function ServiceDetailPage({ params }) {
  const [service, setService] = useState(null)
  const [loading, setLoading] = useState(true)
  const [slug, setSlug] = useState(null)

  useEffect(() => {
    // Unwrap params
    const unwrapParams = async () => {
      const resolvedParams = await params
      setSlug(resolvedParams.slug)
    }
    unwrapParams()
  }, [params])

  useEffect(() => {
    if (slug) {
      fetchService()
    }
  }, [slug])

  const fetchService = async () => {
    try {
      const response = await fetch(`http://localhost:5000/api/services/${slug}`)
      const data = await response.json()
      
      if (data.success) {
        setService(data.data)
      } else {
        notFound()
      }
    } catch (error) {
      console.error('Error fetching service:', error)
      notFound()
    } finally {
      setLoading(false)
    }
  }

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
      </div>
    )
  }

  if (!service) {
    notFound()
  }

  // Transform service data to match component expectations
  const transformedService = {
    ...service,
    heroTitle: service.fullDescription || service.title,
    heroSubtitle: service.shortDescription,
    overview: {
      title: `Professional ${service.title} Services`,
      content: service.fullDescription,
      stats: [
        { value: '150+', label: 'Projects Delivered' },
        { value: '98%', label: 'Client Satisfaction' },
        { value: '100%', label: 'Quality Guaranteed' },
        { value: '24/7', label: 'Support Available' }
      ]
    },
    packages: service.pricing ? [
      {
        name: 'Starter',
        price: service.pricing.starter?.price || '$2,999',
        description: 'Perfect for small businesses',
        features: service.pricing.starter?.features || [],
        popular: false
      },
      {
        name: 'Professional',
        price: service.pricing.professional?.price || '$6,999',
        description: 'Ideal for growing businesses',
        features: service.pricing.professional?.features || [],
        popular: true
      },
      {
        name: 'Enterprise',
        price: service.pricing.enterprise?.price || '$15,999+',
        description: 'For large enterprises',
        features: service.pricing.enterprise?.features || [],
        popular: false
      }
    ] : [],
    faqs: [
      {
        question: 'How long does it take?',
        answer: 'Timeline varies based on project complexity. Contact us for a detailed estimate.'
      },
      {
        question: 'What is included?',
        answer: 'All packages include our quality guarantee and ongoing support.'
      }
    ]
  }

  return (
    <>
      <ServiceDetailHero service={transformedService} />
      <ServiceDetailContent service={transformedService} />
      {service.features && service.features.length > 0 && (
        <ServiceDetailFeatures service={transformedService} />
      )}
      {transformedService.packages.length > 0 && (
        <ServiceDetailPricing service={transformedService} />
      )}
      <ServiceDetailFAQ service={transformedService} />
      <ServiceDetailCTA service={transformedService} />
    </>
  )
}