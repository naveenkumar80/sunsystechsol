'use client'

import ProtectedRoute from '@/components/admin/ProtectedRoute'

export default function AdminServicesPage() {
  return (
    <ProtectedRoute>
      <div>
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Services Management</h1>
        <p className="text-gray-600">Services management coming soon...</p>
      </div>
    </ProtectedRoute>
  )
}