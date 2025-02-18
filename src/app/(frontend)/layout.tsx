import type { Metadata } from 'next'
import { Analytics } from '@vercel/analytics/react'

import './globals.css'

export const metadata: Metadata = {
  title: 'Anakin Skywalker Pactores',
  description: 'Personal Portfolio of Anakin Skywalker Pactores',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className="bg-primary-950">
        {children}
        <Analytics />
      </body>
    </html>
  )
}
