'use client'

import ProtectedRoute from '@/components/admin/ProtectedRoute'

export default function AdminTestimonialsPage() {
  return (
    <ProtectedRoute>
      <div>
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Testimonials Management</h1>
        <p className="text-gray-600">Testimonials management coming soon...</p>
      </div>
    </ProtectedRoute>
  )
}