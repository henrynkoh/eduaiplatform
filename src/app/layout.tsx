import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'EduAI Platform',
  description: 'AI-powered educational automation platform integrating n8n, GitHub features, and MCP',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <main className="container mx-auto px-4 py-8">
          {children}
        </main>
        <footer className="bg-gray-100 py-6">
          <div className="container mx-auto px-4 text-center text-gray-600">
            <p>© 2023 EduAI Platform. All rights reserved.</p>
          </div>
        </footer>
      </body>
    </html>
  )
} 