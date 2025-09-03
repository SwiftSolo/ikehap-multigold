import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { AppProvider } from '@/contexts/AppContext'
import PageTransition from '@/components/PageTransition'
import ServiceWorkerProvider from '@/components/ServiceWorkerProvider'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Ikehap Multigold Limited - Excellence Across Industries',
  description: 'A diversified conglomerate operating across multiple sectors including real estate, fashion retail, oil & gas, automotive, and transportation.',
  keywords: 'Ikehap Multigold, conglomerate, real estate, fashion, oil gas, automotive, transportation, Nigeria, business',
  robots: 'index, follow',
  openGraph: {
    title: 'Ikehap Multigold Limited',
    description: 'Excellence Across Industries, Innovation for Tomorrow',
    type: 'website',
    locale: 'en_US',
  },
}

export const viewport = {
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css"
          rel="stylesheet"
        />
      </head>
      <body className={inter.className}>
        <AppProvider>
          <ServiceWorkerProvider>
            <PageTransition>
              {children}
            </PageTransition>
          </ServiceWorkerProvider>
        </AppProvider>
      </body>
    </html>
  )
}