import PortfolioHero from '@/components/portfolio/PortfolioHero'
import PortfolioGrid from '@/components/portfolio/PortfolioGrid'
import PortfolioCTA from '@/components/portfolio/PortfolioCTA'

export const metadata = {
  title: 'Our Portfolio | NexaTech Solutions',
  description: 'Explore our portfolio of successful web development, mobile app, and digital transformation projects. See how we help businesses achieve their goals.',
  keywords: ['portfolio', 'case studies', 'projects', 'web development portfolio', 'mobile app projects'],
}

export default function PortfolioPage() {
  return (
    <>
      <PortfolioHero />
      <PortfolioGrid />
      <PortfolioCTA />
    </>
  )
}