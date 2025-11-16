import PricingHero from '@/components/pricing/PricingHero'
import PricingTables from '@/components/pricing/PricingTables'
import PricingComparison from '@/components/pricing/PricingComparison'
import PricingFAQ from '@/components/pricing/PricingFAQ'
import PricingCTA from '@/components/pricing/PricingCTA'

export const metadata = {
  title: 'Pricing | NexaTech Solutions',
  description: 'Transparent pricing for all our IT services. Choose the perfect package for your business needs. No hidden fees, flexible plans.',
  keywords: ['pricing', 'IT services pricing', 'web development cost', 'mobile app pricing', 'packages'],
}

export default function PricingPage() {
  return (
    <>
      <PricingHero />
      <PricingTables />
      <PricingComparison />
      <PricingFAQ />
      <PricingCTA />
    </>
  )
}