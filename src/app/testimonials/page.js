import TestimonialsHero from '@/components/testimonials/TestimonialsHero'
import TestimonialsGrid from '@/components/testimonials/TestimonialsGrid'
import TestimonialsCTA from '@/components/testimonials/TestimonialsCTA'
import TestimonialsStats from '@/components/testimonials/TestimonialsStats'

export const metadata = {
  title: 'Client Testimonials | SunsysTechsol Solutions',
  description: 'Read what our clients say about our IT services. Real reviews from businesses we\'ve helped with web development, mobile apps, and digital solutions.',
  keywords: ['testimonials', 'client reviews', 'customer feedback', 'success stories', 'client satisfaction'],
}

export default function TestimonialsPage() {
  return (
    <>
      <TestimonialsHero />
      <TestimonialsStats />
      <TestimonialsGrid />
      <TestimonialsCTA />
    </>
  )
}
