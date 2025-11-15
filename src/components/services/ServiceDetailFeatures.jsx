'use client'

import { motion } from 'framer-motion'
import { 
  Code, Smartphone, Zap, Shield, Layers, Edit, TrendingUp, 
  Palette, Bell, Wifi, Lock, BarChart, Image, MessageSquare,
  Target, Users, Lightbulb, Search, Map, Cloud, DollarSign,
  Eye, Clock, Layout, FileText, Link, MapPin, Globe, Handshake
} from 'lucide-react'
import SectionHeader from '@/components/shared/SectionHeader'

const iconMap = {
  Code, Smartphone, Zap, Shield, Layers, Edit, TrendingUp,
  Palette, Bell, Wifi, Lock, BarChart, Image, MessageSquare,
  Target, Users, Lightbulb, Search, Map, Cloud, DollarSign,
  Eye, Clock, Layout, FileText, Link, MapPin, Globe, Handshake
}

export default function ServiceDetailFeatures({ service }) {
  return (
    <section className="section-padding bg-gray-100">
      <div className="container-custom">
        <SectionHeader
          badge="Features & Benefits"
          title="What Makes Our Service Stand Out"
          subtitle="Comprehensive solutions designed to deliver maximum value"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {service.features.map((feature, index) => {
            const Icon = iconMap[feature.icon] || Code
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="w-14 h-14 bg-primary-light rounded-lg flex items-center justify-center mb-4">
                  <Icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}