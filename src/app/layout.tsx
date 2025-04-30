import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

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
        <header className="bg-primary text-white py-4">
          <div className="container mx-auto px-4">
            <nav className="flex justify-between items-center">
              <h1 className="text-2xl font-bold">EduAI Platform</h1>
              <ul className="flex space-x-6">
                <li><a href="/" className="hover:underline">Home</a></li>
                <li><a href="/courses" className="hover:underline">Courses</a></li>
                <li><a href="/workflows" className="hover:underline">Workflows</a></li>
                <li><a href="/profile" className="hover:underline">Profile</a></li>
              </ul>
            </nav>
          </div>
        </header>
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