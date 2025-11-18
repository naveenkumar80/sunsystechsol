import { Inter, Poppins } from 'next/font/google'
import './globals.css'
import LayoutWrapper from '@/components/layout/LayoutWrapper'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const poppins = Poppins({ 
  weight: ['600', '700', '800'],
  subsets: ['latin'],
  variable: '--font-poppins',
  display: 'swap',
})

export const metadata = {
  title: 'SunsysTechsol Solutions | IT Services & Digital Solutions',
  description: 'Leading IT agency offering website development, mobile apps, SEO, social media marketing, and comprehensive IT support services.',
  keywords: ['IT services', 'website development', 'mobile app development', 'SEO', 'digital marketing', 'IT support'],
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable}`}>
      <body>
        <LayoutWrapper>{children}</LayoutWrapper>
      </body>
    </html>
  )
}