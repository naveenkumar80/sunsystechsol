'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

export default function AboutStory() {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-2 bg-primary-light text-primary rounded-full text-sm font-semibold mb-4">
              Our Story
            </span>
            <h2 className="mb-6">From Startup to Industry Leader</h2>
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                Founded in 2015, NexaTech Solutions started with a simple mission: to help 
                businesses leverage technology for growth. What began as a small team of 
                developers has grown into a full-service IT agency serving clients across the globe.
              </p>
              <p>
                Over the past decade, we've completed 300+ projects, partnered with startups 
                to Fortune 500 companies, and built a reputation for delivering exceptional results. 
                Our success is built on three pillars: technical excellence, client-first approach, 
                and continuous innovation.
              </p>
              <p>
                Today, we're proud to be a trusted partner for businesses looking to navigate 
                the complex world of digital transformation. From custom software development 
                to comprehensive digital marketing, we bring expertise, creativity, and dedication 
                to every project.
              </p>
              <p className="text-primary font-semibold">
                "We don't just build technology—we build lasting partnerships that drive success."
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-br from-primary to-accent opacity-20"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center text-white">
                  <div className="text-6xl font-bold mb-4">10+</div>
                  <div className="text-2xl">Years of Excellence</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}