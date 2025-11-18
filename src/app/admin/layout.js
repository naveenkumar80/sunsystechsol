'use client'

import { AuthProvider } from '@/lib/context/AuthContext'
import AdminSidebar from '@/components/admin/AdminSidebar'
import AdminHeader from '@/components/admin/AdminHeader'
import { usePathname } from 'next/navigation'
import '../../app/globals.css'

export default function AdminLayout({ children }) {
  const pathname = usePathname()
  const isLoginPage = pathname === '/admin/login'

  if (isLoginPage) {
    return (
      <AuthProvider>
        <div className="min-h-screen bg-gray-100">
          {children}
        </div>
      </AuthProvider>
    )
  }

  return (
    <AuthProvider>
      <div className="flex h-screen bg-gray-100 overflow-hidden">
        {/* Sidebar - Fixed */}
        <AdminSidebar />

        {/* Main Content Area */}
        <div className="flex-1 flex flex-col overflow-hidden">
          {/* Header - Fixed */}
          <AdminHeader />

          {/* Scrollable Content */}
          <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-100">
            <div className="container mx-auto px-6 py-8">
              {children}
            </div>
          </main>
        </div>
      </div>
    </AuthProvider>
  )
}