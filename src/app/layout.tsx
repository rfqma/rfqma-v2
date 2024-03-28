import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Providers } from '../lib/providers/chakra-themes-provider'
import Header from '@/components/Layout/Header'
import Footer from '@/components/Layout/Footer'

const inter = Inter({
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  style: ['normal'],
  subsets: ['latin'],
  display: 'swap'
})

export const metadata: Metadata = {
  icons: {
    shortcut: '/apple-icon.png',
    apple: '/apple-icon.png?v=4',
    icon: '/favicon.ico?v=4'
  },
  metadataBase: new URL('https://rifqimaulana.xyz'),
  title: {
    template: '%s | Rifqi Maulana',
    default: 'Rifqi Maulana',
  },
  description: 'Rifqi Maulana Personal Portfolio Website',
  applicationName: 'Rifqi Maulana Portfolio Website',
  keywords: ['Rifqi Maulana', 'Portfolio Website'],
  authors: [{ name: 'Rifqi Maulana', url: 'https://github.com/rfqma' }],
  creator: 'Rifqi Maulana',
  publisher: 'Rifqi Maulana',
  alternates: {
    canonical: '/',
    languages: {
      'en-US': '/en-US'
    }
  },
  openGraph: {
    type: 'website',
    url: 'https://rifqimaulana.xyz',
    title: 'Rifqi Maulana',
    description: 'Rifqi Maulana Personal Portfolio Website',
    siteName: 'Rifqi Maulana Portfolio Website',
    images: [
      {
        url: `${process.env.WEBSITE_URL}/opengraphs/opengraph-image.png`,
        width: 1200,
        height: 630,
        alt: `${process.env.WEBSITE_URL}/opengraphs/opengraph-image.alt.txt`
      },
    ]
  },
  twitter: {
    card: 'summary_large_image',
    site: 'https://rifqimaulana.xyz',
    creator: '@rfqma',
    title: 'Rifqi Maulana',
    description: 'Rifqi Maulana Personal Portfolio Website',
    images: [
      {
        url: `${process.env.WEBSITE_URL}/opengraphs/twitter-image.png`,
        width: 1200,
        height: 630,
        alt: `${process.env.WEBSITE_URL}/opengraphs/twitter-image.alt.txt`
      },
    ]
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          {/* <ColorModeScript initialColorMode={theme.config.initialColorMode} /> */}
          <Header />
          <main>
            {children}
          </main>
          <Footer />
        </Providers>
      </body>
    </html>
  )
}
