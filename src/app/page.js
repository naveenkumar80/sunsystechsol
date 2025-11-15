import Hero from '@/components/home/Hero'
import ServicesGrid from '@/components/home/ServicesGrid'
import WhyChooseUs from '@/components/home/WhyChooseUs'
import Testimonials from '@/components/home/Testimonials'
import FinalCTA from '@/components/home/FinalCTA'

export default function Home() {
  return (
    <>
      <Hero />
      <ServicesGrid />
      <WhyChooseUs />
      <Testimonials />
      <FinalCTA />
    </>
  )
}