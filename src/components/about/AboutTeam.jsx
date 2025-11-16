'use client'

import { motion } from 'framer-motion'
import { Linkedin, Twitter, Mail } from 'lucide-react'
import SectionHeader from '@/components/shared/SectionHeader'

const team = [
  {
    name: 'John Anderson',
    role: 'CEO & Founder',
    bio: '15+ years in tech leadership, former VP at Fortune 500',
    avatar: '👨‍💼',
    linkedin: '#',
    twitter: '#',
    email: 'john@SunsysTechsol.com'
  },
  {
    name: 'Sarah Chen',
    role: 'CTO',
    bio: 'Full-stack expert, MIT graduate, 10+ years experience',
    avatar: '👩‍💻',
    linkedin: '#',
    twitter: '#',
    email: 'sarah@SunsysTechsol.com'
  },
  {
    name: 'Michael Rodriguez',
    role: 'Head of Design',
    bio: 'Award-winning designer, UX specialist',
    avatar: '👨‍🎨',
    linkedin: '#',
    twitter: '#',
    email: 'michael@SunsysTechsol.com'
  },
  {
    name: 'Emily Johnson',
    role: 'Marketing Director',
    bio: 'Digital marketing strategist, growth hacker',
    avatar: '👩‍💼',
    linkedin: '#',
    twitter: '#',
    email: 'emily@SunsysTechsol.com'
  },
  {
    name: 'David Park',
    role: 'Lead Developer',
    bio: 'Backend specialist, cloud architecture expert',
    avatar: '👨‍💻',
    linkedin: '#',
    twitter: '#',
    email: 'david@SunsysTechsol.com'
  },
  {
    name: 'Lisa Thompson',
    role: 'Project Manager',
    bio: 'Agile certified, 8+ years managing tech projects',
    avatar: '👩‍💼',
    linkedin: '#',
    twitter: '#',
    email: 'lisa@SunsysTechsol.com'
  }
]

export default function AboutTeam() {
  return (
    <section className="section-padding bg-gray-100">
      <div className="container-custom">
        <SectionHeader
          badge="Our Team"
          title="Meet the Experts Behind SunsysTechsol"
          subtitle="Talented professionals passionate about technology and your success"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {team.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group"
            >
              {/* Avatar */}
              <div className="h-48 bg-gradient-to-br from-primary to-accent flex items-center justify-center text-8xl group-hover:scale-105 transition-transform">
                {member.avatar}
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                <p className="text-primary font-semibold mb-3">{member.role}</p>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  {member.bio}
                </p>

                {/* Social Links */}
                <div className="flex items-center space-x-3">
                  <a
                    href={member.linkedin}
                    className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center text-gray-600 hover:bg-primary hover:text-white transition-colors"
                    aria-label="LinkedIn"
                  >
                    <Linkedin className="w-4 h-4" />
                  </a>
                  <a
                    href={member.twitter}
                    className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center text-gray-600 hover:bg-primary hover:text-white transition-colors"
                    aria-label="Twitter"
                  >
                    <Twitter className="w-4 h-4" />
                  </a>
                  <a
                    href={`mailto:${member.email}`}
                    className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center text-gray-600 hover:bg-primary hover:text-white transition-colors"
                    aria-label="Email"
                  >
                    <Mail className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}