'use client'

import { motion } from 'framer-motion'
import { MessageCircle } from 'lucide-react'
import Image from 'next/image';

export default function WhatsAppButton() {
  const phoneNumber = '9105837321' // Replace with actual WhatsApp number
  const message = 'Hi! I would like to know more about your services.'

  const handleClick = () => {
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`
    window.open(url, '_blank')
  }

  return (
    <motion.button
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      onClick={handleClick}
      className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-2xl flex items-center justify-center transition-colors"
      aria-label="Chat on WhatsApp"
    >
     <Image
        src="/images/whatsapp.svg"
        alt="WhatsApp"
        width={28}
        height={28}
      /> 
    </motion.button>
  )
}