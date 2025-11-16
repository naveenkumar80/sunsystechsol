'use client'

import { motion } from 'framer-motion'
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock,
  MessageCircle,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Youtube
} from 'lucide-react'

const contactMethods = [
  {
    icon: Phone,
    title: 'Phone',
    description: 'Mon-Fri from 8am to 5pm',
    value: '+1 (234) 567-890',
    link: 'tel:+1234567890',
    color: 'text-blue-500'
  },
  {
    icon: Mail,
    title: 'Email',
    description: "We'll respond within 24 hours",
    value: 'info@SunsysTechsol.com',
    link: 'mailto:info@SunsysTechsol.com',
    color: 'text-red-500'
  },
  {
    icon: MessageCircle,
    title: 'Live Chat',
    description: 'Chat with our team',
    value: 'Start Chat',
    link: '#',
    color: 'text-green-500'
  },
  {
    icon: MapPin,
    title: 'Office',
    description: 'Visit us in person',
    value: '123 Tech Street, Innovation City',
    link: 'https://maps.google.com',
    color: 'text-purple-500'
  },
]

const socialLinks = [
  { name: 'Facebook', icon: Facebook, href: 'https://facebook.com', color: 'hover:text-blue-600' },
  { name: 'Twitter', icon: Twitter, href: 'https://twitter.com', color: 'hover:text-sky-500' },
  { name: 'Instagram', icon: Instagram, href: 'https://instagram.com', color: 'hover:text-pink-600' },
  { name: 'LinkedIn', icon: Linkedin, href: 'https://linkedin.com', color: 'hover:text-blue-700' },
  { name: 'YouTube', icon: Youtube, href: 'https://youtube.com', color: 'hover:text-red-600' },
]

export default function ContactInfo() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6 }}
      className="space-y-8"
    >
      {/* Contact Methods */}
      <div>
        <h3 className="text-2xl font-bold mb-6">Other Ways to Reach Us</h3>
        <div className="space-y-4">
          {contactMethods.map((method, index) => (
            <motion.a
              key={method.title}
              href={method.link}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="block bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition-all duration-300 group"
            >
              <div className="flex items-start space-x-4">
                <div className={`w-12 h-12 rounded-lg bg-gray-100 flex items-center justify-center group-hover:scale-110 transition-transform ${method.color}`}>
                  <method.icon className="w-6 h-6" />
                </div>
                <div className="flex-1">
                  <h4 className="font-semibold text-gray-900 mb-1 group-hover:text-primary transition-colors">
                    {method.title}
                  </h4>
                  <p className="text-sm text-gray-600 mb-2">
                    {method.description}
                  </p>
                  <p className="text-gray-900 font-medium">
                    {method.value}
                  </p>
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>

      {/* Business Hours */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.5 }}
        className="bg-gradient-to-br from-primary to-accent rounded-xl shadow-xl p-6 text-white"
      >
        <div className="flex items-center space-x-3 mb-4">
          <Clock className="w-6 h-6" />
          <h4 className="font-semibold text-lg">Business Hours</h4>
        </div>
        <div className="space-y-2 text-sm">
          <div className="flex justify-between">
            <span>Monday - Friday:</span>
            <span className="font-semibold">8:00 AM - 6:00 PM</span>
          </div>
          <div className="flex justify-between">
            <span>Saturday:</span>
            <span className="font-semibold">9:00 AM - 4:00 PM</span>
          </div>
          <div className="flex justify-between">
            <span>Sunday:</span>
            <span className="font-semibold">Closed</span>
          </div>
        </div>
        <p className="text-xs mt-4 opacity-90">
          * Emergency support available 24/7 for premium clients
        </p>
      </motion.div>

      {/* Social Media */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.5 }}
        className="bg-white rounded-xl shadow-md p-6"
      >
        <h4 className="font-semibold text-lg mb-4">Follow Us</h4>
        <div className="flex items-center space-x-4">
          {socialLinks.map((social) => (
            <a
              key={social.name}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`w-10 h-10 rounded-lg bg-gray-100 flex items-center justify-center text-gray-600 ${social.color} transition-all duration-300 hover:scale-110`}
              aria-label={social.name}
            >
              <social.icon className="w-5 h-5" />
            </a>
          ))}
        </div>
        <p className="text-sm text-gray-600 mt-4">
          Stay updated with our latest projects, tips, and industry insights.
        </p>
      </motion.div>

      {/* FAQ Link */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7, duration: 0.5 }}
        className="bg-primary-light rounded-xl p-6 text-center"
      >
        <h4 className="font-semibold text-lg mb-2">Have Questions?</h4>
        <p className="text-gray-600 mb-4">
          Check out our FAQ page for quick answers to common questions.
        </p>
        <a
          href="/faq"
          className="inline-block px-6 py-2 bg-primary text-white rounded-lg font-semibold hover:bg-primary/90 transition-colors"
        >
          View FAQ
        </a>
      </motion.div>
    </motion.div>
  )
}