'use client'

import { usePathname } from 'next/navigation'
import Image from 'next/image'

import Link from 'next/link'
import { 
  LayoutDashboard, 
  Users, 
  Briefcase, 
  Smile,
  FileText, 
  Star,
  Settings,
  LogOut
} from 'lucide-react'
import { useAuth } from '@/lib/context/AuthContext'

const menuItems = [
  { 
    name: 'Dashboard', 
    href: '/admin/dashboard', 
    icon: LayoutDashboard 
  },
  { 
    name: 'Leads', 
    href: '/admin/leads', 
    icon: Users 
  },
  { 
    name: 'Services', 
    href: '/admin/services', 
    icon: Briefcase 
  },
  { 
    name: 'Portfolio', 
    href: '/admin/portfolio', 
    icon: Smile
  },
  { 
    name: 'Blog', 
    href: '/admin/blog', 
    icon: FileText 
  },
  { 
    name: 'Testimonials', 
    href: '/admin/testimonials', 
    icon: Star 
  },
  { 
    name: 'Settings', 
    href: '/admin/settings', 
    icon: Settings 
  }
]

export default function AdminSidebar() {
  const pathname = usePathname()
  const { logout } = useAuth()

  return (
    <div className="bg-gray-900 text-white w-64 flex-shrink-0">
      {/* Logo */}
      <div className="flex items-center justify-center h-20 border-b border-gray-800">
        <div className="flex items-center space-x-2">
            <span className="text-white font-bold text-xl">
              <Image
                  src="/images/Gemini_Generated_Image_ybfwbvybfwbvybfw (1).png"
                  alt="SunsysTechsol Logo"
                  width={70}
                  height={70}
                  className="object-cover"
              />
              <p className="text-xs text-gray-400">Admin Panel</p>
            </span>
        </div>
        
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-4 py-6 space-y-2">
        {menuItems.map((item) => {
          const Icon = item.icon
          const isActive = pathname === item.href
          
          return (
            <Link
              key={item.name}
              href={item.href}
              className={`flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors ${
                isActive
                  ? 'bg-primary text-white'
                  : 'text-gray-300 hover:bg-gray-800'
              }`}
            >
              <Icon className="w-5 h-5" />
              <span className="font-medium">{item.name}</span>
            </Link>
          )
        })}
      </nav>

      {/* Logout */}
      <div className="p-4 border-t border-gray-800">
        <button
          onClick={logout}
          className="flex items-center space-x-3 px-4 py-3 rounded-lg text-gray-300 hover:bg-gray-800 w-full transition-colors"
        >
          <LogOut className="w-5 h-5" />
          <span className="font-medium">Logout</span>
        </button>
      </div>
    </div>
  )
}