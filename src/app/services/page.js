import ServicesHero from '@/components/services/ServicesHero'
import ServicesGrid from '@/components/home/ServicesGrid'
import ServicesProcess from '@/components/services/ServicesProcess'
import ServicesCTA from '@/components/services/ServicesCTA'

export const metadata = {
  title: 'Our Services | SunsysTechsol Solutions',
  description: 'Comprehensive IT services including website development, mobile apps, SEO, social media marketing, IT support, and more.',
  keywords: ['IT services', 'web development', 'mobile apps', 'SEO', 'digital marketing', 'IT support'],
}

export default function ServicesPage() {
  return (
    <>
      <ServicesHero />
      <ServicesGrid />
      <ServicesProcess />
      <ServicesCTA />
    </>
  )
}