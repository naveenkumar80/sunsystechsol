'use client'

import { useEffect, useState } from 'react'
import PortfolioHero from '@/components/portfolio/PortfolioHero'
import PortfolioGrid from '@/components/portfolio/PortfolioGrid'
import PortfolioCTA from '@/components/portfolio/PortfolioCTA'

export default function PortfolioPage() {
  const [portfolioData, setPortfolioData] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchPortfolio()
  }, [])

  const fetchPortfolio = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/portfolio')
      const data = await response.json()
      
      if (data.success) {
        setPortfolioData(data.data)
      }
    } catch (error) {
      console.error('Error fetching portfolio:', error)
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

  return (
    <>
      <PortfolioHero />
      <PortfolioGrid portfolioData={portfolioData} />
      <PortfolioCTA />
    </>
  )
}