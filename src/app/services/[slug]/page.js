import { notFound } from 'next/navigation'
import ServiceDetailHero from '@/components/services/ServiceDetailHero'
import ServiceDetailContent from '@/components/services/ServiceDetailContent'
import ServiceDetailFeatures from '@/components/services/ServiceDetailFeatures'
import ServiceDetailPricing from '@/components/services/ServiceDetailPricing'
import ServiceDetailFAQ from '@/components/services/ServiceDetailFAQ'
import ServiceDetailCTA from '@/components/services/ServiceDetailCTA'
import { servicesData } from '@/lib/data/servicesData'

export async function generateStaticParams() {
  return Object.keys(servicesData).map((slug) => ({
    slug: slug,
  }))
}

export async function generateMetadata({ params }) {
  const { slug } =  await params
  const service = servicesData[slug]
  
  if (!service) {
    return {
      title: 'Service Not Found',
    }
  }

  return {
    title: `${service.title} | NexaTech Solutions`,
    description: service.description,
    keywords: service.keywords,
  }
}

export default async function ServiceDetailPage({ params }) {
  const { slug } = await params
  const service = servicesData[slug]

  if (!service) {
    notFound()
  }

  return (
    <>
      <ServiceDetailHero service={service} />
      <ServiceDetailContent service={service} />
      <ServiceDetailFeatures service={service} />
      <ServiceDetailPricing service={service} />
      <ServiceDetailFAQ service={service} />
      <ServiceDetailCTA service={service} />
    </>
  )
}