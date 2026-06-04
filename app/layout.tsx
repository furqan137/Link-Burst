import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'LinkBurst - The Ultimate Puzzle Game',
  description:
    'Experience infinite fun with LinkBurst. Connect colorful tiles, unlock boosters, and become a puzzle master!',

  icons: {
    icon: '/logo.png',
    shortcut: '/logo.png',
    apple: '/logo.png',
  },

  openGraph: {
    title: 'LinkBurst - The Ultimate Puzzle Game',
    description:
      'Experience infinite fun with LinkBurst. Connect colorful tiles, unlock boosters, and become a puzzle master!',
    images: ['/logo.png'],
  },

  twitter: {
    card: 'summary_large_image',
    images: ['/logo.png'],
  },
}

export const viewport: Viewport = {
  themeColor: '#a855f7',
  userScalable: true,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark">
      <body className="font-sans antialiased bg-background text-foreground">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}