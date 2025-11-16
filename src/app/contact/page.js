import ContactHero from '@/components/contact/ContactHero'
import ContactForm from '@/components/contact/ContactForm'
import ContactInfo from '@/components/contact/ContactInfo'
import ContactCTA from '@/components/contact/ContactCTA'

export const metadata = {
  title: 'Contact Us | SunsysTechsol Solutions',
  description: 'Get in touch with SunsysTechsol Solutions. Contact us for a free consultation on website development, mobile apps, SEO, and IT services.',
  keywords: ['contact', 'get in touch', 'free consultation', 'IT support', 'web development inquiry'],
}

export default function ContactPage() {
  return (
    <>
      <ContactHero />
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <ContactForm />
            <ContactInfo />
          </div>
        </div>
      </section>
      <ContactCTA />
    </>
  )
}