'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, ChevronDown } from 'lucide-react'
import Image from "next/image";

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { 
    name: 'Services', 
    href: '/services',
    dropdown: [
      { name: 'Website Development', href: '/services/website-development' },
      { name: 'Mobile App Development', href: '/services/mobile-app-development' },
      { name: 'Social Media Marketing', href: '/services/social-media-marketing' },
      { name: 'SEO Optimization', href: '/services/seo-optimization' },
      { name: 'IT Support', href: '/services/it-support' },
      { name: 'Business Development', href: '/services/business-development' },
      { name: 'Consulting', href: '/services/consulting' }
      /*{ name: 'Network Solutions', href: '/services/network-solutions' },*/
    ]
  },
  { name: 'Portfolio', href: '/portfolio' },
  { name: 'Blog', href: '/blog' },
  { name: 'Contact', href: '/contact' },
]

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [openDropdown, setOpenDropdown] = useState(null)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled 
            ? 'bg-white shadow-lg' 
            : 'bg-transparent'
        }`}
      >
        <div className="container-custom">
          <div className="flex items-center justify-between h-20 px-4">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-2">
              
                <Image
                  src="/images/Gemini_Generated_Image_ybfwbvybfwbvybfw (1).png"
                  alt="SunsysTechsol Logo"
                  width={70}
                  height={70}
                  className="object-cover"
               />
            
              
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              {navigation.map((item) => (
                <div key={item.name} className="relative group">
                  {item.dropdown ? (
                    <>
                      <button
                        className={`flex items-center space-x-1 font-medium transition-colors ${
                          isScrolled 
                            ? 'text-gray-700 hover:text-primary' 
                            : 'text-white hover:text-primary-light'
                        }`}
                      >
                        <span>{item.name}</span>
                        <ChevronDown className="w-4 h-4" />
                      </button>
                      <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                        {item.dropdown.map((subItem) => (
                          <Link
                            key={subItem.name}
                            href={subItem.href}
                            className="block px-6 py-3 text-gray-700 hover:bg-primary-light hover:text-primary transition-colors first:rounded-t-lg last:rounded-b-lg"
                          >
                            {subItem.name}
                          </Link>
                        ))}
                      </div>
                    </>
                  ) : (
                    <Link
                      href={item.href}
                      className={`font-medium transition-colors ${
                        isScrolled 
                          ? 'text-gray-700 hover:text-primary' 
                          : 'text-white hover:text-primary-light'
                      }`}
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <div className="hidden lg:block">
              <Link href="/contact" className="btn-primary">
                Get Started
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2"
            >
              {isMobileMenuOpen ? (
                <X className={isScrolled ? 'text-gray-900' : 'text-white'} />
              ) : (
                <Menu className={isScrolled ? 'text-gray-900' : 'text-white'} />
              )}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'tween' }}
            className="fixed inset-y-0 right-0 z-40 w-full max-w-sm bg-white shadow-2xl lg:hidden overflow-y-auto"
          >
            <div className="flex flex-col h-full pt-24 px-6">
              {navigation.map((item) => (
                <div key={item.name} className="border-b border-gray-200 py-4">
                  {item.dropdown ? (
                    <div>
                      <button
                        onClick={() => setOpenDropdown(
                          openDropdown === item.name ? null : item.name
                        )}
                        className="flex items-center justify-between w-full text-gray-900 font-medium"
                      >
                        <span>{item.name}</span>
                        <ChevronDown
                          className={`w-5 h-5 transition-transform ${
                            openDropdown === item.name ? 'rotate-180' : ''
                          }`}
                        />
                      </button>
                      {openDropdown === item.name && (
                        <div className="mt-2 space-y-2 pl-4">
                          {item.dropdown.map((subItem) => (
                            <Link
                              key={subItem.name}
                              href={subItem.href}
                              className="block py-2 text-gray-600 hover:text-primary"
                              onClick={() => setIsMobileMenuOpen(false)}
                            >
                              {subItem.name}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : (
                    <Link
                      href={item.href}
                      className="block text-gray-900 font-medium"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}
              <div className="mt-6">
                <Link
                  href="/contact"
                  className="btn-primary w-full text-center block"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Get Started
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}