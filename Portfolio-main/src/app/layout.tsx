import type { Metadata, Viewport } from 'next'
import './globals.css'

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
}

export const metadata: Metadata = {
  title: 'Thennavan Karuppaiah - AI Researcher Portfolio',
  description: 'AI Researcher | Master\'s Graduate specializing in Machine Learning, RAG systems, and Data Engineering',
  keywords: 'AI researcher, machine learning, data science, RAG systems, LLM, Azure, Python, portfolio',
  authors: [{ name: 'Thennavan Karuppaiah' }],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://example.com',
    title: 'Thennavan Karuppaiah - AI Researcher',
    description: 'AI Researcher specializing in Machine Learning and Data Engineering',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}