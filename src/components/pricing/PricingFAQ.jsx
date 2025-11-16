'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import SectionHeader from '@/components/shared/SectionHeader'

const faqs = [
  {
    question: 'What payment methods do you accept?',
    answer: 'We accept all major credit cards, bank transfers, and for larger projects, we can arrange milestone-based payments. We also offer flexible payment plans for qualifying businesses.'
  },
  {
    question: 'Are there any hidden fees?',
    answer: 'Absolutely not. Our pricing is completely transparent. The price you see includes everything mentioned in the package. Any additional features or services will be discussed and quoted separately with your approval.'
  },
  {
    question: 'Can I upgrade or downgrade my plan?',
    answer: 'Yes! You can upgrade your plan at any time. For downgrades, we offer flexibility but recommend discussing with our team to ensure your needs are still met.'
  },
  {
    question: 'What happens after the support period ends?',
    answer: 'After your included support period, you can purchase extended support packages or pay for support on an as-needed basis. We also offer maintenance retainers for ongoing needs.'
  },
  {
    question: 'Do you offer refunds?',
    answer: 'We stand behind our work with a satisfaction guarantee. If you\'re not happy with our work during the development phase, we\'ll work with you to make it right. Refund policies are outlined in our service agreement.'
  },
  {
    question: 'Can I get a custom package?',
    answer: 'Absolutely! Our standard packages are starting points. We\'re happy to create a custom package that perfectly fits your needs and budget. Contact us for a personalized quote.'
  },
  {
    question: 'What\'s included in "support"?',
    answer: 'Support includes bug fixes, security updates, technical assistance, and minor adjustments. Major feature additions or redesigns are quoted separately.'
  },
  {
    question: 'How long does development take?',
    answer: 'Timeline varies by project complexity. Starter packages typically take 4-6 weeks, Professional 8-12 weeks, and Enterprise 12+ weeks. We provide detailed timelines during planning.'
  }
]

export default function PricingFAQ() {
  const [openIndex, setOpenIndex] = useState(null)

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <SectionHeader
          badge="FAQ"
          title="Frequently Asked Questions"
          subtitle="Everything you need to know about our pricing"
        />

        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05, duration: 0.5 }}
              className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-200"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-gray-50 transition-colors"
              >
                <span className="font-semibold text-lg pr-8">{faq.question}</span>
                <ChevronDown
                  className={`w-5 h-5 text-primary flex-shrink-0 transition-transform ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>
              
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0 }}
                    animate={{ height: 'auto' }}
                    exit={{ height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-5 text-gray-600 leading-relaxed">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}