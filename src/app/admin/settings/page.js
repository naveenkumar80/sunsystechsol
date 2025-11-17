'use client'

import ProtectedRoute from '@/components/admin/ProtectedRoute'

export default function AdminSettingsPage() {
  return (
    <ProtectedRoute>
      <div>
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Settings</h1>
        <p className="text-gray-600">Settings page coming soon...</p>
      </div>
    </ProtectedRoute>
  )
}