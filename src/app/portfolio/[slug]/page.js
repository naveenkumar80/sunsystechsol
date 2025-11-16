import { notFound } from 'next/navigation'
import PortfolioDetailHero from '@/components/portfolio/PortfolioDetailHero'
import PortfolioDetailOverview from '@/components/portfolio/PortfolioDetailOverview'
import PortfolioDetailChallenge from '@/components/portfolio/PortfolioDetailChallenge'
import PortfolioDetailResults from '@/components/portfolio/PortfolioDetailResults'
import PortfolioDetailFeatures from '@/components/portfolio/PortfolioDetailFeatures'
import PortfolioDetailTestimonial from '@/components/portfolio/PortfolioDetailTestimonial'
import PortfolioDetailCTA from '@/components/portfolio/PortfolioDetailCTA'
import { getPortfolioBySlug, portfolioData } from '@/lib/data/portfolio'

export async function generateStaticParams() {
  return portfolioData.map((project) => ({
    slug: project.slug,
  }))
}

export async function generateMetadata({ params }) {

    const { slug } =  await params
    const project = getPortfolioBySlug(slug)
  
  if (!project) {
    return {
      title: 'Project Not Found',
    }
  }

  return {
    title: `${project.title} | Portfolio | NexaTech Solutions`,
    description: project.shortDescription,
    keywords: [project.category, ...project.tags],
  }
}

export default async function PortfolioDetailPage({ params }) {

    const { slug } = await params
    const project = getPortfolioBySlug(slug)

  if (!project) {
    notFound()
  }

  return (
    <>
      <PortfolioDetailHero project={project} />
      <PortfolioDetailOverview project={project} />
      <PortfolioDetailChallenge project={project} />
      <PortfolioDetailResults project={project} />
      <PortfolioDetailFeatures project={project} />
      <PortfolioDetailTestimonial project={project} />
      <PortfolioDetailCTA project={project} />
    </>
  )
}