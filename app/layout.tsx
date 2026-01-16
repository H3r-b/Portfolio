import './globals.css'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Herb Thoughts.',
  description: 'Personal portfolio, projects, and thoughts by Herb.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-[#0b0f1a] text-slate-100">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
