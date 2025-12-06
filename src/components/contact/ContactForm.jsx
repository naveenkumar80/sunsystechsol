'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { motion } from 'framer-motion'
import { Send, CheckCircle, AlertCircle, Loader2 } from 'lucide-react'

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null)
  
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm()

  const onSubmit = async (data) => {
    setIsSubmitting(true)
    setSubmitStatus(null)

    try {
      const response = await fetch('http://localhost:5000/api/leads', {
        method: 'POST',
        headers: { 
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })

      const result = await response.json()

      if (response.ok && result.success) {
        setSubmitStatus('success')
        reset()
      } else {
        setSubmitStatus('error')
      }
    } catch (error) {
      console.error('Form submission error:', error)
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
      setTimeout(() => setSubmitStatus(null), 5000)
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="bg-white rounded-2xl shadow-xl p-8">
        <h2 className="text-3xl font-bold mb-2">Send us a Message</h2>
        <p className="text-gray-600 mb-8">
          Fill out the form below and we'll get back to you within 24 hours.
        </p>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          {/* Name */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Full Name *
            </label>
            <input
              {...register('name', { 
                required: 'Name is required',
                minLength: { value: 2, message: 'Name must be at least 2 characters' }
              })}
              type="text"
              className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all ${
                errors.name ? 'border-red-500' : 'border-gray-300'
              }`}
              placeholder="John Doe"
            />
            {errors.name && (
              <p className="mt-1 text-sm text-red-500 flex items-center space-x-1">
                <AlertCircle className="w-4 h-4" />
                <span>{errors.name.message}</span>
              </p>
            )}
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Email Address *
            </label>
            <input
              {...register('email', {
                required: 'Email is required',
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: 'Invalid email address'
                }
              })}
              type="email"
              className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all ${
                errors.email ? 'border-red-500' : 'border-gray-300'
              }`}
              placeholder="john@example.com"
            />
            {errors.email && (
              <p className="mt-1 text-sm text-red-500 flex items-center space-x-1">
                <AlertCircle className="w-4 h-4" />
                <span>{errors.email.message}</span>
              </p>
            )}
          </div>

          {/* Phone */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Phone Number
            </label>
            <input
              {...register('phone', {
                pattern: {
                  value: /^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/,
                  message: 'Invalid phone number'
                }
              })}
              type="tel"
              className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all ${
                errors.phone ? 'border-red-500' : 'border-gray-300'
              }`}
              placeholder="+1 (555) 000-0000"
            />
            {errors.phone && (
              <p className="mt-1 text-sm text-red-500 flex items-center space-x-1">
                <AlertCircle className="w-4 h-4" />
                <span>{errors.phone.message}</span>
              </p>
            )}
          </div>

          {/* Service */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Service Interested In
            </label>
            <select
              {...register('service')}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
            >
              <option value="">Select a service</option>
              <option value="website-development">Website Development</option>
              <option value="mobile-app">Mobile App Development</option>
              <option value="social-media">Social Media Marketing</option>
              <option value="seo">SEO Optimization</option>
              <option value="it-support">IT Support</option>
              <option value="business-dev">Business Development</option>
              <option value="consulting">Consulting</option>
              {/*  <option value="network">Network Solutions</option>    */}
              <option value="other">Other</option>
            </select>
          </div>

          {/* Budget */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Project Budget
            </label>
            <select
              {...register('budget')}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
            >
              <option value="">Select budget range</option>
              <option value="under-5k">Under ₹5,000</option>
              <option value="5k-10k">₹5,000 - ₹10,000</option>
              <option value="10k-25k">₹10,000 - ₹25,000</option>
              <option value="25k-50k">₹25,000 - ₹50,000</option>
              <option value="50k-plus">₹50,000+</option>
              <option value="not-sure">Not Sure Yet</option>
            </select>
          </div>

          {/* Message */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Project Details *
            </label>
            <textarea
              {...register('message', { 
                required: 'Message is required',
                minLength: { value: 10, message: 'Message must be at least 10 characters' }
              })}
              rows="5"
              className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all resize-none ${
                errors.message ? 'border-red-500' : 'border-gray-300'
              }`}
              placeholder="Tell us about your project, goals, and timeline..."
            />
            {errors.message && (
              <p className="mt-1 text-sm text-red-500 flex items-center space-x-1">
                <AlertCircle className="w-4 h-4" />
                <span>{errors.message.message}</span>
              </p>
            )}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full btn-primary flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? (
              <>
                <Loader2 className="w-5 h-5 animate-spin" />
                <span>Sending...</span>
              </>
            ) : (
              <>
                <span>Send Message</span>
                <Send className="w-5 h-5" />
              </>
            )}
          </button>

          {/* Status Messages */}
          {submitStatus === 'success' && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="p-4 bg-green-50 border border-green-200 rounded-lg flex items-start space-x-3 text-green-800"
            >
              <CheckCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold">Message sent successfully!</p>
                <p className="text-sm">We'll get back to you within 24 hours.</p>
              </div>
            </motion.div>
          )}

          {submitStatus === 'error' && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="p-4 bg-red-50 border border-red-200 rounded-lg flex items-start space-x-3 text-red-800"
            >
              <AlertCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold">Something went wrong!</p>
                <p className="text-sm">Please try again or contact us directly.</p>
              </div>
            </motion.div>
          )}
        </form>

        {/* Privacy Notice */}
        <p className="text-xs text-gray-500 mt-6 text-center">
          By submitting this form, you agree to our{' '}
          <a href="/privacy" className="text-primary hover:underline">Privacy Policy</a>
          {' '}and{' '}
          <a href="/terms" className="text-primary hover:underline">Terms of Service</a>.
        </p>
      </div>
    </motion.div>
  )
}